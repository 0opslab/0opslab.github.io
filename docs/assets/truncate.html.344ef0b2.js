import{_ as n,o as e,c as s,e as a}from"./app.a667bd71.js";const t={},i=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To clear the contents from a file:</span>
<span class="token comment">#\u8981\u6E05\u9664\u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\uFF1A</span>
truncate <span class="token parameter variable">-s</span> <span class="token number">0</span> file.txt

<span class="token comment"># To truncate a file to 100 bytes:</span>
<span class="token comment">#\u8981\u5C06\u6587\u4EF6\u622A\u65AD\u4E3A100\u4E2A\u5B57\u8282\uFF1A</span>
truncate <span class="token parameter variable">-s</span> <span class="token number">100</span> file.txt

<span class="token comment"># To truncate a file to 100 KB:</span>
<span class="token comment">#\u8981\u5C06\u6587\u4EF6\u622A\u65AD\u4E3A100 KB\uFF1A</span>
truncate <span class="token parameter variable">-s</span> 100K file.txt

<span class="token comment"># (M, G, T, P, E, Z, and Y may be used in place of &quot;K&quot; as required.)</span>
<span class="token comment">#\uFF08M\uFF0CG\uFF0CT\uFF0CP\uFF0CE\uFF0CZ\u548CY\u53EF\u6839\u636E\u9700\u8981\u7528\u6765\u4EE3\u66FF\u201CK\u201D\u3002\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function c(r,o){return e(),s("div",null,l)}const m=n(t,[["render",c],["__file","truncate.html.vue"]]);export{m as default};
