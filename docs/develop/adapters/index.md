# 适配器

总有一些理由让我们不得不选择第三方的服务搭建机器人。如果你是使用 QQ 频道搭建，可跳过本节。

## 适配器参数 adapter

AmiyaBot 对象拥有一个适配器参数 adapter，接受一个 `BotAdapterProtocol` 的子类。默认值为 QQ
频道机器人的适配器 `TencentBotInstance`。

```python
class AmiyaBot(BotHandlerFactory):
    def __init__(self,
                 ...
                 adapter: Type[BotAdapterProtocol] = TencentBotInstance):
        ...
```

通过传入不同的适配器，让 AmiyaBot 实例化为不同的机器人实例。
