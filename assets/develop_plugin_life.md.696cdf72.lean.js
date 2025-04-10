import{_ as n,o as a,c as l,S as p}from"./chunks/framework.65893c8f.js";const F=JSON.parse('{"title":"插件生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"develop/plugin/life.md","filePath":"develop/plugin/life.md","lastUpdated":1744281297000}'),o={name:"develop/plugin/life.md"};function e(t,s,c,r,i,y){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="插件生命周期" tabindex="-1">插件生命周期 <a class="header-anchor" href="#插件生命周期" aria-label="Permalink to &quot;插件生命周期&quot;">​</a></h1><p>你可以在插件被安装或卸载时执行一些操作，只需要继承 PluginInstance 并覆盖其方法。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> PluginInstance</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">MyPlugin</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">PluginInstance</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">install</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># 插件被安装时执行的操作</span></span>
<span class="line"><span style="color:#BABED8;">        ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">uninstall</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># 插件被卸载时执行的操作</span></span>
<span class="line"><span style="color:#BABED8;">        ...</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">bot </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">MyPlugin</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#BABED8;font-style:italic;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我的插件</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#BABED8;font-style:italic;">version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#BABED8;font-style:italic;">plugin_id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#BABED8;font-style:italic;">description</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我的第一个插件</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span></code></pre></div>`,3)]))}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
