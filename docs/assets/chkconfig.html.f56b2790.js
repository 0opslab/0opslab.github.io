import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<p>chkconfig \u670D\u52A1\u540D on|off|set # \u8BBE\u7F6E\u975E\u72EC\u7ACB\u670D\u52A1\u542F\u72B6\u6001 chkconfig --level 35 httpd off # \u8BA9\u670D\u52A1\u4E0D\u81EA\u52A8\u542F\u52A8 chkconfig --level 35 httpd on # \u8BA9\u670D\u52A1\u81EA\u52A8\u542F\u52A8 35\u6307\u7684\u662F\u8FD0\u884C\u7EA7\u522B chkconfig --list # \u67E5\u770B\u6240\u6709\u670D\u52A1\u7684\u542F\u52A8\u72B6\u6001 chkconfig --list |grep httpd # \u67E5\u770B\u67D0\u4E2A\u670D\u52A1\u7684\u542F\u52A8\u72B6\u6001 chkconfig \u2013-list [\u670D\u52A1\u540D\u79F0] # \u67E5\u770B\u670D\u52A1\u7684\u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8\u670D\u52A1  </span>
/etc/init.d/sendmail start
<span class="token comment"># \u5173\u95ED\u670D\u52A1</span>
/etc/init.d/sendmail stop
<span class="token comment"># \u67E5\u770B\u670D\u52A1\u5F53\u524D\u72B6\u6001</span>
/etc/init.d/sendmail status
<span class="token comment"># \u542F\u52A8mysql\u540E\u53F0\u8FD0\u884C</span>
/date/mysql/bin/mysqld_safe <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token operator">&amp;</span>
<span class="token comment"># \u5F00\u673A\u542F\u52A8\u6267\u884C  \u53EF\u7528\u4E8E\u5F00\u673A\u542F\u52A8\u811A\u672C</span>
<span class="token function">vi</span> /etc/rc.d/rc.local
<span class="token comment"># \u5F00\u673A\u542F\u52A8\u548C\u5173\u673A\u5173\u95ED\u670D\u52A1\u8FDE\u63A5    # S\u5F00\u673Astart  K\u5173\u673Astop  55\u7EA7\u522B \u540E\u8DDF\u670D\u52A1\u540D</span>
/etc/rc.d/rc3.d/S55sshd
<span class="token comment"># \u5C06\u542F\u52A8\u7A0B\u5E8F\u811A\u672C\u8FDE\u63A5\u5230\u5F00\u673A\u542F\u52A8\u76EE\u5F55</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-f</span> /date/httpd/bin/apachectl /etc/rc.d/rc3.d/S15httpd
<span class="token comment"># lvs\u67E5\u770B\u540E\u7AEF\u8D1F\u8F7D\u673A\u5E76\u53D1</span>
ipvsadm <span class="token parameter variable">-ln</span>
<span class="token comment"># lvs\u6E05\u9664\u89C4\u5219</span>
ipvsadm <span class="token parameter variable">-C</span>
<span class="token comment"># \u67E5\u770Bxen\u865A\u62DF\u4E3B\u673A\u5217\u8868</span>
xm list
<span class="token comment"># \u865A\u62DF\u5316(xen\\kvm)\u7BA1\u7406\u5DE5\u5177  yum groupinstall Virtual*</span>
<span class="token function">virsh</span>
<span class="token comment"># \u67E5\u770Bhttpd\u52A0\u8F7D\u6A21\u5757</span>
./bin/httpd <span class="token parameter variable">-M</span>
<span class="token comment"># rpm\u5305httpd\u67E5\u770B\u52A0\u8F7D\u6A21\u5757</span>
httpd <span class="token parameter variable">-t</span> <span class="token parameter variable">-D</span> DUMP_MODULES
<span class="token comment"># \u53D1\u9001\u90AE\u4EF6</span>
<span class="token builtin class-name">echo</span> \u5185\u5BB9<span class="token operator">|</span> /bin/mail <span class="token parameter variable">-s</span> <span class="token string">&quot;\u6807\u9898&quot;</span> \u6536\u4EF6\u7BB1 -- <span class="token parameter variable">-f</span> \u53D1\u4EF6\u4EBA
<span class="token comment"># \u89E3\u51B3\u90AE\u4EF6\u4E71\u7801</span>
<span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5185\u5BB9&quot;</span><span class="token operator">|</span><span class="token function">iconv</span> <span class="token parameter variable">-f</span> utf8 <span class="token parameter variable">-t</span> gbk<span class="token variable">\`</span></span>&quot;</span> <span class="token operator">|</span> /bin/mail <span class="token parameter variable">-s</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;\u6807\u9898&quot;</span><span class="token operator">|</span><span class="token function">iconv</span> <span class="token parameter variable">-f</span> utf8 <span class="token parameter variable">-t</span> gbk<span class="token variable">\`</span></span>&quot;</span> \u6536\u4EF6\u7BB1
<span class="token comment"># \u68C0\u6D4Bnagios\u914D\u7F6E\u6587\u4EF6</span>
/usr/local/nagios/bin/nagios <span class="token parameter variable">-v</span> /usr/local/nagios/etc/nagios.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[i];function c(p,o){return n(),a("div",null,t)}const m=s(l,[["render",c],["__file","chkconfig.html.vue"]]);export{m as default};
