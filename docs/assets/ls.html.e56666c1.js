import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u5E38\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u53C2\u6570" aria-hidden="true">#</a> \u5E38\u7528\u53C2\u6570</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-a</span> \u663E\u793A\u6240\u6709\u6587\u4EF6\u53CA\u76EE\u5F55 <span class="token punctuation">(</span>ls\u5185\u5B9A\u5C06\u6587\u4EF6\u540D\u6216\u76EE\u5F55\u540D\u79F0\u5F00\u5934\u4E3A\u201D.\u201D\u7684\u89C6\u4E3A\u9690\u85CF\u6863\uFF0C\u4E0D\u4F1A\u5217\u51FA<span class="token punctuation">)</span>
<span class="token parameter variable">-l</span> \u9664\u6587\u4EF6\u540D\u79F0\u5916\uFF0C\u4EA6\u5C06\u6587\u4EF6\u578B\u6001\u3001\u6743\u9650\u3001\u62E5\u6709\u8005\u3001\u6587\u4EF6\u5927\u5C0F\u7B49\u8D44\u8BAF\u8BE6\u7EC6\u5217\u51FA
<span class="token parameter variable">-r</span> \u5C06\u6587\u4EF6\u4EE5\u76F8\u53CD\u6B21\u5E8F\u663E\u793A<span class="token punctuation">(</span>\u539F\u5B9A\u4F9D\u82F1\u6587\u5B57\u6BCD\u6B21\u5E8F<span class="token punctuation">)</span>
<span class="token parameter variable">-t</span> \u5C06\u6587\u4EF6\u4F9D\u5EFA\u7ACB\u65F6\u95F4\u4E4B\u5148\u540E\u6B21\u5E8F\u5217\u51FA
<span class="token parameter variable">-A</span> \u540C <span class="token parameter variable">-a</span> \uFF0C\u4F46\u4E0D\u5217\u51FA \u201C.\u201D <span class="token punctuation">(</span>\u76EE\u524D\u76EE\u5F55<span class="token punctuation">)</span> \u53CA \u201C<span class="token punctuation">..</span>\u201D <span class="token punctuation">(</span>\u7236\u76EE\u5F55<span class="token punctuation">)</span>
<span class="token parameter variable">-F</span> \u5728\u5217\u51FA\u7684\u6587\u4EF6\u540D\u79F0\u540E\u52A0\u4E00\u7B26\u53F7\uFF1B\u4F8B\u5982\u53EF\u6267\u884C\u6863\u5219\u52A0 \u201C*\u201D, \u76EE\u5F55\u5219\u52A0 \u201C/\u201D
<span class="token parameter variable">-R</span> \u82E5\u76EE\u5F55\u4E0B\u6709\u6587\u4EF6\uFF0C\u5219\u4EE5\u4E0B\u4E4B\u6587\u4EF6\u4EA6\u7686\u4F9D\u5E8F\u5217\u51FA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Displays everything in the target directory</span>
<span class="token comment">#\u663E\u793A\u76EE\u6807\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u5185\u5BB9</span>
<span class="token function">ls</span> path/to/the/target/directory

<span class="token comment"># Displays everything including hidden files</span>
<span class="token comment">#\u663E\u793A\u5305\u62EC\u9690\u85CF\u6587\u4EF6\u5728\u5185\u7684\u6240</span>
<span class="token function">ls</span> <span class="token parameter variable">-a</span>

<span class="token comment"># Displays all files, along with the size (with unit suffixes) and timestamp</span>
<span class="token comment">#\u663E\u793A\u6240\u6709\u6587\u4EF6\uFF0C\u4EE5\u53CA\u5927\u5C0F\uFF08\u5E26\u6709\u5355\u4F4D\u540E\u7F00\uFF09\u548C\u65F6\u95F4\u6233</span>
<span class="token function">ls</span> <span class="token parameter variable">-lh</span> 

<span class="token comment"># Display files, sorted by size</span>
<span class="token comment">#\u663E\u793A\u6587\u4EF6\uFF0C\u6309\u5927\u5C0F\u6392\u5E8F</span>
<span class="token function">ls</span> <span class="token parameter variable">-S</span>

<span class="token comment"># Display directories only</span>
<span class="token comment">#\u4EC5\u663E\u793A\u76EE\u5F55</span>
<span class="token function">ls</span> <span class="token parameter variable">-d</span> */

<span class="token comment"># Display directories only, include hidden</span>
<span class="token comment">#\u4EC5\u663E\u793A\u76EE\u5F55\uFF0C\u5305\u62EC\u9690\u85CF</span>
<span class="token function">ls</span> <span class="token parameter variable">-d</span> .*/ */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function c(p,r){return s(),a("div",null,t)}const o=n(i,[["render",c],["__file","ls.html.vue"]]);export{o as default};
