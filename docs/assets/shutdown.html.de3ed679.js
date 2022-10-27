import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-t</span> seconds <span class="token builtin class-name">:</span> \u8BBE\u5B9A\u5728\u51E0\u79D2\u949F\u4E4B\u540E\u8FDB\u884C\u5173\u673A\u7A0B\u5E8F
<span class="token parameter variable">-k</span> <span class="token builtin class-name">:</span> \u5E76\u4E0D\u4F1A\u771F\u7684\u5173\u673A\uFF0C\u53EA\u662F\u5C06\u8B66\u544A\u8BAF\u606F\u4F20\u9001\u7ED9\u6240\u6709\u53EA\u7528\u8005
<span class="token parameter variable">-r</span> <span class="token builtin class-name">:</span> \u5173\u673A\u540E\u91CD\u65B0\u5F00\u673A
<span class="token parameter variable">-h</span> <span class="token builtin class-name">:</span> \u5173\u673A\u540E\u505C\u673A
<span class="token parameter variable">-n</span> <span class="token builtin class-name">:</span> \u4E0D\u91C7\u7528\u6B63\u5E38\u7A0B\u5E8F\u6765\u5173\u673A\uFF0C\u7528\u5F3A\u8FEB\u7684\u65B9\u5F0F\u6740\u6389\u6240\u6709\u6267\u884C\u4E2D\u7684\u7A0B\u5E8F\u540E\u81EA\u884C\u5173\u673A
<span class="token parameter variable">-c</span> <span class="token builtin class-name">:</span> \u53D6\u6D88\u76EE\u524D\u5DF2\u7ECF\u8FDB\u884C\u4E2D\u7684\u5173\u673A\u52A8\u4F5C
<span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> \u5173\u673A\u65F6\uFF0C\u4E0D\u505A fcsk \u52A8\u4F5C<span class="token punctuation">(</span>\u68C0\u67E5 Linux \u6863\u7CFB\u7EDF<span class="token punctuation">)</span>
<span class="token parameter variable">-F</span> <span class="token builtin class-name">:</span> \u5173\u673A\u65F6\uFF0C\u5F3A\u8FEB\u8FDB\u884C <span class="token function">fsck</span> \u52A8\u4F5C
<span class="token function">time</span> <span class="token builtin class-name">:</span> \u8BBE\u5B9A\u5173\u673A\u7684\u65F6\u95F4
message <span class="token builtin class-name">:</span> \u4F20\u9001\u7ED9\u6240\u6709\u4F7F\u7528\u8005\u7684\u8B66\u544A\u8BAF\u606F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Reboot the system immediately</span>
<span class="token comment">#\u7ACB\u5373\u91CD\u65B0\u542F\u52A8\u7CFB\u7EDF</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now

<span class="token comment"># Shut system down immediately</span>
<span class="token comment">#\u7ACB\u5373\u5173\u95ED\u7CFB\u7EDF</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-h</span> now

<span class="token comment"># Reboot system after 5 minutes</span>
<span class="token comment">#5\u5206\u949F\u540E\u91CD\u542F\u7CFB\u7EDF</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-r</span> +5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function c(r,p){return n(),a("div",null,t)}const o=s(i,[["render",c],["__file","shutdown.html.vue"]]);export{o as default};
