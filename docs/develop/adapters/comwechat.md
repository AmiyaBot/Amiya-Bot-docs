# ComWeChatBot Client <span class="beta-tag">Beta</span>

[ComWeChatBot Client](https://justundertaker.github.io/ComWeChatBotClient/) 是 PC hook 微信的协议端。

需在服务配置开启 [正向 websocket](https://justundertaker.github.io/ComWeChatBotClient/guide/#websocekt-type)。

## 连接 ComWeChatBot

| 参数名       | 类型  | 释义               | 默认值 |
|-----------|-----|------------------|-----|
| host      | str | 服务的 ip 地址        |     |
| ws_port   | int | 服务的 websocket 端口 |     |
| http_port | int | 服务的 http 端口      |     |

```python
from amiyabot.adapters.comwechat import com_wechat

token = '******' # access-token

adapter_service = com_wechat('127.0.0.1', 8080, 8060)

bot = AmiyaBot(appid=appid, token=token, adapter=adapter_service)
```
