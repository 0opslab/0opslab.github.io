import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const p={},e=t(`<h4 id="label-\u53BB\u9664\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#label-\u53BB\u9664\u7A7A\u683C" aria-hidden="true">#</a> @label:\u53BB\u9664\u7A7A\u683C</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">str</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>\uFF1A\u5220\u9664\u5B57\u7B26\u4E32\u4E24\u8FB9\u7684\u6307\u5B9A\u5B57\u7B26\uFF0C\u62EC\u53F7\u7684\u5199\u5165\u6307\u5B9A\u5B57\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u683C
<span class="token builtin">str</span><span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\u5220\u9664\u5B57\u7B26\u4E32\u5DE6\u8FB9\u7684\u6307\u5B9A\u5B57\u7B26\uFF0C\u62EC\u53F7\u7684\u5199\u5165\u6307\u5B9A\u5B57\u7B26\uFF0C\u9ED8\u8BA4\u7A7A\u683C
<span class="token builtin">str</span><span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\u5220\u9664\u5B57\u7B26\u4E32\u53F3\u8FB9\u7684\u6307\u5B9A\u5B57\u7B26\uFF0C\u62EC\u53F7\u7684\u5199\u5165\u6307\u5B9A\u5B57\u7B26\uFF0C\u9ED8\u8BA4\u7A7A\u683C    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="label-\u8FDE\u63A5\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#label-\u8FDE\u63A5\u5B57\u7B26\u4E32" aria-hidden="true">#</a> @label:\u8FDE\u63A5\u5B57\u7B26\u4E32</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>li<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;alex&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;eric&quot;</span><span class="token punctuation">]</span>
s<span class="token operator">=</span><span class="token string">&quot;******&quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>li<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="label-\u67E5\u627E\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#label-\u67E5\u627E\u5B57\u7B26\u4E32" aria-hidden="true">#</a> @label:\u67E5\u627E\u5B57\u7B26\u4E32</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u529F\u80FD\u76F8\u540C\uFF0C\u533A\u522B\u5728\u4E8Efind()\u67E5\u627E\u5931\u8D25\u4F1A\u8FD4\u56DE-1\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u7A0B\u5E8F\u8FD0\u884C\u3002\u4E00\u822C\u7528find!=-1\u6216\u8005find&gt;-1\u6765\u4F5C\u4E3A\u5224\u65AD\u6761\u4EF6\u3002</span>
<span class="token builtin">str</span><span class="token punctuation">.</span>index \u548C<span class="token builtin">str</span><span class="token punctuation">.</span>find 
<span class="token comment"># \u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u5426\u662F\u4EE5 str \u5F00\u5934\uFF0C\u662F\u5219\u8FD4\u56DE True</span>
string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span>	
<span class="token comment">#\u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u5426\u662F\u4EE5 str \u7ED3\u675F\uFF0C\u662F\u5219\u8FD4\u56DE True</span>
string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span>	
<span class="token comment">#\u68C0\u6D4B str \u662F\u5426\u5305\u542B\u5728 string \u4E2D\uFF0C\u5982\u679C start \u548C end \u6307\u5B9A\u8303\u56F4\uFF0C\u5219\u68C0\u67E5\u662F\u5426\u5305\u542B\u5728\u6307\u5B9A\u8303\u56F4\u5185\uFF0C\u5982\u679C\u662F\u8FD4\u56DE\u5F00\u59CB\u7684\u7D22\u5F15\u503C\uFF0C\u5426\u5219\u8FD4\u56DE -1</span>
string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> start<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>	
<span class="token comment">#\u7C7B\u4F3C\u4E8E find()\uFF0C\u4E0D\u8FC7\u662F\u4ECE\u53F3\u8FB9\u5F00\u59CB\u67E5\u627E</span>
string<span class="token punctuation">.</span>rfind<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> start<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>	
<span class="token comment">#\u8DDF find() \u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u4E0D\u8FC7\u5982\u679C str \u4E0D\u5728 string \u4F1A\u62A5\u9519</span>
string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> start<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>	
<span class="token comment">#\u7C7B\u4F3C\u4E8E index()\uFF0C\u4E0D\u8FC7\u662F\u4ECE\u53F3\u8FB9\u5F00\u59CB</span>
string<span class="token punctuation">.</span>rindex<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> start<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#\u628A string \u4E2D\u7684 old_str \u66FF\u6362\u6210 new_str\uFF0C\u5982\u679C num \u6307\u5B9A\uFF0C\u5219\u66FF\u6362\u4E0D\u8D85\u8FC7 num \u6B21</span>
string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>old_str<span class="token punctuation">,</span> new_str<span class="token punctuation">,</span> num<span class="token operator">=</span>string<span class="token punctuation">.</span>count<span class="token punctuation">(</span>old<span class="token punctuation">)</span><span class="token punctuation">)</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="label-\u662F\u5426\u5305\u542B\u6307\u5B9A\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#label-\u662F\u5426\u5305\u542B\u6307\u5B9A\u5B57\u7B26\u4E32" aria-hidden="true">#</a> @label:\u662F\u5426\u5305\u542B\u6307\u5B9A\u5B57\u7B26\u4E32</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token string">&#39;hello&#39;</span> <span class="token keyword">in</span> <span class="token string">&#39;hello world&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="label-\u5B57\u7B26\u4E32\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#label-\u5B57\u7B26\u4E32\u957F\u5EA6" aria-hidden="true">#</a> @label:\u5B57\u7B26\u4E32\u957F\u5EA6</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">str</span><span class="token punctuation">.</span><span class="token builtin">len</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="label-\u5B57\u7B26\u4E32\u4E2D\u5B57\u6BCD\u5927\u5C0F\u5199\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#label-\u5B57\u7B26\u4E32\u4E2D\u5B57\u6BCD\u5927\u5C0F\u5199\u8F6C\u6362" aria-hidden="true">#</a> @label:\u5B57\u7B26\u4E32\u4E2D\u5B57\u6BCD\u5927\u5C0F\u5199\u8F6C\u6362</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>S<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#\u8F6C\u6362\u4E3A\u5C0F\u5199 </span>
S<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#\u8F6C\u6362\u4E3A\u5927\u5199 </span>
S<span class="token punctuation">.</span>swapcase<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#\u5927\u5C0F\u5199\u4E92\u6362 </span>
S<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#\u9996\u5B57\u6BCD\u5927\u5199 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="label-\u5C06\u5B57\u7B26\u4E32\u653E\u5165\u4E2D\u5FC3\u4F4D\u7F6E\u53EF\u6307\u5B9A\u957F\u5EA6\u4EE5\u53CA\u4F4D\u7F6E\u4E24\u8FB9\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#label-\u5C06\u5B57\u7B26\u4E32\u653E\u5165\u4E2D\u5FC3\u4F4D\u7F6E\u53EF\u6307\u5B9A\u957F\u5EA6\u4EE5\u53CA\u4F4D\u7F6E\u4E24\u8FB9\u5B57\u7B26" aria-hidden="true">#</a> @label:\u5C06\u5B57\u7B26\u4E32\u653E\u5165\u4E2D\u5FC3\u4F4D\u7F6E\u53EF\u6307\u5B9A\u957F\u5EA6\u4EE5\u53CA\u4F4D\u7F6E\u4E24\u8FB9\u5B57\u7B26</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">str</span><span class="token punctuation">.</span>center<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>center<span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="label-\u5B57\u7B26\u4E32\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#label-\u5B57\u7B26\u4E32\u7EDF\u8BA1" aria-hidden="true">#</a> @label:\u5B57\u7B26\u4E32\u7EDF\u8BA1</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>a<span class="token operator">=</span><span class="token string">&#39;hello world&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&#39;l&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="label-\u5E38\u7528\u5B57\u7B26\u4E32\u5224\u65AD\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#label-\u5E38\u7528\u5B57\u7B26\u4E32\u5224\u65AD\u51FD\u6570" aria-hidden="true">#</a> @label:\u5E38\u7528\u5B57\u7B26\u4E32\u5224\u65AD\u51FD\u6570</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>S<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span>prefix<span class="token punctuation">[</span><span class="token punctuation">,</span>start<span class="token punctuation">[</span><span class="token punctuation">,</span>end<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">#\u662F\u5426\u4EE5prefix\u5F00\u5934 </span>
S<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span>suffix<span class="token punctuation">[</span><span class="token punctuation">,</span>start<span class="token punctuation">[</span><span class="token punctuation">,</span>end<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>     <span class="token comment">#\u4EE5suffix\u7ED3\u5C3E </span>
S<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>                             <span class="token comment">#\u662F\u5426\u5168\u662F\u5B57\u6BCD\u548C\u6570\u5B57\uFF0C\u5E76\u81F3\u5C11\u6709\u4E00\u4E2A\u5B57\u7B26 </span>
S<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span>                          <span class="token comment">#\u662F\u5426\u5168\u662F\u5B57\u6BCD\uFF0C\u5E76\u81F3\u5C11\u6709\u4E00\u4E2A\u5B57\u7B26 </span>
S<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span>                          <span class="token comment">#\u662F\u5426\u5168\u662F\u6570\u5B57\uFF0C\u5E76\u81F3\u5C11\u6709\u4E00\u4E2A\u5B57\u7B26 </span>
S<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>                          <span class="token comment">#\u662F\u5426\u5168\u662F\u7A7A\u767D\u5B57\u7B26\uFF0C\u5E76\u81F3\u5C11\u6709\u4E00\u4E2A\u5B57\u7B26 </span>
S<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>                          <span class="token comment">#S\u4E2D\u7684\u5B57\u6BCD\u662F\u5426\u5168\u662F\u5C0F\u5199 </span>
S<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>                          <span class="token comment">#S\u4E2D\u7684\u5B57\u6BCD\u662F\u5426\u4FBF\u662F\u5927\u5199 </span>
S<span class="token punctuation">.</span>istitle<span class="token punctuation">(</span><span class="token punctuation">)</span>                          <span class="token comment">#S\u662F\u5426\u662F\u9996\u5B57\u6BCD\u5927\u5199\u7684</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="label-\u5B57\u7B26\u4E32\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#label-\u5B57\u7B26\u4E32\u5207\u7247" aria-hidden="true">#</a> @label:\u5B57\u7B26\u4E32\u5207\u7247</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">str</span> <span class="token operator">=</span> &#39;<span class="token number">0123456789</span>\u2032
<span class="token keyword">print</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">#\u622A\u53D6\u7B2C\u4E00\u4F4D\u5230\u7B2C\u4E09\u4F4D\u7684\u5B57\u7B26</span>
<span class="token keyword">print</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token comment">#\u622A\u53D6\u5B57\u7B26\u4E32\u7684\u5168\u90E8\u5B57\u7B26</span>
<span class="token keyword">print</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token comment">#\u622A\u53D6\u7B2C\u4E03\u4E2A\u5B57\u7B26\u5230\u7ED3\u5C3E</span>
<span class="token keyword">print</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">#\u622A\u53D6\u4ECE\u5934\u5F00\u59CB\u5230\u5012\u6570\u7B2C\u4E09\u4E2A\u5B57\u7B26\u4E4B\u524D</span>
<span class="token keyword">print</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">#\u622A\u53D6\u7B2C\u4E09\u4E2A\u5B57\u7B26</span>
<span class="token keyword">print</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">#\u622A\u53D6\u5012\u6570\u7B2C\u4E00\u4E2A\u5B57\u7B26</span>
<span class="token keyword">print</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">#\u521B\u9020\u4E00\u4E2A\u4E0E\u539F\u5B57\u7B26\u4E32\u987A\u5E8F\u76F8\u53CD\u7684\u5B57\u7B26\u4E32</span>
<span class="token keyword">print</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">#\u622A\u53D6\u5012\u6570\u7B2C\u4E09\u4F4D\u4E0E\u5012\u6570\u7B2C\u4E00\u4F4D\u4E4B\u524D\u7684\u5B57\u7B26</span>
<span class="token keyword">print</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token comment">#\u622A\u53D6\u5012\u6570\u7B2C\u4E09\u4F4D\u5230\u7ED3\u5C3E</span>
<span class="token keyword">print</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">#\u9006\u5E8F\u622A\u53D6\uFF0C\u622A\u53D6\u5012\u6570\u7B2C\u4E94\u4F4D\u6570\u4E0E\u5012\u6570\u7B2C\u4E09\u4F4D\u6570\u4E4B\u95F4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="label-\u5206\u5272-\u524D\u4E2D\u540E\u4E09\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#label-\u5206\u5272-\u524D\u4E2D\u540E\u4E09\u90E8\u5206" aria-hidden="true">#</a> @label:\u5206\u5272\uFF0C\u524D\u4E2D\u540E\u4E09\u90E8\u5206</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>s<span class="token operator">=</span><span class="token string">&quot;alex SB alex&quot;</span>
ret <span class="token operator">=</span> s<span class="token punctuation">.</span>partition<span class="token punctuation">(</span><span class="token string">&#39;SB&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
<span class="token comment">#\u8F93\u51FA\u5143\u7EC4  (&#39;alex &#39;, &#39;SB&#39;, &#39; alex&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="label-\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#label-\u66FF\u6362" aria-hidden="true">#</a> @label:\u66FF\u6362</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>s<span class="token operator">=</span><span class="token string">&quot;alex SB alex&quot;</span>
s<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;al&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;BB&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
<span class="token comment">#\u8F93\u51FA\u7ED3\u679C    BBex SB BBex</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="label-\u6309\u8F93\u5165\u5B57\u7B26\u5207\u5272" tabindex="-1"><a class="header-anchor" href="#label-\u6309\u8F93\u5165\u5B57\u7B26\u5207\u5272" aria-hidden="true">#</a> @label:\u6309\u8F93\u5165\u5B57\u7B26\u5207\u5272</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>s<span class="token operator">=</span><span class="token string">&quot;alexalec&quot;</span>
ret<span class="token operator">=</span>s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
<span class="token comment">#\u8F93\u51FA\u7ED3\u679C    [&#39;al&#39;, &#39;xal&#39;, &#39;c&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="label-\u6839\u636E\u6362\u884C\u6267\u884C\u5206\u5272" tabindex="-1"><a class="header-anchor" href="#label-\u6839\u636E\u6362\u884C\u6267\u884C\u5206\u5272" aria-hidden="true">#</a> @label:\u6839\u636E\u6362\u884C\u6267\u884C\u5206\u5272</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>s<span class="token operator">=</span><span class="token string">&quot;alex\\nalec&quot;</span>
ret<span class="token operator">=</span>s<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
<span class="token comment">#\u8F93\u51FA\u7ED3\u679C     [&#39;alex&#39;, &#39;alec&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="label-\u5B57\u7B26\u4E32\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#label-\u5B57\u7B26\u4E32\u683C\u5F0F\u5316" aria-hidden="true">#</a> @label:\u5B57\u7B26\u4E32\u683C\u5F0F\u5316</h4><h6 id="\u7B2C\u4E00\u79CD-\u5B57\u7B26\u4E32\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u79CD-\u5B57\u7B26\u4E32\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u7B2C\u4E00\u79CD\uFF1A\u5B57\u7B26\u4E32\u8868\u8FBE\u5F0F</h6><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;fk you %s&quot;</span> <span class="token operator">%</span> <span class="token string">&quot;\u5367\u69FD&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;fk that %s %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">&quot;\u6211\u77E5\u9053&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u4F60\u559C\u6B22\u6211&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">%</span>s	\u901A\u8FC7<span class="token builtin">str</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\u5B57\u7B26\u4E32\u8F6C\u6362\u6765\u683C\u5F0F\u5316
<span class="token operator">%</span>u	\u65E0\u7B26\u53F7\u7684\u5341\u8FDB\u5236\u6574\u6570
<span class="token operator">%</span>d	\u6709\u7B26\u53F7\u7684\u5341\u8FDB\u5236\u6574\u6570
<span class="token operator">%</span>o	\u516B\u8FDB\u5236\u6574\u6570
<span class="token operator">%</span>x	\u5341\u516D\u8FDB\u5236\u6574\u6570\uFF0C\u5C0F\u5199\u5B57\u6BCD
<span class="token operator">%</span>X	\u5341\u516D\u8FDB\u5236\u6574\u6570\uFF0C\u5927\u5199\u5B57\u6BCD
<span class="token operator">%</span>e	\u6D6E\u70B9\u6570\u5B57<span class="token punctuation">(</span>\u79D1\u5B66\u8BA1\u6570\u6CD5<span class="token punctuation">)</span>
<span class="token operator">%</span>E	\u6D6E\u70B9\u6570\u5B57<span class="token punctuation">(</span>\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF0C\u7528E\u4EE3\u66FFe<span class="token punctuation">)</span>
<span class="token operator">%</span>f	\u6D6E\u70B9\u5B9E\u6570
<span class="token operator">%</span>g	\u6D6E\u70B9\u6570\u5B57<span class="token punctuation">(</span>\u6839\u636E\u503C\u7684\u5927\u5C0F\u91C7\u7528<span class="token operator">%</span>e\u6216<span class="token operator">%</span>f<span class="token punctuation">)</span>
<span class="token operator">%</span>G	\u6D6E\u70B9\u6570\u5B57<span class="token punctuation">(</span>\u7C7B\u4F3C\u4E8E<span class="token operator">%</span>g<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="format-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#format-\u65B9\u6CD5" aria-hidden="true">#</a> format\uFF08\uFF09\u65B9\u6CD5</h6><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;fk you {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;\u54C8\u54C8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#\u6309\u987A\u5E8F\u81EA\u52A8\u5339\u914D\uFF1A\u5360\u4F4D\u7B26\u4E3A{}</span>
s<span class="token operator">=</span><span class="token string">&quot;\u540D\u5B57\uFF1A{}\uFF0C\u5E74\u9F84{}\uFF0C\u6027\u522B{}&quot;</span>
s1<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>\u5F20\u4E09<span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span>\u7537<span class="token punctuation">)</span>
<span class="token comment">#\u6309\u7D22\u5F15\u987A\u5E8F\u5339\u914D\uFF1A\u5360\u4F4D\u7B26{index},\u53EF\u91CD\u590D\u4F7F\u7528</span>
s<span class="token operator">=</span><span class="token string">&quot;\u540D\u5B57\uFF1A{0}\uFF0C\u5E74\u9F84{1}\uFF0C\u6027\u522B{2}\uFF0C\u540D\u5B57\u8FD8\u662F{0}&quot;</span>
s1<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>\u5F20\u4E09<span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span>\u7537<span class="token punctuation">)</span>
<span class="token comment">#\u6309\u53D8\u91CF\u540D\u81EA\u52A8\u5339\u914D\uFF1A\u5360\u4F4D\u7B26{\u53D8\u91CF\u540D}\uFF0C\u53EF\u91CD\u590D</span>
s<span class="token operator">=</span><span class="token string">&quot;\u540D\u5B57\uFF1A{name}\uFF0C\u5E74\u9F84{age}\uFF0C\u6027\u522B{sex}\uFF0C\u540D\u5B57\u8FD8\u662F{name}&quot;</span>
s1<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>age<span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">,</span>sex<span class="token operator">=</span><span class="token string">&quot;\u7537&quot;</span><span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="format-\u65B9\u6CD5-\u4F20\u5165\u53C2\u6570\u4E3A\u5173\u952E\u5B57\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#format-\u65B9\u6CD5-\u4F20\u5165\u53C2\u6570\u4E3A\u5173\u952E\u5B57\u53C2\u6570" aria-hidden="true">#</a> format\uFF08\uFF09\u65B9\u6CD5\uFF0C\u4F20\u5165\u53C2\u6570\u4E3A\u5173\u952E\u5B57\u53C2\u6570</h6><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;fk you {name}.{age}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="f-string" tabindex="-1"><a class="header-anchor" href="#f-string" aria-hidden="true">#</a> f-string</h6><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;\u5458\u5916&quot;</span>
like <span class="token operator">=</span> <span class="token string">&quot;\u7F8E\u5973&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;\u8FD9\u4E2A\u8BED\u6CD5\u5389\u5BB3\u4E86 </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string"> \u559C\u6B22 </span><span class="token interpolation"><span class="token punctuation">{</span>like<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),o=[e];function l(c,i){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","py-strs.html.vue"]]);export{r as default};
