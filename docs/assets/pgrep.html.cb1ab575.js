import{_ as e,o as n,c as s,e as a}from"./app.a667bd71.js";const i={},l=a(`<p>\u4EE5\u540D\u79F0\u4E3A\u4F9D\u636E\u4ECE\u8FD0\u884C\u8FDB\u7A0B\u961F\u5217\u4E2D\u67E5\u627E\u8FDB\u7A0B\uFF0C\u5E76\u663E\u793A\u67E5\u627E\u5230\u7684\u8FDB\u7A0Bid\u3002\u6BCF\u4E00\u4E2A\u8FDB\u7A0BID\u4EE5\u4E00\u4E2A\u5341\u8FDB\u5236\u6570\u8868\u793A\uFF0C \u901A\u8FC7\u4E00\u4E2A\u5206\u5272\u5B57\u7B26\u4E32\u548C\u4E0B\u4E00\u4E2AID\u5206\u5F00\uFF0C\u9ED8\u8BA4\u7684\u5206\u5272\u5B57\u7B26\u4E32\u662F\u4E00\u4E2A\u65B0\u884C\u3002\u5BF9\u4E8E\u6BCF\u4E2A\u5C5E\u6027\u9009\u9879\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u547D \u4EE4\u884C\u4E0A\u6307\u5B9A\u4E00\u4E2A\u4EE5\u9017\u53F7\u5206\u5272\u7684\u53EF\u80FD\u503C\u7684\u96C6\u5408\u3002</p><h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-o\uFF1A\u4EC5\u663E\u793A\u627E\u5230\u7684\u6700\u5C0F\uFF08\u8D77\u59CB\uFF09\u8FDB\u7A0B\u53F7\uFF1B
-n\uFF1A\u4EC5\u663E\u793A\u627E\u5230\u7684\u6700\u5927\uFF08\u7ED3\u675F\uFF09\u8FDB\u7A0B\u53F7\uFF1B
-l\uFF1A\u663E\u793A\u8FDB\u7A0B\u540D\u79F0\uFF1B
-P\uFF1A\u6307\u5B9A\u7236\u8FDB\u7A0B\u53F7\uFF1B
-g\uFF1A\u6307\u5B9A\u8FDB\u7A0B\u7EC4\uFF1B
-t\uFF1A\u6307\u5B9A\u5F00\u542F\u8FDB\u7A0B\u7684\u7EC8\u7AEF\uFF1B
-u\uFF1A\u6307\u5B9A\u8FDB\u7A0B\u7684\u6709\u6548\u7528\u6237ID\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Get a list of PIDs matching the pattern </span>
<span class="token comment">#\u83B7\u53D6\u4E0E\u6A21\u5F0F\u5339\u914D\u7684PID\u5217\u8868</span>
pgrep example

<span class="token comment"># Kill all PIDs matching the pattern</span>
<span class="token comment">#\u6740\u6B7B\u4E0E\u6A21\u5F0F\u5339\u914D\u7684\u6240\u6709PID</span>
pgrep <span class="token parameter variable">-f</span> example <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">kill</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[l];function c(r,t){return n(),s("div",null,d)}const p=e(i,[["render",c],["__file","pgrep.html.vue"]]);export{p as default};
