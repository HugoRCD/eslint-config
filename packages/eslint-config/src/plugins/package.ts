import type { Linter } from 'eslint'
import packageJson from 'eslint-plugin-package-json/configs/recommended'
import { PackageJsonConfigOptions } from '../types'

export default function packageJsonPlugin(options?: PackageJsonConfigOptions): Linter.FlatConfig[] {
  return [
    {
      ...packageJson,
      rules: {
        'package-json/order-properties': options?.strict ? 'error' : 'off',
        'package-json/repository-shorthand': 'error',
        'package-json/sort-collections': options?.strict ? 'error' : 'off',
        'package-json/unique-dependencies': 'error',
        'package-json/valid-package-def': 'error',
        'package-json/valid-version': 'error',
      },
    },
  ]
}
