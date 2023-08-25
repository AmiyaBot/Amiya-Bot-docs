# 接收消息

`Message` 对象是接收到对话之后预处理化的一个消息数据对象。内含这则消息相关的各项属性，以及针对这则消息的一些操作API。

该对象主要应用在功能函数和自定义检查中。建议在开发时引入 Message 对象并注解在对应地方。

```python {1}
from amiyabot import Message


async def my_verify(data: Message):
    ...


@bot.on_message(verify=my_verify)
async def _(data: Message):
    print('recv:', data.text)
    ...
```

## Message 对象

### 属性

| 属性            | 类型                                                                                            | 释义                  |
|---------------|-----------------------------------------------------------------------------------------------|---------------------|
| instance      | BotAdapterProtocol                                                                            | bot 实例              |
| message       | Dict                                                                                          | 原始消息字典              |
| message_id    | str                                                                                           | 消息ID                |
| message_type  | str                                                                                           | 消息类型（适用于群聊适配器）      |
| face          | List\[String]                                                                                 | 消息内表情列表             |
| image         | List\[String]                                                                                 | 消息内图片列表             |
| text          | str                                                                                           | 消息文本（中间件处理）         |
| text_digits   | str                                                                                           | 消息文本（中间件处理、中文转数字处理） |
| text_unsigned | str                                                                                           | 消息文本（去字符处理）         |
| text_original | str                                                                                           | 消息文本（原始文本）          |
| text_words    | List\[String]                                                                                 | 消息文本分词              |
| at_target     | List\[String]                                                                                 | 消息内 @ 的对象列表         |
| is_at         | bool                                                                                          | 是否 @ 机器人            |
| is_admin      | bool                                                                                          | 是否为子频道管理员           |
| is_direct     | bool                                                                                          | 是否是私信消息             |
| user_id       | str                                                                                           | 用户ID                |
| guild_id      | str                                                                                           | 频道ID                |
| src_guild_id  | str                                                                                           | 来源频道ID，私信下有效        |
| channel_id    | str                                                                                           | 子频道ID               |
| nickname      | str                                                                                           | 用户昵称                |
| avatar        | str                                                                                           | 用户头像的URL            |
| joined_at     | ISO8601 timestamp                                                                             | 用户加入频道的时间           |
| verify        | [Verify 对象](/develop/basic/messageHandler.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A3%80%E6%9F%A5) | 自定义检查的结果            |
| time          | int                                                                                           | 消息时间                |

### 方法

| 方法名          | 参数                                     | 释义      | 异步 |
|--------------|----------------------------------------|---------|----|
| send         | reply                                  | 发送一条消息  | 是  |
| wait         | reply,force,max_time,data_filter       | 等待用户消息  | 是  |
| wait_channel | reply,force,clean,max_time,data_filter | 等待子频道消息 | 是  |
| recall       |                                        | 撤回消息    | 是  |
