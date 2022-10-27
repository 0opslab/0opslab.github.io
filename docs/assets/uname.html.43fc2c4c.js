import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-a\u6216\u2013all \u3000\u663E\u793A\u5168\u90E8\u7684\u4FE1\u606F\u3002
-m\u6216\u2013machine \u3000\u663E\u793A\u7535\u8111\u7C7B\u578B\u3002
-n\u6216-nodename \u3000\u663E\u793A\u5728\u7F51\u7EDC\u4E0A\u7684\u4E3B\u673A\u540D\u79F0\u3002
-r\u6216\u2013release \u3000\u663E\u793A\u64CD\u4F5C\u7CFB\u7EDF\u7684\u53D1\u884C\u7F16\u53F7\u3002
-s\u6216\u2013sysname \u3000\u663E\u793A\u64CD\u4F5C\u7CFB\u7EDF\u540D\u79F0\u3002
<span class="token parameter variable">-v</span> \u3000\u663E\u793A\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7248\u672C\u3002
\u2013help \u3000\u663E\u793A\u5E2E\u52A9\u3002
\u2013version \u3000\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Print all system information</span>
<span class="token comment">#\u6253\u5370\u6240\u6709\u7CFB\u7EDF\u4FE1\u606F</span>
<span class="token function">uname</span> <span class="token parameter variable">-a</span>
<span class="token comment"># Linux system-hostname 3.2.0-4-amd64 #1 SMP Debian 3.2.32-1 x86_64 GNU/Linux</span>
<span class="token comment">#Linux system-hostname 3.2.0-4-amd64\uFF031 SMP Debian 3.2.32-1 x86_64 GNU / Linux</span>

<span class="token comment"># Print the hostname</span>
<span class="token comment">#\u6253\u5370\u4E3B\u673A\u540D</span>
<span class="token function">uname</span> <span class="token parameter variable">-n</span>
<span class="token comment"># system-hostname</span>
<span class="token comment">#\u7CFB\u7EDF\u4E3B\u673A\u540D</span>

<span class="token comment"># Print the kernel release</span>
<span class="token comment">#\u6253\u5370\u5185\u6838\u7248\u672C</span>
<span class="token function">uname</span> <span class="token parameter variable">-r</span>
<span class="token comment"># 3.2.0-4-amd64</span>
<span class="token comment">#3.2.0-4-AMD64</span>

<span class="token comment"># Print the kernel version, with more specific information</span>
<span class="token comment">#\u6253\u5370\u5185\u6838\u7248\u672C\uFF0C\u4EE5\u53CA\u66F4\u5177\u4F53\u7684\u4FE1\u606F</span>
<span class="token function">uname</span> <span class="token parameter variable">-v</span>
<span class="token comment"># #1 SMP Debian 3.2.32-1</span>
<span class="token comment">#\uFF031 Debian Middle School\uFF033.2.32-1</span>

<span class="token comment"># Print the hardware instruction set</span>
<span class="token comment">#\u6253\u5370\u786C\u4EF6\u6307\u4EE4\u96C6</span>
<span class="token function">uname</span> <span class="token parameter variable">-m</span>
<span class="token comment"># x86_64</span>
<span class="token comment">#x86_64\u7684</span>

<span class="token comment"># Print the kernel name</span>
<span class="token comment">#\u6253\u5370\u5185\u6838\u540D\u79F0</span>
<span class="token function">uname</span> <span class="token parameter variable">-s</span>
<span class="token comment"># Linux</span>
<span class="token comment">#Linux\u7684</span>

<span class="token comment"># Print the operating system</span>
<span class="token comment">#\u6253\u5370\u64CD\u4F5C\u7CFB\u7EDF</span>
<span class="token function">uname</span> <span class="token parameter variable">-o</span>
<span class="token comment"># GNU/Linux</span>
<span class="token comment">#GNU/Linux</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function m(t,d){return s(),e("div",null,c)}const v=n(i,[["render",m],["__file","uname.html.vue"]]);export{v as default};
