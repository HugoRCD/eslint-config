import type { ResolvableFlatConfig, FlatConfigComposer } from 'eslint-flat-config-utils'
import { composer } from 'eslint-flat-config-utils'
import gitignore from 'eslint-config-flat-gitignore'
import type { Linter } from 'eslint'
import defu from 'defu'
import { ESLintConfigOptions } from './types'
import nuxt from './languages/nuxt'
import vue from './languages/vue'
import tailwindcss from './plugins/tailwind'
import jsdoc from './plugins/jsdoc'
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
 * @returns {FlatConfigComposer<Linter.FlatConfig>} - The array of resolved flat config items.
 */
export function defineFlatConfigs(
  ...configs: ResolvableFlatConfig[]
): FlatConfigComposer<Linter.FlatConfig> {
  return composer(...configs)
}

const defaultOptions: ESLintConfigOptions = {
  vue: {
    enable: true
  },
  nuxt: {
    enable: true
  },
  tailwind: {
    enable: true
  },
  typescript: {
    enable: true,
    vue: true,
    strict: false,
    consoleLog: true,
    caseCheck: true
  },
  features: {
    enable: false,
    jsdoc: {
      enable: true,
      strict: false
    }
  },
}

/**
 * Create an array of ESLint flat configs, based on the given options.
 * Accepts appending user configs as rest arguments from the second argument.
 * @param {options} options - The ESLint options.
 * @param {userConfigs} userConfigs - The user configs to append.
 * @returns {FlatConfigComposer<Linter.FlatConfig>} - The array of ESLint flat configs.
 */
export function createConfig(options: ESLintConfigOptions, ...userConfigs: ResolvableFlatConfig[]): FlatConfigComposer<Linter.FlatConfig> {
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

  if (opts.tailwind)
    config.append(tailwindcss())

  if (opts.features?.enable)
    config.append(jsdoc(opts.features.jsdoc))

  if (userConfigs.length > 0) {
    config.append(...userConfigs)
  }

  return config
}
