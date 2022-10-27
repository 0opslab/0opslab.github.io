import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<h3 id="\u7F16\u8BD1\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u53C2\u6570" aria-hidden="true">#</a> \u7F16\u8BD1\u53C2\u6570</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># so\u6A21\u5757\u7528\u6765\u63D0\u4F9BDSO\u652F\u6301\u7684apache\u6838\u5FC3\u6A21\u5757</span>
<span class="token comment"># \u5982\u679C\u7F16\u8BD1\u4E2D\u5305\u542B\u4EFB\u4F55DSO\u6A21\u5757\uFF0C\u5219mod_so\u4F1A\u88AB\u81EA\u52A8\u5305\u542B\u8FDB\u6838\u5FC3\u3002</span>
<span class="token comment"># \u5982\u679C\u5E0C\u671B\u6838\u5FC3\u80FD\u591F\u88C5\u8F7DDSO\uFF0C\u4F46\u4E0D\u5B9E\u9645\u7F16\u8BD1\u4EFB\u4F55DSO\u6A21\u5757\uFF0C\u5219\u9700\u660E\u786E\u6307\u5B9A&quot;--enable-so=static&quot;</span>

<span class="token comment"># \u5B9E\u4F8B\u7F16\u8BD1</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/apache --enable-so --enable-mods-shared<span class="token operator">=</span>most --enable-rewrite --enable-forward  
--with-mpm<span class="token operator">=</span>worker <span class="token comment"># \u5DF2worker\u65B9\u5F0F\u8FD0\u884C</span>
<span class="token comment"># \u5236\u4F5Capache\u7684\u52A8\u6001\u6A21\u5757DSO rpm\u5305 httpd-devel  #\u7F16\u8BD1\u6A21\u5757 apxs -i -a -c mod_foo.c</span>
--with-apxs<span class="token operator">=</span>/usr/local/apache/bin/apxs  
<span class="token comment">#\u8BA9Apache\u53EF\u4EE5\u652F\u6301DSO\u6A21\u5F0F</span>
--enable-so 
<span class="token comment"># \u544A\u8BC9\u7F16\u8BD1\u5668\u5C06\u6240\u6709\u6807\u51C6\u6A21\u5757\u90FD\u52A8\u6001\u7F16\u8BD1\u4E3ADSO\u6A21\u5757</span>
--enable-mods-shared<span class="token operator">=</span>most 
<span class="token comment"># \u652F\u6301\u5730\u5740\u91CD\u5199\u529F\u80FD</span>
--enable-rewrite 
<span class="token comment"># \u7528most\u53EF\u4EE5\u5C06\u4E00\u4E9B\u4E0D\u5E38\u7528\u7684\uFF0C\u4E0D\u5728\u7F3A\u7701\u5E38\u7528\u6A21\u5757\u4E2D\u7684\u6A21\u5757\u7F16\u8BD1\u8FDB\u6765</span>
--enable-module<span class="token operator">=</span>most 
<span class="token comment"># \u610F\u601D\u662F\u52A8\u6001\u52A0\u8F7D\u6240\u6709\u6A21\u5757\uFF0C\u5982\u679C\u53BB\u6389-shared\u8BDD\uFF0C\u662F\u9759\u6001\u52A0\u8F7D\u6240\u6709\u6A21\u5757</span>
--enable-mods-shared<span class="token operator">=</span>all 
 <span class="token comment"># \u53EF\u4EE5\u6DFB\u52A0\u6587\u4EF6\u8FC7\u671F\u7684\u9650\u5236\uFF0C\u6709\u6548\u51CF\u8F7B\u670D\u52A1\u5668\u538B\u529B\uFF0C\u7F13\u5B58\u5728\u7528\u6237\u7AEF\uFF0C\u6709\u6548\u671F\u5185\u4E0D\u4F1A\u518D\u6B21\u8BBF\u95EE\u670D\u52A1\u5668\uFF0C\u9664\u975E\u6309f5\u5237\u65B0\uFF0C\u4F46\u4E5F\u5BFC\u81F4\u6587\u4EF6\u66F4\u65B0\u4E0D\u53CA\u65F6</span>
--enable-expires
<span class="token comment"># \u538B\u7F29\u529F\u80FD\uFF0C\u7F51\u9875\u53EF\u4EE5\u8FBE\u523040%\u7684\u538B\u7F29\uFF0C\u8282\u7701\u5E26\u5BBD\u6210\u672C\uFF0C\u4F46\u4F1A\u5BF9cpu\u538B\u529B\u6709\u4E00\u70B9\u63D0\u9AD8</span>
--enable-deflate 
<span class="token comment"># \u6587\u4EF6\u5934\u4FE1\u606F\u6539\u5199\uFF0C\u538B\u7F29\u529F\u80FD\u9700\u8981</span>
--enable-headers 
<span class="token comment"># \u7981\u7528MODULE\u6A21\u5757(\u4EC5\u7528\u4E8E\u57FA\u672C\u6A21\u5757)</span>
--disable-MODULE  
<span class="token comment"># \u5C06MODULE\u7F16\u8BD1\u4E3ADSO(\u53EF\u7528\u4E8E\u6240\u6709\u6A21\u5757) </span>
--enable-MODULE<span class="token operator">=</span>shared  
<span class="token comment"># \u5C06MODULE-LIST\u4E2D\u7684\u6240\u6709\u6A21\u5757\u90FD\u7F16\u8BD1\u6210DSO(\u53EF\u7528\u4E8E\u6240\u6709\u6A21\u5757) </span>
--enable-mods-shared<span class="token operator">=</span>MODULE-LIST   
<span class="token comment"># \u5C06MODULE-LIST\u9759\u6001\u8FDE\u63A5\u8FDB\u6838\u5FC3(\u53EF\u7528\u4E8E\u6240\u6709\u6A21\u5757)</span>
--enable-modules<span class="token operator">=</span>MODULE-LIST   

<span class="token comment"># \u4E0A\u8FF0 MODULE-LIST \u53EF\u4EE5\u662F:</span>
<span class="token number">1</span>\u3001\u7528\u5F15\u53F7\u754C\u5B9A\u5E76\u4E14\u7528\u7A7A\u683C\u5206\u9694\u7684\u6A21\u5757\u540D\u5217\u8868  --enable-mods-shared<span class="token operator">=</span><span class="token string">&#39;headers rewrite dav&#39;</span>
<span class="token number">2</span>\u3001<span class="token string">&quot;most&quot;</span><span class="token punctuation">(</span>\u5927\u591A\u6570\u6A21\u5757<span class="token punctuation">)</span>  --enable-mods-shared<span class="token operator">=</span>most 
<span class="token number">3</span>\u3001<span class="token string">&quot;all&quot;</span><span class="token punctuation">(</span>\u6240\u6709\u6A21\u5757<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u53D1" aria-hidden="true">#</a> \u8F6C\u53D1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u9488\u5BF9\u975E80\u7AEF\u53E3\u7684\u8BF7\u6C42\u5904\u7406</span>
RewriteCond %<span class="token punctuation">{</span>SERVER_PORT<span class="token punctuation">}</span> <span class="token operator">!</span>^80$
RewriteRule ^/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>         http://fully.qualified.domain.name:%<span class="token punctuation">{</span>SERVER_PORT<span class="token punctuation">}</span>/<span class="token variable">$1</span> <span class="token punctuation">[</span>L,R<span class="token punctuation">]</span>

RewriteCond %<span class="token punctuation">{</span>HTTP_HOST<span class="token punctuation">}</span> ^ss.aa.com <span class="token punctuation">[</span>NC<span class="token punctuation">]</span>
RewriteRule  ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>  http://www.aa.com/so/<span class="token variable">$1</span>/0/p0?  <span class="token punctuation">[</span>L,R<span class="token operator">=</span><span class="token number">301</span><span class="token punctuation">]</span>
<span class="token comment">#RewriteRule \u53EA\u5BF9?\u524D\u5904\u7406\uFF0C\u6240\u4EE5\u4F1A\u628A?\u540E\u7684\u90FD\u4FDD\u7559\u4E0B\u6765</span>
<span class="token comment">#\u5728\u8F6C\u53D1\u540E\u5730\u5740\u540E\u52A0?\u5373\u53EF\u53D6\u6D88RewriteRule\u4FDD\u7559\u7684\u5B57\u7B26</span>
<span class="token comment">#R\u7684\u542B\u4E49\u662Fredirect\uFF0C\u5373\u91CD\u5B9A\u5411\uFF0C\u8BE5\u8BF7\u6C42\u4E0D\u4F1A\u518D\u88ABapache\u4EA4\u7ED9\u540E\u7AEF\u5904\u7406\uFF0C\u800C\u662F\u76F4\u63A5\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\u8FDB\u884C\u91CD\u5B9A\u5411\u8DF3\u8F6C\u3002</span>
<span class="token comment">#301\u662F\u8FD4\u56DE\u7684http\u72B6\u6001\u7801\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003http rfc\u6587\u6863\uFF0C\u8DF3\u8F6C\u90FD\u662F3XX\u3002</span>
<span class="token comment">#L\u662Flast\uFF0C\u5373\u6700\u540E\u4E00\u4E2Arewrite\u89C4\u5219\uFF0C\u5982\u679C\u8BF7\u6C42\u88AB\u6B64\u89C4\u5219\u547D\u4E2D\uFF0C\u5C06\u4E0D\u4F1A\u7EE7\u7EED\u518D\u5411\u4E0B\u5339\u914D\u5176\u4ED6\u89C4\u5219\u3002	</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[i];function c(o,p){return s(),a("div",null,t)}const r=n(l,[["render",c],["__file","httpd.html.vue"]]);export{r as default};
