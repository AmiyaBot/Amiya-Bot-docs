# QQ 群 API

QQ 群 / 全域适配器下，`bot.instance.api` 的类型为 `QQGroupAPI`（继承自 `QQGuildAPI`）。

```python
from amiyabot.adapters.tencent.qqGroup.api import QQGroupAPI

api: QQGroupAPI = bot.instance.api
```

::: tip 通用方法 <br>
`get` / `post` / `request` 三个通用方法见 [API 使用说明](/develop/basic/api/)。
:::

## 消息

### post_group_message

发送群聊消息。

| 参数名            | 类型   | 释义          | 默认值 |
|----------------|------|-------------|-----|
| channel_openid | str  | 群 OpenID     |     |
| payload        | dict | 消息体         |     |

### post_private_message

发送单聊消息。

| 参数名         | 类型   | 释义       | 默认值 |
|-------------|------|----------|-----|
| user_openid | str  | 用户 OpenID |     |
| payload     | dict | 消息体      |     |

### delete_group_message

撤回群聊消息，**发送超过 2 分钟不可撤回**。

| 参数名          | 类型  | 释义      | 默认值 |
|--------------|-----|---------|-----|
| group_openid | str | 群 OpenID |     |
| message_id   | str | 消息 ID   |     |

### delete_private_message

撤回单聊消息，**发送超过 2 分钟不可撤回**。

| 参数名         | 类型  | 释义       | 默认值 |
|-------------|-----|----------|-----|
| user_openid | str | 用户 OpenID |     |
| message_id  | str | 消息 ID    |     |

### post_stream_message

流式发送单聊消息（**仅单聊**）。首片响应的 `id` 即后续分片需携带的 `stream_msg_id`。

| 参数名            | 类型    | 释义                                   | 默认值       |
|----------------|-------|--------------------------------------|-----------|
| user_openid    | str   | 用户 OpenID                            |           |
| content_raw    | str   | Markdown / 文本内容                      |           |
| index          | int   | 分片序号，从 0 递增                          | 0         |
| input_state    | int   | 输入状态，1=生成中，10=生成结束                   | 1         |
| input_mode     | str   | append=拼接 / replace=全量替换             | 'replace' |
| content_type   | str   | text / markdown                      | 'markdown' |
| stream_msg_id  | str   | 流式消息 ID，首片由服务端返回，后续分片需携带             | None      |
| msg_id         | str   | 被动回复消息 ID                             | None      |
| event_id       | str   | 被动回复事件 ID                             | None      |
| msg_seq        | int   | 消息序号，用于去重                            | None      |

## 富媒体上传

::: warning 单聊与群聊隔离 <br>
单聊与群聊的上传接口**互不通用**，上传的文件不能跨场景发送。
:::

`file_type` 取值：`1`=图片 `2`=视频 `3`=语音 `4`=文件。

### upload_file

整文件上传（传入公网可访问的 URL，平台自动转存）。

| 参数名           | 类型   | 释义                                  | 默认值   |
|---------------|------|-------------------------------------|-------|
| openid        | str  | 用户 / 群 OpenID                       |       |
| file_type     | int  | 文件类型                                |       |
| url           | str  | 文件 URL                              |       |
| srv_send_msg  | bool | 是否上传后直接发送（会占用主动消息频次）                | False |
| is_direct     | bool | 是否为单聊（决定使用 users 还是 groups 端点）      | False |
| file_name     | str  | 文件名                                 | None  |
| upload_id     | str  | 分片上传 ID；传入时走合并路径，`url` 可为空         | None  |

### upload_prepare

分片上传第一步：预上传，返回 `upload_id`、`block_size` 与各分片预签名 URL。

| 参数名         | 类型   | 释义                       | 默认值   |
|-------------|------|--------------------------|-------|
| openid      | str  | 用户 / 群 OpenID            |       |
| file_type   | int  | 文件类型                     |       |
| file_size   | int  | 文件大小（字节）                 |       |
| file_name   | str  | 文件名                      |       |
| md5         | str  | 整个文件的 MD5                |       |
| sha1        | str  | 整个文件的 SHA1               |       |
| md5_10m     | str  | 前 10002432 字节的 MD5（秒传判断） |       |
| is_direct   | bool | 是否为单聊                    | False |

### upload_part_finish

分片上传第三步：通知服务端某个分片已完成（每片 PUT 成功后调用）。

| 参数名         | 类型   | 释义                     | 默认值   |
|-------------|------|------------------------|-------|
| openid      | str  | 用户 / 群 OpenID          |       |
| upload_id   | str  | 预上传返回的 upload_id       |       |
| part_index  | int  | 分片序号，从 0 开始            |       |
| block_size  | int  | 该分片实际字节数               | 0     |
| md5         | str  | 该分片的 MD5               | None  |
| is_direct   | bool | 是否为单聊                  | False |

### 分片上传流程

```
1. upload_prepare      → upload_id + block_size + 预签名 URL 列表
2. 按 block_size 分片，逐片 HTTP PUT 到预签名 URL
3. 每片成功后调用 upload_part_finish
4. 全部完成后调用 upload_file(upload_id=...) 合并 → 得到 file_info
```

拿到 `file_info` 后，以 `msg_type=7` 发送：

```python
{
    'msg_type': 7,
    'media': {'file_info': '...'},
}
```

## 群管理

::: danger 需要内邀权限 <br>
以下接口中，除 `approval_group_join_request` 外，官方均标注「该能力正在内邀接入中」。
普通机器人调用会返回错误码 **`11253`（应用无接口访问权限）**，需向平台运营申请白名单。

`get_group_restrict_chat_setting` / `set_group_member_mute` / `get_group_join_request_list` /
`approval_group_join_request` 另需机器人拥有**群管理员**身份。
:::

### get_group_info

获取群基本信息。

| 参数名          | 类型  | 释义      | 默认值 |
|--------------|-----|---------|-----|
| group_openid | str | 群 OpenID |     |

### get_group_bot_state

获取机器人在指定群中的状态信息。

| 参数名          | 类型  | 释义      | 默认值 |
|--------------|-----|---------|-----|
| group_openid | str | 群 OpenID |     |

### get_group_members

获取群成员列表，单页最多 30 条。

| 参数名          | 类型  | 释义                       | 默认值 |
|--------------|-----|--------------------------|-----|
| group_openid | str | 群 OpenID                  |     |
| cursor       | str | 分页游标，首次传空串               | ''  |

### get_group_member

获取单个群成员信息。

| 参数名           | 类型  | 释义        | 默认值 |
|---------------|-----|-----------|-----|
| group_openid  | str | 群 OpenID   |     |
| member_openid | str | 成员 OpenID |     |

### batch_remove_group_members

批量移除群成员，单次最多 20 个。

| 参数名                      | 类型        | 释义            | 默认值   |
|--------------------------|-----------|---------------|-------|
| group_openid             | str       | 群 OpenID       |       |
| member_openids           | List[str] | 成员 OpenID 列表   |       |
| add_to_member_blacklist  | bool      | 是否同时加入群黑名单    | False |

### get_group_member_blacklist

查询群黑名单列表。

| 参数名          | 类型  | 释义              | 默认值 |
|--------------|-----|-----------------|-----|
| group_openid | str | 群 OpenID         |     |
| cursor       | str | 分页游标            | ''  |
| limit        | int | 单页数量，最大 100     | 20  |

### modify_group_member_blacklist

群黑名单操作。目标用户**不在群中**时才能加入黑名单。

| 参数名            | 类型        | 释义                    | 默认值 |
|----------------|-----------|-----------------------|-----|
| group_openid   | str       | 群 OpenID               |     |
| op             | str       | `add` 加入 / `del` 移出   |     |
| member_openids | List[str] | 成员 OpenID 列表，最多 20 个  |     |

### get_group_restrict_chat_setting

查询群禁言状态（含全员禁言模式与成员级禁言列表）。**需群管理员身份。**

| 参数名          | 类型  | 释义      | 默认值 |
|--------------|-----|---------|-----|
| group_openid | str | 群 OpenID |     |

### set_group_member_mute

设置群成员禁言。**需群管理员身份**，最长禁言 30 天，只能操作普通成员。

| 参数名          | 类型         | 释义        | 默认值 |
|--------------|------------|-----------|-----|
| group_openid | str        | 群 OpenID   |     |
| members      | List[dict] | 禁言设置列表，最多 20 个 |     |

`members` 每项结构：

```python
{
    'op': 'add',                 # add 增加 / update 更新到期时间 / del 解除
    'member_openid': '...',
    'mute_expire_at': '2026-08-05T11:23:05+08:00',  # RFC3339
}
```

### get_group_join_request_list

拉取入群申请列表。**需群管理员身份。**

| 参数名          | 类型  | 释义          | 默认值 |
|--------------|-----|-------------|-----|
| group_openid | str | 群 OpenID     |     |
| cursor       | str | 分页游标        | ''  |
| limit        | int | 单页数量，最大 50  | 20  |

### approval_group_join_request

审批入群申请。**需群管理员身份。**

| 参数名                     | 类型   | 释义                              | 默认值   |
|-------------------------|------|---------------------------------|-------|
| group_openid            | str  | 群 OpenID                         |       |
| member_openid           | str  | 申请人 OpenID                       |       |
| op                      | str  | `approve` 通过 / `decline` 拒绝      |       |
| join_request_id         | str  | 申请 ID，来自事件或列表                    | None  |
| reject_reason           | str  | 拒绝理由，`op=decline` 时可用            | None  |
| add_to_member_blacklist | bool | 是否同时加入群黑名单，`op=decline` 时可用       | False |

## 互动与其他

### put_interaction_response

回应互动事件（按钮回调等）。**收到 `INTERACTION_CREATE` 后应尽快调用**，否则客户端会一直处于 loading 状态。

| 参数名            | 类型  | 释义                                       | 默认值 |
|----------------|-----|------------------------------------------|-----|
| interaction_id | str | 互动事件 ID（事件体的 `id`）                        |     |
| code           | int | 0=成功 1=失败 2=频繁 3=重复 4=无权限 5=仅管理员操作         | 0   |

### generate_url_link

生成机器人分享链接。

| 参数名           | 类型  | 释义                          | 默认值  |
|---------------|-----|-----------------------------|------|
| callback_data | str | 用户添加机器人时透传的数据，最长 32 字符        | None |
