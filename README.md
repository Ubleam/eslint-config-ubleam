# eslint-config

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) used @[Ubleam](https://github.com/Ubleam)

![build](https://github.com/Ubleam/eslint-config-ubleam/workflows/Build/badge.svg)

## Installation

```sh
$ npm install --save-dev @ubleam/eslint-config
```

Package require s [eslint](https://eslint.org/).

## Usage

Once the package `@ubleam/eslint-config` is installed, you can use it by specifying `@ubleam` in the [extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of the [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@ubleam",
  "rules": {
    // Additional rules...
  }
}
```
