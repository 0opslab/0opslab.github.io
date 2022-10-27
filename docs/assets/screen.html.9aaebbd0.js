import{_ as s,o as n,c as e,e as a}from"./app.a667bd71.js";const r={},i=a(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-A</span> \u3000\u5C06\u6240\u6709\u7684\u89C6\u7A97\u90FD\u8C03\u6574\u4E3A\u76EE\u524D\u7EC8\u7AEF\u673A\u7684\u5927\u5C0F\u3002
-d<span class="token operator">&lt;</span>\u4F5C\u4E1A\u540D\u79F0<span class="token operator">&gt;</span> \u3000\u5C06\u6307\u5B9A\u7684screen\u4F5C\u4E1A\u79BB\u7EBF\u3002
-h<span class="token operator">&lt;</span>\u884C\u6570<span class="token operator">&gt;</span> \u3000\u6307\u5B9A\u89C6\u7A97\u7684\u7F13\u51B2\u533A\u884C\u6570\u3002
<span class="token parameter variable">-m</span> \u3000\u5373\u4F7F\u76EE\u524D\u5DF2\u5728\u4F5C\u4E1A\u4E2D\u7684screen\u4F5C\u4E1A\uFF0C\u4ECD\u5F3A\u5236\u5EFA\u7ACB\u65B0\u7684screen\u4F5C\u4E1A\u3002
-r<span class="token operator">&lt;</span>\u4F5C\u4E1A\u540D\u79F0<span class="token operator">&gt;</span> \u3000\u6062\u590D\u79BB\u7EBF\u7684screen\u4F5C\u4E1A\u3002
<span class="token parameter variable">-R</span> \u3000\u5148\u8BD5\u56FE\u6062\u590D\u79BB\u7EBF\u7684\u4F5C\u4E1A\u3002\u82E5\u627E\u4E0D\u5230\u79BB\u7EBF\u7684\u4F5C\u4E1A\uFF0C\u5373\u5EFA\u7ACB\u65B0\u7684screen\u4F5C\u4E1A\u3002
-s<span class="token operator">&lt;</span>shell<span class="token operator">&gt;</span> \u3000\u6307\u5B9A\u5EFA\u7ACB\u65B0\u89C6\u7A97\u65F6\uFF0C\u6240\u8981\u6267\u884C\u7684shell\u3002
-S<span class="token operator">&lt;</span>\u4F5C\u4E1A\u540D\u79F0<span class="token operator">&gt;</span> \u3000\u6307\u5B9Ascreen\u4F5C\u4E1A\u7684\u540D\u79F0\u3002
<span class="token parameter variable">-v</span> \u3000\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
<span class="token parameter variable">-x</span> \u3000\u6062\u590D\u4E4B\u524D\u79BB\u7EBF\u7684screen\u4F5C\u4E1A\u3002
-ls\u6216\u2013list \u3000\u663E\u793A\u76EE\u524D\u6240\u6709\u7684screen\u4F5C\u4E1A\u3002
<span class="token parameter variable">-wipe</span> \u3000\u68C0\u67E5\u76EE\u524D\u6240\u6709\u7684screen\u4F5C\u4E1A\uFF0C\u5E76\u5220\u9664\u5DF2\u7ECF\u65E0\u6CD5\u4F7F\u7528\u7684screen\u4F5C\u4E1A\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Start a new named screen session:</span>
<span class="token comment">#\u542F\u52A8\u4E00\u4E2A\u65B0\u7684\u547D\u540D\u5C4F\u5E55\u4F1A\u8BDD\uFF1A</span>
<span class="token function">screen</span> <span class="token parameter variable">-S</span> session_name

<span class="token comment"># Detach from the current session:</span>
<span class="token comment">#\u4ECE\u5F53\u524D\u4F1A\u8BDD\u4E2D\u5206\u79BB\uFF1A</span>
Press Ctrl+A <span class="token keyword">then</span> press d

<span class="token comment"># Re-attach a detached session:</span>
<span class="token comment">#\u91CD\u65B0\u9644\u52A0\u5206\u79BB\u7684\u4F1A\u8BDD\uFF1A</span>
<span class="token function">screen</span> <span class="token parameter variable">-r</span> session_name

<span class="token comment"># List all screen sessions:</span>
<span class="token comment">#\u5217\u51FA\u6240\u6709\u5C4F\u5E55\u4F1A\u8BDD\uFF1A</span>
<span class="token function">screen</span> <span class="token parameter variable">-ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[i];function c(t,d){return n(),e("div",null,l)}const p=s(r,[["render",c],["__file","screen.html.vue"]]);export{p as default};
