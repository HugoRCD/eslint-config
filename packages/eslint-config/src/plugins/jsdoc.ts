import type { Linter } from 'eslint'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import { JSDocConfigOptions } from '../types'

/**
 * JSDoc configuration for ESLint.
 * @param {JSDocConfigOptions} options - Configuration options for JSDoc.
 * @returns {Linter.Config[]} - Array of ESLint configurations.
 */
export default function jsdoc(options?: JSDocConfigOptions): Linter.Config[] {
  // If options is a boolean, use an empty object
  const opts = typeof options === 'boolean' ? {} : options || {}

  return [
    {
      name: 'tooling/jsdoc',
      plugins: {
        jsdoc: jsdocPlugin,
      },
      rules: {
        'jsdoc/require-jsdoc': [
          opts.strict ? 'error' : 'off',
          {
            require: {
              FunctionDeclaration: true,
              MethodDefinition: true,
              ClassDeclaration: true,
              FunctionExpression: true,
              ArrowFunctionExpression: true,
            },
            contexts: [
              'FunctionDeclaration',
              'MethodDefinition:not([accessibility="private"])', // Optional: Exclude private methods
              'ClassDeclaration',
              'FunctionExpression',
              'ArrowFunctionExpression',
            ],
          },
        ],
        'jsdoc/check-access': 'warn',
        'jsdoc/check-param-names': 'warn',
        'jsdoc/check-property-names': 'warn',
        'jsdoc/check-types': 'warn',
        'jsdoc/empty-tags': 'warn',
        'jsdoc/implements-on-classes': 'warn',
        'jsdoc/no-defaults': 'warn',
        'jsdoc/no-multi-asterisks': 'warn',
        'jsdoc/require-param-name': 'warn',
        'jsdoc/require-property': 'warn',
        'jsdoc/require-property-description': 'warn',
        'jsdoc/require-property-name': 'warn',
        'jsdoc/require-returns-check': 'warn',
        'jsdoc/require-returns-description': 'warn',
        'jsdoc/require-yields-check': 'warn',
        'jsdoc/check-alignment': 'error',
        'jsdoc/check-indentation': 'error',
        'jsdoc/check-tag-names': 'error',
        'jsdoc/no-undefined-types': 'error',
        'jsdoc/require-hyphen-before-param-description': 'error',
        'jsdoc/require-param': 'error',
        'jsdoc/require-param-description': 'error',
        'jsdoc/require-param-type': 'error',
        'jsdoc/require-returns': 'error',
        'jsdoc/require-returns-type': 'error',
      },
    },
  ]
}
