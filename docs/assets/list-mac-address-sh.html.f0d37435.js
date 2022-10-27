import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const c={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u83B7\u53D6\u67D0\u4E00\u4E2A\u7F51\u6BB5\u5185\u6240\u6709\u4E3B\u673A\u7684mac\u5730\u5740</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">254</span><span class="token variable">\`</span></span> 
<span class="token keyword">do</span>
	arping <span class="token parameter variable">-c</span> <span class="token number">2</span> <span class="token number">192.168</span>.0.<span class="token variable">$i</span><span class="token operator">|</span><span class="token function">grep</span> ^Unicast<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $4,$5}&#39;</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function t(o,p){return n(),a("div",null,i)}const d=s(c,[["render",t],["__file","list-mac-address-sh.html.vue"]]);export{d as default};
