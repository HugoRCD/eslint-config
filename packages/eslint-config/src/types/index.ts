export type VueConfigOptions = boolean | Record<string, never>

export type NuxtConfigOptions = boolean | Record<string, never>

export type TypeScriptConfigOptions = boolean | {
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
   * Allow to use `any` type.
   * @default false
   */
  any?: boolean

  /**
   * Whether to enabled case check or not.
   * @default true
   */
  caseCheck?: boolean
}

export type JSDocConfigOptions = boolean | {
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

export type PackageJsonConfigOptions = boolean | {
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

export type PnpmConfigOptions = boolean | {
  /**
   * Enable pnpm catalog support.
   * @default false
   */
  catalog?: boolean
}

export type ESLintConfigOptions = {
  /**
   * Vue config.
   * Set false to disable, true to enable with default options, or provide custom options.
   * @default true
   */
  vue?: VueConfigOptions

  /**
   * Nuxt config.
   * Set false to disable, true to enable with default options, or provide custom options.
   * @default true
   */
  nuxt?: NuxtConfigOptions

  /**
   * TypeScript config.
   * Set false to disable, true to enable with default options, or provide custom options.
   * @default true
   */
  typescript?: TypeScriptConfigOptions

  /**
   * JSDoc config.
   * @default false
   */
  jsdoc?: JSDocConfigOptions

  /**
   * Package.json config.
   * @default true
   */
  packageJson?: PackageJsonConfigOptions

  /**
   * pnpm config.
   * @default false
   */
  pnpm?: PnpmConfigOptions
}
