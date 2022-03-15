module.exports = {
    "extends": [
        "./index.js",
        // disable eslint rules that conflict with @typescript-eslint
        'plugin:@typescript-eslint/eslint-recommended',
        // new projects should consider enabling these plugins from the start
        // 'eslint:recommended',
        // 'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
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

        // high-precision rules from plugin:@typescript-eslint/recommended
        // and plugin:@typescript-eslint/recommended-requiring-type-checking
        // https://github.com/typescript-eslint/typescript-eslint/tree/v5.15.0/packages/eslint-plugin#supported-rules
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
    },
}
