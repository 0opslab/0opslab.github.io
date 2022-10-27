import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const p={},e=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\`\`\`ops</span>
<span class="token comment">//title:jquery ajax jsonp \u5E38\u7528\u65B9\u6CD5</span>
<span class="token comment">//descr:</span>
<span class="token comment">//\`\`\`</span>

<span class="token comment">//@label:\u53EF\u83B7\u53D6\u7F51\u7AD9jquery\u7684\u7248\u672C\u53F7</span>
$<span class="token punctuation">.</span>fn<span class="token punctuation">.</span>jquery


$<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;demo_ajax_load.txt&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

$<span class="token punctuation">.</span><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token string">&quot;demo_ajax_json.js&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> field</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>field <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


$<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;demo_ajax_gethint.asp&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">suggest</span><span class="token operator">:</span> txt <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

jQuery<span class="token punctuation">.</span><span class="token function">getScript</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token function">success</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> status<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//\u8BF7\u6C42\u65B9\u5F0F</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//\u8BF7\u6C42\u7684\u5A92\u4F53\u7C7B\u578B</span>
    <span class="token literal-property property">contentType</span><span class="token operator">:</span> <span class="token string">&quot;application/json;charset=UTF-8&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//\u8BF7\u6C42\u5730\u5740</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//\u6570\u636E\uFF0Cjson\u5B57\u7B26\u4E32</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//\u8BF7\u6C42\u6210\u529F</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//\u8BF7\u6C42\u5931\u8D25\uFF0C\u5305\u542B\u5177\u4F53\u7684\u9519\u8BEF\u4FE1\u606F</span>
    <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//func{jquery ajax jsonp}</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//\u8BF7\u6C42\u65B9\u5F0F</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//\u662F\u5426\u5F02\u6B65</span>
    <span class="token literal-property property">async</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://www.domain.net/url&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//\u8DE8\u57DFjson\u8BF7\u6C42\u4E00\u5B9A\u662Fjsonp</span>
    <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;jsonp&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//\u8DE8\u57DF\u8BF7\u6C42\u7684\u53C2\u6570\u540D\uFF0C\u9ED8\u8BA4\u662Fcallback</span>
    <span class="token literal-property property">jsonp</span><span class="token operator">:</span> <span class="token string">&quot;callbackparam&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//\u81EA\u5B9A\u4E49\u8DE8\u57DF\u53C2\u6570\u503C\uFF0C\u56DE\u8C03\u51FD\u6570\u540D\u4E5F\u662F\u4E00\u6837\uFF0C\u9ED8\u8BA4\u4E3AjQuery\u81EA\u52A8\u751F\u6210\u7684\u5B57\u7B26\u4E32</span>
    <span class="token literal-property property">jsonpCallback</span><span class="token operator">:</span> <span class="token string">&quot;successCallback&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;civilnews&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//\u8BF7\u6C42\u53C2\u6570</span>

    <span class="token function-variable function">beforeSend</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u8BF7\u6C42\u524D\u7684\u5904\u7406</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u8BF7\u6C42\u6210\u529F\u5904\u7406\uFF0C\u548C\u672C\u5730\u56DE\u8C03\u5B8C\u5168\u4E00\u6837</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u8BF7\u6C42\u5B8C\u6210\u7684\u5904\u7406</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u8BF7\u6C42\u51FA\u9519\u5904\u7406</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","jquery-ajax-js.html.vue"]]);export{r as default};
