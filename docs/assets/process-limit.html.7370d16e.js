import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const i={},t=e(`<h3 id="\u66F4\u6539\u8FDB\u7A0B\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539\u8FDB\u7A0B\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u66F4\u6539\u8FDB\u7A0B\u4F18\u5148\u7EA7</h3><p>\u5728linux\u7CFB\u7EDF\u4E2D\uFF0C\u6240\u6709\u6D3B\u8DC3\u8FDB\u7A0B\u90FD\u6709\u4E00\u4E2A\u4F18\u5148\u7EA7\u4EE5\u53CAnice\u503C\uFF0C\u6709\u6BD4\u70B9\u4F18\u5148\u7EA7\u8FDB\u7A0B\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u7684\u8FDB\u573A\u4E00\u822C\u4F1A\u83B7\u5F97\u66F4\u591A\u7684CPU\u65F6\u95F4\u3002\u53EF\u4EE5\u4F7F\u7528nice\u548Crenice\u547D\u4EE4\u66F4\u6539\u4F18\u5148\u7EA7\u3002\u5728top\u547D\u4EE4\u7684\u8F93\u51FA\u4E2D\uFF0CNI\u663E\u793A\u4E86\u8FDB\u7A0B\u7684nice\u503C\u3002\u4F7F\u7528nice\u547D\u4EE4\u4E3A\u8FDB\u7A0B\u8BBE\u7F6Enice\u503C\uFF0C\u4E00\u4E2A\u666E\u901A\u7528\u6237\u53EF\u4EE5\u7ED9\u4ED6\u62E5\u6709\u7684\u8FDB\u7A0B\u8BBE\u7F6E0\u523020\u7684nice\u503C\uFF0C\u53EA\u6709root\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u8D1F\u503C\u7684nice\u503C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">renice</span> +8  <span class="token number">1314</span>
$ <span class="token function">renice</span> +8  <span class="token number">2526</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FDB\u7A0B\u8D44\u6E90\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u8D44\u6E90\u9650\u5236" aria-hidden="true">#</a> \u8FDB\u7A0B\u8D44\u6E90\u9650\u5236</h3><p>\u5728Linux\u7CFB\u7EDF\u4E2D\uFF0C\u8D44\u6E90\u9650\u5236\u662F\u6307\u4E00\u4E2A\u8FDB\u7A0B\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5B83\u6240\u80FD\u5F97\u5230\u7684\u8D44\u6E90\u9650\u5236\uFF0C\u6BD4\u5982\u8FDB\u7A0B\u7684core file\u7684\u6700\u5927\u503C\uFF0C\u865A\u62DF\u5185\u5B58\u7684\u6700\u5927\u503C\u7B49\u3002\u8D44\u6E90\u9650\u5236\u7684\u5927\u5C0F\u53EF\u4EE5\u76F4\u63A5\u5F71\u54CD\u7A0B\u5E8F\u7684\u6267\u884C\u72B6\u51B5\uFF0C\u5176\u4E2D\u8D44\u6E90\u9650\u5236\u5206\u4E3Asoft limit\u548Chard limit\u9650\u5236\uFF0Csoft limit\u662F\u6307\u5185\u6DB5\u6240\u80FD\u652F\u6301\u7684\u8D44\u6E90\u4E0A\u9650\u3002hard limit\u5728\u8D44\u6E90\u4E2D\u53EA\u80FD\u4F5C\u4E3Asoft limit\u7684\u4E0A\u9650\uFF0C\u5F53\u8BBE\u7F6E\u4E86hard limit\u540E\uFF0C\u8BBE\u7F6Esoft limit\u53EA\u80FD\u5C0F\u4E8Ehard Limit\u3002hard limit\u53EA\u771F\u7684\u5BF9\u975E\u7279\u6743\u8FDB\u7A0B\u3002\u53EF\u4EE5\u4F7F\u7528limits.conf\u914D\u7F6E\u8BE5\u89C4\u5219\u3002\u53E6\u5916\u53EF\u4EE5\u4F7F\u7528ulimit\u547D\u4EE4\u6765\u5B8C\u6210\u4E4B\u6E90\u9650\u5236\u3002</p><p>\u5173\u4E8Elimits.conf\u7684\u914D\u7F6E\u53EF\u4EE5\u67E5\u9605\u76F8\u5173\u6587\u6863.\u4F8B\u5982\u9E1F\u54E5\u7684blog:</p><p>http://linux.vbird.org/linux_basic/0410accountmanager.php#limits</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u7BC4\u4F8B\u4E00\uFF1Avbird1 \u9019\u500B\u7528\u6236\u53EA\u80FD\u5EFA\u7ACB 100MB \u7684\u6A94\u6848\uFF0C\u4E14\u5927\u65BC 90MB \u6703\u8B66\u544A
<span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/security/limits.conf</span>
vbird1	soft		fsize		 <span class="token number">90000</span>
vbird1	hard		fsize		<span class="token number">100000</span>
<span class="token comment">#\u5E33\u865F   \u9650\u5236\u4F9D\u64DA	\u9650\u5236\u9805\u76EE 	\u9650\u5236\u503C</span>
<span class="token comment"># \u7B2C\u4E00\u6B04\u4F4D\u70BA\u5E33\u865F\uFF0C\u6216\u8005\u662F\u7FA4\u7D44\uFF01\u82E5\u70BA\u7FA4\u7D44\u5247\u524D\u9762\u9700\u8981\u52A0\u4E0A @ \uFF0C\u4F8B\u5982 @projecta</span>
<span class="token comment"># \u7B2C\u4E8C\u6B04\u4F4D\u70BA\u9650\u5236\u7684\u4F9D\u64DA\uFF0C\u662F\u56B4\u683C(hard)\uFF0C\u9084\u662F\u50C5\u70BA\u8B66\u544A(soft)\uFF1B</span>
<span class="token comment"># \u7B2C\u4E09\u6B04\u4F4D\u70BA\u76F8\u95DC\u9650\u5236\uFF0C\u6B64\u4F8B\u4E2D\u9650\u5236\u6A94\u6848\u5BB9\u91CF\uFF0C</span>
<span class="token comment"># \u7B2C\u56DB\u6B04\u4F4D\u70BA\u9650\u5236\u7684\u503C\uFF0C\u5728\u6B64\u4F8B\u4E2D\u55AE\u4F4D\u70BA KB\u3002</span>
<span class="token comment"># \u82E5\u4EE5 vbird1 \u767B\u5165\u5F8C\uFF0C\u9032\u884C\u5982\u4E0B\u7684\u64CD\u4F5C\u5247\u6703\u6709\u76F8\u95DC\u7684\u9650\u5236\u51FA\u73FE\uFF01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ulimit\u547D\u4EE4</strong>\u7528\u6765\u9650\u5236\u7CFB\u7EDF\u7528\u6237\u5BF9shell\u8D44\u6E90\u7684\u8BBF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage: <span class="token builtin class-name">ulimit</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span>
\u9009\u9879\uFF1A
    -a\uFF1A\u663E\u793A\u76EE\u524D\u8D44\u6E90\u9650\u5236\u7684\u8BBE\u5B9A\uFF1B
    <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>core\u6587\u4EF6\u4E0A\u9650<span class="token operator">&gt;</span>\uFF1A\u8BBE\u5B9Acore\u6587\u4EF6\u7684\u6700\u5927\u503C\uFF0C\u5355\u4F4D\u4E3A\u533A\u5757\uFF1B
    <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>\u6570\u636E\u8282\u533A\u5927\u5C0F<span class="token operator">&gt;</span>\uFF1A\u7A0B\u5E8F\u6570\u636E\u8282\u533A\u7684\u6700\u5927\u503C\uFF0C\u5355\u4F4D\u4E3AKB\uFF1B
    <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>\u6587\u4EF6\u5927\u5C0F<span class="token operator">&gt;</span>\uFF1Ashell\u6240\u80FD\u5EFA\u7ACB\u7684\u6700\u5927\u6587\u4EF6\uFF0C\u5355\u4F4D\u4E3A\u533A\u5757\uFF1B
    -H\uFF1A\u8BBE\u5B9A\u8D44\u6E90\u7684\u786C\u6027\u9650\u5236\uFF0C\u4E5F\u5C31\u662F\u7BA1\u7406\u5458\u6240\u8BBE\u4E0B\u7684\u9650\u5236\uFF1B
    <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>\u5185\u5B58\u5927\u5C0F<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u53EF\u4F7F\u7528\u5185\u5B58\u7684\u4E0A\u9650\uFF0C\u5355\u4F4D\u4E3AKB\uFF1B
    <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>\u6587\u4EF6\u6570\u76EE<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u540C\u4E00\u65F6\u95F4\u6700\u591A\u53EF\u5F00\u542F\u7684\u6587\u4EF6\u6570\uFF1B
    <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>\u7F13\u51B2\u533A\u5927\u5C0F<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u7BA1\u9053\u7F13\u51B2\u533A\u7684\u5927\u5C0F\uFF0C\u5355\u4F4D512\u5B57\u8282\uFF1B
    <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>\u5806\u53E0\u5927\u5C0F<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u5806\u53E0\u7684\u4E0A\u9650\uFF0C\u5355\u4F4D\u4E3AKB\uFF1B
    -S\uFF1A\u8BBE\u5B9A\u8D44\u6E90\u7684\u5F39\u6027\u9650\u5236\uFF1B
    <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>CPU\u65F6\u95F4<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9ACPU\u4F7F\u7528\u65F6\u95F4\u7684\u4E0A\u9650\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF1B
    <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>\u7A0B\u5E8F\u6570\u76EE<span class="token operator">&gt;</span>\uFF1A\u7528\u6237\u6700\u591A\u53EF\u5F00\u542F\u7684\u7A0B\u5E8F\u6570\u76EE\uFF1B
    <span class="token parameter variable">-v</span> <span class="token operator">&lt;</span>\u865A\u62DF\u5185\u5B58\u5927\u5C0F<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u53EF\u4F7F\u7528\u7684\u865A\u62DF\u5185\u5B58\u4E0A\u9650\uFF0C\u5355\u4F4D\u4E3AKB\u3002
 \u5B9E\u4F8B:
 	$ <span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[t];function r(p,c){return a(),n("div",null,l)}const d=s(i,[["render",r],["__file","process-limit.html.vue"]]);export{d as default};