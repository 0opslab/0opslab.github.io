import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u83B7\u53D6linux\u4E3B\u673Acpu\u7684\u8D1F\u8F7D\u4FE1\u606F</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">#1.load\u9AD8\u65F6\u5904\u4E8E\u8FD0\u884C\u961F\u5217\u7684\u8FDB\u7A0B</span>

<span class="token comment">#bash cpu_load_avg.sh </span>
<span class="token comment">#Mon Mar 16 09:21:55 CST 2020</span>
<span class="token comment">#R+   31979 31979 31978 stress</span>
<span class="token comment">#R+   32003 32003 31997 bash</span>
<span class="token comment">#R+   32002 32002 31997 ps</span>
<span class="token comment">#R+   32004 32004 31997 bash</span>
<span class="token comment">#Mon Mar 16 09:21:55 CST 2020</span>
<span class="token comment">#2.14 1.94 2.10 2/135 32006</span>
<span class="token comment">#R\u4EE3\u8868\u8FD0\u884C\u4E2D\u7684\u961F\u5217\uFF0CD\u662F\u4E0D\u53EF\u4E2D\u65AD\u7684\u7761\u7720\u8FDB\u7A0B</span>

<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>C
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/sbin:/usr/sbin:/bin:/usr/bin
<span class="token assign-left variable">interval</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token number">86400</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token punctuation">$(</span>expr $<span class="token punctuation">{</span>length<span class="token punctuation">}</span> / $<span class="token punctuation">{</span>interval<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token variable">)</span></span>
<span class="token keyword">do</span>
  <span class="token function">date</span>
  <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>C <span class="token function">ps</span> <span class="token parameter variable">-eTo</span> stat,pid,tid,ppid,comm  --no-header <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/^ \\*//&#39;</span> <span class="token operator">|</span> perl <span class="token parameter variable">-nE</span> <span class="token string">&#39;chomp;say if (m!^\\S*[RD]+\\s*!)&#39;</span>
  <span class="token function">date</span>
  <span class="token function">cat</span> /proc/loadavg
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token function">sleep</span> <span class="token variable">\${interval}</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[t];function p(c,o){return s(),a("div",null,i)}const d=n(l,[["render",p],["__file","cpu-load-avg-sh.html.vue"]]);export{d as default};
