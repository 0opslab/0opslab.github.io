import{_ as a,o as s,c as n,e}from"./app.a667bd71.js";const p={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5907\u4EFDdeb\u5305\u540D\u79F0\u5217\u8868</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token assign-left variable">HIP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">hostname</span> -I<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">backupdir</span><span class="token operator">=</span>/tmp/backup/<span class="token variable">\${HIP}</span>
<span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">$backupdir</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$backupdir</span>

<span class="token comment"># \u5907\u4EFDdeb\u5305\u540D\u79F0\u5217\u8868</span>
<span class="token punctuation">(</span> zcat /var/log/apt/history.log*.gz <span class="token operator">|</span> <span class="token function">grep</span> Commandline: <span class="token punctuation">;</span>  zcat /var/log/apt/history.log*.gz <span class="token operator">|</span> <span class="token function">grep</span> Commandline: <span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token variable">\${backupdir}</span>/deb.list.txt
<span class="token comment"># \u5907\u4EFD\u914D\u7F6E\u6587\u4EF6</span>
<span class="token builtin class-name">cd</span> /<span class="token punctuation">;</span> <span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-cvzf</span> <span class="token variable">\${backupdir}</span>/etc.tgz etc var/spool/cron/crontabs usr/local/<span class="token punctuation">{</span>bin,sbin<span class="token punctuation">}</span>

<span class="token comment"># \u5907\u4EFD\u91CD\u8981\u4E2A\u4EBA\u6587\u4EF6</span>
<span class="token function">sudo</span> <span class="token function">tar</span> --ignore-failed-read <span class="token parameter variable">-zcvp</span> <span class="token parameter variable">-f</span> <span class="token variable">\${backupdir}</span>/backup-<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&#39;+%Y-%m-%d_%H_%M_%S&#39;</span><span class="token variable">)</span></span>.tgz  <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/.cache <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/.gradle <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/.m2 <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/.mozilla <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/.IntelliJIdea2019.1 <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/.xsession-errors <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/.deepinwine <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/.local <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/.config/google-chrome <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/.config/oss-browser <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/Documents <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/Downloads <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/root/Music <span class="token punctuation">\\</span>
        <span class="token parameter variable">--exclude</span><span class="token operator">=</span>/opt/prometheus <span class="token punctuation">\\</span>
        --add-file<span class="token operator">=</span>/root <span class="token punctuation">\\</span>
        --add-file<span class="token operator">=</span>/opt

<span class="token comment"># \u8FDC\u7A0B\u5907\u4EFD</span>
<span class="token comment">#rsync -av -P --progress  $backupdir/ ljohn@192.168.1.100:/backup/\${HIP}/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function l(c,i){return s(),n("div",null,o)}const u=a(p,[["render",l],["__file","backup-linux-sh.html.vue"]]);export{u as default};
