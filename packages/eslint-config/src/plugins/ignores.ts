import type { Linter } from 'eslint'

/**
 * Ignores configuration for ESLint.
 * @returns {Linter.Config[]} - Array of ESLint configurations.
 */
export default function ignores(options: {
  ignores?: string[]
}): Linter.Config[] {
  return [
    {
      ignores: [
        ...(options.ignores || []),
        '**/dist',
        '**/node_modules',
        '**/.nuxt',
        '**/.output',
        '**/.vercel',
      ],
    },
  ]
}
