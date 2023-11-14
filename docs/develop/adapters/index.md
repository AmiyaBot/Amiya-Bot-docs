# 适配器

更改默认适配器可以让你搭建其他平台的机器人，除了 `bot.instance.api`
有差异外，你几乎可以完全按照文档的开发方式进行。我们尽量为所有适配器的基本逻辑实现了相同的效果，使得在不同平台下 AmiyaBot
的开发差异变得极其之小。

## 适配器参数 adapter

AmiyaBot 对象拥有一个适配器参数 adapter，接受一个 `BotAdapterProtocol` 的子类。默认值为 QQ
频道机器人的适配器 `QQGuildBotInstance`。

```python
class AmiyaBot(BotHandlerFactory):
    def __init__(self,
                 ...
                 adapter: Type[BotAdapterProtocol] = QQGuildBotInstance):
        ...
```

从左侧导航挑选合适的适配器，更改你的实例。
