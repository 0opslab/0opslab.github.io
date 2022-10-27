import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},c=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To search a package:</span>
<span class="token comment">#\u8981\u641C\u7D22\u5305\u88F9\uFF1A</span>
<span class="token function">apt</span> search package

<span class="token comment"># To show package informations:</span>
<span class="token comment">#\u8981\u663E\u793A\u5305\u88F9\u4FE1\u606F\uFF1A</span>
<span class="token function">apt</span> show package

<span class="token comment"># To fetch package list:</span>
<span class="token comment">#\u8981\u83B7\u53D6\u5305\u5217\u8868\uFF1A</span>
<span class="token function">apt</span> update

<span class="token comment"># To download and install updates without installing new package:</span>
<span class="token comment">#\u8981\u5728\u4E0D\u5B89\u88C5\u65B0\u8F6F\u4EF6\u5305\u7684\u60C5\u51B5\u4E0B\u4E0B\u8F7D\u548C\u5B89\u88C5\u66F4\u65B0</span>
<span class="token function">apt</span> upgrade

<span class="token comment"># To download and install the updates AND install new necessary packages:</span>
<span class="token comment">#\u8981\u4E0B\u8F7D\u5E76\u5B89\u88C5\u66F4\u65B0\u5E76\u5B89\u88C5\u65B0\u7684\u5FC5\u8981\u8F6F\u4EF6\u5305\uFF1A</span>
<span class="token function">apt</span> dist-upgrade

<span class="token comment"># Full command:</span>
<span class="token comment">#\u5B8C\u6574\u547D\u4EE4\uFF1A</span>
<span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt</span> dist-upgrade

<span class="token comment"># To install a new package(s):</span>
<span class="token comment">#\u8981\u5B89\u88C5\u65B0\u8F6F\u4EF6\u5305\uFF1A</span>
<span class="token function">apt</span> <span class="token function">install</span> package<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># To uninstall package(s)</span>
<span class="token comment">#\u5378\u8F7D\u8F6F\u4EF6\u5305</span>
<span class="token function">apt</span> remove package<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># Desc: Allows to update the operating system</span>
<span class="token comment">#\u63CF\u8FF0\uFF1A\u5141\u8BB8\u66F4\u65B0\u64CD\u4F5C\u7CFB\u7EDF</span>

<span class="token comment"># To fetch package list</span>
<span class="token comment">#\u8981\u83B7\u53D6\u5305\u5217\u8868</span>
<span class="token function">apt-get</span> update

<span class="token comment"># To download and install updates without installing new package.</span>
<span class="token comment">#\u65E0\u9700\u5B89\u88C5\u65B0\u8F6F\u4EF6\u5305\u5373\u53EF\u4E0B\u8F7D\u548C\u5B89\u88C5\u66F4\u65B0\u3002</span>
<span class="token function">apt-get</span> upgrade

<span class="token comment"># To download and install the updates AND install new necessary packages</span>
<span class="token comment">#\u4E0B\u8F7D\u5E76\u5B89\u88C5\u66F4\u65B0\u5E76\u5B89\u88C5\u65B0\u7684\u5FC5\u8981\u8F6F\u4EF6\u5305</span>
<span class="token function">apt-get</span> dist-upgrade

<span class="token comment"># Full command:</span>
<span class="token comment">#\u5B8C\u6574\u547D\u4EE4\uFF1A</span>
<span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> dist-upgrade

<span class="token comment"># To install a new package(s)</span>
<span class="token comment">#\u5B89\u88C5\u65B0\u8F6F\u4EF6\u5305</span>
<span class="token function">apt-get</span> <span class="token function">install</span> package<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># Download a package without installing it. (The package will be downloaded in your current working dir)</span>
<span class="token comment">#\u4E0B\u8F7D\u5305\u800C\u4E0D\u5B89\u88C5\u5B83\u3002 \uFF08\u8BE5\u8F6F\u4EF6\u5305\u5C06\u5728\u60A8\u5F53\u524D\u7684\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u4E0B\u8F7D\uFF09</span>
<span class="token function">apt-get</span> download modsecurity-crs

<span class="token comment"># Change Cache dir and archive dir (where .deb are stored).</span>
<span class="token comment">#\u66F4\u6539\u7F13\u5B58\u76EE\u5F55\u548C\u5B58\u6863\u76EE\u5F55\uFF08\u5B58\u50A8.deb\u7684\u4F4D\u7F6E\uFF09\u3002</span>
<span class="token function">apt-get</span> <span class="token parameter variable">-o</span> Dir::Cache<span class="token operator">=</span><span class="token string">&quot;/path/to/destination/dir/&quot;</span> <span class="token parameter variable">-o</span> Dir::Cache::archives<span class="token operator">=</span><span class="token string">&quot;./&quot;</span> <span class="token function">install</span> <span class="token punctuation">..</span>.

<span class="token comment"># Show apt-get installed packages.</span>
<span class="token comment">#\u663E\u793Aapt-get\u5B89\u88C5\u5305\u3002</span>
<span class="token function">grep</span> <span class="token string">&#39;install &#39;</span> /var/log/dpkg.log

<span class="token comment"># Silently keep old configuration during batch updates</span>
<span class="token comment">#\u5728\u6279\u91CF\u66F4\u65B0\u671F\u95F4\u9759\u9ED8\u4FDD\u7559\u65E7\u914D\u7F6E</span>
<span class="token function">apt-get</span> update <span class="token parameter variable">-o</span> DPkg::Options::<span class="token operator">=</span><span class="token string">&#39;--force-confold&#39;</span> <span class="token punctuation">..</span>.


<span class="token comment"># To search for apt packages:</span>
<span class="token comment">#\u8981\u641C\u7D22apt\u5305\uFF1A</span>
<span class="token function">apt-cache</span> search <span class="token string">&quot;whatever&quot;</span>

<span class="token comment"># To display package records for the named package(s):</span>
<span class="token comment">#\u8981\u663E\u793A\u547D\u540D\u5305\u7684\u5305\u8BB0\u5F55\uFF1A</span>
<span class="token function">apt-cache</span> show pkg<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># To display reverse dependencies of a package</span>
<span class="token comment">#\u663E\u793A\u5305\u7684\u53CD\u5411\u4F9D\u8D56\u5173\u7CFB</span>
<span class="token function">apt-cache</span> rdepends package_name

<span class="token comment"># To display package versions, reverse dependencies and forward dependencies </span>
<span class="token comment">#\u663E\u793A\u5305\u7248\u672C\uFF0C\u53CD\u5411\u4F9D\u8D56\u5173\u7CFB\u548C\u8F6C\u53D1\u4F9D\u8D56\u5173\u7CFB</span>
<span class="token comment"># of a package</span>
<span class="token comment">#\u4E00\u4E2A\u5305</span>
<span class="token function">apt-cache</span> showpkg package_name

<span class="token comment"># To search for packages:</span>
<span class="token comment">#\u8981\u641C\u7D22\u5305\u88F9\uFF1A</span>
<span class="token function">aptitude</span> search <span class="token string">&quot;whatever&quot;</span>

<span class="token comment"># To display package records for the named package(s):</span>
<span class="token comment">#\u8981\u663E\u793A\u547D\u540D\u5305\u7684\u5305\u8BB0\u5F55\uFF1A</span>
<span class="token function">aptitude</span> show pkg<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># To install a package:</span>
<span class="token comment">#\u8981\u5B89\u88C5\u5305\uFF1A</span>
<span class="token function">aptitude</span> <span class="token function">install</span> package

<span class="token comment"># To remove a package:</span>
<span class="token comment">#\u8981\u5220\u9664\u5305\u88F9\uFF1A</span>
<span class="token function">aptitude</span> remove package

<span class="token comment"># To remove unnecessary package:</span>
<span class="token comment">#\u5220\u9664\u4E0D\u5FC5\u8981\u7684\u5305\uFF1A</span>
<span class="token function">aptitude</span> autoclean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[c];function t(p,o){return s(),a("div",null,l)}const m=n(i,[["render",t],["__file","apt.html.vue"]]);export{m as default};
