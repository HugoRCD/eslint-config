import type { ResolvableFlatConfig, FlatConfigComposer } from 'eslint-flat-config-utils'
import { composer } from 'eslint-flat-config-utils'
import gitignore from 'eslint-config-flat-gitignore'
import type { Linter } from 'eslint'
import defu from 'defu'
import { ESLintConfigOptions } from './types'
import nuxt from './languages/nuxt'
import vue from './languages/vue'
import jsdoc from './plugins/jsdoc'
import packageJson from './plugins/package'
import ignores from './plugins/ignores'
import imports from './plugins/import'
import pnpm from './plugins/pnpm'
import yaml from './plugins/yaml'
import typescript from './languages/typescript'

export * from './types/index'

/**
 * Provide type definitions for constructing ESLint flat config items.
 *
 * This function takes flat config items as rest arguments and resolves them.
 * It automatically resolves promises if any config item is a promise.
 * @param {...ResolvableFlatConfig} configs - The flat config items to resolve.
 * @returns {FlatConfigComposer<Linter.Config>} - The composer containing resolved flat config items.
 */
export function defineFlatConfigs(
  ...configs: ResolvableFlatConfig[]
): FlatConfigComposer<Linter.Config> {
  return composer(...configs)
}

/**
 * Default configuration options for ESLint.
 * These options can be overridden by the user.
 */
const defaultOptions: ESLintConfigOptions = {
  vue: true,
  nuxt: true,
  typescript: {
    vue: true,
    strict: false,
    any: false,
    consoleLog: true,
    caseCheck: true
  },
  jsdoc: false,
  packageJson: false,
  pnpm: false,
  yaml: true,
}

/**
 * Create an array of ESLint flat configs based on the given options.
 *
 * This function merges the provided options with default options and creates
 * a configuration that includes necessary plugins and rules for:
 * - TypeScript
 * - Vue
 * - Nuxt
 * - JSDoc (optional)
 * - Package.json validation
 *
 * User configs can be appended as additional arguments.
 *
 * @param {ESLintConfigOptions} options - Configuration options for ESLint.
 * @param {...ResolvableFlatConfig} userConfigs - Additional user configs to append.
 * @returns {FlatConfigComposer<Linter.Config>} - The composer containing all configurations.
 */
export function createConfig(options: ESLintConfigOptions = {}, ...userConfigs: ResolvableFlatConfig[]): FlatConfigComposer<Linter.Config> {
  const opts = defu(options, defaultOptions)

  const config = composer()

  config.append(gitignore({ strict: false }))

  config.append(ignores({ ignores: opts.ignores }))
  config.append(imports())

  // TypeScript config
  if (opts.typescript !== false) {
    const tsOptions = typeof opts.typescript === 'boolean' ? {} : opts.typescript
    if (opts.vue === false && tsOptions)
      tsOptions.vue = false
    config.append(typescript(tsOptions))
  }

  // Vue config
  if (opts.vue !== false) {
    config.append(vue())
  }

  // Nuxt config
  if (opts.nuxt !== false && opts.vue !== false) {
    config.append(nuxt())
  }

  // JSDoc config
  if (opts.jsdoc !== false) {
    const jsdocOptions = typeof opts.jsdoc === 'boolean' ? {} : opts.jsdoc || {}
    config.append(jsdoc(jsdocOptions))
  }

  // Package.json config
  if (opts.packageJson !== false) {
    const packageJsonOptions = typeof opts.packageJson === 'boolean' ? {} : opts.packageJson || {}
    config.append(packageJson(packageJsonOptions))
  }

  // Pnpm config
  if (opts.pnpm !== false) {
    const pnpmOptions = typeof opts.pnpm === 'boolean' ? {} : opts.pnpm || {}
    config.append(pnpm(pnpmOptions))
  }

  // Yaml config
  if (opts.yaml !== false) {
    const yamlOptions = typeof opts.yaml === 'boolean' ? {} : opts.yaml || {}
    config.append(yaml(yamlOptions))
  }

  if (userConfigs.length > 0) {
    config.append(...userConfigs)
  }

  return config
}
