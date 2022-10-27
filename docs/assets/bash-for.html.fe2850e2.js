import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># basic loop</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>

<span class="token comment"># loop ls command results</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> <span class="token parameter variable">-alF</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$var</span>
<span class="token keyword">done</span>

<span class="token comment"># loop over all the JPG files in the current directory</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">jpg_file</span> <span class="token keyword">in</span> *.jpg
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$jpg_file</span>
<span class="token keyword">done</span>

<span class="token comment"># loop specified number of times</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">10</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>

<span class="token comment"># loop specified number of times: the C/C++ style</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>

<span class="token comment"># loop specified number of times: the brace expansion</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span><span class="token punctuation">}</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>

<span class="token comment">##\u5FAA\u73AF\u5224\u65AD\u4E24\u6587\u4EF6\uFF0C\u5DEE\u96C6\u5185\u5BB9</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">File</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> aaa.txt<span class="token variable">\`</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
<span class="token assign-left variable">f</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> <span class="token number">222</span>.log  <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;<span class="token variable">$File</span>&quot;</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$File</span>&quot;</span> <span class="token punctuation">;</span> <span class="token keyword">fi</span>
<span class="token comment">##if [ &quot;$f&quot; == &quot;&quot; ]; then  echo &quot;$File&quot; ; fi</span>
<span class="token keyword">done</span>

<span class="token comment">##linux  shell \u6309\u884C\u5FAA\u73AF\u8BFB\u5165\u6587\u4EF6</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;*************************************<span class="token entity" title="\\n">\\n</span>&quot;</span>  
<span class="token builtin class-name">echo</span> <span class="token string">&quot; cat file whiel read line&quot;</span>  
<span class="token function">cat</span> test.txt <span class="token operator">|</span><span class="token keyword">while</span> <span class="token builtin class-name">read</span> line  
<span class="token keyword">do</span>  
  <span class="token builtin class-name">echo</span> <span class="token variable">$line</span><span class="token punctuation">;</span>  
<span class="token keyword">done</span>  
  
<span class="token builtin class-name">printf</span> <span class="token string">&quot;*************************************<span class="token entity" title="\\n">\\n</span>&quot;</span>  
<span class="token builtin class-name">echo</span> <span class="token string">&quot;while read line &lt;file&quot;</span>  
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line  
<span class="token keyword">do</span>  
  <span class="token builtin class-name">echo</span> <span class="token variable">$line</span><span class="token punctuation">;</span>  
<span class="token keyword">done</span> <span class="token operator">&lt;</span>test.txt  
  
<span class="token builtin class-name">printf</span> <span class="token string">&quot;*************************************<span class="token entity" title="\\n">\\n</span>&quot;</span>  
<span class="token builtin class-name">echo</span> <span class="token string">&quot;for line in cat test.txt&quot;</span>  
<span class="token assign-left variable">SAVEIFS</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>  
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token parameter variable">-en</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token variable">)</span></span>  
<span class="token keyword">for</span> <span class="token for-or-select variable">line</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> test.txt<span class="token variable">)</span></span>  
<span class="token keyword">do</span>  
  <span class="token builtin class-name">echo</span>  <span class="token variable">$line</span><span class="token punctuation">;</span>  
<span class="token keyword">done</span>  
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token variable">$SAVEIFS</span> 


<span class="token comment">#\u751F\u6210192.168.10.1\u5230192.168.10.254  IP\u5217\u8868</span>
<span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">254</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token number">192.168</span>.10.<span class="token variable">$i</span><span class="token punctuation">;</span><span class="token keyword">done</span>

<span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">expr</span> $i <span class="token punctuation">\\</span>* <span class="token number">4</span><span class="token variable">)</span></span><span class="token punctuation">;</span><span class="token keyword">done</span>

<span class="token comment">#\u5728shell\u4E2D\u5E38\u7528\u7684\u662F for i in $(seq 10);do echo $i;done</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span><span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token variable">$i</span><span class="token punctuation">;</span><span class="token keyword">done</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">\${arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token variable">$i</span><span class="token punctuation">;</span><span class="token keyword">done</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$*</span> <span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token variable">$i</span><span class="token punctuation">;</span><span class="token keyword">done</span>

<span class="token comment">##\u5FAA\u73AF\u6253\u5370\u67D0\u6587\u4EF6\u5185\u5BB9</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">File</span> <span class="token keyword">in</span> /proc/sys/net/ipv4/conf/*/accept_redirects<span class="token punctuation">;</span> <span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$File</span>
<span class="token keyword">done</span>

<span class="token comment">#\u76F4\u63A5\u6307\u5B9A\u5FAA\u73AF\u5185\u5BB9</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> f1 f2 f3 <span class="token punctuation">;</span><span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>

<span class="token comment">##C \u8BED\u6CD5for \u5FAA\u73AF</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>

<span class="token comment">##\u6279\u91CF\u4FEE\u6539\u6587\u4EF6\u540E\u7F00\uFF0Cconf\u6539cfg</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> *.conf<span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$i</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">sed</span> <span class="token string">&quot;s/conf/cfg/&quot;</span> <span class="token operator">&lt;&lt;&lt;</span>$i<span class="token variable">)</span></span><span class="token punctuation">;</span><span class="token keyword">done</span>


<span class="token comment">##for\u5FAA\u73AF\u6BCF\u79D2\u6267\u884C\u811A\u672C</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">do</span> 
   <span class="token function">sudo</span> <span class="token function">sh</span> /data/shell/check_slave.sh
    <span class="token function">sleep</span> <span class="token number">1</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function t(i,c){return n(),a("div",null,o)}const k=s(l,[["render",t],["__file","bash-for.html.vue"]]);export{k as default};
