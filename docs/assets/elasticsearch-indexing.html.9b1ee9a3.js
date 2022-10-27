import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},o=e(`<ul><li><p>\u521B\u5EFA\u7D22\u5F15</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT study
<span class="token punctuation">{</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token comment">//\u8FD4\u56DE</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;shards_acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;study&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u67E5\u770B\u7D22\u5F15</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET study/_settings
#\u67E5\u770B\u591A\u4E2A\u7D22\u5F15GET /learn<span class="token punctuation">,</span>study/_settings
<span class="token comment">//\u8FD4\u56DE</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;study&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;settings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;creation_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1565667302748&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;number_of_shards&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;number_of_replicas&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uuid&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Woqg14etSdCohWmDHeHUnA&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;version&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;created&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;6080099&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;provided_name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;study&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5220\u9664\u7D22\u5F15</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>DELETE test
# \u8FD4\u56DE
<span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7D22\u5F15\u7684\u6253\u5F00\u4E0E\u5173\u95ED</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>#\u5173\u95ED\u7D22\u5F15
POST /learn/_close

#\u91CD\u65B0\u6253\u5F00\u7D22\u5F15
POST /learn/_open
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,1),p=[o];function i(l,c){return s(),a("div",null,p)}const r=n(t,[["render",i],["__file","elasticsearch-indexing.html.vue"]]);export{r as default};
