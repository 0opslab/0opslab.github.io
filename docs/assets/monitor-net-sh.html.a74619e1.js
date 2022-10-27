import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u76D1\u63A7linux\u7F51\u7EDCnet\u53EF\u7528\u6027\u7684\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token assign-left variable">usage</span><span class="token operator">=</span><span class="token string">&quot;usage: <span class="token variable">$0</span> [eno1|bond0|...]&quot;</span>

<span class="token comment"># *** config ***</span>

<span class="token assign-left variable">INTERVAL</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">INFLUXDB_HOST</span><span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span>
<span class="token assign-left variable">INFLUXDB_PORT</span><span class="token operator">=</span><span class="token number">8086</span>

<span class="token comment"># *** varify ***</span>

<span class="token assign-left variable">ETH</span><span class="token operator">=</span><span class="token variable">$1</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$ETH</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$usage</span>
	<span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token comment"># \u9A8C\u8BC1\u7F51\u5361device\u662F\u5426up</span>
<span class="token assign-left variable">tmp</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ifconfig</span> $ETH<span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;ERROR [<span class="token variable">$ETH</span>]: Device not found&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">2</span>
<span class="token keyword">fi</span>

<span class="token comment"># *** monitor ***</span>

<span class="token assign-left variable">rxrt</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ifconfig</span> $ETH <span class="token operator">|</span> <span class="token function">grep</span> RX <span class="token operator">|</span> <span class="token function">grep</span> TX<span class="token variable">\`</span></span>
<span class="token assign-left variable">rx_before</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $rxrt <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">cut</span> -c7-<span class="token variable">\`</span></span>
<span class="token assign-left variable">tx_before</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $rxrt <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $6}&#39;</span> <span class="token operator">|</span><span class="token function">cut</span> -c7-<span class="token variable">\`</span></span>

<span class="token keyword">while</span> <span class="token builtin class-name">:</span> <span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span><span class="token variable">\`</span></span>

        <span class="token function">sleep</span> <span class="token variable">$INTERVAL</span>

        <span class="token assign-left variable">rxrt</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ifconfig</span> $ETH <span class="token operator">|</span> <span class="token function">grep</span> RX <span class="token operator">|</span> <span class="token function">grep</span> TX<span class="token variable">\`</span></span>
        <span class="token assign-left variable">rx_after</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $rxrt <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">cut</span> -c7-<span class="token variable">\`</span></span>
        <span class="token assign-left variable">tx_after</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $rxrt <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $6}&#39;</span> <span class="token operator">|</span><span class="token function">cut</span> -c7-<span class="token variable">\`</span></span>

        <span class="token assign-left variable">rx_result</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token variable">\${rx_after}</span>-<span class="token variable">\${rx_before}</span><span class="token punctuation">)</span>/128/<span class="token variable">$INTERVAL</span><span class="token punctuation">]</span>
        <span class="token assign-left variable">tx_result</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token variable">\${tx_after}</span>-<span class="token variable">\${tx_before}</span><span class="token punctuation">)</span>/128/<span class="token variable">$INTERVAL</span><span class="token punctuation">]</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${time}</span>+<span class="token variable">\${INTERVAL}</span> [<span class="token variable">\${ETH}</span>] InSpeed: <span class="token variable">\${rx_result}</span>kbps OutSpeed: <span class="token variable">\${tx_result}</span>kbps&quot;</span>

        <span class="token comment">#params=&quot;InSpeed=$rx_result,OutSpeed=$tx_result&quot;</span>
        <span class="token comment">#curl -i -XPOST &quot;http://\${INFLUXDB_HOST}:\${INFLUXDB_PORT}/write?db=monitordb&quot; --data-binary &quot;net,host=\${HOST},eth=\${ETH} \${params}&quot;</span>

        <span class="token assign-left variable">rx_before</span><span class="token operator">=</span><span class="token variable">$rx_after</span>
        <span class="token assign-left variable">tx_before</span><span class="token operator">=</span><span class="token variable">$tx_after</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function i(o,c){return n(),a("div",null,t)}const k=s(p,[["render",i],["__file","monitor-net-sh.html.vue"]]);export{k as default};
