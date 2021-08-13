#!/usr/bin/env node
/**
 * 1. 自动生成 tag 并生成 changelog
 * release [001 | 010 | 100]

 * 2. 允许自动发布
 * release [001 | 010 | 100] -p
 */
import { $, chalk } from 'zx';

$.quote = v => v;

// 获取 standard-version 参数
const option = {
  '100': 'major',
  '010': 'minor',
  '001': 'patch',
}[process.argv[2]];

if (!option) {
  console.log(chalk.red('参数错误, 可选参数: 100 | 010 | 001'));
  process.exit(0);
}

// 1. 自动生成 tag 并生成 changelog
$`
  git pull
  git fetch
  standard-version --release-as ${option}
  git push
`.exitCode;

// 2. 自动发布: 如果带有第二参数 -p 则会执行 npm publish --access public 发布 npm 包
process.argv[3] === '-p' && $`npm publish --access public`.exitCode;
