import{_ as a,o as e,c as s,e as n}from"./app.a667bd71.js";const i={},r=n(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-f, <span class="token parameter variable">--force</span> \u5FC5\u8981\u65F6\u4FEE\u6539\u6743\u9650\u4EE5\u4F7F\u76EE\u6807\u53EF\u5199
-n, <span class="token parameter variable">--iterations</span><span class="token operator">=</span>N \u8986\u76D6N \u6B21\uFF0C\u800C\u975E\u4F7F\u7528\u9ED8\u8BA4\u76843 \u6B21
  --random-source<span class="token operator">=</span>\u6587\u4EF6 \u4ECE\u6307\u5B9A\u6587\u4EF6\u4E2D\u53D6\u51FA\u968F\u673A\u5B57\u8282
-s, <span class="token parameter variable">--size</span><span class="token operator">=</span>N \u7C89\u788E\u6570\u636E\u4E3A\u6307\u5B9A\u5B57\u8282\u7684\u788E\u7247<span class="token punctuation">(</span>\u53EF\u4F7F\u7528K\u3001M \u548CG \u4F5C\u4E3A\u5355\u4F4D<span class="token punctuation">)</span>
-u, <span class="token parameter variable">--remove</span> \u8986\u76D6\u540E\u622A\u65AD\u5E76\u5220\u9664\u6587\u4EF6
-v, <span class="token parameter variable">--verbose</span> \u663E\u793A\u8BE6\u7EC6\u4FE1\u606F
-x, <span class="token parameter variable">--exact</span> \u4E0D\u5C06\u6587\u4EF6\u5927\u5C0F\u589E\u52A0\u81F3\u6700\u63A5\u8FD1\u7684\u5757\u5927\u5C0F
-z, <span class="token parameter variable">--zero</span> \u6700\u540E\u4E00\u6B21\u4F7F\u75280 \u8FDB\u884C\u8986\u76D6\u4EE5\u9690\u85CF\u8986\u76D6\u52A8\u4F5C
  <span class="token parameter variable">--help</span> \u663E\u793A\u6B64\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA
  <span class="token parameter variable">--version</span> \u663E\u793A\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To shred a file (5 passes) and verbose output:</span>
<span class="token comment">#\u8981\u7C89\u788E\u6587\u4EF6\uFF085\u904D\uFF09\u548C\u8BE6\u7EC6\u8F93\u51FA\uFF1A</span>
shred <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token parameter variable">-v</span> file.txt

<span class="token comment"># To shred a file (5 passes) and a final overwrite of zeroes:</span>
<span class="token comment">#\u8981\u7C89\u788E\u6587\u4EF6\uFF085\u904D\uFF09\u5E76\u6700\u540E\u8986\u76D6\u96F6\uFF1A</span>
shred <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token parameter variable">-vz</span> file.txt

<span class="token comment"># To do the above, and then truncate and rm the file:</span>
<span class="token comment">#\u8981\u6267\u884C\u4E0A\u8FF0\u64CD\u4F5C\uFF0C\u7136\u540E\u622A\u65AD\u5E76\u8FD0\u884C\u8BE5\u6587\u4EF6\uFF1A</span>
shred <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token parameter variable">-vzu</span> file.txt

<span class="token comment"># To shred a partition:</span>
<span class="token comment">#\u8981\u7C89\u788E\u5206\u533A\uFF1A</span>
shred <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token parameter variable">-vz</span> /dev/sda

<span class="token comment"># Remember that shred may not behave as expected on journaled file systems if file data is being journaled.</span>
<span class="token comment">#\u8BF7\u8BB0\u4F4F\uFF0C\u5982\u679C\u6B63\u5728\u8BB0\u5F55\u6587\u4EF6\u6570\u636E\uFF0C\u5219shred\u53EF\u80FD\u5728\u65E5\u5FD7\u6587\u4EF6\u7CFB\u7EDF\u4E0A\u7684\u884C\u4E3A\u4E0D\u6B63\u5E38\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[r];function t(d,c){return e(),s("div",null,l)}const o=a(i,[["render",t],["__file","shred.html.vue"]]);export{o as default};
