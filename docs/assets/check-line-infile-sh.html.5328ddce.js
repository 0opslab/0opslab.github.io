import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},c=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u68C0\u67E5\u67D0\u6587\u4EF6\u4E2D\u6BCF\u884C\u5B57\u7B26\u4E32\u5728\u53E6\u4E00\u4E2A\u6587\u4EF6\u4E2D\u662F\u5426\u5B58\u5728</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>


<span class="token keyword">for</span> <span class="token for-or-select variable">line</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> <span class="token number">2</span>.log<span class="token variable">)</span></span>
<span class="token keyword">do</span>
<span class="token comment">##    echo &quot;111:\${line}&quot;</span>
<span class="token comment">##cat hosts.cfg|grep alias |grep \${line}</span>
<span class="token comment">##    echo &quot;222&quot;</span>
<span class="token assign-left variable">check</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> hosts.cfg<span class="token operator">|</span><span class="token function">grep</span> <span class="token builtin class-name">alias</span> <span class="token operator">|</span><span class="token function">grep</span> $<span class="token punctuation">{</span>line<span class="token punctuation">}</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$check</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">\${line}</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token number">111</span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[c];function o(t,p){return n(),a("div",null,i)}const d=s(l,[["render",o],["__file","check-line-infile-sh.html.vue"]]);export{d as default};
