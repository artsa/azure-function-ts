const js = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = [
  {
    files: ['**/*.ts', 'src/functions/*'],
    languageOptions: {
      globals: {
        browser: true,
        es2020: true,
      },
      parser: tseslint.parser,
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    ignores: ['dist', 'eslint.config.js'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/quotes': ['error', 'single'],
      '@typescript-eslint/no-extra-semi': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'require-await': 'warn',
      'no-debugger': 'error',
      'eqeqeq': 'error',
      'no-nested-ternary': 'error',
      'no-trailing-spaces': 'error',
      'computed-property-spacing': ['error', 'never'],
      'no-prototype-builtins': 'off'
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
];