module.exports = {
    extends: ['./eslint-js.js'],
    overrides: [
        // add no-op overrides as an alternative to passing --ext in the CLI
        {
            files: ['*.cjs', '*.mjs', '*.jsx'],
        },
        {
            files: ['*.ts', '*.tsx'],
            extends: ['./eslint-ts.js'],
        },
    ],
};
