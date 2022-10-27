import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5386\u65F6\u547D\u4EE4\u9ED8\u8BA41000\u6761</span>
<span class="token function">history</span>
<span class="token comment"># \u8BA9history\u547D\u4EE4\u663E\u793A\u5177\u4F53\u65F6\u95F4</span>
<span class="token assign-left variable">HISTTIMEFORMAT</span><span class="token operator">=</span><span class="token string">&quot;%Y-%m-%d %H:%M:%S &quot;</span>
<span class="token comment"># \u6E05\u9664\u8BB0\u5F55\u547D\u4EE4</span>
<span class="token function">history</span>  <span class="token parameter variable">-c</span>
<span class="token comment"># \u5386\u53F2\u547D\u4EE4\u8BB0\u5F55\u6587\u4EF6</span>
<span class="token function">cat</span> <span class="token environment constant">$HOME</span>/.bash_history
<span class="token comment"># \u67E5\u770B\u767B\u9646\u8FC7\u7684\u7528\u6237\u4FE1\u606F</span>
last
<span class="token comment"># \u67E5\u770B\u767B\u9646\u8FC7\u7684\u7528\u6237\u4FE1\u606F</span>
<span class="token function">who</span> /var/log/wtmp
<span class="token comment"># \u7528\u6237\u6700\u540E\u767B\u5F55\u7684\u65F6\u95F4</span>
lastlog
<span class="token comment"># \u5217\u51FA\u767B\u5F55\u7CFB\u7EDF\u5931\u8D25\u7684\u7528\u6237\u76F8\u5173\u4FE1\u606F</span>
lastb <span class="token parameter variable">-a</span>
<span class="token comment"># \u767B\u5F55\u5931\u8D25\u4E8C\u8FDB\u5236\u65E5\u5FD7\u8BB0\u5F55\u6587\u4EF6</span>
/var/log/btmp
<span class="token comment"># \u7CFB\u7EDF\u65E5\u5FD7</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/messages
<span class="token comment"># ssh\u65E5\u5FD7</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/secure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[i];function t(o,r){return s(),a("div",null,c)}const m=n(l,[["render",t],["__file","log.html.vue"]]);export{m as default};
