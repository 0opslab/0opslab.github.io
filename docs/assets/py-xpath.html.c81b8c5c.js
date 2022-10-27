import{_ as n,o as s,c as t,e as a}from"./app.a667bd71.js";const e={},l=a(`<p>XPath\u7684\u9009\u62E9\u529F\u80FD\u5341\u5206\u5F3A\u5927,\u5B83\u63D0\u4F9B\u4E86\u975E\u5E38\u7B80\u6D01\u660E\u4E86\u7684\u8DEF\u5F84\u9009\u62E9\u8868\u8FBE\u5F0F\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree

text <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;
&lt;div&gt;
    &lt;ul&gt;
        &lt;li class=&quot;one&quot;&gt;&lt;a href=&quot;link1&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
        &lt;li class=&quot;two&quot;&gt;&lt;a href=&quot;link2&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
        &lt;li class=&quot;three&quot;&gt;&lt;a href=&quot;link3&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
        &lt;li class=&quot;four&quot;&gt;&lt;a href=&quot;link4&quot;&gt;4&lt;/a&gt;&lt;/li&gt;
        &lt;li class=&quot;five&quot;&gt;&lt;a href=&quot;link5&quot;&gt;5&lt;/a&gt;
    &lt;/ul&gt;
&lt;/div&gt;
&#39;&#39;&#39;</span>
<span class="token comment">#\u5C06\u6587\u672C\u8F6C\u6362\u4E3A\u7F51\u9875\u7C7B\u578B\uFF0C\u5E76\u4FEE\u590D\u8865\u5168</span>
html <span class="token operator">=</span> etree<span class="token punctuation">.</span>HTML<span class="token punctuation">(</span>text<span class="token punctuation">)</span>

<span class="token comment">#\u5C06\u7F51\u9875\u6574\u4F53\u8865\u4E3A\u7F51\u9875\u7ED3\u6784\uFF0C\u6253\u5F00\u6587\u4EF6\u8DEF\u5F84</span>
<span class="token comment">#html = etree.parse(&#39;demo.html&#39;,etree.HTMLParser())</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>

<span class="token comment">#\u5C06\u7F51\u9875\u8F6C\u6362\u4E3A\u6587\u672C\u7C7B\u578B,\u4E3Abytes</span>
result <span class="token operator">=</span> etree<span class="token punctuation">.</span>tostring<span class="token punctuation">(</span>html<span class="token punctuation">)</span>

<span class="token comment">#\u8F6C\u5316\u4E3Astr\u7C7B\u578B</span>
result <span class="token operator">=</span> result<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xpath\u8BED\u6CD5\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#xpath\u8BED\u6CD5\u683C\u5F0F" aria-hidden="true">#</a> xpath\u8BED\u6CD5\u683C\u5F0F</h3><table><thead><tr><th>nodename</th><th>\u9009\u53D6\u6B64\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9\u3002</th></tr></thead><tbody><tr><td>/</td><td>\u4ECE\u6839\u8282\u70B9\u9009\u53D6\u3002</td></tr><tr><td>//</td><td>\u4ECE\u5339\u914D\u9009\u62E9\u7684\u5F53\u524D\u8282\u70B9\u9009\u62E9\u6587\u6863\u4E2D\u7684\u8282\u70B9\uFF0C\u800C\u4E0D\u8003\u8651\u5B83\u4EEC\u7684\u4F4D\u7F6E\u3002</td></tr><tr><td>.</td><td>\u9009\u53D6\u5F53\u524D\u8282\u70B9\u3002</td></tr><tr><td>..</td><td>\u9009\u53D6\u5F53\u524D\u8282\u70B9\u7684\u7236\u8282\u70B9\u3002</td></tr><tr><td>@</td><td>\u9009\u53D6\u5C5E\u6027\u3002</td></tr><tr><td>*</td><td>\u5339\u914D\u4EFB\u4F55\u5143\u7D20\u8282\u70B9\u3002</td></tr><tr><td>@*</td><td>\u5339\u914D\u4EFB\u4F55\u5C5E\u6027\u8282\u70B9\u3002</td></tr><tr><td>node()</td><td>\u5339\u914D\u4EFB\u4F55\u7C7B\u578B\u7684\u8282\u70B9\u3002</td></tr></tbody></table><h6 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h6><table><thead><tr><th style="text-align:left;">\u8DEF\u5F84\u8868\u8FBE\u5F0F</th><th style="text-align:left;">\u7ED3\u679C</th></tr></thead><tbody><tr><td style="text-align:left;">bookstore</td><td style="text-align:left;">\u9009\u53D6 bookstore \u5143\u7D20\u7684\u6240\u6709\u5B50\u8282\u70B9\u3002</td></tr><tr><td style="text-align:left;">/bookstore</td><td style="text-align:left;">\u9009\u53D6\u6839\u5143\u7D20 bookstore\u3002\u6CE8\u91CA\uFF1A\u5047\u5982\u8DEF\u5F84\u8D77\u59CB\u4E8E\u6B63\u659C\u6760( / )\uFF0C\u5219\u6B64\u8DEF\u5F84\u59CB\u7EC8\u4EE3\u8868\u5230\u67D0\u5143\u7D20\u7684\u7EDD\u5BF9\u8DEF\u5F84\uFF01</td></tr><tr><td style="text-align:left;">bookstore/book</td><td style="text-align:left;">\u9009\u53D6\u5C5E\u4E8E bookstore \u7684\u5B50\u5143\u7D20\u7684\u6240\u6709 book \u5143\u7D20\u3002</td></tr><tr><td style="text-align:left;">//book</td><td style="text-align:left;">\u9009\u53D6\u6240\u6709 book \u5B50\u5143\u7D20\uFF0C\u800C\u4E0D\u7BA1\u5B83\u4EEC\u5728\u6587\u6863\u4E2D\u7684\u4F4D\u7F6E\u3002</td></tr><tr><td style="text-align:left;">bookstore//book</td><td style="text-align:left;">\u9009\u62E9\u5C5E\u4E8E bookstore \u5143\u7D20\u7684\u540E\u4EE3\u7684\u6240\u6709 book \u5143\u7D20\uFF0C\u800C\u4E0D\u7BA1\u5B83\u4EEC\u4F4D\u4E8E bookstore \u4E4B\u4E0B\u7684\u4EC0\u4E48\u4F4D\u7F6E\u3002</td></tr><tr><td style="text-align:left;">//@lang</td><td style="text-align:left;">\u9009\u53D6\u540D\u4E3A lang \u7684\u6240\u6709\u5C5E\u6027\u3002</td></tr></tbody></table><table><thead><tr><th>/bookstore/book[1]</th><th>\u9009\u53D6\u5C5E\u4E8E bookstore \u5B50\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A book \u5143\u7D20\u3002</th></tr></thead><tbody><tr><td>/bookstore/book[last()]</td><td>\u9009\u53D6\u5C5E\u4E8E bookstore \u5B50\u5143\u7D20\u7684\u6700\u540E\u4E00\u4E2A book \u5143\u7D20\u3002</td></tr><tr><td>/bookstore/book[last()-1]</td><td>\u9009\u53D6\u5C5E\u4E8E bookstore \u5B50\u5143\u7D20\u7684\u5012\u6570\u7B2C\u4E8C\u4E2A book \u5143\u7D20\u3002</td></tr><tr><td>/bookstore/book[position()\u2764\uFE0F]</td><td>\u9009\u53D6\u6700\u524D\u9762\u7684\u4E24\u4E2A\u5C5E\u4E8E bookstore \u5143\u7D20\u7684\u5B50\u5143\u7D20\u7684 book \u5143\u7D20\u3002</td></tr><tr><td>//title[@lang]</td><td>\u9009\u53D6\u6240\u6709\u62E5\u6709\u540D\u4E3A lang \u7684\u5C5E\u6027\u7684 title \u5143\u7D20\u3002</td></tr><tr><td>//title[@lang=&#39;eng&#39;]</td><td>\u9009\u53D6\u6240\u6709 title \u5143\u7D20\uFF0C\u4E14\u8FD9\u4E9B\u5143\u7D20\u62E5\u6709\u503C\u4E3A eng \u7684 lang \u5C5E\u6027\u3002</td></tr><tr><td>/bookstore/book[price&gt;35.00]</td><td>\u9009\u53D6 bookstore \u5143\u7D20\u7684\u6240\u6709 book \u5143\u7D20\uFF0C\u4E14\u5176\u4E2D\u7684 price \u5143\u7D20\u7684\u503C\u987B\u5927\u4E8E 35.00\u3002</td></tr><tr><td>/bookstore/book[price&gt;35.00]/title</td><td>\u9009\u53D6 bookstore \u5143\u7D20\u4E2D\u7684 book \u5143\u7D20\u7684\u6240\u6709 title \u5143\u7D20\uFF0C\u4E14\u5176\u4E2D\u7684 price \u5143\u7D20\u7684\u503C\u987B\u5927\u4E8E 35.00\u3002</td></tr></tbody></table><table><thead><tr><th>/bookstore/*</th><th>\u9009\u53D6 bookstore \u5143\u7D20\u7684\u6240\u6709\u5B50\u5143\u7D20\u3002</th></tr></thead><tbody><tr><td>//*</td><td>\u9009\u53D6\u6587\u6863\u4E2D\u7684\u6240\u6709\u5143\u7D20\u3002</td></tr><tr><td>//title[@*]</td><td>\u9009\u53D6\u6240\u6709\u5E26\u6709\u5C5E\u6027\u7684 title \u5143\u7D20\u3002</td></tr></tbody></table><h5 id="python\u4E2D\u4F7F\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#python\u4E2D\u4F7F\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> python\u4E2D\u4F7F\u7528\u5B9E\u4F8B</h5><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#\u9009\u62E9\u5185\u5BB9\u5339\u914D</span>
result <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//*&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#\u9009\u62E9\u5185\u5BB9\u5339\u914D</span>
result <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li/a&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#\u9009\u62E9\u5185\u5BB9\u5339\u914D</span>
<span class="token comment">#\u5C5E\u6027\u4E3Alink4\u7684a\u6807\u7B7E\u7684\u7236\u7EA7\u7684class\u5C5E\u6027</span>
result <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//a[@href=&quot;link4&quot;]/../@class&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#@\u8868\u793A\u5C5E\u6027</span>
result1 <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//a[@href=&quot;link4&quot;]/parent::*/@class&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#\u9009\u62E9\u5185\u5BB9\u5339\u914D</span>
<span class="token comment">#\u5C5E\u6027\u4E3Alink4\u7684a\u6807\u7B7E\u7684\u7236\u7EA7\u7684class\u5C5E\u6027</span>
result <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//a[@href=&quot;link4&quot;]/text()&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#\u9009\u62E9\u5185\u5BB9\u5339\u914D</span>
<span class="token comment">#contains(@\u5C5E\u6027,\u503C)</span>
result <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li[contains(@class,&quot;three&quot;)]/a/text()&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#\u9009\u62E9\u5185\u5BB9\u5339\u914D</span>
<span class="token comment">#contains(@\u5C5E\u6027,\u503C)</span>
result <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li[contains(@class,&quot;three&quot;) and @name=&quot;item&quot;]/a/text()&#39;</span><span class="token punctuation">)</span>


<span class="token comment">#\u5339\u914D\u7B2C\u4E00\u4E2Ali</span>
result1 <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li[1]/a/text()&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#\u6700\u540E\u4E00\u4E2A\u5012\u65702</span>
result2 <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li[last()-2]/a/text()&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#\u6700\u540E\u4E00\u4E2A</span>
result3 <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li[last()]/a/text()&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#\u5C0F\u4E8E3</span>
result4 <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li[position()&lt;3]/a/text()&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#\u9009\u62E9\u5185\u5BB9\u5339\u914D</span>
result <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li[1]/ancestor::*&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#attribute\u8F74\uFF0C\u53EF\u4EE5\u83B7\u53D6\u6240\u6709\u5C5E\u6027\u503C</span>
result <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li[1]/attribute::*&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#child\u8F74\uFF0C\u53EF\u4EE5\u83B7\u53D6\u6240\u6709\u76F4\u63A5\u5B50\u8282\u70B9</span>
result <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li[1]/child::a[@href=&quot;link1&quot;]&#39;</span><span class="token punctuation">)</span>

<span class="token comment">#descendant\u8F74\uFF0C\u53EF\u4EE5\u83B7\u53D6\u6240\u6709\u5B50\u5B59\u8282\u70B9</span>
result <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li[1]/descendant::span&#39;</span><span class="token punctuation">)</span>


<span class="token comment">#following\u8F74,\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D\u8282\u70B9\u4E4B\u540E\u7684\u6240\u6709\u8282\u70B9</span>
result <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li[1]/following::*[2]&#39;</span><span class="token punctuation">)</span>


<span class="token comment">#\u9009\u62E9\u5185\u5BB9\u5339\u914D</span>
<span class="token comment">#following-sibling\u8F74\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D\u8282\u70B9\u4E4B\u540E\u7684\u6240\u6709\u540C\u7EA7\u8282\u70B9</span>
result <span class="token operator">=</span> html<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//li[1]/following-sibling::*&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[l];function i(p,c){return s(),t("div",null,o)}const r=n(e,[["render",i],["__file","py-xpath.html.vue"]]);export{r as default};
