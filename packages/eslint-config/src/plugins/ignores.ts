import type { Linter } from 'eslint'

/**
 * Ignores configuration for ESLint.
 * @returns {Linter.Config[]} - Array of ESLint configurations.
 */
export default function ignores(): Linter.Config[] {
  return [
    {
      ignores: [
        '**/dist',
        '**/node_modules',
        '**/.nuxt',
        '**/.output',
        '**/.vercel',
      ],
    },
  ]
}
