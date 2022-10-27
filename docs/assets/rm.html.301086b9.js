import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Remove files and subdirs</span>
<span class="token comment">#\u5220\u9664\u6587\u4EF6\u548C\u5B50\u76EE\u5F55</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> path/to/the/target/

<span class="token comment"># Ignore non existent files</span>
<span class="token comment">#\u5FFD\u7565\u4E0D\u5B58\u5728\u7684\u6587\u4EF6</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> path/to/the/target

<span class="token comment"># Remove a file with his inode</span>
<span class="token comment">#\u4F7F\u7528\u4ED6\u7684inode\u5220\u9664\u6587\u4EF6</span>
<span class="token function">find</span> /tmp/ <span class="token parameter variable">-inum</span> <span class="token number">6666</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;{}&#39;</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[i];function l(o,r){return s(),a("div",null,c)}const m=n(t,[["render",l],["__file","rm.html.vue"]]);export{m as default};
