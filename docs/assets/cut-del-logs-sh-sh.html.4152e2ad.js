import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u6309\u5929\u5207\u5272niginx\u65E5\u5FD7</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">#\u521D\u59CB\u5316</span>

<span class="token assign-left variable">LOGS_PATH</span><span class="token operator">=</span>/var/log/nginx

<span class="token assign-left variable">YESTERDAY</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;yesterday&quot;</span> +%Y%m%d<span class="token variable">)</span></span>

<span class="token comment">#\u6309\u5929\u5207\u5272\u65E5\u5FD7</span>

<span class="token function">mv</span> <span class="token variable">\${LOGS_PATH}</span>/aqzt.com.log <span class="token variable">\${LOGS_PATH}</span>/aqzt.com_<span class="token variable">\${YESTERDAY}</span>.log

<span class="token comment">#\u5411nginx\u4E3B\u8FDB\u7A0B\u53D1\u9001USR1\u4FE1\u53F7\uFF0C\u91CD\u65B0\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6\uFF0C\u5426\u5219\u4F1A\u7EE7\u7EED\u5F80mv\u540E\u7684\u6587\u4EF6\u5199\u6570\u636E\u7684\u3002\u539F\u56E0\u5728\u4E8E\uFF1Alinux\u7CFB\u7EDF\u4E2D\uFF0C\u5185\u6838\u662F\u6839\u636E\u6587\u4EF6\u63CF\u8FF0\u7B26\u6765\u627E\u6587\u4EF6\u7684\u3002\u5982\u679C\u4E0D\u8FD9\u6837\u64CD\u4F5C\u5BFC\u81F4\u65E5\u5FD7\u5207\u5272\u5931\u8D25\u3002</span>

<span class="token function">kill</span> <span class="token parameter variable">-USR1</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> axu <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;nginx: master process&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>

<span class="token comment">#\u6216\u8005\u8C03\u7528nginx -s  reopen\u7528\u6765\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6\uFF0Cnginx\u4F1A\u628A\u65B0\u65E5\u5FD7\u5199\u5165\u8FD9\u4E2A\u65B0\u7684\u6587\u4EF6\u4E2D</span>


<span class="token comment">#\u5220\u96647\u5929\u524D\u7684\u65E5\u5FD7</span>

<span class="token builtin class-name">cd</span> <span class="token variable">\${LOGS_PATH}</span>

<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-mtime</span> +7 <span class="token parameter variable">-name</span> <span class="token string">&quot;*20[1-9][3-9]*&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span>

<span class="token comment">#\u6216\u8005</span>

<span class="token comment">#find . -mtime +7 -name &quot;aqzt.com_*&quot; | xargs rm -f</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function c(p,o){return s(),a("div",null,t)}const v=n(i,[["render",c],["__file","cut-del-logs-sh-sh.html.vue"]]);export{v as default};
