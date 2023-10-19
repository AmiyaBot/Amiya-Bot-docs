# OneBot v12

[OneBot 12](https://onebot.dev/) 以下简称 **ob12**
。是一个聊天机器人应用接口标准，旨在统一不同聊天平台上的机器人应用开发接口，使开发者只需编写一次业务逻辑代码即可应用到多种机器人平台。<br>
使用此适配器，可连接任何 OneBot 12 实现的机器人平台。

### onebot12

| 参数名       | 类型  | 释义                    | 默认值 |
|-----------|-----|-----------------------|-----|
| host      | str | ob12 服务的 ip 地址        |     |
| ws_port   | int | ob12 服务的 websocket 端口 |     |
| http_port | int | ob12 服务的 http 端口      |     |

```python
from amiyabot.adapters.onebot12 import onebot12

appid = '******'    # 机器人的账号（如需要）
token = '******' # access-token

adapter_service = onebot12('127.0.0.1', 8080, 8060)

bot = AmiyaBot(appid=appid, token=token, adapter=adapter_service)
```
