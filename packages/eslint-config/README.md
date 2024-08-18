# eslint-config

<!-- automd:badges color=black license provider=shields  -->

[![npm version](https://img.shields.io/npm/v/@hrcd/eslint-config?color=black)](https://npmjs.com/package/@hrcd/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@hrcd/eslint-config?color=black)](https://npmjs.com/package/@hrcd/eslint-config)
[![license](https://img.shields.io/github/license/HugoRCD/eslint-config?color=black)](https://github.com/HugoRCD/eslint-config/blob/main/LICENSE)

<!-- /automd -->

This is my personal ESLint configuration, feel free to use it in your projects.

## Usage

Install package:

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

## Development

Before you start, you can use the `./scripts/rename.sh` script to rename all `eslint-config` occurrences in the repository to your new repository name.

### Local development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `bun install`

## Contributing
To start contributing, you can follow these steps:

1. First raise an issue to discuss the changes you would like to make.
2. Fork the repository.
3. Create a branch using conventional commits and the issue number as the branch name. For example, `feat/123` or `fix/456`.
4. Make changes following the local development steps [above](#local-development).
5. Commit your changes following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
6. Run tests using `bun run test`.
7. Create a pull request following the [Pull Request Template](.github/pull_request_template.md).
   - To be merged, the pull request must pass the tests/workflow and have at least one approval.
   - If your changes affect the documentation, make sure to update it.
   - If your changes affect the code, make sure to update the tests.
8. Wait for the maintainers to review your pull request.
9. Once approved, the pull request will be merged in the next release !

## License

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

_🤖 auto updated with [automd](https://automd.unjs.io) (last updated: Sun Aug 18 2024)_

<!-- /automd -->
