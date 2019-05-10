// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module"
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    globals: {
        wx: true
    },
    extends: ["plugin:prettier/recommended"],
    rules: {
        "no-new": "off",
        "no-new-func": "off",
        "prettier/prettier": "warn",
        "eqeqeq": "warn",
        "no-undef": "error"
    }
};
