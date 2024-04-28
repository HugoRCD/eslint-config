import parserTs from '@typescript-eslint/parser'
import pluginTs from '@typescript-eslint/eslint-plugin'
import type { Linter } from 'eslint'

type ESLintTypescriptOptions = {
  vue?: boolean
  /**
   * Whether to use strict mode (enable explicit return types and other strict rules)
   */
  strict?: boolean
}

export default function typescript(options?: ESLintTypescriptOptions): Linter.FlatConfig[] {
  return [
    {
      name: 'typescript/setup',
      plugins: {
        '@typescript-eslint': pluginTs,
      },
    },
    {
      name: 'typescript/rules',
      files: ['**/*.ts', options?.vue ? '**/*.vue' : ''],
      languageOptions: {
        parser: parserTs,
      },
      rules: {
        ...pluginTs.configs.recommended.rules,
        '@typescript-eslint/explicit-function-return-type': options?.strict ? 'error' : 'off',
        '@typescript-eslint/no-explicit-any': options?.strict ? 'error' : 'off',
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
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        'no-unused-vars': 'off',
      },
    },
  ] as Linter.FlatConfig[]
}
