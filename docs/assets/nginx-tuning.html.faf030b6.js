import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<p>Nginx\u7684\u4E3B\u8981\u53EF\u4EE5\u4ECE\u5982\u4E0B\u51E0\u4E2A\u65B9\u9762\u5165\u624B\uFF1A</p><ul><li>\u5347\u7EA7\u670D\u52A1\u5668\u914D\u7F6E\uFF0C\u6BD4\u5982\u4E0ASSD\u786C\u76D8\uFF0C\u5347\u7EA7\u5E26\u5BBD</li><li>\u6839\u636E\u4E1A\u52A1\u4F18\u5316\u670D\u52A1\u5668\u7684\u5185\u6838\u53C2\u6570</li><li>\u6839\u636E\u4E1A\u52A1\u4F18\u5316Nginx\u7684\u914D\u7F6E</li><li>\u4F18\u5316\u540E\u53F0\u670D\u52A1</li></ul><p><em>\u5347\u7EA7\u670D\u52A1\u5668\u914D\u7F6E</em></p><p>SSD\u786C\u76D8\u662F\u4E00\u4E2A\u5FEB\u901F\u5B58\u50A8\u88C5\u7F6E\uFF0C\u6CA1\u6709\u5373\u7CFB\u8FD0\u52A8\u90E8\u4EF6\uFF0C\u56E0\u6B64\u5176\u8BBF\u95EE\u901F\u5EA6\u76F8\u5BF9\u673A\u68B0\u786C\u76D8\u662F\u65E0\u5EF6\u8FDF\u7684\uFF0C\u53E6\u5916\u5176\u51E0\u4E4E\u65E0\u70ED\u91CF\u4EA7\u751F\uFF0C\u66F4\u52A0\u7701\u7535\uFF0C\u56E0\u6B64\u76F4\u63A5\u4E0ASSD\u786C\u76D8\u662F\u76F8\u5F53\u5212\u7B97\u7684\u9009\u62E9\u3002\u8FD9\u6BD4\u505A\u5F88\u591A\u4F18\u5316\u914D\u7F6E\u6765\u7684\u66F4\u52A0\u76F4\u63A5\u3002</p><p><em>\u4F18\u5316\u670D\u52A1\u5668\u5185\u6838\u53C2\u6570</em></p><p>\u4EE5\u4E0B\u64CD\u4F5C\u9664\u975E\u4F60\u77E5\u9053\u4F60\u5728\u505A\u4EC0\u4E48\uFF0C\u5426\u5219\u8BF7\u52FF\u4E71\u4FEE\u6539\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u67E5\u770B\u5404\u4E2A\u72B6\u6001\u7684\u7F51\u7EDC\u8FDE\u63A5\u8BF7\u6C42\u6570
$ <span class="token function">netstat</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/^tcp/ {++state[$NF]} END {for(key in state) print key,&quot;\\t&quot;,state[key]}&#39;</span>

// \u8C03\u6574\u540C\u65F6\u6253\u5F00\u6587\u4EF6\u7684\u6570\u91CF
<span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span> <span class="token number">20480</span>

// linux\u7684/etc/sysctl.conf \u66F4\u6539\u5185\u6838\u53C2\u6570,\u5E76\u4F7F\u7528sysctl -p\u547D\u4EE4\u4F7F\u914D\u7F6E\u7ACB\u5373\u751F\u6548
// \u8868\u793A\u5355\u4E2A\u8FDB\u573A\u6700\u5927\u53EF\u4EE5\u6253\u5F00\u7684\u53E5\u67C4\u4E66
fs.file-max <span class="token operator">=</span> <span class="token number">999999</span>
// \u5141\u8BB8\u5C06TIME_WAIT\u72B6\u6001\u7684socket\u91CD\u65B0\u7528\u4E8E\u65B0\u7684TCP\u8FDE\u63A5
net.ipv4.tcp_tw_reuse <span class="token operator">=</span> <span class="token number">1</span>
// \u5F53keepalive\u542F\u52A8\u65F6,TCP\u53D1\u9001keepalive\u6D88\u606F\u7684\u9891\u5EA6\uFF0C\u5355\u4F4D\u4E3A\u79D2,\u8BBE\u7F6E\u7684\u66F4\u65B0\u80FD\u52A0\u5FEB\u6E05\u7406\u65E0\u6548\u7684\u8FDE\u63A5
net.ipv4.tcp_keepalive_time <span class="token operator">=</span> <span class="token number">600</span>
// \u5F53\u670D\u52A1\u5668\u4E3B\u52A8\u5173\u95ED\u94FE\u63A5\u65F6\uFF0Csocket\u4FDD\u6301\u5728FIN_WAIT_2\u72B6\u6001\u7684\u6700\u5927\u65F6\u95F4
net.ipv4.tcp_fin_timeout <span class="token operator">=</span> <span class="token number">30</span> 

// \u8FD9\u4E2A\u53C2\u6570\u8868\u793A\u64CD\u4F5C\u7CFB\u7EDF\u5141\u8BB8TIME_WAIT\u5957\u63A5\u5B57\u6570\u91CF\u7684\u6700\u5927\u503C\uFF0C\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u6570\u5B57\uFF0C
//TIME_WAIT\u5957\u63A5\u5B57\u5C06\u7ACB\u523B\u88AB\u6E05\u9664\u5E76\u6253\u5370\u8B66\u544A\u4FE1\u606F\u3002\u8BE5\u503C\u4E0D\u80FD\u8FC7\u5927
net.ipv4.tcp_max_tw_buckets <span class="token operator">=</span> <span class="token number">5000</span>

// \u5B9A\u4E49UDP\u548CTCP\u8FDE\u63A5\u7684\u672C\u5730\u7AEF\u53E3\u7684\u53D6\u503C\u8303\u56F4
net.ipv4.ip_local_port_range <span class="token operator">=</span> <span class="token number">1024</span> <span class="token number">65000</span> 

//\u5B9A\u4E49\u4E86TCP\u63A5\u53D7\u7F13\u5B58\u7684\u6700\u5C0F\u503C\u3001\u9ED8\u8BA4\u503C\u3001\u6700\u5927\u503C
net.ipv4.tcp_rmem <span class="token operator">=</span> <span class="token number">10240</span> <span class="token number">87380</span> <span class="token number">12582912</span>

//\u5B9A\u4E49TCP\u53D1\u9001\u7F13\u5B58\u7684\u6700\u5C0F\u503C\u3001\u9ED8\u8BA4\u503C\u3001\u6700\u5927\u503C\u3002
net.ipv4.tcp_wmem <span class="token operator">=</span> <span class="token number">10240</span> <span class="token number">87380</span> <span class="token number">12582912</span>

//\u5F53\u7F51\u5361\u63A5\u6536\u6570\u636E\u5305\u7684\u901F\u5EA6\u5927\u4E8E\u5185\u6838\u5904\u7406\u901F\u5EA6\u65F6\uFF0C\u4F1A\u6709\u4E00\u4E2A\u5217\u961F\u4FDD\u5B58\u8FD9\u4E9B\u6570\u636E\u5305\u3002\u8FD9\u4E2A\u53C2\u6570\u8868\u793A\u8BE5\u5217\u961F\u7684\u6700\u5927\u503C
net.core.netdev_max_backlog <span class="token operator">=</span> <span class="token number">8096</span> 

// \u8868\u793A\u5185\u6838\u5957\u63A5\u5B57\u63A5\u53D7\u7F13\u5B58\u533A\u9ED8\u8BA4\u5927\u5C0F
net.core.rmem_default <span class="token operator">=</span> <span class="token number">6291456</span>

//\u8868\u793A\u5185\u6838\u5957\u63A5\u5B57\u53D1\u9001\u7F13\u5B58\u533A\u9ED8\u8BA4\u5927\u5C0F
net.core.wmem_default <span class="token operator">=</span> <span class="token number">6291456</span>  

//\u8868\u793A\u5185\u6838\u5957\u63A5\u5B57\u63A5\u53D7\u7F13\u5B58\u533A\u6700\u5927\u5927\u5C0F\u3002
net.core.rmem_max <span class="token operator">=</span> <span class="token number">12582912</span>

//\u8868\u793A\u5185\u6838\u5957\u63A5\u5B57\u53D1\u9001\u7F13\u5B58\u533A\u6700\u5927\u5927\u5C0F
net.core.wmem_max <span class="token operator">=</span> <span class="token number">12582912</span>

//\u4E0E\u6027\u80FD\u65E0\u5173\u3002\u7528\u4E8E\u89E3\u51B3TCP\u7684SYN\u653B\u51FB\u3002
net.ipv4.tcp_syncookies <span class="token operator">=</span> <span class="token number">1</span>

//\u8FD9\u4E2A\u53C2\u6570\u8868\u793ATCP\u4E09\u6B21\u63E1\u624B\u5EFA\u7ACB\u9636\u6BB5\u63A5\u53D7SYN\u8BF7\u6C42\u5217\u961F\u7684\u6700\u5927\u957F\u5EA6\uFF0C\u9ED8\u8BA41024\uFF0C
//\u5C06\u5176\u8BBE\u7F6E\u7684\u5927\u4E00\u4E9B\u53EF\u4EE5\u4F7F\u51FA\u73B0Nginx\u7E41\u5FD9\u6765\u4E0D\u53CAaccept\u65B0\u8FDE\u63A5\u7684\u60C5\u51B5\u65F6\uFF0CLinux\u4E0D\u81F3\u4E8E\u4E22\u5931\u5BA2\u6237\u7AEF\u53D1\u8D77\u7684\u94FE\u63A5\u8BF7\u6C42\u3002
net.ipv4.tcp_max_syn_backlog <span class="token operator">=</span> <span class="token number">262144</span>

//\u8FD9\u4E2A\u53C2\u6570\u7528\u4E8E\u8BBE\u7F6E\u542F\u7528timewait\u5FEB\u901F\u56DE\u6536
net.ipv4.tcp_tw_recycle <span class="token operator">=</span> <span class="token number">1</span>

// \u9009\u9879\u9ED8\u8BA4\u503C\u662F128\uFF0C\u8FD9\u4E2A\u53C2\u6570\u7528\u4E8E\u8C03\u8282\u7CFB\u7EDF\u540C\u65F6\u53D1\u8D77\u7684TCP\u8FDE\u63A5\u6570\uFF0C\u5728\u9AD8\u5E76\u53D1\u7684\u8BF7\u6C42\u4E2D\uFF0C
// \u9ED8\u8BA4\u7684\u503C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u94FE\u63A5\u8D85\u65F6\u6216\u8005\u91CD\u4F20\uFF0C\u56E0\u6B64\u9700\u8981\u7ED3\u5408\u9AD8\u5E76\u53D1\u8BF7\u6C42\u6570\u6765\u8C03\u8282\u6B64\u503C\u3002
<span class="token assign-left variable">net.core.somaxconn</span><span class="token operator">=</span><span class="token number">262114</span> 


//\u9009\u9879\u7528\u4E8E\u8BBE\u5B9A\u7CFB\u7EDF\u4E2D\u6700\u591A\u6709\u591A\u5C11\u4E2ATCP\u5957\u63A5\u5B57\u4E0D\u88AB\u5173\u8054\u5230\u4EFB\u4F55\u4E00\u4E2A\u7528\u6237\u6587\u4EF6\u53E5\u67C4\u4E0A\u3002
//\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u6570\u5B57\uFF0C\u5B64\u7ACB\u94FE\u63A5\u5C06\u7ACB\u5373\u88AB\u590D\u4F4D\u5E76\u8F93\u51FA\u8B66\u544A\u4FE1\u606F\u3002
<span class="token assign-left variable">net.ipv4.tcp_max_orphans</span><span class="token operator">=</span><span class="token number">262114</span> 


//\u5173\u4E8E\u5177\u4F53\u7684\u5185\u6838\u53C2\u6570\u8BF7\u67E5\u9605\u76F8\u5173\u7684\u7CFB\u7EDF \u53EF\u4EE5\u4F7F\u7528sysctl -a\u663E\u793A\u5F53\u524D\u5168\u90E8\u7684\u53C2\u6570

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx\u7684\u6027\u80FD\u662F\u6CA1\u7684\u8BF4\uFF0C\u4F46\u662F\u5982\u679C\u771F\u7684\u9664\u4E86\u95EE\u9898\uFF0C\u90A3\u80AF\u5B9A\u662F\u4F60\u914D\u7F6E\u7684\u95EE\u9898\uFF0C\u4F8B\u5982keepalive_timeout \u8BBE\u7F6E\u7684\u4E0D\u5408\u7406\uFF0C\u65E5\u5FD7\u8BB0\u5F55\u8FC7\u591A\u6216\u8005\u672A\u4F7F\u7528\u7F13\u5B58\u7B49\u7B49\uFF0C\u53E6\u5916\u5C31\u662F\u662F\u540E\u53F0\u7684\u95EE\u9898\u3002\u5EFA\u8BAE\u5F00\u542Frequest_time\u548Cupstream_response_time\uFF0C\u5C06\u8FD9\u4FE9\u4E2A\u503C\u5199\u5165\u5230access\u65E5\u5FD7\u4E2D\u3002</p><p>request_time \u6307\u7684\u5C31\u662F\u4ECE\u63A5\u53D7\u7528\u6237\u8BF7\u6C42\u7684\u7B2C\u4E00\u4E2A\u5B57\u8282\u5230\u53D1\u9001\u5B8C\u54CD\u5E94\u6570\u636E\u7684\u65F6\u95F4\uFF0C\u5373\u5305\u62EC\u63A5\u6536\u8BF7\u6C42\u6570\u636E\u65F6\u95F4\u3001\u7A0B\u5E8F\u54CD\u5E94\u65F6\u95F4\u3001\u8F93\u51FA\u54CD\u5E94\u6570\u636E\u65F6\u95F4\u3002</p><p>upstream_response_time \u662F\u6307\u4ECENginx\u5411\u540E\u7AEF\u5EFA\u7ACB\u8FDE\u63A5\u5F00\u59CB\u5230\u63A5\u53D7\u5B8C\u6570\u636E\u7136\u540E\u5173\u95ED\u8FDE\u63A5\u4E3A\u6B62\u7684\u65F6\u95F4\u3002</p><p>\u5C06\u4E0A\u8FF0\u4FE9\u4E2A\u503C\u8BB0\u5F55\u5230access\u65E5\u5FD7\u6587\u672C\u4E2D\uFF0C\u7136\u540E\u901A\u8FC7\u7EDF\u8BA1\u5206\u6790\u5C06\u9700\u8981\u4F18\u5316\u7684\u540E\u53F0\u63A5\u53E3\u4EA4\u7ED9\u5F00\u53D1\u4EBA\u5458\u8FDB\u884C\u4F18\u5316\uFF0C\u5982\u679C\u50CF\u6211\u8FD9\u79CD\u5565\u6D3B\u90FD\u5E72\u7684\u4EBA\uFF0C\u53EA\u80FD\u81EA\u5DF1\u9ED8\u9ED8\u7684\u5E72\u4E86\u3002</p><p>\u5982\u4E0B\u8BBE\u7F6ENginx\u7684\u65E5\u5FD7\u683C\u5F0F,\u7B49\u8FD0\u884C\u4E00\u6BB5\u65F6\u95F4\u540E\u5206\u6790request_time\u548Cupstream_response_time\u5B57\u6BB5\uFF0C\u7136\u540E\u4F18\u5316\u540E\u53F0\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> log_format  accesslog  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $request_time $body_bytes_sent $upstream_status &#39;</span> 
                      <span class="token string">&#39;$upstream_addr $upstream_response_time &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_CFBundleShortVersionString&quot;&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u53F0\u7CFB\u7EDF\u4F18\u5316\uFF0C\u53EA\u80FD\u5177\u4F53\u7684\u95EE\u9898\u5177\u4F53\u5206\u6790\u4E86\uFF0C\u5982\u662FJava\u53EF\u4EE5\u7528bstrace\u5206\u6790\u76D1\u63A7JVM\u7B49\u7B49\uFF0C\u5982\u679C\u662FPHP\u53EF\u4EE5\u4F7F\u7528xhprof\u7B49\u5DE5\u5177\u5206\u6790\u3002</p><p>\u81F3\u6B64\u8EAB\u4E3A\u4E00\u4E2AWeb\u5F00\u53D1\u4EBA\u5458\uFF0C\u7B97\u662F\u5165\u95E8\u4E86Nginx\uFF0C\u80FD\u4F7F\u4E4B\u66F4\u52A0\u65B9\u4FBF\u548C\u9AD8\u6548\u7684\u5DE5\u4F5C\u4E86\u3002</p>`,15),t=[l];function r(p,c){return s(),e("div",null,t)}const v=n(i,[["render",r],["__file","nginx-tuning.html.vue"]]);export{v as default};
