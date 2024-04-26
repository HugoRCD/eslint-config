export interface ESLintOptions {
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
