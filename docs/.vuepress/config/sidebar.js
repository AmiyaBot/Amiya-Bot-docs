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
        '/develop/': [
            {
                text: '开发指南',
                children: [
                    '/develop/index.md',
                    '/develop/funcsRegister.md',
                    '/develop/messageObject.md',
                    '/develop/chainObject.md',
                    '/develop/htmlConvert.md',
                    '/develop/handleException.md',
                    '/develop/lifeCycle.md',
                    '/develop/databaseSupport.md',
                ]
            }
        ]
    }
}
