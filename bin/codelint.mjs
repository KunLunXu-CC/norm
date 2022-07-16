#!/usr/bin/env node
import { $, chalk } from 'zx';

const { exitCode } = await $`npx lint-staged -c ${new URL('../.lintstagedrc.json', import.meta.url).pathname}`;

if (exitCode !== 0) {
  console.log(chalk.red('代码校验错误, 请先进行修改!'));
  process.exit(1);
}

console.log(chalk.green('代码校验通过!'));
