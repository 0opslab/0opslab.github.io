import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-a</span> <span class="token builtin class-name">:</span> \u5B83\u7684\u4F5C\u7528\u662F\u81EA\u52A8\u8DF3\u8FC7\u7A7A\u767D\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u662F\u5173\u95ED\u7684
<span class="token parameter variable">-c</span> <span class="token builtin class-name">:</span> \u5B83\u7684\u540E\u9762\u52A0\u4E0A\u6570\u5B57\u8868\u793A\u6BCF\u884C\u663E\u793A\u591A\u5C11\u5B57\u8282\u7684\u5341\u516D\u8FDB\u5236\u6570\uFF0C\u9ED8\u8BA4\u662F16bytes\uFF0C\u6700\u5927\u662F256bytes
<span class="token parameter variable">-g</span> <span class="token builtin class-name">:</span> \u8BBE\u5B9A\u4EE5\u51E0\u4E2A\u5B57\u8282\u4E3A\u4E00\u5757\uFF0C\u9ED8\u8BA4\u4E3A2bytes
<span class="token parameter variable">-l</span> <span class="token builtin class-name">:</span> \u663E\u793A\u591A\u5C11\u5B57\u8282\u7684\u5185\u5BB9
<span class="token parameter variable">-s</span> <span class="token builtin class-name">:</span> \u540E\u9762\u63A5\u3010+-\u3011\u548Caddress\u3002\u201C+\u201D\u8868\u793A\u4ECE\u5730\u5740\u5904\u5F00\u59CB\u7684\u5185\u5BB9\uFF0C\u201C-\u201D\u8868\u793A\u8DDD\u672B\u5C3Eaddress\u5F00\u59CB\u7684\u5185\u5BB9
-b:\u4EE5\u4E8C\u8FDB\u5236\uFF080 or <span class="token number">1</span>\uFF09\u7684\u5F62\u5F0F\u67E5\u770B\u6587\u4EF6\u5185\u5BB9
<span class="token parameter variable">-r:reverse</span> operation: convert <span class="token punctuation">(</span>or patch<span class="token punctuation">)</span> hexdump into binary.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Convert bin/string to hex.</span>
<span class="token comment">#\u5C06bin / string\u8F6C\u6362\u4E3Ahex\u3002</span>
<span class="token comment"># Result: 34322069732074686520736f6c7574696f6e0a</span>
<span class="token comment">#\u7ED3\u679C\uFF1A34322069732074686520736f6c7574696f6e0a</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;42 is the solution&#39;</span> <span class="token operator">|</span> xxd <span class="token parameter variable">-p</span>

<span class="token comment"># Convert hex to bin/string.</span>
<span class="token comment">#\u5C06\u5341\u516D\u8FDB\u5236\u8F6C\u6362\u4E3Abin / string\u3002</span>
<span class="token comment"># Result: 42 is the solution</span>
<span class="token comment">#\u7ED3\u679C\uFF1A42\u662F\u89E3\u51B3\u65B9\u6848</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;34322069732074686520736f6c7574696f6e0a&#39;</span> <span class="token operator">|</span> xxd <span class="token parameter variable">-r</span> <span class="token parameter variable">-p</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function c(r,p){return n(),a("div",null,t)}const d=s(i,[["render",c],["__file","xxd.html.vue"]]);export{d as default};
