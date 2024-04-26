import type { ResolvableFlatConfig, FlatConfigComposer } from 'eslint-flat-config-utils'
import { composer } from 'eslint-flat-config-utils'
import gitignore from 'eslint-config-flat-gitignore'
import type { ESLintOptions } from "./types";
import type { Linter } from "eslint";
import nuxt from './src/nuxt'
import vue from './src/vue'
import jsdoc from './src/jsdoc'
import ignores from "./src/ignores";
import defu from "defu";

export * from './types'

/**
 * Provide type definitions for constructing ESLint flat config items.
 *
 * This function takes flat config item, or an array of them as rest arguments.
 * It also automatically resolves the promise if the config item is a promise.
 */
export function defineFlatConfigs(
  ...configs: ResolvableFlatConfig[]
): FlatConfigComposer<Linter.FlatConfig> {
  return composer(...configs)
}

const defaultOptions: ESLintOptions = {
  vue: true,
  nuxt: true,
  features: {
    tooling: false,
  },
}

/**
 * Create an array of ESLint flat configs, based on the given options.
 * Accepts appending user configs as rest arguments from the second argument.
 */
export function createConfig(options: ESLintOptions, ...userConfigs: ResolvableFlatConfig[]): FlatConfigComposer<Linter.FlatConfig> {
  const opts = defu(options, defaultOptions)

  const config = composer()

  // c.append(gitignore({ strict: false }))
  config.append(ignores())

  if (opts.vue)
    config.append(vue())

  if (opts.nuxt)
    config.append(nuxt())

  if (opts.features?.tooling) {
    config.append(jsdoc())
  }

  if (userConfigs.length > 0) {
    config.append(...userConfigs)
  }

  return config
}

