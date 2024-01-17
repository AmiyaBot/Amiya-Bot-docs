# 使用测试实例调试

使用适配器 `test_instance` 并配置 host、port 参数即可启动一个测试实例。

```python
import asyncio

from amiyabot import AmiyaBot, Message, Chain
from amiyabot.adapters.test import test_instance

bot = AmiyaBot(appid='123456',
               token='',
               adapter=test_instance('127.0.0.1', 32001))


@bot.on_message(keywords='hello', check_prefix=False)
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')


asyncio.run(bot.start())
```

运行实例，访问 https://console.amiyabot.com/#/test 并输入配置的地址和 appid 连接测试服务，即可模拟测试对话。

![test.png](../../assets/console/test.png)
