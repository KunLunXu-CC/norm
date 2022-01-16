#!/usr/bin/env node
import inquirer from 'inquirer';
import config from '../utils/getCommitlintConfig.mjs';
import { Command } from 'commander';
import { $, chalk } from 'zx';

$.quote = (v) => v;

// 1. 添加命令参数
const program = new Command();
program.option('-a, --all', '添加当前目录下所有文件到暂存区(git add .)');
program.parse(process.argv);

// 2. 命令参数处理
const options = program.opts();
options.all && (await $`git add .`); // 如果: 执行 igc -a 或 igc --all 则会自动执行 git add .

// 3. 判断是否添加暂存文件
if ((await $`git diff HEAD --staged --quiet --exit-code`.exitCode) === 0) {
  console.log(
    chalk.red('尚未暂存以备提交的变更, 请使用 git add 添加暂存文件!'),
  );
  process.exit(1);
}

// 4. 交互式命令获取参数
const { option, message } = await inquirer.prompt([
  {
    type: 'list',
    name: 'option',
    message: '请选择 commit 类型\n',
    choices: config.types.map(({ emoji, value: type, desc }) => ({
      value: { emoji, type, desc },
      name: `${emoji} ${type}${''.padStart(10 - type.length, ' ')}${desc}`,
    })),
  },
  {
    type: 'input',
    name: 'message',
    validate: (v) => !!v || 'commit 信息必填喔',
    message: ({ option }) => (`请填写 commit 信息:\n ${option.type}: `),
  },
]);

// 5. git commit
$`git commit -m "${option.type}: ${option.emoji} ${message}"`.exitCode;
