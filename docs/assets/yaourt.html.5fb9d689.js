import{_ as n,o as a,c as s,e}from"./app.a667bd71.js";const t={},o=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># All pacman commands are working the same way with yaourt.</span>
<span class="token comment">#\u6240\u6709pacman\u547D\u4EE4\u4E0Eyaourt\u7684\u5DE5\u4F5C\u65B9\u5F0F\u76F8\u540C\u3002</span>
<span class="token comment"># Just check the pacman cheatsheet.</span>
<span class="token comment">#\u53EA\u9700\u68C0\u67E5pacman cheatsheet\u3002</span>
<span class="token comment"># For instance, to install a package : </span>
<span class="token comment">#\u4F8B\u5982\uFF0C\u8981\u5B89\u88C5\u5305\uFF1A</span>
pacman <span class="token parameter variable">-S</span> <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>
yaourt <span class="token parameter variable">-S</span> <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>
<span class="token comment"># The difference is that yaourt will also query the Arch User Repository,</span>
<span class="token comment">#\u533A\u522B\u5728\u4E8Eyaourt\u8FD8\u4F1A\u67E5\u8BE2Arch User Repository\uFF0C</span>
<span class="token comment"># and if appropriate, donwload the source and build the package requested.</span>
<span class="token comment">#\u5E76\u5728\u9002\u5F53\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0B\u8F7D\u6E90\u5E76\u6784\u5EFA\u6240\u8BF7\u6C42\u7684\u5305\u3002</span>

<span class="token comment"># Here are the commands yaourt provides while pacman doesn&#39;t :</span>
<span class="token comment">#\u4EE5\u4E0B\u662Fyaourt\u63D0\u4F9B\u7684\u547D\u4EE4\uFF0C\u800Cpacman\u6CA1\u6709\uFF1A</span>

<span class="token comment"># To search for a package and install it</span>
<span class="token comment">#\u641C\u7D22\u5305\u5E76\u5B89\u88C5\u5B83</span>
yaourt <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># To update the local package base and upgrade all out of date package, including the ones from </span>
<span class="token comment">#\u66F4\u65B0\u672C\u5730\u7A0B\u5E8F\u5305\u5E93\u5E76\u5347\u7EA7\u6240\u6709\u8FC7\u65F6\u7684\u7A0B\u5E8F\u5305\uFF0C\u5305\u62EC\u6765\u81EA\u7684\u7A0B\u5E8F\u5305</span>
AUR and the packages based on development repos <span class="token punctuation">(</span>git, svn, hg<span class="token punctuation">..</span>.<span class="token punctuation">)</span>
yaourt <span class="token parameter variable">-Suya</span> <span class="token parameter variable">--devel</span>

<span class="token comment"># For all of the above commands, if you want yaourt to stop asking constantly for confirmations, </span>
<span class="token comment">#\u5BF9\u4E8E\u4EE5\u4E0A\u6240\u6709\u547D\u4EE4\uFF0C\u5982\u679C\u60A8\u5E0C\u671Byaourt\u4E0D\u518D\u8981\u6C42\u786E\u8BA4\uFF0C</span>
use the option <span class="token parameter variable">--noconfirm</span>

<span class="token comment"># To build a package from source</span>
<span class="token comment">#\u4ECE\u6E90\u4EE3\u7801\u6784\u5EFA\u5305</span>
yaourt <span class="token parameter variable">-Sb</span> <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[o];function l(i,r){return a(),s("div",null,c)}const m=n(t,[["render",l],["__file","yaourt.html.vue"]]);export{m as default};
