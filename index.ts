import type { ResolvableFlatConfig, FlatConfigComposer } from 'eslint-flat-config-utils'
import { composer } from 'eslint-flat-config-utils'
import gitignore from 'eslint-config-flat-gitignore'
import type { ESLintOptions } from "./types";
import { Linter } from "eslint";
import nuxt from './src/nuxt'
import vue from './src/vue'
import ignores from "./src/ignores";

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
}

/**
 * Create an array of ESLint flat configs, based on the given options.
 * Accepts appending user configs as rest arguments from the second argument.
 */
export function createConfig(options: ESLintOptions = defaultOptions, ...userConfigs: ResolvableFlatConfig[]): FlatConfigComposer<Linter.FlatConfig> {
  const c = composer()

  // c.append(gitignore({ strict: false }), ignores())

  if (options.vue) c.append(vue())
  if (options.nuxt) c.append(nuxt())

  if (userConfigs.length > 0) {
    c.append(...userConfigs)
  }

  return c
}

export default createConfig
