# QQ群 & QQ频道机器人（官方）

在 [QQ 开放平台](https://q.qq.com/#/) 查看并在实例配置填写你注册的机器人信息，表单字段就是对应内容。

::: danger 请注意<br>
群机器人在不修改任何配置的情况下，**无法在个人电脑（非公网）上部署**，也就是只支持在**云服务器**上部署
，如果您一定要在个人电脑上部署，目前提供了 [内网穿透](https://www.baidu.com/s?wd=内网穿透)
和 [腾讯云COS](https://www.baidu.com/s?wd=腾讯云COS) 的方式解决。
:::

## 内网穿透

实例配置资源服务地址为 `127.0.0.1`。端口随意，默认为 `8086`。使用内网穿透工具代理 http://127.0.0.1:8086 后，修改配置文件
`config/penetration.yaml` 的 ports 参数，新增一行配置，字段为实例配置里的资源服务端口，值为内网穿透地址，重启兔兔生效。

```yaml
ports:
    8086: http://3913rc56vl17.vicp.fun:40229
```

## 腾讯云COS

无需理会资源服务配置，修改配置文件 `config/cos.yaml` 如下（懂的都懂，不懂的建议折腾内网穿透），重启兔兔生效。

```yaml
activate: true
domain: https://amiyabot-xxxxxxxxx.cos.ap-guangzhou.myqcloud.com
folder: /temp/group
secret_id: AKIDwiHcxxxxxxxxxxCpGfqDZp2U
secret_key: Uky7BB8zxxxxxxxxigQzVt64oLgnn
```
