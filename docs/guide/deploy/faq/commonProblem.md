# 常见问题

本章收录了用户在部署/使用过程中向我们提问较多的问题。

作者：[晓月君](https://github.com/XiaoYue-Kun)<br>
修饰：[Chino酱](https://github.com/vivien8261)

## 我看不懂什么是克隆仓库/代码部署的指令会报错

+ 你是否在考虑使用可执行文件部署而不是代码部署？
+ 请注意文档中提供的“使用可执行文件部署”与“使用代码部署”任选其一进行即可，执行完即可进入下一步骤，而不是两者都要进行。

## 使用可执行文件部署时，兔兔的窗口闪现了一下/出现了一小段时间又消失了（闪退）

### git 未正确配置

请使用组合键 `win+R` 输入 `cmd` 后回车，在跳出来的黑色框框中输入 `git` 后回车，如果显示

```
'git'不是内部或外部命令，也不是可运行的程序或批处理文件。
```

通常情况下，这是 git 未正确安装导致的，可能是由于**你没有认真看文档**根本没有安装 git
所导致。请根据文档[安装 git](/guide/deploy/getStarted.html#安装-git)

安装完成后，再次重复上述操作，此时应该会显示如下的文本，这就证明你配置好了 git，可以再次尝试打开可执行文件了。

```
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--super-prefix=<path>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

...
```

> 我很确定我已经安装了git，但是我在黑框内输入git后还是会显示“不是内部或外部命令”

这个现象大概率是因为设备的环境变量没有配置好导致的，请参考 [此文章](https://blog.csdn.net/ZSQ717/article/details/123095769)
尝试将 git 的路径添加入环境变量中再次尝试开头的操作。

### 资源包没能完成下载

> 我在窗口最上方看到了一些进度条，可是没能跑完就闪退了

+ 请检查你的网络连接或是否开启了代理软件。
+ 若你有意或无意地导致了 `resource/gamedata` 文件夹内的内容产生了变动，可能导致无法更新。直接删除整个 `resource/gamedata`
  文件夹重新启动程序即可

## 启动时弹窗提示“无法定位程序输入点...”

+ 你是否在使用 win7 或较老的 WindowsServer 版本？
+ 就结论而言 win7 或较老的 WindowsServer 版本无法运行兔兔
  原因是 node 版本不兼容
  推荐升级 win10（若情况允许）或者使用云服务器部署/更换云服务器镜像

## 无法进入控制台

> 我尝试进入控制台时出现了 `ERR_NETWORK 服务器异常`

+ 检查浏览器顶端的地址栏
  通常，地址栏中协议(也就是网址最开头的http/https)应该使用http
  如果你的网址以https开头，请改为http后再重新尝试访问

+ 部分内核的浏览器可能会拦截公网对私网不安全的访问请求
    + 打开 tab 页面 `chrome://flags/#block-insecure-private-network-requests`
    + 将 `Block insecure private network requests` 设置为 `Disabled`, 然后重启
      ![zukVk6.png](https://s1.ax1x.com/2022/11/18/zukVk6.png)
+ 若你访问控制台的设备与运行兔兔的设备不是同一台设备
  你需要修改兔兔本体的一些设置
    + 前往兔兔的`config/server.yaml`
    + 将`host`的值修改为`0.0.0.0`
    + 重新启动兔兔

> 我不知道服务地址应该填什么

+ 如果你访问控制台的设备与部署兔兔的设备为同一台的话，通常你应该填写的就是`http://127.0.0.1:8088`，而服务密钥留空
+ 如果你访问控制台的设备与部署兔兔的设备不是同一台，但是在同一个局域网内（通常指在同一个家里）
    + 参照[文档](/guide/deploy/console/index.html#公网-局域网访问)将 `host` 修改为 `0.0.0.0`
    + 参考[此文章](https://jingyan.baidu.com/article/ad310e80fd60c65949f49e9f.html)查询你部署兔兔的设备的局域网ip（通常是以
      192 开头的一串数字）
    + 控制台中应填写 `http://[你查询到的ip]:8088`
    + 而服务密钥留空
+ 如果你将兔兔部署在云服务器上，在另一台设备上访问控制台，那么事情将会变得有些棘手，首先你需要参照上面的指示将 `host`
  修改为 `0.0.0.0`，其次你需要给云服务器运营商的防火墙设置一个入站规则（关于如何做到这一点,请自行百度），通常端口是
  8088，协议为tcp，并且操作系统内也需要设置入站规则（也请自行百度）
    + 提示：通过公网访问，可能有设备被攻击的风险，请自行配置服务密钥（在 `config/server.yaml` 中修改 `authKey`
      的值并填入控制台的服务密钥中）。更进一步，推荐使用Nginx反代服务提供更高的安全性，请参考[文档](/guide/deploy/console/index.html#公网-局域网访问)

## 控制台中实例无法连接

由于作者仅涉足过mirai，本处仅将提供mirai相关问题的解决思路，不过部分解决思路也可用在gocq中

我们先来对配置单的具体内容进行一些解释

+ APP ID：mirai登陆的qq号，也就是你bot的qq号
+ TOKEN：对mirai来说，为`mirai/config/net.mamoe.mirai-api-http/settings.yml`中`verifyKey`的值
+ 适配器类型：通常你**应该**选择`CQ-Http`或是`Mirai-api-http`**而不是**`QQ-Bot`
+ 可控实例：是否将一些运行信息发送至特定群组
  （若是勾选了，控制台群组id应为你希望运行信息出现在的群聊的群聊号中）
+ Host地址：如提示所示，如果是同一台设备的话 填写127.0.0.1
+ HTTP端口：`mirai/config/net.mamoe.mirai-api-http/settings.yml`中`http`下`port`的值
+ WS端口：`mirai/config/net.mamoe.mirai-api-http/settings.yml`中`ws`下`port`的值
  (如果你参考的是初心佬的文章，那这两项应该分别为`8080`和`8060`)

以下是兔兔的窗口中可能出现的报错信息以及相应处理方法

### 指定bot不存在

请检查mirai是否正确登陆了bot的qq

### Auth Key错误

rt，检查mirai本体配置中authKey的值与控制台填写的是否一致

### Cannot connect to mirai-api-http websocket server

+ 检查mirai是否启动
+ 检查mirai-api-http中host地址与两个端口填写是否有误
+ 常见错误为**看错**并填写错端口（如8080与8060看混 或者修改了mah的配置却未更改控制台实例配置单）

### Got code 401

适配器类型**应该是**`Mirai-api-http`或者`CQ-Http`**而不是**`QQ-Bot`

### 无效参数

实例配置单中的qq号是否填写错误了

## mcl无法正常启动

**温馨提示：对mcl一切配置文件的更改都应该在mcl不在运行的情况下进行**

### 系统找不到指定的路径

+ mcl处于的路径中不能有任何中文字符（包括汉字与中文标点）
+ 请将mcl-installer转移至一个没有中文字符的路径下重新安装

> 我很确定我的路径中没有中文字符

+ 你是否人为移动了（有意或无意）mcl所处文件夹或者其子文件夹？
+ 对小白来说，如果你想移动mirai，最好的方法其实是将mcl-installer移动到别处重新安装
  并将原来的config以及plugins文件夹移动到新安装的mirai中**覆盖**

### 当前qq版本太低

+ 升级mcl本体
+ 将协议换为IPAD
  前往`config/Console/AutoLogin.yml`
  将`protocol`更改为`IPAD`
+ 删除`bots`文件夹下所有内容

### 登录存在安全风险

+ 这个东西吧...挺玄学的，通常是云服务器上部署的mirai才会有这个问题，要通过这个验证，通常需要手机与电脑在同一网络环境下，而如果你使用了云服务器，那么除了使用一些玄学手段（指过两天再试就好了）或者科学手段（这玩意儿可不兴展开来讲啊
  哥）外别无他法。

### 苹果手机无法安装滑块助手

+ 在[初心佬的文章](https://www.initbili.top/2022/8d92a2feb3e2/)最下方有手动获取ticket的教程
+ 注意，此时你不需要再点击`Open with TxCaptchaHelper`按钮了，而是直接将教程中获取到的ticket填入ticket栏中即可

### A JNI error has occured.

+ 通常这是由于java版本太低导致的
+ 两个解决方案
    1. 可以手动安装一个java的jdk（建议版本为17或18 安装方法请自行百度）
    2. 使用mcl installer重新安装mcl 在安装时会询问是否安装java jdk 选择安装即可

### 有大段看不懂/完全没有中文信息的红色报错

+ 通常，这类报错的关键信息都在红色文本的最下方或者最上方
+ 如果最下方没有中文的提示，那么请前往红色文本的最上方查找关键信息

#### Address already in use

+ 你是否启动了两个mcl？
  如果是的话，请关闭一个，并保证同时只有一个mcl在运行
+ mah中所填写的的端口与某个外部应用冲突，可以修改`config/net.mamoe.mirai-api-http/setting.yml`
  中两个端口的值解决，值理论上可以是1024～65535中的任何一个数字

::: danger 注意<br>
若是在此处修改了端口值，你应该在控制台中填写实例配置单时相对应地修改端口值
:::

## 代码部署启动时/使用特定命令时会报错

既然你是代码部署的，一些常见的细节我将会省略不解释，希望你能看懂

+ 请更新代码 & 依赖 & 插件
    ```shell
    git pull
    pip install --upgrade amiyabot
    ```

## 可执行文件部署启动时会报错

+ 你是否更新了插件？
  ~~我通常称这种行为叫旧瓶装新酒~~
+ 请检查[项目官网](https://www.amiyabot.com/guide/deploy/getStarted.html)是否有更新的版本
+ 如果是的话，请更新兔兔版本后再试

## 部署过程看起来一切都很正常，但兔兔就是不理人

+ 检查是否有安装插件，v6的插件化使得默认部署完的兔兔是没有插件的
  也就无法对常见的互动进行回应

> 我已经安装好插件了

+ 查看mirai窗口，检查是否有消息推送的提示，如果没有，则是mirai启动/配置有问题，导致mirai这一步就收不到消息，请检查mirai的启动情况与配置文件，并配合前文的排错食用
+ 查看兔兔窗口 是否有消息推送
  ~~通常 有的话还不回应就见鬼了~~
    + 检查报错，是否未正确连接到mirai

::: danger 划重点<br>
windows的cmd存在 单击窗体内黑色部分进入快速选择 这么一个机制
标志是窗口标题最前面出现了`选择`二字
而进入了快速选择 应用本体的运行将会被冻结 产生应用卡住不动的表象
这种情况下 只要敲击回车就可以推出快速选择
这一点对mirai和兔兔两者都适用
:::

## 更新兔兔/迁移兔兔时，如何保留原来的数据

+ 将旧兔兔的 database 整个覆盖至新兔兔的根目录下即可
+ 对于可执行文件部署，也可以选择用新的可执行文件覆盖旧的可执行文件，便可以不用迁移数据库文件，但请注意，有时这会导致插件与本体版本不一致的问题，通常使用上一个方案，并重新安装插件即可解决
