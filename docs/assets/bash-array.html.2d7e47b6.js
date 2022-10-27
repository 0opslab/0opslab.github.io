import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#func{bash\u4E2D\u7684\u5404\u79CDarry\u64CD\u4F5C}</span>

<span class="token comment">#in bash, you create array like this</span>

<span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span>one two three<span class="token punctuation">)</span>

<span class="token comment">#to call the elements</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${arr<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${arr<span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>

<span class="token comment"># or shell</span>

<span class="token assign-left variable">array</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token string">&quot;A&quot;</span> <span class="token string">&quot;B&quot;</span> <span class="token string">&quot;ElementC&quot;</span> <span class="token string">&quot;ElementE&quot;</span> <span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">element</span> <span class="token keyword">in</span> <span class="token variable">\${array<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$element</span>
    <span class="token keyword">done</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Nbr of elements:&quot;</span> <span class="token variable">\${<span class="token operator">#</span>array<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">\${array<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>



<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    num<span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">j</span> <span class="token keyword">in</span> <span class="token variable">\${num<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello: <span class="token variable">$j</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">j</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">\${num<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello: <span class="token variable">$j</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">j</span> <span class="token keyword">in</span> <span class="token variable">\${num<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello: <span class="token variable">$j</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">j</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">\${num<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello: <span class="token variable">$j</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment">#\u521D\u59CB\u5316\u5B9A\u4E49\u4E09\u4E2A\u6570\u7EC4</span>
<span class="token assign-left variable">arry1</span><span class="token operator">=</span><span class="token punctuation">(</span>A B C<span class="token punctuation">)</span>
<span class="token assign-left variable">arry2</span><span class="token operator">=</span><span class="token punctuation">(</span>D E F<span class="token punctuation">)</span>
<span class="token assign-left variable">arry3</span><span class="token operator">=</span><span class="token punctuation">(</span>G H I<span class="token punctuation">)</span>
<span class="token comment">#</span>
<span class="token comment">#\u4F7F\u7528for\u5FAA\u73AF\u6765\u8BFB\u53D6\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u4E2A\u6570\uFF0C\u6BCF\u6B21\u8BFB\u53D6\u5B8C\u4E00\u4E2A\u6570\u7EC4\u5C06\u5176\u6253\u5370\u5230\u5C4F\u5E55\u4E0A\u5E76\u7EE7\u7EED\u8BFB\u53D6</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span>
   <span class="token keyword">do</span>
     <span class="token builtin class-name">eval</span> <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token variable">\${arry\${i}</span><span class="token punctuation">[</span>@<span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token keyword">for</span> <span class="token for-or-select variable">element</span> <span class="token keyword">in</span> <span class="token variable">\${value}</span>
         <span class="token keyword">do</span>
           <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">\${value}</span>
           <span class="token builtin class-name">continue</span> <span class="token number">2</span>
         <span class="token keyword">done</span>
    <span class="token keyword">done</span>
<span class="token builtin class-name">echo</span>

<span class="token comment">#\u5B9A\u4E49\u4E09\u4E2A\u4E00\u7EF4\u6570\u7EC4</span>
<span class="token assign-left variable">array1</span><span class="token operator">=</span><span class="token string">&quot;A B C&quot;</span>
<span class="token assign-left variable">array2</span><span class="token operator">=</span><span class="token string">&quot;D E F&quot;</span>
<span class="token assign-left variable">array3</span><span class="token operator">=</span><span class="token string">&quot;G H I&quot;</span>
<span class="token comment">#</span>
<span class="token comment">#\u4F7F\u7528for\u8BED\u53E5\u6765\u5FAA\u73AF\u8BFB\u53D6\u6240\u5B9A\u4E49\u7684\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u5E76\u6682\u5B58\u5230\u53D8\u91CFi\u4E2D</span>
<span class="token comment">#\u5C06\u6682\u5B58\u5728\u53D8\u91CFi\u4E2D\u7684\u5143\u7D20\u8D4B\u4E88\u53D8\u91CFvalue</span>
<span class="token comment">#\u4F7F\u7528for\u8BED\u53E5\u8BFB\u53D6\u53D8\u91CFvalue\u4E2D\u7684\u503C \u6BCF\u6B21\u8BFB\u53D6\u5B8C\u540E\u90FD\u6253\u5370\u5230\u6807\u51C6\u8F93\u51FA\u76F4\u5230\u8BFB\u53D6\u5B8C\u6210</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> array1 array2 array3
   <span class="token keyword">do</span>
     <span class="token builtin class-name">eval</span> <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token variable">$$</span>i
      <span class="token keyword">for</span> <span class="token for-or-select variable">j</span> <span class="token keyword">in</span> <span class="token variable">$value</span>
         <span class="token keyword">do</span>
          <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$value</span>
          <span class="token builtin class-name">continue</span> <span class="token number">2</span>
      <span class="token keyword">done</span>
<span class="token keyword">done</span>


<span class="token comment">#\u521D\u59CB\u5316\u7B2C\u4E00\u4E2A\u6570\u7EC4</span>
<span class="token assign-left variable">array2</span><span class="token operator">=</span><span class="token punctuation">(</span>
   element2
   element3
   element4
<span class="token punctuation">)</span>
<span class="token comment">#\u521D\u59CB\u5316\u7B2C\u4E8C\u4E2A\u6570\u7EC4</span>
<span class="token assign-left variable">array3</span><span class="token operator">=</span><span class="token punctuation">(</span>
   element5 element6 element7
<span class="token punctuation">)</span>
<span class="token comment">#\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570 \u5C06\u6240\u5B9A\u4E49\u7684\u4E24\u4E2A\u4E00\u7EF4\u6570\u7EC4\u7EC4\u5408\u6210\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4\u5E76\u663E\u793A\u5230\u5C4F\u5E55\u4E0A</span>
<span class="token function-name function">ARRAY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&gt;&gt;Two-dimensional array&lt;&lt;&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${array2<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${array3<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">#</span>
ARRAY
<span class="token builtin class-name">echo</span> array



<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">j</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> <span class="token assign-left variable">limit</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token comment">#</span>
<span class="token comment">#\u521D\u59CB\u5316\u4E00\u4E2A\u4E00\u7EF4\u6570\u7EC4</span>
<span class="token assign-left variable">array</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">34</span> <span class="token number">35</span> <span class="token number">36</span> <span class="token number">37</span> <span class="token number">38</span> <span class="token number">39</span><span class="token punctuation">)</span>
<span class="token comment">#</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Two-dimensional array&quot;</span>
<span class="token comment">#\u4F7F\u7528while\u5FAA\u73AF\u5B8C\u6210\u5BF9\u4E00\u7EF4\u6570\u7EC4\u5143\u7D20\u7684\u8BFB\u53D6 \u5E76\u5C06\u8BFB\u53D6\u7684\u5143\u7D20\u91CD\u65B0\u7EC4\u6210\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4\u540E\u8F93\u51FA</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$j</span> <span class="token parameter variable">-lt</span> <span class="token variable">$limit</span> <span class="token punctuation">]</span>
    <span class="token keyword">do</span>
<span class="token comment">#\u5BF9\u6570\u7EC4array\u4E2D\u7684\u5143\u7D20\u6BCF\u6B21\u90FD\u4ECE\u7B2C$j\u4E2A\u5143\u7D20\u5F00\u59CB\u8BFB\u53D6\u4E14\u8BFB\u53D6\u7684\u6570\u76EE\u4E3A3</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${array<span class="token punctuation">[</span>*<span class="token punctuation">]</span><span class="token operator">:</span>$j<span class="token operator">:</span>3}</span>&quot;</span>       
      <span class="token builtin class-name">let</span> <span class="token assign-left variable">j</span><span class="token operator">+=</span><span class="token number">2</span>
      <span class="token builtin class-name">let</span> j++
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span>

<span class="token comment">#\u5728\u793A\u4F8B\u4E2D\uFF0C\u884C\u5206\u9694\u7B26\uFF08\u7B2C1\u7EF4\uFF09\u662F\u7A7A\u683C\u5B57\u7B26\u3002\u4E3A\u4E86\u5F15\u5165\u5B57\u6BB5\u5206\u9694\u7B26\uFF08\u7B2C\u4E8C\u7EF4\uFF09\uFF0C\u4F7F\u7528\u6807\u51C6unix\u5DE5\u5177tr\u3002</span>
<span class="token comment">#\u7528\u4E8E\u9644\u52A0\u5C3A\u5BF8\u7684\u9644\u52A0\u5206\u9694\u7B26\u53EF\u4EE5\u4EE5\u76F8\u540C\u7684\u65B9\u5F0F\u4F7F\u7528\u3002</span>

<span class="token comment">#\u5F53\u7136\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u7684\u6027\u80FD\u4E0D\u662F\u5F88\u597D\uFF0C\u4F46\u662F\u5982\u679C\u6027\u80FD\u662F\u4E0D\u662F\u4E00\u4E2A\u6807\u51C6\uFF0C\u8FD9\u79CD\u505A\u6CD5\u662F\u975E\u5E38\u901A\u7528\u7684\uFF0C\u53EF\u4EE5\u89E3\u51B3\u5F88\u591A\u95EE\u9898\uFF1A</span>

<span class="token assign-left variable">array2d</span><span class="token operator">=</span><span class="token string">&quot;1.1:1.2:1.3 2.1:2.2 3.1:3.2:3.3:3.4&quot;</span> 

<span class="token keyword">function</span> <span class="token function-name function">process2ndDimension</span> <span class="token punctuation">{</span> 
    <span class="token keyword">for</span> <span class="token for-or-select variable">dimension2</span> <span class="token keyword">in</span> <span class="token variable">$*</span> 
    <span class="token keyword">do</span> 
     <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token variable">$dimension2</span> <span class="token string">&quot; &quot;</span> 
    <span class="token keyword">done</span> 
    <span class="token builtin class-name">echo</span> 
<span class="token punctuation">}</span> 

<span class="token keyword">function</span> <span class="token function-name function">process1stDimension</span> <span class="token punctuation">{</span> 
    <span class="token keyword">for</span> <span class="token for-or-select variable">dimension1</span> <span class="token keyword">in</span> <span class="token variable">$array2d</span> 
    <span class="token keyword">do</span> 
     process2ndDimension <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $dimension1 <span class="token operator">|</span> <span class="token function">tr</span> <span class="token builtin class-name">:</span> <span class="token string">&quot; &quot;</span><span class="token variable">\`</span></span> 
    <span class="token keyword">done</span> 
<span class="token punctuation">}</span> 

process1stDimension 

<span class="token comment">##\u8BE5\u6837\u54C1\u7684\u8F93\u51FA\u662F\u8FD9\u6837\u7684\uFF1A</span>

<span class="token comment">##1.1  1.2  1.3  </span>
<span class="token comment">##2.1  2.2  </span>
<span class="token comment">##3.1  3.2  3.3  3.4 </span>




<span class="token comment">#!/bin/bash</span>
<span class="token comment">##\u63D0\u53D6\u63A7\u5236\u53F0\u4E0Aw\u547D\u4EE4\u7ED9\u51FA\u7684\uFF1AUSER,TTY\u548CFROM\u503C.\u5728bash\u4E2D\u6211\u8BD5\u56FE\u83B7\u53D6\u6B64\u8F93\u51FA\u5E76\u5C06\u8FD9\u4E9B\u503C\u653E\u5165\u591A</span>
<span class="token comment">## \u7EF4\u6570\u7EC4(\u6216\u53EA\u662F\u4E00\u4E2A\u5E26\u7A7A\u683C\u5206\u9694\u7B26\u7684\u6570\u7EC4).</span>
w<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{if(NR &gt; 2) print $1,$2,$3}&#39;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> line
<span class="token keyword">do</span>
     <span class="token assign-left variable">USERS</span><span class="token operator">+=</span><span class="token punctuation">(</span><span class="token string">&quot;<span class="token variable">$line</span>&quot;</span><span class="token punctuation">)</span>
     <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>USERS<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>USERS<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>

<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">USERS</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> lastpipe
w <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{if(NR &gt; 2) print $1,$2,$3}&#39;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> line<span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token assign-left variable">USERS</span><span class="token operator">+=</span><span class="token punctuation">(</span><span class="token string">&quot;<span class="token variable">$line</span>&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>USERS<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>

<span class="token comment">##\u53EF\u4EE5\u4F7F\u7528process substitution\u800C\u4E0D\u662F\u7BA1\u9053,\u4EE5\u4FBFread\u547D\u4EE4\u5728\u4E3Bshell\u8FDB\u7A0B\u4E2D\u8FD0\u884C.</span>

<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">USERS</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line<span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token assign-left variable">USERS</span><span class="token operator">+=</span><span class="token punctuation">(</span><span class="token string">&quot;<span class="token variable">$line</span>&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span>w <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{if(NR &gt; 2) print $1,$2,$3}&#39;</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>USERS<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>

<span class="token comment">##\u53EF\u4EE5\u4F7F\u7528\u53EF\u79FB\u690D\u65B9\u6CD5,\u8BE5\u65B9\u6CD5\u9002\u7528\u4E8E\u6CA1\u6709\u8FDB\u7A0B\u6682\u505C\u6216ksh / zsh\u884C\u4E3A\u7684shell,\u4F8B\u5982Bourne,dash\u548Cpdksh.</span>
<span class="token comment">## (\u5BF9\u4E8E\u6570\u7EC4,\u60A8\u4ECD\u7136\u9700\u8981(pd)ksh,bash\u6216zsh.)\u8FD0\u884C\u9700\u8981\u7BA1\u9053\u5185\u7BA1\u9053\u6570\u636E\u7684\u6240\u6709\u5185\u5BB9.</span>

<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">USERS</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> lastpipe
w <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{if(NR &gt; 2) print $1,$2,$3}&#39;</span> <span class="token operator">|</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token builtin class-name">read</span> line<span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">USERS</span><span class="token operator">+=</span><span class="token punctuation">(</span><span class="token string">&quot;<span class="token variable">$line</span>&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>USERS<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[p];function t(o,c){return s(),a("div",null,i)}const u=n(l,[["render",t],["__file","bash-array.html.vue"]]);export{u as default};
