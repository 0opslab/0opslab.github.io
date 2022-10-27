import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const l={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5229\u7528bashshell\u5FEB\u901F\u7684\u90E8\u7F72springboot\u9879\u76EE</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">#func{\u591A\u4E3B\u673A\u6267\u884C\u547D\u4EE4}</span>
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


<span class="token assign-left variable">projectDir</span><span class="token operator">=</span>/home/youguan/ucloud-crm-rpc/

<span class="token assign-left variable">jarName</span><span class="token operator">=</span><span class="token string">&quot;crm-app-service-impl-1.0.0.jar&quot;</span>
<span class="token assign-left variable">logDir</span><span class="token operator">=</span><span class="token variable">\${projectDir}</span>/logs/
<span class="token assign-left variable">logName</span><span class="token operator">=</span>service_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d&quot;</span><span class="token variable">)</span></span>.log

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-x</span> <span class="token string">&quot;<span class="token variable">\${logDir}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;<span class="token variable">\${logDir}</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $<span class="token punctuation">{</span>jarName<span class="token punctuation">}</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;grep&quot;</span> <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${count}</span> <span class="token parameter variable">-lt</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">cd</span> <span class="token variable">\${projectDir}</span>
        <span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> <span class="token variable">\${jarName}</span> <span class="token operator">&gt;</span> <span class="token variable">\${logDir}</span>/<span class="token variable">\${logName}</span> <span class="token operator">&amp;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;service\u542F\u52A8\u4E2D,\u5BF9\u5E94\u7684\u65E5\u5FD7\u76EE\u5F55\u4E3A<span class="token variable">\${logName}</span>&quot;</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8BE5\u9879\u76EE\u5DF2\u542F\u52A8----------&quot;</span>
<span class="token keyword">fi</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[p];function i(t,o){return a(),n("div",null,c)}const v=s(l,[["render",i],["__file","java-springboot-deplay-sh.html.vue"]]);export{v as default};
