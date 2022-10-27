import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const p={},t=e(`<h3 id="export-import" tabindex="-1"><a class="header-anchor" href="#export-import" aria-hidden="true">#</a> export/import</h3><p>\u6A21\u5757\u529F\u80FD\u4E3B\u8981\u7531\u4E24\u4E2A\u547D\u4EE4\u6784\u6210\uFF1Aexport\u548Cimport\u3002export\u547D\u4EE4\u7528\u4E8E\u89C4\u5B9A\u6A21\u5757\u7684\u5BF9\u5916\u63A5\u53E3\uFF0Cimport\u547D\u4EE4\u7528\u4E8E\u8F93\u5165\u5176\u4ED6\u6A21\u5757\u63D0\u4F9B\u7684\u529F\u80FD\u3002\u4E00\u4E2A\u6A21\u5757\u5C31\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6587\u4EF6\u3002\u8BE5\u6587\u4EF6\u5185\u90E8\u7684\u6240\u6709\u53D8\u91CF\uFF0C\u5916\u90E8\u65E0\u6CD5\u83B7\u53D6\u3002\u5982\u679C\u4F60\u5E0C\u671B\u5916\u90E8\u80FD\u591F\u8BFB\u53D6\u6A21\u5757\u5185\u90E8\u7684\u67D0\u4E2A\u53D8\u91CF\uFF0C\u5C31\u5FC5\u987B\u4F7F\u7528export\u5173\u952E\u5B57\u8F93\u51FA\u8BE5\u53D8\u91CF\u3002\u4E0B\u9762\u662F\u4E00\u4E2A JS \u6587\u4EF6\uFF0C\u91CC\u9762\u4F7F\u7528export\u547D\u4EE4\u8F93\u51FA\u53D8\u91CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// profile.js</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">&#39;Michael&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">&#39;Jackson&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> year <span class="token operator">=</span> <span class="token number">1958</span><span class="token punctuation">;</span>

<span class="token comment">//\u53E6\u4E00\u79CD\u65B9\u5F0F</span>
<span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">&#39;Michael&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">&#39;Jackson&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> year <span class="token operator">=</span> <span class="token number">1958</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> year<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//\u5BFC\u51FA\u51FD\u6570</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5199\u6CD5\u4E00</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// \u5199\u6CD5\u4E8C</span>
<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>m<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5199\u6CD5\u4E09</span>
<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>n <span class="token keyword">as</span> m<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>import\u547D\u4EE4 \u4F7F\u7528export\u547D\u4EE4\u5B9A\u4E49\u4E86\u6A21\u5757\u7684\u5BF9\u5916\u63A5\u53E3\u4EE5\u540E\uFF0C\u5176\u4ED6 JS \u6587\u4EF6\u5C31\u53EF\u4EE5\u901A\u8FC7import\u547D\u4EE4\u52A0\u8F7D\u8FD9\u4E2A\u6A21\u5757\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> year<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./profile&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  element<span class="token punctuation">.</span>textContent <span class="token operator">=</span> firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> lastName <span class="token keyword">as</span> surname <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./profile&#39;</span><span class="token punctuation">;</span>


<span class="token comment">// circle.js</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token parameter">radius</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> radius <span class="token operator">*</span> radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">circumference</span><span class="token punctuation">(</span><span class="token parameter">radius</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> area<span class="token punctuation">,</span> circumference <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./circle&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5706\u9762\u79EF\uFF1A&#39;</span> <span class="token operator">+</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5706\u5468\u957F\uFF1A&#39;</span> <span class="token operator">+</span> <span class="token function">circumference</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="export-default-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#export-default-\u547D\u4EE4" aria-hidden="true">#</a> export default \u547D\u4EE4</h3><p>\u4F7F\u7528import\u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u7528\u6237\u9700\u8981\u77E5\u9053\u6240\u8981\u52A0\u8F7D\u7684\u53D8\u91CF\u540D\u6216\u51FD\u6570\u540D\uFF0C\u5426\u5219\u65E0\u6CD5\u52A0\u8F7D\u3002\u4F46\u662F\uFF0C\u7528\u6237\u80AF\u5B9A\u5E0C\u671B\u5FEB\u901F\u4E0A\u624B\uFF0C\u672A\u5FC5\u613F\u610F\u9605\u8BFB\u6587\u6863\uFF0C\u53BB\u4E86\u89E3\u6A21\u5757\u6709\u54EA\u4E9B\u5C5E\u6027\u548C\u65B9\u6CD5\u3002\u4E3A\u4E86\u7ED9\u7528\u6237\u63D0\u4F9B\u65B9\u4FBF\uFF0C\u8BA9\u4ED6\u4EEC\u4E0D\u7528\u9605\u8BFB\u6587\u6863\u5C31\u80FD\u52A0\u8F7D\u6A21\u5757\uFF0C\u5C31\u8981\u7528\u5230export default\u547D\u4EE4\uFF0C\u4E3A\u6A21\u5757\u6307\u5B9A\u9ED8\u8BA4\u8F93\u51FA\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// export-default.js \u4E00\u4E2A\u6A21\u5757\u6587\u4EF6export-default.js\uFF0C\u5B83\u7684\u9ED8\u8BA4\u8F93\u51FA\u662F\u4E00\u4E2A\u51FD\u6570</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// import-default.js \u53EF\u4EE5\u7528\u4EFB\u610F\u540D\u79F0\u6307\u5411export-default.js\u8F93\u51FA\u7684\u65B9\u6CD5\uFF0C\u8FD9\u65F6\u5C31\u4E0D\u9700\u8981\u77E5\u9053\u539F\u6A21\u5757\u8F93\u51FA\u7684\u51FD\u6570\u540D\u3002</span>
<span class="token keyword">import</span> customName <span class="token keyword">from</span> <span class="token string">&#39;./export-default&#39;</span><span class="token punctuation">;</span>
<span class="token function">customName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;foo&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="export-\u4E0E-import-\u7684\u590D\u5408\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#export-\u4E0E-import-\u7684\u590D\u5408\u5199\u6CD5" aria-hidden="true">#</a> export \u4E0E import \u7684\u590D\u5408\u5199\u6CD5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span>foo<span class="token punctuation">,</span>bar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span>
<span class="token comment">//\u7B49\u540C\u4E8E</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> boo<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u63A5\u53E3\u6539\u540D</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo <span class="token keyword">as</span> myFoo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u6574\u4F53\u8F93\u51FA</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> es6 <span class="token keyword">as</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./someModule&#39;</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","es6-module.html.vue"]]);export{u as default};
