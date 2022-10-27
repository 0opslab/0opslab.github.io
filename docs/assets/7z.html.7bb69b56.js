import{_ as a,o as s,c as n,e}from"./app.a667bd71.js";const r={},l=e(`<p>7z A file archiver with highest compression ratio</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Args:
a       <span class="token function">add</span>
d       delete
e       extract
l       list
t       <span class="token builtin class-name">test</span>
u       update
x       extract with full paths
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>7z a <span class="token parameter variable">-t7z</span> <span class="token parameter variable">-m0</span><span class="token operator">=</span>lzma <span class="token parameter variable">-mx</span><span class="token operator">=</span><span class="token number">9</span> <span class="token parameter variable">-mfb</span><span class="token operator">=</span><span class="token number">64</span> <span class="token parameter variable">-md</span><span class="token operator">=</span>32m <span class="token parameter variable">-ms</span><span class="token operator">=</span>on archive.7z dir1

<span class="token parameter variable">-t7z</span>        7z archive
<span class="token parameter variable">-m0</span><span class="token operator">=</span>lzma    lzma method
<span class="token parameter variable">-mx</span><span class="token operator">=</span><span class="token number">9</span>       level of compression <span class="token operator">=</span> <span class="token number">9</span> <span class="token punctuation">(</span>ultra<span class="token punctuation">)</span>
<span class="token parameter variable">-mfb</span><span class="token operator">=</span><span class="token number">64</span>     number of fast bytes <span class="token keyword">for</span> lzma <span class="token operator">=</span> <span class="token number">64</span>
<span class="token parameter variable">-md</span><span class="token operator">=</span>32m     dictionary size <span class="token operator">=</span> <span class="token number">32</span> Mb
<span class="token parameter variable">-ms</span><span class="token operator">=</span>on      solid archive <span class="token operator">=</span> on

7z <span class="token builtin class-name">exit</span> codes:
<span class="token number">0</span>       normal <span class="token punctuation">(</span>no errors or warnings<span class="token punctuation">)</span>
<span class="token number">1</span>       warning <span class="token punctuation">(</span>non-fatal errors<span class="token punctuation">)</span>
<span class="token number">2</span>       fatal error
<span class="token number">7</span>       bad cli arguments
<span class="token number">8</span>       not enough memory <span class="token keyword">for</span> operation
<span class="token number">255</span>     process was interrupted

<span class="token comment">#\u538B\u7F29 \u5BC6\u7801\u4E3A111</span>
7z a <span class="token parameter variable">-tzip</span> <span class="token parameter variable">-p111</span> archive.7z txt.txt  
<span class="token comment">#\u89E3\u538B \u5BC6\u7801\u4E3A111</span>
7z x <span class="token parameter variable">-tzip</span> <span class="token parameter variable">-p111</span> archive.7z

<span class="token comment">#\u5047\u8BBE\u4EFB\u52A1\u662F\u6392\u9664\u4EE5 \u201Ct\u201D \u5F00\u5934\u7684\u6240\u6709 .7z \u6587\u4EF6\uFF0C\u5E76\u4E14\u5305\u542B\u4EE5\u5B57\u6BCD \u201Ca\u201D \u5F00\u5934\u7684\u6240\u6709 .7z </span>
<span class="token comment">#\u6587\u4EF6\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u7EC4\u5408 -i \u548C -x \u5F00\u5173\u6765\u5B9E\u73B0</span>
7z a <span class="token string">&#39;-x!t*.7z&#39;</span> <span class="token string">&#39;-i!a*.7z&#39;</span> combination.7z

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[l];function p(t,o){return s(),n("div",null,i)}const d=a(r,[["render",p],["__file","7z.html.vue"]]);export{d as default};
