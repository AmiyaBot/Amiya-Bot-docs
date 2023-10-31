# QQ 频道 API

🚧 API 文档尚处于建设阶段，缺少 api 说明和参数释义，请酌情阅读。🚧

## add_message_reaction

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |
| message_id | str |    |     |
| emoji_type | int |    |     |
| emoji_id   | str |    |     |

## add_pin

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |
| message_id | str |    |     |

## create_announces

| 参数名                | 类型               | 释义 | 默认值 |
|--------------------|------------------|----|-----|
| guild_id           | str              |    |     |
| message_id         | Union[str, None] |    |     |
| channel_id         | Union[str, None] |    |     |
| announces_type     | Union[int, None] |    |     |
| recommend_channels | Union[str, None] |    |     |

## create_channel

| 参数名              | 类型                     | 释义 | 默认值 |
|------------------|------------------------|----|-----|
| guild_id         | str                    |    |     |
| channel_name     | str                    |    |     |
| channel_type     | int                    |    |     |
| channel_sub_type | int                    |    |     |
| position         | Union[int, None]       |    |     |
| parent_id        | Union[str, None]       |    |     |
| private_type     | Union[int, None]       |    |     |
| private_user_ids | Union[List[str], None] |    |     |
| speak_permission | Union[int, None]       |    |     |
| application_id   | Union[str, None]       |    |     |

## create_guild_api_permission_link

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| guild_id   | str |    |     |
| channel_id | str |    |     |
| path       | str |    |     |
| method     | str |    |     |
| desc       | str |    |     |

## create_guild_role

| 参数名      | 类型               | 释义 | 默认值 |
|----------|------------------|----|-----|
| guild_id | str              |    |     |
| name     | Union[str, None] |    |     |
| color    | Union[int, None] |    |     |
| hoist    | int              |    |     |

## create_schedule

| 参数名             | 类型                | 释义 | 默认值 |
|-----------------|-------------------|----|-----|
| channel_id      | str               |    |     |
| name            | str               |    |     |
| description     | str               |    |     |
| start_timestamp | str               |    |     |
| end_timestamp   | str               |    |     |
| creator         | Union[dict, None] |    |     |
| jump_channel_id | Union[str, None]  |    |     |
| remind_type     | Union[str, None]  |    |     |

## create_thread

| 参数名           | 类型  | 释义 | 默认值 |
|---------------|-----|----|-----|
| channel_id    | str |    |     |
| title         | str |    |     |
| content       | str |    |     |
| thread_format | int |    |     |

## delete_announces

| 参数名        | 类型               | 释义 | 默认值 |
|------------|------------------|----|-----|
| guild_id   | str              |    |     |
| message_id | Union[str, None] |    |     |

## delete_channel

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |

## delete_guild_member

| 参数名                     | 类型   | 释义 | 默认值 |
|-------------------------|------|----|-----|
| guild_id                | str  |    |     |
| user_id                 | str  |    |     |
| add_blacklist           | bool |    |     |
| delete_history_msg_days | int  |    |     |

## delete_guild_role

| 参数名      | 类型  | 释义 | 默认值 |
|----------|-----|----|-----|
| guild_id | str |    |     |
| role_id  | str |    |     |

## delete_message

| 参数名        | 类型   | 释义 | 默认值 |
|------------|------|----|-----|
| message_id | str  |    |     |
| target_id  | str  |    |     |
| is_direct  | bool |    |     |
| hidetip    | bool |    |     |

## delete_message_reaction

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |
| message_id | str |    |     |
| emoji_type | int |    |     |
| emoji_id   | str |    |     |

## delete_pin

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |
| message_id | str |    |     |

## delete_schedule

| 参数名         | 类型  | 释义 | 默认值 |
|-------------|-----|----|-----|
| channel_id  | str |    |     |
| schedule_id | str |    |     |

## delete_thread

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |
| thread_id  | str |    |     |

## delete_user_role

| 参数名      | 类型  | 释义 | 默认值 |
|----------|-----|----|-----|
| guild_id | str |    |     |
| user_id  | str |    |     |
| role_id  | str |    |     |

## gateway

| 参数名 | 类型 | 释义 | 默认值 |
|-----|----|----|-----|

## gateway_bot

| 参数名 | 类型 | 释义 | 默认值 |
|-----|----|----|-----|

## get_channel

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |

## get_channel_online_nums

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |

## get_channels

| 参数名      | 类型  | 释义 | 默认值 |
|----------|-----|----|-----|
| guild_id | str |    |     |

## get_guild

| 参数名      | 类型  | 释义 | 默认值 |
|----------|-----|----|-----|
| guild_id | str |    |     |

## get_guild_api_permission

| 参数名      | 类型  | 释义 | 默认值 |
|----------|-----|----|-----|
| guild_id | str |    |     |

## get_guild_member

| 参数名      | 类型  | 释义 | 默认值 |
|----------|-----|----|-----|
| guild_id | str |    |     |
| user_id  | str |    |     |

## get_guild_members

| 参数名      | 类型  | 释义 | 默认值 |
|----------|-----|----|-----|
| guild_id | str |    |     |
| after    | str |    |     |
| limit    | int |    |     |

## get_guild_roles

| 参数名      | 类型  | 释义 | 默认值 |
|----------|-----|----|-----|
| guild_id | str |    |     |

## get_guild_roles_members

| 参数名         | 类型  | 释义 | 默认值 |
|-------------|-----|----|-----|
| guild_id    | str |    |     |
| role_id     | str |    |     |
| start_index | str |    |     |
| limit       | int |    |     |

## get_guilds

| 参数名    | 类型               | 释义 | 默认值 |
|--------|------------------|----|-----|
| before | Union[str, None] |    |     |
| after  | Union[str, None] |    |     |
| limit  | int              |    |     |

## get_me

| 参数名 | 类型 | 释义 | 默认值 |
|-----|----|----|-----|

## get_me_dms

| 参数名          | 类型  | 释义 | 默认值 |
|--------------|-----|----|-----|
| recipient_id | str |    |     |
| src_guild_id | str |    |     |

## get_message

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |
| message_id | str |    |     |

## get_message_reactions

| 参数名        | 类型               | 释义 | 默认值 |
|------------|------------------|----|-----|
| channel_id | str              |    |     |
| message_id | str              |    |     |
| emoji_type | int              |    |     |
| emoji_id   | str              |    |     |
| cookie     | Union[str, None] |    |     |
| limit      | int              |    |     |

## get_message_setting

| 参数名      | 类型  | 释义 | 默认值 |
|----------|-----|----|-----|
| guild_id | str |    |     |

## get_pins

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |

## get_role_permission

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |
| role_id    | str |    |     |

## get_schedule

| 参数名         | 类型  | 释义 | 默认值 |
|-------------|-----|----|-----|
| channel_id  | str |    |     |
| schedule_id | str |    |     |

## get_schedules

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |
| since      | int |    |     |

## get_thread

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |
| thread_id  | str |    |     |

## get_threads

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |

## get_user_avatar

| 参数名    | 类型     | 释义 | 默认值 |
|--------|--------|----|-----|
| args   | _empty |    |     |
| kwargs | _empty |    |     |

## get_user_permission

| 参数名        | 类型  | 释义 | 默认值 |
|------------|-----|----|-----|
| channel_id | str |    |     |
| user_id    | str |    |     |

## modify_channel

| 参数名              | 类型               | 释义 | 默认值 |
|------------------|------------------|----|-----|
| channel_id       | str              |    |     |
| channel_name     | str              |    |     |
| position         | Union[int, None] |    |     |
| parent_id        | Union[str, None] |    |     |
| private_type     | Union[int, None] |    |     |
| speak_permission | Union[int, None] |    |     |

## modify_guild_role

| 参数名      | 类型               | 释义 | 默认值 |
|----------|------------------|----|-----|
| guild_id | str              |    |     |
| role_id  | str              |    |     |
| name     | Union[str, None] |    |     |
| color    | Union[int, None] |    |     |
| hoist    | int              |    |     |

## modify_schedule

| 参数名             | 类型                | 释义 | 默认值 |
|-----------------|-------------------|----|-----|
| channel_id      | str               |    |     |
| schedule_id     | str               |    |     |
| name            | str               |    |     |
| description     | str               |    |     |
| start_timestamp | str               |    |     |
| end_timestamp   | str               |    |     |
| creator         | Union[dict, None] |    |     |
| jump_channel_id | Union[str, None]  |    |     |
| remind_type     | Union[str, None]  |    |     |

## mute_all

| 参数名                | 类型  | 释义 | 默认值 |
|--------------------|-----|----|-----|
| guild_id           | str |    |     |
| mute_end_timestamp | str |    |     |
| mute_seconds       | str |    |     |

## mute_all_lift

| 参数名      | 类型  | 释义 | 默认值 |
|----------|-----|----|-----|
| guild_id | str |    |     |

## mute_user

| 参数名                | 类型  | 释义 | 默认值 |
|--------------------|-----|----|-----|
| guild_id           | str |    |     |
| user_id            | str |    |     |
| mute_end_timestamp | str |    |     |
| mute_seconds       | str |    |     |

## mute_user_lift

| 参数名      | 类型  | 释义 | 默认值 |
|----------|-----|----|-----|
| guild_id | str |    |     |
| user_id  | str |    |     |

## mute_users

| 参数名                | 类型        | 释义 | 默认值 |
|--------------------|-----------|----|-----|
| guild_id           | str       |    |     |
| user_ids           | List[str] |    |     |
| mute_end_timestamp | str       |    |     |
| mute_seconds       | str       |    |     |

## mute_users_lift

| 参数名      | 类型        | 释义 | 默认值 |
|----------|-----------|----|-----|
| guild_id | str       |    |     |
| user_ids | List[str] |    |     |

## post_message

| 参数名          | 类型                 | 释义 | 默认值 |
|--------------|--------------------|----|-----|
| guild_id     | str                |    |     |
| src_guild_id | str                |    |     |
| channel_id   | str                |    |     |
| req          | MessageSendRequest |    |     |

## set_role_permission

| 参数名        | 类型               | 释义 | 默认值 |
|------------|------------------|----|-----|
| channel_id | str              |    |     |
| role_id    | str              |    |     |
| add        | Union[str, None] |    |     |
| remove     | Union[str, None] |    |     |

## set_user_permission

| 参数名        | 类型               | 释义 | 默认值 |
|------------|------------------|----|-----|
| channel_id | str              |    |     |
| user_id    | str              |    |     |
| add        | Union[str, None] |    |     |
| remove     | Union[str, None] |    |     |

## set_user_role

| 参数名        | 类型               | 释义 | 默认值 |
|------------|------------------|----|-----|
| guild_id   | str              |    |     |
| user_id    | str              |    |     |
| role_id    | str              |    |     |
| channel_id | Union[str, None] |    |     |
