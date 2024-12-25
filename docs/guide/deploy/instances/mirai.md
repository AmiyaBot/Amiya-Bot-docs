# Mirai-api-http QQ群机器人

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
