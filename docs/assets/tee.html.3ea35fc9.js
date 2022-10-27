import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const t={},i=a(`<p>tee\u6307\u4EE4\u4F1A\u4ECE\u6807\u51C6\u8F93\u5165\u8BBE\u5907\u8BFB\u53D6\u6570\u636E\uFF0C\u5C06\u5176\u5185\u5BB9\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\uFF0C\u540C\u65F6\u4FDD\u5B58\u6210\u6587\u4EF6</p><h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-a\u6216\u2013append \u3000\u9644\u52A0\u5230\u65E2\u6709\u6587\u4EF6\u7684\u540E\u9762\uFF0C\u800C\u975E\u8986\u76D6\u5B83\uFF0E
-i\u6216\u2013ignore-interrupts \u3000\u5FFD\u7565\u4E2D\u65AD\u4FE1\u53F7\u3002
\u2013help \u3000\u5728\u7EBF\u5E2E\u52A9\u3002
\u2013version \u3000\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To tee stdout to a file:</span>
<span class="token comment">#\u8981\u5C06stdout\u53D1\u9001\u5230\u6587\u4EF6\uFF1A</span>
<span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">tee</span> outfile.txt

<span class="token comment"># To tee stdout and append to a file:</span>
<span class="token comment">#\u8981\u53D1\u9001stdout\u5E76\u9644\u52A0\u5230\u6587\u4EF6\uFF1A</span>
<span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> outfile.txt

<span class="token comment"># To tee stdout to the terminal, and also pipe it into another program for further processing:</span>
<span class="token comment">#\u8981\u5C06stdout\u53D1\u9001\u5230\u7EC8\u7AEF\uFF0C\u5E76\u5C06\u5176\u5BFC\u5165\u53E6\u4E00\u4E2A\u7A0B\u5E8F\u4EE5\u8FDB\u884C\u8FDB\u4E00\u6B65\u5904\u7406\uFF1A</span>
<span class="token function">ls</span> <span class="token operator">|</span> <span class="token function">tee</span> /dev/tty <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[1;34m%s<span class="token entity" title="\\033">\\033</span>[m<span class="token entity" title="\\n">\\n</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[i];function o(c,d){return s(),e("div",null,l)}const p=n(t,[["render",o],["__file","tee.html.vue"]]);export{p as default};