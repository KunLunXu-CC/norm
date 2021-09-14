// commit 校验
const types = [
  {
    desc: 'A code change that neither fixes a bug or adds a feature',
    emoji: '💡',
    value: 'refactor',
  },
  {
    desc: 'A new feature',
    emoji: '🎸',
    value: 'feat',
  },
  {
    desc: 'A bug fix',
    emoji: '🐛',
    value: 'fix',
  },
  {
    desc: 'A code change that improves performance',
    emoji: '⚡️',
    value: 'perf',
  },
  {
    desc: 'Build process or auxiliary tool changes',
    emoji: '🤖',
    value: 'chore',
  },
  {
    desc: 'CI related changes',
    emoji: '🎡',
    value: 'ci',
  },
  {
    desc: 'Documentation only changes',
    emoji: '📝',
    value: 'docs',
  },
  {
    desc: 'Create a release commit',
    emoji: '🏹',
    value: 'release',
  },
  {
    desc: 'Markup, white-space, formatting, missing semi-colons...',
    emoji: '💄',
    value: 'style',
  },
  {
    desc: 'Adding missing tests',
    emoji: '💍',
    value: 'test',
  },
];

module.exports = {
  types,
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [2, 'always', types.map((v) => v.value)],
  },
};
