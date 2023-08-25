# 发送图片

发送一张图片

## Chain().image()

| 参数名    | 类型            | 释义              | 默认值 |
|--------|---------------|-----------------|-----|
| target | String, Bytes | 图片文件路径或图片 bytes |     |
| url    | str           | 网络图片的URL        |     |

```python
Chain(data).image(target)
```

当传入的类型为字符串时，image 方法会认为值为本地图片的路径并尝试读取文件。也可以直接传入 bytes 类型。<br>
如果是网络图片，可以使用 url 参数传入。

```python
Chain(data).image(url=target)
```
