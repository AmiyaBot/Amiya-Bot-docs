# 选择适配器

> 本节将为你解释如何使用适配器以及它在本框架里的歧义。

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

我们通过传入不同的适配器，让 AmiyaBot 实例化为不同的机器人实例。

## 使用 KOOK 适配器

[KOOK](https://www.kookapp.cn/) 是一款免费无广告的语音沟通工具。

KOOK 适配器不需要 `appid`，只需要传入 `token` 参数即可。

```python
from amiyabot import KOOKBotInstance

ws_token = '******' # websocket Token

bot = AmiyaBot(token=ws_token, adapter=KOOKBotInstance)
```

## 使用 mirai-api-http 适配器

[mirai-api-http](https://docs.mirai.mamoe.net/mirai-api-http/) 以下简称 **mah**。它是目前使用较为广泛的一个第三方 QQ
机器人服务。

如要使用此适配器，需要 mah 同时开启了 websocket 和 http 服务。AmiyaBot 将通过 mirai_api_http 方法实例化它的适配器。

### mirai_api_http

| 参数名       | 类型  | 释义                   | 默认值 |
|-----------|-----|----------------------|-----|
| host      | str | 访问 mah 的 ip 地址       |     |
| ws_port   | int | mah 的 websocket 服务端口 |     |
| http_port | int | mah 的 http 服务端口      |     |

```python
from amiyabot.adapters.mirai import mirai_api_http

qq = '******'       # 机器人的 QQ 号
auth_key = '******' # mah 的 verifyKey

adapter_service = mirai_api_http('127.0.0.1', 8060, 8080)

bot = AmiyaBot(appid=qq, token=auth_key, adapter=adapter_service)
```

## 使用 go-cqhttp 适配器

[go-cqhttp](https://docs.go-cqhttp.org/) 以下简称 **cqhttp**。它是 [OneBot](https://onebot.dev/) 标准的 Golang 原生实现。

::: tip 关于 OneBot 标准<br>
理论上只要遵循 OneBot 标准的实现都可以使用本适配器。目前本框架仅使用了 go-cqhttp 进行测试开发。
:::

::: danger 注意<br>
go-cq 的配置中，`post-format` 需更改为 `array`。

```yaml
# config.yml
message:
    # 上报数据类型
    # 可选: string, array
    post-format: array
```

:::

### cq_http

| 参数名       | 类型  | 释义                      | 默认值 |
|-----------|-----|-------------------------|-----|
| host      | str | 访问 cqhttp 的 ip 地址       |     |
| ws_port   | int | cqhttp 的 websocket 服务端口 |     |
| http_port | int | cqhttp 的 http 服务端口      |     |

```python
from amiyabot.adapters.cqhttp import cq_http

qq = '******'    # 机器人的 QQ 号
token = '******' # gocq 的 access-token

adapter_service = cq_http('127.0.0.1', 8080, 5700)

bot = AmiyaBot(appid=qq, token=token, adapter=adapter_service)
```

## 歧义

如果选用的适配器是创建一个 QQ 群机器人，那么在接下来的开发中，你必须适应因 QQ 群和 QQ 频道的不同所带来的一些术语上的歧义。

| 术语关键词      | QQ 频道的释义  | KOOK 的释义     | QQ 群的释义   |
|------------|-----------|--------------|-----------|
| appid      | App ID    | 机器人的 user_id | 机器人的 QQ 号 |
| token      | App Token | 机器人的 Token   |           |
| guild      | 频道        | 服务器          | 无         |
| guild_id   | 频道ID      | 服务器ID        | 无         |
| channel    | 子频道       | 频道           | QQ群       |
| channel_id | 子频道ID     | 频道ID         | QQ群号      |
