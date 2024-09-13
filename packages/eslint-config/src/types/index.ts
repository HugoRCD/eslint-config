export type VueConfigOptions = {
  /**
   * Enable Vue support.
   * @default true
   */
  enabled?: boolean
}

export type NuxtConfigOptions = {
  /**
   * Enable Nuxt support.
   * @default true
   */
  enabled?: boolean
}

export type TailwindConfigOptions = {
  /**
   * Enable Tailwind support.
   * @default true
   */
  enabled?: boolean
}

export type TypeScriptConfigOptions = {
  /**
   * Enable TypeScript support.
   * @default true
   */
  enabled?: boolean

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
   * Whether to enabled case check or not.
   * @default true
   */
  caseCheck?: boolean
}

export type JSDocConfigOptions = {
  /**
   * Enable JSDoc support.
   * @default true
   */
  enabled?: boolean

  /**
   * Enable JSDoc strict mode.
   * @default false
   */
  strict?: boolean
}

export type PackageJsonConfigOptions = {
  /**
   * Enable package.json support.
   * @default true
   */
  enabled?: boolean
  /**
   * Enable package.json strict mode.
   * @default false
   */
  strict?: boolean
}

export type FeaturesConfigOptions = {
  /**
   * JSDoc config.
   */
  jsdoc?: JSDocConfigOptions

  /**
   * Package.json config.
   */
  packageJson?: PackageJsonConfigOptions
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
  features: FeaturesConfigOptions
}
