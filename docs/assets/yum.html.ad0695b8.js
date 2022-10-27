import{_ as n,o as a,c as s,e}from"./app.a667bd71.js";const t={},l=e(`<h2 id="yum\u6269\u5C55\u6E90" tabindex="-1"><a class="header-anchor" href="#yum\u6269\u5C55\u6E90" aria-hidden="true">#</a> yum\u6269\u5C55\u6E90</h2><h1 id="\u5305\u4E0B\u8F7D\u5730\u5740-http-download-fedoraproject-org-pub-epel" tabindex="-1"><a class="header-anchor" href="#\u5305\u4E0B\u8F7D\u5730\u5740-http-download-fedoraproject-org-pub-epel" aria-hidden="true">#</a> \u5305\u4E0B\u8F7D\u5730\u5740:http://download.fedoraproject.org/pub/epel</h1><h1 id="\u9009\u62E9\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u7248\u672C" aria-hidden="true">#</a> \u9009\u62E9\u7248\u672C</h1><p>wget http://download.fedoraproject.org/pub/epel/5/i386/epel-release-5-4.noarch.rpm rpm -Uvh epel-release-5-4.noarch.rpm</p><h2 id="\u81EA\u5B9A\u4E49yum\u6E90" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49yum\u6E90" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49yum\u6E90</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> /etc/yum.repos.d <span class="token parameter variable">-name</span> <span class="token string">&quot;*.repo&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">mv</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>.bak <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token function">vim</span> /etc/yum.repos.d/yum.repo
<span class="token punctuation">[</span>yum<span class="token punctuation">]</span>
<span class="token comment">#http</span>
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://10.0.0.1/centos5.5
<span class="token comment">#\u6302\u8F7Diso</span>
<span class="token comment">#mount -o loop CentOS-5.8-x86_64-bin-DVD-1of2.iso /data/iso/</span>
<span class="token comment">#\u672C\u5730</span>
<span class="token comment">#baseurl=file:///data/iso/</span>
<span class="token assign-left variable">enable</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment">#\u5BFC\u5165key</span>
<span class="token function">rpm</span> <span class="token parameter variable">--import</span>  /etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>	yum list                 <span class="token comment"># \u67E5\u627E\u6240\u6709\u5217\u8868</span>
		yum <span class="token function">install</span> \u5305\u540D         <span class="token comment"># \u5B89\u88C5\u5305\u548C\u4F9D\u8D56\u5305</span>
		yum <span class="token parameter variable">-y</span> update            <span class="token comment"># \u5347\u7EA7\u6240\u6709\u5305\u7248\u672C,\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7CFB\u7EDF\u7248\u672C\u5185\u6838\u90FD\u5347\u7EA7</span>
		yum <span class="token parameter variable">-y</span> update \u8F6F\u4EF6\u5305\u540D   <span class="token comment"># \u5347\u7EA7\u6307\u5B9A\u7684\u8F6F\u4EF6\u5305</span>
		yum <span class="token parameter variable">-y</span> upgrade           <span class="token comment"># \u4E0D\u6539\u53D8\u8F6F\u4EF6\u8BBE\u7F6E\u66F4\u65B0\u8F6F\u4EF6\uFF0C\u7CFB\u7EDF\u7248\u672C\u5347\u7EA7\uFF0C\u5185\u6838\u4E0D\u6539\u53D8</span>
		yum search mail          <span class="token comment"># yum\u641C\u7D22\u76F8\u5173\u5305</span>
		yum grouplist            <span class="token comment"># \u8F6F\u4EF6\u5305\u7EC4</span>
		yum <span class="token parameter variable">-y</span> groupinstall <span class="token string">&quot;Virtualization&quot;</span>   <span class="token comment"># \u5B89\u88C5\u8F6F\u4EF6\u5305\u7EC4</span>


<span class="token comment"># To install the latest version of a package:</span>
yum <span class="token function">install</span> <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># To perform a local install:</span>
yum localinstall <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># To remove a package:</span>
yum remove <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># To search for a package:</span>
yum search <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># To find what package installs a program:</span>
yum whatprovides <span class="token operator">&lt;</span>/path/to/program<span class="token operator">&gt;</span>

<span class="token comment"># To find the dependencies of a package:</span>
yum deplist <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># To find information about a package:</span>
yum info <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># List currently enabled repositories:</span>
yum repolist

<span class="token comment"># List packages containing a certain keyword:</span>
yum list <span class="token operator">&lt;</span>package_name_or_word_to_search<span class="token operator">&gt;</span>
 
<span class="token comment"># To download the source RPM for a package:</span>
yumdownloader <span class="token parameter variable">--source</span> <span class="token operator">&lt;</span>package name<span class="token operator">&gt;</span>

<span class="token comment"># (You have to install yumdownloader first, which is installed by the yum-utils package)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[l];function o(p,c){return a(),s("div",null,i)}const d=n(t,[["render",o],["__file","yum.html.vue"]]);export{d as default};
