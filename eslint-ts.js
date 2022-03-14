module.exports = {
    "extends": [
        "maven",
        // disable eslint rules that conflict with @typescript-eslint
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    "env": {
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "parserOptions": {
        "ecmaVersion": 2020,
        "project": ["./tsconfig.json"]
    },
    "rules": {
        // Disable opinionated rules from plugin:@typescript-eslint/eslint-recommend
        // https://github.com/typescript-eslint/typescript-eslint/blob/v5.15.0/packages/eslint-plugin/src/configs/eslint-recommended.ts
        'no-var': 'warn',
        'prefer-const': 'warn',
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',

        // Enable typescript version of rules originally from eslint
        // https://github.com/typescript-eslint/typescript-eslint/tree/v5.15.0/packages/eslint-plugin/docs/rules#extension-rules
        '@typescript-eslint/no-dupe-class-members': 'error',
    },
}
