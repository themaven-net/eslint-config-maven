# v12.0.0 (2026-02-17)

Breaking changes:

* Migrated to ESLint 9 flat config format (`eslint.config.js`). Legacy `.eslintrc.*` configs are no longer supported.
* Switched to ESM (`"type": "module"`). All config files now use `export default` instead of `module.exports`.
* Requires Node.js >= 24.
* Requires ESLint >= 9 (peer dependency changed from `>= 8` to `>= 9`).
* Replaced `@typescript-eslint/parser` + `@typescript-eslint/eslint-plugin` with the unified `typescript-eslint` package.
* Replaced `eslint-plugin-import` with `eslint-plugin-import-x` (aliased as `import` for rule name compatibility).
* Replaced `@typescript-eslint/no-var-requires` with `@typescript-eslint/no-require-imports`.
* Removed `eslint-plugin-node`, `eslint-plugin-promise`, and `eslint-plugin-standard` (no longer maintained / not needed).
* TypeScript parser now uses `projectService: true` instead of `project: ['./tsconfig.json']`.
* Switched package manager from Yarn 1 to Yarn 4.

Other changes:

* Upgraded Prettier from v2 to v3, eslint-plugin-prettier from v4 to v5, eslint-config-prettier from v8 to v9.
* Upgraded eslint-plugin-jest from v27 to v29, eslint-plugin-simple-import-sort from v8 to v12, TypeScript from v4 to v5.
* Added `globals` package for environment globals (replaces ESLint's deprecated `env` config).
* Changed Prettier `trailingComma` from `'es5'` to `'all'`.
* Converted `.prettierrc.js` to ESM.
* Updated CI workflows: Node 24, actions/checkout@v4, actions/setup-node@v4, softprops/action-gh-release@v2.
* Updated README with flat config usage examples and migration guide.

# v10.0.0 (2022-04-05)

Breaking changes:

* Started publishing to npm as `@themaven-net/eslint-plugin-maven` (in eslint, `extends: ['@themaven-net/maven']`)
* Stopped exporting `eslint-ts.js`; you must override the `overrides` now.
* Enabled more eslint rules
