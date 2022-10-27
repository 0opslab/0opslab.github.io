import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const p={},t=e(`<h1 id="title-if" tabindex="-1"><a class="header-anchor" href="#title-if" aria-hidden="true">#</a> title{if - }</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment">#\u2013b \u5F53file\u5B58\u5728\u5E76\u4E14\u662F\u5757\u6587\u4EF6\u65F6\u8FD4\u56DE\u771F</span>
<span class="token comment">#-c \u5F53file\u5B58\u5728\u5E76\u4E14\u662F\u5B57\u7B26\u6587\u4EF6\u65F6\u8FD4\u56DE\u771F</span>
<span class="token comment">#-d \u5F53pathname\u5B58\u5728\u5E76\u4E14\u662F\u4E00\u4E2A\u76EE\u5F55\u65F6\u8FD4\u56DE\u771F</span>
<span class="token comment">#-e \u5F53pathname\u6307\u5B9A\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u5B58\u5728\u65F6\u8FD4\u56DE\u771F</span>
<span class="token comment">#-f \u5F53file\u5B58\u5728\u5E76\u4E14\u662F\u6B63\u89C4\u6587\u4EF6\u65F6\u8FD4\u56DE\u771F</span>
<span class="token comment">#-g \u5F53\u7531pathname\u6307\u5B9A\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u5B58\u5728\u5E76\u4E14\u8BBE\u7F6E\u4E86SGID\u4F4D\u65F6\u8FD4\u56DE\u4E3A\u771F</span>
<span class="token comment">#-h \u5F53file\u5B58\u5728\u5E76\u4E14\u662F\u7B26\u53F7\u94FE\u63A5\u6587\u4EF6\u65F6\u8FD4\u56DE\u771F\uFF0C\u8BE5\u9009\u9879\u5728\u4E00\u4E9B\u8001\u7CFB\u7EDF\u4E0A\u65E0\u6548</span>
<span class="token comment">#-k \u5F53\u7531pathname\u6307\u5B9A\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u5B58\u5728\u5E76\u4E14\u8BBE\u7F6E\u4E86\u201C\u7C98\u6EDE\u201D\u4F4D\u65F6\u8FD4\u56DE\u771F</span>
<span class="token comment">#-p \u5F53file\u5B58\u5728\u5E76\u4E14\u662F\u547D\u4EE4\u7BA1\u9053\u65F6\u8FD4\u56DE\u4E3A\u771F</span>
<span class="token comment">#-r \u5F53\u7531pathname\u6307\u5B9A\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u5B58\u5728\u5E76\u4E14\u53EF\u8BFB\u65F6\u8FD4\u56DE\u4E3A\u771F</span>
<span class="token comment">#-s \u5F53file\u5B58\u5728\u6587\u4EF6\u5927\u5C0F\u5927\u4E8E0\u65F6\u8FD4\u56DE\u771F</span>
<span class="token comment">#-u \u5F53\u7531pathname\u6307\u5B9A\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u5B58\u5728\u5E76\u4E14\u8BBE\u7F6E\u4E86SUID\u4F4D\u65F6\u8FD4\u56DE\u771F</span>
<span class="token comment">#-w \u5F53\u7531pathname\u6307\u5B9A\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u5B58\u5728\u5E76\u4E14\u53EF\u6267\u884C\u65F6\u8FD4\u56DE\u771F\u3002\u4E00\u4E2A\u76EE\u5F55\u4E3A\u4E86\u5B83\u7684\u5185\u5BB9\u88AB\u8BBF\u95EE\u5FC5\u7136\u662F\u53EF\u6267\u884C\u7684\u3002</span>
<span class="token comment">#-o \u5F53\u7531pathname\u6307\u5B9A\u7684\u6587\u4EF6\u6216\u76EE\u5F55\u5B58\u5728\u5E76\u4E14\u88AB\u5B50\u5F53\u524D\u8FDB\u7A0B\u7684\u6709\u6548\u7528\u6237ID\u6240\u6307\u5B9A\u7684\u7528\u6237\u62E5\u6709\u65F6\u8FD4\u56DE\u771F\u3002</span>

<span class="token comment">#Bash Shell \u91CC\u9762\u6BD4\u8F83\u5B57\u7B26\u5199\u6CD5\uFF1A</span>
<span class="token comment">#-eq \u7B49\u4E8E</span>
<span class="token comment">#-ne \u4E0D\u7B49\u4E8E</span>
<span class="token comment">#-gt \u5927\u4E8E</span>
<span class="token comment">#-lt \u5C0F\u4E8E</span>
<span class="token comment">#-le \u5C0F\u4E8E\u7B49\u4E8E</span>
<span class="token comment">#-ge \u5927\u4E8E\u7B49\u4E8E</span>
<span class="token comment">#-z \u7A7A\u4E32</span>
<span class="token comment">#= \u4E24\u4E2A\u5B57\u7B26\u76F8\u7B49</span>
<span class="token comment">#!= \u4E24\u4E2A\u5B57\u7B26\u4E0D\u7B49</span>
<span class="token comment">#-n \u975E\u7A7A\u4E32</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$b</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token parameter variable">-o</span> <span class="token variable">$c</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token parameter variable">-a</span> <span class="token variable">$a</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token builtin class-name">test</span>
<span class="token keyword">fi</span>
<span class="token comment">#\u5BF9shell\u4E2D\u7684\u5173\u7CFB\u8FD0\u7B97\u7B26\u8BF4\u660E\u5982\u4E0B\uFF1A</span>
<span class="token comment">#-gt \u8868\u793Agreater than,\u5927\u4E8E</span>
<span class="token comment">#-lt \u8868\u793Aless than,\u5C0F\u4E8E</span>
<span class="token comment">#-eq \u8868\u793A equal,\u7B49\u4E8E</span>
<span class="token comment">#\u5BF9shell\u4E2D\u7684\u8FDE\u63A5\u7B26\u8BF4\u660E\u5982\u4E0B\uFF1A</span>
<span class="token comment">#-a \u8868\u793A and,\u4E14</span>
<span class="token comment">#-o \u8868\u793A or,\u6216 </span>
<span class="token comment">#\u4E5F\u53EF\u4EE5\u5199\u6210\u8FD9\u6837\uFF1A</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$b</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token variable">$c</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token builtin class-name">test</span>
<span class="token keyword">fi</span>
<span class="token comment">#\u5176\u4E2D,&amp;&amp;\u8868\u793Aand,||\u8868\u793Aor</span>


<span class="token comment">#\u6587\u4EF6\u8868\u8FBE\u5F0F</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span>  <span class="token function">file</span> <span class="token punctuation">]</span>    <span class="token comment">#\u5982\u679C\u6587\u4EF6\u5B58\u5728</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token punctuation">..</span>.   <span class="token punctuation">]</span>    <span class="token comment">#\u5982\u679C\u76EE\u5F55\u5B58\u5728</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token function">file</span>  <span class="token punctuation">]</span>    <span class="token comment">#\u5982\u679C\u6587\u4EF6\u5B58\u5728\u4E14\u975E\u7A7A </span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-r</span> <span class="token function">file</span>  <span class="token punctuation">]</span>    <span class="token comment">#\u5982\u679C\u6587\u4EF6\u5B58\u5728\u4E14\u53EF\u8BFB</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-w</span> <span class="token function">file</span>  <span class="token punctuation">]</span>    <span class="token comment">#\u5982\u679C\u6587\u4EF6\u5B58\u5728\u4E14\u53EF\u5199</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token function">file</span>  <span class="token punctuation">]</span>    <span class="token comment">#\u5982\u679C\u6587\u4EF6\u5B58\u5728\u4E14\u53EF\u6267\u884C   </span>

<span class="token comment">#\u6574\u6570\u53D8\u91CF\u8868\u8FBE\u5F0F</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> int1 <span class="token parameter variable">-eq</span> int2 <span class="token punctuation">]</span>    <span class="token comment">#\u5982\u679Cint1\u7B49\u4E8Eint2   </span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> int1 <span class="token parameter variable">-ne</span> int2 <span class="token punctuation">]</span>    <span class="token comment">#\u5982\u679C\u4E0D\u7B49\u4E8E    </span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> int1 <span class="token parameter variable">-ge</span> int2 <span class="token punctuation">]</span>      <span class="token comment"># \u5982\u679C&gt;=</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> int1 <span class="token parameter variable">-gt</span> int2 <span class="token punctuation">]</span>      <span class="token comment"># \u5982\u679C&gt;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> int1 <span class="token parameter variable">-le</span> int2 <span class="token punctuation">]</span>      <span class="token comment"># \u5982\u679C&lt;=</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> int1 <span class="token parameter variable">-lt</span> int2 <span class="token punctuation">]</span>      <span class="token comment"># \u5982\u679C&lt;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$check</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">\${line}</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token number">111</span>
<span class="token keyword">fi</span>

<span class="token comment">##\u6CE8\u91CA\u591A\u884C\u65B9\u6CD5</span>
<span class="token keyword">if</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;ni&quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;ni&quot;</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;ni&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment">##\u5224\u65AD\u8FDB\u7A0B\u662F\u5426\u8FD0\u884C\uFF0C\u8FD0\u884C\u5C31KILL\u6389\uFF0C\u6CE8\u610Fgrep -v sh| grep -v grep</span>
<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-aef</span> <span class="token operator">|</span> <span class="token function">grep</span> $1 <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">sh</span><span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span>-z <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$1</span> process is not running 
<span class="token keyword">else</span>
  <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$var</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$1</span> process killed forcefully, process <span class="token function">id</span> <span class="token variable">$var</span><span class="token builtin class-name">.</span>
<span class="token keyword">fi</span>


<span class="token comment">#\u67E5\u770B\u6307\u5B9A\u8FDB\u7A0B\u662F\u5426\u5B58\u5728</span>
<span class="token comment">#\u5728\u83B7\u53D6\u5230 pid \u4E4B\u540E\uFF0C\u8FD8\u53EF\u4EE5\u6839\u636E pid \u67E5\u770B\u5BF9\u5E94\u7684\u8FDB\u7A0B\u662F\u5426\u5B58\u5728\uFF08\u8FD0\u884C\uFF09\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u7528\u4E8E kill \u6307\u5B9A\u7684\u8FDB\u7A0B\u3002</span>
<span class="token keyword">if</span> <span class="token function">ps</span> <span class="token parameter variable">-p</span> <span class="token variable">$PID</span> <span class="token operator">&gt;</span> /dev/null
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$PID</span> is running&quot;</span>
   <span class="token comment"># Do something knowing the pid exists, i.e. the process with $PID is running</span>
<span class="token keyword">fi</span>

<span class="token comment">#\u67E5pid\u5FAA\u73AFKILL</span>
<span class="token assign-left variable">pids</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token variable"><span class="token variable">$(</span>pgrep <span class="token parameter variable">-f</span> resque<span class="token variable">)</span></span> <span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">pid</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">\${pids<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$pid</span> <span class="token operator">!=</span> <span class="token variable">$$</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">kill</span> <span class="token string">&quot;<span class="token variable">$pid</span>&quot;</span>
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>


<span class="token comment">##\u6216</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$b</span>&quot;</span> <span class="token operator">=</span> <span class="token number">11</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$b</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;22&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
\u3000\u3000<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token keyword">fi</span>
<span class="token comment">##\u4E14\u7684\u8868\u8FBE\u65B9\u5F0F</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$b</span>&quot;</span> <span class="token operator">=</span> <span class="token number">11</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$b</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;22&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
\u3000\u3000<span class="token builtin class-name">echo</span> <span class="token variable">$b</span>
<span class="token keyword">fi</span>


<span class="token assign-left variable">project</span><span class="token operator">=</span><span class="token string">&quot;aaaaa&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">\${project}</span> <span class="token operator">=~</span> <span class="token string">&quot;aaa&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">cp</span> aaa.txt bbb.txt
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">\${project}</span> <span class="token operator">=~</span> <span class="token string">&quot;ccc&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">cp</span> aaa.txt ccc.txt
<span class="token keyword">fi</span>


<span class="token assign-left variable">project</span><span class="token operator">=</span><span class="token string">&quot;aaaaa&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">\${project}</span> <span class="token operator">=~</span> <span class="token string">&quot;aaa&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;aaa111&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;aaa222&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">\${project}</span> <span class="token operator">=~</span> <span class="token string">&quot;ccc&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;aaa555&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;aaa666&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function i(o,c){return s(),a("div",null,l)}const k=n(p,[["render",i],["__file","bash-if.html.vue"]]);export{k as default};
