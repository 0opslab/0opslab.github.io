import{_ as a,o as s,c as n,e}from"./app.a667bd71.js";const p={},t=e(`<p>python\u4FEE\u6539pip\u6E90\u89E3\u51B3\u5B89\u88C5\u5F88\u6162\u7684\u95EE\u9898</p><p>\u5BB6\u76EE\u5F55\u4E0B\u9762\u521B\u5EFA\u6587\u4EF6/.pip/pip.conf linux\u5728\uFF1A~/.pip/pip.conf\u5199\u5165\u5982\u4E0B\u5185\u5BB9</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token punctuation">[</span><span class="token keyword">global</span><span class="token punctuation">]</span>
index<span class="token operator">-</span>url <span class="token operator">=</span> http<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>simple<span class="token operator">/</span>
 
<span class="token punctuation">[</span>install<span class="token punctuation">]</span>
trusted<span class="token operator">-</span>host<span class="token operator">=</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Search for packages</span>
pip search SomePackage

<span class="token comment"># Install some packages</span>
pip <span class="token function">install</span> SomePackage

<span class="token comment"># Install some package in user space</span>
pip <span class="token function">install</span> <span class="token parameter variable">--user</span> SomePackage

<span class="token comment"># Upgrade some package</span>
pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> SomePackage

<span class="token comment"># Output and install packages in a requirement file</span>
pip freeze <span class="token operator">&gt;</span> requirements.txt
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt

<span class="token comment"># Show details of a package</span>
pip show SomePackage

<span class="token comment"># List outdated packages</span>
pip list <span class="token parameter variable">--outdated</span>

<span class="token comment"># Upgrade all outdated packages, thanks to http://stackoverflow.com/a/3452888</span>
pip freeze <span class="token parameter variable">--local</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;^\\-e&#39;</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token operator">=</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n1</span> pip <span class="token function">install</span> <span class="token parameter variable">-U</span>

<span class="token comment"># Upgrade outdated packages on latest version of pip</span>
pip list <span class="token parameter variable">--outdated</span> <span class="token parameter variable">--format</span><span class="token operator">=</span>freeze <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token operator">=</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n1</span> pip <span class="token function">install</span> <span class="token parameter variable">-U</span>

<span class="token comment"># Install specific version of a package</span>
pip <span class="token function">install</span> <span class="token parameter variable">-I</span> <span class="token assign-left variable">SomePackage1</span><span class="token operator">==</span><span class="token number">1.1</span>.0 <span class="token string">&#39;SomePackage2&gt;=1.0.4&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function i(o,c){return s(),n("div",null,l)}const d=a(p,[["render",i],["__file","py-pip.html.vue"]]);export{d as default};
