import pluginPnpm from 'eslint-plugin-pnpm'
import yamlParser from 'yaml-eslint-parser'
import jsoncParser from 'jsonc-eslint-parser'
import type { Linter } from 'eslint'
import type { PnpmConfigOptions } from '../types'

export default function pnpm(options?: PnpmConfigOptions): Linter.Config[] {
  const opts = typeof options === 'boolean' ? {} : options || {}

  return [
    {
      files: [
        'package.json',
        '**/package.json',
      ],
      languageOptions: {
        parser: jsoncParser,
      },
      name: 'hrcd/pnpm/package-json',
      plugins: {
        pnpm: pluginPnpm,
      },
      rules: {
        'pnpm/json-enforce-catalog': opts.catalog ? 'error' : 'off',
        'pnpm/json-prefer-workspace-settings': 'error',
        'pnpm/json-valid-catalog': opts.catalog ? 'error' : 'off',
      },
    },
    {
      files: ['pnpm-workspace.yaml'],
      languageOptions: {
        parser: yamlParser,
      },
      name: 'hrcd/pnpm/pnpm-workspace-yaml',
      plugins: {
        pnpm: pluginPnpm,
      },
      rules: {
        'pnpm/yaml-no-duplicate-catalog-item': opts.catalog ? 'error' : 'off',
        'pnpm/yaml-no-unused-catalog-item': opts.catalog ? 'error' : 'off',
      },
    },
  ]
}
