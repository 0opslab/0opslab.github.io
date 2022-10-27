import{_ as i,r as l,o as t,c,a as s,b as d,e,d as n}from"./app.a667bd71.js";const o={},r=e(`<p>Nginx\u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684HTTP\u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4E5F\u662F\u4E00\u4E2AIMAP/POP3/STMP\u670D\u52A1\u5668\uFF0C\u6B64\u5904\u53EA\u8BF4HTTP\u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u3002\u7531\u4E8Enginx\u7684\u9AD8\u6548\u548C\u53CD\u5411\u4EE3\u7406\u529F\u80FD\uFF0C\u5DF2\u7ECF\u8D85\u8FC7\u4E00\u5927\u534A\u7684\u7F51\u7AD9\u90FD\u4F7F\u7528Nginx\u8FDB\u884C\u627F\u8F7D\uFF0C\u8EAB\u4E3A\u4E00\u4E2AIT\u4ECE\u4E1A\u4EBA\u5458\uFF0C\u5982\u679C\u6CA1\u542C\u8FC7\uFF0C\u6CA1\u95EE\u9898nginx\u662F\u5728\u6127\u5BF9\u81EA\u5DF1\u3002\u5F53\u7136\u8FD8\u6709\u4E00\u6B3E\u56FD\u4EBA\u6625\u54E5\u7684\u5347\u7EA7\u7248OpenResty\u662F\u5C06nginx\u548CLuaJIT\u6574\u5408\u5230\u4E00\u8D77\uFF0C\u63D0\u4F9B\u4E86\u66F4\u52A0\u53EF\u63A7\u7684\u52A8\u6001Web\u5E73\u53F0\u3002</p><h3 id="\u5B89\u88C5\u53CA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u53CA\u6A21\u5757" aria-hidden="true">#</a> \u5B89\u88C5\u53CA\u6A21\u5757</h3><p>\u5B89\u88C5Nginx\u524D\u9700\u8981\u5B89\u88C5\u4E00\u4E9B\u7F16\u8F91\u5DE5\u5177\u53CA\u5E93\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u7F16\u8F91\u5DE5\u5177\u53CA\u5E93 
<span class="token comment"># yum -y install make zlib  zlib-devel gcc-c++ libtool openssl openss-devel</span>

// \u5B89\u88C5PCRE
<span class="token comment"># wget http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz</span>
<span class="token comment"># tar zxvf pcre-8.35.tar.gz</span>
<span class="token comment"># cd pcre-8.35</span>
<span class="token comment"># ./configure</span>
<span class="token comment"># make &amp;&amp; make install</span>
<span class="token comment"># pcre-config --version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u8F7DNginx\u5E76\u8FDB\u884C\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u8FDB\u5165\u89E3\u538B\u540E\u7684\u76EE\u5F55
<span class="token comment">#  ./configure \\</span>
	<span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx <span class="token punctuation">\\</span>
	--with-http_stub_status_module <span class="token punctuation">\\</span>
	--with-http_ssl_module <span class="token punctuation">\\</span>
	--with-pcre<span class="token operator">=</span>/usr/local/src/pcre-8.35
	
<span class="token comment"># make</span>
<span class="token comment"># make install</span>
<span class="token comment"># /usr/local/nginx/sbin/nginx -v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E00\u5207OK\uFF0C\u901A\u8FC7\u4E0A\u8FF0\u7684\u547D\u4EE4\u5C31\u53EF\u4EE5\u5B8C\u6210nginx\u7684\u5B89\u88C5\u4E86\u3002Nginx\u6587\u4EF6\u975E\u5E38\u5C0F\uFF0C\u4F46\u662F\u5176\u6027\u80FD\u975E\u5E38\u5353\u8D8A\uFF0C\u5176\u4E2D\u4E00\u4E2A\u539F\u56E0\u662FNginx\u81EA\u5E26\u7684\u529F\u80FD\u76F8\u5BF9\u8F83\u5C11\uFF0C\u4F46\u662F\u5141\u8BB8\u4EE5\u6A21\u5757\u7684\u65B9\u5F0F\u6DFB\u52A0\u81EA\u5B9A\u4E49\u529F\u80FD\uFF0C\u56E0\u6B64Nginx\u8D8A\u53D1\u5F3A\u5927\u3002Nginx\u6A21\u5757 \u662F \u88AB\u7F16\u8BD1\u8FDB\u5165Nginx\uFF0C\u5E76\u4E0D\u50CFApache\u90A3\u6837\u53BB\u7F16\u8BD1\u4E00\u4E2Aso\u6587\u4EF6\uFF0C\u5728\u914D\u7F6E\u91CC\u9762\u6307\u5B9A\u662F\u5426\u52A0\u8F7D\uFF0C\u89E3\u6790\u7684\u65F6\u5019Nginx\u7684\u54E5\u54E5\u6A21\u5757\u90FD\u6709\u673A\u4F1A\u53BB\u63A5\u6536\u5904\u7406\u67D0\u4E2A\u8BF7\u6C42\uFF0C\u4F46\u662FURL\u8BF7\u6C42\u7684\u6A21\u5757\u53EA\u80FD\u6709\u4E00\u4E2A\u3002\u53EF\u4EE5\u901A\u8FC7-V\u53C2\u6570\u67E5\u770B\u5F53\u524DNginx\u5DF2\u7ECF\u5B89\u88C5\u4E86\u90A3\u4E9B\u6A21\u5757\u3002\u81F3\u4E8E\u5E38\u7528\u7684\u6A21\u5757\u53EF\u4EE5\u67E5\u627E\u6A21\u5757\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u4FE9\u4E2A\u7F51\u7AD9\u67E5\u627E\uFF1A</p><ul><li>http://www.nginx.cn/doc/index.html</li><li>http://nginx.org/en/docs/ngx_core_module.html</li><li>http://openresty.org/cn/components.html</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sbin/nginx <span class="token parameter variable">-V</span>
nginx version: openresty/1.11.2.5
built by gcc <span class="token number">4.8</span>.5 <span class="token number">20150623</span> <span class="token punctuation">(</span>Red Hat <span class="token number">4.8</span>.5-16<span class="token punctuation">)</span> <span class="token punctuation">(</span>GCC<span class="token punctuation">)</span>
built with OpenSSL <span class="token number">1.0</span>.2k-fips  <span class="token number">26</span> Jan <span class="token number">2017</span>
TLS SNI support enabled
configure arguments: 
<span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/openresty/nginx 
--with-cc-opt<span class="token operator">=</span>-O2 
--add-module<span class="token operator">=</span><span class="token punctuation">..</span>/ngx_devel_kit-0.3.0 
--add-module<span class="token operator">=</span><span class="token punctuation">..</span>/echo-nginx-module-0.61 
--add-module<span class="token operator">=</span><span class="token punctuation">..</span>/xss-nginx-module-0.05 
--add-module<span class="token operator">=</span><span class="token punctuation">..</span>/ngx_coolkit-0.2rc3
--with-http_v2_module 
--with-http_realip_module 
--with-http_sub_module
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u9700\u8981\u5B89\u88C5\u7B2C\u4E09\u65B9\u6A21\u5757\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u547D\u4EE4\u683C\u5F0F\u5B89\u88C5\uFF0C\u4E3B\u8981\u4E0D\u8981make install\u800C\u662F\u76F4\u63A5\u628A\u7F16\u8F91\u51FA\u6765\u7684objs/nginx\u6587\u4EF6\u76F4\u63A5\u8986\u76D6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/\u5B89\u88C5\u76EE\u5F55 --add-module<span class="token operator">=</span>/\u7B2C\u4E09\u65B9\u6A21\u5757\u76EE\u5F55
// \u4F8B\u5982\u5B89\u88C5pagespeed\u6A21\u5757
<span class="token comment">#  ./configure \\</span>
	<span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx <span class="token punctuation">\\</span>
	--with-http_stub_status_module <span class="token punctuation">\\</span>
	--with-http_ssl_module <span class="token punctuation">\\</span>
	--with-pcre<span class="token operator">=</span>/usr/local/src/pcre-8.35
	--add-module<span class="token operator">=</span><span class="token punctuation">..</span>/ngx_pagespeed-master -add-module<span class="token operator">=</span>/\u6A21\u5757\u8DEF\u5F84
	
<span class="token comment"># make</span>
<span class="token comment"># /usr/local/nginx/sbin/nginx -V</span>

<span class="token comment"># cp /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx_bak</span>
<span class="token comment"># cp objs/nginx /usr/local/nginx/sbin/nginx</span>
// <span class="token builtin class-name">test</span>
<span class="token comment"># /usr/local/nginx/sbin/nginx -t</span>
<span class="token comment"># /usr/local/nginx/sbin/nginx -s realod</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E38\u7528\u7684\u4E00\u4E9B\u6A21\u5757</p><ul><li>ngx_http_core_module \u5305\u62EC\u4E00\u4E9B\u6838\u5FC3\u7684 http \u53C2\u6570\u914D\u7F6E\uFF0C\u5BF9\u5E94 Nginx \u7684\u914D\u7F6E\u4E3A HTTP \u533A\u5757\u90E8\u5206</li><li>ngx_http_access_module\u8BBF\u95EE\u63A7\u5236\u6A21\u5757\uFF0C\u7528\u6765\u63A7\u5236\u7F51\u7AD9\u7528\u6237\u5BF9 Nginx \u7684\u8BBF\u95EE</li><li>ngx_http_gzip_module\u538B\u7F29\u6A21\u5757\uFF0C\u5BF9 Nginx \u8FD4\u56DE\u7684\u6570\u636E\u538B\u7F29\uFF0C\u5C5E\u4E8E\u6027\u80FD\u4F18\u5316\u6A21\u5757</li><li>ngx_http_fastcgi_moduleFastCGI \u6A21\u5757\uFF0C\u548C\u52A8\u6001\u5E94\u7528\u76F8\u5173\u7684\u6A21\u5757\uFF0C\u5982 PHP</li><li>ngx_http_proxy_moduleproxy \u4EE3\u7406\u6A21\u5757</li><li>ngx_http_upstream_module\u8D1F\u8F7D\u5747\u8861\u6A21\u5757\uFF0C\u53EF\u5B9E\u73B0\u7F51\u7AD9\u7684\u8D1F\u8F7D\u5747\u8861\u548C\u8282\u70B9\u7684\u5065\u5EB7\u68C0\u67E5</li><li>ngx_http_rewrite_moduleURL \u5730\u5740\u91CD\u5199\u6A21\u5757</li><li>ngx_http_limit_conn_module\u9650\u5236\u7528\u6237\u5E76\u53D1\u8FDE\u63A5\u6570\u4EE5\u53CA\u8BF7\u6C42\u6570\u7684\u6A21\u5757</li><li>ngx_http_limit_req_module\u6839\u636E\u5B9A\u4E49\u7684 key \u9650\u5236 Nginx \u8BF7\u6C42\u8FC7\u7A0B\u7684\u901F\u7387</li><li>ngx_http_log_module\u8BBF\u95EE\u65E5\u5FD7\u6A21\u5757\uFF0C\u4EE5\u6307\u5B9A\u7684\u683C\u5F0F\u8BB0\u5F55 Nginx \u5BA2\u6237\u8BBF\u95EE\u65E5\u5FD7\u7B49\u4FE1\u606F</li><li>ngx_http_auth_basic_moduleWeb \u8BA4\u8BC1\u6A21\u5757\uFF0C\u8BBE\u7F6E Web \u7528\u6237\u901A\u8FC7\u8D26\u53F7\u5BC6\u7801\u8BBF\u95EE Nginx</li><li>ngx_http_ssl_modulessl \u6A21\u5757\uFF0C\u7528\u4E8E\u52A0\u5BC6\u7684 http \u8FDE\u63A5\uFF0C\u5982 https</li><li>ngx_http_stub_status_module\u8BB0\u5F55 Nginx \u57FA\u672C\u8BBF\u95EE\u72B6\u6001\u4FE1\u606F\u7B49\u7684\u6A21\u5757</li></ul><h3 id="\u4F7F\u7528nginx" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528nginx" aria-hidden="true">#</a> \u4F7F\u7528Nginx</h3><p>\u5B89\u88C5\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528nginx\u4E86\uFF0C\u8FD9\u91CC\u4ECB\u7ECD\u4F7F\u7528Nginx\u5E38\u7528\u51E0\u4E2A\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u542F\u52A8Nginx
<span class="token comment"># /usr/local/nginx/sbin/nginx</span>
// \u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u6709\u9519\u8BEF
<span class="token comment"># /usr/local/nginx/sbin/nginx -t</span>
// \u67E5\u770Bnginx\u7684\u7248\u672C
<span class="token comment"># /usr/local/nginx/sbin/nginx -v  </span>
// \u67E5\u770BNginx\u7248\u672C\u548C\u7F16\u8BD1\u5B89\u88C5\u65F6\u7684\u7F16\u8BD1\u53C2\u6570
<span class="token comment"># /usr/local/nginx/sbin/nginx -V </span>
// \u5F3A\u5236\u505C\u6B62Nginx\u670D\u52A1
<span class="token comment"># /usr/local/nginx/sbin/nginx -s stop </span>
// \u4F18\u96C5\u5730\u505C\u6B62Nginx\u670D\u52A1\uFF08\u5373\u5904\u7406\u5B8C\u6240\u6709\u8BF7\u6C42\u540E\u518D\u505C\u6B62\u670D\u52A1\uFF09
<span class="token comment"># /usr/local/nginx/sbin/nginx -s quit  </span>
// \u91CD\u65B0\u52A0\u8F7DNginx\u914D\u7F6E\u6587\u4EF6\uFF0C\u7136\u540E\u4EE5\u4F18\u96C5\u7684\u65B9\u5F0F\u91CD\u542FNginx
<span class="token comment"># /usr/local/nginx/sbin/nginx -s reload    </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6DFB\u52A0\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6A21\u5757" aria-hidden="true">#</a> \u6DFB\u52A0\u6A21\u5757</h4><p>\u6709\u4E9B\u65F6\u95F4\u6700\u521D\u7684\u5B89\u88C5\u603B\u662F\u4E0D\u5C3D\u4EBA\u610F\uFF0C\u6BD4\u5982\u6211\u8FDB\u573A\u5B89\u88C5\u7684\u662F\u5C06\u5FD8\u8BB0\u5B89\u88C5--with-http_stub_status_module\u6A21\u5757\u3002\u800C\u7F51\u7AD9\u53C8\u4E0D\u80FD\u505C\uFF0C\u8FD9\u662F\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u91CD\u65B0\u7F16\u8BD1\u5E76\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u91CD\u65B0configure \u5C06\u81EA\u5DF1\u9700\u8981\u7684\u6A21\u5757\u6DFB\u52A0\u8FDB\u53BB</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/openresty --with-luajit --with-http_v2_module --with-http_realip_module --with-http_sub_module --with-http_gunzip_module  --with-http_gzip_static_module  --with-pcre --with-http_stub_status_module

<span class="token comment"># make\u6216\u8005gmake</span>

<span class="token comment"># \u5907\u4EFD\u539F\u6709\u7684nginx</span>
$ <span class="token function">cp</span> sbin/nginx sbin/nginx.old

<span class="token comment"># \u5C06\u65B0\u7F16\u8BD1\u7684nginx\u590D\u5236\u8FC7\u6765nginx\u5728objs\u4E0B openresty\u5728build/nginx-1.11.2/objs/nginx\u4E0B</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-f</span>  objs/nginx sbin/nginx

<span class="token comment"># \u68C0\u6D4B\u5E76\u5E73\u6ED1\u52A0\u8F7D</span>
$ sbin/nginx <span class="token parameter variable">-V</span>
$ sbin/nginx <span class="token parameter variable">-t</span> 
$ sbin/nginx <span class="token parameter variable">-s</span> reload

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#\u76D1\u63A7" aria-hidden="true">#</a> \u76D1\u63A7</h4><p>\u5175\u672A\u52A8\u7CAE\u8349\u5148\u884C\uFF0C\u5728\u6B63\u5F0F\u8FD0\u884C\u4E4B\u524D\u5145\u5206\u7684\u638C\u63E1\u5404\u79CD\u6307\u6807\u76F8\u5F53\u91CD\u8981\uFF0C\u5728nginx\u4E2D\u638C\u63E1\u57FA\u672C\u7684\u4FE1\u606F\u53EF\u4EE5\u6DFB\u52A0http_stub_status\u6A21\u5757</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u8BE5\u6A21\u5757</span>
$ .configure --with-http_stub_status_module

<span class="token comment"># \u5728conf\u4E2D\u914D\u7F6E</span>
location /nginx_status <span class="token punctuation">{</span>
    stub_status on<span class="token punctuation">;</span>
    access_log off<span class="token punctuation">;</span>
    allow <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span> //\u672C\u673A\u6D4B\u8BD5\u9700\u6DFB\u52A0\u6B64\u6761\u8BB0\u5F55
    deny <span class="token number">192.168</span>.1.1<span class="token punctuation">;</span>
    allow <span class="token number">192.168</span>.1.0/24<span class="token punctuation">;</span> //\u5141\u8BB8192.168.1.0/24\u8BBF\u95EE\uFF0C\u62D2\u7EDD192.168.1.1\u8BBF\u95EE
    allow <span class="token number">10.1</span>.1.0/16<span class="token punctuation">;</span>
    allow <span class="token number">2620</span>:100:e000::8001<span class="token punctuation">;</span> //\u6B64\u5904\u662Fipv6\u7684\u5730\u5740
    deny all<span class="token punctuation">;</span> //\u9664\u4E86\u4E0A\u8FF0\u5730\u5740\uFF0C\u62D2\u7EDD\u6240\u6709\u8FDE\u63A5\u3002\u5199allow\uFF0Cdeny\u65F6\uFF0C\u6CE8\u610F\u987A\u5E8F
<span class="token punctuation">}</span>

<span class="token comment"># \u52A0\u8F7D\u914D\u7F6E</span>
/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span>  //\u6D4B\u8BD5\u914D\u7F6E\u662F\u5426\u6B63\u786E
/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u8BBF\u95EExxx/nginx_status\u5373\u53EF\u770B\u5230\u8BE5\u5982\u4E0B\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Active connections: <span class="token number">3</span> 
server accepts handled requests
 <span class="token number">10</span> <span class="token number">10</span> <span class="token number">6</span> 
Reading: <span class="token number">0</span> Writing: <span class="token number">1</span> Waiting: <span class="token number">0</span> 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u80FD\u7531\u4E8Enginx\u7684\u7248\u672C\u4E0D\u540C\u5176\u5904\u7406\u8FDE\u63A5\u548C\u8BF7\u6C42\u7684\u5DE5\u4F5C\u65B9\u5F0F\u4E0A\u7A0D\u5FAE\u6709\u4E9B\u5DEE\u5F02\uFF0C\u5177\u4F53\u7684\u6A21\u5F0F\u8BF7\u67E5\u9605\u5B98\u65B9\u6587\u6863\uFF0C\u4F46\u603B\u7684\u6765\u8BF4\u5176\u79BB\u4E0D\u5F00\u5982\u4E0B\u51E0\u4E2A\u72B6\u6001:</p><p>active connections \u2014 \u5BF9\u540E\u7AEF\u53D1\u8D77\u7684\u6D3B\u52A8\u8FDE\u63A5\u6570 server accepts handled requests \u2014 nginx \u603B\u5171\u5904\u7406\u4E86 16630948 \u4E2A\u8FDE\u63A5, \u6210\u529F\u521B\u5EFA 16630948 \u6B21\u63E1\u624B (\u8BC1\u660E\u4E2D\u95F4\u6CA1\u6709\u5931\u8D25\u7684), \u603B\u5171\u5904\u7406\u4E86 31070465 \u4E2A\u8BF7\u6C42 (\u5E73\u5747\u6BCF\u6B21\u63E1\u624B\u5904\u7406\u4E86 1.8\u4E2A\u6570\u636E\u8BF7\u6C42) reading \u2014 nginx \u8BFB\u53D6\u5230\u5BA2\u6237\u7AEF\u7684Header\u4FE1\u606F\u6570 writing \u2014 nginx \u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u7684Header\u4FE1\u606F\u6570 waiting \u2014 \u5F00\u542F keep-alive \u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u503C\u7B49\u4E8E active \u2013 (reading + writing)\uFF0C\u610F\u601D\u5C31\u662FNginx\u8BF4\u5DF2\u7ECF\u5904\u7406\u5B8C\u6B63\u5728\u7B49\u5019\u4E0B\u4E00\u6B21\u8BF7\u6C42\u6307\u4EE4\u7684\u9A7B\u7559\u8FDE\u63A5\u3002</p><p>\u9664\u4E86http_stub_status_module\u6A21\u5757\u5916\uFF0C\u5F53\u7136\u5E38\u89C1\u7684Nagios\u3001Zabbix\u7B49\u90FD\u662F\u53EF\u4EE5\u5F88\u597D\u7684\u76D1\u63A7Nginx\u670D\u52A1\uFF0C\u4F46\u662F\u6709\u65F6\u5019\u5168\u5BB6\u6876\u7528\u8D77\u6765\u4E0D\u662F\u90A3\u8FB9\u4FBF\u6377\uFF0C\u5F53\u7136\u5982\u679C\u6709\u73B0\u6210\u7684\u5957\u4EF6\u76F4\u63A5\u64B8\u4E0A\u53BB\u5373\u53EF\u3002\u53E6\u5916\u8FD8\u6709\u4E00\u4E9B\u7231\u597D\u8005\u5F00\u53D1\u7684\u5F00\u6E90\u5DE5\u5177\u4E5F\u662F\u76F8\u5F53\u68D2\u7684\u3002</p><h5 id="ngxtop" tabindex="-1"><a class="header-anchor" href="#ngxtop" aria-hidden="true">#</a> ngxtop</h5><p>ngxtop\u4E00\u4E2A\u770B\u4E0A\u53BB\u5C31\u5F88\u773C\u719F\u7684\u547D\u4EE4\u3002<strong>ngxtop</strong> parses your nginx access log and outputs useful, <code>top</code>-like, metrics of your nginx server. So you can tell what is happening with your server in real-time.\u5176\u5730\u5740\u4E3A:</p><p>https://github.com/lebinh/ngxtop</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pip install ngxtop

# \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u8BFB\u53D6/etc/nginx/nginx.conf\u6587\u4EF6
$ ngxtop

# \u5177\u4F53\u7684\u4F7F\u7528\u65B9\u6CD5\u8BF7\u770B\u5B98\u65B9\u6587\u6863

# \u4E00\u4E9B\u5E38\u89C1\u7684\u7528\u6237\u6CD5

# \u67E5\u770B\u5B9E\u65F6\u72B6\u6001
$ ngxto -c /usr/local/openresty/nginx/conf/nginx.conf

# \u8BBF\u95EE\u524D\u51E0\u7684IP
$ ngxtop -c /opt/nginx/conf/nginx.conf top remote_addr

# \u663E\u793A\u72B6\u6001\u7801\u4E3A404\u7684\u8BF7\u6C42
$ ngxtop -i &#39;status == 404&#39; print request status

# \u663E\u793A\u524D\u4E8C\u5341\u8BF7\u6C42\u6B21\u6570\u6700\u9AD8\u7684\u8BF7\u6C42
$ ngxtop -n 20

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="goaccess" tabindex="-1"><a class="header-anchor" href="#goaccess" aria-hidden="true">#</a> GoAccess</h5>`,32),p=n("\u7B80\u5355\u6765\u8BF4\u5462 "),u={href:"https://github.com/allinurl/goaccess",target:"_blank",rel:"noopener noreferrer"},v=n("GoAccess"),m=n(" \u662F\u4E00\u4E2A\u4E13\u95E8\u7528\u6765\u5206\u6790\u65E5\u5FD7\u7684\u5DE5\u5177\uFF0C\u65E2\u53EF\u4EE5\u5728\u7EC8\u7AEF\u4E2D\u5C55\u793A\u7ED3\u679C\uFF0C\u4E5F\u53EF\u4EE5\u751F\u6210 HTML \u62A5\u8868\u5728\u6D4F\u89C8\u5668\u4E2D\u67E5\u770B\u3002GoAccess \u6700\u5438\u5F15\u4EBA\u7684\u4E00\u70B9\u5C31\u662F\u5B83\u751F\u6210\u7684 HTML \u8DB3\u591F\u70AB\u9177\u3002"),b=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># yum install goaccess</span>
<span class="token comment"># apt-get install goaccess</span>


$ <span class="token function">git</span> clone https://github.com/allinurl/goaccess.git
$ <span class="token builtin class-name">cd</span> goaccess
$ autoreconf <span class="token parameter variable">-fiv</span>
$ ./configure --enable-utf8 --enable-geoip<span class="token operator">=</span>legacy
$ <span class="token function">make</span>
<span class="token comment"># make install</span>

$ goaccess <span class="token parameter variable">-f</span> access.log
// \u9009\u62E9Combined Log Format <span class="token punctuation">(</span>XLF/ELF<span class="token punctuation">)</span> \u8FDB\u5165\u7EDF\u8BA1\u754C\u9762
// \u8BE5\u754C\u9762\u6709\u7528\u662F\u5982\u4E0B\u5FEB\u6377\u952E
F1\u6216h\uFF1A\u5E2E\u52A9
F5 \uFF1A\u5237\u65B0\u4E3B\u754C\u9762
q\uFF1A\u9000\u51FA\u7A0B\u5E8F/\u5F53\u524D\u7A97\u53E3/\u6298\u53E0\u5F53\u524D\u6A21\u5757
o\u6216Enter\uFF1A\u5C55\u5F00\u9009\u4E2D\u7684\u6A21\u5757\u6216\u7A97\u53E3
<span class="token number">0</span>-9\u4EE5\u53CAShift + <span class="token number">0</span>\uFF1A\u5C06\u9009\u4E2D\u7684\u6A21\u5757\u6216\u7A97\u53E3\u6FC0\u6D3B
k\u548Cj\uFF1A\u6A21\u5757\u5185\u90E8\u79FB\u52A8
c\uFF1A\u4FEE\u6539\u914D\u8272
^f\u548C^b\uFF1A\u6A21\u5757\u4E2D\u4E0A\u4E0B\u6EDA\u5C4F
tab shift+tab\uFF1A\u524D\u540E\u5207\u6362\u6A21\u5757
s\uFF1A\u6A21\u5757\u5185\u90E8\u6392\u5E8F\u9009\u62E9
/\uFF1A\u5728\u6240\u6709\u6A21\u5757\u4E2D\u641C\u7D22<span class="token punctuation">(</span>\u652F\u6301\u6B63\u5219<span class="token punctuation">)</span>
n\uFF1A\u627E\u5230\u4E0B\u4E2A\u5339\u914D
g\u548CG\uFF1A\u8DF3\u5230\u7B2C\u4E00\u9879/\u6700\u540E\u4E00\u9879


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u5916\u5982\u679C\u5BF9Nginx\u7684\u65E5\u5FD7\u8FDB\u884C\u5B9A\u5236\u7684\u5316\uFF0C\u5728\u4F7F\u7528goaccess\u524D\u9700\u8981\u914D\u7F6E\u65E5\u5FD7\u6587\u4EF6\u7684\u89E3\u6790\u683C\u5F0F\u3002GoAccess\u7684\u65E5\u5FD7\u89C4\u8303\u53EF\u4EE5\u53EF\u4EE5\u67E5\u9605https://goaccess.io/man#custom-log\u3002\u5F53\u7136\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u5F00\u6E90\u5DE5\u5177\u8FDB\u884C\u8F6C\u6362https://github.com/stockrt/nginx2goaccess</p>`,2);function g(x,h){const a=l("ExternalLinkIcon");return t(),c("div",null,[r,s("p",null,[p,s("a",u,[v,d(a)]),m]),b])}const _=i(o,[["render",g],["__file","nginx-install.html.vue"]]);export{_ as default};
