#!/usr/bin/env node
import inquirer from 'inquirer';
import { $ } from 'zx';

$.quote = (v) => v;

// 配置列表
const setting = [
  {
    name: 'cz',
    exec: async () => {
      await $`npm set-script cz "qy-cz"`.exitCode;
    },
  },
  {
    name: 'release',
    exec: async () => {
      await $`npm set-script release "qy-release"`.exitCode;
    },
  },
  {
    name: 'commitlint',
    exec: async () => {
      // 1、2 安装 husky
      // 3 添加 commit-msg 钩子, 校验 code: eslint stylelint
      // 4 添加 commit-msg 钩子, 校验 commit 信息
      await $`
        npm set-script prepare "husky install"
        npm run prepare
        npx husky add .husky/commit-msg "npx qy-codelint # 代码校验(eslint、stylelint)"
        npx husky add .husky/commit-msg "npx qy-commitlint # commit message 校验(调用commitlint)"
      `.exitCode;
    },
  },
];

// 交互式命令获取参数
const { execs } = await inquirer.prompt([
  {
    name: 'execs',
    type: 'checkbox',
    message: 'select the features you want to add!',
    choices: setting.map(({ name, exec: value }) => ({ name, value })),
  },
]);

// 遍历执行: 同步是因为多个命令可能要同时操作一个文件, 存在冲突
for (const exec of execs) {
  await exec();
}
