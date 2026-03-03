# @themaven-net/eslint-config-maven

> TheMaven's eslint / prettier config

Goals:

  * Provide a common ESLint + Prettier configuration for JavaScript and TypeScript projects.
  * Leverage ESLint to reduce bugs and improve code quality.
  * Progressively improve our code style.

**Requires Node.js >= 24 and ESLint >= 10 (flat config).**

## Installation

First, [authenticate the GitHub npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).
To do this, navigate to GitHub → Settings → Developer settings → Personal access tokens.
Click Generate new token. Add "repo" and "read:packages" permissions.
Generate the token.
In the terminal, set up `~/.npmrc` by running
`npm login --scope=@themaven-net --registry=https://npm.pkg.github.com`,
use your GitHub username as the username, and use the token as the password
(warning: this deletes all the comments in `~/.npmrc`!).
Back in the browser, click "Configure SSO → Authorize" to give the token access to Maven.

Install [eslint](https://eslint.org/) and `@themaven-net/eslint-config-maven`:

```
npm install --save-dev eslint @themaven-net/eslint-config-maven
```

## Usage

Create an `eslint.config.js` in your project root:

```js
import mavenConfig from '@themaven-net/eslint-config-maven';

export default [
  ...mavenConfig,
  // your project overrides here
];
```

For the stricter config (recommended for newer projects):

```js
import mavenStrictConfig from '@themaven-net/eslint-config-maven/eslint-strict.js';

export default [
  ...mavenStrictConfig,
  // your project overrides here
];
```

For using our Prettier defaults, create a `.prettierrc.js` file:

```js
import prettierConfig from '@themaven-net/eslint-config-maven/.prettierrc';

export default prettierConfig;
```

### Migrating from v11 (legacy config)

If you're upgrading from v11 (`.eslintrc.js` format):

1. Delete `.eslintrc.js` and create `eslint.config.js` as shown above.
2. Convert `.prettierrc.js` to ESM (`export default` instead of `module.exports`).
3. Replace `.eslintignore` with an `ignores` array in your config:
   ```js
   export default [
     { ignores: ['dist/', 'node_modules/'] },
     ...mavenConfig,
   ];
   ```
4. Ensure your project uses `"type": "module"` in `package.json` or rename config files to `.mjs`.

## Documentation

### Plugins

* [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier): Runs [Prettier](https://prettier.io/) as an ESLint rule and reports differences as individual ESLint issues.
* [typescript-eslint](https://typescript-eslint.io/): TypeScript support for ESLint.
* [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x): Import validation rules (used in strict config).
* [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort): Auto-fixable import sorting (used in strict config).
* [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest): Jest best practices (used in strict config).

## History

See [CHANGELOG.md](./CHANGELOG.md) for changes.

## Developing

To make a release, push a git tag with the version:

```sh
git checkout master
npm version major|minor|patch --message '%s ...'
git push origin master --follow-tags
```

The GitHub workflow
[npm-publish.yml](./.github/workflows/npm-publish.yml)
will then publish the npm package to GitHub Packages
and create a GitHub Release.
