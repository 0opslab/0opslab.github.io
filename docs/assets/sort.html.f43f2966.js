import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},t=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-t</span>  <span class="token comment"># \u6307\u5B9A\u6392\u5E8F\u65F6\u6240\u7528\u7684\u680F\u4F4D\u5206\u9694\u5B57\u7B26</span>
<span class="token parameter variable">-n</span>  <span class="token comment"># \u4F9D\u7167\u6570\u503C\u7684\u5927\u5C0F\u6392\u5E8F</span>
<span class="token parameter variable">-r</span>  <span class="token comment"># \u4EE5\u76F8\u53CD\u7684\u987A\u5E8F\u6765\u6392\u5E8F</span>
<span class="token parameter variable">-f</span>  <span class="token comment"># \u6392\u5E8F\u65F6\uFF0C\u5C06\u5C0F\u5199\u5B57\u6BCD\u89C6\u4E3A\u5927\u5199\u5B57\u6BCD</span>
<span class="token parameter variable">-d</span>  <span class="token comment"># \u6392\u5E8F\u65F6\uFF0C\u5904\u7406\u82F1\u6587\u5B57\u6BCD\u3001\u6570\u5B57\u53CA\u7A7A\u683C\u5B57\u7B26\u5916\uFF0C\u5FFD\u7565\u5176\u4ED6\u7684\u5B57\u7B26</span>
<span class="token parameter variable">-c</span>  <span class="token comment"># \u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5DF2\u7ECF\u6309\u7167\u987A\u5E8F\u6392\u5E8F</span>
<span class="token parameter variable">-b</span>  <span class="token comment"># \u5FFD\u7565\u6BCF\u884C\u524D\u9762\u5F00\u59CB\u5904\u7684\u7A7A\u683C\u5B57\u7B26</span>
<span class="token parameter variable">-M</span>  <span class="token comment"># \u524D\u97623\u4E2A\u5B57\u6BCD\u4F9D\u7167\u6708\u4EFD\u7684\u7F29\u5199\u8FDB\u884C\u6392\u5E8F</span>
<span class="token parameter variable">-k</span>  <span class="token comment"># \u6307\u5B9A\u57DF</span>
<span class="token parameter variable">-m</span>  <span class="token comment"># \u5C06\u51E0\u4E2A\u6392\u5E8F\u597D\u7684\u6587\u4EF6\u8FDB\u884C\u5408\u5E76</span>
+<span class="token operator">&lt;</span>\u8D77\u59CB\u680F\u4F4D<span class="token operator">&gt;</span>-<span class="token operator">&lt;</span>\u7ED3\u675F\u680F\u4F4D<span class="token operator">&gt;</span>   <span class="token comment"># \u4EE5\u6307\u5B9A\u7684\u680F\u4F4D\u6765\u6392\u5E8F\uFF0C\u8303\u56F4\u7531\u8D77\u59CB\u680F\u4F4D\u5230\u7ED3\u675F\u680F\u4F4D\u7684\u524D\u4E00\u680F\u4F4D\u3002</span>
<span class="token parameter variable">-o</span>  <span class="token comment"># \u5C06\u6392\u5E8F\u540E\u7684\u7ED3\u679C\u5B58\u5165\u6307\u5B9A\u7684\u6587</span>
n   <span class="token comment"># \u8868\u793A\u8FDB\u884C\u6392\u5E8F</span>
r   <span class="token comment"># \u8868\u793A\u9006\u5E8F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6309\u6570\u5B57\u6392\u5E8F</span>
<span class="token function">sort</span> <span class="token parameter variable">-n</span>
<span class="token comment"># \u6309\u6570\u5B57\u5012\u53D9</span>
<span class="token function">sort</span> <span class="token parameter variable">-nr</span>
<span class="token comment"># \u8FC7\u6EE4\u91CD\u590D\u884C</span>
<span class="token function">sort</span> <span class="token parameter variable">-u</span>
<span class="token comment"># \u5C06\u4E24\u4E2A\u6587\u4EF6\u5185\u5BB9\u6574\u5408\u5230\u4E00\u8D77</span>
<span class="token function">sort</span> <span class="token parameter variable">-m</span> a.txt c.txt
<span class="token comment"># \u7B2C\u4E8C\u57DF\u76F8\u540C\uFF0C\u5C06\u4ECE\u7B2C\u4E09\u57DF\u8FDB\u884C\u5347\u964D\u5904\u7406</span>
<span class="token function">sort</span> <span class="token parameter variable">-n</span> -t<span class="token string">&#39; &#39;</span> <span class="token parameter variable">-k</span> <span class="token number">2</span> <span class="token parameter variable">-k</span> <span class="token number">3</span> a.txt
<span class="token comment"># \u4EE5:\u4E3A\u5206\u5272\u57DF\u7684\u7B2C\u4E09\u57DF\u8FDB\u884C\u5012\u53D9\u6392\u5217</span>
<span class="token function">sort</span> <span class="token parameter variable">-n</span> -t<span class="token string">&#39;:&#39;</span> <span class="token parameter variable">-k</span> 3r a.txt
<span class="token comment"># \u4ECE\u7B2C\u4E09\u4E2A\u5B57\u6BCD\u8D77\u8FDB\u884C\u6392\u5E8F</span>
<span class="token function">sort</span> <span class="token parameter variable">-k</span> <span class="token number">1.3</span> a.txt
<span class="token comment"># \u4EE5\u7B2C\u4E8C\u57DF\u8FDB\u884C\u6392\u5E8F\uFF0C\u5982\u679C\u9047\u5230\u91CD\u590D\u7684\uFF0C\u5C31\u5220\u9664</span>
<span class="token function">sort</span> -t<span class="token string">&quot; &quot;</span> <span class="token parameter variable">-k</span> 2n <span class="token parameter variable">-u</span>  a.txt

<span class="token comment"># To sort a file:</span>
<span class="token comment">#\u8981\u5BF9\u6587\u4EF6\u8FDB\u884C\u6392\u5E8F\uFF1A</span>
<span class="token function">sort</span> <span class="token function">file</span>

<span class="token comment"># To sort a file by keeping only unique:</span>
<span class="token comment">#\u901A\u8FC7\u4EC5\u4FDD\u6301\u552F\u4E00\u6765\u5BF9\u6587\u4EF6\u8FDB\u884C\u6392\u5E8F\uFF1A</span>
<span class="token function">sort</span> <span class="token parameter variable">-u</span> <span class="token function">file</span>

<span class="token comment"># To sort a file and reverse the result:</span>
<span class="token comment">#\u8981\u5BF9\u6587\u4EF6\u8FDB\u884C\u6392\u5E8F\u5E76\u53CD\u8F6C\u7ED3\u679C\uFF1A</span>
<span class="token function">sort</span> <span class="token parameter variable">-r</span> <span class="token function">file</span>

<span class="token comment"># To sort a file randomly:</span>
<span class="token comment">#\u8981\u968F\u673A\u6392\u5E8F\u6587\u4EF6\uFF1A</span>
<span class="token function">sort</span> <span class="token parameter variable">-R</span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[t];function c(p,r){return s(),a("div",null,i)}const m=n(l,[["render",c],["__file","sort.html.vue"]]);export{m as default};
