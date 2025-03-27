import type { Linter } from 'eslint'
import packageJson from 'eslint-plugin-package-json'
import { PackageJsonConfigOptions } from '../types'

export default function packageJsonPlugin(options?: PackageJsonConfigOptions): Linter.Config[] {
  return [
    {
      ...packageJson.configs.recommended,
      rules: {
        'package-json/order-properties': options?.strict ? 'error' : 'off',
        'package-json/repository-shorthand': 'error',
        'package-json/sort-collections': options?.strict ? 'error' : 'off',
        'package-json/require-author': options?.strict ? 'error' : 'off',
        'package-json/unique-dependencies': 'error',
        'package-json/valid-package-def': 'error',
        'package-json/valid-version': 'off',
      },
    } as Linter.Config,
  ]
}
