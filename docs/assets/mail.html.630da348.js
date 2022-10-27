import{_ as s,o as n,c as e,e as a}from"./app.a667bd71.js";const i={},t=a(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-b<span class="token operator">&lt;</span>\u5730\u5740<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u5BC6\u4EF6\u526F\u672C\u7684\u6536\u4FE1\u4EBA\u5730\u5740\uFF1B
-c<span class="token operator">&lt;</span>\u5730\u5740<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u526F\u672C\u7684\u6536\u4FE1\u4EBA\u5730\u5740\uFF1B
-f<span class="token operator">&lt;</span>\u90AE\u4EF6\u6587\u4EF6<span class="token operator">&gt;</span>\uFF1A\u8BFB\u53D6\u6307\u5B9A\u90AE\u4EF6\u6587\u4EF6\u4E2D\u7684\u90AE\u4EF6\uFF1B
-i\uFF1A\u4E0D\u663E\u793A\u7EC8\u7AEF\u53D1\u51FA\u7684\u4FE1\u606F\uFF1B
-I\uFF1A\u4F7F\u7528\u4E92\u52A8\u6A21\u5F0F\uFF1B
-n\uFF1A\u7A0B\u5E8F\u4F7F\u7528\u65F6\uFF0C\u4E0D\u4F7F\u7528mail.rc\u6587\u4EF6\u4E2D\u7684\u8BBE\u7F6E\uFF1B
-N\uFF1A\u9605\u8BFB\u90AE\u4EF6\u65F6\uFF0C\u4E0D\u663E\u793A\u90AE\u4EF6\u7684\u6807\u9898\uFF1B
-s<span class="token operator">&lt;</span>\u90AE\u4EF6\u4E3B\u9898<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u90AE\u4EF6\u7684\u4E3B\u9898\uFF1B
-u<span class="token operator">&lt;</span>\u7528\u6237\u5E10\u53F7<span class="token operator">&gt;</span>\uFF1A\u8BFB\u53D6\u6307\u5B9A\u7528\u6237\u7684\u90AE\u4EF6\uFF1B
-v\uFF1A\u6267\u884C\u65F6\uFF0C\u663E\u793A\u8BE6\u7EC6\u7684\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">##\u5B9A\u65F6\u66F4\u6362/etc/mail.rc\u914D\u7F6E\u6587\u4EF6</span>
<span class="token comment">##0 */12 * * * /data/shell/mail.sh</span>
<span class="token assign-left variable">check</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /tmp/mail_check.log<span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$check</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/mail.rc<span class="token operator">&lt;&lt;</span><span class="token string">EOF
set hold
set append
set ask
set crt
set dot
set keep
set emptybox
set indentprefix=&quot;&gt; &quot;
set quote
set sendcharsets=iso-8859-1,utf-8
set showname
set showto
set newmail=nopoll
set autocollapse
ignore received in-reply-to message-id references
ignore mime-version content-transfer-encoding
fwdretain subject date from to
set bsdcompat
set from=test1@nagios.com smtp=192.168.1.12
set smtp-auth-user=test1@nagios.com smtp-auth-password=testtest20160722a smtp-auth=login
EOF</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;2&quot;</span> <span class="token operator">&gt;</span> /tmp/mail_check.log
<span class="token keyword">fi</span>


<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$check</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;2&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/mail.rc<span class="token operator">&lt;&lt;</span><span class="token string">EOF
set hold
set append
set ask
set crt
set dot
set keep
set emptybox
set indentprefix=&quot;&gt; &quot;
set quote
set sendcharsets=iso-8859-1,utf-8
set showname
set showto
set newmail=nopoll
set autocollapse
ignore received in-reply-to message-id references
ignore mime-version content-transfer-encoding
fwdretain subject date from to
set bsdcompat
set from=test2@nagios.com smtp=192.168.1.15
set smtp-auth-user=test2@nagios.com smtp-auth-password=testtest20160722b smtp-auth=login
EOF</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1&quot;</span> <span class="token operator">&gt;</span> /tmp/mail_check.log
<span class="token keyword">fi</span>
<span class="token function">date</span> <span class="token operator">&gt;&gt;</span> /tmp/mail_time.log

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[t];function o(c,d){return n(),e("div",null,l)}const p=s(i,[["render",o],["__file","mail.html.vue"]]);export{p as default};
