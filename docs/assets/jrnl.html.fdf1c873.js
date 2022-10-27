import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Add entry to default jrnl (from your configured text editor)</span>
<span class="token comment">#\u5C06\u6761\u76EE\u6DFB\u52A0\u5230\u9ED8\u8BA4jrnl\uFF08\u4ECE\u914D\u7F6E\u7684\u6587\u672C\u7F16\u8F91\u5668\uFF09</span>
jrnl

<span class="token comment"># Add entry to default jrnl</span>
<span class="token comment">#\u5C06\u6761\u76EE\u6DFB\u52A0\u5230\u9ED8\u8BA4jrnl</span>
jrnl Write entry here.

<span class="token comment"># List of tags</span>
<span class="token comment">#\u6807\u7B7E\u5217\u8868</span>
jrnl <span class="token parameter variable">--tags</span>

<span class="token comment"># Entries per tag</span>
<span class="token comment">#\u6BCF\u4E2A\u6807\u7B7E\u7684\u6761\u76EE</span>
jrnl @tag

<span class="token comment"># Export jrnl as json</span>
<span class="token comment">#\u5C06jrnl\u5BFC\u51FA\u4E3Ajson</span>
jrnl <span class="token parameter variable">--export</span> json

<span class="token comment"># Entries in a timeframe</span>
<span class="token comment">#\u65F6\u95F4\u8303\u56F4\u5185\u7684\u6761\u76EE</span>
jrnl <span class="token parameter variable">-from</span> <span class="token number">2009</span> <span class="token parameter variable">-until</span> may

<span class="token comment"># Add Sublime text to .jrnl_config</span>
<span class="token comment">#\u5C06Sublime\u6587\u672C\u6DFB\u52A0\u5230.jrnl_config</span>

<span class="token comment"># Windows</span>
<span class="token comment">#\u89C6\u7A97</span>
<span class="token string">&quot;editor&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;F:<span class="token entity" title="\\\\">\\\\</span>Powerpack<span class="token entity" title="\\\\">\\\\</span>Sublime<span class="token entity" title="\\\\">\\\\</span>sublime_text.exe -w&quot;</span>

<span class="token comment"># Linux</span>
<span class="token comment">#Linux\u7684</span>
<span class="token string">&quot;editor&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/usr/bin/sublime -w&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function c(r,d){return s(),e("div",null,t)}const m=n(i,[["render",c],["__file","jrnl.html.vue"]]);export{m as default};
