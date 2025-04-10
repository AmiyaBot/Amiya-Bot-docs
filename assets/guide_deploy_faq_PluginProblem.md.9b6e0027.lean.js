import{_ as l,o as e,c as s,S as o}from"./chunks/framework.65893c8f.js";const h=JSON.parse('{"title":"插件常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deploy/faq/PluginProblem.md","filePath":"guide/deploy/faq/PluginProblem.md","lastUpdated":1744281297000}'),t={name:"guide/deploy/faq/PluginProblem.md"};function i(n,a,r,p,c,d){return e(),s("div",null,a[0]||(a[0]=[o('<h1 id="插件常见问题" tabindex="-1">插件常见问题 <a class="header-anchor" href="#插件常见问题" aria-label="Permalink to &quot;插件常见问题&quot;">​</a></h1><p>本章收录了用户在使用官方插件时向我们提问较多的问题。</p><h2 id="公招图片识别没法用" tabindex="-1">公招图片识别没法用 <a class="header-anchor" href="#公招图片识别没法用" aria-label="Permalink to &quot;公招图片识别没法用&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">请注意<br></p><p>公招图片识别功能需要申请并配置相应的百度智能云 API</p></div><p>请根据插件文档配置相关信息。</p><blockquote><p>我不知道如何申请百度云 api</p></blockquote><ul><li>请自行百度或联系百度智能云的支持服务。</li></ul><h2 id="如何给兔兔添加表情" tabindex="-1">如何给兔兔添加表情 <a class="header-anchor" href="#如何给兔兔添加表情" aria-label="Permalink to &quot;如何给兔兔添加表情&quot;">​</a></h2><ul><li>对应的文件位置在 <code>plugins/amiyabot-user*/face</code> 下，直接将图片文件扔到文件夹内即可。</li></ul><h2 id="代码部署后部分插件无法正常产生图片" tabindex="-1">代码部署后部分插件无法正常产生图片 <a class="header-anchor" href="#代码部署后部分插件无法正常产生图片" aria-label="Permalink to &quot;代码部署后部分插件无法正常产生图片&quot;">​</a></h2><ul><li>在安装完依赖后 需要额外安装playwright的chromium及其依赖 <ul><li>对于windows：</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">playwright</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">chromium</span></span></code></pre></div><ul><li>对于linux：</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">playwright</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--with-deps</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">chromium</span></span></code></pre></div></li></ul><div class="danger custom-block"><p class="custom-block-title">注意<br></p><p>若使用的操作系统不在 <a href="/guide/deploy/getStarted/index.html">官方支持列表</a> 中，您可能无法正确执行该操作，也无法获得官方的任何支持。</p></div><h2 id="有时候公招图-专精材料图显示不完整" tabindex="-1">有时候公招图/专精材料图显示不完整 <a class="header-anchor" href="#有时候公招图-专精材料图显示不完整" aria-label="Permalink to &quot;有时候公招图/专精材料图显示不完整&quot;">​</a></h2><p>偶现该情况是正常现象，这与设备性能等因素有关，通常再请求一次即可正常返回图片。</p><h2 id="抽卡时出现了-按游戏卡池发布顺序来说-不可能出现的新干员" tabindex="-1">抽卡时出现了（按游戏卡池发布顺序来说）不可能出现的新干员 <a class="header-anchor" href="#抽卡时出现了-按游戏卡池发布顺序来说-不可能出现的新干员" aria-label="Permalink to &quot;抽卡时出现了（按游戏卡池发布顺序来说）不可能出现的新干员&quot;">​</a></h2><p>请理解为卡池在现在复刻了。复刻的卡池中显然会出现任何非限定或特殊干员。</p><h2 id="抽卡时出现了黑色的人物条-出现了限定-赠送-肉鸽干员" tabindex="-1">抽卡时出现了黑色的人物条/出现了限定/赠送/肉鸽干员 <a class="header-anchor" href="#抽卡时出现了黑色的人物条-出现了限定-赠送-肉鸽干员" aria-label="Permalink to &quot;抽卡时出现了黑色的人物条/出现了限定/赠送/肉鸽干员&quot;">​</a></h2><ul><li>可以前往控制台中的干员设置设定干员的限定属性（黑色的条一般是各个预备干员）</li></ul><blockquote><p>可是我的各个限定干员都已经被设置为不可抽取了</p></blockquote><ul><li>有时你可能更新了卡池却没有更新干员数据也会导致这个问题</li><li>此时重启兔兔本体或点击按钮【应用干员设置】即可更新干员数据</li></ul>',20)]))}const m=l(t,[["render",i]]);export{h as __pageData,m as default};
