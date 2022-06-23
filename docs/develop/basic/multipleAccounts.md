# 多账号

AmiyaBot 支持同时启动多个账号，所有账号之间可以共享资源以及功能。

## 创建多个单独实例

你可以同时创建多个**互不相关**的实例，只需要实例化多个 `AmiyaBot`。多实例启动时，一些内置的资源对象不会重复实例化多个，而是被它们共享。

```python
import asyncio

from amiyabot import AmiyaBot, Message, Chain

bot1 = AmiyaBot(appid='******', token='******', private=True)
bot2 = AmiyaBot(appid='******', token='******')


@bot1.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')


@bot2.on_message(keywords='hey')
async def _(data: Message):
    return Chain(data).text(f'hey, {data.nickname}')


asyncio.run(
    asyncio.wait([
        bot1.start(),
        bot2.start()
    ])
)
```

## 创建一个多账号实例

使用 `MultipleAccounts` 可以创建一个多账号实例，它们将共享通过 `MultipleAccounts` 注册的**所有方法和变量**，也保留了**自身注册的方法**。

```python {8}
import asyncio

from amiyabot import AmiyaBot, MultipleAccounts, Message, Chain

bot1 = AmiyaBot(appid='******', token='******', private=True)
bot2 = AmiyaBot(appid='******', token='******')

bot = MultipleAccounts([bot1, bot2])


# 公共触发器
@bot.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')


# bot1 的专属触发器
@bot1.on_message(keywords='hey')
async def _(data: Message):
    return Chain(data).text(f'hey, my name is Amiyabot')


asyncio.run(bot.start())
```
