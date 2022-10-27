import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> \u7684\u53C2\u6570\u975E\u5E38\u591A, \u5728\u6B64\u4EC5\u5217\u51FA\u51E0\u4E2A\u5E38\u7528\u7684\u53C2\u6570\u5E76\u5927\u7565\u4ECB\u7ECD\u542B\u4E49
<span class="token parameter variable">-A</span> \u5217\u51FA\u6240\u6709\u7684\u884C\u7A0B
<span class="token parameter variable">-w</span> \u663E\u793A\u52A0\u5BBD\u53EF\u4EE5\u663E\u793A\u8F83\u591A\u7684\u8D44\u8BAF
<span class="token parameter variable">-au</span> \u663E\u793A\u8F83\u8BE6\u7EC6\u7684\u8D44\u8BAF
<span class="token parameter variable">-aux</span> \u663E\u793A\u6240\u6709\u5305\u542B\u5176\u4ED6\u4F7F\u7528\u8005\u7684\u884C\u7A0B
au<span class="token punctuation">(</span>x<span class="token punctuation">)</span> \u8F93\u51FA\u683C\u5F0F <span class="token builtin class-name">:</span>
<span class="token environment constant">USER</span> PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND
<span class="token environment constant">USER</span><span class="token builtin class-name">:</span> \u884C\u7A0B\u62E5\u6709\u8005
PID: pid
%CPU: \u5360\u7528\u7684 CPU \u4F7F\u7528\u7387
%MEM: \u5360\u7528\u7684\u8BB0\u5FC6\u4F53\u4F7F\u7528\u7387
VSZ: \u5360\u7528\u7684\u865A\u62DF\u8BB0\u5FC6\u4F53\u5927\u5C0F
RSS: \u5360\u7528\u7684\u8BB0\u5FC6\u4F53\u5927\u5C0F
TTY: \u7EC8\u7AEF\u7684\u6B21\u8981\u88C5\u7F6E\u53F7\u7801 <span class="token punctuation">(</span>minor device number of <span class="token function">tty</span><span class="token punctuation">)</span>
STAT: \u8BE5\u884C\u7A0B\u7684\u72B6\u6001:
D: \u4E0D\u53EF\u4E2D\u65AD\u7684\u9759\u6B62 <span class="token punctuation">(</span>\u901A\u60B8\u25A1\u25A1\u7F1Cb\u8FDB\u884C I/O \u52A8\u4F5C<span class="token punctuation">)</span>
R: \u6B63\u5728\u6267\u884C\u4E2D
S: \u9759\u6B62\u72B6\u6001
T: \u6682\u505C\u6267\u884C
Z: \u4E0D\u5B58\u5728\u4F46\u6682\u65F6\u65E0\u6CD5\u6D88\u9664
W: \u6CA1\u6709\u8DB3\u591F\u7684\u8BB0\u5FC6\u4F53\u5206\u9875\u53EF\u5206\u914D
<span class="token operator">&lt;</span>: \u9AD8\u4F18\u5148\u5E8F\u7684\u884C\u7A0B
N: \u4F4E\u4F18\u5148\u5E8F\u7684\u884C\u7A0B
L: \u6709\u8BB0\u5FC6\u4F53\u5206\u9875\u5206\u914D\u5E76\u9501\u5728\u8BB0\u5FC6\u4F53\u5185 <span class="token punctuation">(</span>\u5B9E\u65F6\u7CFB\u7EDF\u6216\u6371A I/O<span class="token punctuation">)</span>
START: \u884C\u7A0B\u5F00\u59CB\u65F6\u95F4
TIME: \u6267\u884C\u7684\u65F6\u95F4
COMMAND:\u6240\u6267\u884C\u7684\u6307\u4EE4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To list every process on the system:</span>
<span class="token function">ps</span> aux

<span class="token comment"># To list a process tree</span>
<span class="token function">ps</span> axjf

<span class="token comment"># To list every process owned by foouser:</span>
<span class="token function">ps</span> <span class="token parameter variable">-aufoouser</span>

<span class="token comment"># To list every process with a user-defined format:</span>
<span class="token function">ps</span> <span class="token parameter variable">-eo</span> pid,user,command

<span class="token comment"># Exclude grep from your grepped output of ps.</span>
<span class="token comment"># Add [] to the first letter. Ex: sshd -&gt; [s]shd</span>
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;[h]ttpd&#39;</span>

<span class="token comment"># \u663E\u793A\u6307\u5B9A\u7528\u6237\u4FE1\u606F</span>
<span class="token comment">#\u663E\u793Aroot\u8FDB\u7A0B\u7528\u6237\u4FE1\u606F</span>
<span class="token function">ps</span> <span class="token parameter variable">-u</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function t(d,r){return s(),a("div",null,c)}const o=n(i,[["render",t],["__file","ps.html.vue"]]);export{o as default};
