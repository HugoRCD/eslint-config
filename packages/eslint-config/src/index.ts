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
import typescript from './languages/typescript'

export * from './types/index'

/**
 * Provide type definitions for constructing ESLint flat config items.
 *
 * This function takes flat config item, or an array of them as rest arguments.
 * It also automatically resolves the promise if the config item is a promise.
 * @param {...ResolvableFlatConfig} configs - The flat config items to resolve.
 * @returns {FlatConfigComposer<Linter.Config>} - The array of resolved flat config items.
 */
export function defineFlatConfigs(
  ...configs: ResolvableFlatConfig[]
): FlatConfigComposer<Linter.Config> {
  return composer(...configs)
}

const defaultOptions: ESLintConfigOptions = {
  vue: {
    enabled: true
  },
  nuxt: {
    enabled: true
  },
  typescript: {
    enabled: true,
    vue: true,
    strict: false,
    any: false,
    consoleLog: true,
    caseCheck: true
  },
  features: {
    jsdoc: {
      enabled: false,
      strict: false
    },
    packageJson: {
      enabled: true,
      strict: false
    }
  },
}

/**
 * Create an array of ESLint flat configs, based on the given options.
 * Accepts appending user configs as rest arguments from the second argument.
 * @param {options} options - The ESLint options.
 * @param {userConfigs} userConfigs - The user configs to append.
 * @returns {FlatConfigComposer<Linter.Config>} - The array of ESLint flat configs.
 */
export function createConfig(options: ESLintConfigOptions = {}, ...userConfigs: ResolvableFlatConfig[]): FlatConfigComposer<Linter.Config> {
  const opts = defu(options, defaultOptions)

  const config = composer()

  config.append(gitignore({ strict: false }))

  config.append(ignores())
  config.append(imports())

  config.append(typescript(opts.typescript))

  if (opts.vue)
    config.append(vue())

  if (opts.nuxt)
    config.append(nuxt())

  if (opts.features?.jsdoc?.enabled)
    config.append(jsdoc(opts.features.jsdoc))

  if (opts.features?.packageJson?.enabled)
    config.append(packageJson(opts.features.packageJson))

  if (userConfigs.length > 0) {
    config.append(...userConfigs)
  }

  return config
}
