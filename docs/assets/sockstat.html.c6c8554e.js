import{_ as s,o as n,c as e,e as a}from"./app.a667bd71.js";const c={},t=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To view which users/processes are listening to which ports:</span>
<span class="token comment">#\u8981\u67E5\u770B\u54EA\u4E9B\u7528\u6237/\u8FDB\u7A0B\u6B63\u5728\u4FA6\u542C\u54EA\u4E9B\u7AEF\u53E3\uFF1A</span>
<span class="token function">sudo</span> sockstat <span class="token parameter variable">-l</span>

<span class="token comment"># \u6253\u5F00\u7684socket\u6570\u91CF\u5F88\u591A\u65F6\uFF0Cnetstat\u5C31\u4F1A\u53D8\u5F97\u6162\u4E86\uFF0C\u6709\u4EC0\u4E48\u529E\u6CD5\u53EF\u4EE5\u5FEB\u901F\u67E5\u770B\u7CFB\u7EDF\u4E2Dsocket\u72B6\u6001</span>
<span class="token function">cat</span> /proc/net/sockstat

<span class="token comment"># ipv6</span>
<span class="token function">cat</span> /proc/net/sockstat6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[t];function o(l,d){return n(),e("div",null,i)}const v=s(c,[["render",o],["__file","sockstat.html.vue"]]);export{v as default};
