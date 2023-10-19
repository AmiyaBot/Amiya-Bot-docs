# OneBot v11 <span class="beta-tag">Beta</span>

[OneBot 11](https://github.com/botuniverse/onebot-11) 以下简称 **ob11**。该标准是从原 CKYU 平台的 CQHTTP
插件接口修改而来的通用聊天机器人应用接口标准。<br>
使用此适配器，可连接任何 OneBot 11 实现的机器人平台。

### onebot11

| 参数名       | 类型  | 释义                    | 默认值 |
|-----------|-----|-----------------------|-----|
| host      | str | ob11 服务的 ip 地址        |     |
| ws_port   | int | ob11 服务的 websocket 端口 |     |
| http_port | int | ob11 服务的 http 端口      |     |

```python
from amiyabot.adapters.onebot11 import onebot11

appid = '******'    # 机器人的账号（如需要）
token = '******' # access-token

adapter_service = onebot11('127.0.0.1', 8080, 8060)

bot = AmiyaBot(appid=appid, token=token, adapter=adapter_service)
```
