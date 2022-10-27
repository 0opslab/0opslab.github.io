import{_ as n,o as a,c as e,e as s}from"./app.a667bd71.js";const i={},l=s(`<h3 id="\u5E38\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u53C2\u6570" aria-hidden="true">#</a> \u5E38\u7528\u53C2\u6570</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-i\uFF1A\u5B89\u88C5\u8F6F\u4EF6\u5305\uFF1B
-r\uFF1A\u5220\u9664\u8F6F\u4EF6\u5305\uFF1B
-P\uFF1A\u5220\u9664\u8F6F\u4EF6\u5305\u7684\u540C\u65F6\u5220\u9664\u5176\u914D\u7F6E\u6587\u4EF6\uFF1B
-L\uFF1A\u663E\u793A\u4E8E\u8F6F\u4EF6\u5305\u5173\u8054\u7684\u6587\u4EF6\uFF1B
-l\uFF1A\u663E\u793A\u5DF2\u5B89\u88C5\u8F6F\u4EF6\u5305\u5217\u8868\uFF1B
--unpack\uFF1A\u89E3\u5F00\u8F6F\u4EF6\u5305\uFF1B
-c\uFF1A\u663E\u793A\u8F6F\u4EF6\u5305\u5185\u6587\u4EF6\u5217\u8868\uFF1B
--confiugre\uFF1A\u914D\u7F6E\u8F6F\u4EF6\u5305\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5B89\u88C5\u5305</span>
dpkg <span class="token parameter variable">-i</span> package.deb
<span class="token comment">#\u5220\u9664\u5305</span>
dpkg <span class="token parameter variable">-r</span> package
<span class="token comment">#\u5220\u9664\u5305\uFF08\u5305\u62EC\u914D\u7F6E\u6587\u4EF6\uFF09</span>
dpkg <span class="token parameter variable">-P</span> package
<span class="token comment">#\u5217\u51FA\u4E0E\u8BE5\u5305\u5173\u8054\u7684\u6587\u4EF6</span>
dpkg <span class="token parameter variable">-L</span> package
<span class="token comment">#\u663E\u793A\u8BE5\u5305\u7684\u7248\u672C</span>
dpkg <span class="token parameter variable">-l</span> package
<span class="token comment">#\u89E3\u5F00deb\u5305\u7684\u5185\u5BB9</span>
dpkg <span class="token parameter variable">--unpack</span> package.deb  
<span class="token comment">#\u641C\u7D22\u6240\u5C5E\u7684\u5305\u5185\u5BB9</span>
dpkg <span class="token parameter variable">-S</span> keyword            
<span class="token comment">#\u5217\u51FA\u5F53\u524D\u5DF2\u5B89\u88C5\u7684\u5305</span>
dpkg <span class="token parameter variable">-l</span>                    
<span class="token comment">#\u5217\u51FAdeb\u5305\u7684\u5185\u5BB9</span>
dpkg <span class="token parameter variable">-c</span> package.deb        
<span class="token comment">#\u914D\u7F6E\u5305</span>
dpkg <span class="token parameter variable">--configure</span> package   
<span class="token comment"># List all installed packages with versions and details</span>
<span class="token comment">#\u5217\u51FA\u6240\u6709\u5DF2\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305\u53CA\u7248\u672C\u548C\u8BE6\u7EC6\u4FE1</span>
dpkg <span class="token parameter variable">-I</span>
<span class="token comment"># Find out if a Debian package is installed or not</span>
<span class="token comment">#\u4E86\u89E3\u662F\u5426\u5B89\u88C5\u4E86Debian\u8F6F\u4EF6\u5305</span>
dpkg <span class="token parameter variable">-s</span> test.deb <span class="token operator">|</span> <span class="token function">grep</span> Status

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[l];function c(r,p){return a(),e("div",null,d)}const v=n(i,[["render",c],["__file","dpkg.html.vue"]]);export{v as default};
