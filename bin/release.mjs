#!/usr/bin/env node
import inquirer from 'inquirer';
import { $ } from 'zx';
$.quote = (v) => v;

// 1. 交互式命令获取参数
const { releaseParams, publish } = await inquirer.prompt([
  {
    type: 'list',
    name: 'releaseParams',
    message: '选择 --release-as 值',
    choices: [
      { value: 'major', name: '100 - major' },
      { value: 'minor', name: '010 - minor' },
      { value: 'patch', name: '001 - patch' },
    ],
  },
  {
    type: 'confirm',
    name: 'publish',
    message: '是否推送至远程?',
  },
]);

// 2. 生成 changelog、tag
$`
  git fetch
  standard-version --release-as ${releaseParams}
  git push --follow-tags origin master
  ${publish ? 'npm publish --access public' : ''}
`.exitCode;
