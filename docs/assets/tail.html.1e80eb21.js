import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},t=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>--retry\uFF1A\u5373\u662F\u5728tail\u547D\u4EE4\u542F\u52A8\u65F6\uFF0C\u6587\u4EF6\u4E0D\u53EF\u8BBF\u95EE\u6216\u8005\u6587\u4EF6\u7A0D\u540E\u53D8\u5F97\u4E0D\u53EF\u8BBF\u95EE\uFF0C\u90FD\u59CB\u7EC8\u5C1D\u8BD5\u6253\u5F00\u6587\u4EF6\u3002\u4F7F\u7528\u6B64\u9009\u9879\u65F6\u9700\u8981\u4E0E\u9009\u9879\u201C\u2014\u2014follow<span class="token operator">=</span>name\u201D\u8FDE\u7528\uFF1B
-c<span class="token operator">&lt;</span>N<span class="token operator">&gt;</span>\u6216\u2014\u2014bytes<span class="token operator">=</span><span class="token operator">&lt;</span>N<span class="token operator">&gt;</span>\uFF1A\u8F93\u51FA\u6587\u4EF6\u5C3E\u90E8\u7684N\uFF08N\u4E3A\u6574\u6570\uFF09\u4E2A\u5B57\u8282\u5185\u5BB9\uFF1B
-f<span class="token operator">&lt;</span>name/descriptor<span class="token operator">&gt;</span>\u6216\uFF1B--follow<span class="token operator">&lt;</span>nameldescript<span class="token operator">&gt;</span>\uFF1A\u663E\u793A\u6587\u4EF6\u6700\u65B0\u8FFD\u52A0\u7684\u5185\u5BB9\u3002\u3002\u201C-f\u201D\u4E0E\u201C-fdescriptor\u201D\u7B49\u6548\uFF1B
-F\uFF1A\u4E0E\u9009\u9879\u201C-follow<span class="token operator">=</span>name\u201D\u548C\u201C--retry&quot;\u8FDE\u7528\u65F6\u529F\u80FD\u76F8\u540C\uFF1B
-n<span class="token operator">&lt;</span>N<span class="token operator">&gt;</span>\u6216\u2014\u2014line<span class="token operator">=</span><span class="token operator">&lt;</span>N<span class="token operator">&gt;</span>\uFF1A\u8F93\u51FA\u6587\u4EF6\u7684\u5C3E\u90E8N\uFF08N\u4F4D\u6570\u5B57\uFF09\u884C\u5185\u5BB9\u3002
<span class="token parameter variable">--pid</span><span class="token operator">=</span><span class="token operator">&lt;</span>\u8FDB\u7A0B\u53F7<span class="token operator">&gt;</span>\uFF1A\u4E0E\u201C-f\u201D\u9009\u9879\u8FDE\u7528\uFF0C\u5F53\u6307\u5B9A\u7684\u8FDB\u7A0B\u53F7\u7684\u8FDB\u7A0B\u7EC8\u6B62\u540E\uFF0C\u81EA\u52A8\u9000\u51FAtail\u547D\u4EE4\uFF1B
-q\u6216\u2014\u2014quiet\u6216\u2014\u2014silent\uFF1A\u5F53\u6709\u591A\u4E2A\u6587\u4EF6\u53C2\u6570\u65F6\uFF0C\u4E0D\u8F93\u51FA\u5404\u4E2A\u6587\u4EF6\u540D\uFF1B
-s<span class="token operator">&lt;</span>\u79D2\u6570<span class="token operator">&gt;</span>\u6216\u2014\u2014sleep-interal<span class="token operator">=</span><span class="token operator">&lt;</span>\u79D2\u6570<span class="token operator">&gt;</span>\uFF1A\u4E0E\u201C-f\u201D\u9009\u9879\u8FDE\u7528\uFF0C\u6307\u5B9A\u76D1\u89C6\u6587\u4EF6\u53D8\u5316\u65F6\u95F4\u9694\u7684\u79D2\u6570\uFF1B
-v\u6216\u2014\u2014verbose\uFF1A\u5F53\u6709\u591A\u4E2A\u6587\u4EF6\u53C2\u6570\u65F6\uFF0C\u603B\u662F\u8F93\u51FA\u5404\u4E2A\u6587\u4EF6\u540D\uFF1B
--help\uFF1A\u663E\u793A\u6307\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\uFF1B
--version\uFF1A\u663E\u793A\u6307\u4EE4\u7684\u7248\u672C\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To show the last 10 lines of file</span>
<span class="token comment">#\u663E\u793A\u6700\u540E10\u884C\u6587\u4EF6</span>
<span class="token function">tail</span> <span class="token function">file</span>

<span class="token comment"># To show the last N lines of file</span>
<span class="token comment">#\u663E\u793A\u6700\u540EN\u884C\u6587\u4EF6</span>
<span class="token function">tail</span> <span class="token parameter variable">-n</span> N <span class="token function">file</span>

<span class="token comment"># To show the last lines of file starting with the Nth</span>
<span class="token comment">#\u663E\u793A\u4EE5Nth\u5F00\u5934\u7684\u6700\u540E\u4E00\u884C\u6587\u4EF6</span>
<span class="token function">tail</span> <span class="token parameter variable">-n</span> +N <span class="token function">file</span>

<span class="token comment"># To show the last N bytes of file</span>
<span class="token comment">#\u663E\u793A\u6587\u4EF6\u7684\u6700\u540EN\u4E2A\u5B57\u8282</span>
<span class="token function">tail</span> <span class="token parameter variable">-c</span> N <span class="token function">file</span>

<span class="token comment"># To show the last 10 lines of file and to wait for file to grow</span>
<span class="token comment">#\u663E\u793A\u6700\u540E10\u884C\u6587\u4EF6\u5E76\u7B49\u5F85\u6587\u4EF6\u589E\u957F</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[t];function o(r,p){return n(),a("div",null,i)}const d=s(l,[["render",o],["__file","tail.html.vue"]]);export{d as default};
