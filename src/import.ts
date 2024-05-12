import pluginImport from 'eslint-plugin-import-x'
import type { Linter } from 'eslint'

export default function imports(): Linter.FlatConfig[] {
  return [
    {
      name: 'nuxt/import/rules',
      plugins: {
        import: pluginImport as never,
      },
      rules: {
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/order': 'error',
        'import/newline-after-import': ['error', { count: 1 }]
      },
    },
  ]
}
