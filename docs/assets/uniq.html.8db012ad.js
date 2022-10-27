import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-c\u6216\u2013count \u5728\u6BCF\u5217\u65C1\u8FB9\u663E\u793A\u8BE5\u884C\u91CD\u590D\u51FA\u73B0\u7684\u6B21\u6570\u3002
-d\u6216\u2013repeated \u4EC5\u663E\u793A\u91CD\u590D\u51FA\u73B0\u7684\u884C\u5217\u3002
-f<span class="token operator">&lt;</span>\u680F\u4F4D<span class="token operator">&gt;</span>\u6216\u2013skip-fields<span class="token operator">=</span><span class="token operator">&lt;</span>\u680F\u4F4D<span class="token operator">&gt;</span> \u5FFD\u7565\u6BD4\u8F83\u6307\u5B9A\u7684\u680F\u4F4D\u3002
-s<span class="token operator">&lt;</span>\u5B57\u7B26\u4F4D\u7F6E<span class="token operator">&gt;</span>\u6216\u2013skip-chars<span class="token operator">=</span><span class="token operator">&lt;</span>\u5B57\u7B26\u4F4D\u7F6E<span class="token operator">&gt;</span> \u5FFD\u7565\u6BD4\u8F83\u6307\u5B9A\u7684\u5B57\u7B26\u3002
-u\u6216\u2013unique \u4EC5\u663E\u793A\u51FA\u4E00\u6B21\u7684\u884C\u5217\u3002
-w<span class="token operator">&lt;</span>\u5B57\u7B26\u4F4D\u7F6E<span class="token operator">&gt;</span>\u6216\u2013check-chars<span class="token operator">=</span><span class="token operator">&lt;</span>\u5B57\u7B26\u4F4D\u7F6E<span class="token operator">&gt;</span> \u6307\u5B9A\u8981\u6BD4\u8F83\u7684\u5B57\u7B26\u3002
\u2013help \u663E\u793A\u5E2E\u52A9\u3002
\u2013version \u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
<span class="token punctuation">[</span>\u8F93\u5165\u6587\u4EF6<span class="token punctuation">]</span> \u6307\u5B9A\u5DF2\u6392\u5E8F\u597D\u7684\u6587\u672C\u6587\u4EF6\u3002
<span class="token punctuation">[</span>\u8F93\u51FA\u6587\u4EF6<span class="token punctuation">]</span> \u6307\u5B9A\u8F93\u51FA\u7684\u6587\u4EF6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># show all lines without duplication</span>
<span class="token comment">#\u663E\u793A\u6240\u6709\u884C\u6CA1\u6709\u91CD\u590D</span>
<span class="token comment"># \`sort -u\` and \`uniq\` is the same effect.</span>
<span class="token comment">#\`sort -u\`\u548C\`uniq\`\u662F\u540C\u6837\u7684\u6548\u679C\u3002</span>
<span class="token function">sort</span> <span class="token function">file</span> <span class="token operator">|</span> <span class="token function">uniq</span>

<span class="token comment"># show not duplicated lines</span>
<span class="token comment">#\u663E\u793A\u6CA1\u6709\u91CD\u590D\u7684\u884C</span>
<span class="token function">sort</span> <span class="token function">file</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-u</span>

<span class="token comment"># show duplicated lines only</span>
<span class="token comment">#\u4EC5\u663E\u793A\u91CD\u590D\u7684\u884C</span>
<span class="token function">sort</span> <span class="token function">file</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-d</span>

<span class="token comment"># count all lines</span>
<span class="token comment">#\u7EDF\u8BA1\u6240\u6709\u884C</span>
<span class="token function">sort</span> <span class="token function">file</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>

<span class="token comment"># count not duplicated lines</span>
<span class="token comment">#\u7B97\u4E0D\u91CD\u590D\u7684\u884C</span>
<span class="token function">sort</span> <span class="token function">file</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-uc</span>

<span class="token comment"># count only duplicated lines</span>
<span class="token comment">#\u53EA\u8BA1\u7B97\u91CD\u590D\u7684\u884C</span>
<span class="token function">sort</span> <span class="token function">file</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-dc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function o(c,p){return s(),a("div",null,t)}const d=n(i,[["render",o],["__file","uniq.html.vue"]]);export{d as default};
