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
        text: '基础指南',
        items: [
            {
                text: '起步',
                items: [
                    { text: '开始使用', link: '/develop/basic/index.md' },
                    { text: '注册消息响应', link: '/develop/basic/messageHandler.md' },
                    { text: '构建回复消息', link: '/develop/basic/sendMessage.html#构建消息的方法' },
                    { text: '事件监听', link: '/develop/basic/handleEvents.md' },
                    { text: '异常监听', link: '/develop/basic/handleException.md' },
                    { text: '测试', link: '/develop/basic/testInstance.md' }
                ]
            },
            {
                text: '适配器',
                items: [
                    { text: 'QQ频道机器人', link: '/develop/adapters/qqChannel.md' },
                    { text: 'KOOK机器人', link: '/develop/adapters/kook.md' },
                    { text: 'Mirai-Api-Http', link: '/develop/adapters/mah.md' },
                    { text: 'Go-CQHttp', link: '/develop/adapters/gocq.md' },
                    { text: 'ComWeChatBot Client', link: '/develop/adapters/comwechat.md' },
                    { text: 'OneBot 11', link: '/develop/adapters/onebot11.md' },
                    { text: 'OneBot 12', link: '/develop/adapters/onebot12.md' },
                ]
            }
        ]
    },
    {
        text: '进阶指南',
        items: [
            {
                text: '进阶开发',
                items: [
                    { text: '生命周期', link: '/develop/advanced/lifeCycle.md' },
                    { text: '定时任务', link: '/develop/advanced/timedTask.md' },
                    { text: '事件总线', link: '/develop/advanced/eventBus.md' },
                    { text: '日志模块', link: '/develop/advanced/logger.md' },
                    { text: '加载插件', link: '/develop/advanced/loadPlugins.md' }
                ]
            },
            {
                text: '辅助',
                items: [
                    { text: 'HTTP 请求', link: '/develop/advanced/httpRequests.md' },
                    { text: '处理 IO 阻塞的操作', link: '/develop/advanced/blockingIO.md' },
                    { text: '改变 Playwright 启动', link: '/develop/advanced/playwright.md' },
                    { text: '启动参数', link: '/develop/advanced/startupParameter.md' }
                ]
            },
            {
                text: '额外支持',
                items: [
                    { text: 'HTTP 服务器', link: '/develop/advanced/httpSupport.md' },
                    { text: '数据库', link: '/develop/advanced/databaseSupport.md' }
                ]
            }
        ]
    },
    {
        text: '插件开发',
        link: '/develop/plugin/'
    },
    {
        text: 'AmiyaBot-demo-V6',
        items: [
            { text: '部署', link: '/guide/deploy/' },
            { text: '常见问题', link: '/guide/deploy/faq/commonProblem' }
        ]
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
