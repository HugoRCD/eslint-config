import { createConfig } from "@hrcd/eslint-config"

export default createConfig({
  pnpm: {
    catalog: true,
  },
  packageJson: true,
})
