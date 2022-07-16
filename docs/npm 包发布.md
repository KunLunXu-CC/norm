# 脚本工具库

## npm 包发布

- 发布包

```shell
# 1. 切换官方源头
npm config set registry https://registry.npmjs.org

# 2. 登录 npm
npm login

# 3. 发布包
npm publish --access public

# 4. 如果需要则切换回淘宝源
npm config set registry https://registry.npm.taobao.org/
```

## 依赖包更新 

> 参考: https://zhuanlan.zhihu.com/p/114265412

```shell
npm install -g npm-check
npm-check -u
```
