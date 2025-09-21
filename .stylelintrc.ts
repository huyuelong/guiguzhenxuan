/* eslint-env node */
// @see https://stylelint.bootcss.com/

import type { Config } from 'stylelint';

const config: Config = {
  extends: [
    'stylelint-config-standard', // 标准 CSS 规则
    'stylelint-config-html/vue', // Vue template 样式
    'stylelint-config-standard-scss', // SCSS 规则
    'stylelint-config-recommended-vue/scss', // Vue SCSS
    'stylelint-config-recess-order', // CSS 属性顺序
    'stylelint-config-prettier', // 与 Prettier 兼容
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  rules: {
    'value-keyword-case': null, // 使用 v-bind 不报错
    'no-descending-specificity': null,
    'function-url-quotes': 'always',
    'no-empty-source': null,
    'selector-class-pattern': null,
    'property-no-unknown': null,
    'block-opening-brace-space-before': 'always',
    'value-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'],
      },
    ],
  },
};

export default config;
