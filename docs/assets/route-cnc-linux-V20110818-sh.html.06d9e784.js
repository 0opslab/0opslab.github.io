import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const c={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh </span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:route gateway of cnc</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token builtin class-name">read</span> cncgw 
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;add or del: &quot;</span>
<span class="token builtin class-name">read</span> option
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$option</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;del&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
route <span class="token variable">$option</span> <span class="token parameter variable">-net</span> <span class="token number">1.24</span>.0.0/13 gw <span class="token variable">$cncgw</span> metric <span class="token number">1</span>
route <span class="token variable">$option</span> <span class="token parameter variable">-net</span> <span class="token number">223.27</span>.184.0/22 gw <span class="token variable">$cncgw</span> metric <span class="token number">1</span><span class="token string">&quot; &gt; /etc/linux_cnc_route.sh ; chmod 755 /etc/linux_cnc_route.sh

if [ -f /etc/rc.d/rc.local ]; then
sed  &#39;/exit 0/d&#39; /etc/rc.d/rc.local &gt; /etc/rc.d/rc.local.a ; mv -f /etc/rc.d/rc.local.a /etc/rc.d/rc.local ; chmod 755 /etc/rc.d/rc.local
echo &quot;</span>/etc/linux_cnc_route.sh<span class="token string">&quot; &gt;&gt; /etc/rc.d/rc.local
/etc/linux_cnc_route.sh
else
sed  &#39;/exit 0/d&#39; /etc/rc.local &gt; /etc/rc.local.a ; mv -f /etc/rc.local.a /etc/rc.local ; chmod 755 /etc/rc.local
echo &quot;</span>/etc/linux_cnc_route.sh<span class="token string">&quot; &gt;&gt; /etc/rc.local
/etc/linux_cnc_route.sh
fi

else
echo &quot;</span>Unknown operation.Enter <span class="token function">add</span> or del.<span class="token string">&quot;
exit 1
fi

echo &quot;</span>Operation is completed<span class="token operator">!</span>&quot;
<span class="token builtin class-name">exit</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function t(o,r){return s(),e("div",null,i)}const p=n(c,[["render",t],["__file","route-cnc-linux-V20110818-sh.html.vue"]]);export{p as default};
