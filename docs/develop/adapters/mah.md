# mirai-api-http

[mirai-api-http](https://docs.mirai.mamoe.net/mirai-api-http/) 以下简称 **mah**。是一个在全平台下运行，提供 QQ Android
协议支持的高效率机器人库。

如要使用此适配器，需要 mah 同时开启了 websocket 和 http 服务。AmiyaBot 将通过 mirai_api_http 方法实例化它的适配器。

## 连接 mah

| 参数名       | 类型  | 释义                   | 默认值 |
|-----------|-----|----------------------|-----|
| host      | str | mah 服务的 ip 地址        |     |
| ws_port   | int | mah 服务的 websocket 端口 |     |
| http_port | int | mah 服务的 http 端口      |     |

```python
from amiyabot.adapters.mirai import mirai_api_http

qq = '******'       # 机器人的 QQ 号
auth_key = '******' # mah 的 verifyKey

adapter_service = mirai_api_http('127.0.0.1', 8060, 8080)

bot = AmiyaBot(appid=qq, token=auth_key, adapter=adapter_service)
```
