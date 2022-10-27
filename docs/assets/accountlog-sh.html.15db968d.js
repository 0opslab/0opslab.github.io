import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const l={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u7B80\u5355\u8BB0\u5F55\u7528\u6237\u64CD\u4F5C\u7684\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">#vi /etc/profile.d/accountlog.sh</span>
<span class="token comment">#chmod +x /etc/profile.d/accountlog.sh</span>
<span class="token comment">#vi /etc/profile</span>
<span class="token comment">#HISTTIMEFORMAT=&quot;%Y/%m/%d %H:%M:%S &quot;   </span>
<span class="token function-name function">historyLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token assign-left variable">logDir</span><span class="token operator">=</span>/data/accountlog
    <span class="token assign-left variable">dateStamp</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;[%F %T]&quot;</span><span class="token variable">\`</span></span>
    <span class="token assign-left variable">dateDir</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y<span class="token variable">\`</span></span>/<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%m<span class="token variable">\`</span></span>/<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%d<span class="token variable">\`</span></span>&quot;</span>
    <span class="token assign-left variable">curHistory</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">history</span> <span class="token number">1</span><span class="token variable">\`</span></span>
    <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>/usr/bin/whoami<span class="token variable">\`</span></span>
    <span class="token assign-left variable">realUserInfor</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>/usr/bin/who <span class="token parameter variable">-u</span> am i<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1,$2,$3&quot;~&quot;$4,$7}&#39;</span><span class="token variable">\`</span></span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-e</span> <span class="token variable">$logDir</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$logDir</span>
        <span class="token function">chmod</span> <span class="token number">777</span> <span class="token variable">$logDir</span>
    <span class="token keyword">fi</span>

    <span class="token assign-left variable">logDateDir</span><span class="token operator">=</span><span class="token variable">$logDir</span>/<span class="token variable">$dateDir</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-e</span> <span class="token variable">$logDateDir</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$logDateDir</span>
        <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> <span class="token variable">$logDir</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
    <span class="token keyword">fi</span> 

 

    <span class="token assign-left variable">accountLogDir</span><span class="token operator">=</span><span class="token variable">$logDateDir</span>/<span class="token variable">\${user<span class="token operator">:=</span>\`hostname\`}</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-e</span> <span class="token variable">$accountLogDir</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$accountLogDir</span>
        <span class="token comment">#chmod 777 $accountLogDir</span>
    <span class="token keyword">fi</span>

 

    <span class="token assign-left variable">accountLogName</span><span class="token operator">=</span><span class="token variable">\${user<span class="token operator">:=</span>\`hostname\`}</span>.his
    <span class="token assign-left variable">accountLog</span><span class="token operator">=</span><span class="token variable">$accountLogDir</span>/<span class="token variable">$accountLogName</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable">$accountLog</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">touch</span> <span class="token variable">$accountLog</span>
        <span class="token comment">#chmod 777 $accountLog</span>
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$realUserInfor</span> <span class="token variable">$dateStamp</span> =&gt;<span class="token variable">$curHistory</span>&quot;</span> <span class="token operator">&gt;&gt;</span><span class="token variable">$accountLog</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">PROMPT_COMMAND</span><span class="token operator">=</span>historyLog

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[p];function o(i,c){return a(),n("div",null,t)}const v=s(l,[["render",o],["__file","accountlog-sh.html.vue"]]);export{v as default};
