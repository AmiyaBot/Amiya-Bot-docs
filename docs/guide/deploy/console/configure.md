# 配置实例

“实例”指的是机器人的账号，兔兔支持登录多个机器人账号同时使用，多个账号之间共享数据。

## 添加实例

在左侧导航选择“实例管理”，并点击“添加实例”

![](../../../assets/console/addBot.png)

## QQ群 & QQ频道机器人（官方）

在 [QQ 开放平台](https://q.qq.com/#/) 查看并在实例配置填写你注册的机器人信息，表单字段就是对应内容。

::: danger 请注意<br>
群机器人在不修改任何配置的情况下，**无法在个人电脑（非公网）上部署**，也就是只支持在**云服务器**上部署
，如果您一定要在个人电脑上部署，目前提供了 [内网穿透](https://www.baidu.com/s?wd=内网穿透)
和 [腾讯云COS](https://www.baidu.com/s?wd=腾讯云COS) 的方式解决。
:::

### 内网穿透

实例配置资源服务地址为 `127.0.0.1`。端口随意，默认为 `8086`。使用内网穿透工具代理 http://127.0.0.1:8086 后，修改配置文件
`config/penetration.yaml` 的 ports 参数，新增一行配置，字段为实例配置里的资源服务端口，值为内网穿透地址，重启兔兔生效。

```yaml
ports:
    8086: http://3913rc56vl17.vicp.fun:40229
```

### 腾讯云COS

无需理会资源服务配置，修改配置文件 `config/cos.yaml` 如下（懂的都懂，不懂的建议折腾内网穿透），重启兔兔生效。

```yaml
activate: true
domain: https://amiyabot-xxxxxxxxx.cos.ap-guangzhou.myqcloud.com
folder: /temp/group
secret_id: AKIDwiHcxxxxxxxxxxCpGfqDZp2U
secret_key: Uky7BB8zxxxxxxxxigQzVt64oLgnn
```

## KOOK机器人

在 [KOOK 开发者平台](https://developer.kookapp.cn/app/index) 查看并在实例配置填写你创建的机器人应用的 `Token` 即可。KOOK
机器人不需要 appid，但你仍然需要在配置里随便填写一个 appid，推荐使用 KOOK
应用的 `Client Id`。

## CQ-Http QQ群机器人

`APP ID` 为登录在 go-cqhttp 的 **QQ 号**。<br>
`TOKEN` 填写配置的 access-token，没有配置则不需要填写。<br>
`CQ-Http 配置` 请准确填写你部署 go-cqhttp 时的信息。

需要配置 go-cqhttp 目录下的文件 `config.yml` 里数据类型为 array，修改完后重启 go-cqhttp 生效。

```yaml {4}
message:
    # 上报数据类型
    # 可选: string,array
    post-format: array
```

access-token 可在 go-cqhttp 目录下的文件 `config.yml` 找到

```yaml {4}
# 默认中间件锚点
default-middlewares: &default
    # 访问密钥, 强烈推荐在公网的服务器设置
    access-token: '*******'
    # 事件过滤器文件目录
    filter: ''
    # API限速设置
    # 该设置为全局生效
    # 原 cqhttp 虽然启用了 rate_limit 后缀, 但是基本没插件适配
    # 目前该限速设置为令牌桶算法, 请参考:
    # https://baike.baidu.com/item/%E4%BB%A4%E7%89%8C%E6%A1%B6%E7%AE%97%E6%B3%95/6597000?fr=aladdin
    rate-limit:
        enabled: false # 是否启用限速
        frequency: 1  # 令牌回复频率, 单位秒
        bucket: 1     # 令牌桶大小
```

## Mirai-api-http QQ群机器人

`APP ID` 为登录在 mirai-api-http 的 **QQ 号**。<br>
`TOKEN` 为 mirai-api-http 的 **AuthKey**。<br>
`Mirai-api-http 配置` 请准确填写你部署 mah 时的信息。

AuthKey 可在 mirai-console 目录下的文件 `config/net.mamoe.mirai-api-http/setting.yml` 找到

```yaml {6}
adapters:
    - http
    - ws
debug: false
enableVerify: true
verifyKey: ******* # 此处即是 AuthKey
singleMode: false
cacheSize: 4096
adapterSettings:
    http:
        host: 0.0.0.0
        port: 8080
        cors: [ * ]
    ws:
        host: 0.0.0.0
        port: 8060
        reservedSyncId: -1
```

## 运行实例

点击“保存并启动”运行实例，当实例状态为在线时，即启动成功。

<img style="width: 400px" src="../../../assets/console/online.png" alt="image">

::: tip 温馨提示<br>
实例的连接需要时间，通常只需要几秒钟不到。如果显示**离线**可以等待几秒再刷新页面。
:::

## 配置可控实例

配置时打开选项 `可控实例`，并填写一个群号。可接收到该实例的一些相关通知。

<img style="width: 400px" src="../../../assets/console/mainBot.png" alt="image">

