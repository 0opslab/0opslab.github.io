import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const p={},e=t(`<h4 id="\u65B0\u589E\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u6587\u6863" aria-hidden="true">#</a> \u65B0\u589E\u6587\u6863</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT study/blog/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;Elasticsearch\u7B80\u4ECB&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span><span class="token string">&quot;kyle&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span><span class="token string">&quot;Elasticsearch\u662F\u4E00\u4E2A\u57FA\u4E8ELucene\u7684\u641C\u7D22\u5F15\u64CE&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u8FD4\u56DE</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;study&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

## \u672A\u6307\u5B9A\u6587\u6863ID
POST study/blog
<span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;Elasticsearch\u7B80\u4ECB1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span><span class="token string">&quot;kyle1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span><span class="token string">&quot;Elasticsearch\u662F\u4E00\u4E2A\u57FA\u4E8ELucene\u7684\u641C\u7D22\u5F15\u64CE&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u8FD4\u56DE</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;study&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;vZoiiWwBWQWPkkfk1k9n&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u66F4\u65B0\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6587\u6863" aria-hidden="true">#</a> \u66F4\u65B0\u6587\u6863</h4><p>\u6587\u6863\u5728Elasticsearch\u4E2D\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u4E0D\u80FD\u4FEE\u6539\u3002\u5982\u679C\u6211\u4EEC\u9700\u8981\u4FEE\u6539\u6587\u6863\uFF0CElasticsearch\u5B9E\u9645\u4E0A\u91CD\u5EFA\u65B0\u6587\u6863\u66FF\u6362\u6389\u65E7\u6587\u6863</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u66F4\u65B0\u6587\u6863id\u4E3A<span class="token number">2</span>\u7684\u6587\u6863
POST /blog/segmentfault/<span class="token number">2</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;Git\u7B80\u4ECB&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span><span class="token string">&quot;hahaha&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span><span class="token string">&quot;Git\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u7248\u672C\u63A7\u5236\u8F6F\u4EF6&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u8FD4\u56DE</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;segmentfault&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;updated&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

## \u5B57\u6BB5\u66F4\u65B0
POST /blog/segmentfault/<span class="token number">2</span>/_update
<span class="token punctuation">{</span>
  <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctx._source.content=\\&quot;GIT\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5206\u5E03\u5F0F\u7248\u672C\u63A7\u5236\u8F6F\u4EF6\\&quot;&quot;</span>  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;segmentfault&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;updated&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
## \u67E5\u8BE2\u66F4\u65B0
POST blog/_update_by_query
<span class="token punctuation">{</span>
  <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctx._source.category=params.category&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span><span class="token string">&quot;painless&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;params&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;category&quot;</span><span class="token operator">:</span><span class="token string">&quot;git&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;git&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5220\u9664\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6587\u6863" aria-hidden="true">#</a> \u5220\u9664\u6587\u6863</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>DELETE /blog/segmentfault/<span class="token number">2</span>
<span class="token comment">//\u8FD4\u56DE</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;segmentfault&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deleted&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6587\u6863\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u641C\u7D22" aria-hidden="true">#</a> \u6587\u6863\u641C\u7D22</h4><ul><li><p>\u6700\u7B80\u5355\u7684\u7A7A\u67E5\u8BE2</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET boss/_search
<span class="token comment">//\u8FD4\u56DE</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span><span class="token comment">//\u544A\u8BC9\u6211\u4EEC\u6267\u884C\u6574\u4E2A\u641C\u7D22\u8BF7\u6C42\u8017\u8D39\u4E86\u591A\u5C11\u6BEB\u79D2</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//\u662F\u5426\u8D85\u65F6</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//\u67E5\u8BE2\u4E2D\u53C2\u4E0E\u5206\u7247\u7684\u603B\u6570\uFF0C\u4EE5\u53CA\u8FD9\u4E9B\u5206\u7247\u6210\u529F\u4E86\u591A\u5C11\u4E2A\u5931\u8D25\u4E86\u591A\u5C11\u4E2A</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
   
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//\u67E5\u8BE2\u7ED3\u679C\u4E2D\u6700\u91CD\u8981\u7684\u90E8\u5206</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">240090</span><span class="token punctuation">,</span><span class="token comment">//\u67E5\u8BE2\u603B\u5171\u5339\u914D\u5230\u8BB0\u5F55\u6570</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">//\u4E00\u822C\u4F1A\u8FD4\u56DE\u5339\u914D\u7684\u524D\u5341\u6761\u8BB0\u5F55</span>
      <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5206\u9875\u67E5\u8BE2</p><p>Elasticsearch \u63A5\u53D7 from \u548C size \u53C2\u6570\u3002\u663E\u793A\u5E94\u8BE5\u8DF3\u8FC7\u7684\u521D\u59CB\u7ED3\u679C\u6570\u91CF\uFF0C\u9ED8\u8BA4\u662F 0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /_search?size=5&amp;from=5
\u6216\u8005\u5728\u67E5\u8BE2\u8BED\u53E5\u4E2D\u8BBE\u7F6E
GET /_search
{
 &quot;from&quot;:0,
 &quot;size&quot;:2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,9),o=[e];function l(c,u){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","elasticsearch-documents.html.vue"]]);export{r as default};
