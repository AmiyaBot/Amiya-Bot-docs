# 发送合并转发消息 <span class="beta-tag">Beta</span>

合并转发消息不是 Chain 对象的方法，需要使用适配器提供的工具类构建。

::: danger 注意<br>
QQ 频道机器人暂时不支持发送合并转发消息，目前仅支持 `mirai-api-http` 和 `cq-http`。
:::

```python
from amiyabot.adapters.mirai import MiraiForwardMessage
# from amiyabot.adapters.cqhttp import CQHTTPForwardMessage

...

@bot.on_message(keywords='hello')
async def _(data: Message):
    forward = MiraiForwardMessage(data)
    # forward = CQHTTPForwardMessage(data)

    chain = Chain().text(f'hello, {data.nickname}')

    await forward.add_message(chain, user_id=..., nickname='...')
    await forward.send()
```

## 添加自定义消息

**add_message**

| 参数名      | 类型                  | 释义                                                            | 默认值 |
|----------|---------------------|---------------------------------------------------------------|-----|
| chain    | Union\[Chain, List] | Chain 对象，可为[空 Chain](/develop/basic/sendMessage.html#空-chain) |     |
| user_id  | Int                 | 用户 ID                                                         |     |
| nickname | String              | 用户昵称（可自定义）                                                    |     |
| time     | Int                 | 发送时间                                                          | 0   |

- `user_id` 为实际 QQ 用户的 QQ 号，可以是任意人，在合并消息内显示其头像。
- `nickname` 为自定义的昵称。

如果 `chain` 参数传入了空 Chain，则 `user_id` 和 `nickname` 为必须参数。

```python
await forward.add_message(Chain(data).text(...))
await forward.add_message(Chain().text(...), user_id=..., nickname='...')
```

## 添加指定 ID 的消息

**add_message_by_id**

| 参数名        | 类型  | 释义    | 默认值 |
|------------|-----|-------|-----|
| message_id | Int | 消息 ID |     |

```python
await forward.add_message_by_id(5128)
```

## 添加嵌套的合并转发消息

为 `add_message` 的 `chain` 参数传入 ForwardMessage 类的 `node` 属性，即可完成合并消息嵌套。

```python {8,10}
@bot.on_message(keywords='hello')
async def _(data: Message):
    forward = MiraiForwardMessage(data)

    await forward.add_message(...)
    await forward.add_message(...)

    forward2 = MiraiForwardMessage(data)

    await forward2.add_message(forward.node, user_id=..., nickname='...')
    await forward2.send()
```

## 发送

**send**

```python
await forward.send()
```
