import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},p=e(`<p>ES\u7684\u9AD8\u7EA7\u529F\u80FD\u805A\u5408Aggregations\u529F\u80FD\u4E3AES\u6CE8\u5165\u4E86\u7EDF\u8BA1\u5206\u6790\u7684\u8840\u7EDF\uFF0C\u4F7F\u5728\u9762\u5BF9\u5927\u6570\u636E\u63D0\u53D6\u7EDF\u8BA1\u6307\u6807\u65F6\u53D8\u7684\u6E38\u5203\u6709\u4F59\u3002aggregation\u7684\u90E8\u5206\u7279\u6027\u7C7B\u4F3C\u4E8ESQL\u8BED\u8A00\u4E2D\u7684group by,avg,sum\u7B49\u51FD\u6570\u3002\u4F46\u540C\u65F6\u8FD8\u63D0\u4F9B\u4E86\u66F4\u590D\u6742\u7684\u7EDF\u8BA1\u5206\u6790\u63A5\u53E3\u3002agg\u4E2D\u6709\u4FE9\u4E2A\u4E3B\u8981\u7684\u6982\u5FF5.</p><ul><li>\u6876(Buckets)\uFF1A\u7B26\u5408\u6761\u4EF6\u7684\u6587\u6863\u7684\u96C6\u5408\uFF0C\u76F8\u5F53\u4E8ESQL\u4E2D\u7684group by\u3002\u6BD4\u5982\uFF0C\u5728users\u8868\u4E2D\uFF0C\u6309\u201C\u5730\u533A\u201D\u805A\u5408\uFF0C\u4E00\u4E2A\u4EBA\u5C06\u88AB\u5206\u5230\u5317\u4EAC\u6876\u6216\u4E0A\u6D77\u6876\u6216\u5176\u4ED6\u6876\u91CC\uFF1B\u6309\u201C\u6027\u522B\u201D\u805A\u5408\uFF0C\u4E00\u4E2A\u4EBA\u5C06\u88AB\u5206\u5230\u7537\u6876\u6216\u5973\u6876</li><li>\u6307\u6807(Metrics)\uFF1A\u57FA\u4E8EBuckets\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u7EDF\u8BA1\u5206\u6790\uFF0C\u76F8\u5F53\u4E8ESQL\u4E2D\u7684count,avg,sum\u7B49\u3002\u6BD4\u5982\uFF0C\u6309\u201C\u5730\u533A\u201D\u805A\u5408\uFF0C\u8BA1\u7B97\u6BCF\u4E2A\u5730\u533A\u7684\u4EBA\u6570\uFF0C\u5E73\u5747\u5E74\u9F84\u7B49</li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u805A\u5408\u67E5\u8BE2\u662F\u5728aggs\u5B57\u6BB5\u4E2D\u8FDB\u884C\u8BBE\u7F6E\u3002</p><h4 id="max-min-avg-sum-stats-\u5305\u62EC\u524D\u9762\u51E0\u9879" tabindex="-1"><a class="header-anchor" href="#max-min-avg-sum-stats-\u5305\u62EC\u524D\u9762\u51E0\u9879" aria-hidden="true">#</a> max/min/avg/sum/stats(\u5305\u62EC\u524D\u9762\u51E0\u9879)</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>## \u67E5\u8BE2price\u5B57\u6BB5\u4E4B\u548C
GET /books/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token comment">//size=0 \u8868\u793A\u4E0D\u9700\u8981\u8FD4\u56DE\u53C2\u4E0E\u67E5\u8BE2\u7684\u6587\u6863\u3002</span>
    <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;price_count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// price_count\u4E3A\u8FD4\u56DE\u5B57\u6BB5\u7684\u540D\u79F0\u8BBE\u7F6E</span>
        <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# \u67E5\u8BE2price\u5B57\u6BB5\u7684\u7EDF\u8BA1\u60C5\u51B5 \u6700\u5927\u503C\u6700\u5C0F\u503C\u5E73\u5747\u548C
GET /books/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;price_stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u8FD4\u56DE</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;price_stats&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;count&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;min&quot;</span> <span class="token operator">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;max&quot;</span> <span class="token operator">:</span> <span class="token number">139.0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;avg&quot;</span> <span class="token operator">:</span> <span class="token number">119.5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum&quot;</span> <span class="token operator">:</span> <span class="token number">239.0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="percentiles-\u6C42\u767E\u5206\u6BD4" tabindex="-1"><a class="header-anchor" href="#percentiles-\u6C42\u767E\u5206\u6BD4" aria-hidden="true">#</a> <strong>percentiles \u6C42\u767E\u5206\u6BD4</strong></h4><p>percentiles\u5BF9\u6307\u5B9A\u5B57\u6BB5\uFF08\u811A\u672C\uFF09\u7684\u503C\u6309\u4ECE\u5C0F\u5230\u5927\u7D2F\u8BA1\u6BCF\u4E2A\u503C\u5BF9\u5E94\u7684\u6587\u6863\u6570\u7684\u5360\u6BD4\uFF08\u5360\u6240\u6709\u547D\u4E2D\u6587\u6863\u6570\u7684\u767E\u5206\u6BD4\uFF09\uFF0C\u8FD4\u56DE\u6307\u5B9A\u5360\u6BD4\u6BD4\u4F8B\u5BF9\u5E94\u7684\u503C\u3002\u9ED8\u8BA4\u8FD4\u56DE[ 1, 5, 25, 50, 75, 95, 99 ]\u5206\u4F4D\u4E0A\u7684\u503C</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /books/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;percenlis_stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;percentiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6587\u6863\u6570\u91CF\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u6570\u91CF\u7EDF\u8BA1" aria-hidden="true">#</a> \u6587\u6863\u6570\u91CF\u7EDF\u8BA1</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token constant">GET</span> <span class="token operator">/</span>books<span class="token operator">/</span>_search
<span class="token punctuation">{</span>
    <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;value_count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="terms\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#terms\u805A\u5408" aria-hidden="true">#</a> Terms\u805A\u5408</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u6839\u636E\u4EF7\u683C\u7EDF\u8BA1\u5404\u4E2A\u4EF7\u683C\u7684\u4E66\u7C4D\u6709\u51E0\u6761\u8BB0\u5F55 \u6CE8\u610F\u8FD9\u79CD\u65B9\u5F0F\u53EA\u80FD\u7EDF\u8BA1\u5927\u6982\uFF0C\u5E76\u4E0D\u80FD\u51C6\u786E\u7684\u7EDF\u8BA1
GET /books/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;genders&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","elasticsearch-aggregations.html.vue"]]);export{r as default};
