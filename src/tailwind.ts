// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import pluginTailwindcss from 'eslint-plugin-tailwindcss'
import type { Linter } from 'eslint'

export default function tailwindcss(): Linter.FlatConfig[] {
  return [
    {
      name: 'tailwindcss/rules',
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
