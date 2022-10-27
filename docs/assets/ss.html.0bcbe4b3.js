import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const t={},i=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-h, <span class="token parameter variable">--help</span>      \u5E2E\u52A9\u4FE1\u606F
-V, <span class="token parameter variable">--version</span>   \u7A0B\u5E8F\u7248\u672C\u4FE1\u606F
-n, <span class="token parameter variable">--numeric</span>   \u4E0D\u89E3\u6790\u670D\u52A1\u540D\u79F0
-r, <span class="token parameter variable">--resolve</span>   \u89E3\u6790\u4E3B\u673A\u540D
-a, <span class="token parameter variable">--all</span>       \u663E\u793A\u6240\u6709\u5957\u63A5\u5B57\uFF08sockets\uFF09
-l, <span class="token parameter variable">--listening</span> \u663E\u793A\u76D1\u542C\u72B6\u6001\u7684\u5957\u63A5\u5B57\uFF08sockets\uFF09
-o, <span class="token parameter variable">--options</span>   \u663E\u793A\u8BA1\u65F6\u5668\u4FE1\u606F
-e, <span class="token parameter variable">--extended</span>  \u663E\u793A\u8BE6\u7EC6\u7684\u5957\u63A5\u5B57\uFF08sockets\uFF09\u4FE1\u606F
-m, <span class="token parameter variable">--memory</span>    \u663E\u793A\u5957\u63A5\u5B57\uFF08socket\uFF09\u7684\u5185\u5B58\u4F7F\u7528\u60C5\u51B5
-p, <span class="token parameter variable">--processes</span> \u663E\u793A\u4F7F\u7528\u5957\u63A5\u5B57\uFF08socket\uFF09\u7684\u8FDB\u7A0B
-i, <span class="token parameter variable">--info</span>      \u663E\u793A TCP\u5185\u90E8\u4FE1\u606F
-s, <span class="token parameter variable">--summary</span>   \u663E\u793A\u5957\u63A5\u5B57\uFF08socket\uFF09\u4F7F\u7528\u6982\u51B5
-4, <span class="token parameter variable">--ipv4</span>      \u4EC5\u663E\u793AIPv4\u7684\u5957\u63A5\u5B57\uFF08sockets\uFF09
-6, <span class="token parameter variable">--ipv6</span>      \u4EC5\u663E\u793AIPv6\u7684\u5957\u63A5\u5B57\uFF08sockets\uFF09
-0, <span class="token parameter variable">--packet</span>    \u663E\u793A PACKET \u5957\u63A5\u5B57\uFF08socket\uFF09
-t, <span class="token parameter variable">--tcp</span>       \u4EC5\u663E\u793A TCP\u5957\u63A5\u5B57\uFF08sockets\uFF09
-u, <span class="token parameter variable">--udp</span>       \u4EC5\u663E\u793A UCP\u5957\u63A5\u5B57\uFF08sockets\uFF09
-d, <span class="token parameter variable">--dccp</span>      \u4EC5\u663E\u793A DCCP\u5957\u63A5\u5B57\uFF08sockets\uFF09
-w, <span class="token parameter variable">--raw</span>       \u4EC5\u663E\u793A RAW\u5957\u63A5\u5B57\uFF08sockets\uFF09
-x, <span class="token parameter variable">--unix</span>      \u4EC5\u663E\u793A Unix\u5957\u63A5\u5B57\uFF08sockets\uFF09
-f, <span class="token parameter variable">--family</span><span class="token operator">=</span>FAMILY  \u663E\u793A FAMILY\u7C7B\u578B\u7684\u5957\u63A5\u5B57\uFF08sockets\uFF09\uFF0CFAMILY\u53EF\u9009\uFF0C\u652F\u6301  unix, inet, inet6, link, netlink
-A, <span class="token parameter variable">--query</span><span class="token operator">=</span>QUERY, <span class="token parameter variable">--socket</span><span class="token operator">=</span>QUERY
      QUERY :<span class="token operator">=</span> <span class="token punctuation">{</span>all<span class="token operator">|</span>inet<span class="token operator">|</span>tcp<span class="token operator">|</span>udp<span class="token operator">|</span>raw<span class="token operator">|</span>unix<span class="token operator">|</span>packet<span class="token operator">|</span>netlink<span class="token punctuation">}</span><span class="token punctuation">[</span>,QUERY<span class="token punctuation">]</span>
-D, <span class="token parameter variable">--diag</span><span class="token operator">=</span>FILE     \u5C06\u539F\u59CBTCP\u5957\u63A5\u5B57\uFF08sockets\uFF09\u4FE1\u606F\u8F6C\u50A8\u5230\u6587\u4EF6
 -F, <span class="token parameter variable">--filter</span><span class="token operator">=</span>FILE  \u4ECE\u6587\u4EF6\u4E2D\u90FD\u53BB\u8FC7\u6EE4\u5668\u4FE1\u606F
       FILTER :<span class="token operator">=</span> <span class="token punctuation">[</span> state TCP-STATE <span class="token punctuation">]</span> <span class="token punctuation">[</span> EXPRESSION <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Args</span>
<span class="token comment"># -4/-6 list ipv4/ipv6 sockets</span>
<span class="token comment"># -n numeric addresses instead of hostnames</span>
<span class="token comment"># -l list listing sockets</span>
<span class="token comment"># -u/-t/-x list udp/tcp/unix sockets</span>
<span class="token comment"># -p Show process(es) that using socket</span>

<span class="token comment"># show all listing tcp sockets including the corresponding process</span>
<span class="token comment">#\u663E\u793A\u6240\u6709\u5217\u51FA\u7684tcp\u5957\u63A5\u5B57\uFF0C\u5305\u62EC\u76F8\u5E94\u7684\u8FDB\u7A0B</span>
ss <span class="token parameter variable">-tlp</span>

<span class="token comment"># show all sockets connecting to 192.168.2.1 on port 80</span>
<span class="token comment">#\u663E\u793A\u8FDE\u63A5\u5230\u7AEF\u53E380\u4E0A\u7684192.168.2.1\u7684\u6240\u6709\u5957\u63A5\u5B57</span>
ss <span class="token parameter variable">-t</span> dst <span class="token number">192.168</span>.2.1:80

<span class="token comment"># show all ssh related connection</span>
<span class="token comment">#\u663E\u793A\u6240\u6709ssh\u76F8\u5173\u7684\u8FDE\u63A5</span>
ss <span class="token parameter variable">-t</span> state established <span class="token string">&#39;( dport = :ssh or sport = :ssh )&#39;</span>


ss <span class="token parameter variable">-an</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">19000</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-i</span> es <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $6 }&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> -F: <span class="token string">&#39;{ print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">30</span>



<span class="token comment"># \u663E\u793ATCP\u8FDE\u63A5</span>
ss <span class="token parameter variable">-t</span> <span class="token parameter variable">-a</span>    

<span class="token comment"># \u663E\u793A Sockets \u6458\u8981</span>
ss <span class="token parameter variable">-s</span>       

<span class="token comment"># \u5217\u51FA\u6240\u6709\u6253\u5F00\u7684\u7F51\u7EDC\u8FDE\u63A5\u7AEF\u53E3</span>
ss <span class="token parameter variable">-l</span>       

<span class="token comment"># \u67E5\u770B\u8FDB\u7A0B\u4F7F\u7528\u7684socket</span>
ss <span class="token parameter variable">-pl</span>      
<span class="token comment"># \u627E\u51FA\u6253\u5F00\u5957\u63A5\u5B57/\u7AEF\u53E3\u5E94\u7528\u7A0B\u5E8F</span>
ss <span class="token parameter variable">-lp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">3306</span>  
<span class="token comment">#\u663E\u793A\u6240\u6709UDP Sockets</span>
ss <span class="token parameter variable">-u</span> <span class="token parameter variable">-a</span>    
<span class="token comment"># \u663E\u793A\u6240\u6709\u72B6\u6001\u4E3Aestablished\u7684SMTP\u8FDE\u63A5</span>
ss <span class="token parameter variable">-o</span> state established <span class="token string">&#39;( dport = :smtp or sport = :smtp )&#39;</span> 
<span class="token comment"># \u663E\u793A\u6240\u6709\u72B6\u6001\u4E3AEstablished\u7684HTTP\u8FDE\u63A5</span>
ss <span class="token parameter variable">-o</span> state established <span class="token string">&#39;( dport = :http or sport = :http )&#39;</span> 
<span class="token comment"># \u5217\u4E3E\u51FA\u5904\u4E8E FIN-WAIT-1\u72B6\u6001\u7684\u6E90\u7AEF\u53E3\u4E3A 80\u6216\u8005 443\uFF0C\u76EE\u6807\u7F51\u7EDC\u4E3A 193.233.7/24\u6240\u6709 tcp\u5957\u63A5\u5B57</span>
ss <span class="token parameter variable">-o</span> state fin-wait-1 <span class="token string">&#39;( sport = :http or sport = :https )&#39;</span> dst <span class="token number">193.233</span>.7/24  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[i];function p(r,c){return a(),n("div",null,l)}const v=s(t,[["render",p],["__file","ss.html.vue"]]);export{v as default};
