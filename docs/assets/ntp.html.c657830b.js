import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Verify ntpd running:</span>
<span class="token comment">#\u9A8C\u8BC1ntpd\u8FD0\u884C\uFF1A</span>
<span class="token function">service</span> ntp status

<span class="token comment"># Start ntpd if not running:</span>
<span class="token comment">#\u5982\u679C\u6CA1\u6709\u8FD0\u884C\uFF0C\u542F\u52A8ntpd\uFF1A</span>
<span class="token function">service</span> ntp start

<span class="token comment"># Display current hardware clock value:</span>
<span class="token comment">#\u663E\u793A\u5F53\u524D\u786C\u4EF6\u65F6\u949F\u503C\uFF1A</span>
<span class="token function">sudo</span> hwclock <span class="token parameter variable">-r</span>

<span class="token comment"># Apply system time to hardware time:</span>
<span class="token comment">#\u5C06\u7CFB\u7EDF\u65F6\u95F4\u5E94\u7528\u4E8E\u786C\u4EF6\u65F6\u95F4\uFF1A</span>
<span class="token function">sudo</span> hwclock <span class="token parameter variable">--systohc</span>

<span class="token comment"># Apply hardware time to system time:</span>
<span class="token comment">#\u5C06\u786C\u4EF6\u65F6\u95F4\u5E94\u7528\u4E8E\u7CFB\u7EDF\u65F6\u95F4\uFF1A</span>
<span class="token function">sudo</span> hwclock <span class="token parameter variable">--hctosys</span>

<span class="token comment"># Set hwclock to local time:</span>
<span class="token comment">#\u5C06hwclock\u8BBE\u7F6E\u4E3A\u5F53\u5730\u65F6\u95F4\uFF1A</span>
<span class="token function">sudo</span> hwclock <span class="token parameter variable">--localtime</span>

<span class="token comment"># Set hwclock to UTC:</span>
<span class="token comment">#\u5C06hwclock\u8BBE\u7F6E\u4E3AUTC\uFF1A</span>
<span class="token function">sudo</span> hwclock <span class="token parameter variable">--utc</span>

<span class="token comment"># Set hwclock manually:</span>
<span class="token comment">#\u624B\u52A8\u8BBE\u7F6Ehwclock\uFF1A</span>
<span class="token function">sudo</span> hwclock <span class="token parameter variable">--set</span> <span class="token parameter variable">--date</span><span class="token operator">=</span><span class="token string">&quot;8/10/15 13:10:05&quot;</span>

<span class="token comment"># Query surrounding stratum time servers</span>
<span class="token comment">#\u67E5\u8BE2\u5468\u56F4\u7684\u5C42\u65F6\u95F4\u670D\u52A1\u5668</span>
ntpq <span class="token parameter variable">-pn</span>

<span class="token comment"># Config file:</span>
<span class="token comment">#\u914D\u7F6E\u6587\u4EF6\uFF1A</span>
/etc/ntp.conf

<span class="token comment"># Driftfile:</span>
<span class="token comment">#\u64CD\u4F5C\u6587\u4EF6\uFF1A</span>
location of <span class="token string">&quot;drift&quot;</span> of your system clock compared to ntp servers
/var/lib/ntp/ntp.drift
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(o,d){return s(),e("div",null,c)}const m=n(i,[["render",t],["__file","ntp.html.vue"]]);export{m as default};
