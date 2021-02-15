# eslint-config

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) used @[Ubleam](https://github.com/Ubleam)

![build](https://github.com/Ubleam/eslint-config-ubleam/workflows/Build/badge.svg)
![license](https://img.shields.io/github/license/Ubleam/eslint-config-ubleam?color=blue)
[![conventional commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Purpose & Phylosophy

This repository holds the shared [ESLint](https://eslint.org) configuration used for all our [TypeScript](https://www.typescriptlang.org) projects at [Ubleam](https://github.com/Ubleam).

The current configuration enforces strict dogmatic rules - (too strict you might think)- in addition to those recommended by the various linting extensions available such as ESLint itself, and various plugins such as `react`, `react-hooks`, `typescript-eslint`...

Indeed, at [Ubleam](https://github.com/Ubleam) we are convinced that the quality of the code depends on clear and consistent coding conventions, with an automated enforcement.

The rules configured are mainly based on two pillars:

- [React](https://reactjs.org): We encourage as much as possible an architectural approach focusing on Functional Components. That's why we enforce a strict mode and a High Severity according to the recommendations of Facebook Core ([React Team](https://reactjs.org/community/team.html)).
- [TypeScript](https://www.typescriptlang.org): At [Ubleam](https://github.com/Ubleam), we love Type Safety, and we are deeply conviced that better type safety means less error in production. That's one of the reasons we chose `TypeScript` over `JavaScript`. We've therefore adopted very strict Type Checking rules in order to take advantage of the best of `TypeScript`.

## Installation

### NPM

```sh
npx install-peerdeps --dev @ubleam/eslint-config
```

### Yarn

If you want to use `yarn`, you must first list all peer dependencies using `npm` and add then individually with `yarn`.

First, list the peer dependencies and versions:

```sh
npm info @ubleam/eslint-config@latest peerDependencies
```

Then run the following command line for each listed peer dependency.

```sh
yarn add --dev <dependency>@<version>
```

## Usage

This ESLint configuration is meant to be used with:

- [Prettier](https://prettier.io). All rules handled by Prettier are turned off.
- [TypeScript](https://www.typescriptlang.org): As we use `@typescript-eslint/parser`, you must have the file `tsconfig.json` in the root your project. See [documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more.

Once the package `@ubleam/eslint-config` is installed, you can use it by specifying `@ubleam` in the [extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of the [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

For instance:

```js
{
  "extends": "@ubleam",
  "rules": {
    // Additional rules...
  }
}
```

## Contributing

So you want to contribute? Great. We appreciate any help you're willing to give. Don't hesitate to open issues and/or submit pull requests.

Remember that this is the configuration we use at [Ubleam](https://github.com/Ubleam), and that we apply everywhere in our private and public projects. This is why we may have to refuse change requests simply because they do not comply with our internal requirements, and not because they are not relevant.
