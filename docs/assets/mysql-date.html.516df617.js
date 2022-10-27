import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const p={},e=t(`<div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">-- datetime</span>
<span class="token keyword">SELECT</span> curdate<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">--date</span>
<span class="token keyword">SELECT</span> curtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">--time in 24-hour format</span>
<span class="token comment">--\u8981\u67E5\u627E\u4E24\u4E2A\u65E5\u671F\u6216\u65F6\u95F4\u6233\u4E4B\u95F4\u7684\u6570\u636E:</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> task_instance
<span class="token keyword">where</span> execution_date <span class="token operator">between</span> <span class="token string">&#39;2021-01-01&#39;</span> <span class="token operator">and</span> <span class="token string">&#39;2021-01-31&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- \u4E5F\u53EF\u4EE5\u5199\u6210\u65F6\u95F4\u6233\u683C\u5F0F</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> task_instance
<span class="token keyword">WHERE</span> execution_date <span class="token operator">BETWEEN</span> <span class="token string">&#39;2021-01-01 00:00:00&#39;</span> <span class="token operator">AND</span> <span class="token string">&#39;2021-01-31 23:59:59&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> task_instance
<span class="token keyword">WHERE</span> execution_date <span class="token operator">&gt;=</span> <span class="token string">&#39;2021-01-01&#39;</span> <span class="token operator">AND</span>  execution_date <span class="token operator">&lt;</span> <span class="token string">&#39;2021-02-01&#39;</span><span class="token punctuation">;</span>
<span class="token comment">--\u67E5\u8BE2\u6700\u8FD1\u4E00\u5468\u7684\u6570\u636E:</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> task_instance
<span class="token keyword">WHERE</span> execution_date <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token keyword">interval</span> <span class="token number">1</span> week<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">--\u4E5F\u53EF\u4EE5\u901A\u8FC7\u51FD\u6570DATE_ADD \u548C\u3000DATE_SUB \u6765\u8BA1\u7B97\u65F6\u95F4</span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> task_instance
<span class="token keyword">WHERE</span> execution_date <span class="token operator">BETWEEN</span> DATE_SUB<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">interval</span> <span class="token number">1</span> week<span class="token punctuation">)</span> <span class="token operator">AND</span> DATE_ADD<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">interval</span> <span class="token number">1</span> <span class="token keyword">day</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">--\u4ECE\u65F6\u95F4\u6233\u91CC\u9762\u63D0\u53D6\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u548C\u661F\u671F\u51E0\u7B49\uFF1A</span>

<span class="token keyword">SELECT</span> <span class="token keyword">year</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token keyword">month</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token keyword">day</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token keyword">hour</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token keyword">minute</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token keyword">second</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> dayofweek<span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">-- \u4ECE\u5468\u65E5\u5F00\u59CB\u5468\u516D\u7ED3\u675F\uFF0C\u6240\u4EE5 1 \u662F\u5468\u65E5</span>
<span class="token comment">--\u65F6\u95F4\u6233\u8F6C\u6210UNIX\u65F6\u95F4\u6233</span>

<span class="token keyword">SELECT</span> unix_timestamp<span class="token punctuation">(</span><span class="token string">&#39;2021-02-01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> unix_timestamp<span class="token punctuation">(</span><span class="token string">&#39;2021-02-01 18:50:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> unix_timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">-- \u7B49\u540C\u4E8E SELECT unix_timestamp(now());</span>
<span class="token comment">--\u8BA1\u7B97\u4E24\u4E2A\u65F6\u95F4\u5B57\u6BB5\u4E4B\u95F4\u7684\u95F4\u9694</span>

<span class="token keyword">SELECT</span> unix_timestamp<span class="token punctuation">(</span>end_date<span class="token punctuation">)</span> <span class="token operator">-</span> unix_timestamp<span class="token punctuation">(</span>start_date<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> task_instance<span class="token punctuation">;</span>

<span class="token comment">-- \u7528 sec_to_time \u51FD\u6570\u8F6C\u6362\u6210\u65F6\u5206\u79D2\u683C\u5F0F</span>

<span class="token keyword">SELECT</span> sec_to_time<span class="token punctuation">(</span>unix_timestamp<span class="token punctuation">(</span>end_date<span class="token punctuation">)</span> <span class="token operator">-</span> unix_timestamp<span class="token punctuation">(</span>start_date<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> task_instance<span class="token punctuation">;</span>

<span class="token comment">-- TIMEDIFF \u8F6C\u6362\u6210\u65F6\u5206\u79D2\u683C\u5F0F</span>
<span class="token keyword">SELECT</span> TIMEDIFF<span class="token punctuation">(</span>end_date<span class="token punctuation">,</span> start_date<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> task_instance<span class="token punctuation">;</span>

<span class="token comment">-- \u8BA1\u7B97\u95F4\u9694\u5929\u6570</span>
<span class="token keyword">SELECT</span> DATEDIFF<span class="token punctuation">(</span><span class="token string">&quot;2021-02-01&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2020-06-30&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","mysql-date.html.vue"]]);export{k as default};
