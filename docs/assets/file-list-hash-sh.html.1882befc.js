import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5229\u7528bash\u83B7\u53D6\u6587\u4EF6md5hash\u503C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token keyword">function</span> <span class="token function-name function">hash_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token assign-left variable">log</span><span class="token operator">=</span><span class="token string">&quot;hash_&quot;</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d%H<span class="token variable">\`</span></span><span class="token string">&quot;.log&quot;</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> $1<span class="token variable">\`</span></span>
    <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$1</span><span class="token string">&quot;/&quot;</span><span class="token variable">$file</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            hash_dir <span class="token variable">$1</span><span class="token string">&quot;/&quot;</span><span class="token variable">$file</span>
        <span class="token keyword">else</span>
           <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span>md5 $1<span class="token string">&quot;/&quot;</span>$file<span class="token variable">\`</span></span><span class="token operator">&gt;&gt;</span><span class="token variable">$log</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token comment"># test</span>
hash_dir ~/workspace

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[i];function o(p,c){return n(),a("div",null,t)}const d=s(l,[["render",o],["__file","file-list-hash-sh.html.vue"]]);export{d as default};
