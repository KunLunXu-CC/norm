# norm

昆仑虚团队项目规范

校验 commit-msg 前也会先校验 eslint、stylelint
cz 也会事先校验 code

release 脚本自动生成 changelog tag, 并允许自动发布

## 初始化

1. 1 执行 `npx klx-norm` 并选择要配置内容

## 使用

### 1. eslint

```diff
// .eslintrc.js
+ const path = require("path");

module.exports = {
+ extends: [path.resolve(__dirname, "./node_modules/@kunlunxu/norm/.eslintrc.js")],
};
```

### 2. stylelintrc

```diff
// .stylelintrc.js
+ const path = require("path");

module.exports = {
+ extends: [path.resolve(__dirname, "./node_modules/@kunlunxu/norm/.stylelintrc.js")],
};
```

### 3. .vscode/setting.json 自动格式化配置

```diff
// .vscode/settings.json
+ {
+   // -----------统一配置--------------
+   "editor.codeActionsOnSave": { // 代码自动格式配置
+     "source.fixAll.eslint": true, // 根据 eslint 配置进行格式化, 需要安装 eslint 插件
+     "source.fixAll.stylelint": true // 根据 eslint 配置进行格式化, 需要安装 stylelint 插件
+   }
+ }
```

## TODO

[] eslint 所有规则校验、配置过一遍、同时需要验证 vscode 自动修复是否可用
[] eslint jsx 属性格式、引入配置
[] prettier
[] 日志颜色问题
