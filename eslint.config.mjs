import { createConfig } from "@hrcd/eslint-config"

export default createConfig({
  features: {
    jsdoc: {
      enabled: true,
      strict: false,
    },
  },
})
