import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},o=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
 
<span class="token comment">#\u5BF97\u79CD\u989C\u8272\u7684\u52A0\u4EAE</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">30</span> <span class="token number">37</span><span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span> 
	<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\x1b">\\x1b</span><span class="token entity" title="\\x5b">\\x5b</span>0;<span class="token variable">$i</span>;1m <span class="token variable">$i</span>;1m&quot;</span>
<span class="token keyword">done</span>
 
<span class="token comment">#7\u79CD\u989C\u8272\u4E0E7\u79CD\u80CC\u666F\u7684\u642D\u914D</span>
<span class="token comment">#for j in \`seq 40 47\`;do</span>
<span class="token comment">#	for i in \`seq 30 37\`;do </span>
<span class="token comment">#		echo -e &quot;\\x1b\\x5b0;$i;&quot;$j&quot;m $i;&quot;$j&quot;m&quot;</span>
<span class="token comment">#	done</span>
<span class="token comment">#done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[o];function i(c,p){return n(),a("div",null,l)}const d=s(t,[["render",i],["__file","color.html.vue"]]);export{d as default};
