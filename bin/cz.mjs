#!/usr/bin/env node
import inquirer from 'inquirer';
import config from '../utils/getCommitlintConfig.mjs';
import { $, chalk } from 'zx';

// 1. 代码校验
import './codelint.mjs';

const TYPE_PLACEHOLDER_LENGTH = 10;
$.quote = (v) => v;

// 2. 判断是否添加暂存文件
if ((await $`git diff HEAD --staged --quiet --exit-code`.exitCode) === 0) {
  console.log(chalk.red('尚未暂存以备提交的变更, 请使用 git add 添加暂存文件!'));
  process.exit(1);
}

// 3. 交互式命令获取参数
const { option, message } = await inquirer.prompt([
  {
    type: 'list',
    name: 'option',
    message: "Select the type of change that you're committing",
    // filter: v => v.toLowerCase(),
    choices: config.types.map(({ emoji, value: type, desc }) => ({
      value: { emoji, type, desc },
      name: `${emoji} ${type}${''.padStart(TYPE_PLACEHOLDER_LENGTH - type.length, ' ')}${desc}`,
    })),
  },
  {
    type: 'input',
    name: 'message',
    message: 'Write a short, imperative mood description of the change',
    validate: (v) => !!v || 'Write a short',
  },
]);

// 4. git commit
$`git commit -m "${option.type}: ${option.emoji} ${message}"`.exitCode;
