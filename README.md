# qy-norm

个人项目规范


## git-cz

手动初始化

```shell
npm set-script prepare "husky install ./node_modules/qy-norm/.husky"
npm set-script cz "qy-cz"
npm run prepare
```

```json
"scripts": {
  "cz": "qy-cz",
  "prepare": "husky install qy-norm/.husky"
},
```

脚本初始化
