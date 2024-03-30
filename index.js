module.exports = {
  extends: [
    '@nuxt/eslint-config',
    'plugin:tailwindcss/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  ignorePatterns: ['**/dist/*', '**/node_modules/*'],
  rules: {
    'import/order': 'error',
    'import/first': 'error',
    'import/no-unresolved': 'off',
    'no-console': 'warn',
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
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-unnecessary-arbitrary-value': 'off',
    'vue/block-order': [
      'error',
      {
        'order': [
          [
            'script',
            'template'
          ],
          'style'
        ]
      }
    ],
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/no-useless-mustaches': ['error', {
      'ignoreIncludesComment': false,
      'ignoreStringEscape': false
    }],
    'vue/valid-v-for': 'error',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 5,
      }
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    'array-bracket-newline': [
      'error',
      'consistent'
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
    'comma-dangle': [
      'off',
    ],
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
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
        overrides: {
          as: {
            after: false
          },
          static: {
            after: false
          },
          while: {
            after: true
          }
        }
      }
    ],
    'max-statements-per-line': [
      'error',
      {
        max: 1
      }
    ],
    'new-parens': [
      'error',
      'always'
    ],
    'no-dupe-else-if': [
      'error'
    ],
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
    'no-empty-pattern': [
      'error'
    ],
    'no-empty-static-block': [
      'error'
    ],
    'no-eq-null': [
      'error'
    ],
    'no-extra-semi': [
      'error'
    ],
    'no-irregular-whitespace': [
      'error',
      {
        skipComments: true,
        skipRegExps: true,
        skipStrings: true,
        skipTemplates: true
      }
    ],
    'no-loop-func': [
      'error'
    ],
    'no-multi-spaces': [
      'error'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2
      }
    ],
    'no-redeclare': [
      'error'
    ],
    'no-unexpected-multiline': [
      'error'
    ],
    'no-unneeded-ternary': [
      'error'
    ],
    'no-unreachable': [
      'error'
    ],
    'no-useless-concat': [
      'error'
    ],
    'no-useless-escape': [
      'error'
    ],
    'no-useless-rename': [
      'error'
    ],
    'no-useless-return': [
      'error'
    ],
    'no-var': [
      'error'
    ],
    'no-whitespace-before-property': [
      'error'
    ],
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
    'prefer-object-spread': [
      'error'
    ],
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
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never'
      }
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'yoda': [
      'error',
      'never'
    ]
  }
}
