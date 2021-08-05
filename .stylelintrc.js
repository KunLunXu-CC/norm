module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] } // 忽略 :global
    ]
  }
};
