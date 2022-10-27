import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const t={},p=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Concatenate all pdf files into one:</span>
<span class="token comment">#\uFF03\u5C06\u6240\u6709pdf\u6587\u4EF6\u8FDE\u63A5\u6210\u4E00\u4E2A\uFF1A</span>
pdftk *.pdf <span class="token function">cat</span> output all.pdf

<span class="token comment"># Concatenate specific pdf files into one:</span>
<span class="token comment">#\u5C06\u7279\u5B9A\u7684pdf\u6587\u4EF6\u8FDE\u63A5\u6210\u4E00\u4E2A\uFF1A</span>
pdftk <span class="token number">1</span>.pdf <span class="token number">2</span>.pdf <span class="token number">3</span>.pdf <span class="token function">cat</span> output <span class="token number">123</span>.pdf

<span class="token comment"># Concatenate pages 1 to 5 of first.pdf with page 3 of second.pdf</span>
<span class="token comment">#\uFF03\u5C06first.pdf\u7684\u7B2C1\u9875\u548C\u7B2C5\u9875\u8FDE\u63A5\u5230\u7B2C\u4E8C\u9875.pdf\u7684\u7B2C3\u9875</span>
pdftk <span class="token assign-left variable">A</span><span class="token operator">=</span>fist.pdf <span class="token assign-left variable">B</span><span class="token operator">=</span>second.pdf <span class="token function">cat</span> A1-5 B3 output new.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[p];function i(l,o){return s(),e("div",null,c)}const f=n(t,[["render",i],["__file","pdftk.html.vue"]]);export{f as default};
