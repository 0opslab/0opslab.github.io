import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},o=e(`<p>\u672C\u8282\u5E94\u8BE5\u5C5E\u4E8E\u4E0A\u5927\u8282\u7684\u6700\u540E\u4E00\u4E2A\u5C0F\u7ED3\uFF0C\u4F46\u662F\u56E0\u4E3A\u5176\u91CD\u8981\u6027\u56E0\u6B64\u5355\u72EC\u8D77\u4E00\u8282\u3002ES\u63D0\u4F9B\u4E86\u4E00\u79CD\u975E\u5E38\u7075\u6D3B\u53C8\u5BCC\u6709\u8868\u73B0\u529B\u7684\u67E5\u8BE2\u8BED\u8A00\uFF0C\u91C7\u7528JSON\u63A5\u53E3\u7684\u65B9\u5F0F\u5B9E\u73B0\u4E30\u5BCC\u7684\u67E5\u8BE2\uFF0C\u5E76\u4F7F\u4F60\u7684\u67E5\u8BE2\u8BED\u53E5\u66F4\u7075\u6D3B\u3001\u66F4\u7CBE\u786E\u3001\u66F4\u6613\u8BFB\u4E14\u6613\u8C03\u8BD5\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u88AB\u79F0\u4E3AQuery DSL\u8BED\u8A00\u3002\u5176\u67E5\u7528\u5982\u4E0B\u7684\u683C\u5F0F\u5C31\u8FDB\u884C\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u6307\u5B9Afrom\u548Csize\u8FDB\u884C\u5206\u9875\u67E5\u8BE2</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> YOUR_QUERY_HERE
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>match_all \u5373\u65E0\u68C0\u7D22\u6761\u4EF6\u83B7\u53D6\u5168\u90E8\u6570\u636E</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code># \u67E5\u8BE2\u5168\u90E8\u6570\u636E
GET /boss/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>query_string \u67E5\u8BE2 \u53EF\u4EE5\u6267\u884C\u4E00\u4E9B\u590D\u6742\u7684\u67E5\u8BE2</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /boss/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;query_string&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u67E5\u8BE2inter=QHAI_UNHQ_BalanceInfoQuery \u6216\u8005reqinfo.SERIAL_NUMBER = 151\u7684\u8BB0\u5F55</span>
          <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inter:QHAI_UNHQ_BalanceInfoQuery or reqinfo.SERIAL_NUMBER:151&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>match \u666E\u901A\u68C0\u7D22\uFF0C\u5F88\u591A\u6587\u7AE0\u90FD\u8BF4<code>match</code>\u67E5\u8BE2\u4F1A\u5BF9\u67E5\u8BE2\u5185\u5BB9\u8FDB\u884C\u5206\u8BCD\uFF0C\u5176\u5B9E\u5E76\u4E0D\u5B8C\u5168\u6B63\u786E\uFF0C<code>match</code>\u67E5\u8BE2\u4E5F\u8981\u770B\u68C0\u7D22\u7684\u5B57\u6BB5<code>type</code>\u7C7B\u578B\uFF0C\u5982\u679C\u5B57\u6BB5\u7C7B\u578B\u672C\u8EAB\u5C31\u662F\u4E0D\u5206\u8BCD\u7684<code>keyword</code>(<code>not_analyzed</code>)\uFF0C\u90A3<code>match</code>\u5C31\u7B49\u540C\u4E8E<code>term</code>\u67E5\u8BE2\u4E86</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /boss/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u4EEC\u4F1A\u88AB\u5206\u8BCD&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>multi_match\u5BF9\u591A\u4E2A\u5B57\u6BB5\u8FDB\u884C\u68C0\u7D22\uFF0C\u6BD4\u5982\u6211\u60F3\u67E5\u8BE2<code>title</code>\u6216<code>content</code>\u4E2D\u6709<code>\u6211\u4EEC</code>\u5173\u952E\u8BCD\u7684\u6587\u6863</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /boss/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;15110990584&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;reqinfo.SERIAL_NUMBER&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;reqinfo.SERIAL_NUMBER.keyword&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>match_phrase/match_phrase_prefix \u77ED\u67E5\u8BE2 slop\u4E3A\u51E0\u5C31\u662F\u5141\u8BB8\u95F4\u9694\u51E0\u4E2A\u8BCD\uFF0C\u51E0\u4E2A\u8BCD\u4E4B\u95F4\u79BB\u7684\u8D8A\u8FD1\u5206\u6570\u8D8A\u9AD8</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /boss/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;match_phrase_prefix&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;reqinfo.SERIAL_NUMBER&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;query&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;151109905&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;max_expansions&quot;</span> <span class="token operator">:</span> <span class="token number">10</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>term\u67E5\u627E\u88AB\u7528\u4E8E\u7CBE\u786E\u503C \u5339\u914D\uFF0C\u8FD9\u4E9B\u7CBE\u786E\u503C\u53EF\u80FD\u662F\u6570\u5B57\u3001\u65F6\u95F4\u3001\u5E03\u5C14\u6216\u8005\u90A3\u4E9B <code>not_analyzed</code> \u7684\u5B57\u7B26\u4E32\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /boss/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;reqinfo.SERIAL_NUMBER&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;15110990584&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>terms \u67E5\u8BE2\u548C <code>term</code>\u67E5\u8BE2\u4E00\u6837\uFF0C\u4F46\u5B83\u5141\u8BB8\u4F60\u6307\u5B9A\u591A\u503C\u8FDB\u884C\u5339\u914D\u3002\u5982\u679C\u8FD9\u4E2A\u5B57\u6BB5\u5305\u542B\u4E86\u6307\u5B9A\u503C\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\u503C\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6587\u6863\u6EE1\u8DB3\u6761\u4EF6\u3002terms \u67E5\u8BE2\u5BF9\u4E8E\u8F93\u5165\u7684\u6587\u672C\u4E0D\u5206\u6790\u3002\u5B83\u67E5\u8BE2\u90A3\u4E9B\u7CBE\u786E\u5339\u914D\u7684\u503C\uFF08\u5305\u62EC\u5728\u5927\u5C0F\u5199\u3001\u91CD\u97F3\u3001\u7A7A\u683C\u7B49\u65B9\u9762\u7684\u5DEE\u5F02\uFF09</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /boss/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;reqinfo.SERIAL_NUMBER&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;151xxxxxxxx&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;152xxxxxxxx&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>range\u8303\u56F4\u67E5\u627E\uFF0C\u5982\u679C\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u6BD4\u8F83\uFF0C\u90A3\u4E48\u662F\u6570\u5B57&lt;\u5927\u5199\u5B57\u6BCD&lt;\u5C0F\u5199\u5B57\u6BCD\uFF0C\u5B57\u7B26\u4ECE\u5934\u5F00\u59CB\u6BD4\u8F83\uFF0C\u548Cjs\u4E00\u6837range\u7684\u4E3B\u8981\u53C2\u6570\u4E3A\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>\`gt\`<span class="token operator">:</span> \`&gt;\` \u5927\u4E8E\uFF08greater than\uFF09
\`lt\`<span class="token operator">:</span> \`&lt;\` \u5C0F\u4E8E\uFF08less than\uFF09
\`gte\`<span class="token operator">:</span> \`&gt;=\` \u5927\u4E8E\u6216\u7B49\u4E8E\uFF08greater than or equal to\uFF09
\`lte\`<span class="token operator">:</span> \`&lt;=\` \u5C0F\u4E8E\u6216\u7B49\u4E8E\uFF08less than or equal to\uFF09
GET /boss/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;requesttime&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;gt&quot;</span><span class="token operator">:</span><span class="token string">&quot;20190103101058526&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;lt&quot;</span><span class="token operator">:</span><span class="token string">&quot;20190103101158526&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>wildcard <code>shell</code>\u901A\u914D\u7B26\u67E5\u8BE2: <code>?</code> \u4E00\u4E2A\u5B57\u7B26 <code>*</code> \u591A\u4E2A\u5B57\u7B26\uFF0C\u67E5\u8BE2<code>\u5012\u6392\u7D22\u5F15</code>\u4E2D\u7B26\u5408<code>pattern</code>\u7684\u5173\u952E\u8BCD</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /my_index/address/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;wildcard&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;postcode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;W?F*HW&quot;</span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>prefix \u524D\u7F00\u67E5\u8BE2</p></li><li><p>regexp \u6B63\u5219\u67E5\u8BE2</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /my_index/address/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;regexp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;postcode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;W[0-9].+&quot;</span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>bool \u5E03\u5C14\u8FDE\u63A5\u67E5\u8BE2must\u5FC5\u987B\u5168\u90E8\u6EE1\u8DB3\u3001must_not \u5FC5\u987B\u5168\u90E8\u4E0D\u6EE1\u8DB3\u3001should\u6EE1\u8DB3\u4E00\u4E2A\u5373\u53EF</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /boss/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;reqinfo.SERIAL_NUMBER&quot;</span><span class="token operator">:</span> <span class="token string">&quot;15110990584&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
              <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;reqinfo.ACCT_TYPE_CODE&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;response.respCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>filter\u67E5\u8BE2 \u901A\u5E38\u60C5\u51B5\u4E0B\u4F1A\u914D\u5408<code>match</code>\u4E4B\u7C7B\u7684\u4F7F\u7528\uFF0C\u5BF9\u7B26\u5408\u67E5\u8BE2\u6761\u4EF6\u7684\u6570\u636E\u8FDB\u884C\u8FC7\u6EE4\u3002</p></li><li><p>exists\u548Cmissing\u67E5\u8BE2\uFF0C\u5206\u522B\u7528\u6765\u5224\u65AD\u662F\u5426\u5B58\u5728\u6216\u8005\u7F3A\u5931</p></li><li><p>constant_score\u67E5\u8BE2\uFF1A\u5B83\u88AB\u7ECF\u5E38\u7528\u4E8E\u4F60\u53EA\u9700\u8981\u6267\u884C\u4E00\u4E2A filter \u800C\u6CA1\u6709\u5176\u5B83\u67E5\u8BE2\uFF08\u4F8B\u5982\uFF0C\u8BC4\u5206\u67E5\u8BE2\uFF09\u7684\u60C5\u51B5\u4E0B\u3002\u53EF\u4EE5\u4F7F\u7528\u5B83\u6765\u53D6\u4EE3\u53EA\u6709 filter \u8BED\u53E5\u7684 <code>bool</code> \u67E5\u8BE2\u3002\u5728\u6027\u80FD\u4E0A\u662F\u5B8C\u5168\u76F8\u540C\u7684\uFF0C\u4F46\u5BF9\u4E8E\u63D0\u9AD8\u67E5\u8BE2\u7B80\u6D01\u6027\u548C\u6E05\u6670\u5EA6\u6709\u5F88\u5927\u5E2E\u52A9\u3002</p></li><li><p>\u8BBE\u7F6E\u6700\u5C0F\u5339\u914D\u5EA6\u3000\u3000\u540E\u9762\u53EF\u4EE5\u662F\u6570\u5B57\u4E5F\u53EF\u4EE5\u662F\u767E\u5206\u6BD4</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /my_index/my_type/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span>                <span class="token string">&quot;quick brown dog&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;minimum_should_match&quot;</span><span class="token operator">:</span> <span class="token string">&quot;75%&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528\u4E34\u8FD1\u5EA6\u63D0\u9AD8\u76F8\u5173\u5EA6</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /my_index/my_type/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;query&quot;</span><span class="token operator">:</span>                <span class="token string">&quot;quick brown fox&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minimum_should_match&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30%&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;quick brown fox&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slop&quot;</span><span class="token operator">:</span>  <span class="token number">50</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="sql\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#sql\u67E5\u8BE2" aria-hidden="true">#</a> SQL\u67E5\u8BE2</h3><p>ES6.x\u4E2D\u5F00\u59CB\u901A\u8FC7xpack\u7684\u65B9\u5F0F\u63D0\u4F9B\u4E86SQL\u68C0\u7D22\u65B9\u5F0F\uFF0C\u907F\u514DDSL\u8BED\u8A00\u7684\u5B66\u4E60\u6210\u672C\u3002\u5F53\u7136\u5982\u679C\u8981\u5728\u5728\u7A0B\u5E8F\u4E2D\u4EE5JDBC\u7684\u65B9\u5F0F\u8FDE\u63A5\u7684\u9700\u8981\u767D\u91D1\u4F1A\u5458\u7684key\u624D\u884C\u3002\u5F53\u5BF9\u4E8E\u4EA4\u4E92\u5F0F\u6216\u8005SQL\u8F6CDSL\u7684\u65B9\u5F0F\u53EF\u4EE5\u514D\u8D39\u7684\u4F7F\u7528\u3002</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>### \u76F4\u63A5\u4F7F\u7528SQL\u7684\u65B9\u5F0F\u8FDB\u884C\u68C0\u7D22
POST /_xpack/sql?format=txt
{
    &quot;query&quot;: &quot;select inter,(responsetime -requesttime ) request_time  from boss order by request_time desc&quot;
}

### \u5C06SQL\u8F6C\u6362\u6210DSL\u8FDB\u884C\u67E5\u8BE2
POST /_xpack/sql/translate
{
    &quot;query&quot;: &quot;select inter,(responsetime -requesttime ) request_time  from boss order by request_time desc&quot;
}
//\u8FD4\u56DE
{
  &quot;size&quot; : 1000,
  &quot;_source&quot; : {
    &quot;includes&quot; : [
      &quot;inter&quot;
    ],
    &quot;excludes&quot; : [ ]
  },
  &quot;docvalue_fields&quot; : [
    {
      &quot;field&quot; : &quot;responsetime&quot;,
      &quot;format&quot; : &quot;use_field_mapping&quot;
    },
    {
      &quot;field&quot; : &quot;requesttime&quot;,
      &quot;format&quot; : &quot;use_field_mapping&quot;
    }
  ],
  &quot;sort&quot; : [
    {
      &quot;_script&quot; : {
        &quot;script&quot; : {
          &quot;source&quot; : &quot;InternalSqlScriptUtils.nullSafeSortNumeric(InternalSqlScriptUtils.sub(InternalSqlScriptUtils.docValue(doc,params.v0),InternalSqlScriptUtils.docValue(doc,params.v1)))&quot;,
          &quot;lang&quot; : &quot;painless&quot;,
          &quot;params&quot; : {
            &quot;v0&quot; : &quot;responsetime&quot;,
            &quot;v1&quot; : &quot;requesttime&quot;
          }
        },
        &quot;type&quot; : &quot;number&quot;,
        &quot;order&quot; : &quot;desc&quot;
      }
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a> \u6392\u5E8F</h3><p>\u5728 Elasticsearch \u4E2D\uFF0C \u76F8\u5173\u6027\u5F97\u5206 \u7531\u4E00\u4E2A\u6D6E\u70B9\u6570\u8FDB\u884C\u8868\u793A\uFF0C\u5E76\u5728\u641C\u7D22\u7ED3\u679C\u4E2D\u901A\u8FC7 _score \u53C2\u6570\u8FD4\u56DE\uFF0C<strong>\u9ED8\u8BA4\u6392\u5E8F\u662F _score \u964D\u5E8F</strong>\u3002\u6709\u65F6\uFF0C\u76F8\u5173\u6027\u8BC4\u5206\u5BF9\u4F60\u6765\u8BF4\u5E76\u6CA1\u6709\u610F\u4E49\uFF0C\u800C\u662F\u9700\u8981\u81EA\u5B9A\u4E49\u6392\u5E8F\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528sort\u8FDB\u884C\u4E4B\u81EA\u5B9A\u4E49\u6392\u5E8F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;bool&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;filter&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;term&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;user_id&quot;</span> <span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//\u6309\u7167\u65F6\u95F4\u6392\u5E8F</span>
    <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# \u591A\u5B57\u6BB5\u6392\u5E8F
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;bool&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;must&quot;</span><span class="token operator">:</span>   <span class="token punctuation">{</span> <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;tweet&quot;</span><span class="token operator">:</span> <span class="token string">&quot;manage text search&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;filter&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;term&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;user_id&quot;</span> <span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;date&quot;</span><span class="token operator">:</span>   <span class="token punctuation">{</span> <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[o];function i(l,u){return s(),a("div",null,p)}const r=n(t,[["render",i],["__file","elasticsearch-query.html.vue"]]);export{r as default};
