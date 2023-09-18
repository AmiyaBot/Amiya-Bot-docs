export default [
    {
        text: '主页',
        link: '/'
    },
    {
        text: '简介',
        items: [
            {
                text: '项目介绍',
                link: '/guide/'
            },
            {
                text: '设计',
                link: '/develop/design'
            }
        ]
    },
    {
        text: '开发指南',
        items: [
            {
                text: '基础使用',
                link: '/develop/basic/'
            },
            {
                text: '进阶指南',
                link: '/develop/advanced/'
            },
            {
                text: '适配器',
                items: [
                    {
                        text: 'QQ频道机器人',
                        link: '/develop/basic/#创建你的第一个-bot'
                    },
                    {
                        text: 'KOOK机器人',
                        link: '/develop/basic/selectAdapter.html#使用-kook-适配器'
                    },
                    {
                        text: 'mirai-api-http',
                        link: '/develop/basic/selectAdapter.html#使用-mirai-api-http-适配器'
                    },
                    {
                        text: 'go-cqhttp',
                        link: '/develop/basic/selectAdapter.html#使用-go-cqhttp-适配器'
                    }
                ]
            }
        ]
    },
    {
        text: 'AmiyaBot-demo-V6',
        items: [
            {
                text: '部署',
                link: '/guide/deploy/'
            },
            {
                text: '常见问题',
                link: '/guide/deploy/faq/commonProblem'
            }
        ]
    },
    {
        text: '插件开发',
        link: '/develop/plugin/'
    },
    {
        text: '下载',
        link: '/download'
    },
    {
        text: '赞助',
        link: '/sponsor'
    },
    {
        text: '官方频道',
        link: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=1W4sJux&appChannel=share&businessType=9&from=181074&biz=ka&shareSource=5'
    }
]
