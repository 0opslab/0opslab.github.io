import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u81EA\u52A8\u9632\u66B4\u529B\u7834\u89E3\u767B\u5F55</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token string">&quot;denyHosts.txt&quot;</span>
<span class="token assign-left variable">limit</span><span class="token operator">=</span><span class="token number">3</span>

<span class="token comment"># \u76D1\u63A7\u65E5\u5FD7\u5E76\u5728\u4E34\u65F6\u6587\u4EF6\u8BB0\u5F55</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
        <span class="token function">touch</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
<span class="token keyword">fi</span>
<span class="token function">cat</span> /var/log/auth.log <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/Failed/{print $(NF-3)}&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1&quot;-&quot;$2}&#39;</span> <span class="token operator">&gt;</span> <span class="token variable">$file</span>

<span class="token comment"># \u5199\u5165\u7CFB\u7EDF\u6587\u4EF6</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> $file<span class="token variable">\`</span></span>
<span class="token keyword">do</span>
        <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $i <span class="token operator">|</span> <span class="token function">awk</span> -F- <span class="token string">&#39;{print int($1)}&#39;</span><span class="token variable">\`</span></span>
        <span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $i <span class="token operator">|</span> <span class="token function">awk</span> -F- <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$num</span>&quot;</span> <span class="token parameter variable">-ge</span> <span class="token string">&quot;<span class="token variable">$limit</span>&quot;</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
              <span class="token assign-left variable">ipExist</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> $ip /etc/hosts.deny <span class="token parameter variable">-w</span><span class="token variable">\`</span></span>
              <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$ipExist</span>&quot;</span> <span class="token punctuation">]</span>  <span class="token comment">#\u5339\u914D\u5185\u5BB9\u4E3A\u7A7A</span>
              <span class="token keyword">then</span>
                      <span class="token builtin class-name">echo</span> <span class="token string">&quot;sshd:<span class="token variable">$ip</span>&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts.deny
              <span class="token keyword">fi</span>
        <span class="token keyword">fi</span>
<span class="token keyword">done</span>
<span class="token function">rm</span> <span class="token variable">$file</span>

<span class="token comment"># \u91CD\u542Fsshd\u670D\u52A1 </span>
<span class="token function">sudo</span> <span class="token function">service</span> sshd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function o(i,c){return n(),a("div",null,l)}const k=s(p,[["render",o],["__file","denyHosts-sh.html.vue"]]);export{k as default};
