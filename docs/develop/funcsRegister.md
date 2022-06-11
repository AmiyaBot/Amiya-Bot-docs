# 功能函数注册

AmiyaBot 功能开发的关键模块一共有三个，分别是 `AmiyaBot`、`Message`和`Chain`。

- `AmiyaBot` 为机器人实例，包含了消息和事件的注册器。
- `Message` 为接收的消息主体，内含预解析的消息内容，以及一些相关操作函数。Message 对象在此仅用于参数类型注解，供编辑器智能提示使用，任何时候，你都不需要实例化 Message 对象。
- `Chain` 为机器人消息的创建工具。任何需要发送消息的时候，消息都必须由 Chain 类创建。核心会调用 Chain 类的 build 方法生成消息链。

在快速起步里，你应该都见过它们了。

## 功能函数装饰器

功能函数装饰器作用于你的业务逻辑主体函数，来注册你的机器人功能。

```python
# 当和机器人的对话中包含 'hello' 关键字时，将会触发该函数
@bot.on_message(keywords='hello')
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')
```

#### 参数列表

| 参数名          | 类型       | 释义                                 | 默认值  |
|--------------|----------|------------------------------------|------|
| keywords     | Union    | 触发关键字，支持字符串、正则、全等句（equal）或由它们构成的列表 ||
| verify       | Callable | 自定义校验方法，当该参数被赋值时，keywords 将会失效     ||
| check_prefix | Union    | 是否校验前缀或指定需要校验的前缀                   | True |
| level        | Int      | 关键字校验成功后函数的候选默认等级                  | 0    |

## 私域模式的前缀校验

AmiyaBot 私域模式默认需要对话中包含指定前缀才能进入消息分配器。如果你不希望这么做，可以通过**忽略前缀检查**和**校验完全匹配**的方式达到效果。后者将会在下文说明。

### 接收不包含前缀的消息

添加参数 `check_prefix=False` 可忽略前缀检查

```python
@bot.on_message(keywords='hello', check_prefix=False)
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')
```

### 接收指定前缀的消息

`check_prefix` 参数改为字符串列表可以临时修改前缀检查为指定单词

```python
@bot.on_message(keywords='hello', check_prefix=['amiya', '🐰'])
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')
```

## 校验符合正则检查的句式

关键字传入 `re.compile` 对象，即可使用正则检查。

```python
import re
...

@bot.on_message(keywords=re.compile(r'hello，\d+'))
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')
```

## 校验完全匹配的句式

完全匹配的句式指对话的内容**全等于** keyword 关键字（不包括 @ 部分），使用工具类 `Equal` 即可达到效果。

```python
from amiyabot import Equal
...

@bot.on_message(keywords=Equal('hello, amiya'))
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')
```

::: tip 提示<br>
在私域机器人下且不需要 @ 唤起的场合，Equal 会无视前缀检查。
:::

## 组合多个和多种 keywords

keywords 支持由 `字符串、正则、Equal` 构成的列表，组合中包含 `Equal` 时，`Equal` 依然会无视前缀检查。

```python
@bot.on_message(keywords=['hello',
                          'hey',
                          Equal('hello, amiya'),
                          re.compile(r'hello，(\d+)')])
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')
```

## 功能优先级

当关键字校验存在冲突时，可以通过指定优先级供消息分配器选择。<br>
分配器的工作原理，是在完成检查之后，将通过校验的候选函数列表按优先级倒序排序，然后选取第一个执行。<br>
所有函数的默认优先级都为 `1`，如果不指定优先级，分配器会按照加载的先后顺序选择。

```python
# 如果不指定优先级，当对话内容为 "helloworld" 时，第一个函数会首先通过校验并输出。
# 因为在模块加载阶段，第一个函数更早注册完毕。

@bot.on_message(keywords='hello', level=1)
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')


@bot.on_message(keywords='helloworld', level=2)
async def _(data: Message):
    return Chain(data).text('hello，world')
```

## 自定义检查

当关键字检查无法满足功能的触发方式时，就需要使用自定义检查。<br>
自定义检查是一个协程函数，参数为 Message 对象，返回一个`布尔值（必选）`和`优先级（可选）`的元祖。

```python
async def my_verify(data: Message):
    if ...:
        return True
    return False
```

在自定义检查里，你可以动态输出优先级的值。

```python {3,5}
async def my_verify(data: Message):
    if ...:
        return True, 2
    elif ...:
        return True, 1
    return False
```

**完整示例**

```python {10}
async def my_verify(data: Message):
    if 'hello' in data.text:
        return True


@bot.on_message(verify=my_verify)
async def _(data: Message):
    return Chain(data).text(f'hello, {data.nickname}')
```
