# 配置实例

“实例”指的是机器人的账号，兔兔支持登录多个机器人账号同时使用，多个账号之间共享数据。

## 添加实例

在左侧导航选择“实例管理”，并点击“添加实例”

![](../../../assets/console/addBot.png)

## 填写配置表

### 腾讯频道机器人

填写你注册的频道机器人信息

::: details 窗口图示
![](../../../assets/console/addQQBot.png)
:::

### mirai-api-http支持的群聊机器人

`APP ID` 为登录在 mirai-api-http 的 **QQ 号**。<br>
`TOKEN` 为 mirai-api-http 的 **AuthKey**。<br>
`Mirai-api-http 配置` 请准确填写你部署 mah 时的信息。

::: details 窗口图示
![](../../../assets/console/addMAHBot.png)
:::

点击“保存并启动”运行实例。

<img style="width: 300px" src="../../../assets/console/online.png" alt="image">

当实例状态为在线时，即启动成功。
