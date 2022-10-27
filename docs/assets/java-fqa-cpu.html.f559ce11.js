import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<p>\u6B65\u9AA4\u4E00 \uFF1A\u627E\u5230\u6700\u8017CPU\u7684\u8FDB\u7A0B \u6B65\u9AA4\u4E8C\uFF1A\u627E\u5230\u6700\u8017CPU\u7684\u7EBF\u7A0B \u6B65\u9AA4\u4E09\uFF1A\u5C06\u7EBF\u7A0BPID\u8F6C\u5316\u4E3A16\u8FDB\u5236 \u6B65\u9AA4\u56DB\uFF1A\u67E5\u770B\u5806\u6808\uFF0C\u627E\u5230\u7EBF\u7A0B\u5728\u5E72\u561B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># (1) \u67E5\u8BE2CPU\u5360\u7528\u9AD8\u7684\u8FDB\u7A0BID(PID)</span>
<span class="token function">top</span> <span class="token parameter variable">-c</span>

<span class="token comment"># (2) \u4E86\u89E3\u6B64\u8FDB\u7A0B\u7684\u542F\u52A8\u53C2\u6570</span>
<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span>  PID
\u6216\u8005
jinfo <span class="token parameter variable">-flags</span> PID

<span class="token comment"># (3) \u6253\u5370\u7EBF\u7A0B\u5806\u6808\u4FE1\u606F\u5E76\u8F93\u51FA\u6587\u4EF6</span>
jstack <span class="token parameter variable">-l</span> PID <span class="token operator">&gt;</span> PID.dump

<span class="token comment"># (4) \u6839\u636E\u8FDB\u7A0B\u67E5\u627E\u7EBF\u7A0BID\uFF08TID\uFF09</span>
<span class="token function">top</span> <span class="token parameter variable">-H</span> <span class="token parameter variable">-p</span> PID

<span class="token comment"># (5) \u83B7\u53D6TID\u768416\u8FDB\u5236\u6570</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;%x<span class="token entity" title="\\n">\\n</span>&quot;</span> TID

<span class="token comment"># (6) \u7ED3\u5408TID\u548C\u7EBF\u7A0B\u5806\u6808\u4FE1\u606F\u6587\u4EF6\u67E5\u627E\u95EE\u9898</span>
- \u53EF\u4EE5\u4F7F\u7528\u6587\u672C\u5DE5\u5177\u76F4\u63A5\u67E5\u770B
- \u53EF\u4EE5\u4F7F\u7528 <span class="token function">grep</span> TID <span class="token parameter variable">-A20</span> PID.dump \u6765\u67E5\u770B
- \u9700\u8981\u914D\u5408\u7EBF\u7A0B\u72B6\u6001\u6765\u68C0\u67E5

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function t(p,r){return s(),a("div",null,c)}const o=n(i,[["render",t],["__file","java-fqa-cpu.html.vue"]]);export{o as default};
