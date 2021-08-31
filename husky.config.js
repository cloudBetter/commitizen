/*
 * @Author: your name
 * @Date: 2021-08-31 16:22:54
 * @LastEditTime: 2021-08-31 16:32:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog\husky.config.js
 */
module.exports = {
  "hooks": {
    "pre-commit": "lint-staged -c lint-staged.config.js",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
  }
}