#!/usr/bin/env node
import config from '../utils/getCommitlintConfig.mjs';
import { $ } from 'zx'

$.quote = v => v;

// 执行 commitlint 命令: https://www.npmjs.com/package/@commitlint/cli
$`npx --no-install commitlint -g ${config.configPath} --edit ""`.exitCode
