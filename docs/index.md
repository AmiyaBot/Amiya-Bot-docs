---
layout: home

hero:
  name: AmiyaBot
  text: Progressive Python QQ Bot Framework
  tagline: 渐进式 QQ 机器人框架，可使用内置适配器对接官方 QQ 群、OneBot v11/12、KOOK 等机器人平台。
  image:
    src: /logo.svg
    alt: AmiyaBot
  actions:
    - theme: brand
      text: 开始使用
      link: /develop/basic/
    - theme: alt
      text: 添加兔兔机器人到你的群聊
      link: /guide/deploy/#官方版兔兔
    - theme: alt
      text: 部署兔兔机器人
      link: /guide/deploy/

features:
  - icon: 🚀
    title: 简洁高效
    details: 采用异步 I/O，摆脱官方 API 繁杂的操作，以更加简洁和可读性更高的代码让你专注于你的业务逻辑。
  - icon: 🎭
    title: 多账号 & 热插拔
    details: 支持同时创建多个机器人实例，为所有实例注册共享的消息处理方法，以及在多账号实例内动态增删机器人。
  - icon: 🧩
    title: 适配器 & 插件支持
    details: 通过适配器来更改机器人的服务来源，提供更大的灵活性和可扩展性。支持插件开发方案，将业务和主程序分离，使机器人更加生态化和可定制化。
  - icon: 🎉
    title: 丰富的消息类型
    details: 内置的 PIL 图像合成模块以及 HTML 转换器，支持合成文字图片或通过渲染 WEB 和 Markdown 合成图片，轻松实现你的绝佳创意。

---

<script setup>
import bots from './components/bots.vue';
</script>

<div class="main-container">
    <bots style="padding-top: 10px"></bots>
</div>
