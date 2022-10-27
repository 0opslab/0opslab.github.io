import{_ as a,o as s,c as n,e}from"./app.a667bd71.js";const p={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u67D0springboot\u5E94\u7528\u7EBF\u4E0A\u90E8\u7F72\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token builtin class-name">cd</span> /data/workspace
svn update

<span class="token builtin class-name">cd</span> /data/workspace/opslabJava/opslabJutil
mvn clean package <span class="token function">install</span>

<span class="token builtin class-name">cd</span> /data/workspace/tianshu/tianshu
mvn clean package

<span class="token builtin class-name">cd</span> /data/workspace/tianshu/tianshu-admin
mvn clean package <span class="token parameter variable">-Dmaven.test.skip</span><span class="token operator">=</span>true


<span class="token assign-left variable">jarPid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> x <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;tianshu-app&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${jarPid}</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">\${jarPid}</span>
<span class="token assign-left variable">output</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6B63\u5728\u5173\u95EDtianshu-app\u7A0B\u5E8F,\u8FDB\u7A0Bid<span class="token variable">\${jarPid}</span>&quot;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${output}</span>

<span class="token assign-left variable">jarPid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> x <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;tianshu-data&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${jarPid}</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">\${jarPid}</span>
<span class="token assign-left variable">output</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6B63\u5728\u5173\u95EDtianshu-data\u7A0B\u5E8F,\u8FDB\u7A0Bid<span class="token variable">\${jarPid}</span>&quot;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${output}</span>

<span class="token assign-left variable">jarPid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> x <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;tianshu-admin&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${jarPid}</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">\${jarPid}</span>
<span class="token assign-left variable">output</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6B63\u5728\u5173\u95EDtianshu-admin\u7A0B\u5E8F,\u8FDB\u7A0Bid<span class="token variable">\${jarPid}</span>&quot;</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${output}</span>


<span class="token builtin class-name">cd</span> /data/springboot/
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-maxdepth</span> <span class="token number">1</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.jar&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d_%H%M%S<span class="token variable">)</span></span>.bak <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token function">mv</span> *.bak backup/

<span class="token function">mv</span> /data/workspace/tianshu/tianshu/tianshu-app/target/tianshu-app-1.0.0.jar /data/springboot/
<span class="token function">mv</span> /data/workspace/tianshu/tianshu/tianshu-data/target/tianshu-data-1.0.0.jar /data/springboot/
<span class="token function">mv</span> /data/workspace/tianshu/tianshu-admin/target/tianshu-admin.jar /data/springboot/

<span class="token builtin class-name">cd</span> /data/springboot/
<span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> tianshu-app-1.0.0.jar <span class="token parameter variable">--spring.profiles.active</span><span class="token operator">=</span>pro   <span class="token operator">&gt;</span> ./tianshu-app.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
<span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> tianshu-data-1.0.0.jar <span class="token parameter variable">--spring.profiles.active</span><span class="token operator">=</span>pro  <span class="token operator">&gt;</span> ./tianshu-data.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
<span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> tianshu-admin.jar <span class="token parameter variable">--spring.profiles.active</span><span class="token operator">=</span>pro  <span class="token operator">&gt;</span> ./tianshu-admin.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[t];function l(o,c){return s(),n("div",null,i)}const k=a(p,[["render",l],["__file","tianshu-sh.html.vue"]]);export{k as default};
