# @themaven-net/eslint-config-maven

> Say Media's eslint / prettier config

Goals:

  * Add support for ES6 by transitioning to ESLint.
  * Minimize the transition friction for developers.
  * Leverage the ESLint power to reduce the number of bugs.
  * Progressively improve our code style.
  * Provide a common set of options for code formatting applied by Prettier.

Steps:

  * Start from the "Standard" ESLint settings.
  * Apply/disable rules until it matches our code style/state.
  * Replace JSHint and JSCS by ESLint in the Gruntfile.
  * Discuss the changes from the "Standard" and possibly move closer to the "Standard".

## Installation

First, [authenticate the GitHub npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).
To do this, navigate to GitHub → Settings → Developer settings → Personal access tokens.
Click Generate new token. Add “repo” and “read:packages” permissions.
Generate the token.
In the terminal, set up `~/.npmrc` by running
`npm login --scope=@themaven-net --registry=https://npm.pkg.github.com`,
use your GitHub username as the username, and use the token as the password
(warning: this deletes all the comments in `~/.npmrc`!).
Back in the browser, click “Configure SSO → Authorize” to give the token access to Maven.

Install [eslint](https://eslint.org/) and `@themaven-net/eslint-config-maven`:

```
npm install --save-dev eslint @themaven-net/eslint-config-maven
```

## Usage

If you've installed `@themaven-net/eslint-config-maven` locally within your project, just set your `.eslintrc.js` config to:

```json
module.exports = {
  extends: '@themaven-net/maven' // requires '@themaven-net/eslint-config-maven'
};
```

For using our Prettier defaults, you'll want to make a `.prettierrc.js` file with this:

```js
module.exports = require('@themaven-net/eslint-config-maven/.prettierjs');
```

## Documentation

### Extends

* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with [Prettier](https://prettier.io/).

### Plugins

* [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier): Runs [Prettier](https://prettier.io/) as an ESLint rule and reports differences as individual ESLint issues.
* [eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard): ESlint Rules for the Standard Linter.
* [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node): Additional ESLint's rules for Node.js.
* [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise): Enforce best practices for JavaScript promises.
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): ESLint plugin with rules that help validate proper imports.

## Developing

To make a release, push a git tag with the version:

```sh
git checkout master
npm version major|minor|patch --message '%s ...'
git push master --follow-tags
```

The GitHub workflow
[npm-publish.yml](./.github/workflows/npm-publish.yml)
will then publish the npm package to GitHub Packages
and create a GitHub Release.
