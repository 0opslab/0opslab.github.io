import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>::\`\`<span class="token variable"><span class="token variable">\`</span>ops
::title:\u7528\u547D\u4EE4firewall\u7BA1\u7406windows\u9632\u706B\u5899
::descr:
::<span class="token variable">\`</span></span>\`\`
<span class="token builtin class-name">echo</span> off 
cls 
<span class="token builtin class-name">set</span> <span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token number">30000</span> 
<span class="token builtin class-name">set</span> <span class="token assign-left variable">end</span><span class="token operator">=</span><span class="token number">30010</span> 
:continue
<span class="token builtin class-name">set</span> /a <span class="token assign-left variable">var</span><span class="token operator">+=</span><span class="token number">1</span> 
<span class="token builtin class-name">echo</span> <span class="token function">add</span> port %var% 
netsh firewall <span class="token function">add</span> portopening TCP %var% ftp_data_%var% 
<span class="token keyword">if</span> %var% lss %end% goto <span class="token builtin class-name">continue</span> 

netsh firewall <span class="token builtin class-name">set</span> portopening all <span class="token number">80</span> aqzt.com-80 <span class="token builtin class-name">enable</span> 
netsh firewall <span class="token builtin class-name">set</span> portopening all <span class="token number">443</span> aqzt.com-443 <span class="token builtin class-name">enable</span> 
netsh firewall <span class="token builtin class-name">set</span> portopening all <span class="token number">3399</span> aqzt.com-3399 <span class="token builtin class-name">enable</span> 
netsh firewall <span class="token builtin class-name">set</span> portopening all <span class="token number">3299</span> aqzt.com-3299 <span class="token builtin class-name">enable</span> 
netsh firewall <span class="token builtin class-name">set</span> portopening TCP <span class="token number">3389</span> aqzt.com-3298 <span class="token builtin class-name">enable</span>  CUSTOM <span class="token number">1.1</span>.1.11

<span class="token builtin class-name">echo</span> complete 
pause
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[i];function c(p,o){return n(),a("div",null,t)}const d=s(l,[["render",c],["__file","windows-firewall-bat.html.vue"]]);export{d as default};
