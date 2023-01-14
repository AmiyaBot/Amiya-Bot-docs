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
            text: '基础开发',
            collapsible: true,
            items: [
                {text: '声明', link: '/develop/basic/statement.md'},
                {text: '注册消息响应', link: '/develop/basic/messageHandler.md'},
                {text: '接收消息', link: '/develop/basic/recvMessage.md'},
                {text: '发送消息', link: '/develop/basic/sendMessage.md'},
                {text: '发送主动消息', link: '/develop/basic/sendActiveMessage.md'},
                {text: '创建连续对话', link: '/develop/basic/continuityMessage.md'}
            ]
        },
        {
            text: '消息的构建',
            collapsible: true,
            items: [
                {text: '发送At', link: '/develop/basic/chainBuild/at.md'},
                {text: '发送表情', link: '/develop/basic/chainBuild/face.md'},
                {text: '发送文字', link: '/develop/basic/chainBuild/text.md'},
                {text: '发送图片', link: '/develop/basic/chainBuild/image.md'},
                {text: '发送文字生成的图片', link: '/develop/basic/chainBuild/textImage.md'},
                {text: '发送html生成的图片', link: '/develop/basic/chainBuild/html.md'},
                {text: '发送markdown生成的图片', link: '/develop/basic/chainBuild/markdown.md'},
                {text: '发送语音', link: '/develop/basic/chainBuild/voice.md'},
                {text: '发送合并转发消息', link: '/develop/basic/chainBuild/forward.md'}
            ]
        },
        {
            text: '监听',
            collapsible: true,
            items: [
                {text: '事件监听', link: '/develop/basic/handleEvents.md'},
                {text: '异常监听', link: '/develop/basic/handleException.md'}
            ]
        },
        {
            text: '测试',
            collapsible: true,
            items: [
                {text: '使用测试实例调试', link: '/develop/basic/testInstance.md'}
            ]
        }
    ],
    '/develop/advanced/': [
        {
            text: '进阶开发',
            collapsible: true,
            items: [
                {text: '说明', link: '/develop/advanced/index.md'},
                {text: '生命周期', link: '/develop/advanced/lifeCycle.md'},
                {text: '定时任务', link: '/develop/advanced/timedTask.md'},
                {text: '日志模块', link: '/develop/advanced/logger.md'},
                {text: '加载插件', link: '/develop/advanced/loadPlugins.md'}
            ]
        },
        {
            text: '额外支持',
            collapsible: true,
            items: [
                {text: 'HTTP服务器', link: '/develop/advanced/httpSupport.md'},
                {text: '数据库', link: '/develop/advanced/databaseSupport.md'}
            ]
        },
        {
            text: '辅助',
            collapsible: true,
            items: [
                {text: '启动参数', link: '/develop/advanced/startupParameter.md'}
            ]
        }
    ],
    '/develop/plugin/': [
        {
            text: '准备',
            collapsible: true,
            items: [
                {text: '插件开发说明', link: '/develop/plugin/index.md'},
                {text: '环境准备', link: '/develop/plugin/env.md'},
            ]
        },
        {
            text: '开发',
            collapsible: true,
            items: [
                {text: '创建&编写插件', link: '/develop/plugin/create.md'},
                {text: '插件生命周期', link: '/develop/plugin/life.md'},
                {text: '添加插件文档', link: '/develop/plugin/addDoc.md'},
                {text: '调试插件', link: '/develop/plugin/debug.md'},
            ]
        },
        {
            text: '发布',
            collapsible: true,
            items: [
                {text: '打包插件', link: '/develop/plugin/build.md'},
                {text: '发布到插件商店', link: '/develop/plugin/publish.md'},
            ]
        },
    ],
    '/guide/deploy/': [
        {
            text: '准备',
            collapsible: true,
            items: [
                {text: '部署AmiyaBot-demo-v6', link: '/guide/deploy/index.md'},
                {text: '选择你的运营方', link: '/guide/deploy/yourChoose.md'},
                {text: '开始部署', link: '/guide/deploy/getStarted.md'},
            ]
        },
        {
            text: '使用控制台',
            collapsible: true,
            items: [
                {text: '连接控制台', link: '/guide/deploy/console/index.md'},
                {text: '配置实例', link: '/guide/deploy/console/configure.md'},
                {text: '安装插件', link: '/guide/deploy/console/plugin.md'},
            ]
        },
        {
            text: '维护',
            collapsible: true,
            items: [
                {text: '如何更新', link: '/guide/deploy/maintain/upgrade.md'},
            ]
        },
        {
            text: '高级使用',
            collapsible: true,
            items: [
                {text: '说明', link: '/guide/deploy/advanced/index.md'},
                {text: '使用 Mysql', link: '/guide/deploy/advanced/mysql.md'},
            ]
        },
        {
            text: 'F&Q',
            collapsible: true,
            items: [
                {text: '常见问题', link: '/guide/deploy/faq/commonProblem.md'},
                {text: '插件常见问题', link: '/guide/deploy/faq/PluginProblem.md'}
            ]
        }
    ]
}
