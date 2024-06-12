export type ESLintOptions = {
  /**
   * Enable Vue support
   *
   * @default true
   */
  vue?: boolean

  /**
   * Enable Nuxt support
   *
   * @default true
   */
  nuxt?: boolean

  /**
   * Enable Tailwind support
   *
   * @default true
   */
  tailwind?: boolean

  /**
   * Enable strict TypeScript rules
   *
   * @default true
   */
  strict?: boolean

  /**
   * Enable console.log
   *
   * @default true
   */
  consoleLog?: boolean

  /**
   * Features
   *
   */
  features?: {
    /**
     * Enable tooling features (Useful for packages creators who want to provide a better developer experience)
     *
     * @default true
     */
    tooling?: boolean
  }
}
