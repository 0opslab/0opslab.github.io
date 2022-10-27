import{_ as a,o as s,c as n,e}from"./app.a667bd71.js";const p={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5229\u7528\u811A\u672C\u505C\u6B62tomcat</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token builtin class-name">source</span> ~/.bash_profile
<span class="token assign-left variable">name</span><span class="token operator">=</span>tomcat_wap
<span class="token assign-left variable">fullpath</span><span class="token operator">=</span>/webapp/<span class="token variable">$name</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -eLf<span class="token operator">|</span><span class="token function">grep</span> $<span class="token punctuation">{</span>name<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /webapp/tomcat_wap/tomcat9182/work/Catalina/localhost/*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /webapp/tomcat_wap/tomcat9282/work/Catalina/localhost/*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /webapp/tomcat_wap/tomcat9382/work/Catalina/localhost/*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /webapp/tomcat_wap/tomcat9482/work/Catalina/localhost/*
<span class="token builtin class-name">echo</span> <span class="token variable">$count</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${count}</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${name}</span> Servers  has shutdown!&quot;</span>
<span class="token keyword">else</span>
   <span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token variable">$name</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print($2)}&#39;</span><span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${name}</span> Servers is stop  now!&quot;</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function l(c,i){return s(),n("div",null,o)}const k=a(p,[["render",l],["__file","tomcat-stopWap-sh.html.vue"]]);export{k as default};
