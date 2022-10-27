import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<p>\u5728Systemd\u51FA\u73B0\u4E4B\u524D\uFF0CLinux\u7CFB\u7EDF\u53CA\u5404\u5E94\u7528\u7684\u65E5\u5FD7\u90FD\u662F\u5206\u522B\u7BA1\u7406\u7684\uFF0CSystemd\u5F00\u59CB\u7EDF\u4E00\u7BA1\u7406\u4E86\u6240\u6709Unit\u7684\u542F\u52A8\u65E5\u5FD7\uFF0C \u8FD9\u6837\u5E26\u6765\u7684\u597D\u5904\u5C31\u662F\u53EF\u4EE5\u53EA\u7528\u4E00\u4E2A journalctl\u547D\u4EE4\uFF0C\u67E5\u770B\u6240\u6709\u5185\u6838\u548C\u5E94\u7528\u7684\u65E5\u5FD7\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Actively follow log (like tail -f)</span>
<span class="token comment"># \u79EF\u6781\u5173\u6CE8\u65E5\u5FD7</span>
journalctl <span class="token parameter variable">-f</span>

<span class="token comment"># Display all errors since last boot</span>
<span class="token comment"># \u663E\u793A\u4E0A\u6B21\u542F\u52A8\u540E\u7684\u6240\u6709\u9519\u8BEF</span>
journalctl <span class="token parameter variable">-b</span> <span class="token parameter variable">-p</span> err

<span class="token comment"># Filter by time period</span>
<span class="token comment"># \u6309\u65F6\u95F4\u6BB5\u8FC7\u6EE4</span>
journalctl <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token number">2012</span>-10-15 <span class="token parameter variable">--until</span><span class="token operator">=</span><span class="token string">&quot;2011-10-16 23:59:59&quot;</span>
 
<span class="token comment"># Show list of systemd units logged in journal</span>
<span class="token comment">#\u663E\u793A\u65E5\u5FD7\u4E2D\u8BB0\u5F55\u7684systemd\u5355\u5143\u5217\u8868</span>
journalctl <span class="token parameter variable">-F</span> _SYSTEMD_UNIT

<span class="token comment"># Filter by specific unit</span>
<span class="token comment"># \u6309\u7279\u5B9A\u5355\u4F4D\u8FC7\u6EE4</span>
journalctl <span class="token parameter variable">-u</span> dbus

<span class="token comment"># Filter by executable name</span>
<span class="token comment"># \u6309\u53EF\u6267\u884C\u540D\u79F0\u8FC7\u6EE4</span>
journalctl /usr/bin/dbus-daemon

<span class="token comment"># Filter by PID</span>
<span class="token comment"># \u6309\u7167PID\u8FC7\u6765</span>
journalctl <span class="token assign-left variable">_PID</span><span class="token operator">=</span><span class="token number">123</span>

<span class="token comment"># Filter by Command, e.g., sshd</span>
\u6309\u547D\u4EE4\u8FC7\u6EE4\uFF0C\u4F8B\u5982sshd
journalctl <span class="token assign-left variable">_COMM</span><span class="token operator">=</span>sshd

<span class="token comment"># Filter by Command and time period</span>
<span class="token comment"># \u6309\u547D\u4EE4\u548C\u65F6\u95F4\u6BB5\u8FC7\u6EE4</span>
journalctl <span class="token assign-left variable">_COMM</span><span class="token operator">=</span>crond <span class="token parameter variable">--since</span> <span class="token string">&#39;10:00&#39;</span> <span class="token parameter variable">--until</span> <span class="token string">&#39;11:00&#39;</span>

<span class="token comment"># List all available boots </span>
<span class="token comment"># \u5217\u51FA\u6240\u6709\u53EF\u7528\u7684boots</span>
journalctl --list-boots

<span class="token comment"># Filter by specific User ID e.g., user id 1000 </span>
<span class="token comment"># \u6309\u7279\u5B9A\u7528\u6237ID\u8FC7\u6EE4\uFF0C\u4F8B\u5982\u7528\u6237ID 1000</span>
journalctl <span class="token assign-left variable">_UID</span><span class="token operator">=</span><span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[i];function t(r,o){return s(),a("div",null,c)}const d=n(l,[["render",t],["__file","journalctl.html.vue"]]);export{d as default};
