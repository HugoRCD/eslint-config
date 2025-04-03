import yamlParser from 'yaml-eslint-parser'
import pluginYaml from 'eslint-plugin-yml'
import type { Linter } from 'eslint'
import type { YamlConfigOptions } from '../types'
import { GLOB_YAML } from '../utils/globs'

export default function yaml(options: YamlConfigOptions): Linter.Config[] {
  const opts = typeof options === 'boolean' ? {} : options || {}

  return [
    {
      name: 'hrcd/yaml/setup',
      plugins: {
        // @ts-expect-error this actually work
        yaml: pluginYaml,
      },
    },
    {
      files: [GLOB_YAML],
      languageOptions: {
        parser: yamlParser,
      },
      name: 'hrcd/yaml/rules',
      rules: {
        'style/spaced-comment': 'off',
        'yaml/block-mapping': 'error',
        'yaml/block-sequence': 'error',
        'yaml/no-empty-key': 'error',
        'yaml/no-empty-sequence-entry': 'error',
        'yaml/no-irregular-whitespace': 'error',
        'yaml/plain-scalar': 'error',
        'yaml/vue-custom-block/no-parsing-error': 'error',
        'yaml/block-mapping-question-indicator-newline': 'error',
        'yaml/block-sequence-hyphen-indicator-newline': 'error',
        'yaml/flow-mapping-curly-newline': 'error',
        'yaml/flow-mapping-curly-spacing': 'error',
        'yaml/flow-sequence-bracket-newline': 'error',
        'yaml/flow-sequence-bracket-spacing': 'error',
        'yaml/indent': ['error', 2],
        'yaml/key-spacing': 'error',
        'yaml/no-tab-indent': 'error',
        'yaml/quotes': ['error', { avoidEscape: true, prefer: 'single' }],
        'yaml/spaced-comment': 'error',
      },
    },
    {
      files: ['pnpm-workspace.yaml'],
      name: 'hrcd/yaml/pnpm-workspace',
      rules: {
        'yaml/sort-keys': [
          'error',
          {
            order: [
              'packages',
              'overrides',
              'patchedDependencies',
              'hoistPattern',
              'catalog',
              'catalogs',
              'allowedDeprecatedVersions',
              'allowNonAppliedPatches',
              'configDependencies',
              'ignoredBuiltDependencies',
              'ignoredOptionalDependencies',
              'neverBuiltDependencies',
              'onlyBuiltDependencies',
              'onlyBuiltDependenciesFile',
              'packageExtensions',
              'peerDependencyRules',
              'supportedArchitectures',
            ],
            pathPattern: '^$',
          },
          {
            order: { type: 'asc' },
            pathPattern: '.*',
          },
        ],
      },
    },
  ]
}
