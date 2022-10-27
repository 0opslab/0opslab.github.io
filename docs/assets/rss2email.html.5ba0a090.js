import{_ as e,o as s,c as n,e as a}from"./app.a667bd71.js";const i={},l=a(`<p>rss2email -- converts rss feeds and emails them to your inbox</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># List all feeds </span>
r2e list

<span class="token comment"># Convert RSS entries to email</span>
r2e run

<span class="token comment"># Add a new feed</span>
r2e <span class="token function">add</span> <span class="token operator">&lt;</span>feed address<span class="token operator">&gt;</span>

<span class="token comment"># Add a new feed with new email address</span>
r2e <span class="token function">add</span> <span class="token operator">&lt;</span>feed address<span class="token operator">&gt;</span> <span class="token punctuation">[</span>newemail address<span class="token punctuation">]</span>

<span class="token comment"># Delete a feed </span>
r2e delete <span class="token operator">&lt;</span><span class="token comment"># of feed in list/&gt;</span>

<span class="token comment"># Help</span>
r2e <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[l];function t(c,r){return s(),n("div",null,d)}const p=e(i,[["render",t],["__file","rss2email.html.vue"]]);export{p as default};
