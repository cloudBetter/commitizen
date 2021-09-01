/*
 * @Author: your name
 * @Date: 2021-08-31 14:37:56
 * @LastEditTime: 2021-08-31 17:36:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog\lint-staged.config.js
 */
module.exports = {
    "src/*.{html,js}":[
        "prettier --write",
        "eslint --fix",
        "git add ."
    ]
} 