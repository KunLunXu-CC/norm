module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
  rules: {
    'max-nesting-depth': 3,  // 最大深度
    'order/properties-alphabetical-order': null, // 关闭属性排序
    "declaration-empty-line-before": null,  // 属性间禁止空行
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global'],  // 允许使用 :global
    }],
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['global'], // 允许使用 :global
    }]
  },
}
