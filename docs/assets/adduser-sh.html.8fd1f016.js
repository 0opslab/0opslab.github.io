import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:linux\u7528\u811A\u672C\u6DFB\u52A0user</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token function">useradd</span> <span class="token variable">$1</span> 
<span class="token builtin class-name">echo</span> <span class="token variable">$1</span> <span class="token operator">|</span> <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> <span class="token variable">$1</span> <span class="token operator">&amp;&gt;</span> /dev/null

<span class="token comment">#</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">uno</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">seq</span> <span class="token number">301</span> <span class="token number">310</span><span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token function">useradd</span> user<span class="token variable">\${uno}</span>
<span class="token keyword">done</span>


<span class="token comment">#</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">id</span> <span class="token variable">$1</span> <span class="token operator">&amp;&gt;</span> /dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">useradd</span> <span class="token variable">$1</span>
<span class="token keyword">fi</span>


<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">501</span><span class="token punctuation">..</span><span class="token number">510</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token function">id</span> tuser<span class="token variable">$i</span> <span class="token operator">&amp;&gt;</span> /dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;tuser<span class="token variable">$i</span> exists.&quot;</span>
    <span class="token keyword">else</span>
        <span class="token function">useradd</span> tuser<span class="token variable">$i</span>
	<span class="token builtin class-name">let</span> count++
    <span class="token keyword">fi</span> 
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Total add <span class="token variable">$count</span> users.&quot;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[i];function c(t,o){return n(),a("div",null,p)}const d=s(l,[["render",c],["__file","adduser-sh.html.vue"]]);export{d as default};
