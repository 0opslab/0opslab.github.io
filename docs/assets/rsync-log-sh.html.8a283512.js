import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const t={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u540C\u6B65\u8FDC\u7A0B\u65E5\u5FD7</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">## </span>

<span class="token assign-left variable">tomcat_log</span><span class="token operator">=</span>/usr/local/tomcat/logs/home.log.<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token parameter variable">-d</span> last-day +%Y-%m-%d<span class="token variable">\`</span></span>
<span class="token assign-left variable">tomcat_file</span><span class="token operator">=</span>home.log.<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token parameter variable">-d</span> last-day +%Y-%m-%d<span class="token variable">\`</span></span>
<span class="token assign-left variable">today</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token parameter variable">-d</span> last-day +<span class="token string">&quot;%Y&quot;</span><span class="token variable">\`</span></span>/<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token parameter variable">-d</span> last-day +<span class="token string">&quot;%m&quot;</span><span class="token variable">\`</span></span>/<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token parameter variable">-d</span> last-day +<span class="token string">&quot;%d&quot;</span><span class="token variable">\`</span></span>/
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Start.....&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&#39;%Y-%m-%d %H:%M:%S&#39;</span><span class="token variable">\`</span></span>&quot;</span> 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-----------------------&quot;</span>
/usr/local/bin/pigz <span class="token parameter variable">-9</span> <span class="token variable">$tomcat_log</span>
<span class="token function">mv</span> <span class="token string">&quot;<span class="token variable">$tomcat_log</span>&quot;</span>.gz <span class="token string">&quot;<span class="token variable">$tomcat_log</span>&quot;</span>.web_log.gz
<span class="token builtin class-name">echo</span> <span class="token string">&quot;create dir.....&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&#39;%Y-%m-%d %H:%M:%S&#39;</span><span class="token variable">\`</span></span>&quot;</span> 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-----------------------&quot;</span>
<span class="token function">ssh</span> <span class="token number">192.168</span>.56.101 <span class="token string">&quot;mkdir -p /data/log/<span class="token variable">$today</span>&quot;</span>
/usr/bin/rsync <span class="token parameter variable">-av</span> <span class="token parameter variable">--bwlimit</span><span class="token operator">=</span><span class="token number">6400</span> <span class="token string">&quot;<span class="token variable">$tomcat_log</span>&quot;</span>.web_log.gz <span class="token number">192.168</span>.56.101:/data/log/<span class="token variable">$today</span>
<span class="token comment">#/usr/bin/rsync -av --bwlimit=6400 &quot;$tomcat_log&quot;.gz 192.168.56.101:/data/$today/&quot;$tomcat_file&quot;.web.gz</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;finish.....&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&#39;%Y-%m-%d %H:%M:%S&#39;</span><span class="token variable">\`</span></span>&quot;</span> 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;-----------------------&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[l];function p(i,c){return a(),n("div",null,o)}const d=s(t,[["render",p],["__file","rsync-log-sh.html.vue"]]);export{d as default};