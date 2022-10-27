import{_ as n,o as a,c as s,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jinfo <span class="token punctuation">[</span> option <span class="token punctuation">]</span> pid

<span class="token comment">## \u67E5\u770Bjvm\u6240\u6709\u53C2\u6570\u9ED8\u8BA4\u503C</span>
<span class="token function">java</span> <span class="token parameter variable">-XX:+PrintFlagsInitial</span> <span class="token parameter variable">-version</span>

<span class="token comment">## \u67E5\u770Bjvm\u6240\u6709\u7684\u53C2\u6570</span>
<span class="token function">java</span> <span class="token parameter variable">-XX:+PrintFlagsFinal</span> <span class="token parameter variable">-version</span>

<span class="token comment">## \u67E5\u770B\u5F53\u524DJVM\u8FD0\u884C\u7684\u53C2\u6570</span>
jinfo <span class="token parameter variable">-flags</span> pid

<span class="token comment">## \u67E5\u770B\u5177\u4F53\u67D0\u4E00\u4E2A\u53C2\u6570\u7684\u503C</span>
jinfo <span class="token parameter variable">-flag</span> InitialHeapSize <span class="token number">18378</span>

<span class="token comment">## \u5F00\u542F/\u5173\u95ED\u67D0\u4E2AJVM\u53C2\u6570</span>
jinfo <span class="token parameter variable">-flag</span> <span class="token punctuation">[</span>+<span class="token operator">|</span>-<span class="token punctuation">]</span>name pid

jinfo <span class="token parameter variable">-flag</span> PrintGC <span class="token number">18378</span>
jinfo <span class="token parameter variable">-flag</span> +PrintGC <span class="token number">18378</span>
jinfo <span class="token parameter variable">-flag</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>value pid

<span class="token comment">## \u8F93\u51FA\u5F53\u524DJVM\u8FDB\u7A0B\u6240\u6709\u7684\u7CFB\u7EDF\u5C5E\u6027</span>
jinfo <span class="token parameter variable">-sysprops</span> pid
jinfo <span class="token parameter variable">-sysprops</span> <span class="token number">18378</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[l];function r(t,c){return a(),s("div",null,p)}const v=n(i,[["render",r],["__file","jvm-jinfo.html.vue"]]);export{v as default};
