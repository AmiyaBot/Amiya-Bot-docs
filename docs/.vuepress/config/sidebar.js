module.exports = {
    sidebar: {
        '/deploy/': [
            {
                text: '群聊版部署指南',
                children: [
                    '/deploy/index.md',
                    '/deploy/deployByExe.md'
                ]
            }
        ],
        '/develop/basic/': [
            {
                text: '开发指南',
                children: [
                    '/develop/basic/index.md',
                    '/develop/basic/funcsRegister.md',
                    '/develop/basic/messageObject.md',
                    '/develop/basic/chainObject.md',
                    '/develop/basic/htmlConvert.md'
                ]
            }
        ],
        '/develop/advanced/': [
            {
                text: '进阶指南',
                children: [
                    '/develop/advanced/index.md',
                    '/develop/advanced/handleException.md',
                    '/develop/advanced/lifeCycle.md',
                    '/develop/advanced/databaseSupport.md',
                ]
            }
        ]
    }
}
