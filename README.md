# eslint-config-saymedia

> Say Media's eslint config

Goals:

  * Add support for ES6 by transitioning to ESLint.
  * Minimize the transition friction for developers.
  * Leverage the ESLint power to reduce the number of bugs.
  * Progressively improve our code style.

Steps:

  * Start from the "Standard" ESLint settings.
  * Apply/disable rules until it matches our code style/state.
  * Replace JSHint and JSCS by ESLint in the Gruntfile.
  * Discuss the changes from the "Standard" and possibly move closer to the "Standard".

## Installation

Install [eslint](https://eslint.org/) and `eslint-config-saymedia`:

```
npm install --save-dev eslint saymedia/eslint-config-saymedia
```

## Usage

If you've installed `eslint-config-saymedia` locally within your project, just set your `eslint` config to:

```json
{
  "extends": "saymedia"
}
```

## Documentation

### Extends

* [eslint-config-standard](https://github.com/standard/eslint-config-standard): [JavaScript Standard Style](https://standardjs.com)
* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with [Prettier](https://prettier.io/).

### Plugins

* [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier): Runs [Prettier](https://prettier.io/) as an ESLint rule and reports differences as individual ESLint issues.
* [eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard): ESlint Rules for the Standard Linter.
* [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node): Additional ESLint's rules for Node.js.
* [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise): Enforce best practices for JavaScript promises.
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): ESLint plugin with rules that help validate proper imports.
