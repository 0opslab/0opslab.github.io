import{_ as e,o as n,c as a,e as i}from"./app.a667bd71.js";const s={},l=i(`<p>HBase\u662F\u4E00\u4E2A\u9762\u5411\u5217\u7684\u6570\u636E\u5E93\uFF0C\u5728\u8868\u4E2D\u5B83\u7531\u884C\u6392\u5E8F\u3002\u8868\u6A21\u5F0F\u5B9A\u4E49\u53EA\u80FD\u5217\u65CF\uFF0C\u4E5F\u5C31\u662F\u952E\u503C\u5BF9\u3002\u4E00\u4E2A\u8868\u6709\u591A\u4E2A\u5217\u65CF\u4EE5\u53CA<strong>\u6BCF\u4E00\u4E2A\u5217\u65CF\u53EF\u4EE5\u6709\u4EFB \u610F\u6570\u91CF\u7684\u5217</strong>\u3002\u540E\u7EED\u5217\u7684\u503C\u8FDE\u7EED\u5B58\u50A8\u5728\u78C1\u76D8\u4E0A\u3002\u8868\u4E2D\u7684\u6BCF\u4E2A\u5355\u5143\u683C\u503C\u90FD\u5177\u6709\u65F6\u95F4\u6233\u3002\u603B\u4E4B\uFF0C\u5728\u4E00\u4E2AHBase\uFF1A</p><ul><li>\u8868\u662F\u884C\u7684\u96C6\u5408\u3002</li><li>\u884C\u662F\u5217\u65CF\u7684\u96C6\u5408\u3002</li><li>\u5217\u65CF\u662F\u5217\u7684\u96C6\u5408\u3002</li><li>\u5217\u662F\u952E\u503C\u5BF9\u7684\u96C6\u5408\u3002</li></ul><h4 id="row-key-\u884C\u5EFA" tabindex="-1"><a class="header-anchor" href="#row-key-\u884C\u5EFA" aria-hidden="true">#</a> row key \u884C\u5EFA</h4><p>\u4E0Enosql\u6570\u636E\u5E93\u4E00\u6837\uFF0Crow key\u662F\u7528\u6765\u8868\u793A\u552F\u4E00\u4E00\u884C\u8BB0\u5F55\u7684<strong>\u4E3B\u952E</strong>\uFF0CHBase\u7684\u6570\u636E\u65F6\u6309\u7167RowKey\u7684<strong>\u5B57\u5178\u987A\u5E8F</strong>\u8FDB\u884C\u5168\u5C40\u6392\u5E8F\u7684\uFF0C \u6240\u6709\u7684\u67E5\u8BE2\u90FD\u53EA\u80FD\u4F9D\u8D56\u4E8E\u8FD9\u4E00\u4E2A\u6392\u5E8F\u7EF4\u5EA6\u3002\u8BBF\u95EEHBASE table\u4E2D\u7684\u884C\uFF0C\u53EA\u6709\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><ul><li><p>\u901A\u8FC7\u5355\u4E2Arow key\u8BBF\u95EE\uFF1B</p></li><li><p>\u901A\u8FC7row key\u7684range\uFF08\u6B63\u5219\uFF09</p></li><li><p>\u5168\u8868\u626B\u63CF</p></li></ul><p>Row key \u884C\u952E\u53EF\u4EE5\u662F\u4EFB\u610F\u5B57\u7B26\u4E32(\u6700\u5927\u957F\u5EA6\u662F64KB\uFF0C\u5B9E\u9645\u5E94\u7528\u4E2D\u957F\u5EA6\u4E00\u822C\u4E3A10-1000bytes)\uFF0C\u5728HBASE\u5185\u90E8\uFF0Crow key\u4FDD\u5B58\u4E3A\u5B57\u8282 \u6570\u7EC4\u3002\u5B58\u50A8\u65F6\uFF0C\u6570\u636E\u6309\u7167Row key\u7684\u5B57\u5178\u5E8F(byte order)\u6392\u5E8F\u5B58\u50A8\u3002\u8BBE\u8BA1key\u65F6\uFF0C\u8981\u5145\u5206\u6392\u5E8F\u5B58\u50A8\u8FD9\u4E2A\u7279\u6027\uFF0C\u5C06\u7ECF\u5E38\u4E00\u8D77\u8BFB\u53D6\u7684\u884C \u5B58\u50A8\u653E\u5230\u4E00\u8D77</p><h1 id="hbase\u6570\u636E\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#hbase\u6570\u636E\u6A21\u578B" aria-hidden="true">#</a> HBase\u6570\u636E\u6A21\u578B</h1><p>\u5728 HBase \u4E2D\uFF0C\u6570\u636E\u6A21\u578B\u540C\u6837\u662F\u7531\u8868\u7EC4\u6210\u7684\uFF0C\u5404\u4E2A\u8868\u4E2D\u53C8\u5305\u542B\u6570\u636E\u884C\u548C\u5217\uFF0C\u5728\u8FD9\u4E9B\u8868\u4E2D\u5B58\u50A8\u4E86 HBase \u6570\u636E\u3002</p><h2 id="hbase\u6570\u636E\u6A21\u578B\u672F\u8BED" tabindex="-1"><a class="header-anchor" href="#hbase\u6570\u636E\u6A21\u578B\u672F\u8BED" aria-hidden="true">#</a> HBase\u6570\u636E\u6A21\u578B\u672F\u8BED</h2><ul><li><p>\u8868\uFF08Table\uFF09 HBase \u4F1A\u5C06\u6570\u636E\u7EC4\u7EC7\u8FDB\u4E00\u5F20\u5F20\u7684\u8868\u91CC\u9762\uFF0C\u4E00\u4E2A HBase \u8868\u7531\u591A\u884C\u7EC4\u6210\u3002</p></li><li><p>\u884C\uFF08Row\uFF09 HBase \u4E2D\u7684\u4E00\u884C\u5305\u542B\u4E00\u4E2A\u884C\u952E\u548C\u4E00\u4E2A\u6216\u591A\u4E2A\u4E0E\u5176\u76F8\u5173\u7684\u503C\u7684\u5217\u3002\u5728\u5B58\u50A8\u884C\u65F6\uFF0C\u884C\u6309\u5B57\u6BCD\u987A\u5E8F\u6392\u5E8F\u3002\u51FA\u4E8E\u8FD9\u4E2A\u539F\u56E0\uFF0C\u884C\u952E\u7684\u8BBE\u8BA1\u975E\u5E38 \u91CD\u8981\u3002\u76EE\u6807\u662F\u4EE5\u76F8\u5173\u884C\u76F8\u4E92\u9760\u8FD1\u7684\u65B9\u5F0F\u5B58\u50A8\u6570\u636E\u3002\u5E38\u7528\u7684\u884C\u952E\u6A21\u5F0F\u662F\u7F51\u7AD9\u57DF\u3002\u5982\u679C\u4F60\u7684\u884C\u952E\u662F\u57DF\u540D\uFF0C\u5219\u4F60\u53EF\u80FD\u5E94\u8BE5\u5C06\u5B83\u4EEC\u5B58\u50A8\u5728\u76F8 \u53CD\u7684\u4F4D\u7F6E\uFF08org.apache.www\uFF0Corg.apache.mail\uFF0Corg.apache.jira\uFF09\u3002\u8FD9\u6837\uFF0C\u8868\u4E2D\u7684\u6240\u6709 Apache \u57DF\u90FD\u5F7C\u6B64\u9760\u8FD1\uFF0C\u800C\u4E0D \u662F\u6839\u636E\u5B50\u57DF\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BCD\u5206\u5E03\u3002</p></li><li><p>\u5217\uFF08Column\uFF09 HBase \u4E2D\u7684\u5217\u7531\u4E00\u4E2A\u5217\u65CF\u548C\u4E00\u4E2A\u5217\u9650\u5B9A\u7B26\u7EC4\u6210\uFF0C\u5B83\u4EEC\u7531<code>:</code>\uFF08\u5192\u53F7\uFF09\u5B57\u7B26\u5206\u9694\u3002</p></li><li><p>\u5217\u65CF\uFF08Column Family\uFF09 \u51FA\u4E8E\u6027\u80FD\u539F\u56E0\uFF0C\u5217\u65CF\u5728\u7269\u7406\u4E0A\u5171\u540C\u5B58\u5728\u4E00\u7EC4\u5217\u548C\u5B83\u4EEC\u7684\u503C\u3002\u5728 HBase \u4E2D\u6BCF\u4E2A\u5217\u65CF\u90FD\u6709\u4E00\u7EC4\u5B58\u50A8\u5C5E\u6027\uFF0C\u4F8B\u5982\u5176\u503C\u662F\u5426\u5E94\u7F13\u5B58\u5728\u5185\u5B58 \u4E2D\uFF0C\u6570\u636E\u5982\u4F55\u538B\u7F29\u6216\u5176\u884C\u7F16\u7801\u662F\u5982\u4F55\u7F16\u7801\u7684\u7B49\u7B49\u3002\u8868\u4E2D\u7684\u6BCF\u4E00\u884C\u90FD\u6709\u76F8\u540C\u7684\u5217\u65CF\uFF0C\u4F46\u7ED9\u5B9A\u7684\u884C\u53EF\u80FD\u4E0D\u4F1A\u5728\u7ED9\u5B9A\u7684\u5217\u65CF\u4E2D\u5B58\u50A8\u4EFB\u4F55\u5185 \u5BB9\u3002\u5217\u65CF\u4E00\u65E6\u786E\u5B9A\u540E\uFF0C\u5C31\u4E0D\u80FD\u8F7B\u6613\u4FEE\u6539\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u5F71\u54CD\u5230 HBase \u771F\u5B9E\u7684\u7269\u7406\u5B58\u50A8\u7ED3\u6784\uFF0C\u4F46\u662F\u5217\u65CF\u4E2D\u7684\u5217\u6807\u8BC6(Column Qualifier) \u4EE5\u53CA\u5176\u5BF9\u5E94\u7684\u503C\u53EF\u4EE5\u52A8\u6001\u589E\u5220\u3002</p></li><li><p>\u5217\u9650\u5B9A\u7B26\uFF08Column Qualifier\uFF09 \u5217\u9650\u5B9A\u7B26\u88AB\u6DFB\u52A0\u5230\u5217\u65CF\u4E2D\uFF0C\u4EE5\u63D0\u4F9B\u7ED9\u5B9A\u6570\u636E\u6BB5\u7684\u7D22\u5F15\u3002\u9274\u4E8E\u5217\u65CF\u7684<code>content</code>\uFF0C\u5217\u9650\u5B9A\u7B26\u53EF\u80FD\u662F<code>content:html</code>\uFF0C\u800C\u53E6\u4E00\u4E2A\u53EF \u80FD\u662F<code>content:pdf</code>\u3002\u867D\u7136\u5217\u65CF\u5728\u521B\u5EFA\u8868\u65F6\u662F\u56FA\u5B9A\u7684\uFF0C\u4F46\u5217\u9650\u5B9A\u7B26\u662F\u53EF\u53D8\u7684\uFF0C\u5E76\u4E14\u5728\u884C\u4E4B\u95F4\u53EF\u80FD\u5DEE\u522B\u5F88\u5927\u3002</p></li><li><p>\u5355\u5143\u683C\uFF08Cell\uFF09 \u5355\u5143\u683C\u662F\u884C\u3001\u5217\u65CF\u548C\u5217\u9650\u5B9A\u7B26\u7684\u7EC4\u5408\uFF0C\u5E76\u4E14\u5305\u542B\u503C\u548C\u65F6\u95F4\u6233\uFF0C\u5B83\u8868\u793A\u503C\u7684\u7248\u672C\u3002</p></li><li><p>\u65F6\u95F4\u6233\uFF08Timestamp\uFF09</p><p>\u65F6\u95F4\u6233\u4E0E\u6BCF\u4E2A\u503C\u4E00\u8D77\u7F16\u5199\uFF0C\u5E76\u4E14\u662F\u7ED9\u5B9A\u7248\u672C\u7684\u503C\u7684\u6807\u8BC6\u7B26\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u65F6\u95F4\u6233\u8868\u793A\u5199\u5165\u6570\u636E\u65F6 RegionServer \u4E0A\u7684\u65F6\u95F4\uFF0C\u4F46 \u53EF\u4EE5\u5728\u5C06\u6570\u636E\u653E\u5165\u5355\u5143\u683C\u65F6\u6307\u5B9A\u4E0D\u540C\u7684\u65F6\u95F4\u6233\u503C\u3002</p></li></ul><h1 id="hbase\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#hbase\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> HBase\u547D\u540D\u7A7A\u95F4</h1><h2 id="hbase\u547D\u540D\u7A7A\u95F4-1" tabindex="-1"><a class="header-anchor" href="#hbase\u547D\u540D\u7A7A\u95F4-1" aria-hidden="true">#</a> HBase\u547D\u540D\u7A7A\u95F4</h2><p>HBase\u547D\u540D\u7A7A\u95F4 namespace \u662F\u4E0E\u5173\u7CFB\u6570\u636E\u5E93\u7CFB\u7EDF\u4E2D\u7684\u6570\u636E\u5E93\u7C7B\u4F3C\u7684\u8868\u7684\u903B\u8F91\u5206\u7EC4\u3002\u8FD9\u79CD\u62BD\u8C61\u4E3A\u5373\u5C06\u51FA\u73B0\u7684\u591A\u79DF\u6237\u76F8\u5173\u529F\u80FD\u5960\u5B9A\u4E86\u57FA\u7840\uFF1A</p><ul><li>\u914D\u989D\u7BA1\u7406\uFF08Quota Management\uFF09\uFF08HBASE-8410\uFF09 - \u9650\u5236\u547D\u540D\u7A7A\u95F4\u53EF\u5360\u7528\u7684\u8D44\u6E90\u91CF\uFF08\u5373\u533A\u57DF\uFF0C\u8868\uFF09\u3002</li><li>\u547D\u540D\u7A7A\u95F4\u5B89\u5168\u7BA1\u7406\uFF08Namespace Security Administration\uFF09\uFF08HBASE-9206\uFF09 - \u4E3A\u79DF\u6237\u63D0\u4F9B\u53E6\u4E00\u7EA7\u522B\u7684\u5B89\u5168\u7BA1\u7406\u3002</li><li>\u533A\u57DF\u670D\u52A1\u5668\u7EC4\uFF08Region server groups\uFF09\uFF08HBASE-6721\uFF09- \u547D\u540D\u7A7A\u95F4/\u8868\u53EF\u4EE5\u56FA\u5B9A\u5728 RegionServers \u7684\u5B50\u96C6\u4E0A\u4ECE\u800C\u4FDD\u8BC1\u7C97\u7565\u7684\u9694\u79BB\u7EA7\u522B\u3002</li></ul><h3 id="\u547D\u540D\u7A7A\u95F4\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4\u7BA1\u7406" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4\u7BA1\u7406</h3><p>\u4F60\u53EF\u4EE5\u521B\u5EFA\u3001\u5220\u9664\u6216\u66F4\u6539\u547D\u540D\u7A7A\u95F4\u3002\u901A\u8FC7\u6307\u5B9A\u8868\u5355\u7684\u5B8C\u5168\u9650\u5B9A\u8868\u540D\uFF0C\u5728\u521B\u5EFA\u8868\u65F6\u786E\u5B9A\u547D\u540D\u7A7A\u95F4\u6210\u5458\u6743\u9650\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>table namespace<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>table qualifier<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>#Create a namespace create_namespace &#39;my_ns&#39;</p><p>#create my_table in my_ns namespace create &#39;my_ns:my_table&#39;, &#39;fam&#39;</p><p>#drop namespace drop_namespace &#39;my_ns&#39;</p><p>#alter namespace alter_namespace &#39;my_ns&#39;, {METHOD =&gt; &#39;set&#39;, &#39;PROPERTY_NAME&#39; =&gt; &#39;PROPERTY_VALUE&#39;}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
### HBase\u9884\u5B9A\u4E49\u7684\u547D\u540D\u7A7A\u95F4

\u5728 HBase \u4E2D\u6709\u4E24\u4E2A\u9884\u5B9A\u4E49\u7684\u7279\u6B8A\u547D\u540D\u7A7A\u95F4\uFF1A

- hbase\uFF1A\u7CFB\u7EDF\u547D\u540D\u7A7A\u95F4\uFF0C\u7528\u4E8E\u5305\u542B HBase \u5185\u90E8\u8868
- default\uFF1A\u6CA1\u6709\u663E\u5F0F\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u7684\u8868\u5C06\u81EA\u52A8\u843D\u5165\u6B64\u547D\u540D\u7A7A\u95F4

\u793A\u4F8B\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#namespace=foo and table qualifier=bar create &#39;foo:bar&#39;, &#39;fam&#39;</p><p>#namespace=default and table qualifier=bar create &#39;bar&#39;, &#39;fam&#39;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
# HBase\u8868\u3001\u884C\u4E0E\u5217\u65CF

## HBase\u8868

HBase \u4E2D\u8868\u662F\u5728 schema \u5B9A\u4E49\u65F6\u88AB\u9884\u5148\u58F0\u660E\u7684\u3002

\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u7684\u547D\u4EE4\u6765\u521B\u5EFA\u4E00\u4E2A\u8868\uFF0C\u5728\u8FD9\u91CC\u5FC5\u987B\u6307\u5B9A\u8868\u540D\u548C\u5217\u65CF\u540D\u3002\u5728 HBase shell \u4E2D\u521B\u5EFA\u8868\u7684\u8BED\u6CD5\u5982\u4E0B\u6240\u793A\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>create \u2018table name\u2019,\u2019column family\u2019</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
## HBase\u884C

HBase\u4E2D\u7684\u884C\u662F\u903B\u8F91\u4E0A\u7684\u884C\uFF0C\u7269\u7406\u4E0A\u6A21\u578B\u4E0A\u884C\u662F\u6309\u5217\u65CF(colomn family)\u5206\u522B\u5B58\u53D6\u7684\u3002

\u884C\u952E\u662F\u672A\u89E3\u91CA\u7684\u5B57\u8282\uFF0C\u884C\u662F\u6309\u5B57\u6BCD\u987A\u5E8F\u6392\u5E8F\u7684\uFF0C\u6700\u4F4E\u987A\u5E8F\u9996\u5148\u51FA\u73B0\u5728\u8868\u4E2D\u3002\u7A7A\u5B57\u8282\u6570\u7EC4\u7528\u4E8E\u8868\u793A\u8868\u547D\u540D\u7A7A\u95F4\u7684\u5F00\u59CB\u548C\u7ED3\u675F\u3002

## HBase\u5217\u65CF

Apache HBase \u4E2D\u7684\u5217\u88AB\u5206\u7EC4\u4E3A\u5217\u65CF\u3002\u5217\u65CF\u7684\u6240\u6709\u5217\u6210\u5458\u5177\u6709\u76F8\u540C\u7684\u524D\u7F00\u3002\u4F8B\u5982\uFF0Ccourses:history \u548C courses:math \u90FD\u662F 
courses \u5217\u65CF\u7684\u6210\u5458\u3002\u5192\u53F7\u5B57\u7B26\uFF08:\uFF09\u4ECE\u5217\u65CF\u9650\u5B9A\u7B26\u4E2D\u5206\u9694\u5217\u65CF\u3002\u5217\u65CF\u524D\u7F00\u5FC5\u987B\u7531\u53EF\u6253\u5370\u5B57\u7B26\u7EC4\u6210\u3002\u9650\u5B9A\u5C3E\u90E8\uFF0C\u5217\u65CF\u9650\u5B9A\u7B26\u53EF\u4EE5\u7531\u4EFB\u610F
\u5B57\u8282\u7EC4\u6210\u3002\u5FC5\u987B\u5728 schema \u5B9A\u4E49\u65F6\u63D0\u524D\u58F0\u660E\u5217\u65CF\uFF0C\u800C\u5217\u4E0D\u9700\u8981\u5728 schema \u65F6\u5B9A\u4E49\uFF0C\u4F46\u53EF\u4EE5\u5728\u8868\u542F\u52A8\u5E76\u8FD0\u884C\u65F6\u52A8\u6001\u5730\u53D8\u4E3A\u5217\u3002

\u5728\u7269\u7406\u4E0A\uFF0C\u6240\u6709\u5217\u65CF\u6210\u5458\u4E00\u8D77\u5B58\u50A8\u5728\u6587\u4EF6\u7CFB\u7EDF\u4E0A\u3002\u7531\u4E8E\u8C03\u97F3\uFF08tunings\uFF09\u548C\u5B58\u50A8\uFF08storage\uFF09\u89C4\u8303\u662F\u5728\u5217\u65CF\u7EA7\u5B8C\u6210\u7684\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u6240\u6709\u5217
\u65CF\u6210\u5458\u5177\u6709\u76F8\u540C\u7684\u4E00\u822C\u8BBF\u95EE\u6A21\u5F0F\u548C\u5927\u5C0F\u7279\u5F81\u3002

## HBase Cell

\u7531{row key, column( =family + label), version} \u552F\u4E00\u786E\u5B9A\u7684\u5355\u5143\u3002cell \u4E2D\u7684\u6570\u636E\u662F\u6CA1\u6709\u7C7B\u578B\u7684\uFF0C\u5168\u90E8\u662F\u5B57\u8282\u7801\u5F62
\u5F0F\u5B58\u50A8\u3002

# HBase\u6570\u636E\u6A21\u578B\u64CD\u4F5C

## HBase\u6570\u636E\u6A21\u578B\u64CD\u4F5C

\u5728 HBase \u4E2D\u6709\u56DB\u4E2A\u4E3B\u8981\u7684\u6570\u636E\u6A21\u578B\u64CD\u4F5C\uFF0C\u5206\u522B\u662F\uFF1AGet\u3001Put\u3001Scan \u548C Delete\u3002

### Get\uFF08\u8BFB\u53D6\uFF09

Get \u6307\u5B9A\u884C\u7684\u8FD4\u56DE\u5C5E\u6027\u3002\u8BFB\u53D6\u901A\u8FC7 Table.get \u6267\u884C\u3002

Get \u64CD\u4F5C\u7684\u8BED\u6CD5\u5982\u4E0B\u6240\u793A\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>get \u2019table name\u2019,\u2019row1\u2019</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u5728\u4EE5\u4E0B\u7684 get \u547D\u4EE4\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u626B\u63CF\u4E86 emp \u8868\u7684\u7B2C\u4E00\u884C\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hbase(main):012:0&gt; get &#39;emp&#39;, &#39;1&#39;</p><p>COLUMN CELL</p><p>personal : city timestamp=1417521848375, value=hyderabad</p><p>personal : name timestamp=1417521785385, value=ramu</p><p>professional: designation timestamp=1417521885277, value=manager</p><p>professional: salary timestamp=1417521903862, value=50000</p><p>4 row(s) in 0.0270 seconds</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
#### \u8BFB\u53D6\u6307\u5B9A\u5217

\u4E0B\u9762\u7ED9\u51FA\u7684\u662F\u4F7F\u7528 get \u64CD\u4F5C\u8BFB\u53D6\u6307\u5B9A\u5217\u8BED\u6CD5\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hbase&gt;get &#39;table name&#39;, \u2018rowid\u2019, {COLUMN =&gt; \u2018column family:column name \u2019}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u5728\u4E0B\u9762\u7ED9\u51FA\u7684\u793A\u4F8B\u8868\u793A\u7528\u4E8E\u8BFB\u53D6 HBase \u8868\u4E2D\u7684\u7279\u5B9A\u5217\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hbase(main):015:0&gt; get &#39;emp&#39;, &#39;row1&#39;, {COLUMN=&gt;&#39;personal:name&#39;}</p><p>COLUMN CELL</p><p>personal:name timestamp=1418035791555, value=raju</p><p>1 row(s) in 0.0080 seconds</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
### Put\uFF08\u5199\uFF09

Put \u53EF\u4EE5\u5C06\u65B0\u884C\u6DFB\u52A0\u5230\u8868\u4E2D\uFF08\u5982\u679C\u8BE5\u9879\u662F\u65B0\u7684\uFF09\u6216\u8005\u53EF\u4EE5\u66F4\u65B0\u73B0\u6709\u884C\uFF08\u5982\u679C\u8BE5\u9879\u5DF2\u7ECF\u5B58\u5728\uFF09\u3002Put \u64CD\u4F5C\u901A\u8FC7 
Table.put\uFF08non-writeBuffer\uFF09\u6216 Table.batch\uFF08non-writeBuffer\uFF09\u6267\u884C\u3002

Put \u64CD\u4F5C\u7684\u547D\u4EE4\u5982\u4E0B\u6240\u793A\uFF0C\u5728\u8BE5\u8BED\u6CD5\u4E2D\uFF0C\u4F60\u9700\u8981\u6CE8\u660E\u65B0\u503C\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>put \u2018table name\u2019,\u2019row \u2019,&#39;Column family:column name&#39;,\u2019new value\u2019</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u65B0\u7ED9\u5B9A\u7684\u503C\u5C06\u66FF\u6362\u73B0\u6709\u7684\u503C\uFF0C\u5E76\u66F4\u65B0\u8BE5\u884C\u3002

#### Put\u64CD\u4F5C\u793A\u4F8B 

\u5047\u8BBE HBase \u4E2D\u6709\u4E00\u4E2A\u8868 EMP \u62E5\u6709\u4E0B\u5217\u6570\u636E\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hbase(main):003:0&gt; scan &#39;emp&#39; ROW COLUMN+CELL row1 column=personal:name, timestamp=1418051555, value=raju row1 column=personal:city, timestamp=1418275907, value=Hyderabad row1 column=professional:designation, timestamp=14180555,value=manager row1 column=professional:salary, timestamp=1418035791555,value=50000 1 row(s) in 0.0100 seconds</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u4EE5\u4E0B\u547D\u4EE4\u5C06\u5458\u5DE5\u540D\u4E3A\u201Craju\u201D\u7684\u57CE\u5E02\u503C\u66F4\u65B0\u4E3A\u201CDelhi\u201D\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hbase(main):002:0&gt; put &#39;emp&#39;,&#39;row1&#39;,&#39;personal:city&#39;,&#39;Delhi&#39; 0 row(s) in 0.0400 seconds</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u66F4\u65B0\u540E\u7684\u8868\u5982\u4E0B\u6240\u793A\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hbase(main):003:0&gt; scan &#39;emp&#39; ROW COLUMN+CELL row1 column=personal:name, timestamp=1418035791555, value=raju row1 column=personal:city, timestamp=1418274645907, value=Delhi row1 column=professional:designation, timestamp=141857555,value=manager row1 column=professional:salary, timestamp=1418039555, value=50000 1 row(s) in 0.0100 seconds</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
### Scan\uFF08\u626B\u63CF\uFF09

Scan \u5141\u8BB8\u5728\u591A\u4E2A\u884C\u4E0A\u5BF9\u6307\u5B9A\u5C5E\u6027\u8FDB\u884C\u8FED\u4EE3\u3002

Scan \u64CD\u4F5C\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>scan \u2018table name\u2019</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u4EE5\u4E0B\u662F\u626B\u63CF\u8868\u683C\u5B9E\u4F8B\u7684\u793A\u4F8B\u3002\u5047\u5B9A\u8868\u4E2D\u6709\u5E26\u6709\u952E  &quot;row1 &quot;\u3001 &quot;row2 &quot;\u3001 &quot;row3 &quot; \u7684\u884C\uFF0C\u7136\u540E\u662F\u5177\u6709\u952E\u201Cabc1\u201D\uFF0C\u201Cabc2\u201D\u548C
\u201Cabc3\u201D\u7684\u53E6\u4E00\u7EC4\u884C\u3002\u4EE5\u4E0B\u793A\u4F8B\u663E\u793A\u5982\u4F55\u8BBE\u7F6EScan\u5B9E\u4F8B\u4EE5\u8FD4\u56DE\u4EE5\u201Crow\u201D\u5F00\u5934\u7684\u884C\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public static final byte[] CF = &quot;cf&quot;.getBytes(); public static final byte[] ATTR = &quot;attr&quot;.getBytes(); ...</p><p>Table table = ... // instantiate a Table instance</p><p>Scan scan = new Scan(); scan.addColumn(CF, ATTR); scan.setRowPrefixFilter(Bytes.toBytes(&quot;row&quot;)); ResultScanner rs = table.getScanner(scan); try { for (Result r = rs.next(); r != null; r = rs.next()) { // process result... } } finally { rs.close(); // always close the ResultScanner! }</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u8BF7\u6CE8\u610F\uFF0C\u901A\u5E38\uFF0C\u6307\u5B9A\u626B\u63CF\u7684\u7279\u5B9A\u505C\u6B62\u70B9\u7684\u6700\u7B80\u5355\u65B9\u6CD5\u662F\u4F7F\u7528 InclusiveStopFilter \u7C7B\u3002

### Delete\uFF08\u5220\u9664\uFF09

Delete \u64CD\u4F5C\u7528\u4E8E\u4ECE\u8868\u4E2D\u5220\u9664\u4E00\u884C\u3002Delete \u901A\u8FC7 Table.delete \u6267\u884C\u3002

HBase \u4E0D\u4F1A\u4FEE\u6539\u6570\u636E\uFF0C\u56E0\u6B64\u901A\u8FC7\u521B\u5EFA\u540D\u4E3A tombstones \u7684\u65B0\u6807\u8BB0\u6765\u5904\u7406 Delete \u64CD\u4F5C\u3002\u8FD9\u4E9B  tombstones\uFF0C\u4EE5\u53CA\u6CA1\u7528\u7684\u4EF7\u503C\uFF0C
\u90FD\u5728\u91CD\u5927\u7684\u538B\u5B9E\u4E2D\u6E05\u7406\u5E72\u51C0\u3002

\u4F7F\u7528 Delete \u547D\u4EE4\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>delete \u2018table name\u2019, \u2018row\u2019, \u2018column name\u2019, \u2018time stamp\u2019</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u4E0B\u9762\u662F\u4E00\u4E2A\u5220\u9664\u7279\u5B9A\u5355\u5143\u683C\u7684\u4F8B\u5B50\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hbase(main):006:0&gt; delete &#39;emp&#39;, &#39;1&#39;, &#39;personal data:city&#39;, 1417521848375 0 row(s) in 0.0060 seconds</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
#### \u5220\u9664\u8868\u7684\u6240\u6709\u5355\u5143\u683C

\u4F7F\u7528 \u201Cdeleteall\u201D \u547D\u4EE4\uFF0C\u53EF\u4EE5\u5220\u9664\u4E00\u884C\u4E2D\u6240\u6709\u5355\u5143\u683C\u3002\u4E0B\u9762\u7ED9\u51FA\u662F deleteall \u547D\u4EE4\u7684\u8BED\u6CD5\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>deleteall \u2018table name\u2019, \u2018row\u2019,</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u8FD9\u91CC\u662F\u4F7F\u7528\u201Cdeleteall\u201D\u547D\u4EE4\u5220\u9664 emp \u8868 row1 \u7684\u6240\u6709\u5355\u5143\u7684\u4E00\u4E2A\u4F8B\u5B50\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hbase(main):007:0&gt; deleteall &#39;emp&#39;,&#39;1&#39; 0 row(s) in 0.0240 seconds</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u4F7F\u7528 Scan \u547D\u4EE4\u9A8C\u8BC1\u8868\u3002\u8868\u88AB\u5220\u9664\u540E\u7684\u5FEB\u7167\u5982\u4E0B\uFF1A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hbase(main):022:0&gt; scan &#39;emp&#39;</p><p>ROW COLUMN+CELL</p><p>2 column=personal data:city, timestamp=1417524574905, value=chennai</p><p>2 column=personal data:name, timestamp=1417524556125, value=ravi</p><p>2 column=professional data:designation, timestamp=1417524204, value=sr:engg</p><p>2 column=professional data:salary, timestamp=1417524604221, value=30000</p><p>3 column=personal data:city, timestamp=1417524681780, value=delhi</p><p>3 column=personal data:name, timestamp=1417524672067, value=rajesh</p><p>3 column=professional data:designation, timestamp=1417523187, value=jr:engg</p><p>3 column=professional data:salary, timestamp=1417524702514, value=25000</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,77),d=[l];function r(t,c){return n(),a("div",null,d)}const m=e(s,[["render",r],["__file","hbase.html.vue"]]);export{m as default};
