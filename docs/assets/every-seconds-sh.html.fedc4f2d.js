import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:shell\u6BCFN\u79D2\u4E2D\u6267\u884C\u4E00\u6B21</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token assign-left variable">INTERVAL</span><span class="token operator">=</span><span class="token number">10</span>

<span class="token keyword">while</span> <span class="token builtin class-name">:</span> <span class="token keyword">do</span>
  <span class="token assign-left variable">timestr</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span><span class="token variable">)</span></span>
  <span class="token assign-left variable">redisInfo</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>/xx/redis-cli <span class="token parameter variable">-h</span> localhost <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token parameter variable">-a</span> password info<span class="token variable">)</span></span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;===========&quot;</span> <span class="token operator">&gt;&gt;</span> xx/redis-info.txt
  <span class="token builtin class-name">echo</span> <span class="token variable">$timestr</span> <span class="token operator">&gt;&gt;</span> /xx/redis-info.txt
  <span class="token builtin class-name">echo</span> <span class="token variable">$redisInfo</span> <span class="token operator">&gt;&gt;</span> xx/redis-info.txt
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;===========&quot;</span> <span class="token operator">&gt;&gt;</span> xx/redis-info.txt
  <span class="token function">sleep</span> <span class="token variable">$INTERVAL</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[t];function o(p,c){return n(),a("div",null,i)}const d=s(l,[["render",o],["__file","every-seconds-sh.html.vue"]]);export{d as default};
