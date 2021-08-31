/*
 * @Author: your name
 * @Date: 2021-08-31 16:22:54
 * @LastEditTime: 2021-08-31 17:23:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog\husky.config.js
 */
module.exports = {
  "hooks": {

    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
  }
}