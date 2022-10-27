import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const p={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;A string: &quot;</span> String

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$String</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&#39;quit&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$String</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;a-z&#39;</span> <span class="token string">&#39;A-Z&#39;</span>
  <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Next [quit for quiting]: &quot;</span> String
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#break n \u4EE3\u8868\u8DF3\u51FAn\u5C42\u5FAA\u73AF\uFF0C\u5982\u679Cn\u6BD4\u5F53\u524D\u5FAA\u73AF\u5C42\u6570\u5927\u5219\u8DF3\u51FA\u5168\u90E8\u5FAA\u73AF</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">I</span> <span class="token keyword">in</span> A B C D
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$I</span>:&quot;</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">J</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">10</span><span class="token variable">\`</span></span>
    <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$J</span> <span class="token parameter variable">-eq</span> <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">break</span>
            <span class="token comment">#break 2</span>
        <span class="token keyword">fi</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$J</span>&quot;</span>
    <span class="token keyword">done</span>
<span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">I</span> <span class="token keyword">in</span> A B C D
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$I</span>:&quot;</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">J</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">10</span><span class="token variable">\`</span></span>
    <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$J</span> <span class="token parameter variable">-eq</span> <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">continue</span>        <span class="token comment">#\u7ED3\u675F\u672C\u6B21\u5E76\u8FDB\u5165\u4E0B\u6B21\u6267\u884C\uFF0C\u8FD9\u91CC\u4E0D\u4F1A\u6253\u53705</span>
            <span class="token comment">#continue 2     #\u8DF3\u51FA\u5FAA\u73AF</span>
        <span class="token keyword">fi</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$J</span>&quot;</span>
    <span class="token keyword">done</span>
    <span class="token builtin class-name">echo</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Input a character: &quot;</span> Char

<span class="token keyword">case</span> <span class="token variable">$Char</span> <span class="token keyword">in</span>
<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;A digit.&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>a-z<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;A lower.&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>A-Z<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;An upper.&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span>:punct:<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;A punction.&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Special char.&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Do you agree [yes|no]?: &quot;</span> YesNo

<span class="token keyword">case</span> <span class="token variable">$YesNo</span> <span class="token keyword">in</span>
y<span class="token operator">|</span>Y<span class="token operator">|</span><span class="token punctuation">[</span>Yy<span class="token punctuation">]</span>es<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Agreed, proceed.&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
n<span class="token operator">|</span>N<span class="token operator">|</span><span class="token punctuation">[</span>nN<span class="token punctuation">]</span>o<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Disagreed, can&#39;t proceed.&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Invalid input.&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function i(c,o){return s(),a("div",null,l)}const r=n(p,[["render",i],["__file","bash-while.html.vue"]]);export{r as default};
