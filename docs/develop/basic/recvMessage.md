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

| 属性           | 类型                 | 释义                        |
|--------------|--------------------|---------------------------|
| bot          | BotAdapterProtocol | bot 实例                    |
| message      | Dict               | 原始消息字典                    |
| message_id   | String             | 消息ID                      |
| face         | List\[String]      | 消息内表情列表                   |
| image        | List\[String]      | 消息内图片列表                   |
| text         | String             | 消息文本（去字符处理、中间件处理）         |
| text_digits  | String             | 消息文本（去字符处理、中间件处理、中文转数字处理） |
| text_origin  | String             | 消息文本（中间件处理）               |
| text_initial | String             | 消息文本（无处理）                 |
| text_words   | List\[String]      | 消息文本分词                    |
| at_target    | List\[String]      | 消息内 @ 的对象列表               |
| is_at        | Bool               | 是否 @ 机器人                  |
| is_admin     | Bool               | 是否为子频道管理员                 |
| is_direct    | Bool               | 是否是私信消息                   |
| user_id      | String             | 用户ID                      |
| guild_id     | String             | 频道ID                      |
| src_guild_id | String             | 来源频道ID，私信下有效              |
| channel_id   | String             | 子频道ID                     |
| nickname     | String             | 用户昵称                      |
| avatar       | String             | 用户头像的URL                  |
| joined_at    | ISO8601 timestamp  | 用户加入频道的时间                 |
| time         | Int                | 消息时间                      |

### 方法

| 方法名          | 参数                                     | 释义      | 异步  |
|--------------|----------------------------------------|---------|-----|
| send         | reply                                  | 发送一条消息  | 是   |
| wait         | reply,force,max_time,data_filter       | 等待用户消息  | 是   |
| wait_channel | reply,force,clean,max_time,data_filter | 等待子频道消息 | 是   |
