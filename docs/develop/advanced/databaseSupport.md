# 数据库支持

AmiyaBot 提供了 Sqlite 和 MySQL 数据库的 ORM
支持。基于 [peewee](https://github.com/coleifer/peewee)
，封装了部分表结构管理以及查询转换。日常使用的查询操作详见 [peewee文档](http://docs.peewee-orm.com/)

::: warning 温馨提示<br>
AmiyaBot 仅能提供有限的数据库支持，**推荐你使用自己的更优的数据库解决方案**。
:::

## Sqlite

对于轻量级机器人应用，Sqlite 足以应对大部分的日常操作，`connect_database` 方法默认创建 Sqlite 数据库。

```python
from amiyabot.database import *  # 引入数据库模块

db = connect_database('database_name')  # 创建或连接一个 Sqlite 数据库文件


# 创建数据库基础模型，继承 ModelClass 获得 AmiyaBot 的扩展查询方法
class BotBaseModel(ModelClass):
    class Meta:
        database = db


# 创建表模型，使用 table 装饰器进行表结构管理，将会自动创建或更新表结构
@table
class TableName(BotBaseModel):
    field1 = CharField()
    field2 = IntegerField(null=True)


TableName.select()  # ORM 操作详见 peewee 文档
```

## MySQL

`connect_database` 参数设置 `mysql=True` 以及 `config` 即可更改为 MySQL 数据库。

**可自动创建数据库。**

```python
from amiyabot.database import *

db = connect_database('database_name', is_mysql=True, config=MysqlConfig(
    host='127.0.0.1',
    port=3306,
    user='root',
    password=''
))
```

## 表结构管理

在 table 装饰的表模型内增加或删除字段，启动程序时会自动修改到数据库表结构中。**暂不支持更新字段类型。**

```python
@table
class TableName(BotBaseModel):
    field1 = CharField()
    field2 = IntegerField(null=True)
    field3 = TextField(null=True)
    ...
```

## 扩展查询

内置了部分扩展查询，方便日常使用。

### batch_insert

批量插入

| 参数名        | 类型          | 释义     | 默认值 |
|------------|-------------|--------|-----|
| rows       | List\[dict] | 数据列表   |     |
| chunk_size | int         | 分片插入大小 | 200 |

```python
data = [
    {...},
    {...},
    {...}, ...
]

TableName.batch_insert(data)
```

### insert_or_update

插入或更新（适配Sqlite和MySQL）

| 参数名             | 类型   | 释义                 | 默认值  |
|-----------------|------|--------------------|------|
| insert          | Dict | 如果是插入的数据           |      |
| update          | Dict | 如果是更新的数据           | None |
| conflict_target | List | 构成约束的列（仅Sqlite需要）  | None |
| preserve        | List | 一个列的列表，其值应从原始插入中保留 | None |

## 查询转换工具

### convert_model

将查询结果转换为字典

| 参数名          | 类型     | 释义          | 默认值 |
|--------------|--------|-------------|-----|
| model        |        | peewee 查询结果 |     |
| select_model | Select | peewee 查询对象 |     |

```python
data = convert_model(TableName.get_or_none())
```

### query_to_list

将查询结果转换为字典列表

| 参数名          | 类型     | 释义          | 默认值 |
|--------------|--------|-------------|-----|
| query        | List   | peewee 查询结果 |     |
| select_model | Select | peewee 查询对象 |     |

```python
data = query_to_list(TableName.select())
```

### select_for_paginate

分页查询工具

| 参数名       | 类型          | 释义          | 默认值 |
|-----------|-------------|-------------|-----|
| model     | ModelSelect | peewee 查询对象 |     |
| page      | int         | 当前页         |     |
| page_size | int         | 页行数         |     |

```python
data = select_for_paginate(TableName.select(), 1, 10)

data['list']  # 查询结果
data['total'] # 总条数
```
