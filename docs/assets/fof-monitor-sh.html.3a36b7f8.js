import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:monitor process\uFF0Crestart process</span>
<span class="token comment">#descr:\u76D1\u63A7\u8FDB\u7A0B\u548C\u91CD\u542F\u8FDB\u7A0B</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">#</span>
<span class="token comment">#set env </span>
<span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/init.d/functions <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> /etc/init.d/functions
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8

<span class="token comment"># run this script use root</span>
<span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;please use root run the script! &quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span> 

<span class="token comment"># \u8FDB\u7A0B\u540D\uFF0C\u8DEF\u5F84\uFF0C\u53CA\u670D\u52A1URL</span>
<span class="token assign-left variable">ProcNam</span><span class="token operator">=</span>cljj_fof
<span class="token assign-left variable">PPATH</span><span class="token operator">=</span>/cljj/apps/50cljj_fof
<span class="token assign-left variable">URLS</span><span class="token operator">=</span>http://127.0.0.1:9015/webfof_login/login

<span class="token assign-left variable">MAIL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">which</span> mail<span class="token variable">\`</span></span>
<span class="token assign-left variable">IP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ip</span> addr<span class="token operator">|</span> <span class="token function">grep</span> eth0 <span class="token operator">|</span><span class="token function">grep</span> inet <span class="token operator">|</span><span class="token function">egrep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;inet6|127.0.0.1&quot;</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;/&quot;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">LOG</span><span class="token operator">=</span>/tmp/process_monitor.log
<span class="token assign-left variable">TIME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d-%H-%M-%S<span class="token variable">)</span></span>

<span class="token comment"># curl \u83B7\u53D6\u72B6\u6001\u7801</span>
<span class="token function-name function">curl_ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token assign-left variable">CURL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-o</span> /dev/null <span class="token parameter variable">-s</span> --connect-timeout <span class="token number">5</span> <span class="token parameter variable">-w</span> <span class="token string">&#39;%{http_code}&#39;</span> $1<span class="token operator">|</span><span class="token function">egrep</span> <span class="token string">&quot;200|302&quot;</span><span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">)</span></span>
  <span class="token builtin class-name">return</span> <span class="token variable">$CURL</span>
<span class="token punctuation">}</span>

<span class="token comment"># mail name</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token punctuation">(</span>
liujian
wanhonglei
<span class="token punctuation">)</span>

<span class="token comment"># \u90AE\u4EF6</span>
<span class="token function-name function">mail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">for</span> <span class="token for-or-select variable">m</span> <span class="token keyword">in</span> <span class="token variable">\${NAME<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
     <span class="token keyword">do</span>
         <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> restart failure on <span class="token variable">$TIME</span>, Please check <span class="token variable">$1</span> on <span class="token variable">$IP</span>!!&quot;</span> <span class="token operator">|</span> <span class="token variable">$MAIL</span> <span class="token parameter variable">-s</span> <span class="token string">&quot; FOF restart failure&quot;</span>  <span class="token variable">$m</span>@erichfund.com
     <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u91CD\u65B0\u62C9\u8D77\u670D\u52A1</span>
<span class="token function-name function">start_proc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token assign-left variable">ProcNum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> $ProcNam <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
   curl_ip <span class="token variable">$URLS</span> <span class="token operator">&amp;&gt;</span> /dev/null
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$CURL</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token parameter variable">-o</span>  <span class="token variable">$ProcNum</span>  <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token comment">#\u5224\u65AD\u8FDB\u7A0B\u662F\u5426\u5B58\u5728\uFF0Curl\u8BF7\u6C42\u662F\u5426\u6210\u529F\uFF0C\u4EFB\u610F\u4E00\u4E2A\u6761\u4EF6\u6EE1\u8DB3\u5C31\u6267\u884C\u91CD\u542F</span>
      <span class="token variable">$PPATH</span>/startx.sh <span class="token operator">&amp;&gt;</span> /dev/null 
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
         <span class="token builtin class-name">echo</span> <span class="token string">&quot;-------<span class="token variable">$TIME</span>-------&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG</span>
         <span class="token builtin class-name">echo</span> <span class="token string">&quot;starting <span class="token variable">$ProcNam</span>...&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG</span>
         <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$ProcNam</span> is restarted!!&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG</span>
         <span class="token function">sleep</span> <span class="token number">30</span>
         <span class="token comment"># \u5982\u679C\u91CD\u542F\u5B8C\u6210\uFF0C\u8FD8\u662F\u65E0\u6CD5\u8BBF\u95EEurl\uFF0C\u5219\u53D1\u90AE\u4EF6\u901A\u77E5\u7BA1\u7406\u5458</span>
         curl_ip <span class="token variable">$URLS</span> <span class="token operator">&amp;&gt;</span> /dev/null
         <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$CURL</span> <span class="token parameter variable">-ne</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
            mail <span class="token variable">$ProcNam</span>
         <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$ProcNam</span> status is ok&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$LOG</span>
         <span class="token keyword">fi</span>
      <span class="token keyword">fi</span>
   <span class="token keyword">fi</span> 
<span class="token punctuation">}</span>

<span class="token comment"># \u7B2C\u4E00\u6B21\u5224\u65ADURL\u662F\u5426\u6B63\u5E38\u8BBF\u95EE\uFF0C\u5982\u679C\u4E0D\u6B63\u5E38\uFF0C\u90A3\u4E48sleep 1\u5206\u949F</span>
curl_ip <span class="token variable">$URLS</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
   action <span class="token string">&quot;curl <span class="token variable">$URLS</span>&quot;</span> /bin/true
<span class="token keyword">else</span>
   action <span class="token string">&quot;curl <span class="token variable">$URLS</span>&quot;</span> /bin/false
   <span class="token function">sleep</span> <span class="token number">60</span> <span class="token comment">#\u9632\u6B62\u9879\u76EE\u6B63\u5728\u4E0A\u7EBF</span>
     curl_ip <span class="token variable">$URLS</span>
     <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$CURL</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        action <span class="token string">&quot;Retry curl <span class="token variable">$URLS</span> again&quot;</span> /bin/true
     <span class="token keyword">else</span>
        action <span class="token string">&quot;Retry curl <span class="token variable">$URLS</span> again&quot;</span> /bin/false
        start_proc
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>


<span class="token comment"># crontab \u5B9A\u65F6\u6BCF1\u5206\u949F\u6267\u884C\u4E00\u6B21</span>
<span class="token comment"># * * * * * /bin/bash /server/scripts/fof_monitor.sh &amp;&gt;/dev/null</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function i(o,c){return n(),a("div",null,t)}const k=s(p,[["render",i],["__file","fof-monitor-sh.html.vue"]]);export{k as default};
