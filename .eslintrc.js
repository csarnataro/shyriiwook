// module.exports = {
//   "extends": "eslint:recommended"
// }
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: "eslint:recommended",
  rules: {
    // enable additional rules
    quotes: ["error", "double"],    semi: ["error", "always"]  }
};