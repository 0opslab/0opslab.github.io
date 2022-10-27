import{_ as n,o as e,c as s,e as a}from"./app.a667bd71.js";const i={},o=a(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-i: \u82E5\u6307\u5B9A\u76EE\u5F55\u5DF2\u6709\u540C\u540D\u6587\u4EF6\uFF0C\u5219\u5148\u8BE2\u95EE\u662F\u5426\u8986\u76D6\u65E7\u6587\u4EF6<span class="token punctuation">;</span>
-f: \u5728mv\u64CD\u4F5C\u8981\u8986\u76D6\u67D0\u5DF2\u6709\u7684\u76EE\u6807\u6587\u4EF6\u65F6\u4E0D\u7ED9\u4EFB\u4F55\u6307\u793A<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Move a file from one place to another</span>
<span class="token comment">#\u5C06\u6587\u4EF6\u4ECE\u4E00\u4E2A\u4F4D\u7F6E\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E</span>
<span class="token function">mv</span> ~/Desktop/foo.txt ~/Documents/foo.txt

<span class="token comment"># Move a file from one place to another and automatically overwrite if the destination file exists</span>
<span class="token comment">#\u5C06\u6587\u4EF6\u4ECE\u4E00\u4E2A\u4F4D\u7F6E\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u5E76\u5728\u76EE\u6807\u6587\u4EF6\u5B58\u5728\u65F6\u81EA\u52A8\u8986\u76D6</span>
<span class="token comment"># (This will override any previous -i or -n args)</span>
<span class="token comment">#\uFF08\u8FD9\u5C06\u8986\u76D6\u4EFB\u4F55\u5148\u524D\u7684-i\u6216-n args\uFF09</span>
<span class="token function">mv</span> <span class="token parameter variable">-f</span> ~/Desktop/foo.txt ~/Documents/foo.txt

<span class="token comment"># Move a file from one place to another but ask before overwriting an existing file</span>
<span class="token comment">#\u5C06\u6587\u4EF6\u4ECE\u4E00\u4E2A\u4F4D\u7F6E\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u4F46\u5728\u8986\u76D6\u73B0\u6709\u6587\u4EF6\u4E4B\u524D\u8BE2\u95EE</span>
<span class="token comment"># (This will override any previous -f or -n args)</span>
<span class="token comment">#\uFF08\u8FD9\u5C06\u8986\u76D6\u4EE5\u524D\u7684-f\u6216-n args\uFF09</span>
<span class="token function">mv</span> <span class="token parameter variable">-i</span> ~/Desktop/foo.txt ~/Documents/foo.txt

<span class="token comment"># Move a file from one place to another but never overwrite anything</span>
<span class="token comment">#\u5C06\u6587\u4EF6\u4ECE\u4E00\u4E2A\u4F4D\u7F6E\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u4F4D\u7F6E\u4F46\u4ECE\u4E0D\u8986\u76D6\u4EFB\u4F55\u5185\u5BB9</span>
<span class="token comment"># (This will override any previous -f or -i args)</span>
<span class="token comment">#\uFF08\u8FD9\u5C06\u8986\u76D6\u4EE5\u524D\u7684-f\u6216-i args\uFF09</span>
<span class="token function">mv</span> <span class="token parameter variable">-n</span> ~/Desktop/foo.txt ~/Documents/foo.txt

<span class="token comment"># Move listed files to a directory</span>
<span class="token comment">#\u5C06\u5217\u51FA\u7684\u6587\u4EF6\u79FB\u52A8\u5230\u76EE\u5F55</span>
<span class="token function">mv</span> <span class="token parameter variable">-t</span> ~/Desktop/ file1 file2 file3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[o];function l(c,r){return e(),s("div",null,t)}const m=n(i,[["render",l],["__file","mv.html.vue"]]);export{m as default};
