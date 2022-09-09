export default {
    '/develop/basic/': [
        {
            text: '开始使用',
            collapsible: true,
            items: [
                {text: '起步', link: '/develop/basic/index.md'},
                {text: '适配器选择', link: '/develop/basic/selectAdapter.md'},
                {text: '多账号', link: '/develop/basic/multipleAccounts.md'}
            ]
        },
        {
            text: '功能开发',
            collapsible: true,
            items: [
                {text: '注册消息响应', link: '/develop/basic/handlerDecorator.md'},
                {text: '接收消息', link: '/develop/basic/messageObject.md'},
                {text: '发送消息', link: '/develop/basic/chainObject.md'},
                {text: '发送 HTML 生成的图片', link: '/develop/basic/htmlConvert.md'},
                {text: '发送主动消息', link: '/develop/basic/activeMessage.md'}
            ]
        },
        {
            text: '监听',
            collapsible: true,
            items: [
                {text: '事件监听', link: '/develop/basic/handleEvents.md'},
                {text: '异常监听', link: '/develop/basic/handleException.md'}
            ]
        }
    ],
    '/develop/advanced/': [
        {
            text: '设计',
            collapsible: true,
            items: [
                {text: '设计', link: '/develop/advanced/index.md'},
                {text: '生命周期', link: '/develop/advanced/lifeCycle.md'},
            ]
        },
        {
            text: '额外支持',
            collapsible: true,
            items: [
                {text: '数据库', link: '/develop/advanced/databaseSupport.md'},
                {text: 'HTTP服务器', link: '/develop/advanced/httpSupport.md'},
            ]
        }
    ]
}
