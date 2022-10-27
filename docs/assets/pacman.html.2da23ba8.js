import{_ as a,o as n,c as s,e}from"./app.a667bd71.js";const p={},t=e(`<p>All the following command work as well with multiple package names</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># To search for a package</span>
pacman <span class="token parameter variable">-Ss</span> <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># To update the local package base and upgrade all out of date packages</span>
pacman <span class="token parameter variable">-Suy</span>

<span class="token comment"># To install a package</span>
pacman <span class="token parameter variable">-S</span> <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># To uninstall a package</span>
pacman <span class="token parameter variable">-R</span> <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># To uninstall a package and his depedencies, removing all new orphans</span>
pacman <span class="token parameter variable">-Rcs</span> <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># To get informations about a package</span>
pacman <span class="token parameter variable">-Si</span> <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># To install a package from builded package file (.tar.xz)</span>
pacman <span class="token parameter variable">-U</span> <span class="token operator">&lt;</span>file name/file url<span class="token operator">&gt;</span>

<span class="token comment"># To list the commands provided by an installed package</span>
pacman <span class="token parameter variable">-Ql</span> <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/.*\\/bin\\///p&#39;</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +2

<span class="token comment"># To list explicitly installed packages</span>
pacman <span class="token parameter variable">-Qe</span>

<span class="token comment"># To list the top-most recent explicitly installed packages (not in the base groups)</span>
expac <span class="token parameter variable">--timefmt</span><span class="token operator">=</span><span class="token string">&#39;%Y-%m-%d %T&#39;</span> <span class="token string">&#39;%l\\t%n&#39;</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">comm</span> <span class="token parameter variable">-23</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span>pacman -Qeq<span class="token operator">|</span><span class="token function">sort</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span>pacman <span class="token parameter variable">-Qqg</span> base base-devel<span class="token operator">|</span><span class="token function">sort</span><span class="token punctuation">)</span><span class="token variable">)</span></span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-20</span>

<span class="token comment"># To list orphan packages (installed as dependencies and not required anymore)</span>
pacman <span class="token parameter variable">-Qdt</span>


<span class="token comment"># You can&#39;t directly install packages from the Arch User Database (AUR) with pacman.</span>
<span class="token comment"># You need yaourt to perform that. But considering yaourt itself is in the AUR, here is how to build a package from its tarball.</span>
<span class="token comment"># Installing a package from AUR is a relatively simple process:</span>
<span class="token comment"># - Retrieve the archive corresponding to your package from AUR website</span>
<span class="token comment"># - Extract the archive (preferably in a folder for this purpose)</span>
<span class="token comment"># - Run makepkg in the extracted directory. (makepkg-s allows you to install any dependencies automatically from deposits.)</span>
<span class="token comment"># - Install the package created using pacman</span>
<span class="token comment"># Assuming $pkgname contains the package name.</span>
<span class="token function">wget</span> <span class="token string">&quot;https://aur.archlinux.org/packages/<span class="token variable">\${pkgname<span class="token operator">:</span><span class="token operator">:</span>2}</span>/<span class="token variable">$pkgname</span>/<span class="token variable">$pkgname</span>.tar.gz&quot;</span>
<span class="token function">tar</span> zxvf <span class="token string">&quot;<span class="token variable">$pkgname</span>.tar.gz&quot;</span>
<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable">$pkgname</span>&quot;</span>
<span class="token comment"># Build the package</span>
makepkg <span class="token parameter variable">-s</span>
<span class="token comment"># Install</span>
<span class="token function">sudo</span> pacman <span class="token parameter variable">-U</span> <span class="token operator">&lt;</span>package <span class="token function">file</span> <span class="token punctuation">(</span>.pkg.tar.xz<span class="token punctuation">)</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function i(c,o){return n(),s("div",null,l)}const m=a(p,[["render",i],["__file","pacman.html.vue"]]);export{m as default};
