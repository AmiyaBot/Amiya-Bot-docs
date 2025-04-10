import{_ as a,o as n,c as l,S as p}from"./chunks/framework.65893c8f.js";const F=JSON.parse('{"title":"改变 Playwright 启动","description":"","frontmatter":{},"headers":[],"relativePath":"develop/advanced/playwright.md","filePath":"develop/advanced/playwright.md","lastUpdated":1744281297000}'),o={name:"develop/advanced/playwright.md"};function t(e,s,r,c,y,i){return n(),l("div",null,s[0]||(s[0]=[p(`<h1 id="改变-playwright-启动" tabindex="-1">改变 Playwright 启动 <a class="header-anchor" href="#改变-playwright-启动" aria-label="Permalink to &quot;改变 Playwright 启动&quot;">​</a></h1><p>改变默认的 Playwright 启动行为。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> playwright</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">async_api </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> Playwright</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> Browser</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> amiyabot </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> BrowserLaunchConfig</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">MyBrowserLauncher</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">BrowserLaunchConfig</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">super</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">__init__</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">browser_type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">firefox</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 修改浏览器属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># 或改写 launch_browser 方法</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">async</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">def</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">launch_browser</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">playwright</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Playwright</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#BABED8;"> Browser</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">        ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># 返回通过任意方式创建的 Browser 对象</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># return await playwright.webkit.launch()</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># return await playwright.chromium.launch()</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#BABED8;"> playwright</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">firefox</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">launch</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">bot </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">AmiyaBot</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#BABED8;">asyncio</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    bot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">launch_browser</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">MyBrowserLauncher</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span></code></pre></div>`,3)]))}const B=a(o,[["render",t]]);export{F as __pageData,B as default};
