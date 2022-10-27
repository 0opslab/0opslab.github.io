import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const i={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u7528\u4E8E\u76D1\u63A7kafka\u7684\u72B6\u6001\u68C0\u6D4B\u8FDB\u7A0B\u662F\u5426\u5B58\u5728</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token function">ps</span> -fe<span class="token operator">|</span><span class="token function">grep</span> processString <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;start process.....&quot;</span>
  <span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;runing.....&quot;</span>
<span class="token keyword">fi</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[t];function l(o,p){return n(),a("div",null,c)}const d=s(i,[["render",l],["__file","monitor-kafka-sh.html.vue"]]);export{d as default};
