import{_ as s,o as n,c as e,e as a}from"./app.a667bd71.js";const i={},t=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To connect to a running Asterisk session:</span>
<span class="token comment">#\u8981\u8FDE\u63A5\u5230\u6B63\u5728\u8FD0\u884C\u7684Asterisk\u4F1A\u8BDD\uFF1A</span>
asterisk <span class="token parameter variable">-rvvv</span>

<span class="token comment"># To issue a command to Asterisk from the shell:</span>
<span class="token comment">#\u8981\u4ECEshell\u5411Asterisk\u53D1\u51FA\u547D\u4EE4\uFF1A</span>
asterisk <span class="token parameter variable">-rx</span> <span class="token string">&quot;&lt;command&gt;&quot;</span>

<span class="token comment"># To originate an echo call from a SIP trunk on an Asterisk server, to a specified number:</span>
<span class="token comment">#\u8981\u4ECEAsterisk\u670D\u52A1\u5668\u4E0A\u7684SIP\u5E72\u7EBF\u53D1\u8D77\u56DE\u663E\u547C\u53EB\uFF0C\u8BF7\u53D1\u9001\u5230\u6307\u5B9A\u7684\u53F7\u7801\uFF1A</span>
asterisk <span class="token parameter variable">-rx</span> <span class="token string">&quot;channel originate SIP/&lt;trunk&gt;/&lt;number&gt; application echo&quot;</span>

<span class="token comment"># To print out the details of SIP accounts:</span>
<span class="token comment">#\u8981\u6253\u5370\u51FASIP\u5E10\u6237\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF1A</span>
asterisk <span class="token parameter variable">-rx</span> <span class="token string">&quot;sip show peers&quot;</span>

<span class="token comment"># To print out the passwords of SIP accounts:</span>
<span class="token comment">#\u6253\u5370\u51FASIP\u5E10\u6237\u7684\u5BC6\u7801\uFF1A</span>
asterisk <span class="token parameter variable">-rx</span> <span class="token string">&quot;sip show users&quot;</span>

<span class="token comment"># To print out the current active channels:</span>
<span class="token comment">#\u6253\u5370\u51FA\u5F53\u524D\u6D3B\u52A8\u9891\u9053\uFF1A</span>
asterisk <span class="token parameter variable">-rx</span> <span class="token string">&quot;core show channels&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function r(c,o){return n(),e("div",null,l)}const p=s(i,[["render",r],["__file","asterisk.html.vue"]]);export{p as default};
