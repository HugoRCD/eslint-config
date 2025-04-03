import type { Linter } from 'eslint'
import { GLOB_EXCLUDE } from '../utils/globs'

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
        ...GLOB_EXCLUDE,
      ],
    },
  ]
}
