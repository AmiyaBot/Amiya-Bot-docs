# 视频

发送一段 **mp4** 格式的视频

::: danger 注意<br>
QQ 频道机器人暂时不支持发送视频，目前仅支持官方 QQ 群。
:::

## Chain().video()

| 参数名  | 类型  | 释义     | 默认值 |
|------|-----|--------|-----|
| file | str | 视频文件路径 |     |

```python
Chain(data).video(file)
```

```python
@bot.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).video('xxxxxx.mp4')
```
