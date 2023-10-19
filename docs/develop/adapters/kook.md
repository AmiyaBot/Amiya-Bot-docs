# KOOK 机器人

[KOOK](https://www.kookapp.cn/) 是一款免费无广告的语音沟通工具，并提供了强大的官方机器人支持。

KOOK 适配器不需要 `appid`，只需要传入 [应用的 websocket token](https://developer.kookapp.cn/app/index) 参数即可。

```python
from amiyabot import KOOKBotInstance

ws_token = '******' # websocket Token

bot = AmiyaBot(token=ws_token, adapter=KOOKBotInstance)
```
