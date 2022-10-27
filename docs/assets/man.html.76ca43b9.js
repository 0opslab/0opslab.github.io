import{_ as n,o as a,c as s,e}from"./app.a667bd71.js";const i={},c=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-a\uFF1A\u5728\u6240\u6709\u7684man\u5E2E\u52A9\u624B\u518C\u4E2D\u641C\u7D22\uFF1B
-f\uFF1A\u7B49\u4EF7\u4E8Ewhatis\u6307\u4EE4\uFF0C\u663E\u793A\u7ED9\u5B9A\u5173\u952E\u5B57\u7684\u7B80\u77ED\u63CF\u8FF0\u4FE1\u606F\uFF1B
-P\uFF1A\u6307\u5B9A\u5185\u5BB9\u65F6\u4F7F\u7528\u5206\u9875\u7A0B\u5E8F\uFF1B
-M\uFF1A\u6307\u5B9Aman\u624B\u518C\u641C\u7D22\u7684\u8DEF\u5F84\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Convert a man page to pdf</span>
<span class="token comment">#\u5C06\u624B\u518C\u9875\u8F6C\u6362\u4E3Apdf</span>
<span class="token function">man</span> <span class="token parameter variable">-t</span> <span class="token function">bash</span> <span class="token operator">|</span> ps2pdf - bash.pdf

<span class="token comment"># View the ascii chart</span>
<span class="token comment">#\u67E5\u770Bascii\u56FE\u8868</span>
<span class="token function">man</span> <span class="token number">7</span> ascii
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[c];function l(r,t){return a(),s("div",null,d)}const m=n(i,[["render",l],["__file","man.html.vue"]]);export{m as default};
