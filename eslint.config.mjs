import { createConfig } from "@hrcd/eslint-config"

export default createConfig({
  features: {
    enable: true,
    jsdoc: {
      enable: true,
      strict: false,
    },
  },
})
