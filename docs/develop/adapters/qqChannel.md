# QQ 频道机器人

按照 [基础指南](/develop/basic/index.md) 创建的机器人即为 QQ 频道机器人，无需额外的适配器。

## 事件分片

考虑到开发者事件接收时可以实现负载均衡，QQ
提供了分片逻辑，事件通知会落在不同的分片上，可参考官方文档 [分片连接LoadBalance](https://bot.q.qq.com/wiki/develop/api-v2/dev-prepare/interface-framework/event-emit.html#%E5%88%86%E7%89%87%E8%BF%9E%E6%8E%A5loadbalance)
了解分片机制。

创建分片连接需要使用分片适配器 `qq_guild_shards`

```python
from amiyabot.adapters.tencent.qqGuild import qq_guild_shards

bot1 = AmiyaBot(appid='...', token='...', adapter=qq_guild_shards(0, 2))
bot2 = AmiyaBot(appid='...', token='...', adapter=qq_guild_shards(1, 2))
```

::: danger 注意<br>
每个分片的启动应当**按顺序缓慢进行**，切勿同时启动，以免 gateway 返回的信息一致造成连接失败。

```python
# 仅作示意，实际上每个分片应当是独立的服务。
def start():
    asyncio.create_task(bot1.start())
    time.sleep(2)
    asyncio.create_task(bot2.start())
```

:::

`qq_guild_shards` 参数

| 参数名         | 类型  | 释义          | 默认值 |
|-------------|-----|-------------|-----|
| shard_index | int | 分片下标，从 0 开始 |     |
| shards      | int | 分片总数        |     |

## 沙箱环境

使用 `QQGuildSandboxBotInstance` 适配器将 API 调用更改为沙箱环境。沙箱环境只会收到测试频道的事件，且调用 openapi 仅能操作测试频道。

```python
from amiyabot.adapters.tencent.qqGuild import QQGuildSandboxBotInstance

bot = AmiyaBot(..., adapter=QQGuildSandboxBotInstance)
```
