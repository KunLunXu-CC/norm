#!/usr/bin/env node
import { $, chalk } from 'zx';

const lintCodes = [
  // eslint: https://cn.eslint.org/docs/user-guide/command-line-interface
  await $`npx eslint "**/*.{js,ts,jsx,tsx,mjs}"`.exitCode,
  // stylelint: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/usage/cli.md
  await $`npx stylelint --aei "**/*.{css,scss,sass,less}"`.exitCode,
];

if (lintCodes.some(exitCode => exitCode !== 0)) {
  console.log(chalk.red('代码校验错误, 请先进行修改!'));
  process.exit(1);
}
