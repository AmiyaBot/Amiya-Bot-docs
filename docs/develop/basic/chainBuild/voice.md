# 发送语音

发送一段 **wav** 格式的音频

::: danger 注意<br>
QQ 频道机器人暂时无法支持发送语音，仅限第三方服务使用此方法。
:::

## Chain().voice()

| 参数名   | 类型     | 释义          | 默认值   |
|-------|--------|-------------|-------|
| file  | String | 语音 wav 文件路径 |       |
| title | String | 语音标题        | voice |

```python
Chain(data).voice(file)
```

```python
@bot.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).voice('阿米娅_问候.wav')
```
