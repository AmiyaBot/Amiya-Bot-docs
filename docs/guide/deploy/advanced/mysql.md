# 使用 Mysql

在 `config\database.yaml` 中可以配置使用的数据库，如需更改数据库类型为 `Mysql`，请按下面的配置说明进行配置：

```yaml
mode: 'mysql'
config:
    host: '数据库地址'
    port: 数据库端口
    user: '登录用户名'
    password: '数据库密码'
```

需手动建立 4 个数据库，它们分别是 `amiya_bot` `amiya_group` `amiya_message` `amiya_user`。
