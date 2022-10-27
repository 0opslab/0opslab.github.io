import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const t={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5229\u7528\u811A\u672C\u91CD\u542Ftomcat</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token assign-left variable">tomcat_path</span><span class="token operator">=</span>/usr/local/tomcat_wap/

<span class="token builtin class-name">cd</span> <span class="token variable">$fullpath</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span>  <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span>  $fullpath<span class="token variable">\`</span></span>
<span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$i</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        	<span class="token builtin class-name">echo</span> <span class="token string">&quot; stop <span class="token variable">\${name}</span>/<span class="token variable">\${i}</span> Server&quot;</span>
                <span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token variable">\${tomcat_path}</span>/<span class="token variable">$i</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span>
                <span class="token function">rm</span> <span class="token parameter variable">-rdf</span> <span class="token variable">\${tomcat_path}</span>/<span class="token variable">$i</span>/temp/*
                <span class="token function">rm</span> <span class="token parameter variable">-rdf</span> <span class="token variable">\${tomcat_path}</span>/<span class="token variable">$i</span>/work/*
                <span class="token builtin class-name">echo</span> <span class="token string">&quot; clean <span class="token variable">\${tomcat_path}</span>/<span class="token variable">$i</span> temp&quot;</span>
                <span class="token variable">$fullpath</span>/<span class="token variable">$i</span>/bin/startup.sh <span class="token operator">&gt;</span> /dev/null <span class="token operator">&amp;</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${name}</span> Server <span class="token variable">\${i}</span> just start!&quot;</span>
        <span class="token keyword">fi</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[l];function i(o,c){return a(),n("div",null,p)}const v=s(t,[["render",i],["__file","tomcat-startWap-sh.html.vue"]]);export{v as default};
