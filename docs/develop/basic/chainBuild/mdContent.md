# 自定义 Markdown 消息

发送 QQ 官方支持的自定义 Markdown 消息（客户端原生渲染），单聊与群聊无需申请模版。

::: warning 本页是官方 Markdown 消息 <br>
若想把 Markdown 渲染成**一张图片**再发送，请使用 [Markdown 生成的图片](/develop/basic/chainBuild/markdown.html)。
使用平台**模版**发送请查看 [Markdown 模版](/develop/basic/chainBuild/mdTemplate.html)。
:::

## Chain().markdown_content()

| 参数名                         | 类型              | 释义                                        | 默认值  |
|-----------------------------|-----------------|-------------------------------------------|------|
| content                     | str             | Markdown 文本内容                             |      |
| keyboard                    | InlineKeyboard  | 内嵌键盘（自定义按钮）                                | None |
| keyboard_template_id        | str             | 内嵌键盘模版 ID，与 `keyboard` 互斥                  | ''   |
| force_verify_image_resource | bool            | 是否校验 Markdown 内图片转存结果；为 True 时转存失败将中断发送 | None |

```python
@bot.on_message(keywords='签到')
async def _(data: Message):
    return Chain(data).markdown_content('## 每日签到\n\n今日签到成功！获得 **50** 积分')
```

::: danger 注意 <br>
- Markdown 内的**图片必须使用公网可访问的 URL**。
- 消息长度超出限制会返回错误码 `40054007`。
:::

支持的语法（标题、加粗、斜体、删除线、链接、图片、列表、块引用、分割线等）详见
[官方文档](https://bot.q.qq.com/wiki/develop/api-v2/server-inter/message/type/markdown.html)。

## 配合内嵌键盘

传入 `InlineKeyboard` 即可附带按钮，用户点击后会触发 `INTERACTION_CREATE` 事件。

```python
from amiyabot.builtin.messageChain.keyboard import InlineKeyboard

keyboard = InlineKeyboard()
keyboard.add_row().add_button(
    button='btn_signin',
    render_label='签到',
    render_style=1,
    action_type=2,
    action_data='/签到',
    action_enter=True,
)

@bot.on_message(keywords='菜单')
async def _(data: Message):
    return Chain(data).markdown_content('## 功能菜单\n\n点击下方按钮开始', keyboard=keyboard)
```

按钮回调需回应，否则客户端会保持 loading。回调事件没有原消息 ID，回复时使用 `Event.reply()`
（内部以事件 `id` 作为 `event_id` 锚点）：

```python
@bot.on_event('INTERACTION_CREATE')
async def _(event: Event, instance: BotAdapterProtocol):
    # 结束用户端的 loading 状态
    await event.ack_interaction()

    # 回一条事件锚定的消息，可以继续带 markdown / 键盘
    await event.reply(Chain(at=False).markdown_content('已收到你的点击'))
```

::: tip 同一事件最多回复 5 条 <br>
事件锚定的被动消息在 5 分钟内有效且上限 5 条，超出会抛出 `QQGroupMessageError`。
详见[事件监听 - 以事件为锚点回复消息](/develop/basic/handleEvents.html#以事件为锚点回复消息)。
:::

## 相关文档

- [Markdown 模版](/develop/basic/chainBuild/mdTemplate.html)
- [Markdown 生成的图片](/develop/basic/chainBuild/markdown.html)
- [事件监听](/develop/basic/handleEvents.html)
