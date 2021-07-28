#!/usr/bin/env node
import { $ } from 'zx';

const option = process.argv[2];

switch (option) {
  case 'init' :
    // Edit package.json > prepare script and run it once
    $`npm set-script prepare "husky install qy-norm/.husky"`
    $`npm run prepare`
  
    break;
  default:
    console.log(`参数 ${option} 未定义!`);
}
