#!/usr/bin/env node
import inquirer from 'inquirer';
import config from '../utils/getCommitlintConfig.mjs';
import { $ } from 'zx';

const TYPE_PLACEHOLDER_LENGTH = 10;

$.quote = v => v;

// 交互式命令获取参数
const { option, message } = await inquirer.prompt([
  {
    type: 'list',
    name: 'option',
    message: 'Select the type of change that you\'re committing',
    // filter: v => v.toLowerCase(),
    choices: config.types.map(({ emoji, value: type, desc }) => ( {
      value: { emoji, type, desc },
      name: `${emoji} ${type}${''.padStart(TYPE_PLACEHOLDER_LENGTH - type.length, ' ')}${desc}`,
    }))
  },
  {
    type: 'input',
    name: 'message',
    message: 'Write a short, imperative mood description of the change',
    validate: v => (!!v || 'Write a short'),
  }
]);

// git commit 
$`git commit -m "${option.type}: ${option.emoji} ${message}"`.exitCode;
