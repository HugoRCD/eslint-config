// @ts-expect-error missing types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import pluginVue from 'eslint-plugin-vue'
import parserTs from '@typescript-eslint/parser'
import type { Linter } from 'eslint'

export default function vue(): Linter.FlatConfig[] {
  return [
    {
      name: 'vue/rules',
      plugins: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        vue: pluginVue as any,
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
      rules: {
        'nuxt/no-env-in-hooks': 'error',
      },
    }
  ] as Linter.FlatConfig[]
}
