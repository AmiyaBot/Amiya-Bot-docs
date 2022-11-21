# 插件常见问题

本章收录了用户在使用官方插件时向我们提问较多的问题。

作者：[晓月君](https://github.com/XiaoYue-Kun)<br>
修饰：[Chino酱](https://github.com/vivien8261)

## 公招识别没法用

::: danger 请注意<br>
公招识别功能是需要申请并配置相应的百度云 api 的
:::

填写位置在 `plugins/amiyabot-arknights-recruit-*/baiduCloud.yaml` 中，需要将 `enable` 改为 `true`

> 我不知道如何申请百度云 api

+ 请前往[百度智能云-文字识别](https://console.bce.baidu.com/ai/#/ai/ocr/overview/index)
+ 按照上方的操作指引进行操作（需要实名认证）
+ 需要申请的是通用场景OCR（建议可以全选上）
+ 将创建好的key对应填入 `baiduCloud.yaml` 中
+ 若还是不理解，建议配合百度食用

## 如何给兔兔添加表情

+ 对应的文件位置在 `plugins/amiyabot-user*/face` 下，直接将图片文件扔到文件夹内即可。

## 代码部署后 只有抽卡/个人信息/干员查询/敌人查询/材料查询功能无法正常产生图片

~~大概率又是一个不仔细看文档的娃~~

+ 在安装完依赖后 需要额外安装playwright的chromium及其依赖
    + 对于windows：
    ```shell
    playwright install chromium
    ```
    + 对于linux：
    ```shell
    playwright install --with-deps chromium
    ```

::: danger 注意<br>
chromium 对 linux 发行版只官方支持 ubuntu18、20及22版本，所以若你使用的是其他 linux 发行版并且无法正常安装与使用
playwright，你将无法获得官方的任何技术支持。

~~ubuntu邪教好...~~
:::

## 有时候公招图/专精材料图显示不完整

偶尔出现这种情况是正常现象，这与设备性能等因素有关，通常再喊一次就可以正常返回图片了

## 抽卡时出现了（按游戏卡池发布顺序来说）不可能出现的新干员

切换的卡池相当于在现在复刻了。

## 抽卡时出现了黑色的人物条/出现了限定/赠送/肉鸽干员

+ 可以前往控制台中的干员设置设定干员的限定属性（黑色的条一般是各个预备干员）

> 可是我的各个限定干员都已经被设置为不可抽取了

+ 有时你可能更新了卡池却没有更新干员数据也会导致这个问题
+ 此时重启兔兔本体或点击按钮【应用干员设置】即可更新干员数据
