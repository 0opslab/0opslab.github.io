import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:install redis as service</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">#/usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf</span>
<span class="token comment">#\u505C\u6B62Redis: src/redis-cli shutdown</span>

<span class="token comment"># config:      /usr/local/redis-2.4.X/bin/redis-server</span>
<span class="token comment"># config:      /usr/local/ /redis-2.4.X/etc/redis.conf</span>
<span class="token comment"># Source function library.</span>
<span class="token builtin class-name">.</span> /etc/rc.d/init.d/functions
<span class="token comment"># Source networking configuration.</span>
<span class="token builtin class-name">.</span> /etc/sysconfig/network
<span class="token comment"># Check that networking is up.</span>
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$NETWORKING</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;no&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token assign-left variable">redis</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/webserver/redis-2.4.X/bin/redis-server&quot;</span>
<span class="token assign-left variable">prog</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $redis<span class="token variable">)</span></span>
<span class="token assign-left variable">REDIS_CONF_FILE</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/webserver/redis-2.4.X/etc/redis.conf&quot;</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/sysconfig/redis <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> /etc/sysconfig/redis
<span class="token assign-left variable">lockfile</span><span class="token operator">=</span>/var/lock/subsys/redis
<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$redis</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">5</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$REDIS_CONF_FILE</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">6</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Starting <span class="token variable">$prog</span>: &quot;</span>
    daemon <span class="token variable">$redis</span> <span class="token variable">$REDIS_CONF_FILE</span>
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$retval</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> <span class="token variable">$lockfile</span>
    <span class="token builtin class-name">return</span> <span class="token variable">$retval</span>
<span class="token punctuation">}</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Stopping <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$prog</span> <span class="token parameter variable">-QUIT</span>
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$retval</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$lockfile</span>
    <span class="token builtin class-name">return</span> <span class="token variable">$retval</span>
<span class="token punctuation">}</span>
<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    stop
    start
<span class="token punctuation">}</span>
<span class="token function-name function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Reloading <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$redis</span> <span class="token parameter variable">-HUP</span>
    <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
<span class="token punctuation">}</span>
<span class="token function-name function">force_reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    restart
<span class="token punctuation">}</span>
<span class="token function-name function">rh_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    status <span class="token variable">$prog</span>
<span class="token punctuation">}</span>
<span class="token function-name function">rh_status_q</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rh_status <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token punctuation">}</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    start<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    stop<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    restart<span class="token operator">|</span>configtest<span class="token punctuation">)</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    reload<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">7</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    force-reload<span class="token punctuation">)</span>
        force_reload
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    status<span class="token punctuation">)</span>
        rh_status
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    condrestart<span class="token operator">|</span>try-restart<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> $<span class="token string">&quot;Usage: <span class="token variable">$0</span> {start|stop|status|restart|condrestart|try-restart| reload|orce-reload}&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">2</span>
<span class="token keyword">esac</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[i];function p(c,o){return s(),a("div",null,l)}const u=n(t,[["render",p],["__file","redisHandler-sh.html.vue"]]);export{u as default};
