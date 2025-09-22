// import js from '@eslint/js';
// import globals from 'globals';
// import tseslint from 'typescript-eslint';
// import pluginVue from 'eslint-plugin-vue';
// import css from '@eslint/css';
// import { defineConfig } from 'eslint/config';

// export default defineConfig([
//   {
//     files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
//     plugins: { js },
//     extends: ['js/recommended'],
//     languageOptions: { globals: globals.browser },
//   },
//   tseslint.configs.recommended,
//   pluginVue.configs['flat/essential'],
//   {
//     files: ['**/*.vue'],
//     languageOptions: { parserOptions: { parser: tseslint.parser } },
//   },
//   {
//     files: ['**/*.css'],
//     plugins: { css },
//     language: 'css/css',
//     extends: ['css/recommended'],
//   },
// ]);

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // JS / TS / Vue
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // ESLint
      'no-var': 'error',
      'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
      // "no-console": import.meta.env.NODE_ENV === "production" ? "error" : "off",
      // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      'no-unexpected-multiline': 'error', // 禁止空余的多行
      'no-useless-escape': 'off', // 禁用不必要的转义字符
    },
  },

  // TypeScript
  tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
      '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
      '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
      '@typescript-eslint/semi': 'off', // 禁用分号
    },
  },

  // Vue
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
      'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
      'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
      'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    },
  },

  // CSS
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
]);
