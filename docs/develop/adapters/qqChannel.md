# QQ 频道机器人

按照 [基础指南](/develop/basic/index.md) 创建的机器人即为 QQ 频道机器人，无需额外的适配器。

## 沙箱环境

使用 `QQGuildSandboxBotInstance` 适配器将 API 调用更改为沙箱环境。沙箱环境只会收到测试频道的事件，且调用 openapi 仅能操作测试频道。

```python
from amiyabot.adapters.tencent.qqGuild import QQGuildSandboxBotInstance

bot = AmiyaBot(..., adapter=QQGuildSandboxBotInstance)
```
