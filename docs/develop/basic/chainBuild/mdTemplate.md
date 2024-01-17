# Markdown 模版消息

发送 QQ 频道 Markdown
模板消息，详情请查看[发送 markdown 消息](https://bot.q.qq.com/wiki/develop/api/openapi/message/post_markdown_messages.html)。

## Chain().markdown_template()

| 参数名                  | 类型             | 释义              | 默认值 |
|----------------------|----------------|-----------------|-----|
| template_id          | str            | 模版 ID           |     |
| params               | List[dict]     | 模版 key-value 数据 |     |
| keyboard             | InlineKeyboard | 按钮消息（自定义）       |     |
| keyboard_template_id | str            | 按钮消息（模版）        |     |

```python
params = [
    {'key': 'para1', 'values': ['段落1']},
    {'key': 'para2', 'values': ['段落2']},
    {'key': 'desc', 'values': ['简介']},
]

Chain(data, at=False).markdown_template('101993071_1658748972', params)
```

## 按钮消息

[发送含有消息按钮组件的消息](https://bot.q.qq.com/wiki/develop/api/openapi/message/post_keyboard_messages.html)

### 使用按钮模版

```python {4}
# 必须跟随 md 模版发送
Chain(data, at=False).markdown_template(
    '101993071_1658748972',
    params,
    keyboard_template_id='102005657_1703561314',
)
```

### 自定义按钮

自定义按钮通过内置的 InlineKeyboard 类构建。

```python
from amiyabot import InlineKeyboard

@bot.on_message(keywords='hello')
async def _(data: Message):
    keyboard = InlineKeyboard(data.instance.appid)

    # 添加第一行按钮组
    row = keyboard.add_row()
    row.add_button('1', '按钮1')
    row.add_button('2', '按钮2')

    # 添加第二行按钮组
    row2 = keyboard.add_row()
    row2.add_button('3', '按钮3')
    row2.add_button('4', '更多功能...', action_type=0)

    # 必须跟随 md 模版发送
    chain = Chain(data, at=False).markdown_template(
        '102005657_1704356453',
        [{'key': 'content', 'values': ['Markdown 测试']}],
        keyboard=keyboard,
    )

    # 通过主动消息发送
    await bot[data.instance.appid].send_message(chain, channel_id=data.channel_id)
```
