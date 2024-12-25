# CQ-Http QQ群机器人

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
