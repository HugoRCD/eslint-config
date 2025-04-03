![social-banner.jpg](https://raw.githubusercontent.com/HugoRCD/eslint-config/refs/heads/main/assets/social-banner.jpg)

# @hrcd/eslint-config

<!-- automd:badges color=black license provider=shields  -->

[![license](https://img.shields.io/github/license/HugoRCD/eslint-config?color=black)](https://github.com/HugoRCD/eslint-config/blob/main/LICENSE)

<!-- /automd -->

A comprehensive and opinionated ESLint Flat configuration designed to provide an optimal development experience with Vue, Nuxt and TypeScript projects, while supporting many other technologies.

## ✨ Features

- **🔄 Auto-fix formatting** - No need for Prettier, everything is handled by ESLint
- **⚡ Vue & Nuxt optimized** - First-class support for Vue 3 and the Nuxt ecosystem
- **🔒 TypeScript ready** - Built specifically for TypeScript projects with strict type checking
- **🌐 Multi-language support** - Handles JavaScript, TypeScript, Vue, JSON, YAML, Markdown and more
- **📦 PNPM optimized** - Special rules for projects using PNPM workspaces
- **🚀 PNPM Catalog support** - Integration with the new PNPM Catalog feature for better dependency management
- **🧹 Style consistency** - Ensures consistent code style with sorted imports and logical formatting
- **🛠️ Easily customizable** - Opinionated defaults but highly configurable
- **📝 `.gitignore` integration** - Automatically respects your `.gitignore` files

## 📥 Installation

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install @hrcd/eslint-config

# npm
npm install @hrcd/eslint-config

# yarn
yarn add @hrcd/eslint-config

# pnpm
pnpm install @hrcd/eslint-config

# bun
bun install @hrcd/eslint-config
```

<!-- /automd -->

### 🔧 Configuration

Create an `eslint.config.js` file at the root of your project:

```js
import { createConfig } from "@hrcd/eslint-config"

export default createConfig()
```

### ⚙️ Customization

The configuration is opinionated but flexible. You can customize it to match your project's needs:

```js
import { createConfig } from "@hrcd/eslint-config"

export default createConfig({
  // Enable/disable features
  typescript: true, // TypeScript support
  vue: true,        // Vue support
  nuxt: true,       // Nuxt support

  // Define files to ignore
  ignores: [
    'dist',
    'node_modules',
    // Other patterns to ignore
  ]
})
```

## 📊 PNPM Catalog Support

This ESLint config includes optimized rules for projects using PNPM Catalog, the new feature that helps manage and organize packages in PNPM workspaces. It ensures proper dependency declarations, prevents hoisting issues, and maintains catalog structure consistency.

## 💻 IDE Integration

### VS Code

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Add to your `settings.json`:

```json
{
  "eslint.validate": [
    "javascript",
    "typescript",
    "vue",
    "html",
    "markdown",
    "json",
    "yaml"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 🛠️ Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `bun install`

## 🤝 Contributing

To start contributing, follow these steps:

1. First raise an issue to discuss the changes you would like to make.
2. Fork the repository.
3. Create a branch using conventional commits and the issue number as the branch name. For example, `feat/123` or `fix/456`.
4. Make changes following the local development steps [above](#local-development).
5. Commit your changes following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
6. Run tests using `pnpm run test`.
7. Create a pull request following the [Pull Request Template](.github/pull_request_template.md).
   - To be merged, the pull request must pass the tests/workflows and have at least one approval.
   - If your changes affect the documentation, make sure to update it.
   - If your changes affect the code, make sure to update the tests.
8. Wait for the maintainers to review your pull request.
9. Once approved, the pull request will be merged in the next release!

<!-- automd:fetch url="gh:hugorcd/markdown/main/src/sponsors.md" -->

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/HugoRCD">
    <img src='https://cdn.jsdelivr.net/gh/hugorcd/static/sponsors.svg' alt="HugoRCD sponsors" />
  </a>
</p>

<!-- /automd -->

## Contributors

<!-- automd:contributors license=Apache author=HugoRCD-->

Published under the [APACHE](https://github.com/HugoRCD/eslint-config/blob/main/LICENSE) license.
Made by [@HugoRCD](https://github.com/HugoRCD) and [community](https://github.com/HugoRCD/eslint-config/graphs/contributors) 💛
<br><br>
<a href="https://github.com/HugoRCD/eslint-config/graphs/contributors">
<img src="https://contrib.rocks/image?repo=HugoRCD/eslint-config" />
</a>

<!-- /automd -->

<!-- automd:with-automd lastUpdate -->

---

_🤖 auto updated with [automd](https://automd.unjs.io) (last updated: Thu Apr 03 2025)_

<!-- /automd -->
