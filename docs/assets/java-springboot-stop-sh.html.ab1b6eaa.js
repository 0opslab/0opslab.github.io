import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const p={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5229\u7528bashshell\u505C\u6B62\u7684\u90E8\u7F72springboot\u9879\u76EE</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token assign-left variable">projectDir</span><span class="token operator">=</span><span class="token string">&quot;/home/youguan/ucloud-crm-rpc/&quot;</span>

<span class="token assign-left variable">jarName</span><span class="token operator">=</span><span class="token string">&quot;crm-app-service-impl-1.0.0.jar&quot;</span>

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> $<span class="token punctuation">{</span>jarName<span class="token punctuation">}</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;grep&quot;</span> <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">)</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${count}</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5DF2\u5B58\u5728<span class="token variable">\${count}</span>\u4E2A<span class="token variable">\${jarName}</span>\u7A0B\u5E8F\u5728\u8FD0\u884C&quot;</span>
        <span class="token assign-left variable">jarPid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> x <span class="token operator">|</span><span class="token function">grep</span> $<span class="token punctuation">{</span>jarName<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
        <span class="token builtin class-name">echo</span> <span class="token variable">\${jarPid}</span>
        <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">\${jarPid}</span>
        <span class="token assign-left variable">output</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6B63\u5728\u5173\u95ED<span class="token variable">\${jarName}</span>\u7A0B\u5E8F,\u8FDB\u7A0Bid<span class="token variable">\${jarPid}</span>&quot;</span><span class="token variable">\`</span></span>
        <span class="token builtin class-name">echo</span> <span class="token variable">\${output}</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6CA1\u6709\u5BF9\u5E94\u7684\u7A0B\u5E8F\u5728\u8FD0\u884C&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function o(i,c){return a(),n("div",null,l)}const k=s(p,[["render",o],["__file","java-springboot-stop-sh.html.vue"]]);export{k as default};
