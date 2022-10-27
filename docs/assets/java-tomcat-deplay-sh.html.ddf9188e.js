import{_ as n,o as a,c as s,e}from"./app.a667bd71.js";const l={},c=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5229\u7528bashshell\u5FEB\u901F\u90E8\u7F72\u9879\u76EE\u5230tomcat\u5BB9\u5668\u4E2D</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token builtin class-name">cd</span> /home/local/workspace/QHMCC/
svn update
<span class="token function">rm</span> <span class="token parameter variable">-rdf</span> deploy/
gradle <span class="token parameter variable">-P</span> <span class="token assign-left variable">ReleaseState</span><span class="token operator">=</span><span class="token string">&quot;Test&quot;</span> <span class="token parameter variable">-P</span> <span class="token assign-left variable">WebappNum</span><span class="token operator">=</span><span class="token string">&quot;all&quot;</span> release
<span class="token builtin class-name">cd</span> deploy/

<span class="token builtin class-name">echo</span> <span class="token string">&quot;handing  qhmcc_wap&quot;</span>
<span class="token function">unzip</span> <span class="token parameter variable">-qqo</span> qhmcc_wap.zip <span class="token parameter variable">-d</span> qhmcc_wap
<span class="token function">rm</span> <span class="token parameter variable">-rdf</span> /home/local/tomcat/webapps/qhmcc_wap/
<span class="token function">mv</span> qhmcc_wap /home/local/tomcat/webapps/qhmcc_wap/

<span class="token builtin class-name">echo</span> <span class="token string">&quot;handing qhmcc_client&quot;</span>
<span class="token function">unzip</span> <span class="token parameter variable">-qqo</span> qhmcc_client.zip <span class="token parameter variable">-d</span> qhmcc_client
<span class="token function">rm</span> <span class="token parameter variable">-rdf</span> /home/local/tomcat/webapps/qhmcc_client
<span class="token function">mv</span> qhmcc_client /home/local/tomcat/webapps/qhmcc_client/

<span class="token builtin class-name">echo</span> <span class="token string">&quot;handing qhmcc_web&quot;</span>
<span class="token function">unzip</span> <span class="token parameter variable">-qqo</span> qhmcc_web.zip <span class="token parameter variable">-d</span> qhmcc_web
<span class="token function">rm</span> <span class="token parameter variable">-rdf</span> /home/local/tomcat/webapps/qhmcc_web
<span class="token function">mv</span> qhmcc_web /home/local/tomcat/webapps/qhmcc_web/



<span class="token builtin class-name">echo</span> <span class="token string">&quot;handing www&quot;</span>
<span class="token builtin class-name">cd</span> /home/local/www/ydb3
svn update


<span class="token builtin class-name">echo</span> <span class="token string">&quot;restart tomcat&quot;</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> tomcat <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span>  <span class="token string">&quot;grep&quot;</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>

<span class="token function">rm</span> <span class="token parameter variable">-rdf</span> /home/local/tomcat/work/
<span class="token function">rm</span> <span class="token parameter variable">-rdf</span> /home/local/tomcat/temp/

/home/local/tomcat/bin/startup.sh <span class="token operator">&amp;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[c];function t(p,o){return a(),s("div",null,i)}const m=n(l,[["render",t],["__file","java-tomcat-deplay-sh.html.vue"]]);export{m as default};
