import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:git\u81EA\u52A8pull\u5E76\u63D0\u4EA4</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u521D\u59CB\u5316\u4E2D.....&quot;</span>
<span class="token function">git</span> pull origin master<span class="token punctuation">;</span>
<span class="token function">git</span> <span class="token function">add</span> -A<span class="token punctuation">;</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;\u8F93\u5165\u65E5\u5FD7,\u6309Enter\u952E\u8DF3\u8FC7 :&quot;</span> log
<span class="token keyword">if</span>  <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$log</span>&quot;</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">git</span> ci <span class="token parameter variable">-m</span> <span class="token string">&quot;\u81EA\u52A8\u751F\u6210&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token function">git</span> ci <span class="token parameter variable">-m</span> <span class="token string">&quot;<span class="token variable">\${log}</span>&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span><span class="token punctuation">;</span>
<span class="token function">git</span> push origin master<span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u8FDC\u7A0B\u63A8\u9001\u5B8C\u6210&quot;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function o(p,c){return s(),a("div",null,l)}const r=n(t,[["render",o],["__file","github-auto-pull-sh.html.vue"]]);export{r as default};
