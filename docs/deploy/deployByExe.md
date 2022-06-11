# 通过可执行文件部署

::: warning 注意<br>
可执行文件部署暂不支持 Linux 以及 MacOS 系统
:::

[点击下载整合包](https://pan.baidu.com/s/1vjORyF2WO1c0kF32EfdScA?pwd=8261)

## 准备好你的 mirai-api-http

::: tip 提示<br>
若你能自行部署 mirai-console 以及 mirai-api-http，可以跳过本节
:::

[mirai-api-http](https://github.com/project-mirai/mirai-api-http) 是运行 AmiyaBot 的基础，它是 mirai-console 的一个插件。<br>
若你从未了解过 mirai 生态，或者你对编程并不熟悉。短时间内可能难以理解其运作方式。<br>
AmiyaBot 项目提供了简便的部署方法 **mirai-console-setup**，这是 AmiyaBot 为了你能更好地体验本项目而提供的使用方法。本质是 mirai-console-loader
的绿色启动包，不承担使用过程中产生的一切问题，请勿在本项目的任何相关反馈处提出疑问，最终解释权归 [mirai-console-loader](https://github.com/iTXTech/mirai-console-loader)
所有。

- 解压整合包内的`mirai-console-setup.zip`至任意目录，运行 `start.bat` 初始化
    - 当日志输出 `mirai-console started successfully.` 时即成功初始化。请关闭控制台接着操作。
- 根据文件内的提示修改 `config/Console/AutoLogin.yml` 以下两处

```yaml
account: 你的机器人QQ号
password:
    value: 密码
```

- 检查 mirai-api-http 的配置 `config/net.mamoe.mirai-api-http/setting.yml`，如果你是使用 mirai-console-setup，可以忽略这一步。

```yaml {6,11,12,15,16}
adapters:
    - http
    - ws
debug: false
enableVerify: true
verifyKey: AmiyaBot
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

- 再次运行 `start.bat` 并保持运行

## 下载可执行文件

- 解压整合包内的`AmiyaBot-v5.*.*.zip`至任意目录
- 解压整合包内的资源文件
    - 解压 `gamedata.zip` 和 `skins.zip` 里的文件夹到 resource 目录里

```
├── resource
│   ├── gamedata
│   ├── skins
```

- 运行 AmiyaBot.exe 初始化，结束后关闭程序

### 配置 `config.yaml`

config.yaml 在初始化时已经生成了部分常规配置，若你的 mah 配置与其无差，可不用修改<br>
只需要配置 `管理员QQ号` 和 `机器人QQ号` 即可

::: danger 请注意 yaml 文件的格式<br>
yaml 是格式严格的文件，其内容的 `键` 和 `值` 之间必须有且只有一个空格。<br><br>
<span style="color: red">错误的：account:12345</span><br>
<span style="color: green">正确的：account: 12345</span>
:::

```yaml {2,13}
admin:
    accounts: [ 管理员QQ号 ]
baiduCloud:
    apiKey:
    appId:
    enable: false
    secretKey:
httpServer:
    host: 127.0.0.1
    https: false
    port: 5000
miraiApiHttp:
    account: 机器人QQ号
    authKey: AmiyaBot
    host: 127.0.0.1
    port:
        http: 8080
        ws: 8060
test:
    enable: false
    group: [ ]
```

### 再次运行 AmiyaBot.exe

出现如下两行日志，即表示成功运行

```bash
[INFO] Http verify successful. session: ******
[INFO] Websocket handshake successful. session: ******
```
