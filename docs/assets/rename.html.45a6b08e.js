import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},l=e(`<h3 id="\u901A\u914D\u7B26" tabindex="-1"><a class="header-anchor" href="#\u901A\u914D\u7B26" aria-hidden="true">#</a> \u901A\u914D\u7B26</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>?  \u53EF\u66FF\u4EE3\u5355\u4E2A\u5B57\u7B26
*  \u53EF\u66FF\u4EE3\u591A\u4E2A\u5B57\u7B26
<span class="token punctuation">[</span>charset<span class="token punctuation">]</span>  \u53EF\u66FF\u4EE3charset\u96C6\u4E2D\u7684\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Lowercase all files and folders in current directory</span>
<span class="token comment">#\u5C0F\u5199\u5F53\u524D\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u6587\u4EF6\u548C\u6587\u4EF6\u5939</span>
<span class="token function">rename</span> <span class="token string">&#39;y/A-Z/a-z/&#39;</span> *

<span class="token comment">#\u6279\u91CF\u66F4\u6539\u6587\u4EF6\u6269\u5C55\u540D </span>
<span class="token function">rename</span> <span class="token string">&#39;s//.txt//.ext/&#39;</span> * 

<span class="token comment">#\u6279\u91CF\u5220\u9664\u6587\u4EF6\u6269\u5C55\u540D </span>
<span class="token function">rename</span> <span class="token string">&#39;s//.txt//&#39;</span> *

<span class="token comment">#\u6279\u91CF\u6DFB\u52A0\u6587\u4EF6\u6269\u5C55\u540D </span>
<span class="token function">rename</span> <span class="token string">&#39;s/$//.txt/&#39;</span> * 

<span class="token comment">#\u6309\u81EA\u5DF1\u7684\u65B9\u5F0F\u6279\u91CF\u91CD\u547D\u540D\u6587\u4EF6 </span>
<span class="token function">rename</span> <span class="token string">&#39;s/(/d)/\u7B2C$1 \u7AE0/&#39;</span> * 

<span class="token comment">#\u4FEE\u6539*.txt\u6587\u4EF6\u540D\uFF0C\u91CC\u9762\u542B\u6709aaa\u6539\u4E3Abbb</span>
<span class="token function">rename</span> <span class="token string">&quot;aaa&quot;</span> <span class="token string">&quot;bbb&quot;</span> *.txt

<span class="token comment">#\u628A\u6240\u6709\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u6539\u4E3A\u5C0F\u5199</span>
<span class="token function">rename</span> <span class="token string">&#39;y/A-Z/a-z/&#39;</span> *

<span class="token comment">#\u4F7F\u7528rename\u5C06.log\u6539\u4E3A.jpg</span>
<span class="token function">rename</span> <span class="token string">&quot;.log&quot;</span> <span class="token string">&quot;.jpg&quot;</span> *

<span class="token comment">#\u6279\u91CF\u4F7F\u7528sed\u6539\u6587\u4EF6\u540E\u7F00\uFF0C\u6539\u4E3A.log</span>
<span class="token function">ls</span><span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-nr</span> <span class="token string">&quot;s#(^.*[0-9].)(.*)#mv &amp; <span class="token entity" title="\\1">\\1</span>log#gp&quot;</span>
<span class="token function">ls</span><span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-nr</span> <span class="token string">&quot;s#(^.*[0-9].)(.*)#mv &amp; <span class="token entity" title="\\1">\\1</span>log#gp&quot;</span><span class="token operator">|</span><span class="token function">bash</span>

<span class="token comment">#\u4F7F\u7528for\u518D\u914D\u5408\u66FF\u6362\u5B57\u7B26\u4E32</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">name</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> *.log<span class="token variable">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;mv <span class="token variable">$name</span> <span class="token variable">\${name<span class="token operator">/</span>.log<span class="token operator">/</span>.txt}</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment">#\u5C06 abcd.txt \u91CD\u547D\u540D\u4E3A abcd_aaa1.txt</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> *.txt<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$var</span>.jpg_aaa1.txt&quot;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token comment">#\u5C06 abcd_aaa.txt \u91CD\u547D\u540D\u4E3A abcd_bbb.jpg</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> *.txt<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token string">&quot;var&quot;</span> <span class="token string">&quot;{var%_efg1.txt}_lmn.jpg&quot;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token comment">#\u628A\u6587\u4EF6\u540D\u4E2D\u6240\u6709\u5C0F\u5199\u5B57\u6BCD\u6539\u4E3A\u5927\u5199\u5B57\u6BCD</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span><span class="token variable">\`</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;var&quot;</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span><span class="token string">&quot;var&quot;</span> <span class="token operator">|</span><span class="token function">tr</span> a-z A-Z<span class="token variable">\`</span></span><span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[l];function i(p,c){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","rename.html.vue"]]);export{d as default};
