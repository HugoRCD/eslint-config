import nuxtPlugin from '@nuxt/eslint-plugin'
import type { Linter } from 'eslint'

export default function nuxt(): Linter.Config[] {
  return [
    {
      name: 'nuxt/rules',
      plugins: {
        nuxt: nuxtPlugin,
      },
      rules: {
        'nuxt/prefer-import-meta': 'error',
      },
    }
  ] as Linter.Config[]
}
