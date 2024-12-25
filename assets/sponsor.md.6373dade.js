import{_ as u,o as t,c as e,S as _,F as d,R as f,n as g,C as s,t as i,G as m,J as p,a as l}from"./chunks/framework.65893c8f.js";import{a as y}from"./chunks/index.ca03c6e9.js";const q="/assets/5a4a07cc67f556288d3df2e9029fc14.f485e307.jpg";const b={name:"specialThanks"},k={class:"user-list"};function x(c,n,a,v,o,h){return t(),e("div",k,n[0]||(n[0]=[_('<div class="user" data-v-6c6a5107><img class="avatar" src="https://q1.qlogo.cn/g?b=qq&amp;nk=1391939232&amp;s=640" alt="" data-v-6c6a5107><div class="user-name" data-v-6c6a5107><span class="name" style="color:#f44336;font-size:18px;" data-v-6c6a5107>幕后大佬</span><span class="desc" data-v-6c6a5107>顶级的存在！支撑兔兔的所有！</span></div></div><div class="user" data-v-6c6a5107><img class="avatar" src="https://q1.qlogo.cn/g?b=qq&amp;nk=3061243068&amp;s=640" alt="" data-v-6c6a5107><div class="user-name" data-v-6c6a5107><span class="name" data-v-6c6a5107>Initial heart</span><span class="desc" data-v-6c6a5107>社区风纪委员、Logo 贡献者</span></div></div><div class="user" data-v-6c6a5107><img class="avatar" src="https://q1.qlogo.cn/g?b=qq&amp;nk=457586001&amp;s=640" alt="" data-v-6c6a5107><div class="user-name" data-v-6c6a5107><span class="name" data-v-6c6a5107>hsyhhssyy</span><span class="desc" data-v-6c6a5107>插件作者、兔兔 AI 维护人</span></div></div><div class="user" data-v-6c6a5107><img class="avatar" src="https://q1.qlogo.cn/g?b=qq&amp;nk=2300652404&amp;s=640" alt="" data-v-6c6a5107><div class="user-name" data-v-6c6a5107><span class="name" data-v-6c6a5107>天基</span><span class="desc" data-v-6c6a5107>插件作者、插件服务器贡献者</span></div></div><div class="user" data-v-6c6a5107><img class="avatar" src="https://q1.qlogo.cn/g?b=qq&amp;nk=1961411984&amp;s=640" alt="" data-v-6c6a5107><div class="user-name" data-v-6c6a5107><span class="name" data-v-6c6a5107>.Tdp</span><span class="desc" data-v-6c6a5107>插件作者、百度图像识别接口贡献者</span></div></div>',5)]))}const B=u(b,[["render",x],["__scopeId","data-v-6c6a5107"]]);const N={name:"chargeThanks",props:{displayUserName:Boolean,min:{type:Number,default:0},max:{type:Number,default:1/0}},methods:{get_sponsors:function(){y.get("https://server.amiyabot.com:10001/get_sponsors").then(c=>{this.data=JSON.parse(c.data),this.data.sort((n,a)=>a.all_sum_amount-n.all_sum_amount)})}},data(){return{data:[]}},mounted(){this.get_sponsors()}},A={class:"user-list"},T=["src","alt"],$={key:0,class:"user-name"},I={class:"name"},P={class:"amount"};function S(c,n,a,v,o,h){return t(),e("div",A,[(t(!0),e(d,null,f(o.data,r=>(t(),e(d,null,[r.all_sum_amount>=a.min&&r.all_sum_amount<a.max?(t(),e("div",{key:0,class:g(["user",{small:!a.displayUserName}])},[s("img",{class:"avatar",src:r.user.avatar,alt:r.user.name},null,8,T),a.displayUserName?(t(),e("div",$,[s("span",I,i(r.user.name),1),s("span",P,"￥"+i(r.all_sum_amount),1)])):m("",!0)],2)):m("",!0)],64))),256))])}const U=u(N,[["render",S],["__scopeId","data-v-78401fcf"]]),O=JSON.parse('{"title":"赞助","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"sponsor.md","filePath":"sponsor.md","lastUpdated":1735119419000}'),V={name:"sponsor.md"},j=Object.assign(V,{setup(c){return(n,a)=>(t(),e("div",null,[a[0]||(a[0]=_('<h1 id="赞助" tabindex="-1">赞助 <a class="header-anchor" href="#赞助" aria-label="Permalink to &quot;赞助&quot;">​</a></h1><p>AmiyaBot 一路走来离不开大家的默默支持，如果你喜欢并支持我们，可以为我们打赏一瓶快乐水。我相信快乐是可以互相传递的，你的快乐水带给我们快乐的同时，想必 AmiyaBot 也给你带去了快乐吧。</p><p>但同时我们希望你量力而为，你对 AmiyaBot 的认可就已经是最大的支持了。如果可以的话，恳请你在 <a href="https://github.com/AmiyaBot/Amiya-Bot" target="_blank" rel="noreferrer">Github</a> 为 AmiyaBot 点上一颗小小的️ ⭐ star。</p><h2 id="特别鸣谢" tabindex="-1">特别鸣谢 <a class="header-anchor" href="#特别鸣谢" aria-label="Permalink to &quot;特别鸣谢&quot;">​</a></h2><p>感谢各位对 AmiyaBot 社区做出的贡献，是大家共同塑造了 AmiyaBot 社区的繁荣。期待未来我们能携手创造更多可能！🌹</p>',5)),p(B),a[1]||(a[1]=s("h2",{id:"充电鸣谢",tabindex:"-1"},[l("充电鸣谢 "),s("a",{class:"header-anchor",href:"#充电鸣谢","aria-label":'Permalink to "充电鸣谢"'},"​")],-1)),a[2]||(a[2]=s("p",null,"你们的鼎力支持让我们感到创作 AmiyaBot 项目是值得的。感谢有你，让 AmiyaBot 秉承初衷。❤️",-1)),p(U,{min:0,displayUserName:!0}),a[3]||(a[3]=s("p",null,[l("打赏请前往"),s("a",{href:"https://afdian.com/a/amiyabot",target:"_blank",rel:"noreferrer"},"爱发电主页"),l("。")],-1)),a[4]||(a[4]=s("img",{style:{width:"400px"},src:q,alt:"image"},null,-1))]))}});export{O as __pageData,j as default};