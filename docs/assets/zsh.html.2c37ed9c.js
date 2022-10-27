import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># A plain old glob</span>
<span class="token comment">#\u4E00\u4E2A\u666E\u901A\u7684\u8001\u6C34\u73E0</span>
print <span class="token parameter variable">-l</span> *.txt
print <span class="token parameter variable">-l</span> **/*.txt

<span class="token comment"># Show text files that end in a number from 1 to 10</span>
<span class="token comment">#\u663E\u793A\u4EE51\u523010\u7684\u6570\u5B57\u7ED3\u5C3E\u7684\u6587\u672C\u6587\u4EF6</span>
print <span class="token parameter variable">-l</span> **/*<span class="token operator">&lt;</span><span class="token number">1</span>-1<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>.txt

<span class="token comment"># Show text files that start with the letter a</span>
<span class="token comment">#\u663E\u793A\u4EE5\u5B57\u6BCDa\u5F00\u5934\u7684\u6587\u672C\u6587\u4EF6</span>
print <span class="token parameter variable">-l</span> **/<span class="token punctuation">[</span>a<span class="token punctuation">]</span>*.txt

<span class="token comment"># Show text files that start with either ab or bc</span>
<span class="token comment">#\u663E\u793A\u4EE5ab\u6216bc\u5F00\u5934\u7684\u6587\u672C\u6587\u4EF6</span>
print <span class="token parameter variable">-l</span> **/<span class="token punctuation">(</span>ab<span class="token operator">|</span><span class="token function">bc</span><span class="token punctuation">)</span>*.txt

<span class="token comment"># Show text files that don&#39;t start with a lower or uppercase c</span>
<span class="token comment">#\u663E\u793A\u4E0D\u4EE5\u5C0F\u5199\u6216\u5927\u5199c\u5F00\u5934\u7684\u6587\u672C\u6587\u4EF6</span>
print <span class="token parameter variable">-l</span> **/<span class="token punctuation">[</span>^cC<span class="token punctuation">]</span>*.txt

<span class="token comment"># Show only directories</span>
<span class="token comment">#\u4EC5\u663E\u793A\u76EE\u5F55</span>
print <span class="token parameter variable">-l</span> **/*<span class="token punctuation">(</span>/<span class="token punctuation">)</span>

<span class="token comment"># Show only regular files</span>
<span class="token comment">#\u4EC5\u663E\u793A\u5E38\u89C4\u6587\u4EF6</span>
print <span class="token parameter variable">-l</span> **/*<span class="token punctuation">(</span>.<span class="token punctuation">)</span>

<span class="token comment"># Show empty files</span>
<span class="token comment">#\u663E\u793A\u7A7A\u6587\u4EF6</span>
print <span class="token parameter variable">-l</span> **/*<span class="token punctuation">(</span>L0<span class="token punctuation">)</span>

<span class="token comment"># Show files greater than 3 KB</span>
<span class="token comment">#\u663E\u793A\u5927\u4E8E3 KB\u7684\u6587\u4EF6</span>
print <span class="token parameter variable">-l</span> **/*<span class="token punctuation">(</span>Lk+3<span class="token punctuation">)</span>

<span class="token comment"># Show files modified in the last hour</span>
<span class="token comment">#\u663E\u793A\u8FC7\u53BB\u4E00\u5C0F\u65F6\u5185\u4FEE\u6539\u7684\u6587\u4EF6</span>
print <span class="token parameter variable">-l</span> **/*<span class="token punctuation">(</span>mh-1<span class="token punctuation">)</span>

<span class="token comment"># Sort files from most to least recently modified and show the last 3</span>
<span class="token comment">#\u4ECE\u6700\u8FD1\u5230\u6700\u8FD1\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6\u6392\u5E8F\u5E76\u663E\u793A\u6700\u540E3\u4E2A</span>
print <span class="token parameter variable">-l</span> **/*<span class="token punctuation">(</span>om<span class="token punctuation">[</span><span class="token number">1,3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># \`.\` show files, \`Lm-2\` smaller than 2MB, \`mh-1\` modified in last hour,</span>
<span class="token comment">#\`.\`\u663E\u793A\u6587\u4EF6\uFF0C\`Lm-2\`\u5C0F\u4E8E2MB\uFF0C\u5728\u6700\u540E\u4E00\u5C0F\u65F6\u4FEE\u6539\u4E86\`mh-1\`\uFF0C</span>
<span class="token comment"># \`om\` sort by modification date, \`[1,3]\` only first 3 files</span>
<span class="token comment">#\`om\`\u6309\u4FEE\u6539\u65E5\u671F\u6392\u5E8F\uFF0C\`[1,3]\`\u4EC5\u524D3\u4E2A\u6587\u4EF6</span>
print <span class="token parameter variable">-l</span> **/*<span class="token punctuation">(</span>.Lm-2mh-1om<span class="token punctuation">[</span><span class="token number">1,3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># Show every directory that contain directory \`.git\`</span>
<span class="token comment">#\u663E\u793A\u5305\u542B\u76EE\u5F55\`.git\`\u7684\u6BCF\u4E2A\u76EE\u5F55</span>
print <span class="token parameter variable">-l</span> **/*<span class="token punctuation">(</span>e:<span class="token string">&#39;[[ -d $REPLY/.git ]]&#39;</span><span class="token builtin class-name">:</span><span class="token punctuation">)</span>

<span class="token comment"># Return the file name (t stands for tail)</span>
<span class="token comment">#\u8FD4\u56DE\u6587\u4EF6\u540D\uFF08t\u4EE3\u8868\u5C3E\u90E8\uFF09</span>
print <span class="token parameter variable">-l</span> *.txt<span class="token punctuation">(</span>:t<span class="token punctuation">)</span>

<span class="token comment"># Return the file name without the extension (r stands for remove_extension)</span>
<span class="token comment">#\u8FD4\u56DE\u6CA1\u6709\u6269\u5C55\u540D\u7684\u6587\u4EF6\u540D\uFF08r\u4EE3\u8868remove_extension\uFF09</span>
print <span class="token parameter variable">-l</span> *.txt<span class="token punctuation">(</span>:t:r<span class="token punctuation">)</span>

<span class="token comment"># Return the extension</span>
<span class="token comment">#\u8FD4\u56DE\u6269\u5C55\u540D</span>
print <span class="token parameter variable">-l</span> *.txt<span class="token punctuation">(</span>:e<span class="token punctuation">)</span>

<span class="token comment"># Return the parent folder of the file (h stands for head)</span>
<span class="token comment">#\u8FD4\u56DE\u6587\u4EF6\u7684\u7236\u6587\u4EF6\u5939\uFF08h\u4EE3\u8868\u5934\u90E8\uFF09</span>
print <span class="token parameter variable">-l</span> *.txt<span class="token punctuation">(</span>:h<span class="token punctuation">)</span>

<span class="token comment"># Return the parent folder of the parent</span>
<span class="token comment">#\u8FD4\u56DE\u7236\u7EA7\u7684\u7236\u6587\u4EF6\u5939</span>
print <span class="token parameter variable">-l</span> *.txt<span class="token punctuation">(</span>:h:h<span class="token punctuation">)</span>

<span class="token comment"># Return the parent folder of the first file</span>
<span class="token comment">#\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u6587\u4EF6\u7684\u7236\u6587\u4EF6\u5939</span>
print <span class="token parameter variable">-l</span> *.txt<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>:h<span class="token punctuation">)</span>

<span class="token comment"># Parameter expansion</span>
<span class="token comment">#\u53C2\u6570\u6269\u5C55</span>
<span class="token assign-left variable">files</span><span class="token operator">=</span><span class="token punctuation">(</span>*.txt<span class="token punctuation">)</span>          <span class="token comment"># store a glob in a variable</span>
print <span class="token parameter variable">-l</span> <span class="token variable">$files</span>
print <span class="token parameter variable">-l</span> <span class="token variable">$files</span><span class="token punctuation">(</span>:h<span class="token punctuation">)</span>    <span class="token comment"># this is the syntax we saw before</span>
print <span class="token parameter variable">-l</span> <span class="token variable">\${files<span class="token operator">:</span>h}</span>
print <span class="token parameter variable">-l</span> <span class="token variable">\${files(<span class="token operator">:</span>h)}</span>  <span class="token comment"># don&#39;t mix the two, or you&#39;ll get an error</span>
print <span class="token parameter variable">-l</span> <span class="token variable">\${files<span class="token operator">:</span>u}</span>    <span class="token comment"># the :u modifier makes the text uppercase</span>

<span class="token comment"># :s modifier</span>
<span class="token comment">#\uFF1As\u7F16\u8F91</span>
<span class="token assign-left variable">variable</span><span class="token operator">=</span><span class="token string">&quot;path/aaabcd&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${variable<span class="token operator">:</span>s<span class="token operator">/</span>bc<span class="token operator">/</span>BC<span class="token operator">/</span>}</span>    <span class="token comment"># path/aaaBCd</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${variable<span class="token operator">:</span>s_bc_BC_}</span>    <span class="token comment"># path/aaaBCd</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${variable<span class="token operator">:</span>s<span class="token operator">/</span>\\<span class="token operator">/</span><span class="token operator">/</span>.<span class="token operator">/</span>}</span>     <span class="token comment"># path.aaabcd (escaping the slash \\/)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${variable<span class="token operator">:</span>s_<span class="token operator">/</span>_._}</span>      <span class="token comment"># path.aaabcd (slightly more readable)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${variable<span class="token operator">:</span>s<span class="token operator">/</span>a<span class="token operator">/</span>A<span class="token operator">/</span>}</span>      <span class="token comment"># pAth/aaabcd (only first A is replaced)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${variable<span class="token operator">:</span>gs<span class="token operator">/</span>a<span class="token operator">/</span>A<span class="token operator">/</span>}</span>     <span class="token comment"># pAth/AAAbcd (all A is replaced)</span>

<span class="token comment"># Split the file name at each underscore</span>
<span class="token comment">#\u5728\u6BCF\u4E2A\u4E0B\u5212\u7EBF\u5904\u62C6\u5206\u6587\u4EF6\u540D</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${(s._.)file}</span>

<span class="token comment"># Join expansion flag, opposite of the split flag.</span>
<span class="token comment">#\u52A0\u5165\u6269\u5C55\u6807\u5FD7\uFF0C\u4E0E\u62C6\u5206\u6807\u5FD7\u76F8\u5BF9\u3002</span>
<span class="token assign-left variable">array</span><span class="token operator">=</span><span class="token punctuation">(</span>a b c d<span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${(j.-.)array}</span> <span class="token comment"># a-b-c-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function p(c,o){return s(),a("div",null,i)}const m=n(t,[["render",p],["__file","zsh.html.vue"]]);export{m as default};
