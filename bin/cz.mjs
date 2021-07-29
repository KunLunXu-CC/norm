#!/usr/bin/env node
import inquirer from 'inquirer';
import shell from 'shelljs';

import { types } from '../commitlint.config.js'

const TYPE_PLACEHOLDER_LENGTH = 10;

// 交互式命令获取参数
const { type, message } = await inquirer.prompt([
  {
    type: 'list',
    name: 'type',
    message: 'Select the type of change that you\'re committing',
    filter: v => v.toLowerCase(),
    choices: types.map(({ emoji, value, desc }) => ( {
      value,
      name: `${emoji} ${value}${''.padStart(TYPE_PLACEHOLDER_LENGTH - value.length, ' ')}${desc}`,
    }))
  },
  {
    type: 'input',
    name: 'message',
    message: 'Write a short, imperative mood description of the change',
    validate: v => (!!v || 'Write a short'),
  }
]);

const emoji = types.find(v => v.value === type)?.emoji;

// 后面换成 zx
shell.exec(`git commit -m "${type}: ${emoji} ${message}"`);