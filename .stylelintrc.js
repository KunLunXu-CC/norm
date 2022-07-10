// see: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules/list.md
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
  rules: {
    'max-nesting-depth': 3,  // 最大深度
    'selector-max-compound-selectors': 4, // 选择器最大个数 div .bar[data-val] > a.baz + .boom > #lorem {}
    'order/properties-alphabetical-order': null, // 关闭属性排序
    "declaration-empty-line-before": null,  // 属性间禁止空行
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global', 'local'],  // 允许使用 :global :local
    }],
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['global', 'local'], // 允许使用 :global :local
    }],
    'selector-no-qualifying-type': false,
  },
  // 忽略文件
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx']
}
