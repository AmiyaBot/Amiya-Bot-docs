# 声明

在本章后续文档中，为了减少篇幅量，将不会再在代码示例中出现 `AmiyaBot` 或 `MultipleAccounts`
类的实例化代码。统一以变量 `bot` 表示已经实例化的 `AmiyaBot` 或 `MultipleAccounts` 类。

你将会在诸多场景中看到 bot 变量的存在。

```python
# 装饰器
@bot.on_message(...)

# 调用方法
bot.some_func(...)

...
```
