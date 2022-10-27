import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Desc: </span>
<span class="token comment">#\u63CF\u8FF0\uFF1A</span>

<span class="token comment"># To activate a profile:</span>
<span class="token comment">#\u8981\u6FC0\u6D3B\u914D\u7F6E\u6587\u4EF6\uFF1A</span>
<span class="token function">sudo</span> aa-enforce usr.bin.firefox
<span class="token comment"># OR</span>
<span class="token comment">#\u8981\u4E48</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">_PROFILE_</span><span class="token operator">=</span><span class="token string">&#39;usr.bin.firefox&#39;</span> <span class="token function">sudo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">rm</span> /etc/apparmor.d/disable/$_PROFILE_ <span class="token punctuation">;</span> <span class="token function">cat</span> /etc/apparmor.d/$_PROFILE_ <span class="token operator">|</span> apparmor_parser <span class="token parameter variable">-a</span> <span class="token variable">)</span></span>

<span class="token comment"># TO disable a profile:</span>
<span class="token comment">#\u8981\u7981\u7528\u4E2A\u4EBA\u8D44\u6599\uFF1A</span>
<span class="token function">sudo</span> aa-disable usr.bin.firefox
<span class="token comment"># OR</span>
<span class="token comment">#\u8981\u4E48</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">_PROFILE_</span><span class="token operator">=</span><span class="token string">&#39;usr.bin.firefox&#39;</span> <span class="token function">sudo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ln</span> <span class="token parameter variable">-s</span> /etc/apparmor.d/$_PROFILE_ /etc/apparmor.d/disable/ <span class="token operator">&amp;&amp;</span> apparmor_parser <span class="token parameter variable">-R</span> /etc/apparmor.d/$_PROFILE_<span class="token variable">)</span></span>

<span class="token comment"># To list profiles loaded:</span>
<span class="token comment">#\u5217\u51FA\u52A0\u8F7D\u7684\u914D\u7F6E\u6587\u4EF6\uFF1A</span>
<span class="token function">sudo</span> aa-status
<span class="token comment"># OR</span>
<span class="token comment">#\u8981\u4E48</span>
<span class="token function">sudo</span> apparmor_status

<span class="token comment"># List of profiles aviables: /etc/apparmor.d/</span>
<span class="token comment">#\u914D\u7F6E\u6587\u4EF6\u5217\u8868aviables\uFF1A/etc/apparmor.d/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[l];function c(o,t){return n(),a("div",null,p)}const d=s(i,[["render",c],["__file","apparmor.html.vue"]]);export{d as default};
