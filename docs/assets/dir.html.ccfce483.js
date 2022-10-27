import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},p=e(`<h1 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title{}</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment">#!/bin/bash</span>
<span class="token comment">#</span>
<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
 	<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter a directory: &quot;</span> dirName
	<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$dirName</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&#39;quit&#39;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">3</span>
 	<span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$dirName</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">break</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Wrong directory...&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># echo &quot;Correct...&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">fileName</span> <span class="token keyword">in</span> <span class="token variable">$dirName</span>/*<span class="token punctuation">;</span> <span class="token keyword">do</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$fileName</span>&quot;</span> <span class="token operator">=~</span> .*<span class="token punctuation">[</span><span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span>,<span class="token punctuation">}</span>.* <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$fileName</span>&quot;</span>
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>


<span class="token keyword">for</span> <span class="token for-or-select variable">DirName</span> <span class="token keyword">in</span> /tmp/1.dir /tmp/2.dir /tmp/3.dir<span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token function">mkdir</span> <span class="token variable">$DirName</span>
  <span class="token function">chmod</span> <span class="token number">750</span> <span class="token variable">$DirName</span>
<span class="token keyword">done</span>


<span class="token comment">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">DirName</span> <span class="token keyword">in</span> /tmp/1.dir /tmp/2.dir /tmp/3.dir<span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token function">mkdir</span> <span class="token variable">$DirName</span>
  <span class="token function">chmod</span> <span class="token number">750</span> <span class="token variable">$DirName</span>
<span class="token keyword">done</span>


<span class="token assign-left variable">dstDir</span><span class="token operator">=</span>/tmp/dir-<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d-%H%M%S<span class="token variable">)</span></span>

<span class="token function">mkdir</span> <span class="token variable">$dstDir</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token function">touch</span> <span class="token variable">$dstDir</span>/file<span class="token variable">$i</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[p];function l(o,c){return s(),a("div",null,t)}const d=n(i,[["render",l],["__file","dir.html.vue"]]);export{d as default};
