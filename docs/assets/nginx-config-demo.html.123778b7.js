import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},p=e(`<p>\u670D\u52A1\u53CA\u670D\u52A1\u5668\u8BF4\u660E\uFF1A8\u6838\u7684\u670D\u52A1\u5668\uFF0C\u627F\u8F7D\u7684\u7AD9\u70B9\u6709\u4FE9\u4E2A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#user  webapp;</span>
worker_processes  <span class="token number">8</span><span class="token punctuation">;</span>
worker_cpu_affinity <span class="token number">10000000</span> 01000000 00100000 00010000 00001000 00000100 00000010 00000001<span class="token punctuation">;</span>

worker_rlimit_nofile <span class="token number">10240</span><span class="token punctuation">;</span>
pid   tmp/nginx.pid<span class="token punctuation">;</span>

<span class="token comment"># \u4E8B\u4EF6\u673A\u5236\u914D\u7F6E</span>
events <span class="token punctuation">{</span>
    use epoll<span class="token punctuation">;</span>
    worker_connections  <span class="token number">15000</span><span class="token punctuation">;</span>
    <span class="token comment"># worker\u7684\u5DE5\u4F5C\u65B9\u5F0F</span>
    multi_accept on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u914D\u7F6E\u5168\u5C40\u7684\u9519\u8BEF\u65E5\u5FD7</span>
error_log  logs/error.log<span class="token punctuation">;</span>

http <span class="token punctuation">{</span>
    include      mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	  charset  utf-8<span class="token punctuation">;</span>
	  <span class="token comment"># \u914D\u7F6E\u5168\u5C40\u7684\u65E5\u5FD7\u683C\u5F0F</span>
    log_format  accesslog  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $request_time $body_bytes_sent $upstream_status &#39;</span> 
                      <span class="token string">&#39;$upstream_addr $upstream_response_time &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_CFBundleShortVersionString&quot;&#39;</span><span class="token punctuation">;</span>
	  <span class="token comment"># \u5F00\u542F\u9AD8\u6548\u4F20\u8F93\u6A21\u5F0F</span>
    sendfile        off<span class="token punctuation">;</span>
    tcp_nopush    on<span class="token punctuation">;</span>
    tcp_nodelay    on<span class="token punctuation">;</span>
	  client_header_buffer_size 32k<span class="token punctuation">;</span>
    
    <span class="token comment"># \u4E00\u4E2AHTTP\u4EA7\u751F\u7684TCP\u8FDE\u63A5\u5728\u4F20\u8F93\u73A9\u6700\u540E\u4E00\u4E2A\u54CD\u5E94\u540E\uFF0C\u8FD8\u9700\u8981\u591A\u4E45\u624D\u80FD\u5173\u95ED\u8FDE\u63A5</span>
    <span class="token comment"># \u5EFA\u8BAE\u914D\u7F6E\u4E3A\u7528\u6237\u5E73\u5747\u633A\u4F4F\u672C\u7AD9\u7684\u5E02\u573A</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>
    
    <span class="token comment"># \u5173\u95ED\u670D\u52A1\u5668\u7248\u672C\u53F7\u4FE1\u7BB1</span>
    server_tokens off<span class="token punctuation">;</span>

    open_file_cache    <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">65535</span>      <span class="token assign-left variable">inactive</span><span class="token operator">=</span>20s<span class="token punctuation">;</span>
    open_file_cache_valid      30s<span class="token punctuation">;</span>
    open_file_cache_min_uses    <span class="token number">1</span><span class="token punctuation">;</span>

	  <span class="token comment"># \u5F00\u542Fgzip\u4F20\u8F93</span>
  	<span class="token function">gzip</span>  on<span class="token punctuation">;</span>
    gzip_min_length  <span class="token number">1000</span><span class="token punctuation">;</span>
    gzip_buffers    <span class="token number">4</span> 16k<span class="token punctuation">;</span>
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>
    gzip_types  text/plain application/x-javascript text/css text/javascript  image/jpeg image/gif image/png<span class="token punctuation">;</span>
    gzip_vary  on<span class="token punctuation">;</span>
    gzip_disable        <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span>    

	  <span class="token comment"># HTTP_PROXY\u8BBE\u7F6E</span>
    client_max_body_size    20m<span class="token punctuation">;</span>
    <span class="token comment"># \u7528\u4E8E\u6307\u5B9A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E3B\u4F53\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u5148\u4FDD\u5B58\u5230\u672C\u5730\u518D\u4F20\u7ED9\u7528\u6237</span>
    client_body_buffer_size 500k<span class="token punctuation">;</span>
    <span class="token comment"># \u7981\u6B62\u4F7F\u7528\u4E34\u65F6\u6587\u4EF6</span>
    proxy_max_temp_file_size <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment"># \u4E0E\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4</span>
    proxy_connect_timeout  <span class="token number">60</span><span class="token punctuation">;</span>
    <span class="token comment"># \u8868\u793A\u540E\u7AEF\u670D\u52A1\u5668\u7684\u6570\u636E\u56DE\u4F20\u65F6\u95F4\uFF0C\u5373\u5728\u89C4\u5B9A\u7684\u65F6\u95F4\u5185\u540E\u7AEF\u670D\u52A1\u5668\u5FC5\u987B\u4F20\u5B8C\u6240\u6709\u7684\u6570\u636E\uFF0C\u5426\u5219\u65AD\u5F00\u8FDE\u63A5</span>
    proxy_send_timeout      <span class="token number">60</span><span class="token punctuation">;</span>
    <span class="token comment"># nginx\u4ECE\u540E\u7AEF\u670D\u52A1\u83B7\u53D6\u4FE1\u606F\u7684\u65F6\u95F4\uFF0C\u8FDE\u63A5\u540Enginx\u7B49\u5F85\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u65F6\u95F4\uFF0C</span>
    proxy_read_timeout      <span class="token number">60</span><span class="token punctuation">;</span>
    <span class="token comment"># \u8BBE\u7F6E\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u9ED8\u8BA4\uFF0C\u8BE5\u7F13\u51B2\u533A\u5927\u5C0F\u7B49\u4E8E\u6307\u4EE4proxy_buffers\u820D\u5B50\u7684\u5927\u5C0F</span>
    proxy_buffer_size      128k<span class="token punctuation">;</span>
    <span class="token comment"># \u8BBE\u7F6E\u7F13\u51B2\u533A\u7684\u6570\u91CF\u548C\u5927\u5C0F</span>
    proxy_buffers          <span class="token number">8</span> 128k<span class="token punctuation">;</span>
    <span class="token comment"># \u7528\u6237\u7CFB\u7EDF\u5F88\u5FD9\u662F\u4F7F\u7528\u7684proxy_buffers\u5927\u5C0F\uFF0C\u5B98\u65B9\u63A8\u8350\u7684\u5927\u5C0F\u4E3Aproxy_buffers * 2</span>
    proxy_busy_buffers_size 256k<span class="token punctuation">;</span>
    <span class="token comment"># \u6307\u5B9Aproxy\u7F13\u5B58\u4E34\u65F6\u6587\u4EF6\u7684\u5927\u5C0F</span>
    proxy_temp_file_write_size 1024k<span class="token punctuation">;</span>
 
	  <span class="token comment"># \u5F00\u542F4xx\u548C5xx\u9519\u8BEF\u6D88\u606F\u4F20\u9012</span>
    fastcgi_intercept_errors on<span class="token punctuation">;</span>
    underscores_in_headers on<span class="token punctuation">;</span>    

	  <span class="token comment"># \u914D\u7F6E\u91CD\u539F\u751F\u5DE5\u7A0B\u7684\u8D1F\u8F7D\u5747\u8861</span>
    upstream Client <span class="token punctuation">{</span>
        server <span class="token number">135.191</span>.168.68:9182<span class="token punctuation">;</span>
        server <span class="token number">135.191</span>.168.69:9182<span class="token punctuation">;</span>
        
        check <span class="token assign-left variable">interval</span><span class="token operator">=</span><span class="token number">3000</span> <span class="token assign-left variable">rise</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fall</span><span class="token operator">=</span><span class="token number">5</span> <span class="token assign-left variable">timeout</span><span class="token operator">=</span><span class="token number">1000</span>  <span class="token assign-left variable">type</span><span class="token operator">=</span>http<span class="token punctuation">;</span>
        check_http_send <span class="token string">&quot;GET  /Client  HTTP/1.0<span class="token entity" title="\\r">\\r</span><span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\r">\\r</span><span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">;</span>
        check_http_expect_alive http_2xx http_3xx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

	  <span class="token comment"># \u914D\u7F6EH5\u540E\u7AEF\u7684\u8D1F\u8F7D\u5747\u8861</span>
    upstream ClientH5 <span class="token punctuation">{</span>
        server <span class="token number">135.191</span>.168.68:9183<span class="token punctuation">;</span>
        server <span class="token number">135.191</span>.168.69:9183<span class="token punctuation">;</span>

        check <span class="token assign-left variable">interval</span><span class="token operator">=</span><span class="token number">3000</span> <span class="token assign-left variable">rise</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fall</span><span class="token operator">=</span><span class="token number">5</span> <span class="token assign-left variable">timeout</span><span class="token operator">=</span><span class="token number">1000</span>  <span class="token assign-left variable">type</span><span class="token operator">=</span>http<span class="token punctuation">;</span>
        check_http_send <span class="token string">&quot;GET  /ClientH5  HTTP/1.0<span class="token entity" title="\\r">\\r</span><span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\r">\\r</span><span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">;</span>
        check_http_expect_alive http_2xx http_3xx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># \u8BBE\u7F6E\u53D8\u91CF</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$time_iso8601</span> ~ <span class="token string">&quot;^(\\d{4})-(\\d{2})-(\\d{2})&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">set</span> <span class="token variable">$year</span> <span class="token variable">$1</span><span class="token punctuation">;</span>
        <span class="token builtin class-name">set</span> <span class="token variable">$month</span> <span class="token variable">$2</span><span class="token punctuation">;</span>
        <span class="token builtin class-name">set</span> <span class="token variable">$day</span> <span class="token variable">$3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    

    <span class="token comment"># \u914D\u7F6E\u9759\u6001\u8D44\u6E90\u7F51\u7AD9\u7684\u4FE1\u606F</span>
    server <span class="token punctuation">{</span>
      listen      <span class="token number">80</span><span class="token punctuation">;</span>
      server_name  st.aaabbb.com <span class="token number">127.0</span>.0.1\uFF1B
		
		  <span class="token comment"># \u6DFB\u52A0\u5B89\u5168\u7684HTTP\u5934-\u7CBE\u81F4\u8D44\u6E90\u7C7B\u578B\u63A2\u6D4B</span>
      add_header X-Content-Type-Options <span class="token string">&quot;nosniff&quot;</span>\uFF1B
      add_header X-Frame-Options <span class="token string">&quot;DENY&quot;</span><span class="token punctuation">;</span>
      add_header X-XSS-Protection <span class="token string">&quot;1;mode=block&quot;</span>
      add_header Content-Security-Policy <span class="token string">&quot;default-src &#39;self&#39; https://mp.weixin.qq.com&quot;</span><span class="token punctuation">;</span>
 
      <span class="token comment"># \u6DFB\u52A0\u5206\u5272\u65E5\u5FD7</span>
      access_log  /webapp01/nginxlog/st_access-<span class="token variable">$year</span><span class="token variable">$month</span><span class="token variable">$day</span>.log accesslog<span class="token punctuation">;</span>
      
      <span class="token comment"># \u8BBE\u7F6E\u7F51\u7AD9\u6839\u76EE\u5F55</span>
      root /webapp01/www/static/<span class="token punctuation">;</span>
		
		
      <span class="token comment"># \u7981\u6B62GET\u4EE5\u4E3A\u7684\u6240\u6709\u7684HTTP\u65B9\u6CD5</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_method</span> <span class="token operator">!</span>~* GET<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
        
    <span class="token comment"># \u5F00\u542F\u672C\u5730\u7F13\u5B58/\u5173\u95ED\u672C\u5730\u7F13\u5B58 off; \u5982\u679Croot\u76EE\u5F55\u5728\u672C\u5730\u78C1\u76D8\u53EF\u4EE5\u8003\u8651\u5173\u95ED</span>
		<span class="token comment"># proxy_store on;</span>
		<span class="token comment"># proxy_store_access user:rw group:rw all:rw;</span>
		<span class="token comment"># proxy_temp_path /data/nginx/sttmp/;</span>

		<span class="token comment"># \u9650\u6D41\uFF0C\u9632\u6B62\u88AB\u5355\u4E00\u8D44\u6E90\u5360\u6EE1\u5E26\u5BBD</span>
        location / <span class="token punctuation">{</span>
          limit_rate_after 100k<span class="token punctuation">;</span>
          limit_rate 100k<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
    <span class="token comment"># \u5173\u95ED\u65E0\u610F\u4E49\u7684\u8D44\u6E90\u8BBF\u95EE\u65E5\u5FD7\uFF0C\u5E76\u8BBE\u7F6E\u7F13\u5B58\u6709\u6548\u671F</span>
		location ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>html<span class="token operator">|</span>htm<span class="token operator">|</span>css<span class="token operator">|</span>js<span class="token operator">|</span>ico<span class="token operator">|</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token operator">|</span>woff<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
			etag off<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_filename</span> ~* .*.<span class="token punctuation">(</span>html<span class="token operator">|</span>htm<span class="token operator">|</span>js<span class="token punctuation">)</span>$<span class="token punctuation">)</span><span class="token punctuation">{</span>
                expires -1s<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_filename</span> ~* .*.<span class="token punctuation">(</span>css<span class="token operator">|</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>png<span class="token operator">|</span>jpeg<span class="token operator">|</span>bmp<span class="token operator">|</span><span class="token function">zip</span><span class="token operator">|</span>mp3<span class="token operator">|</span>mp4<span class="token operator">|</span>hs<span class="token operator">|</span>ipa<span class="token punctuation">)</span>$<span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token comment"># \u5173\u95ED\u672A\u627E\u5230\u65E5\u5FD7\u8BB0\u5F55</span>
             	log_not_found off<span class="token punctuation">;</span>
                access_log off<span class="token punctuation">;</span>
                expires 100d<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
    <span class="token comment"># \u5E38\u89C1\u7684\u670D\u52A1\u7AEF\u811A\u672C\u4E0D\u88AB\u5141\u8BB8</span>
    location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>php<span class="token operator">|</span>php5<span class="token operator">|</span>jsp<span class="token operator">|</span>asp<span class="token operator">|</span>aspx<span class="token operator">|</span>py<span class="token operator">|</span><span class="token function">java</span><span class="token operator">|</span>jar<span class="token operator">|</span>class<span class="token operator">|</span>groovy<span class="token operator">|</span>scala<span class="token operator">|</span><span class="token function">sh</span><span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
        deny all<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

		location ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>bak<span class="token operator">|</span><span class="token function">rar</span><span class="token operator">|</span><span class="token function">zip</span><span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
			 <span class="token comment"># \u7981\u6B62bak\uFF0Crar \uFF0Czip\u6587\u4EF6\u8F93\u51FA</span>
			 <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
		<span class="token comment"># \u914D\u7F6E\u76D1\u63A7</span>
		<span class="token comment"># curl -I http://127.0.0.1/ngx_status</span>
        location /ngx_status <span class="token punctuation">{</span>
            stub_status on<span class="token punctuation">;</span>
            access_log off<span class="token punctuation">;</span>
            allow <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
            deny all<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    

    <span class="token punctuation">}</span>

	  <span class="token comment"># \u914D\u7F6Est.aaaccc.com</span>
    server <span class="token punctuation">{</span>
     
        listen        <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  st.aaaccc.com <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
        
	    	<span class="token comment">#\u914D\u7F6E\u5B89\u5168HTTP\u5934</span>
        add_header X-Frame-Options <span class="token string">&quot;DENY&quot;</span><span class="token punctuation">;</span>
        add_header X-Content-Type-Options <span class="token string">&quot;nosniff&quot;</span>
        add_header X-XSS-Protection <span class="token string">&quot;1;mode=block&quot;</span>
        add_header Content-Security-Policy <span class="token string">&quot;default-src &#39;self&#39; https://mp.weixin.qq.com&quot;</span><span class="token punctuation">;</span>
 
		    access_log  /webapp01/nginxlog/h5_access-<span class="token variable">$year</span><span class="token variable">$month</span><span class="token variable">$day</span>.log  accesslog<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_method</span> <span class="token operator">!</span>~* GET<span class="token operator">|</span>POST<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
		    proxy_store off<span class="token punctuation">;</span>
        error_page  <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
    		<span class="token comment"># \u8BBE\u7F6E\u6839\u76EE\u5F55(\u5C06\u9879\u76EE\u7684\u9759\u6001\u8D44\u6E90\u6587\u4EF6\u62BD\u79BB\u51FA\u6765\u90E8\u7F72\u5728\u4E0ENginx\u540C\u5728\u7684\u670D\u52A1\u5668\u4E0A)</span>
        root /webapp01/www/<span class="token punctuation">;</span>
        
        <span class="token comment"># \u8DDF\u76EE\u5F55\u8BBE\u7F6E,\u5E76\u4E14\u8BBE\u7F6E\u663E\u793A</span>
        location / <span class="token punctuation">{</span>
			      limit_rate_after 100k<span class="token punctuation">;</span>
          	limit_rate 100k<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
		    <span class="token comment"># \u5173\u95ED\u9759\u6001\u8D44\u6E90\u7684\u8BBF\u95EE\u65E5\u5FD7\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u7F13\u5B58,\u6CE8\u610F\u6B64\u5904\u4E0D\u5305\u62EChtml\u6587\u4EF6</span>
        location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token operator">|</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>png<span class="token operator">|</span>jpeg<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
			      log_not_found off<span class="token punctuation">;</span>
            access_log off<span class="token punctuation">;</span>
            expires 30d<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
		    <span class="token comment"># \u5E38\u89C1\u7684\u670D\u52A1\u7AEF\u811A\u672C\u4E0D\u88AB\u5141\u8BB8(\u7F51\u7AD9\u5168\u90E8JSON\u5904\u7406\uFF0C\u56E0\u6B64\u4E0D\u9700\u8981\u5982\u4E0B\u7C7B\u578B\u7684\u8BF7\u6C42)</span>
        location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>php<span class="token operator">|</span>php5<span class="token operator">|</span>jsp<span class="token operator">|</span>asp<span class="token operator">|</span>aspx<span class="token operator">|</span>py<span class="token operator">|</span><span class="token function">java</span><span class="token operator">|</span>jar<span class="token operator">|</span>class<span class="token operator">|</span>scala<span class="token operator">|</span><span class="token function">sh</span><span class="token operator">|</span>properies<span class="token operator">|</span>xml<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
            deny all<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        
        <span class="token comment"># \u5C06\u540E\u53F0\u8BF7\u6C42\u8F6C\u53D1\u5230\u540E\u53F0\u670D\u52A1\u5668\u4E0A</span>
		    location ~ ^/qhmccClientH5/.*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>action<span class="token operator">|</span><span class="token keyword">do</span><span class="token operator">|</span>json<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
            <span class="token comment"># \u7528\u4E8E\u6307\u5411\u53CD\u5411\u4EE3\u7406\u7684\u670D\u52A1\u5668\u6C60</span>
            proxy_pass      		http://Client/mccClientWap<span class="token punctuation">;</span>
            <span class="token comment"># \u662F\u5426\u4FEE\u6539\u5E94\u7B54\u5934location\u548Crefresh</span>
            proxy_redirect          off<span class="token punctuation">;</span>
            <span class="token comment"># \u8BBE\u7F6Eip\u4EE5\u4FBF\u4E8E\u540E\u53F0\u670D\u52A1\u80FD\u83B7\u53D6\u8BF7\u6C42\u7684\u771F\u5B9EIP\uFF0C\u4EE5\u53CA\u4EE3\u7406\u8005\u7684IP</span>
            proxy_set_header        Host <span class="token variable">$host</span><span class="token builtin class-name">:</span><span class="token variable">$server_port</span><span class="token punctuation">;</span>
            proxy_set_header        X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_set_header        X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
            <span class="token comment"># \u4F20\u9012useragent</span>
            proxy_set_header		http_user_agent <span class="token variable">$http_user_agent</span><span class="token punctuation">;</span>
            <span class="token comment"># \u662F\u5426\u8BF7\u6C42\u8F6C\u53D1\u5230\u4E0B\u4E00\u53F0\u670D\u52A1\u5668</span>
            proxy_next_upstream error <span class="token function">timeout</span> invalid_header http_500 http_502 http_503 http_504<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

        location /ClientH5 <span class="token punctuation">{</span>
            proxy_pass      		http://ClientH5/mccClientH5<span class="token punctuation">;</span>
            proxy_redirect          off<span class="token punctuation">;</span>
            proxy_set_header        Host <span class="token variable">$host</span><span class="token builtin class-name">:</span><span class="token variable">$server_port</span><span class="token punctuation">;</span>
            proxy_set_header        X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_set_header        X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
            proxy_next_upstream 	error <span class="token function">timeout</span> invalid_header http_500 http_502 http_503 http_504<span class="token punctuation">;</span>
      	<span class="token punctuation">}</span>

		  location /ngx_status <span class="token punctuation">{</span>
          stub_status on<span class="token punctuation">;</span>
          access_log off<span class="token punctuation">;</span>
          allow <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
          deny all<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[p];function l(o,c){return s(),a("div",null,i)}const r=n(t,[["render",l],["__file","nginx-config-demo.html.vue"]]);export{r as default};
