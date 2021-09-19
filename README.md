# qy-norm

个人项目规范

校验 commit-msg 前也会先校验 eslint、stylelint
cz 也会事先校验 code

release 脚本自动生成 changelog tag, 并允许自动发布

## 初始化

1. 1 执行 `npx qy-norm` 并选择要配置内容

## 使用

### 1. eslint

```js
const path = require("path");

module.exports = {
  globals: {
    $console: true,
    GLOBAL_SERVICER: true,
    WS_SERVICER: true,
    PUBLICKEY: true,
  },
  extends: [path.resolve(__dirname, "./node_modules/qy-norm/.eslintrc.js")],
};
```

### 2. stylelintrc

```js
const path = require("path");

module.exports = {
  extends: [path.resolve(__dirname, "./node_modules/qy-norm/.stylelintrc.js")],
};
```

### 3. .vscode/setting.json 自动格式化配置

```json
{
  // -----------统一配置--------------
  "editor.formatOnSave": true, // 在保存时自动格式化
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true, // 根据 eslint 配置进行格式化, 需要安装 eslint 插件
    "source.fixAll.stylelint": true // 根据 eslint 配置进行格式化, 需要安装 stylelint 插件
  }
}
```

## TODO

[] eslint 所有规则校验、配置过一遍、同时需要验证 vscode 自动修复是否可用
[] eslint jsx 属性格式、引入配置
[] prettier
[] 日志颜色问题
