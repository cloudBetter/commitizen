/*
 * @Author: your name
 * @Date: 2021-08-31 17:39:43
 * @LastEditTime: 2021-08-31 17:40:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \test\.eslintrc.js
 */
module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "prettier"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
   "html"
  ],
  "settings": {
      "html/html-extensions": [".html", ".we"],  // consider .html and .we files as HTML
  },
  "rules": {
    "indent": ["error", 4],
    "quotes": ["off"],
    "semi": ["error", "always"],
    "eqeqeq": "warn"
  }
}