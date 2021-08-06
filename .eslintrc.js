/* eslint-disable max-len */
module.exports = {
  // root: true,                // 作用的目录是根目录
  parser: 'babel-eslint',       //  Parsing error: Unexpected character '@'
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',       // 按照模块的方式解析
  },
  env: {
    node: true,                 // node 环境
    es6: true,                  // es6 环境
    browser: true,              // 开发环境配置表示可以使用浏览器的方法
  },
  globals: {                    // 自定义全局变量
    _: true,
    _DEV_: true,
    lodash: true,
  },
  plugins: ['react', 'import', 'jsdoc', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 0,         // 防止在React组件定义中丢失props验证:  'data' is missing in props validation
    'react/display-name': 0,       // 防止在React组件定义中丢失displayName: Component definition is missing display name

    // 个性化定制
    'indent': [2, 2],                                                 // 缩进: 2个空格
    'max-len': [2, { 'code': 100 }],                                  // 单行不超过 100
    'keyword-spacing': [2],                                           // 强制关键字周围空格的一致性
    'rest-spread-spacing': [2, 'always'],                             // 扩展运算符及其表达式之间要求有空格
    'comma-spacing': [2, { 'before': false, 'after': true }],         // 强制在逗号周围使用空格
    'switch-colon-spacing': [2, { 'after': true, 'before': false }],  // 强制在 switch 的冒号左右有空格

    'semi': [2, 'always'],                                            // 要求使用分号
    'semi-style': [2, 'last'],                                        // 强制分号处于句子末尾
    'no-extra-semi': 2,                                               // 禁止不必要的分号(使用多个分号)

    'no-extra-boolean-cast': 0,                                       // 禁止不必要的布尔转换
    'no-var': 2,                                                      // 禁止使用 var
    'space-infix-ops': 2,                                             // 要求中缀操作符周围有空格
    'eol-last': 2,                                                    // 文件结尾空一行
    'no-multiple-empty-lines': 2,                                     // 避免出现多个空行。 在文件末尾只允许空一行
    'padded-blocks': [2, 'never'],                                    // 不要故意留一些没必要的空白行
    'object-curly-spacing': [2, 'always'],                            // 花括号 {} 里加空格
    'array-bracket-spacing': 2,                                       // 方括号[]里不要加空格
    'space-in-parens': [2, 'never'],                                  // 圆括号里不要加空格
    'key-spacing': 2,                                                 // 在对象的属性中,  键值之间要有空格
    'no-trailing-spaces': 2,                                          // 行末不要空格

    'no-new-object': 2,                                               // 禁止使用 Object 构造函数: new Object()
    'object-shorthand': 2,                                            // 要求对象字面量简写语法, {fun(){}}, 该规则不标记对象字面量中的箭头函数

    'no-array-constructor': 2,                                        // 禁止使用 Array 构造函数
    'array-callback-return': 2,                                       // 强制数组方法的回调函数中有 return 语句
    'prefer-destructuring': [2, { 'object': true, 'array': true }],   // 优先使用数组和对象解构
    'quotes': [2, 'single'],                                          // 字符串使用要求使用单引号
    'prefer-template': 2,                                             // 建议使用模板字面量而非字符串连接
    'template-curly-spacing': [2, 'never'],                           // 禁止模板字符串中的嵌入表达式周围空格的使用
    'no-eval': 2,                                                     // 禁用 eval()
    'no-useless-escape': 2,                                           // 禁用不必要的转义
    'func-style': [2, 'expression'],                                  // 要求使用函数表达式而不是函数声明
    'no-loop-func': 2,                                                // 禁止循环中存在函数
    'prefer-rest-params': 2,                                          // 建议使用剩余参数代替 arguments
    'no-new-func': 2,                                                 // 禁用Function构造函数

    'space-before-blocks': [2, 'always'],                             // 要求语句块之前的空格
    'space-before-function-paren': [2, 'always'],                     // 要求函数圆括号之前有一个空格
    'no-param-reassign': [2, { 'props': true }],                      // 禁止对函数参数再赋值、禁止对参数对象修改属性
    'prefer-spread': 2,                                               // 建议使用扩展语法而非.apply()
    'prefer-arrow-callback': 2,                                       // 要求使用箭头函数作为回调
    'arrow-spacing': [2, { 'before': true, 'after': true }],          // 要求箭头函数的箭头之前或之后有空格
    'arrow-parens': [2, 'as-needed'],                                 // 箭头函数中: 在可以省略括号的地方强制不使用括号
    'arrow-body-style': [2, 'as-needed'],                             // 箭头函数中: 当大括号是可以省略的, 强制不使用它们
    'no-confusing-arrow': 2,                                          // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'implicit-arrow-linebreak': [2, 'beside'],                        // 禁止在箭头函数体之前出现换行

    // 箭头函数完
    'no-useless-constructor': 2,                                      // 禁用不必要的构造函数
    'no-dupe-class-members': 2,                                       // 不允许类成员中有重复的名称
    'no-duplicate-imports': 2,                                        // 禁止重复导入
    'import/prefer-default-export': 2,                                // 在只有一个导出的模块里, 用 export default
    'import/first': 2,                                                // 10.7 import 放在其他所有语句之前

    'spaced-comment': [2, 'always'],                                  // 注释前加一个空格
    'no-whitespace-before-property': 2,                               // 禁止属性前有空白
    'newline-per-chained-call': [2, { 'ignoreChainWithDepth': 2 }],   // 要求方法链中每个调用都有一个换行符
    'comma-style': [2, 'last'],                                       // 不要前置逗号
    'comma-dangle': [2, 'always-multiline'],                          // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时, 要求使用拖尾逗号；当在 同一行时, 禁止使用拖尾逗号。
    'no-new-wrappers': 2,                                             // 禁止对 String, Number 和 Boolean 使用 new 操作符
    'radix': [2, 'always'],                                           // 当使用parseInt()函数时要求使用第二参数
    // 'id-length': [1, 2],                                           // 强制标识符的最小长度为2
    'camelcase': [2],                                                 // 强制使用驼峰
    'new-cap': 2,                                                     // 要求构造函数首字母大写

    'eqeqeq': 2,                                                      // 要求使用 === 1==
    'no-case-declarations': 2,                                        // 禁止在 case 或 default 子句中出现词法声明
    'no-nested-ternary': 2,                                           // 禁止使用嵌套的三元表达式
    'no-unneeded-ternary': 2,                                         // 禁止可以表达为更简单结构的三元操作符
    'no-mixed-operators': 2,                                          // 禁止混合使用不同的操作符, 需要加()
    'nonblock-statement-body-position': [2, 'beside'],                // 强制单个语句禁止出现换行需要的话要加 {}
    'brace-style': 2,                                                 // 强制在代码块中使用一致的大括号风格
    'no-else-return': 2,                                              // 禁止在 else 前有 return

    'no-undef': 2,                                                    // 禁用未声明的变量
    'one-var': [2, 'never'],                                          // 要求每个作用域有多个变量声明时每个变量都需要独立的 const let 进行声明
    'prefer-const': 2,                                                // 建议使用const： 如果一个变量不会被重新赋值, 最好使用const进行声明
    'no-multi-assign': 2,                                             // 禁止连续赋值(a=b=c=1)
    'no-plusplus': 2,                                                 // 禁止使用 ++ --
    'no-unused-vars': 2,                                              // 禁止出现未使用过的变量
    'no-undef-init': 2,                                               // 不允许初始化变量值为 undefined
    'no-undefined': 2,                                                // 禁止将 undefined 作为标识符
    'dot-notation': 2,                                                // 要求尽可能使用点号, obj.xxx
  },
};
