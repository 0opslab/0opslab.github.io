import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="es\u7684\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#es\u7684\u76D1\u63A7" aria-hidden="true">#</a> ES\u7684\u76D1\u63A7</h3><p>ES\u542C\u8FC7\u4E86\u5F88\u591A\u65B9\u5F0F\u7684\u76D1\u63A7\u67E5\u770B\uFF0C\u5176\u4E2D\u8981\u5C5Ecat api\u7684\u65B9\u5F0F\u6700\u4E3A\u7B80\u5355\u5B9E\u7528\uFF0C\u76F4\u63A5\u8BBF\u95EE\u5BF9\u5E94\u5730\u5740\u5373\u53EF\u3002\u53E6\u5916\u6240\u6709\u7684catAPI\u90FD\u6709\u5982\u4E0B\u51E0\u4E2A\u901A\u7528\u53C2\u6570:</p><p>Verbose GET /_cat/XXX/?v \u5F00\u542F\u8BE6\u7EC6\u8F93\u51FA</p><p>Help GET /cat/XXX/?help \u8F93\u51FA\u53EF\u7528\u7684\u5217</p><p>Headers GET /_cat/XXX/?h=column1,column2 \u6307\u5B9A\u8F93\u51FA\u7684\u5217 Sort GET /_cat/XXX/?v&amp;s=column1,column2:desc,column3 \u6307\u5B9A\u8F93\u51FA\u7684\u5217\u8FDB\u884C\u6392\u5E8F\uFF0C\u9ED8\u8BA4\u6309\u7167\u5347\u5E8F\u6392\u5E8F Format GET /_cat/XXX?format=json \u6307\u5B9A\u54CD\u5E94\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F\uFF1Atext\uFF08\u9ED8\u8BA4\uFF09,json,yaml,smile,cbor</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> http://10.232.14.216:9200/_cat
<span class="token operator">=</span>^.^<span class="token operator">=</span>
<span class="token comment"># \u63D0\u4F9B\u4E86\u6BCF\u4E2A\u6570\u636E\u8282\u70B9\u5206\u914D\u4E86\u591A\u5C11\u5206\u7247\u548C\u4F7F\u7528\u4E86\u591A\u5C11\u78C1\u76D8\u7A7A\u95F4\u7684\u5FEB\u7167</span>
/_cat/allocation
<span class="token comment"># \u663E\u793A\u5206\u7247\u72B6\u6001</span>
/_cat/shards
/_cat/shards/<span class="token punctuation">{</span>index<span class="token punctuation">}</span>
<span class="token comment"># \u663E\u793AID\u3001IP\u5730\u5740\u3001\u4E3B\u673A\u540D\u548C\u8282\u70B9\u540D</span>
/_cat/master
<span class="token comment"># \u663E\u793A\u8282\u70B9\u4FE1\u606F</span>
/_cat/nodes
/_cat/tasks
<span class="token comment"># \u67E5\u770B\u7D22\u5F15\u72B6\u6001\uFF0C\u5982\u4E3B\u5206\u7247\u6570\u548C\u526F\u672C\u6570\u3001\u6587\u6863\u6570\u3001\u5220\u9664\u6587\u6863\u6570\uFF0C\u5927\u5C0F\u7B49\u7B49</span>
/_cat/indices
/_cat/indices/<span class="token punctuation">{</span>index<span class="token punctuation">}</span>
<span class="token comment"># \u663E\u793A\u7D22\u5F15\u5206\u7247\u6BB5\u6709\u5173\u7684\u4F4E\u7EA7\u522B\u4FE1\u606F</span>
/_cat/segments
/_cat/segments/<span class="token punctuation">{</span>index<span class="token punctuation">}</span>
<span class="token comment"># \u5FEB\u901F\u67E5\u770B\u6574\u4E2A\u96C6\u7FA4\u7684\u6587\u6863\u6570\u6216\u5355\u4E2A\u7D22\u5F15</span>
/_cat/count
/_cat/count/<span class="token punctuation">{</span>index<span class="token punctuation">}</span>
<span class="token comment"># \u663E\u793A\u6B63\u5728\u8FDB\u884C\u7684\u548C\u4EE5\u524D\u5B8C\u6210\u7684\u7D22\u5F15\u5206\u7247\u6062\u590D\u72B6\u6001\u3002\u6062\u590D\u4E8B\u4EF6\u968F\u65F6\u53EF\u80FD\u53D1\u751F\uFF0C\u5728\u96C6\u7FA4\u4E2D\u4E00\u4E2A\u7D22\u5F15\u5206\u7247\u8F6C\u79FB\u5230\u5176\u5B83\u8282\u70B9\u4E0A\u3002\u53EF\u80FD\u53D1\u751F\u5728\u5FEB\u7167\u6062\u590D\u3001\u6539\u53D8\u526F\u672C\u7EA7\u522B\u3001\u8282\u70B9\u6545\u969C\u6216\u8005\u542F\u52A8\u8282\u70B9\u3002</span>
/_cat/recovery
/_cat/recovery/<span class="token punctuation">{</span>index<span class="token punctuation">}</span>
<span class="token comment"># \u67E5\u770B\u96C6\u7FA4\u72B6\u6001\u3002\u6709\u4E00\u4E2Ats\u9009\u9879\u7981\u7528\u65F6\u95F4\u6233</span>
/_cat/health
<span class="token comment"># \u4E0E /_cluster/pending_tasks\u63D0\u4F9B\u76F8\u540C\u7684\u4FE1\u606F\uFF0C\u4EE5\u8868\u683C\u5316\u663E\u793A</span>
/_cat/pending_tasks
<span class="token comment"># \u663E\u793A\u76EE\u524D\u914D\u7F6E\u7684\u522B\u540D\u7D22\u5F15\uFF0C\u5305\u62EC\u8FC7\u6EE4\u548C\u8DEF\u7531\u76F8\u5173\u7684\u4FE1\u606F</span>
/_cat/aliases
/_cat/aliases/<span class="token punctuation">{</span>alias<span class="token punctuation">}</span>
<span class="token comment"># \u663E\u793A\u7EBF\u7A0B\u6C60\u72B6\u6001\u3002\u5305\u62EC merge\uFF0Coptimize\uFF0Cflush\uFF0Crefresh \u7B49\u5176\u4ED6\u7EBF\u7A0B\u6C60\u72B6\u6001\uFF0C\u53EF\u901A\u8FC7 ?h \u53C2\u6570\u6307\u660E\u83B7\u53D6</span>
/_cat/thread_pool
/_cat/thread_pool/<span class="token punctuation">{</span>thread_pools<span class="token punctuation">}</span>
<span class="token comment"># \u663E\u793A\u8282\u70B9\u63D2\u4EF6\u4FE1\u606F</span>
/_cat/plugins
<span class="token comment"># \u663E\u793A\u96C6\u7FA4\u4E2D\u6BCF\u4E2A\u6570\u636E\u8282\u70B9fielddata\u5F53\u524D\u6240\u4F7F\u7528\u7684heap\u5185\u5B58\u5927\u5C0F</span>
/_cat/fielddata
/_cat/fielddata/<span class="token punctuation">{</span>fields<span class="token punctuation">}</span>
<span class="token comment"># \u663E\u793A\u81EA\u5B9A\u4E49\u8282\u70B9\u5C5E\u6027\uFF0C\u8282\u70B9\u540D\u3001\u4E3B\u673A\u540D\u3001IP\u5730\u5740\u3001\u5C5E\u6027\u540D\u3001\u5C5E\u6027\u503C\u3002\u5C5E\u6027\u540D\u548C\u5C5E\u6027\u503C\u5C31\u662F\u4F60\u5B9A\u4E49\u7684</span>
/_cat/nodeattrs
<span class="token comment"># repositories \u53EF\u4EE5\u663E\u793A\u96C6\u7FA4\u4E2D\u7684\u5FEB\u7167\u7684\u8D44\u6599\u5E93</span>
/_cat/repositories
<span class="token comment"># \u8F93\u51FA\u5C5E\u4E8E\u6307\u5B9A\u4ED3\u5E93\u7684\u5FEB\u7167\u4FE1\u606F</span>
/_cat/snapshots/<span class="token punctuation">{</span>repository<span class="token punctuation">}</span>
<span class="token comment"># \u8F93\u51FA\u5F53\u524D\u6B63\u5728\u5B58\u5728\u7684\u6A21\u677F\u4FE1\u606F</span>
/_cat/templates

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5904\u7406cat api\u5916\u8FD8\u6709\u51E0\u4E2A\u63A5\u53E3\u5B9E\u7528\u7684\u573A\u666F\u4E5F\u5F88\u591A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u987E\u540D\u601D\u4E49\u5C31\u662F\u770B\u96C6\u7FA4\u5185\u7684\u6BCF\u4E00\u4E2A\u8282\u70B9\u7684\u72B6\u6001\u4FE1\u606F\uFF0C\u5728\u6BCF\u4E2A\u8282\u70B9\u4E0A\u4F1A\u6709\u4E0D\u540C\u7D22\u5F15\u7684\u4E00\u4E9B\u5206\u7247\uFF0C\u8FD9\u4E2A\u8282\u70B9\u6240\u6D89\u53CA\u5230\u7684\u5206\u7247\u6BCF\u4E00\u4E2A\u5355\u72EC\u7684\u4FE1\u606F\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2AAPI\u89C2\u5BDF\u5230\u7684</span>
/_nodes/stats 
<span class="token comment"># Cluster Stats API\uFF0C\u5C31\u662F\u6574\u4E2A\u96C6\u7FA4\u7684\u6BD4\u8F83\u9009\u4E3E\u6027\u7684\u4FE1\u606F\uFF0C\u901A\u8FC7\u8FD9\u4E2AAPI\u5305\u62EC\u63D2\u4EF6\u8282\u70B9\u8F93\u5165\uFF0C\u8FD8\u6709\u4E00\u4E9B\u5404\u4E2A\u8282\u70B9\u7684\u7EDF\u8BA1\u4FE1\u606F\u7684\u76F8\u52A0\u7ED3\u679C\uFF0C\u90FD\u53EF\u4EE5\u5728\u8FD9\u4E2AAPI\u4E2D\u53EF\u4EE5\u770B\u5230</span>
/_cluster/stats
<span class="token comment"># Index_name Stats API\uFF0C\u5C31\u662F\u521A\u624D\u63D0\u5230\u7EF4\u5EA6\u7D22\u5F15\u7EA7\u522B\u7684\u3002\u8FD9\u4E2AAPI\u7684\u8C03\u7528\u662F\u901A\u8FC7\u4E00\u4E2Aindex_name\u659C\u6760\uFF0C\u662F\u6307\u5B9A\u6BCF\u4E00\u4E2A\u7D22\u5F15\u90FD\u53EF\u4EE5\u53BB\u8C03\u7528\u8FD9\u4E2A\u63A5\u53E3\uFF0C\u53BB\u89C2\u5BDF\u8FD9\u4E2A\u7D22\u5F15\u7684\u76F8\u5173\u7EDF\u8BA1\u4FE1\u606F\u3002\u90E8\u5206\u6307\u6807\u548CNode Stats API\u76F8\u5339\u914D</span>
/index_name/_stats
<span class="token comment"># Cluster Health API\uFF0C\u8FD9\u662F\u5927\u5BB6\u975E\u5E38\u4E86\u89E3\u7684\uFF0CES\u7EFF\u3001\u9EC4\u3001\u7EA2\u4E09\u4E2A\u72B6\u6001\u5C31\u662F\u901A\u8FC7\u8FD9\u4E2A\u63A5\u53E3\u6765\u62FF\u5230\u3002\u8FD9\u4E2A\u63A5\u53E3\u5305\u542B\u6574\u4E2A\u96C6\u7FA4\u7684\u5206\u7247\u4FE1\u606F\u548C\u76D1\u63A7\u72B6\u6001\uFF0C\u8FD9\u4E2A\u76D1\u63A7\u5927\u5BB6\u5E94\u8BE5\u4F1A\u7528\u5F97\u975E\u5E38\u5E7F\u6CDB</span>
/_cluster/health
<span class="token comment"># Pending Tasks API\uFF0CES\u91CC\u9762\u6709\u5F88\u591A\u7684\u5F02\u6B65\u4EFB\u52A1\uFF0C\u5229\u7528\u8FD9\u4E2A\u63A5\u53E3\u53EF\u4EE5\u8FDB\u884C\u5168\u5C40\u6027\u89C2\u5BDF\u3002\u6574\u4E2A\u96C6\u7FA4\u5F53\u4E2D\u6B63\u5728\u8DD1\u7684\u4E00\u4E9B\u4EFB\u52A1\uFF0C\u8FD9\u4E9B\u4EFB\u52A1\u5305\u62EC\u7D22\u5F15\u521B\u5EFA\u4EFB\u52A1\u6216\u8005\u662Fshard\u5747\u8861\u4EFB\u52A1\u7B49</span>
/_cluster/pending_tasks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u96C6\u7FA4\u7684\u5065\u5EB7,\u96C6\u7FA4\u7684\u5065\u5EB7\u503C\u4E00\u822C\u6709\u5982\u4E0B\u4E09\u4E2A\u72B6\u6001</p><p>green \u6240\u6709\u4E3B\u8981\u5206\u7247\u548C\u590D\u5236\u5206\u7247\u90FD\u53EF\u7528</p><p>yellow \u6240\u6709\u4E3B\u8981\u5206\u7247\u53EF\u7528\uFF0C\u4F46\u4E0D\u662F\u6240\u6709\u590D\u5236\u5206\u7247\u90FD\u53EF\u7528\u3002\u9AD8\u53EF\u7528\u4E0D\u7262\u9760\u3002\u4F46\u4E0D\u4F1A\u4E22\u5931\u6570\u636E</p><p>red \u4E0D\u662F\u6240\u6709\u7684\u4E3B\u8981\u5206\u7247\u90FD\u53EF\u7528\u3002\u6570\u636E\u6709\u6781\u5927\u98CE\u9669\u3002\u6570\u636E\u4E0D\u80FD\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET _cluster/health

<span class="token punctuation">{</span>

  <span class="token string">&quot;cluster_name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;elasticsearch&quot;</span>,

  <span class="token string">&quot;status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;yellow&quot;</span>,

  <span class="token string">&quot;timed_out&quot;</span><span class="token builtin class-name">:</span> false,

  <span class="token string">&quot;number_of_nodes&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,<span class="token comment">##\u96C6\u7FA4\u8282\u70B9\u6570</span>

  <span class="token string">&quot;number_of_data_nodes&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,<span class="token comment">##\u6570\u636E\u8282\u70B9\u6570\u91CF</span>

  <span class="token string">&quot;active_primary_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token number">156</span>,<span class="token comment">##\u4E3B\u5206\u7247\u6570\u91CF</span>

  <span class="token string">&quot;active_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token number">156</span>,<span class="token comment">##\u53EF\u7528\u7684\u5206\u7247\u6570\u91CF</span>

  <span class="token string">&quot;relocating_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,<span class="token comment">##\u6B63\u5728\u91CD\u65B0\u5206\u914D\u7684\u5206\u7247\u6570\u91CF\uFF0C\u5728\u65B0\u52A0\u6216\u8005\u51CF\u5C11\u8282\u70B9\u7684\u65F6\u5019\u4F1A\u53D1\u751F</span>

  <span class="token string">&quot;initializing_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,<span class="token comment">##\u6B63\u5728\u521D\u59CB\u5316\u7684\u5206\u7247\u6570\u91CF\uFF0C\u65B0\u5EFA\u7D22\u5F15\u6216\u8005\u521A\u542F\u52A8\u4F1A\u5B58\u5728\uFF0C\u65F6\u95F4\u5F88\u77ED</span>

  <span class="token string">&quot;unassigned_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token number">156</span>, <span class="token comment">##\u6CA1\u6709\u5206\u914D\u7684\u5206\u7247\uFF0C\u4E00\u822C\u5C31\u662F\u90A3\u4E9B\u540D\u5B58\u5B9E\u4E0D\u5B58\u7684\u526F\u672C\u5206\u7247\u3002</span>

  <span class="token string">&quot;delayed_unassigned_shards&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,

  <span class="token string">&quot;number_of_pending_tasks&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,

  <span class="token string">&quot;number_of_in_flight_fetch&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,

  <span class="token string">&quot;task_max_waiting_in_queue_millis&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,

  <span class="token string">&quot;active_shards_percent_as_number&quot;</span><span class="token builtin class-name">:</span> <span class="token number">50</span>

<span class="token punctuation">}</span>

<span class="token comment">##\u7D22\u5F15\u7EA7\u522B\u96C6\u7FA4\u72B6\u6001\uFF0C\u53EF\u4EE5\u7EC6\u81F4\u67E5\u770B\u5230\u5E95\u662F\u54EA\u4E2A\u7D22\u5F15\u5F15\u8D77\u96C6\u7FA4\u7684\u6545\u969C\u7684</span>

GET _cluster/health?level<span class="token operator">=</span>indices

<span class="token comment">##\u5206\u7247\u7EA7\u522B\u96C6\u7FA4\u72B6\u6001\uFF0C\u53EF\u4EE5\u7EC6\u81F4\u67E5\u770B\u5230\u5E95\u662F\u54EA\u4E2A\u5206\u7247\u5F15\u8D77\u7684\u96C6\u7FA4\u6545\u969C</span>

GET _cluster/health?level<span class="token operator">=</span>shards

<span class="token comment">##\u963B\u585E\u67E5\u770B\u96C6\u7FA4\u72B6\u6001\uFF0C\u9002\u7528\u4E8E\u81EA\u52A8\u5316\u811A\u672C\u3002\u5F53\u72B6\u6001\u53D8\u4E3A\u6307\u5B9A\u72B6\u6001\u6216\u8005\u66F4\u597D\u5C31\u8FD4\u56DE\u7EE7\u7EED\u6267\u884C\u3002</span>

GET _cluster/health?wait_for_status<span class="token operator">=</span>yellow

 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),t=[l];function c(d,p){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","elasticsearch-monitors.html.vue"]]);export{u as default};
