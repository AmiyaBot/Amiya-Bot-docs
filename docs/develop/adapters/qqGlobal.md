# QQ 全域机器人 <span class="beta-tag">Beta</span>

全域机器人指同时支持群聊、消息记录和频道的机器人

## 创建全域适配器

全域适配器的参数和用法和[QQ 群机器人](/develop/adapters/qqGroup.html)一致，请参考文档。

创建后机器人能够同时接收到来自群聊、消息记录和频道的消息。

```python
from amiyabot.adapters.tencent.qqGlobal import qq_global

client_secret = '******' # 密钥

bot = AmiyaBot(appid='******', token='******', adapter=qq_global(client_secret))
```
