import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const c={},i=a(`<p>\u8BED\u6CD5 chown [-cfhvR] [--help] [--version] user[:group] file... \u53C2\u6570 :</p><p>user : \u65B0\u7684\u6587\u4EF6\u62E5\u6709\u8005\u7684\u4F7F\u7528\u8005 ID group : \u65B0\u7684\u6587\u4EF6\u62E5\u6709\u8005\u7684\u4F7F\u7528\u8005\u7EC4(group) -c : \u663E\u793A\u66F4\u6539\u7684\u90E8\u5206\u7684\u4FE1\u606F -f : \u5FFD\u7565\u9519\u8BEF\u4FE1\u606F -h :\u4FEE\u590D\u7B26\u53F7\u94FE\u63A5 -v : \u663E\u793A\u8BE6\u7EC6\u7684\u5904\u7406\u4FE1\u606F -R : \u5904\u7406\u6307\u5B9A\u76EE\u5F55\u4EE5\u53CA\u5176\u5B50\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6 --help : \u663E\u793A\u8F85\u52A9\u8BF4\u660E --version : \u663E\u793A\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Change file owner</span>
<span class="token comment">#\u66F4\u6539\u6587\u4EF6\u6240\u6709\u8005</span>
<span class="token function">chown</span> user <span class="token function">file</span>

<span class="token comment"># Change file owner and group</span>
<span class="token comment">#\u66F4\u6539\u6587\u4EF6\u6240\u6709\u8005\u548C\u7EC4</span>
<span class="token function">chown</span> user:group <span class="token function">file</span>

<span class="token comment"># Change owner recursively</span>
<span class="token comment">#\u9012\u5F52\u66F4\u6539\u6240\u6709\u8005</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> user directory

<span class="token comment"># Change ownership to match another file</span>
<span class="token comment">#\u66F4\u6539\u6240\u6709\u6743\u4EE5\u5339\u914D\u53E6\u4E00\u4E2A\u6587\u4EF6</span>
<span class="token function">chown</span> <span class="token parameter variable">--reference</span><span class="token operator">=</span>/path/to/ref_file <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[i];function o(r,t){return s(),e("div",null,l)}const d=n(c,[["render",o],["__file","chown.html.vue"]]);export{d as default};
