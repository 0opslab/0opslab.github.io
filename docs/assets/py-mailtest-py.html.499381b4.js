import{_ as n,o as s,c as a,e as t}from"./app.a667bd71.js";const e={},p=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># coding:utf-8</span>

<span class="token comment"># \`\`\`ops</span>
<span class="token comment"># title:\u5229\u7528python\u53D1\u9001\u90AE\u4EF6\u5230qq\u90AE\u7BB1</span>
<span class="token comment"># descr:</span>
<span class="token comment"># \`\`\`</span>

<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText
<span class="token keyword">from</span> email<span class="token punctuation">.</span>header <span class="token keyword">import</span> Header
<span class="token keyword">import</span> smtplib

sender <span class="token operator">=</span> <span class="token string">&#39;xxxxx@qq.com&#39;</span>
sender_pass <span class="token operator">=</span> <span class="token string">&#39;xxxxxxxxxxxxxx&#39;</span>
host <span class="token operator">=</span> <span class="token string">&#39;smtp.qq.com&#39;</span>
recivers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;xxxxxxxx@xxx.com&#39;</span><span class="token punctuation">]</span>


<span class="token keyword">def</span> <span class="token function">mail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    message <span class="token operator">=</span> MIMEText<span class="token punctuation">(</span><span class="token string">&#39;python \u90AE\u4EF6\u53D1\u9001111&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;plain&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;{}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>sender<span class="token punctuation">)</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>recivers<span class="token punctuation">)</span>
    message<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;\u90AE\u4EF6\u6D4B\u8BD5222&#39;</span>

    <span class="token keyword">try</span><span class="token punctuation">:</span>
        smtpobj <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP_SSL<span class="token punctuation">(</span>host<span class="token punctuation">,</span> <span class="token number">465</span><span class="token punctuation">)</span>  <span class="token comment"># \u542F\u7528ssl\uFF0C\u7AEF\u53E3\u4E3A465</span>

        smtpobj<span class="token punctuation">.</span>login<span class="token punctuation">(</span>sender<span class="token punctuation">,</span> sender_pass<span class="token punctuation">)</span>

        smtpobj<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span>sender<span class="token punctuation">,</span> recivers<span class="token punctuation">,</span> message<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;sucess&#39;</span><span class="token punctuation">)</span>
        smtpobj<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>


mail<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","py-mailtest-py.html.vue"]]);export{r as default};
