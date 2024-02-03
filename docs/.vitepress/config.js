import navbar from './nav/navbar'
import sidebar from './nav/sidebar'

export default {
    lang: 'zh-CN',
    title: 'AmiyaBot',
    description: 'AmiyaBot，Python 渐进式 QQ 频道机器人框架，可使用内置适配器对接 QQ 群、OneBot v11/12、KOOK 等机器人平台。',
    themeConfig: {
        nav: navbar,
        logo: '/logo.svg',
        sidebar: sidebar,
        editLink: {
            pattern: 'https://github.com/AmiyaBot/Amiya-Bot-docs/edit/master/docs/:path',
            text: '在 GitHub 上编辑此页'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/AmiyaBot' }
        ],
        footer: {
            message: 'MIT & CC BY-NC-SA 4.0 Licensed. More Info <a href="https://github.com/AmiyaBot/Amiya-Bot-docs/blob/master/README.md#%E7%89%88%E6%9D%83%E4%BF%A1%E6%81%AF" target="_blank">Click Here</a>.',
            copyright: 'Copyright © 2024-present vivien8261 <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2021107697号-1</a>'
        },
        search: {
            provider: 'local'
        }
    },
    lastUpdated: true
}
