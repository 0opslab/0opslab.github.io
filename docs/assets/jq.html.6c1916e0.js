import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<p>\u53EF\u4EE5\u5BF9json\u6570\u636E\u8FDB\u884C\u5206\u7247\u3001\u8FC7\u6EE4\u3001\u6620\u5C04\u548C\u8F6C\u6362</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Pretty print the json</span>
<span class="token comment">#\u76F8\u5F53\u6253\u5370json</span>
jq <span class="token string">&quot;.&quot;</span> <span class="token operator">&lt;</span> filename.json

<span class="token comment"># Access the value at key &quot;foo&quot;</span>
<span class="token comment">#\u8BBF\u95EE\u952E\u201Cfoo\u201D\u7684\u503C</span>
jq <span class="token string">&#39;.foo&#39;</span>

<span class="token comment"># Access first list item</span>
<span class="token comment">#\u8BBF\u95EE\u7B2C\u4E00\u4E2A\u5217\u8868\u9879</span>
jq <span class="token string">&#39;.[0]&#39;</span>

<span class="token comment"># Slice &amp; Dice</span>
<span class="token comment">#\u5207\u7247\u548C\u9AB0\u5B50</span>
jq <span class="token string">&#39;.[2:4]&#39;</span>
jq <span class="token string">&#39;.[:3]&#39;</span>
jq <span class="token string">&#39;.[-2:]&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function t(o,d){return s(),e("div",null,c)}const m=n(i,[["render",t],["__file","jq.html.vue"]]);export{m as default};
