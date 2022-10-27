import{_ as n,o as s,c as a,e as p}from"./app.a667bd71.js";const t={},e=p(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!/usr/bin/python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>


<span class="token keyword">import</span> os
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> re

<span class="token comment"># \`\`\`ops</span>
<span class="token comment"># title:\u57FA\u4E8Epython\u7684\u7B80\u5355\u7684webshell\u811A\u672C\u68C0\u6D4B\u811A\u672C</span>
<span class="token comment"># descr:</span>
<span class="token comment"># \`\`\`</span>
rulelist <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;(\\$_(GET|POST|REQUEST)\\[.{0,15}\\]\\(\\$_(GET|POST|REQUEST)\\[.{0,15}\\]\\))&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(base64_decode\\([\\&#39;&quot;][\\w\\+/=]{200,}[\\&#39;&quot;]\\))&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;eval\\(base64_decode\\(&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(eval\\(\\$_(POST|GET|REQUEST)\\[.{0,15}\\]\\))&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(assert\\(\\$_(POST|GET|REQUEST)\\[.{0,15}\\]\\))&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(\\$[\\w_]{0,15}\\(\\$_(POST|GET|REQUEST)\\[.{0,15}\\]\\))&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(wscript\\.shell)&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(gethostbyname\\()&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(cmd\\.exe)&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(shell\\.application)&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(documents\\s+and\\s+settings)&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(system32)&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(serv-u)&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(\u63D0\u6743)&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(phpspy)&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(\u540E\u95E8)&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(webshell)&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;(Program\\s+Files)&#39;</span>
<span class="token punctuation">]</span>


<span class="token keyword">def</span> <span class="token function">Scan</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> root<span class="token punctuation">,</span> dirs<span class="token punctuation">,</span> files <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> filespath <span class="token keyword">in</span> files<span class="token punctuation">:</span>
            isover <span class="token operator">=</span> <span class="token boolean">False</span>
            <span class="token keyword">if</span> <span class="token string">&#39;.&#39;</span> <span class="token keyword">in</span> filespath<span class="token punctuation">:</span>
                ext <span class="token operator">=</span> filespath<span class="token punctuation">[</span><span class="token punctuation">(</span>filespath<span class="token punctuation">.</span>rindex<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
                <span class="token keyword">if</span> ext <span class="token operator">==</span> <span class="token string">&#39;php&#39;</span><span class="token punctuation">:</span>
                    <span class="token builtin">file</span> <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>root<span class="token punctuation">,</span> filespath<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    filestr <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token builtin">file</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token keyword">for</span> rule <span class="token keyword">in</span> rulelist<span class="token punctuation">:</span>
                        result <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span>rule<span class="token punctuation">)</span><span class="token punctuation">.</span>findall<span class="token punctuation">(</span>filestr<span class="token punctuation">)</span>
                        <span class="token keyword">if</span> result<span class="token punctuation">:</span>
                            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u6587\u4EF6\uFF1A&#39;</span><span class="token operator">+</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>root<span class="token punctuation">,</span> filespath<span class="token punctuation">)</span><span class="token punctuation">)</span>
                            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u6076\u610F\u4EE3\u7801\uFF1A&#39;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n\\n&#39;</span><span class="token punctuation">)</span>
                            <span class="token keyword">break</span>


<span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>lexists<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\n\\n\u5F00\u59CB\u626B\u63CF\uFF1A&#39;</span><span class="token operator">+</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;               \u53EF\u7591\u6587\u4EF6                 &#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;########################################&#39;</span><span class="token punctuation">)</span>
    Scan<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u63D0\u793A\uFF1A\u626B\u63CF\u5B8C\u6210-- O(\u2229_\u2229)O\u54C8\u54C8~&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u63D0\u793A\uFF1A\u6307\u5B9A\u7684\u626B\u63CF\u76EE\u5F55\u4E0D\u5B58\u5728---  \u6211\u9760( \\&#39;o\u2032)\uFF01\uFF01\u51F8&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function i(c,l){return s(),a("div",null,o)}const k=n(t,[["render",i],["__file","py-check-webshell2x-py.html.vue"]]);export{k as default};
