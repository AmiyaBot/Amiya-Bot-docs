import navbar from './nav/navbar'
import sidebar from './nav/sidebar'

export default {
    lang: 'zh-CN',
    title: 'AmiyaBot',
    description: '基于 Python asyncio 的简洁高效的 QQ 机器人框架',
    themeConfig: {
        nav: navbar,
        sidebar: sidebar,
        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: 'Edit this page on GitHub'
        // },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        footer: {
            message: 'MIT Licensed',
            copyright: 'Copyright © 2022-present vivien8261'
        }
    },
    lastUpdated: true
}
