# JsonSchema 解释

本篇介绍如何使用 [draft-07](http://json-schema.org) 版本的 JsonSchema
规范编辑 [插件对接控制台的配置文件](/develop/plugin/consoleConfig)。

```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": [],
    "properties": {}
}
```

- `required`：必填字段（暂未支持前端校验，敬请期待...）
- `properties`：字段配置

## 基本配置

字段定义在 **properties** 对象里：

- `<config_name>`：**配置名称**，是使用 [get_config](/develop/plugin/consoleConfig.html#get-config) 方法时的参数
- `<config_name>.type`：类型
- `<config_name>.title`（可选）：表单标题，不配置则使用 **config_name**
- `<config_name>.description`（可选）：表单tips，鼠标移动到页面的问号图标时显示的内容
- `<config_name>.default`（可选）：默认值，需按照类型填写。

示例

```json
{
    "properties": {
        "imagesCachePath": {
            "title": "图片缓存目录",
            "description": "图片缓存的目录路径，可以为绝对路径",
            "type": "string",
            "default": "./imagesCache"
        }
    }
}
```

## 文本输入框

默认值 `default` 的类型为字符串

```json
{
    "properties": {
        "<config_name>": {
            "type": "string",
            "default": "text"
        }
    }
}
```

## 数字输入框

默认值 `default` 的类型为数字

- `minimum`（可选）: 可输入的**最小值**
- `maximum`（可选）: 可输入的**最大值**

当 type 为 integer 时，只能输入整数，为 number 时可以输入浮点数。

```json
{
    "properties": {
        "<config_name>": {
            "type": "integer",
            "minimum": -10,
            "maximum": 20,
            "default": 0
        },
        "<config_name2>": {
            "type": "number",
            "default": 0.5
        }
    }
}
```

## 切换按钮

默认值 `default` 的类型为布尔型

```json
{
    "properties": {
        "<config_name>": {
            "type": "boolean",
            "default": false
        }
    }
}
```

## 下拉选择框

下拉选择框不需要 `type` 字段，默认值 `default` 的类型为内容的值类型

```json
{
    "properties": {
        "<config_name>": {
            "enum": [
                "option1",
                "option2",
                "option3"
            ],
            "default": "option2"
        }
    }
}
```

## 日期时间选择器

当 `type` 配置为 `string` 时，若配置了对应的 `format` 字段，可更改为日期时间选择器。<br>
默认值 `default` 的类型为**字符串或数值**

```json
{
    "properties": {
        "<config_name>": {
            "type": "string",
            "format": "datetime"
        }
    }
}
```

### format 选项

配置相应的 format 以使用不同种类的选择器

- **date**：日期 `YYYY-MM-DD`
- **time**：时间 `HH:mm:ss`
- **datetime**：日期时间 `YYYY-MM-DD HH:mm:ss`
- **date-range**：日期范围 `[ YYYY-MM-DD, YYYY-MM-DD ]`
- **time-range**：时间范围 `[ HH:mm:ss, HH:mm:ss ]`
- **datetime-range**：日期时间范围 `[ YYYY-MM-DD HH:mm:ss, YYYY-MM-DD HH:mm:ss ]`

当使用范围选择器时，数据为数组类型，代表范围，如

```json
[
    "2023-05-20 08:00:00",
    "2023-05-21 16:00:00"
]
```

## 动态输入-值数组

如果你需要 `get_config` 方法返回 `[value1, value2, value3, ...]` 形式的值数值，可以使用动态输入值数组。<br>
默认值 `default` 的类型为数组

- `type` 配置为 `array`
- `items` 为数组配置
    - `type`：值类型，仅支持 `string`、`integer`、`number` 以及 [object](#动态输入-对象数组)

```json
{
    "properties": {
        "<config_name>": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    }
}
```

## 动态输入-对象数组

如果你需要 `get_config` 方法返回 `[{...}, {...}, {...}, ...]` 形式的值数值，可以使用动态输入对象（字典）数组。<br>
默认值 `default` 的类型为数组

- `type` 配置为 `array`
- `items` 为数组配置
    - `type` 配置为 `object`
    - `properties` 根据上文 [基本配置](#基本配置)
      添加 [文本输入框](#文本输入框)、[数字输入框](#数字输入框)、[切换按钮](#切换按钮)、[下拉选择框](#下拉选择框)
      或 [日期&时间选择器](#日期时间选择器)

```json
{
    "properties": {
        "<config_name>": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {}
            }
        }
    }
}
```

## 子级对象

有时候有些复杂配置不能用只有一级的对象（字典）存放，使用子级对象组建多层的对象（字典）。

- `type` 配置为 `object`
- `properties` 根据上文 [基本配置](#基本配置) 添加**任意输入类型**或将 `type` 配置为 `object` 继续作为新的子级对象

```json
{
    "properties": {
        "<config_name>": {
            "type": "object",
            "properties": {}
        }
    }
}
```

### 示例

```json
{
    "properties": {
        "user": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "age": {
                    "type": "integer"
                },
                "attrs": {
                    "type": "object",
                    "properties": {
                        "atk": {
                            "type": "number"
                        },
                        "def": {
                            "type": "number"
                        }
                    }
                }
            }
        }
    }
}
```

以上配置调用 `bot.get_config()` 方法将返回以下内容

```json
{
    "user": {
        "name": ...,
        "age": ...,
        "attrs": {
            "atk": ...,
            "def": ...
        }
    }
}
```
