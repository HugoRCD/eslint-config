export type VueConfigOptions = {
  /**
   * Enable Vue support.
   * @default true
   */
  enable?: boolean
}

export type NuxtConfigOptions = {
  /**
   * Enable Nuxt support.
   * @default true
   */
  enable?: boolean
}

export type TailwindConfigOptions = {
  /**
   * Enable Tailwind support.
   * @default true
   */
  enable?: boolean
}

export type TypeScriptConfigOptions = {
  /**
   * Enable TypeScript support.
   * @default true
   */
  enable?: boolean

  /**
   * Whether to check Vue files.
   * @default true
   */
  vue?: boolean

  /**
   * Enable strict TypeScript rules.
   * @default false
   */
  strict?: boolean

  /**
   * Whether to warn console log or not.
   * @default true
   */
  consoleLog?: boolean

  /**
   * Whether to enable case check or not.
   * @default true
   */
  caseCheck?: boolean
}

export type JSDocConfigOptions = {
  /**
   * Enable JSDoc support.
   * @default true
   */
  enable?: boolean

  /**
   * Enable JSDoc strict mode.
   * @default false
   */
  strict?: boolean
}

export type FeaturesConfigOptions = {
  /**
   * Enable tooling features (Useful for packages creators who want to provide a better developer experience).
   * @default false
   */
  enable?: boolean

  /**
   * JSDoc config.
   */
  jsdoc?: JSDocConfigOptions
}

export type ESLintConfigOptions = {
  /**
   * Vue config.
   */
  vue?: VueConfigOptions

  /**
   * Nuxt config.
   */
  nuxt?: NuxtConfigOptions

  /**
   * Tailwind config.
   */
  tailwind?: TailwindConfigOptions

  /**
   * TypeScript config.
   */
  typescript?: TypeScriptConfigOptions

  /**
   * Features config.
   */
  features?: FeaturesConfigOptions
}
