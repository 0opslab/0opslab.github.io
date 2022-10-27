import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Trash foo and bar</span>
<span class="token comment">#\u5783\u573Efoo\u548C\u9152\u5427</span>
trash foo bar

<span class="token comment"># Trash &quot;foo bar&quot;</span>
<span class="token comment">#\u5783\u573E\u201Cfoo bar\u201D</span>
trash foo<span class="token punctuation">\\</span> bar

<span class="token comment"># List files in trash</span>
<span class="token comment">#\u5217\u51FA\u5783\u573E\u7BB1\u4E2D\u7684\u6587\u4EF6</span>
trash <span class="token parameter variable">-v</span> <span class="token parameter variable">--list</span>

<span class="token comment"># Restore foo from trash</span>
<span class="token comment">#\u4ECE\u5783\u573E\u7BB1\u6062\u590Dfoo</span>
trash <span class="token parameter variable">--restore</span> foo

<span class="token comment"># Empty trash</span>
<span class="token comment">#\u6E05\u7A7A\u5783\u573E\u6876</span>
trash <span class="token parameter variable">--empty</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function r(o,c){return n(),a("div",null,t)}const m=s(i,[["render",r],["__file","trashy.html.vue"]]);export{m as default};
