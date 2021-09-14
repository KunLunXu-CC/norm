/**
 * 读取 commitlint.config 配置文件
 * 1. 默认会先读取, 使用该依赖的 npm 项目下的配置文件
 * 2. 如果使用该依赖的 npm 项目下的未配置 commitlint.config 则读取当前依赖包内的配置
 */
import fs from 'fs';
import path from 'path';

// 1. 默认先读取, 使用该依赖的 npm 项目下的配置文件 commitlint.config.js
let configPath = path.resolve(process.env.PWD, './commitlint.config.js');

// 2. 如果项目未定义, 则取当前包内的配置
if (!fs.existsSync(configPath)) {
  configPath = new URL('../commitlint.config.js', import.meta.url).pathname;
}

// 3. 读取配置文件数据
const config = await import(configPath);

// 4. 导出
export default { configPath, ...(config?.default ?? {}) };
