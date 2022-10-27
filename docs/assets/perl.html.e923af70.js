import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const t={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To view the perl version:</span>
<span class="token comment">#\u8981\u67E5\u770Bperl\u7248\u672C\uFF1A</span>
perl <span class="token parameter variable">-v</span>

<span class="token comment"># Replace string &quot;\\n&quot; to newline</span>
<span class="token comment">#\u5C06\u5B57\u7B26\u4E32\u201C\\ n\u201D\u66FF\u6362\u4E3A\u6362\u884C\u7B26</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;foo<span class="token entity" title="\\n">\\n</span>bar<span class="token entity" title="\\n">\\n</span>baz&quot;</span> <span class="token operator">|</span> perl <span class="token parameter variable">-pe</span> <span class="token string">&#39;s/\\n/\\\\n/g;&#39;</span>

<span class="token comment"># Replace newline with multiple line to space</span>
<span class="token comment">#\u7528\u591A\u884C\u5230\u7A7A\u683C\u66FF\u6362\u6362\u884C\u7B26</span>
<span class="token function">cat</span> test.txt <span class="token operator">|</span> perl <span class="token parameter variable">-0pe</span> <span class="token string">&quot;s/test1<span class="token entity" title="\\n">\\n</span>test2/test1 test2/m&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function c(p,o){return s(),e("div",null,i)}const m=n(t,[["render",c],["__file","perl.html.vue"]]);export{m as default};
