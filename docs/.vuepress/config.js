const {shikiPlugin} = require('@vuepress/plugin-shiki')
const {searchPlugin} = require('@vuepress/plugin-search')
const {nprogressPlugin} = require('@vuepress/plugin-nprogress')
const {backToTopPlugin} = require('@vuepress/plugin-back-to-top')
const {mediumZoomPlugin} = require('@vuepress/plugin-medium-zoom')
const {externalLinkIconPlugin} = require('@vuepress/plugin-external-link-icon')

const theme = require('./theme')

module.exports = {
    lang: 'zh-CN',
    title: 'AmiyaBot',
    description: '简洁高效的异步 Python QQ 频道机器人框架',
    plugins: [
        shikiPlugin(
            {
                theme: 'dark-plus'
            }
        ),
        searchPlugin(),
        nprogressPlugin(),
        backToTopPlugin(),
        mediumZoomPlugin(),
        externalLinkIconPlugin(),
    ],
    ...theme
}
