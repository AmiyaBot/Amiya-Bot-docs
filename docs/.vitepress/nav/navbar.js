import sidebar, { adapters } from './sidebar'

function getFirstNav(navItems) {
    return navItems.map(item => {
        return {
            text: item.text,
            link: item.items[0].link
        }
    })
}

export default [
    {
        text: '主页',
        link: '/'
    },
    {
        text: '简介',
        items: [
            { text: '项目介绍', link: '/guide/' },
            { text: '设计', link: '/develop/design' }
        ]
    },
    {
        text: '开发指南',
        items: [
            { text: '基础', items: getFirstNav(sidebar['/develop/basic/']) },
            { text: '进阶', items: getFirstNav(sidebar['/develop/advanced/']) },
            { text: '插件开发', link: '/develop/plugin/' },
        ]
    },
    {
        text: '适配器',
        items: adapters
    },
    {
        text: '兔兔机器人',
        items: [
            {
                text: '部署',
                items: [
                    { text: '开始部署', link: '/guide/deploy/' },
                    { text: '常见问题', link: '/guide/deploy/faq/commonProblem' },
                    { text: '连接控制台', link: '/guide/deploy/console/index.md' },
                    { text: '如何更新', link: '/guide/deploy/maintain/upgrade.md' },
                    { text: '高级使用', link: '/guide/deploy/advanced/index.md' },
                ]
            },
            { text: '使用官方版 🎉', link: '/guide/deploy/#官方版兔兔' },
        ]
    },
    {
        text: '联系我们',
        items: [
            {
                text: '赞助',
                link: '/sponsor'
            },
            {
                text: '官方群',
                link: 'https://qm.qq.com/q/9ft0w6HQj0'
            },
            {
                text: '官方频道',
                link: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=1W4sJux&appChannel=share&businessType=9&from=181074&biz=ka&shareSource=5'
            }
        ]
    },
    {
        text: '下载',
        link: '/download'
    },
]
