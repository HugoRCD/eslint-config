import type { Linter } from 'eslint'
import packageJson from 'eslint-plugin-package-json'
import { PackageJsonConfigOptions } from '../types'

/**
 * Package.json configuration for ESLint.
 * @param {PackageJsonConfigOptions} options - Configuration options for package.json linting.
 * @returns {Linter.Config[]} - Array of ESLint configurations.
 */
export default function packageJsonPlugin(options?: PackageJsonConfigOptions): Linter.Config[] {
  // If options is a boolean, use an empty object
  const opts = typeof options === 'boolean' ? {} : options || {}

  return [
    {
      ...packageJson.configs.recommended,
      rules: {
        'package-json/order-properties': opts.strict ? 'error' : 'off',
        'package-json/repository-shorthand': 'error',
        'package-json/sort-collections': opts.strict ? 'error' : 'off',
        'package-json/require-author': opts.strict ? 'error' : 'off',
        'package-json/unique-dependencies': 'error',
        'package-json/valid-package-def': 'error',
        'package-json/valid-version': 'off',
      },
    } as Linter.Config,
  ]
}
