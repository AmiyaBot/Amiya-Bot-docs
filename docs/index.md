---
home: true
actions:
- text: 开始使用
  link: /develop/
  type: primary
- text: 项目简介
  link: /guide/
  type: secondary
features:
- title: 简洁高效
  details: 采用异步I/O，摆脱官方SDK繁杂的操作，以更加简洁和可读性更高的代码让你专注于你的业务逻辑。
- title: 多账号支持
  details: 支持同时创建多个App实例，为所有App注册公共的功能，也能够分别为单独的App注册专属功能。
- title: 丰富的消息类型
  details: 内置的PIL图像合成模块以及HTML转换器，支持直接发送以多彩的文字或html文件合成的图片，实现你的绝佳创意。
footer: MIT Licensed | Copyright © 2022-present vivien8261
---

### 起步就如此简单

```bash
pip install amiyabot
```

```python
import asyncio

from amiyabot import AmiyaBot, Message, Chain

bot = AmiyaBot(appid='******', token='******')


@bot.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')


asyncio.run(bot.start())
```
