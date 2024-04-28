// @ts-expect-error missing types
import pluginTailwindcss from 'eslint-plugin-tailwindcss'
import type { Linter } from 'eslint'
import * as parserVue from 'vue-eslint-parser'

export default function tailwindcss(): Linter.FlatConfig[] {
  return [
    {
      name: 'tailwindcss',
      files: ['**/*.vue'],
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          }
        }
      },
      plugins: {
        tailwindcss: pluginTailwindcss
      },
      rules: {
        'tailwindcss/classnames-order': 'error',
        'tailwindcss/no-contradicting-classname': 'error',
        'tailwindcss/enforces-shorthand': 'error',
        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/no-unnecessary-arbitrary-value': 'off',
      }
    }
  ]
}
