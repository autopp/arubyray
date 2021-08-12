module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "eslint-plugin-tsdoc",
  ],
  ignorePatterns: [".eslintrc.js"],
  "rules": {
    "tsdoc/syntax": "warn",
    "semi": ["error", "never"],
    "prettier/prettier": ["error", { semi: false, printWidth: 120, singleQuote: true }],
  },
};
