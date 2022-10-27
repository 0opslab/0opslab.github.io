import{_ as n,o as s,c as a,e as p}from"./app.a667bd71.js";const t={},o=p(`<p>\u6620\u5C04(Mapping)\u76F8\u5F53\u4E8E\u6570\u636E\u8868\u7684\u8868\u7ED3\u6784\u3002ES\u4E2D\u7684\u6620\u5C04\uFF08Mapping\uFF09\u7528\u6765\u5B9A\u4E49\u4E00\u4E2A\u6587\u6863\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u6240\u5305\u542B\u7684\u5B57\u6BB5\u4EE5\u53CA\u5B57\u6BB5\u7684\u7C7B\u578B\u3001\u5206\u8BCD\u5668\u53CA\u5C5E\u6027\u7B49\u7B49\u3002ElasticSearch\u4E2D\u4E0D\u9700\u8981\u4E8B\u5148\u5B9A\u4E49\u6620\u5C04\uFF08Mapping\uFF09\uFF0C\u6587\u6863\u5199\u5165ElasticSearch\u65F6\uFF0C\u4F1A\u6839\u636E\u6587\u6863\u5B57\u6BB5\u81EA\u52A8\u8BC6\u522B\u7C7B\u578B\uFF0C\u8FD9\u79CD\u673A\u5236\u79F0\u4E4B\u4E3A\u52A8\u6001\u6620\u5C04,\u53CD\u4E4B\u5C31\u662F\u9759\u6001\u6620\u5C04\u4E86\u3002\u52A8\u6001\u6620\u5C04\u7684\u81EA\u52A8\u7C7B\u578B\u63A8\u6D4B\u529F\u80FD\u5E76\u4E0D\u662F100%\u6B63\u786E\u7684\uFF0C\u8FD9\u5C31\u9700\u8981\u9759\u6001\u6620\u5C04\u673A\u5236\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u67E5\u770B
GET /book/_mapping
<span class="token comment">//\u8FD4\u56DE</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;book&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B0\u5EFA\u6620\u5C04</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT books
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;it&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;bookId&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;long&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;bookName&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;publishDate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;date&quot;</span><span class="token punctuation">}</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u8FD4\u56DE</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;shards_acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;books&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u53CD\u67E5mapping</span>
GET books/_mapping
<span class="token comment">//\u8FD4\u56DE</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;books&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;mappings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;it&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;bookId&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;bookName&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;publishDate&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;date&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function i(c,l){return s(),a("div",null,e)}const r=n(t,[["render",i],["__file","elasticsearch-mapping.html.vue"]]);export{r as default};
