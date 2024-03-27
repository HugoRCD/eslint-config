# default-repository

<!-- automd:badges color=black license codecov provider=shields  -->

[![npm version](https://img.shields.io/npm/v/default-repository?color=black)](https://npmjs.com/package/default-repository)
[![npm downloads](https://img.shields.io/npm/dm/default-repository?color=black)](https://npmjs.com/package/default-repository)
[![codecov](https://img.shields.io/codecov/c/gh/HugoRCD/default-repository?color=black)](https://codecov.io/gh/HugoRCD/default-repository)
[![license](https://img.shields.io/github/license/HugoRCD/default-repository?color=black)](https://github.com/HugoRCD/default-repository/blob/main/LICENSE)

<!-- /automd -->

This repository is a template repository for creating new repositories with everything you need to get started.

## Usage

Install package:

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install default-repository

# npm
npm install default-repository

# yarn
yarn add default-repository

# pnpm
pnpm install default-repository

# bun
bun install default-repository
```

<!-- /automd -->

## Development

Before you start, you can use the `./scripts/rename.sh` script to rename all `default-repository` occurrences in the repository to your new repository name.

### Local development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `bun install`
- Start development server using `bun dev`
- Open [http://localhost:3000](http://localhost:3000) in your browser

## Contributing
To start contributing, you can follow these steps:

1. First raise an issue to discuss the changes you would like to make.
2. Fork the repository.
3. Create a branch with a descriptive name `add-feature` or `fix-issue`.
4. Make changes following the local development steps [above](#local-development).
5. Commit your changes following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
6. Run tests using `bun run test`.
7. Create a pull request following the [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md).
   - To be merged, the pull request must pass the tests/workflow and have at least one approval.
   - If your changes affect the documentation, make sure to update it.
   - If your changes affect the code, make sure to update the tests.
8. Wait for the maintainers to review your pull request.
9. Once approved, the pull request will be merged in the next release !

## License

<!-- automd:contributors license=MIT author=HugoRCD-->

Published under the [MIT](https://github.com/HugoRCD/default-repository/blob/main/LICENSE) license.
Made by [@HugoRCD](https://github.com/HugoRCD) and [community](https://github.com/HugoRCD/default-repository/graphs/contributors) 💛
<br><br>
<a href="https://github.com/HugoRCD/default-repository/graphs/contributors">
<img src="https://contrib.rocks/image?repo=HugoRCD/default-repository" />
</a>

<!-- /automd -->

<!-- automd:with-automd lastUpdate -->

---

_🤖 auto updated with [automd](https://automd.unjs.io) (last updated: Wed Mar 27 2024)_

<!-- /automd -->
