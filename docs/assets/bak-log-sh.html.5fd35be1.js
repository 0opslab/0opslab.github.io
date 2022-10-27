import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u6BCF\u65E5\u81EA\u52A8\u5907\u4EFD</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
:<span class="token operator">&lt;&lt;</span><span class="token string">BLOCK
\u6BCF\u59291\uFF1A00 \u5907\u4EFD/var/log \u76EE\u5F55\u4E0B\u524D\u4E00\u5929\u7684\u65E5\u5FD7\u6587\u4EF6\u5E76\u5B58\u653E\u5728\u5F53\u524D\u76EE\u5F55\u4E2Dbtslog \u76EE\u5F55\u4E2D\uFF0C
\u7136\u540E\u5220\u966415\u5929\u524D\u7684log\u5907\u4EFD\u6587\u4EF6\uFF0C\u5B9E\u7528shell\u811A\u672C\u5B8C\u6210\u3002\u65E5\u5FD7\u683C\u5F0F\uFF1Abtsvr.log.2018-01-01,
\u6253\u5305\u5907\u4EFD\u6587\u4EF6\u6401\u7F6E\u4E3Abtsvr.log.2018-01-01.tar.gz
BLOCK</span>

<span class="token assign-left variable">yesterday</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span>  +<span class="token string">&quot;%Y-%m-%d&quot;</span> <span class="token parameter variable">-d</span>  <span class="token string">&quot;-1 days&quot;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">backupdir</span><span class="token operator">=</span>/server/backup/btslog
<span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">$backupdir</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$backupdir</span> 

<span class="token function-name function">backup_yes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">cd</span> <span class="token variable">\${backupdir}</span>
    <span class="token function">mv</span> /var/log/btsvr.log.<span class="token variable">\${yesterday}</span> <span class="token variable">\${backupdir}</span>
    <span class="token function">tar</span> <span class="token parameter variable">-czvf</span> btsvr.log.<span class="token variable">\${yesterday}</span>.tar.gz btsvr.log.<span class="token variable">\${yesterday}</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">rm</span> <span class="token parameter variable">-f</span> ./btsvr.log.<span class="token variable">\${yesterday}</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">delete_old</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*.tar.gz&quot;</span> <span class="token parameter variable">-ctime</span> +15  <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
backup_yes
delete_old

<span class="token comment"># crontab -e \u5B9A\u65F6\u4EFB\u52A1</span>
<span class="token comment"># 0 1 * * * /bin/bash /server/scripts/bak_log.sh &amp;&gt; /dev/null</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[t];function i(c,o){return s(),a("div",null,p)}const d=n(l,[["render",i],["__file","bak-log-sh.html.vue"]]);export{d as default};
