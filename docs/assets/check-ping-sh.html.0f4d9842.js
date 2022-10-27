import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:check ping on linux</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token assign-left variable">IP_LIST</span><span class="token operator">=</span><span class="token string">&quot;192.168.18.1 192.168.1.1 192.168.18.2&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">IP</span> <span class="token keyword">in</span> <span class="token variable">$IP_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">FAIL_COUNT</span><span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">3</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token function">ping</span> <span class="token parameter variable">-c</span> <span class="token number">1</span> <span class="token variable">$IP</span> <span class="token operator">&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$IP</span> Ping is successful.&quot;</span>
            <span class="token builtin class-name">break</span>
        <span class="token keyword">else</span>
            <span class="token comment"># echo &quot;$IP Ping is failure $i&quot;</span>
            <span class="token builtin class-name">let</span> FAIL_COUNT++
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$FAIL_COUNT</span> <span class="token parameter variable">-eq</span> <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$IP</span> Ping is failure!&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function t(i,c){return n(),a("div",null,o)}const k=s(l,[["render",t],["__file","check-ping-sh.html.vue"]]);export{k as default};
