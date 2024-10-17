// @ts-expect-error missing types
import pluginVue from 'eslint-plugin-vue'
import parserTs from '@typescript-eslint/parser'
import * as parserVue from 'vue-eslint-parser'
import type { Linter } from 'eslint'

export default function vue(): Linter.Config[] {
  return [
    {
      name: 'vue/setup',
      plugins: {
        vue: pluginVue,
      },
      languageOptions: {
        parserOptions: {
          ecmaVersion: 'latest',
          extraFileExtensions: ['.vue'],
          parser: parserTs,
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
        },
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          shallowReactive: 'readonly',
          shallowRef: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly',
        },
      },
    },
    {
      name: 'vue/rules',
      files: ['**/*.vue'],
      languageOptions: {
        parser: parserVue,
      },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...pluginVue.configs.base.rules,
        ...pluginVue.configs['vue3-essential'].rules,
        ...pluginVue.configs['vue3-strongly-recommended'].rules,
        ...pluginVue.configs['vue3-recommended'].rules,
        'no-undef': 'off',
        'vue/block-order': [
          'error', {
            'order': [
              'script',
              'template',
              'style'
            ]
          }
        ],
        'vue/no-useless-mustaches': [
          'error', {
            'ignoreIncludesComment': false,
            'ignoreStringEscape': false
          }
        ],
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        'vue/valid-v-for': 'error',
        'vue/html-closing-bracket-spacing': [
          'error', {
            'startTag': 'never',
            'endTag': 'never',
            'selfClosingTag': 'always'
          }
        ],
        'vue/no-multi-spaces': 'error',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/multi-word-component-names': 'off',
        'vue/require-default-prop': 'off',
        'vue/v-bind-style': [
          'error', 'shorthand', {
            sameNameShorthand: 'always'
          }
        ],
        'vue/multiline-html-element-content-newline': [
          'error', {
            ignoreWhenEmpty: true,
            ignores: ['pre', 'textarea'],
            allowEmptyLines: false
          }
        ],
        'vue/block-lang': ['error', { script: { lang: 'ts' } }],
        'vue/component-api-style': [
          'error',
          ['script-setup']
        ],
        'vue/no-ref-object-reactivity-loss': 'warn',
        'vue/max-attributes-per-line': ['error', { singleline: { max: 5 } }]
      },
    },
  ] as Linter.Config[]
}
