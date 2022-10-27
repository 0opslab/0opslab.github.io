import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:install redis as service</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token assign-left variable">Redis_bin_server</span><span class="token operator">=</span>/usr/local/redis/bin/redis-server
<span class="token assign-left variable">Redis_bin_cli</span><span class="token operator">=</span>/usr/local/redis/bin/redis-cli
<span class="token assign-left variable">Redis_conf</span><span class="token operator">=</span>/data/redis<span class="token variable">$1</span>/<span class="token variable">$1</span>.conf
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token variable">$1</span>

<span class="token builtin class-name">source</span> /etc/init.d/functions
<span class="token function-name function">redis_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /data/redis<span class="token variable">$port</span>/<span class="token variable">$port</span>.rdb

        <span class="token keyword">if</span> <span class="token variable"><span class="token variable">$(</span>$Redis_bin_server $Redis_conf<span class="token variable">)</span></span>
        <span class="token keyword">then</span>
                <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> aux <span class="token operator">|</span><span class="token function">grep</span> redis-server <span class="token operator">|</span><span class="token function">grep</span> $port<span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
                <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Port:<span class="token variable">$port</span> redis is running, pid:<span class="token variable">$pid</span>&quot;</span>
                success
                <span class="token builtin class-name">echo</span>
        <span class="token keyword">else</span>
                <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Port:<span class="token variable">$port</span> redis is running!&quot;</span>
                failure
                <span class="token builtin class-name">echo</span>
            <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">redis_stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">#	pid=\`ps aux |grep redis-server |grep $port| grep -v grep |awk &#39;{print $2}&#39;\`</span>
<span class="token comment">#        if kill -9 $pid</span>
	<span class="token keyword">if</span> <span class="token variable"><span class="token variable">$(</span>$Redis_bin_cli <span class="token parameter variable">-p</span> $port <span class="token function">shutdown</span><span class="token variable">)</span></span>
        <span class="token keyword">then</span>
                <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Port:<span class="token variable">$port</span> redis is stopped!&quot;</span>
                success
                <span class="token builtin class-name">echo</span>
        <span class="token keyword">else</span>
                <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Port:<span class="token variable">$port</span> redis is stopped!&quot;</span>
                failure
                <span class="token builtin class-name">echo</span>
            <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">redis_restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        redis_stop
        <span class="token function">sleep</span> <span class="token number">1</span>
        redis_start
<span class="token punctuation">}</span>

<span class="token function-name function">redis_usage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Usage: <span class="token variable">$0</span> {port} {start,stop,restart}&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">}</span>


<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span> <span class="token keyword">in</span>
  start<span class="token punctuation">)</span> redis_start <span class="token punctuation">;</span><span class="token punctuation">;</span>
  stop<span class="token punctuation">)</span>  redis_stop  <span class="token punctuation">;</span><span class="token punctuation">;</span>
  restart<span class="token punctuation">)</span> redis_restart <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span>     redis_usage <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[l];function t(c,o){return n(),a("div",null,p)}const d=s(i,[["render",t],["__file","redis-tool-sh.html.vue"]]);export{d as default};
