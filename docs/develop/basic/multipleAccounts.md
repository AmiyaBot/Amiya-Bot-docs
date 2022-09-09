# 多账号

AmiyaBot 支持同时启动多个账号，所有账号之间可以共享资源以及功能。

## 创建多个单独实例

你可以同时创建多个**互不相关**的实例，只需要实例化多个 `AmiyaBot`。多实例启动时，一些内置的资源对象不会重复创建多个，而是被它们共享，以节约内存。

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

**MultipleAccounts**

`MultipleAccounts` 可以创建一个多账号实例，参数是一个 **AmiyaBot 实例的列表**。它拥有与 AmiyaBot 一样的所有方法，所以你可以像 AmiyaBot 一样使用它来注册你的功能。<br>
通过 MultipleAccounts 注册的功能，将被所有包含的 AmiyaBot 共享。而其中的 AmiyaBot 实例，仍能单独注册属于自己的私有功能。

```python {8}
import asyncio

from amiyabot import AmiyaBot, MultipleAccounts, Message, Chain

bot1 = AmiyaBot(appid='******', token='******', private=True)
bot2 = AmiyaBot(appid='******', token='******')

bot = MultipleAccounts([bot1, bot2])


# 公共功能
@bot.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')


# bot1 的私有功能
@bot1.on_message(keywords='hey')
async def _(data: Message):
    return Chain(data).text(f'hey, my name is Amiyabot')


asyncio.run(bot.start())
```

## 多账号热插拔

多账号支持动态创建和删除里面的实例，也允许先创建**空多账号实例**。随后往里面插入 AmiyaBot 对象。

### MultipleAccounts.append()

插入一个实例

| 参数名             | 类型       | 释义             | 默认值   |
|-----------------|----------|----------------|-------|
| item            | AmiyaBot | AmiyaBot 实例    |       |
| enable_chromium | Bool     | 启动时开启 chromium | False |
| start_up        | Bool     | 插入后立即启动        | True  |

示例

```python
# 创建一个空多账号
bot = MultipleAccounts()
# 插入并启动一个实例
bot.append(AmiyaBot(appid='12345', ...))
# 删除实例，同时关闭实例的连接
del bot['12345']
```
