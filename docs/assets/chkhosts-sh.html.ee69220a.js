import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u68C0\u67E5\u4E3B\u673A\u72B6\u6001Check hosts from filel</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">#===============================</span>
<span class="token comment"># \u4F7F\u7528\u8BF4\u660E</span>
<span class="token comment">#\u6DFB\u52A0IP\u5730\u5740\u81F3ipadds.txt\u4E2D</span>
<span class="token comment">#\u8FD0\u884C</span>
<span class="token comment"># chmod +x chkhosts.sh</span>
<span class="token comment"># ./chkhosts.sh</span>
<span class="token comment">#===============================</span>
<span class="token assign-left variable">start</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%s<span class="token variable">\`</span></span>
<span class="token assign-left variable">HLIST</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> ./ipadds.txt<span class="token variable">)</span></span>
<span class="token assign-left variable">uphosts</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">downhosts</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">IP</span> <span class="token keyword">in</span> <span class="token variable">$HLIST</span>
<span class="token keyword">do</span>
    <span class="token function">ping</span> <span class="token parameter variable">-c</span> <span class="token number">3</span> <span class="token parameter variable">-i</span> <span class="token number">0.2</span> <span class="token parameter variable">-w</span> <span class="token number">3</span> <span class="token variable">$IP</span>  <span class="token operator">&amp;&gt;</span> /dev/null
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Host <span class="token variable">$IP</span> is UP!&quot;</span>
        <span class="token builtin class-name">let</span> uphosts++
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Host <span class="token variable">$IP</span> is down!&quot;</span>
        <span class="token builtin class-name">let</span> downhosts++
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
<span class="token assign-left variable">stop</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%s<span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Up hosts:<span class="token variable">$uphosts</span>.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Down hosts:<span class="token variable">$downhosts</span>.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;IP addresses (<span class="token variable">$uphosts</span> hosts up) scanned in $[ stop - start ] seconds&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[t];function p(o,c){return n(),a("div",null,i)}const d=s(l,[["render",p],["__file","chkhosts-sh.html.vue"]]);export{d as default};
