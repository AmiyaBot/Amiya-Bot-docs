# 扩展消息类型

使用原生消息模板扩展 Chain 对象

::: warning 温馨提示<br>
消息扩展暂仅支持 `mirai-api-http` 和 `cq-http`。
:::

除了以上内置的消息类型外，`mirai-api-http` 和 `cq-http` 还提供了多种消息类型用于发送丰富的消息内容。

- [mirai-api-http 消息类型](https://docs.mirai.mamoe.net/mirai-api-http/api/MessageType.html#%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B)
- [go-cqhttp 消息类型](https://docs.go-cqhttp.org/cqcode/#%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B)

## Chain().extend()

| 参数名  | 类型  | 释义         | 默认值 |
|------|-----|------------|-----|
| data | Any | 原始消息类型格式数据 |     |

### 示例

使用 [mirai-api-http 消息类型 Dice](https://docs.mirai.mamoe.net/mirai-api-http/api/MessageType.html#dice) 发送一个点数
6 的骰子魔法表情

```python
Chain(data).extend(
    {
        'type': 'Dice',
        'value': 6
    }
)
```

使用 [go-cqhttp 消息类型 链接分享](https://docs.go-cqhttp.org/cqcode/#%E9%93%BE%E6%8E%A5%E5%88%86%E4%BA%AB) 发送一个百度首页链接分享

```python
Chain(data).extend(
    {
        'type': 'share',
        'data': {
            'url': 'https://www.baidu.com',
            'title': '百度'
        }
    }
)
```
