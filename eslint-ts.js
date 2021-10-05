module.exports = {
    "extends": "maven",
    "env": {
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "parserOptions": {
        "ecmaVersion": 2020,
        "project": ["./tsconfig.json"]
    },
    "rules": {}
}
