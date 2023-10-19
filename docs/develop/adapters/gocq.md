# go-cqhttp

[go-cqhttp](https://docs.go-cqhttp.org/) 以下简称 **cqhttp**。它是基于 Mirai 以及 MiraiGo 的 OneBot Golang 原生实现。

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
| host      | str | cqhttp 服务的 ip 地址        |     |
| ws_port   | int | cqhttp 服务的 websocket 端口 |     |
| http_port | int | cqhttp 服务的 http 端口      |     |

```python
from amiyabot.adapters.cqhttp import cq_http

qq = '******'    # 机器人的 QQ 号
token = '******' # gocq 的 access-token

adapter_service = cq_http('127.0.0.1', 8080, 5700)

bot = AmiyaBot(appid=qq, token=token, adapter=adapter_service)
```
