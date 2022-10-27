import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:Shell script to monitor running services such as web/http</span>
<span class="token comment">#descr:Shell script to monitor running services such as web/http, ssh, mail etc. If service fails it will send an Email to ADMIN user</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment"># -------------------------------------------------------------------------</span>
<span class="token comment"># Copyright (c) 2006 nixCraft project &lt;http://www.cyberciti.biz/fb/&gt;</span>
<span class="token comment"># This script is licensed under GNU GPL version 2.0 or above</span>
<span class="token comment"># -------------------------------------------------------------------------</span>
<span class="token comment"># This script is part of nixCraft shell script collection (NSSC)</span>
<span class="token comment"># Visit http://bash.cyberciti.biz/ for more information.</span>
<span class="token comment"># ----------------------------------------------------------------------</span>
<span class="token comment"># See URL for more info</span>
<span class="token comment"># http://www.cyberciti.biz/tips/processing-the-delimited-files-using-cut-and-awk.html</span>
<span class="token comment"># ---------------------------------------------------</span>
<span class="token comment"># Last updated: Jun - 15 - 2009.</span>
<span class="token assign-left variable">ports</span><span class="token operator">=</span><span class="token string">&quot;22 53 80 25&quot;</span>

<span class="token comment"># service names as per above ports</span>
<span class="token assign-left variable">service</span><span class="token operator">=</span><span class="token string">&quot;SSH DNS WEB MAIL&quot;</span>

<span class="token comment">#Email id to send alert</span>
<span class="token assign-left variable">ADMINEMAIL</span><span class="token operator">=</span><span class="token string">&quot;ppabc@qq.com&quot;</span>

<span class="token comment">#Bin paths, set them according to your Linux distro</span>
<span class="token assign-left variable">NETSTAT</span><span class="token operator">=</span>/bin/netstat
<span class="token assign-left variable">MAIL</span><span class="token operator">=</span>/bin/mail
<span class="token assign-left variable">LOGGER</span><span class="token operator">=</span>/bin/logger
<span class="token assign-left variable">ID</span><span class="token operator">=</span>/usr/bin/id

<span class="token comment"># Red hat usr uncomment</span>
<span class="token assign-left variable">MAIL</span><span class="token operator">=</span>/bin/mail
<span class="token assign-left variable">LOGGER</span><span class="token operator">=</span>/bin/logger

<span class="token comment">#Counters, set defaults</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
<span class="token assign-left variable">sendmail</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token comment"># set the following to 1, if you want message in /var/log/messages via a SYSLOG</span>
<span class="token assign-left variable">logtosyslog</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token comment"># Log file used to send an email</span>
<span class="token assign-left variable">LOG</span><span class="token operator">=</span><span class="token string">&quot;/tmp/services.log.<span class="token variable">$$</span>&quot;</span>

<span class="token comment"># log message to screen and a log file</span>
<span class="token function-name function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG</span>
<span class="token punctuation">}</span>

<span class="token comment"># log message and stop script</span>
<span class="token function-name function">die</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">999</span>
<span class="token punctuation">}</span>

<span class="token comment"># Make sure only root can run it</span>
<span class="token function-name function">is_root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$ID <span class="token parameter variable">-u</span><span class="token variable">)</span></span>
    <span class="token punctuation">[</span> <span class="token variable">$id</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span>  <span class="token operator">&amp;&amp;</span> die <span class="token string">&quot;You must be root to run <span class="token variable">$0</span>.&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment"># Look out for all bins and create a log file</span>
<span class="token function-name function">init_script</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-x</span> <span class="token variable">$MAIL</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> die <span class="token string">&quot;<span class="token variable">$MAIL</span> command not found.&quot;</span>
    <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-x</span> <span class="token variable">$NETSTAT</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> die <span class="token string">&quot;<span class="token variable">$NETSTAT</span> command not found.&quot;</span>
    <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-x</span> <span class="token variable">$LOGGER</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> die <span class="token string">&quot;<span class="token variable">$LOGGER</span> command not found.&quot;</span>
    <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-x</span> <span class="token variable">$ID</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> die <span class="token string">&quot;<span class="token variable">$ID</span> command not found.&quot;</span>
    is_root
    <span class="token operator">&gt;</span><span class="token variable">$LOG</span>
<span class="token punctuation">}</span>

<span class="token comment"># check for all running services and shoot an email if service is not running</span>
<span class="token function-name function">chk_services</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    log <span class="token string">&quot;-------------------------------------------------------------&quot;</span>
    log <span class="token string">&quot;Running services status @ <span class="token variable"><span class="token variable">$(</span><span class="token function">hostname</span><span class="token variable">)</span></span> [ <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span> ]&quot;</span>
    log <span class="token string">&quot;-------------------------------------------------------------&quot;</span>

    <span class="token comment"># get open ports</span>
    <span class="token assign-left variable">RPORTS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$NETSTAT <span class="token parameter variable">-tulpn</span> <span class="token parameter variable">-A</span> inet <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-vE</span> <span class="token string">&#39;^Active|Proto&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;LISTEN&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $4}&#39;</span> <span class="token operator">|</span> <span class="token function">cut</span> -d: <span class="token parameter variable">-f2</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;/^$/d&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span>  <span class="token parameter variable">-u</span><span class="token variable">)</span></span>

    <span class="token comment"># okay let us compare them</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">t</span> <span class="token keyword">in</span> <span class="token variable">$ports</span>
    <span class="token keyword">do</span>
        <span class="token assign-left variable">sname</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $service <span class="token operator">|</span> <span class="token function">cut</span> -d<span class="token string">&#39; &#39;</span> -f$c<span class="token variable">)</span></span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-en</span> <span class="token string">&quot; <span class="token variable">$sname</span><span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span> : &quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-en</span> <span class="token string">&quot; <span class="token variable">$sname</span><span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span> : &quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG</span>
        <span class="token keyword">for</span> <span class="token for-or-select variable">r</span> <span class="token keyword">in</span> <span class="token variable">$RPORTS</span>
        <span class="token keyword">do</span>
            <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$r</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;<span class="token variable">$t</span>&quot;</span> <span class="token punctuation">]</span>
            <span class="token keyword">then</span>
                <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token string">&quot;YES&quot;</span>
                <span class="token assign-left variable">sendmail</span><span class="token operator">=</span><span class="token number">1</span>
                <span class="token builtin class-name">break</span>
            <span class="token keyword">fi</span>
        <span class="token keyword">done</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$status</span>&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$status</span>&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">$LOG</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">$LOG</span>
        <span class="token comment"># Log to a syslog /var/log/messages</span>
        <span class="token comment"># This is useful if you have a dedicated syslog server</span>
        <span class="token punctuation">[</span> <span class="token variable">$logtosyslog</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span>  <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$LOGGER</span> <span class="token string">&quot;<span class="token variable">$sname</span> service running : <span class="token variable">$status</span>&quot;</span>

        <span class="token comment"># Update counters for next round</span>
        <span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span> <span class="token function">expr</span> $c + <span class="token number">1</span> <span class="token variable">)</span></span>
        <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token string">&quot;NO&quot;</span>
    <span class="token keyword">done</span>
    log <span class="token string">&quot;-------------------------------------------------------------&quot;</span>
    log <span class="token string">&quot;This is an automatically generated <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span><span class="token variable">)</span></span> service status notification by <span class="token variable">$0</span> script.&quot;</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$sendmail</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">then</span>
        <span class="token variable">$MAIL</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;Service Down @ <span class="token variable"><span class="token variable">$(</span><span class="token function">hostname</span><span class="token variable">)</span></span>&quot;</span> <span class="token variable">$ADMINEMAIL</span> <span class="token operator">&lt;</span> <span class="token variable">$LOG</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">### main ###</span>
init_script
chk_services

<span class="token comment">### remove a log file ###</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$LOG</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> /bin/rm <span class="token parameter variable">-f</span> <span class="token variable">$LOG</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[l];function i(o,c){return n(),a("div",null,p)}const v=s(t,[["render",i],["__file","sshdns-sh.html.vue"]]);export{v as default};
