const {defaultTheme} = require('@vuepress/theme-default')

const sidebar = require('./config/sidebar')
const navbar = require('./config/navbar')
const zh = require('./config/zh')

module.exports = {
    theme: defaultTheme({
        repo: 'AmiyaBot/Amiya-Bot-core',
        ...sidebar,
        ...navbar,
        ...zh
    }),
}
