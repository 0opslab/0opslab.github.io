import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u88AB\u52A8\u5206\u6790nginx\u65E5\u8BB0\u627E\u51FA\u8BF7\u6C42\u6570\u8F83\u5927\u7684IP\u5E76\u7528iptables\u5C01\u6389</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment"># @usgae \u5C06\u4EE5\u4E0B\u811A\u672C\u6DFB\u52A0\u5230 crontab\u4E2D</span>

<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">100</span> <span class="token comment">#\u4E0A\u9650</span>
<span class="token builtin class-name">cd</span> /home/wwwlogs
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">tail</span> access.log <span class="token parameter variable">-n</span> <span class="token number">1000</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token operator">|</span><span class="token function">sort</span><span class="token operator">|</span><span class="token function">uniq</span> -c<span class="token operator">|</span><span class="token function">sort</span> -rn<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{if ($1&gt;$num){print $2}}&#39;</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span>
      iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-s</span> <span class="token variable">$i</span> <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> DROP
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function o(c,i){return n(),a("div",null,l)}const d=s(p,[["render",o],["__file","preventCCNginx-sh.html.vue"]]);export{d as default};