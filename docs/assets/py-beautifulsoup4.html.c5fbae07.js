import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const e={},p=t(`<h5 id="label-\u6309\u7167\u6807\u7B7E\u540D\u79F0\u3001id\u3001class\u7B49\u4FE1\u606F\u83B7\u53D6\u67D0\u4E2A\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#label-\u6309\u7167\u6807\u7B7E\u540D\u79F0\u3001id\u3001class\u7B49\u4FE1\u606F\u83B7\u53D6\u67D0\u4E2A\u6807\u7B7E" aria-hidden="true">#</a> @label:\u6309\u7167\u6807\u7B7E\u540D\u79F0\u3001id\u3001class\u7B49\u4FE1\u606F\u83B7\u53D6\u67D0\u4E2A\u6807\u7B7E</h5><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>html <span class="token operator">=</span> <span class="token string">&#39;&lt;p class=&quot;title&quot; id=&quot;p1&quot;&gt;&lt;b&gt;The Dormouses story&lt;/b&gt;&lt;/p&gt;&#39;</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html<span class="token punctuation">,</span> <span class="token string">&#39;lxml&#39;</span><span class="token punctuation">)</span>
<span class="token comment">#\u6839\u636Eclass\u7684\u540D\u79F0\u83B7\u53D6p\u6807\u7B7E\u5185\u7684\u6240\u6709\u5185\u5BB9</span>
soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span>class_<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#\u6216\u8005</span>
soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span>class_<span class="token operator">=</span><span class="token string">&quot;title&quot;</span> <span class="token builtin">id</span> <span class="token operator">=</span> <span class="token string">&quot;p1&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#\u83B7\u53D6class\u4E3Atitle\u7684p\u6807\u7B7E\u7684\u6587\u672C\u5185\u5BB9&quot;The Dormouse&#39;s story&quot;</span>
soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span>class_<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#\u83B7\u53D6\u6587\u672C\u5185\u5BB9\u65F6\u53EF\u4EE5\u6307\u5B9A\u4E0D\u540C\u6807\u7B7E\u4E4B\u95F4\u7684\u5206\u9694\u7B26\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u662F\u5426\u53BB\u6389\u524D\u540E\u7684\u7A7A\u767D\u3002</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span><span class="token string">&#39;&lt;p class=&quot;title&quot; id=&quot;p1&quot;&gt;&lt;b&gt; The Dormouses story &lt;/b&gt;&lt;/p&gt;&lt;p class=&quot;title&quot; id=&quot;p1&quot;&gt;&lt;b&gt;The Dormouses story&lt;/b&gt;&lt;/p&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;html5lib&quot;</span><span class="token punctuation">)</span>
soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span>class_<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token string">&quot;|&quot;</span><span class="token punctuation">,</span> strip<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token comment">#\u7ED3\u679C\u4E3A\uFF1AThe Dormouses story|The Dormouses story</span>
<span class="token comment">#\u83B7\u53D6class\u4E3Atitle\u7684p\u6807\u7B7E\u7684id</span>
soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span>class_<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#\u5BF9class\u540D\u79F0\u6B63\u5219\uFF1A</span>
soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>class_<span class="token operator">=</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">&quot;tit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#recursive\u53C2\u6570\uFF0Crecursive=False\u65F6\uFF0C\u53EAfind\u5F53\u524D\u6807\u7B7E\u7684\u7B2C\u4E00\u7EA7\u5B50\u6807\u7B7E\u7684\u6570\u636E</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span><span class="token string">&#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;abc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;lxml&#39;</span><span class="token punctuation">)</span>
soup<span class="token punctuation">.</span>html<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> recursive<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="label-\u6309\u7167\u6807\u7B7E\u540D\u79F0\u3001id\u3001class\u7B49\u4FE1\u606F\u83B7\u53D6\u591A\u4E2A\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#label-\u6309\u7167\u6807\u7B7E\u540D\u79F0\u3001id\u3001class\u7B49\u4FE1\u606F\u83B7\u53D6\u591A\u4E2A\u6807\u7B7E" aria-hidden="true">#</a> @label:\u6309\u7167\u6807\u7B7E\u540D\u79F0\u3001id\u3001class\u7B49\u4FE1\u606F\u83B7\u53D6\u591A\u4E2A\u6807\u7B7E</h5><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span><span class="token string">&#39;&lt;p class=&quot;title&quot; id=&quot;p1&quot;&gt;&lt;b&gt; The like story &lt;/b&gt;&lt;/p&gt;&lt;p class=&quot;title&quot; id=&quot;p1&quot;&gt;&lt;b&gt;The Dormouses story&lt;/b&gt;&lt;/p&gt;&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;html5lib&quot;</span><span class="token punctuation">)</span>
<span class="token comment">#\u83B7\u53D6\u6240\u6709class\u4E3Atitle\u7684\u6807\u7B7E</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>class_<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#\u83B7\u53D6\u7279\u5B9A\u6570\u91CF\u7684class\u4E3Atitle\u7684\u6807\u7B7E</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span>class_<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span>limit <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="label-\u6309\u7167\u6807\u7B7E\u7684\u5176\u4ED6\u5C5E\u6027\u83B7\u53D6\u67D0\u4E2A\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#label-\u6309\u7167\u6807\u7B7E\u7684\u5176\u4ED6\u5C5E\u6027\u83B7\u53D6\u67D0\u4E2A\u6807\u7B7E" aria-hidden="true">#</a> @label:\u6309\u7167\u6807\u7B7E\u7684\u5176\u4ED6\u5C5E\u6027\u83B7\u53D6\u67D0\u4E2A\u6807\u7B7E</h5><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>html <span class="token operator">=</span> <span class="token string">&#39;&lt;a alog-action=&quot;qb-ask-uname&quot; href=&quot;/usercent&quot; rel=&quot;external nofollow&quot; target=&quot;_blank&quot;&gt;\u8717\u725B\u5B8B&lt;/a&gt;&#39;</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html<span class="token punctuation">,</span> <span class="token string">&#39;lxml&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># \u83B7\u53D6&quot;\u8717\u725B\u5B8B&quot;,\u6B64\u65F6\uFF0C\u8BE5\u6807\u7B7E\u91CC\u65E2\u6CA1\u6709class\u4E5F\u6CA1\u6709id\uFF0C\u9700\u8981\u6839\u636E\u5176\u5C5E\u6027\u6765\u5B9A\u4E49\u83B7\u53D6\u89C4\u5219</span>
author <span class="token operator">=</span> soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;alog-action&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;qb-ask-uname&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">#\u6216</span>
author <span class="token operator">=</span> soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span>attrs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;alog-action&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;qb-ask-uname&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="label-\u627E\u524D\u5934\u548C\u540E\u5934\u7684\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#label-\u627E\u524D\u5934\u548C\u540E\u5934\u7684\u6807\u7B7E" aria-hidden="true">#</a> @label:\u627E\u524D\u5934\u548C\u540E\u5934\u7684\u6807\u7B7E</h5><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>soup<span class="token punctuation">.</span>find_all_previous<span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span>
soup<span class="token punctuation">.</span>find_previous<span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span>
soup<span class="token punctuation">.</span>find_all_next<span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span>
soup<span class="token punctuation">.</span>find_next<span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="label-\u627E\u7236\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#label-\u627E\u7236\u6807\u7B7E" aria-hidden="true">#</a> @label:\u627E\u7236\u6807\u7B7E</h5><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>soup<span class="token punctuation">.</span>find_parents<span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span>
soup<span class="token punctuation">.</span>find_parent<span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="label-css\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#label-css\u9009\u62E9\u5668" aria-hidden="true">#</a> @label:css\u9009\u62E9\u5668</h5><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span> <span class="token comment">#\u6807\u7B7E\u540D</span>
soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;html head title&quot;</span><span class="token punctuation">)</span> <span class="token comment">#\u591A\u7EA7\u6807\u7B7E\u540D</span>
soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;p &gt; a&quot;</span><span class="token punctuation">)</span> <span class="token comment">#p\u5185\u7684\u6240\u6709a\u6807\u7B7E</span>
soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;p &gt; #link1&quot;</span><span class="token punctuation">)</span> <span class="token comment">#P\u6807\u7B7E\u5185\uFF0C\u6309id\u67E5\u6807\u7B7E</span>
soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;#link1 ~ .sister&quot;</span><span class="token punctuation">)</span> <span class="token comment">#\u67E5\u627E\u76F8\u540Cclass\u7684\u5144\u5F1F\u8282\u70B9</span>
soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;#link1 + .sister&quot;</span><span class="token punctuation">)</span>
soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;.sister&quot;</span><span class="token punctuation">)</span> <span class="token comment">#\u6309class\u540D\u79F0\u67E5</span>
soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;#sister&quot;</span><span class="token punctuation">)</span> <span class="token comment">#\u6309id\u540D\u79F0\u67E5</span>
soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;a[href=&quot;http://example.com/elsie&quot; rel=&quot;external nofollow&quot; ]&#39;</span><span class="token punctuation">)</span> <span class="token comment"># \u6309\u6807\u7B7E\u7684\u5C5E\u6027\u67E5</span>
soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;a[href$=&quot;tillie&quot;]&#39;</span><span class="token punctuation">)</span>
soup<span class="token punctuation">.</span>select_one<span class="token punctuation">(</span><span class="token string">&quot;.sister&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="label-\u56DB\u5927\u5BF9\u8C61\u79CD\u7C7B" tabindex="-1"><a class="header-anchor" href="#label-\u56DB\u5927\u5BF9\u8C61\u79CD\u7C7B" aria-hidden="true">#</a> @label:\u56DB\u5927\u5BF9\u8C61\u79CD\u7C7B</h3><p>Beautiful Soup\u5C06\u590D\u6742HTML\u6587\u6863\u8F6C\u6362\u6210\u4E00\u4E2A\u590D\u6742\u7684\u6811\u5F62\u7ED3\u6784,\u6BCF\u4E2A\u8282\u70B9\u90FD\u662FPython\u5BF9\u8C61,\u6240\u6709\u5BF9\u8C61\u53EF\u4EE5\u5F52\u7EB3\u4E3A4\u79CD:</p><h4 id="label-tag" tabindex="-1"><a class="header-anchor" href="#label-tag" aria-hidden="true">#</a> @label:Tag</h4><p>Tag \u901A\u4FD7\u70B9\u8BB2\u5C31\u662F HTML \u4E2D\u7684\u4E00\u4E2A\u4E2A\u6807\u7B7E</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#\u521B\u5EFA Beautiful Soup \u5BF9\u8C61</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html<span class="token punctuation">)</span>
 
 
<span class="token keyword">print</span> soup<span class="token punctuation">.</span>title
<span class="token comment"># &lt;title&gt;The Dormouse&#39;s story&lt;/title&gt;</span>
 
<span class="token keyword">print</span> soup<span class="token punctuation">.</span>head
<span class="token comment"># &lt;head&gt;&lt;title&gt;The Dormouse&#39;s story&lt;/title&gt;&lt;/head&gt;</span>
 
<span class="token keyword">print</span> soup<span class="token punctuation">.</span>a
<span class="token comment"># &lt;a class=&quot;sister&quot; href=&quot;http://example.com/elsie&quot; id=&quot;link1&quot;&gt;&lt;!-- Elsie --&gt;&lt;/a&gt;</span>
 
<span class="token keyword">print</span> soup<span class="token punctuation">.</span>p
<span class="token comment"># &lt;p class=&quot;title&quot; name=&quot;dromouse&quot;&gt;&lt;b&gt;The Dormouse&#39;s story&lt;/b&gt;&lt;/p&gt;</span>
 
<span class="token keyword">print</span> <span class="token builtin">type</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>p<span class="token punctuation">)</span>
<span class="token comment"># &lt;class &#39;bs4.element.Tag&#39;&gt;</span>

<span class="token keyword">print</span> soup<span class="token punctuation">.</span>name
<span class="token comment"># [document] #soup \u5BF9\u8C61\u672C\u8EAB\u6BD4\u8F83\u7279\u6B8A\uFF0C\u5B83\u7684 name \u5373\u4E3A [document]</span>
 
<span class="token keyword">print</span> soup<span class="token punctuation">.</span>head<span class="token punctuation">.</span>name
<span class="token comment"># head #\u5BF9\u4E8E\u5176\u4ED6\u5185\u90E8\u6807\u7B7E\uFF0C\u8F93\u51FA\u7684\u503C\u4FBF\u4E3A\u6807\u7B7E\u672C\u8EAB\u7684\u540D\u79F0</span>
 
<span class="token keyword">print</span> soup<span class="token punctuation">.</span>p<span class="token punctuation">.</span>attrs
<span class="token comment"># {&#39;class&#39;: [&#39;title&#39;], &#39;name&#39;: &#39;dromouse&#39;}</span>
<span class="token comment"># \u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u628A p \u6807\u7B7E\u7684\u6240\u6709\u5C5E\u6027\u6253\u5370\u8F93\u51FA\u4E86\u51FA\u6765\uFF0C\u5F97\u5230\u7684\u7C7B\u578B\u662F\u4E00\u4E2A\u5B57\u5178\u3002</span>
 
<span class="token keyword">print</span> soup<span class="token punctuation">.</span>p<span class="token punctuation">[</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">]</span> <span class="token comment"># soup.p.get(&#39;class&#39;)</span>
<span class="token comment"># [&#39;title&#39;] #\u8FD8\u53EF\u4EE5\u5229\u7528get\u65B9\u6CD5\uFF0C\u4F20\u5165\u5C5E\u6027\u7684\u540D\u79F0\uFF0C\u4E8C\u8005\u662F\u7B49\u4EF7\u7684</span>
 
soup<span class="token punctuation">.</span>p<span class="token punctuation">[</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;newClass&quot;</span>
<span class="token keyword">print</span> soup<span class="token punctuation">.</span>p <span class="token comment"># \u53EF\u4EE5\u5BF9\u8FD9\u4E9B\u5C5E\u6027\u548C\u5185\u5BB9\u7B49\u7B49\u8FDB\u884C\u4FEE\u6539</span>
<span class="token comment"># &lt;p class=&quot;newClass&quot; name=&quot;dromouse&quot;&gt;&lt;b&gt;The Dormouse&#39;s story&lt;/b&gt;&lt;/p&gt;</span>
 
<span class="token keyword">del</span> soup<span class="token punctuation">.</span>p<span class="token punctuation">[</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">]</span> <span class="token comment"># \u8FD8\u53EF\u4EE5\u5BF9\u8FD9\u4E2A\u5C5E\u6027\u8FDB\u884C\u5220\u9664</span>
<span class="token keyword">print</span> soup<span class="token punctuation">.</span>p
<span class="token comment"># &lt;p name=&quot;dromouse&quot;&gt;&lt;b&gt;The Dormouse&#39;s story&lt;/b&gt;&lt;/p&gt;</span>

    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="label-navigablestring" tabindex="-1"><a class="header-anchor" href="#label-navigablestring" aria-hidden="true">#</a> @label:NavigableString</h6><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span> soup<span class="token punctuation">.</span>p<span class="token punctuation">.</span>string
<span class="token comment"># The Dormouse&#39;s story</span>
 
<span class="token keyword">print</span> <span class="token builtin">type</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>p<span class="token punctuation">.</span>string<span class="token punctuation">)</span>
<span class="token comment"># In [13]: &lt;class &#39;bs4.element.NavigableString&#39;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="label-beautifulsoup" tabindex="-1"><a class="header-anchor" href="#label-beautifulsoup" aria-hidden="true">#</a> @label:BeautifulSoup</h3><p>BeautifulSoup \u5BF9\u8C61\u8868\u793A\u7684\u662F\u4E00\u4E2A\u6587\u6863\u7684\u5185\u5BB9\u3002</p><h3 id="label-comment" tabindex="-1"><a class="header-anchor" href="#label-comment" aria-hidden="true">#</a> @label:Comment</h3><p>Comment \u5BF9\u8C61\u662F\u4E00\u4E2A\u7279\u6B8A\u7C7B\u578B\u7684 NavigableString \u5BF9\u8C61\uFF0C\u5176\u8F93\u51FA\u7684\u5185\u5BB9\u4E0D\u5305\u62EC\u6CE8\u91CA\u7B26\u53F7\u3002</p>`,23),o=[p];function l(i,c){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","py-beautifulsoup4.html.vue"]]);export{r as default};
