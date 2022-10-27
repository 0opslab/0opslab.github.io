import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const c={},o=e(`<p>crond \u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u4F1A\u4ECE\u4EE5\u4E0B\u51E0\u4E2A\u8DEF\u5F84\u8BFB\u53D6\uFF1A</p><p>/var/spool/cron/ , \u7531crontab -e \u8FDB\u884C\u5199\u5165\uFF0C\u914D\u7F6E\u6587\u4EF6\u65E0\u9700\u6307\u5B9A\u7528\u6237 /etc/crontab \uFF0C\u53EA\u80FDroot \u8FDB\u884C\u7F16\u8F91\uFF0C\u914D\u7F6E\u6587\u4EF6\u9700\u6307\u5B9A\u7528\u6237 /etc/cron.d/ ,\u5728\u6B64\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u5B9A\u65F6\u4EFB\u52A1\u6587\u4EF6\uFF0C\u914D\u7F6E\u6587\u4EF6\u9700\u6307\u5B9A\u7528\u6237 /etc/cron.*</p><p>\u65E5\u5FD7 \u4E00\u822C\u6765\u8BF4 \uFF0Ccrontab\u7684\u8FD0\u884C\u65E5\u5FD7\u53EF\u4EE5\u5728/var/log/cron.log\u6587\u4EF6\u4E2D\u3002\u5982\u679C\u6CA1\u6709/var/log/cron.log\u6587\u4EF6\uFF0C\u8BD5\u4E00\u4E0B/var/log/cron</p><p>\u25A0 \u76F8\u5173\u7684\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ at
$ batch
$ <span class="token function">crontab</span>
$ <span class="token function">bg</span>
$ <span class="token function">fg</span>
$ <span class="token function">jobs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-l</span>
<span class="token function">ls</span> <span class="token parameter variable">-alh</span> /var/spool/cron
<span class="token function">ls</span> <span class="token parameter variable">-al</span> /etc/ <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">cron</span>
<span class="token function">ls</span> <span class="token parameter variable">-al</span> /etc/cron*
<span class="token function">cat</span> /etc/cron*
<span class="token function">cat</span> /etc/at.allow
<span class="token function">cat</span> /etc/at.deny
<span class="token function">cat</span> /etc/cron.allow
<span class="token function">cat</span> /etc/cron.deny
<span class="token function">cat</span> /etc/crontab
<span class="token function">cat</span> /etc/anacrontab
<span class="token function">cat</span> /var/spool/cron/crontabs/root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u25A0 crontab\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u627E\u4E0D\u5230\u65E5\u5FD7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/rsyslog.d/50-default.conf
cron.*  /var/log/cron.log <span class="token comment">#\u5C06cron\u524D\u9762\u7684\u6CE8\u91CA\u7B26\u53BB\u6389</span>
<span class="token comment">#\u91CD\u542Frsyslog</span>
<span class="token comment">#sudo /etc/init.d/rsyslog restart</span>
<span class="token function">sudo</span> <span class="token function">service</span> rsyslog restart   <span class="token comment">#\u91CD\u542Frsyslog</span>
<span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">cron</span> restart     <span class="token comment">#\u91CD\u542Fcron\u7A0B\u5EA6</span>
 
<span class="token function">sudo</span> <span class="token function">service</span> crond restart   <span class="token comment">#\u91CD\u542Fcrond\u3002 \u5728\u6709\u7684\u7CFB\u7EDF\u4E2D\uFF0C\u5B9A\u65F6\u4EFB\u52A1\u7A0B\u5E8F\u540D\u79F0\u662Fcrond</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[o];function t(i,r){return s(),a("div",null,l)}const d=n(c,[["render",t],["__file","linux-cron-task.html.vue"]]);export{d as default};
