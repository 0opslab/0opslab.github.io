import{_ as n,o as a,c as s,e}from"./app.a667bd71.js";const t={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /usr/bin/git <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;install git&#39;</span><span class="token punctuation">;</span>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">git</span> <span class="token operator">&amp;&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token function">git</span> clone https://github.com/anbai-inc/Kibana_Hanization.git
<span class="token builtin class-name">cd</span> Kibana_Hanization
python main.py /usr/share/kibana

<span class="token comment">#\u91CD\u542Fkibana</span>
systemctl restart kibana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[i];function l(o,p){return a(),s("div",null,c)}const r=n(t,[["render",l],["__file","kibana.html.vue"]]);export{r as default};
