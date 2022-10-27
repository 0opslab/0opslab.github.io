import{_ as s,o as n,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Display process startup time</span>
<span class="token comment">#\u663E\u793A\u8FDB\u7A0B\u542F\u52A8\u65F6\u95F4</span>
systemd-analyze

<span class="token comment"># Display process startup time at service level</span>
<span class="token comment">#\u663E\u793A\u670D\u52A1\u7EA7\u522B\u7684\u8FDB\u7A0B\u542F\u52A8\u65F6\u95F4</span>
systemd-analyze blame

<span class="token comment"># List running units</span>
<span class="token comment">#\u5217\u51FA\u8FD0\u884C\u5355\u4F4D</span>
systemctl list-units

<span class="token comment"># Load a unit at startup</span>
<span class="token comment">#\u5728\u542F\u52A8\u65F6\u52A0\u8F7D\u4E00\u4E2A\u5355\u5143</span>
systemctl <span class="token builtin class-name">enable</span> foo.service

<span class="token comment"># Start or Stop a unit</span>
<span class="token comment">#\u542F\u52A8\u6216\u505C\u6B62\u88C5\u7F6E</span>
systemctl <span class="token operator">&lt;</span>start <span class="token operator">|</span> stop<span class="token operator">&gt;</span> foo.service

<span class="token comment"># Unit file locations</span>
<span class="token comment">#\u5355\u4F4D\u6587\u4EF6\u4F4D\u7F6E</span>
/etc/systemd/system
/usr/lib/systemd/system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> link</h3><p>http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html</p>`,3),t=[l];function c(d,m){return n(),e("div",null,t)}const r=s(i,[["render",c],["__file","systemd.html.vue"]]);export{r as default};
