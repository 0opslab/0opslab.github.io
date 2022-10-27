import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},c=e(`<div class="custom-container tip"><p class="custom-container-title">\u7CFB\u7EDF</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>wall        \u3000  \u3000          <span class="token comment"># \u7ED9\u5176\u5B83\u7528\u6237\u53D1\u6D88\u606F</span>
<span class="token function">whereis</span> <span class="token function">ls</span>                  <span class="token comment"># \u67E5\u627E\u547D\u4EE4\u7684\u76EE\u5F55</span>
<span class="token function">which</span>                       <span class="token comment"># \u67E5\u770B\u5F53\u524D\u8981\u6267\u884C\u7684\u547D\u4EE4\u6240\u5728\u7684\u8DEF\u5F84</span>
<span class="token function">clear</span>                       <span class="token comment"># \u6E05\u7A7A\u6574\u4E2A\u5C4F\u5E55</span>
reset                       <span class="token comment"># \u91CD\u65B0\u521D\u59CB\u5316\u5C4F\u5E55</span>
<span class="token function">cal</span>                         <span class="token comment"># \u663E\u793A\u6708\u5386</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token number">123456</span> <span class="token operator">|</span> md5sum     <span class="token comment"># md5\u52A0\u5BC6</span>
mkpasswd                    <span class="token comment"># \u968F\u673A\u751F\u6210\u5BC6\u7801   -l\u4F4D\u6570 -C\u5927\u5C0F -c\u5C0F\u5199 -d\u6570\u5B57 -s\u7279\u6B8A\u5B57\u7B26</span>
<span class="token function">netstat</span> <span class="token parameter variable">-anlp</span> <span class="token operator">|</span> <span class="token function">grep</span> port   <span class="token comment"># \u662F\u5426\u6253\u5F00\u4E86\u67D0\u4E2A\u7AEF\u53E3</span>
ntpdate stdtime.gov.hk      <span class="token comment"># \u540C\u6B65\u65F6\u95F4</span>
<span class="token comment"># \u9009\u62E9\u65F6\u533A #+8=(5 9 1 1) # (TZ=&#39;Asia/Shanghai&#39;; export TZ)\u62EC\u53F7\u5185\u5199\u5165 /etc/profile</span>
tzselect                    
/sbin/hwclock <span class="token parameter variable">-w</span>            <span class="token comment"># \u4FDD\u5B58\u5230\u786C\u4EF6</span>
/etc/shadow                 <span class="token comment"># \u8D26\u6237\u5F71\u5B50\u6587\u4EF6</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en                     <span class="token comment"># \u4FEE\u6539\u8BED\u8A00</span>
<span class="token function">vim</span> /etc/sysconfig/i18n     <span class="token comment"># \u4FEE\u6539\u7F16\u7801  LANG=&quot;en_US.UTF-8&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>C             <span class="token comment"># \u5F3A\u5236\u5B57\u7B26\u96C6</span>
<span class="token function">vi</span> /etc/hosts               <span class="token comment"># \u67E5\u8BE2\u9759\u6001\u4E3B\u673A\u540D</span>
<span class="token builtin class-name">alias</span>                       <span class="token comment"># \u522B\u540D</span>
<span class="token function">watch</span> <span class="token function">uptime</span>                <span class="token comment"># \u76D1\u6D4B\u547D\u4EE4\u52A8\u6001\u5237\u65B0</span>
ipcs <span class="token parameter variable">-a</span>                     <span class="token comment"># \u67E5\u770BLinux\u7CFB\u7EDF\u5F53\u524D\u5355\u4E2A\u5171\u4EAB\u5185\u5B58\u6BB5\u7684\u6700\u5927\u503C</span>
<span class="token function">lsof</span> <span class="token operator">|</span><span class="token function">grep</span> /lib             <span class="token comment"># \u67E5\u770B\u52A0\u8F7D\u5E93\u6587\u4EF6</span>
ldconfig                    <span class="token comment"># \u52A8\u6001\u94FE\u63A5\u5E93\u7BA1\u7406\u547D\u4EE4</span>
dist-upgrade                <span class="token comment"># \u4F1A\u6539\u53D8\u914D\u7F6E\u6587\u4EF6,\u6539\u53D8\u65E7\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u6539\u53D8\u7CFB\u7EDF\u7248\u672C </span>
/boot/grub/grub.conf        <span class="token comment"># grub\u542F\u52A8\u9879\u914D\u7F6E</span>
<span class="token comment"># \u4FEE\u6539\u5185\u6838\u53C2\u6570/etc/sysctl.conf\uFF0C\u8BA9/etc/rc.d/rc.sysinit\u8BFB\u53D6\u751F\u6548</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span>                   
mkpasswd <span class="token parameter variable">-l</span> <span class="token number">8</span>  <span class="token parameter variable">-C</span> <span class="token number">2</span> <span class="token parameter variable">-c</span> <span class="token number">2</span> <span class="token parameter variable">-d</span> <span class="token number">4</span> <span class="token parameter variable">-s</span> <span class="token number">0</span>            <span class="token comment"># \u968F\u673A\u751F\u6210\u6307\u5B9A\u7C7B\u578B\u5BC6\u7801</span>
<span class="token comment"># \u4F7FTCP SYN Cookie \u4FDD\u62A4\u751F\u6548  # &quot;SYN Attack&quot;\u662F\u4E00\u79CD\u62D2\u7EDD\u670D\u52A1\u7684\u653B\u51FB\u65B9\u5F0F</span>
<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv4/tcp_syncookies    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u7CFB\u7EDF\u7BA1\u7F51\u7EDC\u64CD\u4F5C\u547D\u4EE4\u7406</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ifconfig</span>
$ <span class="token function">ip</span>
$ <span class="token function">ping</span>
$ telnet
$ <span class="token function">ftp</span>
$ route
$ <span class="token function">ssh</span>
$ mail
$ <span class="token function">dig</span>
$ <span class="token function">nslookup</span>
$ <span class="token function">netstat</span>
$ <span class="token function">ifup</span>
$ <span class="token function">ifdown</span>
$ dhclient
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u65E5\u5FD7</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>syslog<span class="token punctuation">(</span>/etc/syslog.conf<span class="token operator">|</span>/etc/rsyslog.conf<span class="token punctuation">)</span>
/var/log/
lastlog		\u68C0\u67E5\u4E0A\u6B21\u67D0\u4E2A\u7279\u5B9A\u7528\u6237\u767B\u5F55\u4FE1\u606F
last 		\u641C\u7D22/var/log/wtmp\u663E\u793A\u81EA\u6587\u4EF6\u521B\u5EFA\u4EE5\u6765\u767B\u5F55\u8FC7\u7684\u7528\u6237
lastb		\u641C\u7D22/var/log/btmp\u6765\u663E\u793A\u767B\u5F55\u672A\u6210\u529F\u7684\u4FE1\u606F
<span class="token function">who</span>			\u641C\u7D22/var/wtmp\u663E\u793A\u5F53\u524D\u767B\u5F55\u7684\u7528\u6237
<span class="token function">logrotate</span>	\u7528\u4E8E\u914D\u7F6E\u6EDA\u52A8\u65E5\u5FD7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[c];function l(o,p){return s(),a("div",null,t)}const m=n(i,[["render",l],["__file","index.html.vue"]]);export{m as default};
