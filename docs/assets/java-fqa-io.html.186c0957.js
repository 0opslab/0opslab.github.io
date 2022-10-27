import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<p>java\u5E94\u7528\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u6D89\u53CA\u65E5\u5FD7\u4EA7\u751F\uFF0C\u5BF9\u78C1\u76D8\u7684\u8BFB\u5199\u7B49\u64CD\u4F5C\uFF0C\u4E5F\u6709\u53EF\u80FD\u6709\u5404\u79CD\u95EE\u9898\uFF0C\u5982\u78C1\u76D8\u4E0D\u8DB3\uFF08\u65E5\u5FD7\u8F93\u51FA\u8FC7\u591A\uFF09\u3001\u3001\u78C1\u76D8\u8BFB\u5199IO\u6BD4\u8F83\u6162\u3001IO\u8FC7\u4E8E\u9891\u7E41\u7B49,\u56E0\u6B64\u4E5F\u6709\u5957\u8DEF\u5F0F\u7684\u6253\u6CD5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># (1) \u67E5\u770B\u78C1\u76D8\u5BB9\u91CF\u60C5\u51B5</span>
<span class="token function">df</span> <span class="token parameter variable">-h</span>

<span class="token comment"># (2) \u67E5\u770B\u6587\u4EF6\u5927\u5C0F\u548C\u76EE\u5F55\u5927\u5C0F</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> \u6216\u8005\u76F4\u63A5ll
<span class="token function">du</span> <span class="token parameter variable">-h</span> --max-depth<span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># (3) \u67E5\u770BIO\u60C5\u51B5\uFF0C\u627E\u5230IO\u8BFB\u5199\u9891\u7E41\u7684\u8FDB\u7A0BPID</span>
iotop <span class="token parameter variable">-d</span> <span class="token number">1</span> <span class="token comment"># 1\u79D2\u6253\u5370\u4E00\u6B21</span>
\u6216\u8005
iostat <span class="token parameter variable">-d</span> <span class="token parameter variable">-x</span> <span class="token parameter variable">-k</span> <span class="token number">1</span> <span class="token comment">#1\u79D2\u6253\u5370\u4E00\u6B21</span>

<span class="token comment"># (4) \u4F7F\u7528stack\u6253\u5370\u7EBF\u7A0B\u5806\u6808\u4FE1\u606F\uFF0C\u6392\u67E5IO\u76F8\u5173\u4EE3\u7801</span>

<span class="token comment"># (5) \u6709\u65F6\u5019\u82E5\u60F3\u6D4B\u8BD5\u78C1\u76D8\u7684\u8BFB\u5199\u901F\u5EA6\uFF08\u7279\u522B\u662F\u865A\u62DF\u673A\uFF09\uFF0C\u53EF\u4EE5\u4F7F\u7528dd</span>
<span class="token comment"># \u793A\u4F8B\uFF1A\u6D4B\u6570\u636E\u5377\u6302\u8F7D\u76EE\u5F55\u7684\u7EAF\u5199\u901F\u5EA6</span>
<span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/\u6570\u636E\u5377\u76EE\u5F55/test.iso <span class="token assign-left variable">bs</span><span class="token operator">=</span>8k <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[i];function p(c,o){return n(),a("div",null,t)}const d=s(l,[["render",p],["__file","java-fqa-io.html.vue"]]);export{d as default};
