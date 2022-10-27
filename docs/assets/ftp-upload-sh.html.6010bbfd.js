import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:bash\u5229\u7528ftp\u547D\u4EE4\u6279\u91CF\u4E0A\u4F20\u6587\u4EF6\u5230\u8FDC\u7A0Bftp</span>
<span class="token comment">#descr:\u4ECElinux\u670D\u52A1\u5668\u6279\u91CF\u4E0A\u4F20/var/log/polling\u6587\u4EF6\u5939\u91CC\u9762\u6587\u4EF6\u5230FTP(192.168.1.99)\u91CC\u9762/jishu/liujian/polling\u76EE\u5F55</span>
<span class="token comment">#\`\`\`</span>

<span class="token assign-left variable">updir</span><span class="token operator">=</span>/var/log/polling
<span class="token assign-left variable">todir</span><span class="token operator">=</span>/jishu/liujian/polling
<span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">192.168</span>.1.99
<span class="token assign-left variable">user</span><span class="token operator">=</span>ljohn1
<span class="token assign-left variable">password</span><span class="token operator">=</span>ljohn
<span class="token assign-left variable">sss</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> $updir <span class="token parameter variable">-type</span> d <span class="token parameter variable">-printf</span> $todir/<span class="token string">&#39;%P\\n&#39;</span><span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{if ($0 == &quot;&quot;)next;print &quot;mkdir &quot; $0}&#39;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">aaa</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> $updir <span class="token parameter variable">-type</span> f <span class="token parameter variable">-printf</span> <span class="token string">&#39;put %p %P \\n&#39;</span><span class="token variable">\`</span></span>
<span class="token function">ftp</span> <span class="token parameter variable">-nv</span> <span class="token variable">$ip</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF 
user <span class="token variable">$user</span> <span class="token variable">$password</span>
type binary 
passive
prompt 
<span class="token variable">$sss</span> 
cd <span class="token variable">$todir</span> 
<span class="token variable">$aaa</span> 
quit 
EOF</span>



<span class="token comment"># \u53E6\u5916\u4E00\u79CD\u5199\u6CD5</span>
<span class="token comment"># Upload file(s) to FTP server</span>
<span class="token comment"># Argument example:</span>
<span class="token comment"># 1) ./ftp_upload.sh filename</span>
<span class="token comment"># 2) ./ftp_upload.sh filename1 filename2 filename3 ...</span>
<span class="token comment"># 3) ./ftp_upload.sh &quot;*.extension&quot;</span>
<span class="token comment"># 4) ./ftp_upload.sh &quot;*.extension1&quot; &quot;*.extension2&quot;</span>
<span class="token comment">#</span>

<span class="token comment">########## START OF CONFIG ##########</span>

<span class="token comment"># Local directory (current folder)</span>
<span class="token assign-left variable">LOCALDIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span> <span class="token builtin class-name">pwd</span> <span class="token variable">)</span></span>

<span class="token comment"># File to log the outcome of backups</span>
<span class="token assign-left variable">LOGFILE</span><span class="token operator">=</span><span class="token string">&quot;/var/log/ftp_upload.log&quot;</span>

<span class="token comment"># FTP server</span>
<span class="token comment"># Enter the Hostname or IP address below</span>
<span class="token assign-left variable">FTP_HOST</span><span class="token operator">=</span><span class="token string">&quot;192.168.1.99&quot;</span>

<span class="token comment"># FTP username</span>
<span class="token comment"># Enter the FTP username below</span>
<span class="token assign-left variable">FTP_USER</span><span class="token operator">=</span><span class="token string">&quot;ljohn1&quot;</span>

<span class="token comment"># FTP password</span>
<span class="token comment"># Enter the username&#39;s password below</span>
<span class="token assign-left variable">FTP_PASS</span><span class="token operator">=</span><span class="token string">&quot;ljohn&quot;</span>

<span class="token comment"># FTP server remote folder</span>
<span class="token comment"># Enter the FTP remote folder below</span>
<span class="token comment"># For example: public_html</span>
<span class="token assign-left variable">FTP_DIR</span><span class="token operator">=</span><span class="token string">&quot;/&quot;</span>

<span class="token comment">########## END OF CONFIG ##########</span>


<span class="token function-name function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&quot;+%Y-%m-%d %H:%M:%S&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOGFILE}</span>
<span class="token punctuation">}</span>

<span class="token comment"># Check ftp command</span>
<span class="token function-name function">check_command</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;ftp&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        log <span class="token string">&quot;ftp command is not installed, please install it and try again&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># Tranferring backup file to FTP server</span>
<span class="token function-name function">ftp_upload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">cd</span> <span class="token variable">\${LOCALDIR}</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span>

    <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">\${FTP_HOST}</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> log <span class="token string">&quot;Error: FTP_HOST can not be empty!&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">\${FTP_USER}</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> log <span class="token string">&quot;Error: FTP_USER can not be empty!&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">\${FTP_PASS}</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> log <span class="token string">&quot;Error: FTP_PASS can not be empty!&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">\${FTP_DIR}</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> log <span class="token string">&quot;Error: FTP_DIR can not be empty!&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;*&quot;</span> <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">ls</span> <span class="token variable">$@</span> <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
        <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> log <span class="token string">&quot;Error: [<span class="token variable">$@</span>] file(s) not exists!&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">else</span>
        <span class="token keyword">for</span> <span class="token for-or-select variable">f</span> <span class="token keyword">in</span> <span class="token variable">$@</span>
        <span class="token keyword">do</span>
            <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-f</span> <span class="token variable">\${f}</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> log <span class="token string">&quot;Error: [<span class="token variable">\${f}</span>] not exists!&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
        <span class="token keyword">done</span>
    <span class="token keyword">fi</span>

    <span class="token builtin class-name">local</span> <span class="token assign-left variable">FTP_OUT_FILE</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token punctuation">)</span>

    log <span class="token string">&quot;Tranferring file(s) list below to FTP server:&quot;</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">\${FTP_OUT_FILE<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
    <span class="token keyword">do</span>
        log <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span>
    <span class="token keyword">done</span>
    <span class="token function">ftp</span> <span class="token parameter variable">-in</span> <span class="token variable">\${FTP_HOST}</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOGFILE}</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
user <span class="token variable">$FTP_USER</span> <span class="token variable">$FTP_PASS</span>
binary
lcd <span class="token variable">$LOCALDIR</span>
cd <span class="token variable">$FTP_DIR</span>
mput <span class="token variable">\${FTP_OUT_FILE<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
quit
EOF</span>
    log <span class="token string">&quot;Tranfer to FTP server completed&quot;</span>
<span class="token punctuation">}</span>


<span class="token comment"># Main progress</span>
<span class="token assign-left variable">STARTTIME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>

<span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> log <span class="token string">&quot;Error: argument can not be empty!&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>

check_command

ftp_upload <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>


<span class="token assign-left variable">ENDTIME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>
<span class="token assign-left variable">DURATION</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>ENDTIME <span class="token operator">-</span> STARTTIME<span class="token variable">))</span></span>
log <span class="token string">&quot;All done&quot;</span>
log <span class="token string">&quot;Transfer completed in <span class="token variable">\${DURATION}</span> seconds&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function i(o,c){return n(),a("div",null,t)}const v=s(p,[["render",i],["__file","ftp-upload-sh.html.vue"]]);export{v as default};
