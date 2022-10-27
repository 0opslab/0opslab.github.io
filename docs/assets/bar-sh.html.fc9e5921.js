import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:shell\u73AF\u5883\u4E0B\u7684\u8FDB\u5EA6\u6761</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token keyword">function</span> <span class="token function-name function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span>
    <span class="token assign-left variable">idx</span><span class="token operator">=</span><span class="token number">0</span>
    <span class="token assign-left variable">str</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span>
    <span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;|&#39;</span> <span class="token string">&#39;/&#39;</span> <span class="token string">&#39;-&#39;</span> <span class="token string">&#39;\\\\&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> <span class="token parameter variable">-le</span> <span class="token number">100</span> <span class="token punctuation">]</span>
    <span class="token keyword">do</span>
        <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[1;46;31m[%-100s]<span class="token entity" title="\\e">\\e</span>[42;30m[%d%%]<span class="token entity" title="\\e">\\e</span>[40;41;43;30m%c<span class="token entity" title="\\e">\\e</span>[0m<span class="token entity" title="\\\\">\\\\</span>r&quot;</span> <span class="token string">&quot;<span class="token variable">$str</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$i</span>&quot;</span> <span class="token string">&quot;<span class="token variable">\${arr<span class="token punctuation">[</span>$idx<span class="token punctuation">]</span>}</span>&quot;</span>
        <span class="token builtin class-name">let</span> i++
        <span class="token assign-left variable">str</span><span class="token operator">+=</span><span class="token string">&#39;#&#39;</span>
        <span class="token builtin class-name">let</span> idx++
        <span class="token builtin class-name">let</span> <span class="token assign-left variable">idx</span><span class="token operator">=</span>idx%4
        usleep <span class="token number">100000</span>
    <span class="token keyword">done</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&#39;\\n&#39;</span>
<span class="token punctuation">}</span>
bar

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function p(c,o){return n(),a("div",null,i)}const d=s(t,[["render",p],["__file","bar-sh.html.vue"]]);export{d as default};
