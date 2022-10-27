import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<h3 id="lucene\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#lucene\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> lucene\u57FA\u672C\u6982\u5FF5</h3><p>es\u662F\u57FA\u4E8Elucene\u5B9E\u73B0\u7684\uFF0C\u56E0\u6B64lucene\u57FA\u672C\u6982\u5FF5\u5728es\u4E2D\u540C\u6837\u5B58\u5728\u3002</p><ul><li><p>segment lucene\u5185\u90E8\u7684\u6570\u636E\u662F\u7531\u4E00\u4E2A\u4E2Asegment\u7EC4\u6210\u7684\uFF0C\u5199\u5165lucene\u7684\u6570\u636E\u5E76\u4E0D\u76F4\u63A5\u843D\u76D8\uFF0C\u800C\u662F\u5148\u5199\u5728\u5185\u5B58\u4E2D\uFF0C\u7ECF\u8FC7\u4E86refresh\u95F4\u9694\uFF0Clucene\u624D\u5C06\u8BE5\u65F6\u95F4\u6BB5\u5199\u5165\u7684\u5168\u90E8\u6570\u636Erefresh\u6210\u4E00\u4E2Asegment\uFF0Csegment\u591A\u4E86\u4E4B\u540E\u4F1A\u8FDB\u884Cmerge\u6210\u66F4\u5927\u7684segment\u3002lucene\u67E5\u8BE2\u65F6\u4F1A\u904D\u5386\u6BCF\u4E2Asegment\u5B8C\u6210\u3002\u7531\u4E8Elucene* \u5199\u5165\u7684\u6570\u636E\u662F\u5728\u5185\u5B58\u4E2D\u5B8C\u6210\uFF0C\u6240\u4EE5\u5199\u5165\u6548\u7387\u975E\u5E38\u9AD8\u3002\u4F46\u662F\u4E5F\u5B58\u5728\u4E22\u5931\u6570\u636E\u7684\u98CE\u9669\uFF0C\u6240\u4EE5Elasticsearch\u57FA\u4E8E\u6B64\u73B0\u8C61\u5B9E\u73B0\u4E86translog\uFF0C\u53EA\u6709\u5728segment\u6570\u636E\u843D\u76D8\u540E\uFF0CElasticsearch\u624D\u4F1A\u5220\u9664\u5BF9\u5E94\u7684translog\u3002</p></li><li><p>doc doc\u8868\u793Alucene\u4E2D\u7684\u4E00\u6761\u8BB0\u5F55</p></li><li><p>field field\u8868\u793A\u8BB0\u5F55\u4E2D\u7684\u5B57\u6BB5\u6982\u5FF5\uFF0C\u4E00\u4E2Adoc\u7531\u82E5\u5E72\u4E2Afield\u7EC4\u6210\u3002</p></li><li><p>term term\u662Flucene\u4E2D\u7D22\u5F15\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u67D0\u4E2Afield\u5BF9\u5E94\u7684\u5185\u5BB9\u5982\u679C\u5168\u6587\u68C0\u7D22\uFF0C\u4F1A\u5C06\u5185\u5BB9\u8FDB\u884C\u5206\u8BCD\uFF0C\u5206\u8BCD\u7684\u7ED3\u679C\u5C31\u662F\u7531term\u7EC4\u6210\u7684\uFF0C\u5982\u679C\u662F\u4E0D\u5206\u8BCD\u7684\u5B57\u6BB5\uFF0C\u90A3\u4E48\u8BE5\u5B57\u6BB5\u7684\u5185\u5BB9\u5C31\u662F\u4E00\u4E2Aterm\u3002</p></li><li><p>inverted index \u5012\u6392\u7D22\u5F15lucene\u7D22\u5F15\u7684\u901A\u7528\u53EB\u6CD5\uFF0C\u5373\u5B9E\u73B0\u4E86term\u5230doc list\u7684\u6620\u5C04\u3002</p></li><li><p>docvalues Elasticsearch\u4E2D\u7684\u5217\u5F0F\u5B58\u50A8\u7684\u540D\u79F0\uFF0CElasticsearch\u9664\u4E86\u5B58\u50A8\u539F\u59CB\u5B58\u50A8\u3001\u5012\u6392\u7D22\u5F15\uFF0C\u8FD8\u5B58\u50A8\u4E86\u4E00\u4EFDdocvalues\uFF0C\u7528\u4F5C\u5206\u6790\u548C\u6392\u5E8F\u3002</p></li></ul><h3 id="es\u7684\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#es\u7684\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> ES\u7684\u57FA\u672C\u6982\u5FF5</h3><ul><li><p>\u7D22\u5F15Index</p><p>ES\u5C06\u6570\u636E\u5B58\u50A8\u4E8E\u4E00\u4E2A\u6216\u591A\u4E2A\u7D22\u5F15\u4E2D\uFF0C\u7D22\u5F15\u662F\u5177\u6709\u7C7B\u4F3C\u7279\u6027\u7684\u6587\u6863\u7684\u96C6\u5408\uFF0C\u7C7B\u6BD4\u4F20\u7EDF\u7684\u5173\u7CFB\u6570\u636E\u5E93\u4E2D\u6570\u636E\u5E93DB\uFF0C\u6216\u8005\u4E00\u4E2A\u6570\u636E\u5B58\u50A8\u65B9\u6848Schema\u3002\u7D22\u5F15\u7531\u5176\u540D\u79F0(\u5FC5\u987B\u4E3A\u5168\u5C0F\u5199\u5B57\u7B26)\u8FDB\u884C\u6807\u8BC6\uFF0C\u5E76\u901A\u8FC7\u5F15\u7528\u6B64\u540D\u79F0\u5B8C\u6210\u6587\u6863\u7684\u521B\u5EFA\u3001\u641C\u7D22\u3001\u66F4\u65B0\u53CA\u5220\u9664\u64CD\u4F5C\u3002\u4E00\u4E2AES\u96C6\u7FA4\u4E2D\u53EF\u4EE5\u6309\u9700\u521B\u5EFA\u4EFB\u610F\u6570\u76EE\u7684\u7D22\u5F15\u3002</p></li><li><p>\u7C7B\u578BType</p><p>\u7C7B\u578B\u662F\u7D22\u5F15\u5185\u90E8\u7684\u903B\u8F91\u5206\u533A(category/partition)\uFF0C\u7136\u800C\u5176\u610F\u4E49\u5B8C\u5168\u53D6\u51B3\u4E8E\u7528\u6237\u9700\u6C42\u3002\u56E0\u6B64\uFF0C\u4E00\u4E2A\u7D22\u5F15\u5185\u90E8\u53EF\u5B9A\u4E49\u4E00\u4E2A\u6216\u591A\u4E2A\u7C7B\u578B(type)\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u7C7B\u578B\u5C31\u662F\u4E3A\u90A3\u4E9B\u62E5\u6709\u76F8\u540C\u7684\u57DF\u7684\u6587\u6863\u505A\u7684\u9884\u5B9A\u4E49\u3002\u7C7B\u6BD4\u4F20\u7EDF\u7684\u5173\u7CFB\u6570\u636E\u5E93\u4E2D\u7684\u8868\u3002</p></li><li><p>\u6587\u6863Document</p><p>\u6587\u6863\u662FLucene\u7D22\u5F15\u548C\u641C\u7D22\u7684\u539F\u5B50\u5355\u4F4D\uFF0C\u5B83\u662F\u5305\u542B\u4E86\u4E00\u4E2A\u6216\u591A\u4E2A\u57DF\u7684\u5BB9\u5668\uFF0C\u57FA\u4E8EJSON\u683C\u5F0F\u8FDB\u884C\u8868\u793A\u3002\u6587\u6863\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u57DF\u7EC4\u6210\uFF0C\u6BCF\u4E2A\u57DF\u62E5\u6709\u4E00\u4E2A\u540D\u5B57\u53CA\u4E00\u4E2A\u6216\u591A\u4E2A\u503C\uFF0C\u6709\u591A\u4E2A\u503C\u7684\u57DF\u901A\u5E38\u79F0\u4E3A\u201C\u591A\u503C\u57DF\u201D\u3002\u6BCF\u4E2A\u6587\u6863\u53EF\u4EE5\u5B58\u50A8\u4E0D\u540C\u7684\u57DF\u96C6\uFF0C\u4F46\u540C\u4E00\u7C7B\u578B\u4E0B\u7684\u6587\u6863\u81F3\u5E94\u8BE5\u6709\u67D0\u79CD\u7A0B\u5EA6\u4E0A\u7684\u76F8\u4F3C\u4E4B\u5904\u3002</p></li><li><p>\u5B57\u6BB5field</p><p>\u6587\u6863\u5305\u542B\u4E00\u7CFB\u5217\u7684\u5B57\u6BB5\uFF0C\u6216\u8005key-value \u5BF9\u3002\u6BCF\u4E2A\u503C\u90FD\u6709\u53EF\u4EE5\u662F\u5355\u4E2A\u503C\uFF08string\uFF0Cintger\uFF0Cdate\uFF09\u6216\u8005\u662F\u4E00\u4E2A\u50CF\u6570\u7EC4\u7684nested \u7ED3\u6784\u6216\u8005\u5BF9\u8C61\u3002\u5B57\u6BB5\u548C\u5173\u7CFB\u6570\u636E\u5E93\u4E2D\u7684\u5217\u7C7B\u4F3C\u3002\u4E0D\u8981\u548C\u6587\u6863type\u6DF7\u6DC6\u3002</p></li><li><p>\u6620\u5C04mapping</p><p>ES\u4E2D\uFF0C\u6240\u6709\u7684\u6587\u6863\u5728\u5B58\u50A8\u4E4B\u524D\u90FD\u8981\u9996\u5148\u8FDB\u884C\u5206\u6790\u3002\u7528\u6237\u53EF\u6839\u636E\u9700\u8981\u5B9A\u4E49\u5982\u4F55\u5C06\u6587\u672C\u5206\u5272\u6210token\u3001\u54EA\u4E9Btoken\u5E94\u8BE5\u88AB\u8FC7\u6EE4\u6389\uFF0C\u4EE5\u53CA\u54EA\u4E9B\u6587\u672C\u9700\u8981\u8FDB\u884C\u989D\u5916\u5904\u7406\u7B49\u7B49\u3002</p></li><li><p>\u96C6\u7FA4Cluster</p><p>ES\u96C6\u7FA4\u662F\u4E00\u4E2A\u6216\u591A\u4E2A\u8282\u70B9\u7684\u96C6\u5408\uFF0C\u5B83\u4EEC\u5171\u540C\u5B58\u50A8\u4E86\u6574\u4E2A\u6570\u636E\u96C6\uFF0C\u5E76\u63D0\u4F9B\u4E86\u8054\u5408\u7D22\u5F15\u4EE5\u53CA\u53EF\u8DE8\u6240\u6709\u8282\u70B9\u7684\u641C\u7D22\u80FD\u529B\u3002\u591A\u8282\u70B9\u7EC4\u6210\u7684\u96C6\u7FA4\u62E5\u6709\u5197\u4F59\u80FD\u529B\uFF0C\u5B83\u53EF\u4EE5\u5728\u4E00\u4E2A\u6216\u51E0\u4E2A\u8282\u70B9\u51FA\u73B0\u6545\u969C\u65F6\u4FDD\u8BC1\u670D\u52A1\u7684\u6574\u4F53\u53EF\u7528\u6027\u3002</p></li><li><p>\u8282\u70B9Node</p><p>\u8FD0\u884C\u4E86\u5355\u4E2A\u5B9E\u4F8B\u7684ES\u4E3B\u673A\u79F0\u4E3A\u8282\u70B9\uFF0C\u5B83\u662F\u96C6\u7FA4\u7684\u4E00\u4E2A\u6210\u5458\uFF0C\u53EF\u4EE5\u5B58\u50A8\u6570\u636E\u3001\u53C2\u4E0E\u96C6\u7FA4\u7D22\u5F15\u53CA\u641C\u7D22\u64CD\u4F5C\u3002\u7C7B\u4F3C\u4E8E\u96C6\u7FA4\uFF0C\u8282\u70B9\u9760\u5176\u540D\u79F0\u8FDB\u884C\u6807\u8BC6\uFF0C\u9ED8\u8BA4\u4E3A\u542F\u52A8\u65F6\u81EA\u52A8\u751F\u6210\u7684\u968F\u673AMarvel\u5B57\u7B26\u540D\u79F0\u3002</p></li><li><p>\u5206\u7247Shard\u548C\u526F\u672CReplica</p><p>ES\u7684\u201C\u5206\u7247(shard)\u201D\u673A\u5236\u53EF\u5C06\u4E00\u4E2A\u7D22\u5F15\u5185\u90E8\u7684\u6570\u636E\u5206\u5E03\u5730\u5B58\u50A8\u4E8E\u591A\u4E2A\u8282\u70B9\uFF0C\u5B83\u901A\u8FC7\u5C06\u4E00\u4E2A\u7D22\u5F15\u5207\u5206\u4E3A\u591A\u4E2A\u5E95\u5C42\u7269\u7406\u7684Lucene\u7D22\u5F15\u5B8C\u6210\u7D22\u5F15\u6570\u636E\u7684\u5206\u5272\u5B58\u50A8\u529F\u80FD\uFF0C\u8FD9\u6BCF\u4E00\u4E2A\u7269\u7406\u7684Lucene\u7D22\u5F15\u79F0\u4E3A\u4E00\u4E2A\u5206\u7247(shard)\u3002</p></li><li><p>\u5206\u6790analysis</p><p>\u628A\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3Aterms\u7684\u8FC7\u7A0B\u3002\u57FA\u4E8E\u5B83\u4F7F\u7528\u53EF\u90A3\u4E9B\u5206\u8BCD\u5668\uFF0C\u77ED\u8BED\uFF1AFOO BAR, Foo-Bar, foo,bar\u6709\u53EF\u80FD\u5206\u8BCD\u4E3Aterms\uFF1Afoo\u548Cbar\u3002\u8FD9\u4E9Bterms\u4F1A\u88AB\u5B58\u50A8\u5728\u7D22\u5F15\u4E2D\u3002\u5168\u6587\u7D22\u5F15\u67E5\u8BE2\uFF08\u4E0D\u662Fterm query\uFF09\u201CFoO:bAR\u201D\uFF0C\u540C\u6837\u4E5F\u4F1A\u88AB\u5206\u8BCD\u4E3Aterms\uFF1Afoo,bar\uFF0C\u5E76\u4E14\u4E5F\u5339\u914D\u5B58\u5728\u7D22\u5F15\u4E2D\u7684terms\u3002\u5206\u8BCD\u8FC7\u7A0B\uFF08\u5305\u62EC\u7D22\u5F15\u6216\u641C\u7D22\u8FC7\u7A0B\uFF09\u4F7Fes\u53EF\u4EE5\u6267\u884C\u5168\u6587\u67E5\u8BE2\u3002</p></li></ul><h3 id="es\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#es\u7684\u914D\u7F6E" aria-hidden="true">#</a> ES\u7684\u914D\u7F6E</h3><p>es\u7684\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6\u5728config\u76EE\u5F55\u4E0B\uFF0C\u5982\u4E0B\u6240\u793A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>config/elasticsearch.yml   \u4E3B\u914D\u7F6E\u6587\u4EF6
config/jvm.options         jvm\u53C2\u6570\u914D\u7F6E\u6587\u4EF6
cofnig/log4j2.properties   \u65E5\u5FD7\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D\u7684elasticsearch.yml\u6587\u4EF6\u662F\u4E3B\u914D\u7F6E\u6587\u4EF6\u4E0B\u9762\u8BD5es5.x\u7684\u914D\u7F6E\u6587\u4EF6</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">################################### Cluster ################################### </span>
<span class="token comment"># \u4EE3\u8868\u4E00\u4E2A\u96C6\u7FA4,\u96C6\u7FA4\u4E2D\u6709\u591A\u4E2A\u8282\u70B9,\u5176\u4E2D\u6709\u4E00\u4E2A\u4E3A\u4E3B\u8282\u70B9,\u8FD9\u4E2A\u4E3B\u8282\u70B9\u662F\u53EF\u4EE5\u901A\u8FC7\u9009\u4E3E\u4EA7\u751F\u7684,\u4E3B\u4ECE\u8282\u70B9\u662F\u5BF9\u4E8E\u96C6\u7FA4\u5185\u90E8\u6765\u8BF4\u7684. </span>
<span class="token comment"># es\u7684\u4E00\u4E2A\u6982\u5FF5\u5C31\u662F\u53BB\u4E2D\u5FC3\u5316,\u5B57\u9762\u4E0A\u7406\u89E3\u5C31\u662F\u65E0\u4E2D\u5FC3\u8282\u70B9,\u8FD9\u662F\u5BF9\u4E8E\u96C6\u7FA4\u5916\u90E8\u6765\u8BF4\u7684,\u56E0\u4E3A\u4ECE\u5916\u90E8\u6765\u770Bes\u96C6\u7FA4,\u5728\u903B\u8F91\u4E0A\u662F\u4E2A\u6574\u4F53,\u4F60\u4E0E\u4EFB\u4F55\u4E00\u4E2A\u8282\u70B9\u7684\u901A\u4FE1\u548C\u4E0E\u6574\u4E2Aes\u96C6\u7FA4\u901A\u4FE1\u662F\u7B49\u4EF7\u7684\u3002 </span>
<span class="token comment"># cluster.name\u53EF\u4EE5\u786E\u5B9A\u4F60\u7684\u96C6\u7FA4\u540D\u79F0,\u5F53\u4F60\u7684elasticsearch\u96C6\u7FA4\u5728\u540C\u4E00\u4E2A\u7F51\u6BB5\u4E2Delasticsearch\u4F1A\u81EA\u52A8\u7684\u627E\u5230\u5177\u6709\u76F8\u540Ccluster.name\u7684elasticsearch\u670D\u52A1. </span>
<span class="token comment"># \u6240\u4EE5\u5F53\u540C\u4E00\u4E2A\u7F51\u6BB5\u5177\u6709\u591A\u4E2Aelasticsearch\u96C6\u7FA4\u65F6cluster.name\u5C31\u6210\u4E3A\u540C\u4E00\u4E2A\u96C6\u7FA4\u7684\u6807\u8BC6. </span>
<span class="token comment"># cluster.name: es6.2 </span>

<span class="token comment">#################################### Node ##################################### </span>
<span class="token comment"># \u8282\u70B9\u540D\u79F0\u540C\u7406,\u53EF\u81EA\u52A8\u751F\u6210\u4E5F\u53EF\u624B\u52A8\u914D\u7F6E. </span>
<span class="token comment"># node.name: node-1</span>

<span class="token comment"># \u5141\u8BB8\u4E00\u4E2A\u8282\u70B9\u662F\u5426\u53EF\u4EE5\u6210\u4E3A\u4E00\u4E2Amaster\u8282\u70B9,es\u662F\u9ED8\u8BA4\u96C6\u7FA4\u4E2D\u7684\u7B2C\u4E00\u53F0\u673A\u5668\u4E3Amaster,\u5982\u679C\u8FD9\u53F0\u673A\u5668\u505C\u6B62\u5C31\u4F1A\u91CD\u65B0\u9009\u4E3Emaster. \u4EFB\u4F55\u4E3B\u8282\u70B9\u7684\u8282\u70B9\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6240\u6709\u8282\u70B9\uFF09\u90FD\u53EF\u4EE5\u88AB\u4E3B\u9009\u4E3E\u8FC7\u7A0B\u9009\u4E3A\u4E3B\u8282\u70B9\u3002</span>
<span class="token comment"># node.master: true </span>

<span class="token comment"># \u5141\u8BB8\u8BE5\u8282\u70B9\u5B58\u50A8\u6570\u636E(\u9ED8\u8BA4\u5F00\u542F) </span>
<span class="token comment"># node.data: true </span>
<span class="token comment"># \u6CE8\u610F\uFF1A\u4E3B\u8282\u70B9\u5FC5\u987B\u6709\u6743\u8BBF\u95EE\u8BE5data/\u76EE\u5F55\uFF08\u5C31\u50CFdata\u8282\u70B9\u4E00\u6837 \uFF09\uFF0C\u56E0\u4E3A\u8FD9\u662F\u96C6\u7FA4\u72B6\u6001\u5728\u8282\u70B9\u91CD\u65B0\u542F\u52A8\u4E4B\u95F4\u6301\u7EED\u5B58\u5728\u7684\u4F4D\u7F6E\u3002</span>

<span class="token comment"># \u5141\u8BB8\u8BE5\u8282\u70B9\u4E3A\u6444\u53D6\u8282\u70B9(\u9ED8\u8BA4\u5F00\u542F) </span>
<span class="token comment"># node.ingest\uFF1Atrue</span>
<span class="token comment"># \u914D\u7F6E\u4E3Atrue\u5C06\u4E3B\u8282\u70B9\u548C\u6570\u636E\u8282\u70B9\u6807\u8BB0\u4E3A\u201C\u662F\u6709\u610F\u4E49\u7684\u201D</span>

<span class="token comment"># \u5F00\u542F\u8DE8\u7FA4\u96C6\u641C\u7D22\uFF08\u9ED8\u8BA4\u542F\u7528\uFF09</span>
<span class="token comment"># search.remote.connect\uFF1Atrue</span>

<span class="token comment"># \u914D\u7F6E\u6587\u4EF6\u4E2D\u7ED9\u51FA\u4E86\u4E09\u79CD\u914D\u7F6E\u9AD8\u6027\u80FD\u96C6\u7FA4\u62D3\u6251\u7ED3\u6784\u7684\u6A21\u5F0F,\u5982\u4E0B\uFF1A </span>
<span class="token comment"># 1. \u5982\u679C\u4F60\u60F3\u8BA9\u8282\u70B9\u4ECE\u4E0D\u9009\u4E3E\u4E3A\u4E3B\u8282\u70B9,\u53EA\u7528\u6765\u5B58\u50A8\u6570\u636E,\u53EF\u4F5C\u4E3A\u6570\u636E\u8282\u70B9 </span>
<span class="token comment"># node.master: true </span>
<span class="token comment"># node.data: false</span>
<span class="token comment"># node.ingest: true</span>

<span class="token comment"># 2. \u5982\u679C\u60F3\u8BA9\u8282\u70B9\u6210\u4E3A\u4E3B\u8282\u70B9,\u4E14\u4E0D\u5B58\u50A8\u4EFB\u4F55\u6570\u636E,\u5E76\u4FDD\u6709\u7A7A\u95F2\u8D44\u6E90,\u53EF\u4F5C\u4E3A\u534F\u8C03\u5668 </span>
<span class="token comment"># node.master\uFF1Atrue </span>
<span class="token comment"># node.data\uFF1Afalse </span>
<span class="token comment"># node.ingest\uFF1Afalse </span>

<span class="token comment"># 3. \u5982\u679C\u60F3\u8BA9\u8282\u70B9\u65E2\u4E0D\u79F0\u4E3A\u4E3B\u8282\u70B9,\u53C8\u4E0D\u6210\u4E3A\u6570\u636E\u8282\u70B9,\u90A3\u4E48\u53EF\u5C06\u4ED6\u4F5C\u4E3A\u6444\u53D6\u8282\u70B9,\u4ECE\u8282\u70B9\u4E2D\u83B7\u53D6\u6570\u636E,\u751F\u6210\u641C\u7D22\u7ED3\u679C\u7B49 </span>
<span class="token comment"># node.master: false </span>
<span class="token comment"># node.data: false </span>
<span class="token comment"># node.ingest: true</span>

<span class="token comment"># 4. \u4EC5\u4F5C\u4E3A\u534F\u8C03\u5668 </span>
<span class="token comment"># node.master: false </span>
<span class="token comment"># node.data: false</span>
<span class="token comment"># node.ingest: false</span>

<span class="token comment">#################################### Paths #################################### </span>
<span class="token comment"># \u6570\u636E\u5B58\u50A8\u4F4D\u7F6E(\u5355\u4E2A\u76EE\u5F55\u8BBE\u7F6E) </span>
<span class="token comment"># path.data: /var/data/elasticsearch</span>
<span class="token comment">#path.data\u5E94\u5C06\u8BE5\u8BBE\u7F6E\u914D\u7F6E\u4E3A\u5728Elasticsearch\u4E3B\u76EE\u5F55\u4E4B\u5916\u5B9A\u4F4D\u6570\u636E\u76EE\u5F55\uFF0C\u4EE5\u4FBF\u5728\u4E0D\u5220\u9664\u6570\u636E\u7684\u60C5\u51B5\u4E0B\u5220\u9664\u4E3B\u76EE\u5F55\uFF01</span>

<span class="token comment"># \u65E5\u5FD7\u6587\u4EF6\u7684\u8DEF\u5F84 </span>
<span class="token comment"># path.logs: /var/log/elasticsearch </span>

<span class="token comment">#################################### \u7F51\u7EDC\u8BBE\u7F6E #################################### </span>
<span class="token comment"># \u8282\u70B9\u5C06\u7ED1\u5B9A\u5230\u6B64\u4E3B\u673A\u540D\u6216IP\u5730\u5740</span>
<span class="token comment"># network.host: 127.0.0.1</span>

<span class="token comment"># \u7ED1\u5B9A\u5230\u4F20\u5165HTTP\u8BF7\u6C42\u7684\u7AEF\u53E3</span>
<span class="token comment"># http.port: 9200 </span>
<span class="token comment"># \u63A5\u53D7\u5355\u4E2A\u503C\u6216\u8303\u56F4\u3002\u5982\u679C\u6307\u5B9A\u4E86\u8303\u56F4\uFF0C\u5219\u8282\u70B9\u5C06\u7ED1\u5B9A\u5230\u8303\u56F4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u53EF\u7528\u7AEF\u53E3\u3002\u9ED8\u8BA4\u4E3A9200-9300</span>

<span class="token comment">#################################### TCP\u4F20\u8F93 #################################### </span>
<span class="token comment"># \u7AEF\u53E3\u7ED1\u5B9A\u8282\u70B9\u4E4B\u95F4\u7684\u901A\u4FE1\u3002</span>
<span class="token comment"># transport.tcp.port: 9300</span>
<span class="token comment"># \u63A5\u53D7\u5355\u4E2A\u503C\u6216\u8303\u56F4\u3002\u5982\u679C\u6307\u5B9A\u4E86\u8303\u56F4\uFF0C\u5219\u8282\u70B9\u5C06\u7ED1\u5B9A\u5230\u8303\u56F4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u53EF\u7528\u7AEF\u53E3\u3002\u9ED8\u8BA4\u4E3A9300-9400</span>

<span class="token comment"># transport.publish_port: 9300</span>
<span class="token comment"># \u4E0E\u6B64\u8282\u70B9\u901A\u4FE1\u65F6\uFF0C\u7FA4\u96C6\u4E2D\u5176\u4ED6\u8282\u70B9\u5E94\u4F7F\u7528\u7684\u7AEF\u53E3\u3002\u5F53\u7FA4\u96C6\u8282\u70B9\u4F4D\u4E8E\u4EE3\u7406\u6216\u9632\u706B\u5899\u4E4B\u540E\u5E76\u4E14transport.tcp.port\u4E0D\u80FD\u4ECE\u5916\u90E8\u76F4\u63A5\u5BFB\u5740\u65F6\u5F88\u6709\u7528\u3002\u9ED8\u8BA4\u4E3A\u901A\u8FC7\u5206\u914D\u7684\u5B9E\u9645\u7AEF\u53E3 transport.tcp.port</span>

<span class="token comment"># transport.bind_host: 127.0.0.1</span>
<span class="token comment"># \u5C06\u4F20\u8F93\u670D\u52A1\u7ED1\u5B9A\u5230\u7684\u4E3B\u673A\u5730\u5740\u3002\u9ED8\u8BA4\u4E3Atransport.host\uFF08\u5982\u679C\u8BBE\u7F6E\uFF09\u6216network.bind_host</span>

<span class="token comment"># transport.publish_host: 127.0.0.1 </span>
<span class="token comment"># \u53D1\u5E03\u96C6\u7FA4\u4E2D\u8981\u8FDE\u63A5\u5230\u7684\u8282\u70B9\u7684\u4E3B\u673A\u5730\u5740\u3002\u9ED8\u8BA4\u4E3Atransport.host\uFF08\u5982\u679C\u8BBE\u7F6E\uFF09\u6216network.publish_host</span>

<span class="token comment"># transport.host: 127.0.0.1 </span>
<span class="token comment"># \u7528\u4E8E\u8BBE\u7F6Etransport.bind_host\u548Ctransport.publish_host\u9ED8\u8BA4\u4E3Atransport.host\u6216network.host</span>

<span class="token comment"># transport.tcp.connect_timeout: 30s</span>
<span class="token comment"># \u5957\u63A5\u5B57\u8FDE\u63A5\u8D85\u65F6\u8BBE\u7F6E\uFF08\u4EE5\u65F6\u95F4\u8BBE\u7F6E\u683C\u5F0F\uFF09\u3002\u9ED8\u8BA4\u4E3A30s</span>

<span class="token comment"># transport.tcp.compress: false</span>
<span class="token comment"># \u8BBE\u7F6E\u662F\u5426\u538B\u7F29tcp\u4F20\u8F93\u65F6\u7684\u6570\u636E\uFF0C\u9ED8\u8BA4\u4E3Afalse,\u4E0D\u538B\u7F29\u3002</span>

<span class="token comment"># transport.ping_schedule: 5s</span>
<span class="token comment"># \u5B89\u6392\u5E38\u89C4ping\u6D88\u606F\u4EE5\u786E\u4FDD\u8FDE\u63A5\u4FDD\u6301\u6D3B\u52A8\u72B6\u6001\u3002\u9ED8\u8BA4\u4E3A5s\u5728\u4F20\u8F93\u5BA2\u6237\u7AEF\u548C-1\uFF08\u7981\u7528\uFF09</span>

<span class="token comment">#################################### \u9AD8\u7EA7\u7F51\u7EDC\u8BBE\u7F6E #################################### </span>
<span class="token comment">#\u8BE5network.host\u8BBE\u7F6E\u4E2D\u7684\u8BF4\u660E\u901A\u5E38\u4F7F\u7528\u7684\u7F51\u7EDC\u8BBE\u7F6E \u662F\u5FEB\u6377\u65B9\u5F0F\u8BBE\u5B9A\u6240\u8FF0\u7ED1\u5B9A\u7684\u4E3B\u673A\u548C\u53D1\u5E03\u4E3B\u673A\u5728\u540C\u4E00\u65F6\u95F4\u3002\u5728\u9AD8\u7EA7\u7528\u4F8B\u4E2D\uFF0C\u4F8B\u5982\u5728\u4EE3\u7406\u670D\u52A1\u5668\u540E\u8FD0\u884C\u65F6\uFF0C\u53EF\u80FD\u9700\u8981\u5C06\u8FD9\u4E9B\u8BBE\u7F6E\u8BBE\u7F6E\u4E3A\u4E0D\u540C\u7684\u503C\uFF1A</span>
<span class="token comment"># \u7ED1\u5B9A\u5230\u54EA\u4E2A\u7F51\u7EDC\u63A5\u53E3\u4EE5\u4FA6\u542C\u4F20\u5165\u8BF7\u6C42</span>
<span class="token comment"># network.bind_host: 127.0.0.1</span>
<span class="token comment"># \u70B9\u53EF\u4EE5\u7ED1\u5B9A\u5230\u591A\u4E2A\u63A5\u53E3\uFF0C\u4F8B\u5982\u4E24\u4E2A\u7F51\u5361\uFF0C\u6216\u7AD9\u70B9\u672C\u5730\u5730\u5740\u548C\u672C\u5730\u5730\u5740\u3002\u9ED8\u8BA4\u4E3A network.host\u3002</span>

<span class="token comment"># network.publish_host: 127.0.0.1</span>
<span class="token comment"># \u53D1\u5E03\u4E3B\u673A\u662F\u8282\u70B9\u901A\u544A\u96C6\u7FA4\u4E2D\u5176\u4ED6\u8282\u70B9\u7684\u5355\u4E2A\u63A5\u53E3\uFF0C\u4EE5\u4FBF\u8FD9\u4E9B\u8282\u70B9\u53EF\u4EE5\u8FDE\u63A5\u5230\u5B83\u3002\u76EE\u524D\uFF0CElasticsearch\u8282\u70B9\u53EF\u80FD\u4F1A\u7ED1\u5B9A\u5230\u591A\u4E2A\u5730\u5740\uFF0C\u4F46\u53EA\u53D1\u5E03\u4E00\u4E2A\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u201C\u6700\u4F73\u201D\u5730\u5740network.host\uFF0C\u6309IPv4 / IPv6\u5806\u6808\u9996\u9009\u9879\u6392\u5E8F\uFF0C\u7136\u540E\u6309\u53EF\u8BBF\u95EE\u6027\u6392\u5E8F\u3002\u5982\u679C\u60A8\u5C06\u5176\u8BBE\u7F6E\u4E3A network.host\u591A\u4E2A\u7ED1\u5B9A\u5730\u5740\uFF0C\u4F46\u4F9D\u8D56\u4E8E\u7279\u5B9A\u5730\u5740\u8FDB\u884C\u8282\u70B9\u95F4\u901A\u4FE1\uFF0C\u5219\u5E94\u8BE5\u660E\u786E\u8BBE\u7F6E network.publish_host\u3002transport.tcp.port</span>

<span class="token comment">#################################### \u9AD8\u7EA7TCP\u8BBE\u7F6E #################################### </span>
<span class="token comment"># \u4EFB\u4F55\u4F7F\u7528TCP\u7684\u7EC4\u4EF6\uFF08\u5982HTTP\u548C \u4F20\u8F93\u6A21\u5757\uFF09\u90FD\u5171\u4EAB\u4EE5\u4E0B\u8BBE\u7F6E\uFF1A</span>
<span class="token comment"># network.tcp.no_delay: true</span>
<span class="token comment"># \u542F\u7528\u6216\u7981\u7528TCP\u65E0\u5EF6\u8FDF \u8BBE\u7F6E\u3002\u9ED8\u8BA4\u4E3Atrue\u3002</span>

<span class="token comment"># network.tcp.keep_alive: true</span>
<span class="token comment"># \u542F\u7528\u6216\u7981\u7528TCP\u4FDD\u6301\u6D3B\u52A8\u72B6\u6001\u3002\u9ED8\u8BA4\u4E3Atrue\u3002</span>

<span class="token comment"># network.tcp.reuse_address: true</span>
<span class="token comment"># \u5730\u5740\u662F\u5426\u5E94\u8BE5\u91CD\u590D\u4F7F\u7528\u3002\u9ED8\u8BA4\u4E3Atrue\u5728\u975EWindows\u673A\u5668\u4E0A\u3002</span>

<span class="token comment"># network.tcp.send_buffer_size</span>
<span class="token comment"># TCP\u53D1\u9001\u7F13\u51B2\u533A\u7684\u5927\u5C0F\uFF08\u4EE5\u5927\u5C0F\u5355\u4F4D\u6307\u5B9A\uFF09\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u660E\u786E\u8BBE\u7F6E\u3002</span>

<span class="token comment"># network.tcp.receive_buffer_size</span>
<span class="token comment"># TCP\u63A5\u6536\u7F13\u51B2\u533A\u7684\u5927\u5C0F\uFF08\u4EE5\u5927\u5C0F\u5355\u4F4D\u6307\u5B9A\uFF09\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u660E\u786E\u8BBE\u7F6E\u3002</span>

<span class="token comment">################################### Memory #################################### </span>
<span class="token comment"># bootstrap.memory_lock: true</span>
<span class="token comment"># \u8BBE\u7F6E\u4E3Atrue\u6765\u9501\u4F4F\u5185\u5B58\u3002\u56E0\u4E3A\u5185\u5B58\u4EA4\u6362\u5230\u78C1\u76D8\u5BF9\u670D\u52A1\u5668\u6027\u80FD\u6765\u8BF4\u662F\u81F4\u547D\u7684\uFF0C\u5F53jvm\u5F00\u59CBswapping\u65F6es\u7684\u6548\u7387\u4F1A\u964D\u4F4E\uFF0C\u6240\u4EE5\u8981\u4FDD\u8BC1\u5B83\u4E0Dswap</span>

<span class="token comment">###################### \u4F7F\u7528head\u7B49\u63D2\u4EF6\u76D1\u63A7\u96C6\u7FA4\u4FE1\u606F\uFF0C\u9700\u8981\u6253\u5F00\u4EE5\u4E0B\u914D\u7F6E\u9879 ###########</span>
<span class="token comment"># http.cors.enabled: true</span>
<span class="token comment"># http.cors.allow-origin: &quot;*&quot;</span>
<span class="token comment"># http.cors.allow-credentials: true</span>

<span class="token comment">################################### Gateway ###################################</span>
<span class="token comment"># \u4EE5\u4E0B\u9759\u6001\u8BBE\u7F6E\uFF08\u5FC5\u987B\u5728\u6BCF\u4E2A\u4E3B\u8282\u70B9\u4E0A\u8BBE\u7F6E\uFF09\u63A7\u5236\u521A\u521A\u9009\u62E9\u7684\u4E3B\u670D\u52A1\u5668\u5728\u5C1D\u8BD5\u6062\u590D\u7FA4\u96C6\u72B6\u6001\u548C\u7FA4\u96C6\u6570\u636E\u4E4B\u524D\u5E94\u7B49\u5F85\u7684\u65F6\u95F4\uFF0C\u4FEE\u6539\u540E\u9700\u8981\u91CD\u542F\u751F\u6548</span>
<span class="token comment"># gateway.expected_nodes: 0</span>
<span class="token comment"># \u9884\u8BA1\u5728\u96C6\u7FA4\u4E2D\u7684\uFF08\u6570\u636E\u6216\u4E3B\u8282\u70B9\uFF09\u6570\u91CF\u3002\u53EA\u8981\u9884\u671F\u7684\u8282\u70B9\u6570\u52A0\u5165\u7FA4\u96C6\uFF0C\u6062\u590D\u672C\u5730\u788E\u7247\u5C31\u4F1A\u5F00\u59CB\u3002\u9ED8\u8BA4\u4E3A0</span>

<span class="token comment"># gateway.expected_master_nodes: 0</span>
<span class="token comment"># \u9884\u8BA1\u5C06\u5728\u7FA4\u96C6\u4E2D\u7684\u4E3B\u8282\u70B9\u7684\u6570\u91CF\u3002\u4E00\u65E6\u9884\u671F\u7684\u4E3B\u8282\u70B9\u6570\u52A0\u5165\u7FA4\u96C6\uFF0C\u5C31\u4F1A\u7ACB\u5373\u5F00\u59CB\u6062\u590D\u672C\u5730\u788E\u7247\u3002\u9ED8\u8BA4\u4E3A0</span>

<span class="token comment"># gateway.expected_data_nodes: 0</span>
<span class="token comment"># \u9884\u8BA1\u5C06\u5728\u7FA4\u96C6\u4E2D\u7684\u6570\u636E\u8282\u70B9\u7684\u6570\u91CF\u3002\u53EA\u8981\u9884\u671F\u6570\u91CF\u7684\u8282\u70B9\u52A0\u5165\u7FA4\u96C6\uFF0C\u5C31\u4F1A\u5F00\u59CB\u6062\u590D\u672C\u5730\u788E\u7247\u3002\u9ED8\u8BA4\u4E3A0</span>

<span class="token comment"># gateway.recover_after_time: 5m</span>
<span class="token comment"># \u8BBE\u7F6E\u521D\u59CB\u5316\u6062\u590D\u8FC7\u7A0B\u7684\u8D85\u65F6\u65F6\u95F4,\u8D85\u65F6\u65F6\u95F4\u4ECE\u4E0A\u4E00\u4E2A\u914D\u7F6E\u4E2D\u914D\u7F6E\u7684N\u4E2A\u8282\u70B9\u542F\u52A8\u540E\u7B97\u8D77\u3002\u9ED8\u8BA4\u4E3A5m</span>

<span class="token comment">################################## Discovery ##################################</span>
<span class="token comment">#### \u8BE5\u914D\u7F6E\u5341\u5206\u91CD\u8981,\u6CA1\u6709\u6B63\u786E\u914D\u7F6E,\u53EF\u80FD\u65E0\u6CD5\u6784\u6210\u96C6\u7FA4</span>
<span class="token comment"># \u8FD9\u662F\u4E00\u4E2A\u96C6\u7FA4\u4E2D\u7684\u4E3B\u8282\u70B9\u7684\u521D\u59CB\u5217\u8868,\u5F53\u8282\u70B9(\u4E3B\u8282\u70B9\u6216\u8005\u6570\u636E\u8282\u70B9)\u542F\u52A8\u65F6\u4F7F\u7528\u8FD9\u4E2A\u5217\u8868\u8FDB\u884C\u63A2\u6D4B</span>
<span class="token comment"># discovery.zen.ping.unicast.hosts: [&quot;host1:port&quot;, &quot;host2:port&quot;, &quot;host3:port&quot;]</span>
<span class="token comment"># \u9ED8\u8BA4\u4E3A[&quot;127.0.0.1&quot;, &quot;[::1]&quot;]</span>

<span class="token comment"># discovery.zen.ping.unicast.hosts.resolve_timeout: 5s</span>
<span class="token comment"># \u5728\u6BCF\u8F6Eping\u4E2D\u7B49\u5F85DNS\u67E5\u627E\u7684\u65F6\u95F4\u91CF\u3002\u6307\u5B9A\u4E3A \u65F6\u95F4\u5355\u4F4D\u3002\u9ED8\u8BA4\u4E3A5\u79D2</span>

<span class="token comment"># discovery.zen.ping_timeout: 3s</span>
<span class="token comment"># \u786E\u5B9A\u8282\u70B9\u5C06\u591A\u4E45\u51B3\u5B9A\u5F00\u59CB\u9009\u4E3E\u6216\u52A0\u5165\u73B0\u6709\u7684\u7FA4\u96C6\u4E4B\u524D\u7B49\u5F85,\u9ED8\u8BA43s</span>

<span class="token comment"># discovery.zen.join_timeout: </span>
<span class="token comment"># \u4E00\u65E6\u4E00\u4E2A\u8282\u70B9\u51B3\u5B9A\u52A0\u5165\u4E00\u4E2A\u73B0\u6709\u7684\u5DF2\u5F62\u6210\u7684\u96C6\u7FA4\uFF0C\u5B83\u5C06\u53D1\u9001\u4E00\u4E2A\u52A0\u5165\u8BF7\u6C42\u7ED9\u4E3B\u8BBE\u5907\uFF0C\u9ED8\u8BA4\u503C\u662Fping\u8D85\u65F6\u768420\u500D\u3002</span>

<span class="token comment"># discovery.zen.minimum_master_nodes: 2</span>
<span class="token comment"># \u4E3A\u9632\u6B62\u6570\u636E\u4E22\u5931\uFF0C\u914D\u7F6Ediscovery.zen.minimum_master_nodes\u8BBE\u7F6E\uFF08\u9ED8\u8BA4\u8BBE\u7F6E1\uFF09\u81F3\u5173\u91CD\u8981\uFF0C \u4EE5\u4FBF\u6BCF\u4E2A\u7B26\u5408\u4E3B\u8282\u70B9\u7684\u8282\u70B9\u90FD\u77E5\u9053 \u4E3A\u4E86\u5F62\u6210\u7FA4\u96C6\u800C\u5FC5\u987B\u53EF\u89C1\u7684\u4E3B\u8282\u70B9\u7684\u6700\u5C0F\u6570\u91CF\u3002</span>
<span class="token comment">#\u4E3A\u4E86\u89E3\u91CA\uFF0C\u5047\u8BBE\u60A8\u6709\u4E00\u4E2A\u7531\u4E24\u4E2A\u4E3B\u8282\u70B9\u7EC4\u6210\u7684\u96C6\u7FA4\u3002\u7F51\u7EDC\u6545\u969C\u4F1A\u4E2D\u65AD\u8FD9\u4E24\u4E2A\u8282\u70B9\u4E4B\u95F4\u7684\u901A\u4FE1\u3002\u6BCF\u4E2A\u8282\u70B9\u90FD\u4F1A\u770B\u5230\u4E00\u4E2A\u4E3B\u8282\u70B9\u7684\u8282\u70B9......\u672C\u8EAB\u3002\u968F\u7740minimum_master_nodes\u8BBE\u7F6E\u4E3A\u9ED8\u8BA41\uFF0C\u8FD9\u662F\u8DB3\u4EE5\u5F62\u6210\u4E00\u4E2A\u96C6\u7FA4\u3002\u6BCF\u4E2A\u8282\u70B9\u5C06\u81EA\u5DF1\u9009\u4E3A\u65B0\u7684\u4E3B\u4EBA\uFF08\u8BA4\u4E3A\u53E6\u4E00\u4E2A\u4E3B\u4EBA\u8D44\u683C\u7684\u8282\u70B9\u5DF2\u7ECF\u6B7B\u4EA1\uFF09\uFF0C\u7ED3\u679C\u662F\u4E24\u4E2A\u96C6\u7FA4\uFF0C\u6216\u8005\u662F\u4E00\u4E2A\u5206\u88C2\u7684\u5927\u8111\u3002\u76F4\u5230\u4E00\u4E2A\u8282\u70B9\u91CD\u65B0\u542F\u52A8\u540E\uFF0C\u8FD9\u4E24\u4E2A\u8282\u70B9\u624D\u4F1A\u91CD\u65B0\u52A0\u5165\u3002\u4EFB\u4F55\u5DF2\u5199\u5165\u91CD\u65B0\u542F\u52A8\u8282\u70B9\u7684\u6570\u636E\u90FD\u5C06\u4E22\u5931\u3002</span>
<span class="token comment">#\u73B0\u5728\u60F3\u8C61\u4E00\u4E0B\uFF0C\u60A8\u6709\u4E00\u4E2A\u5177\u6709\u4E09\u4E2A\u4E3B\u8282\u70B9\u8D44\u683C\u7684\u8282\u70B9\u7684\u96C6\u7FA4\uFF0C\u5E76 minimum_master_nodes\u8BBE\u7F6E\u4E3A2\u3002\u5982\u679C\u7F51\u7EDC\u62C6\u5206\u5C06\u4E00\u4E2A\u8282\u70B9\u4E0E\u5176\u4ED6\u4E24\u4E2A\u8282\u70B9\u5206\u5F00\uFF0C\u5219\u5177\u6709\u4E00\u4E2A\u8282\u70B9\u7684\u4E00\u4FA7\u4E0D\u80FD\u770B\u5230\u8DB3\u591F\u7684\u4E3B\u8282\u70B9\uFF0C\u5E76\u4E14\u4F1A\u610F\u8BC6\u5230\u5B83\u4E0D\u80FD\u5C06\u81EA\u5DF1\u9009\u4E3A\u4E3B\u8282\u70B9\u3002\u5177\u6709\u4E24\u4E2A\u8282\u70B9\u7684\u4E00\u4FA7\u5C06\u9009\u62E9\u4E00\u4E2A\u65B0\u7684\u4E3B\u63A7\uFF08\u5982\u679C\u9700\u8981\uFF09\u5E76\u7EE7\u7EED\u6B63\u5E38\u5DE5\u4F5C\u3002\u4E00\u65E6\u7F51\u7EDC\u62C6\u5206\u89E3\u51B3\uFF0C\u5355\u4E2A\u8282\u70B9\u5C06\u91CD\u65B0\u52A0\u5165\u7FA4\u96C6\u5E76\u518D\u6B21\u5F00\u59CB\u63D0\u4F9B\u670D\u52A1\u8BF7\u6C42\u3002</span>
<span class="token comment">#\u8BE5\u8BBE\u7F6E\u5E94\u8BE5\u8BBE\u7F6E\u4E3A\u7B26\u5408\u4E3B\u6570\u636E\u8282\u70B9\u7684\u6CD5\u5B9A\u6570\u91CF\uFF1A\uFF08master_eligible_nodes / 2\uFF09+ 1\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5982\u679C\u6709\u4E09\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u8282\u70B9\uFF0C\u5219\u6700\u5C0F\u4E3B\u8282\u70B9\u5E94\u8BBE\u7F6E\u4E3A(3 / 2) + 1\u62162\u3002</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u8BCD\u5668" tabindex="-1"><a class="header-anchor" href="#\u5206\u8BCD\u5668" aria-hidden="true">#</a> \u5206\u8BCD\u5668</h2><h3 id="\u67E5\u770B\u5206\u8BCD\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5206\u8BCD\u7ED3\u679C" aria-hidden="true">#</a> \u67E5\u770B\u5206\u8BCD\u7ED3\u679C</h3><p>GET _analyze?pretty</p><h1 id="es\u7684\u5E38\u7528\u5206\u8BCD\u5668" tabindex="-1"><a class="header-anchor" href="#es\u7684\u5E38\u7528\u5206\u8BCD\u5668" aria-hidden="true">#</a> es\u7684\u5E38\u7528\u5206\u8BCD\u5668</h1><p>standard \u8FC7\u6EE4\u6807\u70B9\u7B26\u53F7 simple \u8FC7\u6EE4\u6570\u5B57\u548C\u6807\u70B9\u7B26\u53F7 whitespace \u4E0D\u8FC7\u6EE4\uFF0C\u6309\u7167\u7A7A\u683C\u5206\u9694 stop \u8FC7\u6EE4\u505C\u987F\u5355\u8BCD\u53CA\u6807\u70B9\u7B26\u53F7\uFF0C\u4F8B\u5982is are\u7B49\u7B49 keyword \u89C6\u4E3A\u4E00\u4E2A\u6574\u4F53\u4E0D\u8FDB\u884C\u4EFB\u4F55\u5904\u7406 path_hierarchy \u8DEF\u5F84\u5C42\u6B21\u5206\u8BCD\u5668 pattern \u5B83\u63D0\u4F9B\u4E86\u57FA\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u5C06\u6587\u672C\u5206\u8BCD language \u5B83\u63D0\u4F9B\u4E86\u4E00\u7EC4\u8BED\u8A00\u7684\u5206\u8BCD,\u65E8\u5728\u5904\u7406\u7279\u5B9A\u8BED\u8A00 IKAnalyzer: \u514D\u8D39\u5F00\u6E90\u7684java\u5206\u8BCD\u5668,\u76EE\u524D\u6BD4\u8F83\u6D41\u884C\u7684\u4E2D\u6587\u5206\u8BCD\u5668\u4E4B\u4E00,\u7B80\u5355,\u7A33\u5B9A,\u60F3\u8981\u7279\u522B\u597D\u7684\u6548\u679C,\u9700\u8981\u81EA\u884C\u7EF4\u62A4\u8BCD\u5E93,\u652F\u6301\u81EA\u5B9A\u4E49\u8BCD\u5178 #ik\u63D2\u4EF6\u63D2\u4EF6\u63D0\u4F9B\u7684\u5206\u8BCD\u5668 ik_smart ik_max_word \u7ED3\u5DF4\u5206\u8BCD: \u5F00\u6E90\u7684python\u5206\u8BCD\u5668,github\u6709\u5BF9\u5E94\u7684java\u7248\u672C,\u6709\u81EA\u884C\u8BC6\u522B\u65B0\u8BCD\u7684\u529F\u80FD,\u652F\u6301\u81EA\u5B9A\u4E49\u8BCD\u5178 Ansj\u4E2D\u6587\u5206\u8BCD: \u57FA\u4E8En-Gram+CRF+HMM\u7684\u4E2D\u6587\u5206\u8BCD\u7684java\u5B9E\u73B0,\u514D\u8D39\u5F00\u6E90,\u652F\u6301\u5E94\u7528\u81EA\u7136\u8BED\u8A00\u5904\u7406 hanlp: \u514D\u8D39\u5F00\u6E90,\u56FD\u4EBA\u81EA\u7136\u5904\u7406\u8BED\u8A00\u725B\u4EBA\u65E0\u79C1\u98CE\u9669\u7684</p>`,15),c=[l];function t(m,d){return s(),e("div",null,c)}const r=n(i,[["render",t],["__file","elasticsearch.html.vue"]]);export{r as default};