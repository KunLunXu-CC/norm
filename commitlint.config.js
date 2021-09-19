// commit 校验
const types = [
  {
    desc: '其他类型(无法定位 type)、或者上一个 commit 补充代码',
    emoji: '🤖',
    value: 'chore',
  },
  {
    desc: '新增需求',
    emoji: '🎸',
    value: 'feat',
  },
  {
    desc: 'BUG 修复',
    emoji: '🐛',
    value: 'fix',
  },
  {
    desc: '重大功能重构',
    emoji: '💡',
    value: 'refactor',
  },
  {
    desc: '代码格式变更(不是 CSS 样式)',
    emoji: '💄',
    value: 'style',
  },
  {
    desc: '提高代码性能的变更',
    emoji: '⚡️',
    value: 'perf',
  },
  {
    desc: '持续集成和部署相关的改动(脚本、打包配置文件……)',
    emoji: '🎡',
    value: 'ci',
  },
  {
    desc: '项目文档变更',
    emoji: '📝',
    value: 'docs',
  },
  {
    desc: '新增(更新)测试用例',
    emoji: '💍',
    value: 'test',
  },
];

module.exports = {
  types,
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', types.map((v) => v.value)],
  },
};
