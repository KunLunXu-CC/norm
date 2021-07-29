#!/usr/bin/env node
import config from '../utils/getCommitlintConfig.mjs';
import { $ } from 'zx'
try {
  // 执行 commitlint 命令: https://www.npmjs.com/package/@commitlint/cli
  if(await $`npx --no-install commitlint -g ${config.configPath} --edit ""`.exitCode !== 0) {
    process.exit(1);
  }
} catch (e) {}
