import '@rushstack/eslint-patch/modern-module-resolution'
import type { ESLint } from 'eslint'

const config: ESLint.ConfigData = {
  parserOptions: {
    ecmaVersion: 'latest',
    parser: {
      js: 'espree',
      jsx: 'espree',
      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',
    },
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:tailwindcss/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'eslint:recommended',
  ],
  env: { node: true },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['**/dist/*', '**/node_modules/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts', '*.vue'],
      rules: {
        // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
        // does not work with type definitions.
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
    {
      files: ['*.vue'],
      rules: {
        'no-undef': 'off',
        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/no-unnecessary-arbitrary-value': 'off',
        'vue/block-order': [
          'error', {
            'order': [
              'script',
              'template',
              'style'
            ]
          }
        ],
        'vue/no-useless-mustaches': [
          'error', {
            'ignoreIncludesComment': false,
            'ignoreStringEscape': false
          }
        ],
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        'vue/valid-v-for': 'error',
        'vue/html-closing-bracket-spacing': [
          'error', {
            'startTag': 'never',
            'endTag': 'never',
            'selfClosingTag': 'always'
          }
        ],
        'vue/no-multi-spaces': 'error',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/multi-word-component-names': 'off',
        'vue/require-default-prop': 'off',
        'vue/v-bind-style': [
          'error', 'shorthand', {
            sameNameShorthand: 'always'
          }
        ],
        'vue/multiline-html-element-content-newline': [
          'error', {
            ignoreWhenEmpty: true,
            ignores: ['pre', 'textarea'],
            allowEmptyLines: false
          }
        ],
        'vue/block-lang': ['error', {script: {lang: 'ts'}}],
        'vue/component-api-style': [
          'error',
          ['script-setup']
        ],
        'vue/no-ref-object-reactivity-loss': 'warn',
        'vue/max-attributes-per-line': ['error', {singleline: { max: 5 } }]
      },
    },
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'import/order': 'error',
        'import/first': 'error',
        'import/no-unresolved': 'off',
        'no-console': 'warn',
        'no-undef': 'off',
        'func-name-matching': 'error',
        'no-empty-function': 'off',
        'eqeqeq': [
          'error',
          'always'
        ],
        'indent': [
          'error',
          2,
          {
            'ignoredNodes': ['TemplateLiteral'],
            'SwitchCase': 1,
            'flatTernaryExpressions': true
          }
        ],
        'array-bracket-newline': [
          'error',
          {
            multiline: true
          }
        ],
        'array-bracket-spacing': [
          'error',
          'never'
        ],
        'array-element-newline': [
          'error',
          'consistent'
        ],
        'arrow-spacing': [
          'error',
          {
            after: true,
            before: true
          }
        ],
        'block-spacing': [
          'error',
          'always'
        ],
        'brace-style': [
          'error',
          '1tbs'
        ],
        'comma-dangle': ['off',],
        'comma-spacing': [
          'error',
          {
            after: true,
            before: false
          }
        ],
        'eol-last': [
          'error',
          'always'
        ],
        'func-call-spacing': [
          'error',
          'never'
        ],
        'function-call-argument-newline': [
          'error',
          'consistent'
        ],
        'key-spacing': [
          'error',
          {
            afterColon: true,
            beforeColon: false,
            mode: 'strict'
          }
        ],
        'max-params': ['warn', 4],
        'keyword-spacing': [
          'error',
          {
            after: true,
            before: true
          }
        ],
        'new-parens': [
          'error',
          'always'
        ],
        'no-dupe-else-if': ['error'],
        'no-else-return': [
          'error',
          {
            allowElseIf: false
          }
        ],
        'no-empty': [
          'error',
          {
            allowEmptyCatch: false
          }
        ],
        'no-empty-pattern': ['error'],
        'no-empty-static-block': ['error'],
        'no-eq-null': ['error'],
        'no-extra-semi': ['error'],
        'no-irregular-whitespace': [
          'error',
          {
            skipComments: true,
            skipRegExps: true,
            skipStrings: true,
            skipTemplates: true
          }
        ],
        'no-loop-func': ['error'],
        'no-multi-spaces': ['error'],
        'no-multiple-empty-lines': [
          'error',
          {
            max: 2
          }
        ],
        'no-redeclare': ['error'],
        'no-unexpected-multiline': ['error'],
        'no-unneeded-ternary': ['error'],
        'no-unreachable': ['error'],
        'no-useless-concat': ['error'],
        'no-useless-escape': ['error'],
        'no-useless-rename': ['error'],
        'no-useless-return': ['error'],
        'no-var': ['error'],
        'no-whitespace-before-property': ['error'],
        'prefer-arrow-callback': [
          'error',
          {
            allowNamedFunctions: true,
            allowUnboundThis: false
          }
        ],
        'prefer-const': [
          'error',
          {
            destructuring: 'any',
            ignoreReadBeforeAssign: false
          }
        ],
        'prefer-object-spread': ['error'],
        'prefer-spread': 'error',
        'quotes': [
          'error',
          'single',
          {
            allowTemplateLiterals: true
          }
        ],
        'require-await': 'error',
        'semi': [
          'error',
          'never'
        ],
        'semi-spacing': [
          'error',
          {
            after: true,
            before: false
          }
        ],
        'space-before-blocks': [
          'error',
          'always'
        ],
        'space-before-function-paren': [
          'error',
          {
            'asyncArrow': 'always',
            'named': 'never',
            'anonymous': 'never'
          }
        ],
        'space-in-parens': [
          'error',
          'never'
        ],
        'yoda': [
          'error',
          'never'
        ],
        'max-statements-per-line': [
          'error',
          {
            max: 1
          }
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        /*'@typescript-eslint/explicit-function-return-type': 'error',*/
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        'no-unused-vars': 'off',
      },
    },
    {
      // Pages and layouts are required to have a single root element if transitions are enabled.
      files: ['**/pages/**/*.{js,ts,jsx,tsx,vue}', '**/layouts/**/*.{js,ts,jsx,tsx,vue}'],
      rules: { 'vue/no-multiple-template-root': 'error' },
    },
  ],
}

export default config
