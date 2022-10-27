import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \`\`\`ops</span>
<span class="token comment"># title:\u68C0\u6D4B\u4E24\u53F0\u670D\u52A1\u5668\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u4E00\u81F4\u6027</span>
<span class="token comment"># descr:\u901A\u8FC7\u5BF9\u6BD4\u4E24\u53F0\u670D\u52A1\u5668\u4E0A\u6587\u4EF6\u7684md5\u503C\uFF0C\u8FBE\u5230\u68C0\u6D4B\u4E00\u81F4\u6027\u7684\u76EE\u7684</span>
<span class="token comment"># time:2020-07-01</span>
<span class="token comment"># \`\`\`</span>
<span class="token assign-left variable">dir</span><span class="token operator">=</span>/data/web
<span class="token assign-left variable">b_ip</span><span class="token operator">=</span><span class="token number">192.168</span>.88.10
<span class="token comment">#\u5C06\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u5168\u90E8\u904D\u5386\u51FA\u6765\u5E76\u4F5C\u4E3Amd5sum\u547D\u4EE4\u7684\u53C2\u6570\uFF0C\u8FDB\u800C\u5F97\u5230\u6240\u6709\u6587\u4EF6\u7684md5\u503C\uFF0C\u5E76\u5199\u5165\u5230\u6307\u5B9A\u6587\u4EF6\u4E2D</span>
<span class="token function">find</span> <span class="token variable">$dir</span> <span class="token parameter variable">-type</span> f<span class="token operator">|</span><span class="token function">xargs</span> md5sum <span class="token operator">&gt;</span> /tmp/md5_a.txt
<span class="token function">ssh</span> <span class="token variable">$b_ip</span> <span class="token string">&quot;find <span class="token variable">$dir</span> -type f|xargs md5sum &gt; /tmp/md5_b.txt&quot;</span>
<span class="token function">scp</span> <span class="token variable">$b_ip</span>:/tmp/md5_b.txt /tmp
<span class="token comment">#\u5C06\u6587\u4EF6\u540D\u4F5C\u4E3A\u904D\u5386\u5BF9\u8C61\u8FDB\u884C\u4E00\u4E00\u6BD4\u5BF9</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">f</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">awk</span> <span class="token string">&#39;{print 2} /tmp/md5_a.txt&#39;</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span>
<span class="token comment">#\u4EE5a\u673A\u5668\u4E3A\u6807\u51C6\uFF0C\u5F53b\u673A\u5668\u4E0D\u5B58\u5728\u904D\u5386\u5BF9\u8C61\u4E2D\u7684\u6587\u4EF6\u65F6\u76F4\u63A5\u8F93\u51FA\u4E0D\u5B58\u5728\u7684\u7ED3\u679C</span>
<span class="token keyword">if</span> <span class="token function">grep</span> <span class="token parameter variable">-qw</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span> /tmp/md5_b.txt
<span class="token keyword">then</span>
<span class="token assign-left variable">md5_a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> <span class="token parameter variable">-w</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span> /tmp/md5_a.txt<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print 1}&#39;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">md5_b</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> <span class="token parameter variable">-w</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span> /tmp/md5_b.txt<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print 1}&#39;</span><span class="token variable">\`</span></span>
<span class="token comment">#\u5F53\u6587\u4EF6\u5B58\u5728\u65F6\uFF0C\u5982\u679Cmd5\u503C\u4E0D\u4E00\u81F4\u5219\u8F93\u51FA\u6587\u4EF6\u6539\u53D8\u7684\u7ED3\u679C</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$md5_a</span> <span class="token operator">!=</span> <span class="token variable">$md5_b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$f</span> changed.&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">else</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$f</span> deleted.&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function i(o,c){return n(),a("div",null,l)}const d=s(p,[["render",i],["__file","check-dirs-equals-sh.html.vue"]]);export{d as default};
