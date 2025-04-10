import{_ as a,o as n,c as e,S as l}from"./chunks/framework.65893c8f.js";const m=JSON.parse('{"title":"准备开发环境","description":"","frontmatter":{},"headers":[],"relativePath":"develop/plugin/env.md","filePath":"develop/plugin/env.md","lastUpdated":1744281297000}'),p={name:"develop/plugin/env.md"};function o(t,s,c,i,r,d){return n(),e("div",null,s[0]||(s[0]=[l(`<h1 id="准备开发环境" tabindex="-1">准备开发环境 <a class="header-anchor" href="#准备开发环境" aria-label="Permalink to &quot;准备开发环境&quot;">​</a></h1><p>插件并不强制要求在 demo 的项目下开发，如果插件<strong>不需要使用 demo 的内置模块</strong>，那么你可以在自己任意的目录内开发而不需要克隆 demo 项目以及插件仓库的代码。</p><p>以下说明默认在 demo 项目内。</p><h2 id="克隆仓库" tabindex="-1">克隆仓库 <a class="header-anchor" href="#克隆仓库" aria-label="Permalink to &quot;克隆仓库&quot;">​</a></h2><p>克隆 兔兔-v6</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://github.com/AmiyaBot/Amiya-Bot.git</span></span></code></pre></div><p>在 demo 项目内克隆插件开发仓库</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Amiya-Bot</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://github.com/AmiyaBot/Amiya-Bot-plugins.git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pluginsDev</span></span></code></pre></div><p>此时的目录结构应为</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Amiya-Bot</span></span>
<span class="line"><span style="color:#babed8;">├── pluginsDev</span></span>
<span class="line"><span style="color:#babed8;">│   │</span></span>
<span class="line"><span style="color:#babed8;">│   ...</span></span>
<span class="line"><span style="color:#babed8;">...</span></span></code></pre></div><p>建议安装 兔兔-v6 的依赖，如果<strong>不需要使用 demo 的内置模块</strong>或是你在自己的目录内开发插件。那么只需要安装 amiyabot 即可。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">amiyabot</span></span></code></pre></div>`,12)]))}const h=a(p,[["render",o]]);export{m as __pageData,h as default};
