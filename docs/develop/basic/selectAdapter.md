# 选择适配器

> 本节将为你解释如何使用适配器以及它在本框架里的歧义。

总有一些理由让我们不得不选择第三方的服务搭建机器人。如果你是使用 QQ 频道搭建，可跳过本节。

## 适配器参数 adapter

AmiyaBot 对象拥有一个适配器参数 adapter，接受一个 `BotAdapterProtocol` 的子类。默认值为 QQ 频道机器人的适配器 `TencentBotInstance`。

```python
class AmiyaBot(BotHandlerFactory):
    def __init__(self,
                 appid: str,
                 token: str,
                 private: bool = False,
                 adapter: Type[BotAdapterProtocol] = TencentBotInstance):
        ...
```

我们通过传入不同的适配器，让 AmiyaBot 实例化为不同的机器人实例。

## 使用 mirai-api-http 适配器

[mirai-api-http](https://docs.mirai.mamoe.net/mirai-api-http/) 以下简称 **mah**。它是目前使用较为广泛的一个第三方 QQ 机器人服务。

如要使用此适配器，需要 mah 同时开启了 websocket 和 http 服务。AmiyaBot 将通过 mirai_api_http 方法实例化它的适配器。

### mirai_api_http

| 参数名       | 类型     | 释义                   | 默认值 |
|-----------|--------|----------------------|-----|
| host      | String | 访问 mah 的 ip 地址       |     |
| ws_port   | Int    | mah 的 websocket 服务端口 |     |
| http_port | Int    | mah 的 http 服务端口      |     |

```python
from amiyabot.adapters.mirai import mirai_api_http

qq = '******'       // 机器人的 QQ 号
auth_key = '******' // mah 的 verifyKey

adapter_service = mirai_api_http('127.0.0.1', 8060, 8080)

bot = AmiyaBot(appid=qq, token=auth_key, adapter=adapter_service)
```

## 使用 go-cqhttp 适配器

[go-cqhttp](https://docs.go-cqhttp.org/) 以下简称 **cqhttp**。它是 [OneBot](https://onebot.dev/) 标准的 Golang 原生实现。

::: tip 关于 OneBot 标准<br>
理论上只要遵循 OneBot 标准的实现都可以使用本适配器。目前本框架仅使用了 go-cqhttp 进行测试开发。
:::

### cq_http

| 参数名       | 类型     | 释义                      | 默认值 |
|-----------|--------|-------------------------|-----|
| host      | String | 访问 cqhttp 的 ip 地址       |     |
| ws_port   | Int    | cqhttp 的 websocket 服务端口 |     |
| http_port | Int    | cqhttp 的 http 服务端口      |     |

```python
from amiyabot.adapters.cqhttp import cq_http

qq = '******' // 机器人的 QQ 号

adapter_service = cq_http('127.0.0.1', 8080, 5700)

bot = AmiyaBot(appid=qq, token='', adapter=adapter_service)
```

## 歧义

使用以上适配器将会创建一个 QQ 群机器人，在接下来的开发中，你必须适应因 QQ 群和 QQ 频道的不同所带来的一些术语上的歧义。

| 术语关键词      | 对应 QQ 频道的释义 | 对应 QQ 群的释义    |
|------------|-------------|---------------|
| appid      | App ID      | 机器人的 QQ 号     |
| token      | App Token   | mah 的 AuthKey |
| guild      | 频道          | 无             |
| guild_id   | 频道ID        | 无             |
| channel    | 子频道         | QQ群           |
| channel_id | 子频道ID       | QQ群号          |
