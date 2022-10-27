import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<h3 id="\u914D\u7F6Enginx" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Enginx" aria-hidden="true">#</a> \u914D\u7F6Enginx</h3><p>Nginx\u7684\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u4E3Aconf\u4E0B\u7684nginx.conf\uFF0C\u8BE5\u914D\u7F6E\u6587\u4EF6\u4E3B\u8981\u6709\u56DB\u90E8\u5206\u7EC4\u6210\uFF0C\u5168\u5C40\u8BBE\u7F6E\u3001\u4E3B\u673A\u8BBE\u7F6E\u3001\u8D1F\u8F7D\u5747\u8861\u5668\u8BBE\u7F6E\u548Clocation\u8BBE\u7F6E\u3002\u4E0B\u9762\u662F\u5176\u6574\u4F53\u7ED3\u6784</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u5168\u5C40\u8BBE\u7F6E

//events\u8BBE\u7F6E

//http \u4E3B\u673A\u8BBE\u7F6E
http<span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  server <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span>
  <span class="token punctuation">..</span>.
  server <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// nginx\u7684worker\u8FDB\u573A\u5141\u8BB8\u7528\u6237\u4EE5\u53CA\u7528\u6237\u7EC4
user nobody nobody

// Nginx\u5F00\u542F\u7684\u8FDB\u7A0B\u6570
worker_processes <span class="token number">1</span><span class="token punctuation">;</span>
worker_processes auto<span class="token punctuation">;</span>	//\u81EA\u52A8
//\u4EE5\u6307\u5B9A\u4E86\u90A3\u4E2ACPU\u5206\u914D\u90A3\u4E2A\u8FDB\u7A0B
//\u6307\u5B9A\u53F34\u4E2Aworker\u8FDB\u7A0B
worker_processes <span class="token number">4</span><span class="token punctuation">;</span>
worker_cpu_addinity 0001 0010 0100 <span class="token number">1000</span>

// \u5B9A\u4E49\u5168\u5C40\u9519\u8BEF\u65E5\u5FD7<span class="token punctuation">[</span>debug<span class="token operator">|</span>info<span class="token operator">|</span>notice<span class="token operator">|</span>warn<span class="token operator">|</span>crit<span class="token punctuation">]</span>
error_log logs/error.log info<span class="token punctuation">;</span>

// \u6307\u5B9A\u8FDB\u7A0BID\u5B58\u50A8\u6587\u4EF6\u4F4D\u7F6E
pid logs/nginx.pid

//\u4E00\u4E2Anginx\u8FDB\u7A0B\u6253\u5F00\u7684\u6700\u591A\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\u76EE\uFF0C\u7406\u8BBA\u503C\u5E94\u8BE5\u662F\u6700\u591A\u6253\u5F00\u6587\u4EF6\u6570\uFF08ulimit -n\uFF09
//\u4E0Enginx\u8FDB\u7A0B\u6570\u76F8\u9664\uFF0C\u4F46\u662Fnginx\u5206\u914D\u8BF7\u6C42\u5E76\u4E0D\u662F\u90A3\u4E48\u5747\u5300\uFF0C\u6240\u4EE5\u6700\u597D\u4E0Eulimit -n\u7684\u503C\u4FDD\u6301\u4E00\u81F4\u3002
worker_rlimit_nofile <span class="token number">65535</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#####\u4E8B\u4EF6\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>events<span class="token punctuation">{</span>
  // use <span class="token punctuation">[</span> kqueue <span class="token operator">|</span> rtsig <span class="token operator">|</span> epoll <span class="token operator">|</span> /dev/poll <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token operator">|</span> poll <span class="token punctuation">]</span><span class="token punctuation">;</span>
  // epoll\u6A21\u578B\u662FLinux <span class="token number">2.6</span>\u4EE5\u4E0A\u7248\u672C\u5185\u6838\u4E2D\u7684\u9AD8\u6027\u80FD\u7F51\u7EDCI/O\u6A21\u578B\uFF0C
  // \u5982\u679C\u8DD1\u5728FreeBSD\u4E0A\u9762\uFF0C\u5C31\u7528kqueue\u6A21\u578B\u3002
  use epoll<span class="token punctuation">;</span>
  
  // \u6BCF\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u5904\u7406\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u7406\u8BBA\u4E0A\u6BCF\u53F0nginx\u670D\u52A1\u5668\u7684\u6700\u5927\u8FDE\u63A5\u6570\u4E3A
  //worker_processes*worker_connections\u3002
  //\u7406\u8BBA\u503C\uFF1Aworker_rlimit_nofile/worker_processes
  //\u6CE8\u610F\uFF1A\u6700\u5927\u5BA2\u6237\u6570\u4E5F\u7531\u7CFB\u7EDF\u7684\u53EF\u7528socket\u8FDE\u63A5\u6570\u9650\u5236\uFF08~ 64K\uFF09\uFF0C\u6240\u4EE5\u8BBE\u7F6E\u4E0D\u5207\u5B9E\u9645\u7684\u9AD8\u6CA1\u4EC0\u4E48\u597D\u5904
  worker_connections <span class="token number">10240</span>\uFF1B
  
  //worker\u5DE5\u4F5C\u65B9\u5F0F\uFF1A\u4E32\u884C<span class="token punctuation">(</span>\u4E00\u5B9A\u7A0B\u5EA6\u964D\u4F4E\u8D1F\u8F7D\uFF0C\u4F46\u670D\u52A1\u5668\u541E\u5410\u91CF\u5927\u65F6\uFF0C\u5173\u95ED\u4F7F\u7528\u5E76\u884C\u65B9\u5F0F<span class="token punctuation">)</span>
  multi_accept on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="http\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#http\u53C2\u6570" aria-hidden="true">#</a> http\u53C2\u6570</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//http\u53C2\u6570\u914D\u7F6E\u5728http<span class="token punctuation">{</span><span class="token punctuation">}</span>\u8BED\u53E5\u5757\u4E2D

// \u6587\u4EF6\u6269\u5C55\u540D\u6587\u4EF6\u7C7B\u578B\u6620\u5C04\u8868
include mime.types<span class="token punctuation">;</span>

// \u9ED8\u8BA4\u6587\u4EF6\u7C7B\u578B
default_type application/octet-stream<span class="token punctuation">;</span>

// \u65E5\u5FD7
log_format main <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                     &#39;<span class="token string">&quot;<span class="token variable">$http_user_agent</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$http_x_forwarded_for</span>&quot;</span><span class="token punctuation">;</span>
    
// \u65E5\u5FD7\u8DEF\u5F84
access_log logs/access.log main<span class="token punctuation">;</span>
// \u53EA\u8BB0\u5F55\u4E25\u91CD\u7684\u9519\u8BEF
error_log logs/error.log crit<span class="token punctuation">;</span>
// \u5173\u95ED\u65E5\u5FD7
access_log off<span class="token punctuation">;</span>

// \u9ED8\u8BA4\u7F16\u7801
<span class="token comment"># charset utf-8;</span>
// \u540D\u5B57hash\u8868\u5927\u5C0F
server_name_hash_bucket_size <span class="token number">128</span><span class="token punctuation">;</span>
// \u5BA2\u6237\u7AEF\u8BF7\u6C42\u5355\u4E2A\u6587\u4EF6\u7684\u6700\u5927\u5B57\u8282
client_max_body_size 8m<span class="token punctuation">;</span>
// \u6307\u5B9A\u6765\u81EA\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u7684headerbuffer\u5927\u5C0F
client_header_buffer_size <span class="token number">32</span><span class="token punctuation">;</span>
// \u6307\u5B9A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E2D\u8F83\u5927\u7684\u6D88\u606F\u7684\u7F13\u5B58\u6700\u5927\u6570\u548C\u5927\u5C0F
large_client_header_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>

// \u5F00\u542F\u9AD8\u6548\u4F20\u8F93\u6A21\u5F0F
sendfile on<span class="token punctuation">;</span>
// \u9632\u6B62\u7F51\u7EDC\u963B\u585E
tcp_nopush on<span class="token punctuation">;</span>
tcp_nodelay on<span class="token punctuation">;</span>
//gzip\u6A21\u5757\u8BBE\u7F6E
//\u5F00\u542Fgizp\u538B\u7F29\u8F93\u51FA
<span class="token function">gzip</span> on<span class="token punctuation">;</span>
//\u6700\u5C0F\u538B\u7F29\u6587\u4EF6\u5927\u5C0F
gzip_min_length 1k<span class="token punctuation">;</span>
//\u538B\u7F29\u7F13\u51B2\u533A
gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span>
//\u538B\u7F29\u7248\u672C
gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span>
//\u538B\u7F29\u767B\u8BB01-9 \u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u538B\u7F29\u6548\u679C\u8D8A\u597D\uFF0C\u8282\u7EA6\u5E26\u5BBD\uFF0C\u4F46CPU\u6D88\u8017\u5927
gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>
//\u524D\u6BB5\u7F13\u5B58\u670D\u52A1\u5668\u7F13\u5B58\u7ECF\u8FC7\u538B\u7F29\u7684\u9875\u9762
gzip_vary on<span class="token punctuation">;</span>

// \u5BA2\u6237\u7AEF\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4,\u5355\u4F4D\u4E3A\u79D2
keepalive_timeout <span class="token number">60</span><span class="token punctuation">;</span>
// \u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u8BFB\u53D6\u8D85\u65F6\u65F6\u95F4
client_header_timer <span class="token number">10</span><span class="token punctuation">;</span>
// \u8BBE\u7F6E\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E3B\u4F53\u8BFB\u53D6\u8D85\u65F6\u65F6\u95F4
client_body_timeout <span class="token number">10</span><span class="token punctuation">;</span>
//\u54CD\u5E94\u6D3B\u52A8\u8D85\u65F6\u65F6\u95F410
send_timeout <span class="token number">10</span><span class="token punctuation">;</span>

// fastCGI\u76F8\u5173
fastcgi_connect_timeout <span class="token number">300</span><span class="token punctuation">;</span>
fastcgi_send_timeout <span class="token number">300</span><span class="token punctuation">;</span>
fastcgi_read_timeout <span class="token number">300</span><span class="token punctuation">;</span>
fastcgi_buffer_size 64k<span class="token punctuation">;</span>
fastcgi_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>
fastcgi_busy_buffers_size 128k<span class="token punctuation">;</span>
fastcgi_temp_file_write_size 128k<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u865A\u62DF\u4E3B\u673A\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u4E3B\u673A\u8BBE\u7F6E" aria-hidden="true">#</a> \u865A\u62DF\u4E3B\u673A\u8BBE\u7F6E</h5><p>\u5229\u7528\u865A\u62DF\u4E3B\u673A\u63D0\u4F9B\u4E86\u5728\u540C\u4E00\u53F0\u670D\u52A1\u5668\u3001\u540C\u4E00\u7EC4Nginx\u8FDB\u573A\u4E0A\u5141\u8BB8\u591A\u4E2A\u7F51\u7AD9\u7684\u529F\u80FD\uFF0C\u4E00\u4E2A\u6700\u7B80\u5316\u7684\u865A\u62DF\u4E3B\u673A\u914D\u7F6E\u4EE3\u7801\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u65B9\u5F0F1\u57FA\u4E8E\u57DF\u540D\u7684\u914D\u7F6E \u63A8\u8350
 server<span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  xxx.com www.xxx.com<span class="token punctuation">;</span>
        charset utf-8<span class="token punctuation">;</span>
		access_log    logs/access_xxxcom.log    main<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
                root   /var/www/wx<span class="token punctuation">;</span>
                index index.html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    server<span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  xxx.club www.xxx.club<span class="token punctuation">;</span>
        charset utf-8<span class="token punctuation">;</span>
		access_log    logs/access_xxxclub.log    main<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
            root   /var/www/gugdc.club<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
            log_not_found off<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 //\u57FA\u4E8E\u865A\u62DFip
    server <span class="token punctuation">{</span>
        listen      <span class="token number">192.168</span>.1.100:80<span class="token punctuation">;</span>
        server_name example.org www.example1.com<span class="token punctuation">;</span>
        root /data/www<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    server <span class="token punctuation">{</span>
        listen      <span class="token number">192.168</span>.1.101:80<span class="token punctuation">;</span>
        server_name example.net www.example2.com<span class="token punctuation">;</span>
        root /data/bbs<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

//\u57FA\u4E8E\u65AD\u5F00\u7684
    server <span class="token punctuation">{</span>
        listen      <span class="token number">8080</span><span class="token punctuation">;</span>
        server_name example.org www.example1.com<span class="token punctuation">;</span>
        root /data/www<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    server <span class="token punctuation">{</span>
        listen      <span class="token number">9090</span><span class="token punctuation">;</span>
        server_name example.net www.example2.com<span class="token punctuation">;</span>
        root /data/bbs<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a> \u6307\u4EE4</h5><p>\u6570\u7EC4\u6307\u4EE4\uFF0C\u5728\u540C\u4E00\u4E0A\u4E0B\u6587\u4E2D\u6DFB\u52A0\u591A\u6761\u6307\u4EE4\uFF0C\u5C06\u6DFB\u52A0\u591A\u4E2A\u503C\uFF0C\u800C\u4E0D\u662F\u5B8C\u5168\u8986\u76D6\uFF0C\u5728\u5B50\u7EA7\u4E2D\u5B9A\u4E49\u7684\u6307\u4EE4\u4F1A\u8986\u76D6\u7236\u7EA7\u7684\u503C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>error_log logs/error.log<span class="token punctuation">;</span>
error_log logs/error_notive.log notice<span class="token punctuation">;</span>
error_log logs/error_debug.log debug<span class="token punctuation">;</span>

server <span class="token punctuation">{</span>
  location /downloads<span class="token punctuation">{</span>
    //\u8986\u76D6\u7236\u7EA7\u7684\u4E0A\u7EBF\u4E2D\u7684\u6307\u4EE4
    error_log logs/error_dowanloads.log<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u884C\u52A8\u6307\u4EE4\uFF0C\u884C\u52A8\u6307\u4EE4\u662F\u6539\u53D8\u4E8B\u60C5\u7684\u6307\u4EE4\uFF0C\u6839\u636E\u6A21\u5757\u7684\u9700\u8981\uFF0C\u5B83\u57FA\u7840\u7684\u884C\u4E3A\u53EF\u80FD\u4F1A\u6709\u6240\u4E0D\u540C\u3002</p><p>rewrite\u6307\u4EE4,\u53EA\u8981\u5339\u914D\u90FD\u4F1A\u6267\u884C\uFF0C\u800Cretrun\u53EA\u80FD\u56DE\u76F4\u63A5\u8FD4\u56DE</p><p>server_name \u6307\u4EE4\uFF0C\u5B83\u53EF\u4EE5\u63A5\u53D7\u591A\u4E2A\u503C\uFF0C\u5B83\u8FD8\u5904\u7406\u901A\u914D\u7B26\u548C\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server_name netguru.co www.netguru.co<span class="token punctuation">;</span> <span class="token comment"># exact match</span>
server_name *.netguru.co<span class="token punctuation">;</span>              <span class="token comment"># wildcard matching</span>
server_name netguru.*<span class="token punctuation">;</span>                 <span class="token comment"># wildcard matching</span>
server_name  ~^<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>*<span class="token punctuation">\\</span>.netguru<span class="token punctuation">\\</span>.co$<span class="token punctuation">;</span>   <span class="token comment"># regexp matching</span>

// \u4E0B\u9762\u4FE9\u4E2A\u6307\u4EE4\u662F\u7B49\u4EF7\u7684
server_name .netguru.co<span class="token punctuation">;</span>
server_name  netguru.co  www.netguru.co  *.netguru.co<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>listen\u6307\u4EE4\uFF0C\u6307\u5B9A\u670D\u52A1\u76D1\u542C\u7684ip\u548C\u7AEF\u53E3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>listen <span class="token number">127.0</span>.0.1:80<span class="token punctuation">;</span>
listen <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>    <span class="token comment"># by default port :80 is used</span>

listen *:81<span class="token punctuation">;</span>
listen <span class="token number">81</span><span class="token punctuation">;</span>           <span class="token comment"># by default all ips are used</span>

listen <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80<span class="token punctuation">;</span>      <span class="token comment"># IPv6 addresses</span>
listen <span class="token punctuation">[</span>::1<span class="token punctuation">]</span><span class="token punctuation">;</span>        <span class="token comment"># IPv6 addresses</span>


listen unix:/var/run/nginx.sock<span class="token punctuation">;</span>
listen localhost:80<span class="token punctuation">;</span>
listen netguru.co:80<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>if\u6307\u4EE4\u548C\u5168\u5C40\u53D8\u91CF</p><p>\u8BED\u6CD5\u4E3Aif(condition){ \u2026 },\u5BF9\u7ED9\u5B9A\u7684\u6761\u4EF6condition\u8FDB\u884C\u5224\u65AD\uFF0C\u5982\u679C\u4E3A\u771F\uFF0C\u5927\u62EC\u53F7\u5185\u7684rewrite\u6307\u4EE4\u5C06\u88AB\u6267\u884C\uFF0Cif\u6761\u4EF6\u53EF\u4EE5\u662F\uFF1A</p><ul><li>\u5F53\u8868\u8FBE\u5F0F\u53EA\u662F\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u5982\u679C\u503C\u4E3A\u7A7A\u6216\u4EFB\u4F55\u4EE50\u5F00\u5934\u7684\u5B57\u7B26\u4E32\u90FD\u4F1A\u5F53\u505Afalse</li><li>\u76F4\u63A5\u6BD4\u8F83\u53D8\u91CF\u548C\u5185\u5BB9\uFF0C\u4F7F\u7528=\u6216!=</li><li>~\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C~* \u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u5339\u914D !~ \u533A\u5206\u5927\u5C0F\u5199\u4E0D\u5339\u914D</li><li>-f \u548C !-f \u7528\u6765\u5224\u65AD\u6587\u4EF6\u662F\u5426\u5B58\u5728</li><li>-d \u548C !-d \u7528\u6765\u5224\u65AD\u76EE\u5F55\u662F\u5426\u5B58\u5728</li><li>-e \u548C !-e \u7528\u6765\u5224\u65AD\u662F\u5426\u5B58\u5728\u6587\u4EF6\u6216\u76EE\u5F55</li><li>-x \u548C !-x\u7528\u6765\u5224\u65AD\u6587\u4EF6\u662F\u5426\u53EF\u6267\u884C</li></ul></li></ul><p>\u5168\u5C40\u53D8\u91CF</p><ul><li><code>$args</code> \uFF1A #\u8FD9\u4E2A\u53D8\u91CF\u7B49\u4E8E\u8BF7\u6C42\u884C\u4E2D\u7684\u53C2\u6570\uFF0C\u540C<code>$query_string</code></li><li><code>$content_length</code> \uFF1A \u8BF7\u6C42\u5934\u4E2D\u7684Content-length\u5B57\u6BB5\u3002</li><li><code>$content_type</code> \uFF1A \u8BF7\u6C42\u5934\u4E2D\u7684Content-Type\u5B57\u6BB5\u3002</li><li><code>$document_root</code> \uFF1A \u5F53\u524D\u8BF7\u6C42\u5728root\u6307\u4EE4\u4E2D\u6307\u5B9A\u7684\u503C\u3002</li><li><code>$host</code> \uFF1A \u8BF7\u6C42\u4E3B\u673A\u5934\u5B57\u6BB5\uFF0C\u5426\u5219\u4E3A\u670D\u52A1\u5668\u540D\u79F0\u3002</li><li><code>$http_user_agent</code> \uFF1A \u5BA2\u6237\u7AEFagent\u4FE1\u606F</li><li><code>$http_cookie</code> \uFF1A \u5BA2\u6237\u7AEFcookie\u4FE1\u606F</li><li><code>$limit_rate</code> \uFF1A \u8FD9\u4E2A\u53D8\u91CF\u53EF\u4EE5\u9650\u5236\u8FDE\u63A5\u901F\u7387\u3002</li><li><code>$request_method</code> \uFF1A \u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u52A8\u4F5C\uFF0C\u901A\u5E38\u4E3AGET\u6216POST\u3002</li><li><code>$remote_addr</code> \uFF1A \u5BA2\u6237\u7AEF\u7684IP\u5730\u5740\u3002</li><li><code>$remote_port</code> \uFF1A \u5BA2\u6237\u7AEF\u7684\u7AEF\u53E3\u3002</li><li><code>$remote_user</code> \uFF1A \u5DF2\u7ECF\u7ECF\u8FC7Auth Basic Module\u9A8C\u8BC1\u7684\u7528\u6237\u540D\u3002</li><li><code>$request_filename</code> \uFF1A \u5F53\u524D\u8BF7\u6C42\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u7531root\u6216alias\u6307\u4EE4\u4E0EURI\u8BF7\u6C42\u751F\u6210\u3002</li><li><code>$scheme</code> \uFF1A HTTP\u65B9\u6CD5\uFF08\u5982http\uFF0Chttps\uFF09\u3002</li><li><code>$server_protocol</code> \uFF1A \u8BF7\u6C42\u4F7F\u7528\u7684\u534F\u8BAE\uFF0C\u901A\u5E38\u662FHTTP/1.0\u6216HTTP/1.1\u3002</li><li><code>$server_addr</code> \uFF1A \u670D\u52A1\u5668\u5730\u5740\uFF0C\u5728\u5B8C\u6210\u4E00\u6B21\u7CFB\u7EDF\u8C03\u7528\u540E\u53EF\u4EE5\u786E\u5B9A\u8FD9\u4E2A\u503C\u3002</li><li><code>$server_name</code> \uFF1A \u670D\u52A1\u5668\u540D\u79F0\u3002</li><li><code>$server_port</code> \uFF1A \u8BF7\u6C42\u5230\u8FBE\u670D\u52A1\u5668\u7684\u7AEF\u53E3\u53F7\u3002</li><li><code>$request_uri</code> \uFF1A \u5305\u542B\u8BF7\u6C42\u53C2\u6570\u7684\u539F\u59CBURI\uFF0C\u4E0D\u5305\u542B\u4E3B\u673A\u540D\uFF0C\u5982\uFF1A\u201D/foo/bar.php?arg=baz\u201D\u3002</li><li><code>$uri</code> \uFF1A \u4E0D\u5E26\u8BF7\u6C42\u53C2\u6570\u7684\u5F53\u524DURI\uFF0C$uri\u4E0D\u5305\u542B\u4E3B\u673A\u540D\uFF0C\u5982\u201D/foo/bar.html\u201D\u3002</li><li><code>$document_uri</code> \uFF1A \u4E0E$uri\u76F8\u540C\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u5982\u679CUA\u4E2D\u5305\u542BMSIE\u5219\u91CD\u5B9A\u5411
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$http_user_agent</span> ~ MSIE<span class="token punctuation">)</span><span class="token punctuation">{</span>
  rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /msis/<span class="token variable">$1</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
//\u5339\u914Dcookie\u5E76\u8BBE\u7F6E\u8FB9<span class="token variable">$id</span>\u7B49\u4E8E\u6B63\u5219\u5F15\u7528\u90E8\u5206
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$http_cookie</span> ~* <span class="token string">&quot;id([^;]+)(?:;|$)&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">set</span> <span class="token variable">$id</span> <span class="token variable">$1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
// \u53EA\u653E\u5FC3HTTP GET<span class="token operator">|</span>POST
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_method</span> <span class="token operator">!</span>~* GET<span class="token operator">|</span>POST<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
// \u53E6\u5916\u53EF\u4EE5\u901A\u8FC7\u53EF\u4EE5\uFF0Cnginx \u6709<span class="token variable">$cookie_x</span> \u53D8\u91CF\uFF0Cx\u662Fcookie\u53D8\u91CF\u540D\uFF0C\u4F8B\u5982sessionid \u5C31\u662F 
//<span class="token variable">$cookie_sessionid</span>.cookie\u53D8\u91CF\u540D\u4E0D\u8BBA\u5927\u5C0F\u5199\uFF0C\u5728nginx\u7684\u53D8\u91CF\u4E2D\u90FD\u662F\u5C0F\u5199\uFF0C
//\u4F8B\u5982JSESSIoNID \uFF0C\u5728nginx\u4E2D\u7684\u5199\u6CD5\u662F<span class="token variable">$cookie_jsessionid</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token variable">$cookie_lang</span> ~* ^.*chinese.*$ <span class="token punctuation">)</span><span class="token punctuation">{</span>
	proxy_pass chs_web<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>root\u3001location\u3001try_files\u6307\u4EE4</p><p>root\u6307\u4EE4\u8BBE\u7F6E\u8BF7\u6C42\u7684\u6839\u76EE\u5F55\uFF0Cnginx\u5C06\u8BF7\u6C42\u8F6C\u5165\u6620\u5C04\u5230\u6587\u4EF6\u7CFB\u7EDF\u4E0A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name .xxx.com<span class="token punctuation">;</span>
  root /var/www/xxx.com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>try_files\u5C1D\u8BD5\u4E0D\u540C\u7684\u8DEF\u5F84\uFF0C\u627E\u5230\u4E00\u4E2A\u8DEF\u5F84\u5C31\u8FD4\u56DE,try_files\u7136\u540E\u5B9A\u4E49\u5339\u914D\u7684\u6240\u6709\u8BF7\u6C42\u7684location,try_files\u5C06\u4E0D\u4F1A\u6267\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  try_files <span class="token variable">$uri</span> /index.html <span class="token operator">=</span><span class="token number">404</span><span class="token punctuation">;</span>

  location / <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>location\u6307\u4EE4\uFF0C\u6839\u636E\u89C4\u5219\u5339\u914D\uFF0C\u9996\u5148\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u5339\u914D\u67E5\u8BE2\uFF0C\u6700\u786E\u5207\u7684\u5339\u914D\u5C06\u88AB\u4F7F\u7528\u3002\u7136\u540E\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5339\u914D\u67E5\u8BE2\u5F00\u59CB\uFF0C\u5339\u914D\u7B2C\u4E00\u4E2A\u7ED3\u679C\u540E\u4F1A\u505C\u6B62\u641C\u7D22\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5C06\u4F7F\u7528\u5B57\u7B26\u4E32\u7684\u641C\u7D22\u7ED3\u679C\uFF0C\u5982\u679C\u5B57\u7B26\u4E32\u548C\u6B63\u5219\u90FD\u5339\u914D\uFF0C\u90A3\u4E48\u6B63\u5219\u4F18\u5148\u7EA7\u8F83\u9AD8\u3002\u5B83\u662Fnginx\u4E2D\u6700\u5F3A\u5927\u4E5F\u662F\u6700\u7ECF\u5E38\u7528\u5230\u7684\u6307\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u683C\u5F0F\uFF1Alocation <span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">|</span>~<span class="token operator">|</span>~*<span class="token operator">|</span>^~<span class="token operator">|</span><span class="token number">2</span><span class="token punctuation">]</span> /url/ <span class="token punctuation">{</span> <span class="token punctuation">..</span>. <span class="token punctuation">}</span>
<span class="token operator">=</span> \u8868\u793A\u7CBE\u786E\u5339\u914D\uFF0C\u5982\u679C\u627E\u5230\uFF0C\u7ACB\u5373\u505C\u6B62\u641C\u7D22\u5E76\u7ACB\u5373\u5904\u7406\u6B64\u8BF7\u6C42
~ \u8868\u793A\u533A\u5206\u5927\u5C0F\u5199\u5339\u914D
~* \u8868\u793A\u4E0D\u533A\u5206\u5927\u5C0F\u5339\u914D
^~ \u8868\u793A\u53EA\u5339\u914D\u5B57\u7B26\u4E32\uFF0C\u4E0D\u67E5\u8BE2\u6B63\u5219\u8868\u8FBE\u5F0F
@ \u6307\u5B9A\u4E00\u4E2A\u547D\u547D\u7684location\uFF0C\u4E00\u822C\u53EA\u7528\u4E8E\u5185\u90E8\u5904\u7406\u8BF7\u6C42\u3002

location <span class="token operator">=</span> / <span class="token punctuation">{</span> //\u503C\u5339\u914D\u5BF9/\u76EE\u5F55\u7684\u67E5\u8BE2<span class="token punctuation">}</span>
location / <span class="token punctuation">{</span> //\u5339\u914D\u4EE5/\u5F00\u59CB\u7684\u67E5\u8BE2,\u5373\u5339\u914D\u6240\u6709\u67E5\u8BE2<span class="token punctuation">}</span>
location ^~  /images/ <span class="token punctuation">{</span>//\u5339\u914D\u4E5F/images/\u5F00\u59CB\u7684\u67E5\u8BE2\uFF0C\u4E0D\u5728\u505A\u6B63\u5219\u8868\u8FBE\u5F0F<span class="token punctuation">}</span>
location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token punctuation">)</span>$ <span class="token punctuation">{</span> //\u5339\u914D\u4EE5gif,jpg\uFF0Cjpeg\u7ED3\u5C3E\u7684\u6587\u4EF6<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>location\u4F18\u5148\u7EA7\uFF0C\u5728nginx\u4E2Dlocation\u914D\u7F6E\u4E2Dlocation\u7684\u987A\u5E8F\u6CA1\u6709\u592A\u5927\u7684\u5173\u5FC3\u3002\u6839location\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\u6709\u5173\uFF0C\u76F8\u540C\u7C7B\u578B\u7684\u8868\u8FBE\u5F0F\uFF0C\u5B57\u7B26\u4E32\u5E38\u7684\u4F1A\u4F18\u5148\u5339\u914D\uFF0C\u5177\u4F53\u7684\u4F18\u5148\u7EA7\u987A\u5E8F\u8BF4\u660E\u3002</p><ol><li>\u7B49\u53F7\u7C7B\u578B\uFF08=\uFF09\u7684\u4F18\u5148\u7EA7\u6700\u9AD8\u3002\u4E00\u65E6\u5339\u914D\u6210\u529F\uFF0C\u5219\u4E0D\u518D\u67E5\u627E\u5176\u4ED6\u5339\u914D\u9879\u3002</li><li>^~\u7C7B\u578B\u8868\u8FBE\u5F0F\u3002\u4E00\u65E6\u5339\u914D\u6210\u529F\uFF0C\u5219\u4E0D\u518D\u67E5\u627E\u5176\u4ED6\u5339\u914D\u9879\u3002</li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u7C7B\u578B\uFF08~ ~*\uFF09\u7684\u4F18\u5148\u7EA7\u6B21\u4E4B\u3002\u5982\u679C\u6709\u591A\u4E2Alocation\u7684\u6B63\u5219\u80FD\u5339\u914D\u7684\u8BDD\uFF0C\u5219\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u6700\u957F\u7684</li><li>\u5E38\u89C4\u5B57\u7B26\u4E32\u5339\u914D\u7C7B\u578B\u3002\u6309\u524D\u7F00\u5339\u914D\u3002</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>location <span class="token operator">=</span> / <span class="token punctuation">{</span>
 <span class="token comment"># \u4EC5\u4EC5\u5339\u914D\u8BF7\u6C42 /</span>
 <span class="token punctuation">..</span>.A
<span class="token punctuation">}</span>
location / <span class="token punctuation">{</span>
 <span class="token comment"># \u5339\u914D\u6240\u6709\u4EE5 / \u5F00\u5934\u7684\u8BF7\u6C42\u3002</span>
 <span class="token comment"># \u4F46\u662F\u5982\u679C\u6709\u66F4\u957F\u7684\u540C\u7C7B\u578B\u7684\u8868\u8FBE\u5F0F\uFF0C\u5219\u9009\u62E9\u66F4\u957F\u7684\u8868\u8FBE\u5F0F\u3002</span>
 <span class="token comment"># \u5982\u679C\u6709\u6B63\u5219\u8868\u8FBE\u5F0F\u53EF\u4EE5\u5339\u914D\uFF0C\u5219\u4F18\u5148\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</span>
 <span class="token punctuation">..</span>.B
<span class="token punctuation">}</span>
location /documents/ <span class="token punctuation">{</span>
 <span class="token comment"># \u5339\u914D\u6240\u6709\u4EE5 /documents/ \u5F00\u5934\u7684\u8BF7\u6C42\u3002</span>
 <span class="token comment"># \u4F46\u662F\u5982\u679C\u6709\u66F4\u957F\u7684\u540C\u7C7B\u578B\u7684\u8868\u8FBE\u5F0F\uFF0C\u5219\u9009\u62E9\u66F4\u957F\u7684\u8868\u8FBE\u5F0F\u3002</span>
 <span class="token comment"># \u5982\u679C\u6709\u6B63\u5219\u8868\u8FBE\u5F0F\u53EF\u4EE5\u5339\u914D\uFF0C\u5219\u4F18\u5148\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</span>
 <span class="token punctuation">..</span>.C
<span class="token punctuation">}</span>
location ^~ /images/ <span class="token punctuation">{</span>
 <span class="token comment"># \u5339\u914D\u6240\u6709\u4EE5 /images/ \u5F00\u5934\u7684\u8868\u8FBE\u5F0F\uFF0C\u5982\u679C\u5339\u914D\u6210\u529F\uFF0C\u5219\u505C\u6B62\u5339\u914D\u67E5\u627E\u3002</span>
 <span class="token comment"># \u6240\u4EE5\uFF0C\u5373\u4FBF\u6709\u7B26\u5408\u7684\u6B63\u5219\u8868\u8FBE\u5F0Flocation\uFF0C\u4E5F\u4E0D\u4F1A\u88AB\u4F7F\u7528</span>
 <span class="token punctuation">..</span>.D
<span class="token punctuation">}</span>
location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
 <span class="token comment"># \u5339\u914D\u6240\u6709\u4EE5 gif jpg jpeg\u7ED3\u5C3E\u7684\u8BF7\u6C42\u3002</span>
 <span class="token comment"># \u4F46\u662F \u4EE5 /images/\u5F00\u5934\u7684\u8BF7\u6C42\uFF0C\u5C06\u4F7F\u7528  D</span>
 <span class="token punctuation">..</span>.E
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u822C\u914D\u7F6E\u5B89\u88C5\u5982\u4E0B\u89C4\u5219\u5339\u914D\u5373\u53EF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u76F4\u63A5\u5339\u914D\u7F51\u7AD9\u6839\uFF0C\u901A\u8FC7\u57DF\u540D\u8BBF\u95EE\u7F51\u7AD9\u9996\u9875\u6BD4\u8F83\u9891\u7E41\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u4F1A\u52A0\u901F\u5904\u7406\uFF0C\u5B98\u7F51\u5982\u662F\u8BF4\u3002</span>
<span class="token comment">#\u8FD9\u91CC\u662F\u76F4\u63A5\u8F6C\u53D1\u7ED9\u540E\u7AEF\u5E94\u7528\u670D\u52A1\u5668\u4E86\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u9759\u6001\u9996\u9875</span>
<span class="token comment"># \u7B2C\u4E00\u4E2A\u5FC5\u9009\u89C4\u5219</span>
location <span class="token operator">=</span> / <span class="token punctuation">{</span>
    proxy_pass http://tomcat:8080/tomcat
<span class="token punctuation">}</span>
<span class="token comment"># \u7B2C\u4E8C\u4E2A\u5FC5\u9009\u89C4\u5219\u662F\u5904\u7406\u9759\u6001\u6587\u4EF6\u8BF7\u6C42\uFF0C\u8FD9\u662Fnginx\u4F5C\u4E3Ahttp\u670D\u52A1\u5668\u7684\u5F3A\u9879</span>
<span class="token comment"># \u6709\u4E24\u79CD\u914D\u7F6E\u6A21\u5F0F\uFF0C\u76EE\u5F55\u5339\u914D\u6216\u540E\u7F00\u5339\u914D,\u4EFB\u9009\u5176\u4E00\u6216\u642D\u914D\u4F7F\u7528</span>
location ^~ /static/ <span class="token punctuation">{</span>
    root /www/static/<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>css<span class="token operator">|</span>js<span class="token operator">|</span>ico<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
    root /www/res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment"># \u7B2C\u4E09\u4E2A\u89C4\u5219\u5C31\u662F\u901A\u7528\u89C4\u5219\uFF0C\u7528\u6765\u8F6C\u53D1\u52A8\u6001\u8BF7\u6C42\u5230\u540E\u7AEF\u5E94\u7528\u670D\u52A1\u5668</span>
<span class="token comment"># \u975E\u9759\u6001\u6587\u4EF6\u8BF7\u6C42\u5C31\u9ED8\u8BA4\u662F\u52A8\u6001\u8BF7\u6C42\uFF0C\u81EA\u5DF1\u6839\u636E\u5B9E\u9645\u628A\u63E1</span>
<span class="token comment"># \u6BD5\u7ADF\u76EE\u524D\u7684\u4E00\u4E9B\u6846\u67B6\u7684\u6D41\u884C\uFF0C\u5E26.php,.jsp\u540E\u7F00\u7684\u60C5\u51B5\u5F88\u5C11\u4E86</span>
location / <span class="token punctuation">{</span>
    proxy_pass http://tomcat:8080/tomcat
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rewrite\u6307\u4EE4\uFF0C\u8BED\u6CD5\u4E3A\u8BED\u6CD5\uFF1Arewrite regex replacement flag\uFF0C\u53EF\u4EE5\u5728server\u3001location\u3001if\u4E2D\u4F7F\u7528\uFF0C\u8BE5\u6307\u4EE4\u6839\u636E\u8868\u8FBE\u5F0F\u6765\u91CD\u5B9A\u5411URI\uFF0C\u6216\u8005\u4FEE\u6539\u5B57\u7B26\u4E32\u3002flag\u6807\u8BB0\u6709</p><ul><li>last\u76F8\u5F53\u4E8EApache\u91CC\u7684[L]\u6807\u8BB0\uFF0C\u8868\u793A\u5B8C\u6210rewrite</li><li>break\u7EC8\u6B62\u5339\u914D, \u4E0D\u518D\u5339\u914D\u540E\u9762\u7684\u89C4\u5219</li><li>redirect\u8FD4\u56DE302\u4E34\u65F6\u91CD\u5B9A\u5411 \u5730\u5740\u680F\u4F1A\u663E\u793A\u8DF3\u8F6C\u540E\u7684\u5730\u5740</li><li>permanent\u8FD4\u56DE301\u6C38\u4E45\u91CD\u5B9A\u5411 \u5730\u5740\u680F\u4F1A\u663E\u793A\u8DF3\u8F6C\u540E\u7684\u5730\u5740</li></ul><p>\u5B9E\u4F8B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u5C06ww\u6211\u51B2\u5B9A\u4E0B\u5230http://
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$host</span> ~* www<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>.*<span class="token punctuation">))</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">set</span> <span class="token variable">$host_without_www</span> <span class="token variable">$1</span><span class="token punctuation">;</span>
  rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ http://<span class="token variable">$host_without_www</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
//\u76EE\u5F55\u4E0D\u5B58\u5728\u65F6\u51B2\u9876\u5411\u5230\u67D0\u4E2Ahtml\u6587\u4EF6
<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span>-e <span class="token variable">$request_filename</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
  rewrite ^/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ <span class="token number">404</span>.html last<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
//\u5C06\u8BBF\u95EE/b/\u7684\u8BF7\u6C42\u8DF3\u8F6C\u5230bbs\u76EE\u5F55\u4E0A
rewrite ^/b/?$ /bbs permanent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u53CD\u5411\u4EE3\u7406\u4E0E\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u4EE3\u7406\u4E0E\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> \u53CD\u5411\u4EE3\u7406\u4E0E\u8D1F\u8F7D\u5747\u8861</h5><p>\u53CD\u5411\u4EE3\u7406\uFF08Reverse Proxy\uFF09\u65B9\u5F0F\u662F\u6307\u4EE5\u4EE3\u7406\u670D\u52A1\u5668\u6765\u63A5\u53D7Internet\u4E0A\u7684\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u7136\u540E\u5C06\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u5185\u90E8\u7F51\u7EDC\u4E0A\u7684\u670D\u52A1\u5668\uFF0C\u5E76\u5C06\u4ECE\u670D\u52A1\u5668\u4E0A\u5F97\u5230\u7684\u7ED3\u679C\u8FD4\u56DE\u7ED9Internet\u4E0A\u8BF7\u6C42\u8FDE\u63A5\u7684\u5BA2\u6237\u7AEF\uFF0C\u6B64\u65F6\u4EE3\u7406\u670D\u52A1\u5668\u5BF9\u5916\u5C31\u8868\u73B0\u4E3A\u4E00\u4E2A\u670D\u52A1\u5668\u3002\u6B63\u5411\u4EE3\u7406\u6307\u7684\u662F\uFF0C\u4E00\u4E2A\u4F4D\u4E8E\u5BA2\u6237\u7AEF\u548C\u539F\u59CB\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u670D\u52A1\u5668\uFF0C\u4E3A\u4E86\u4ECE\u539F\u59CB\u670D\u52A1\u5668\u53D6\u5F97\u5185\u5BB9\uFF0C\u5BA2\u6237\u7AEF\u5411\u4EE3\u7406\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\u5E76\u6307\u5B9A\u76EE\u6807(\u539F\u59CB\u670D\u52A1\u5668)\uFF0C\u7136\u540E\u4EE3\u7406\u5411\u539F\u59CB\u670D\u52A1\u5668\u8F6C\u4EA4\u8BF7\u6C42\u5E76\u5C06\u83B7\u5F97\u7684\u5185\u5BB9\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002\u5176\u5B9E\u8BF4\u767D\u4E86\u6B63\u5411\u4EE3\u7406\u5C31\u662Fnginx\u5145\u5F53\u5BA2\u6237\u7AEF\u7684\u89D2\u8272\uFF0C\u800C\u53CD\u5411\u4EE3\u7406nginx\u5145\u5F53\u670D\u52A1\u5668\u7684\u89D2\u8272\u3002</p><p>Nginx\u5E38\u5E38\u88AB\u7528\u4E8E\u901A\u8FC7\u53CD\u5411\u4EE3\u7406\u6765\u4F7F\u7528\uFF0C\u5305\u62EC\u52A8\u9759\u5206\u79BB\u548C\u8D1F\u8F7D\u5747\u8861\u3002\u90FD\u662F\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u5B9E\u73B0\u7684\u3002\u914D\u7F6E\u53CD\u5411\u4EE3\u7406\u4E00\u822C\u5982\u4E0B</p><p>http://www.nginx.cn/doc/standard/httpproxy.html</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u5728http\u8282\u70B9\u4E0B\u914D\u7F6E\u4EE3\u7406
upstream xxxs<span class="token punctuation">{</span>
  server <span class="token number">127.0</span>.0.1:8080<span class="token punctuation">;</span>
  server <span class="token number">127.0</span>.0.1:9090<span class="token punctuation">;</span>
  server <span class="token number">127.0</span>.0.1:9001 down<span class="token punctuation">;</span>  //down\u8868\u793A\u5355\u524D\u7684server\u6682\u65F6\u4E0D\u53C2\u4E0E\u8D1F\u8F7D.
  server <span class="token number">127.0</span>.0.1:9002 backup<span class="token punctuation">;</span> // \u5176\u5B83\u6240\u6709\u7684\u975Ebackup\u673A\u5668down\u6216\u8005\u5FD9\u7684\u65F6\u5019
  server <span class="token number">127.0</span>.0.1:9003 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span> //\u8D1F\u8F7D\u6743\u91CD
  server <span class="token number">127.0</span>.0.1:9004 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>60s<span class="token punctuation">;</span>   //max_fails\u6B21\u5931\u8D25\u540E\uFF0C\u6682\u505C\u7684\u65F6\u95F4
<span class="token punctuation">}</span>
//\u5728server\u7684location\u4E0B\u914D\u7F6E
location / <span class="token punctuation">{</span>
	proxy_pass_header Server<span class="token punctuation">;</span>
    proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header X-Scheme <span class="token variable">$scheme</span><span class="token punctuation">;</span>
    proxy_pass http://tomcats<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nginx\u652F\u6301\u5982\u4E0B\u51E0\u79CD\u65B9\u5F0F\u7684\u8D1F\u8F7D\u5747\u8861\u7B56\u7565</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u8F6E\u8BE2 \u6839\u636E\u6BCF\u4E2Aserver\u7684\u6743\u91CD\u503C\u6765\u8F6E\u6D41\u53D1\u9001\u8BF7\u6C42,\u9ED8\u8BA4\u7684\u6743\u91CD\u4E3A1
upstream example <span class="token punctuation">{</span>
  server www1.example.com<span class="token punctuation">;</span>
  server www2.example.com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
upstream example2 <span class="token punctuation">{</span>
  server www1.example.com <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
  server www2.example.com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

//\u6700\u5C11\u8FDE\u63A5\u6570
upstream example3 <span class="token punctuation">{</span>
	least_conn<span class="token punctuation">;</span>
	server www1.example.com<span class="token punctuation">;</span>
	server www2.example.com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

//\u6700\u5C11\u5EF6\u65F6
//\u628A\u8BF7\u6C42\u53D1\u9001\u7ED9\u8FDE\u63A5\u5EF6\u65F6\u6700\u5C0F\u7684\u90A3\u53F0\u670D\u52A1\u5668\uFF0C\u5EF6\u65F6\u7684\u8BA1\u7B97\u65B9\u5F0F\u6709\u4FE9\u79CD:
//header - \u4ECEserver\u63A5\u6536\u5230\u7B2C\u4E00\u4E2Abyte\u7684\u65F6\u95F4
//last_byte - \u4ECEserver\u63A5\u6536\u5230\u5168\u90E8\u54CD\u5E94\u7684\u65F6\u95F4
upstream example4 <span class="token punctuation">{</span>
  least_time header<span class="token punctuation">;</span>
  server www1.example.com<span class="token punctuation">;</span>
  server www2.example.com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

//ip <span class="token builtin class-name">hash</span>
//\u6839\u636E\u7528ip\u8BA1\u7B97\u51FA\u4E00\u4E2Ahash\u503C\uFF0C\u5E76\u8BB0\u5F55\u4E0B\u6765\uFF0C\u4EE5\u540E\u76F8\u540C\u7684hash\u90FD\u53D1\u9001\u5230\u540C\u4E00\u53F0server\u4E0A
upstream example5 <span class="token punctuation">{</span>
  ip_hash<span class="token punctuation">;</span>
  server www1.example.com<span class="token punctuation">;</span>
  server www2.example.com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

// \u901A\u7528hash
// \u5BF9\u7528\u6237\u6307\u5B9A\u7684key\u8FDB\u884Chash\u8BA1\u7B97\uFF0C\u53EF\u4EE5\u6307\u5B9A\u6587\u672C\u3001\u53D8\u91CF\u3001\u6216\u8005\u7EC4\u5408
upstream example6 <span class="token punctuation">{</span>
  <span class="token builtin class-name">hash</span> <span class="token variable">$request_uri</span> consistent<span class="token punctuation">;</span>
  server www1.example.com<span class="token punctuation">;</span>
  server www2.example.com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u65E5\u5FD7\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u914D\u7F6E" aria-hidden="true">#</a> \u65E5\u5FD7\u914D\u7F6E</h5><p>\u65E5\u5FD7\u5BF9\u4E8E\u7EDF\u8BA1\u6392\u9519\u975E\u5E38\u6709\u5229\uFF0CNginx\u6709\u4E00\u4E2A\u975E\u5E38\u7075\u6D3B\u7684\u65E5\u5FD7\u8BB0\u5F55\u6A21\u5F0F\uFF0C\u6BCF\u4E2A\u7EA7\u522B\u7684\u914D\u7F6E\u53EF\u4EE5\u6709\u5404\u81EA\u72EC\u7ACB\u7684\u8BBF\u95EE\u65E5\u5FD7\uFF0C\u65E5\u5FD7\u683C\u5F0F\u901A\u8FC7log_format\u547D\u4EE4\u6765\u5B9A\u4E49\uFF0Cngx_http_log_module\u662F\u6765\u5B9A\u4E49\u8BF7\u6C42\u65E5\u5FD7\u683C\u5F0F\u7684\u3002</p><p>access_log\u6307\u4EE4\u662F\u7528\u6765\u8BB0\u5F55\u8BBF\u95EE\u8BB0\u5F55\u7684\uFF0C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u8BED\u6CD5:
	access_log path <span class="token punctuation">[</span>format<span class="token punctuation">[</span>buffer<span class="token operator">=</span>size<span class="token punctuation">[</span>flush_time<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	access_log path <span class="token function">format</span> gzip<span class="token punctuation">[</span><span class="token operator">=</span>level<span class="token punctuation">]</span> <span class="token punctuation">[</span>buffer<span class="token operator">=</span>size<span class="token punctuation">]</span><span class="token punctuation">[</span>flush<span class="token operator">=</span>time<span class="token punctuation">]</span><span class="token punctuation">;</span>
	access_log syslog:server<span class="token operator">=</span>address<span class="token punctuation">[</span>,parameter<span class="token operator">=</span>value<span class="token punctuation">]</span><span class="token punctuation">[</span>format<span class="token punctuation">]</span><span class="token punctuation">;</span>
	access_log off<span class="token punctuation">;</span>
\u5B9E\u4F8B:
	// \u9ED8\u8BA4\u7684\u914D\u7F6E\u683C\u5F0F
	access_log /data/logs/nginx-access.log<span class="token punctuation">;</span>
	// \u8BBE\u7F6E\u65E5\u5FD7\u5237\u76D8\u76F8\u5173\u7684\u7B56\u7565
	// \u6BD4\u5982\u8BBE\u7F6Ebuffer\uFF0Cbuffer\u616232k\u624D\u5237\u76D8,\u52A0\u5165buffer\u4E0D\u6EE15s\u5F3A\u5236\u5237\u76D8
	access_log /data/logs/nginx-access.log <span class="token assign-left variable">buffer</span><span class="token operator">=</span>32k <span class="token assign-left variable">flush</span><span class="token operator">=</span>5s<span class="token punctuation">;</span>
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>log_format\u6307\u4EE4\u7528\u6765\u6307\u5B9A\u65E5\u5FD7\u683C\u5F0F\uFF0C\u5982\u4E0B\u7684\u5B9E\u4F8B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u914D\u7F6E\u65E5\u5FD7\u683C\u5F0F
//\u5176\u5B9E\u6B64\u5904\u53EF\u4EE5\u76F4\u63A5\u914D\u7F6E\u6210JSON\u683C\u5F0F\u7684\u7136\u540E\u62BD\u5230ELK\u4E2D\u5373\u53EF
log_format accesslog <span class="token string">&#39;$remote_addr - $remote_user  [$time_local]  &#39;</span>
                                   <span class="token string">&#39; &quot;$request&quot;  $status  $body_bytes_sent  &#39;</span>
                                   <span class="token string">&#39; &quot;$http_referer&quot;  &quot;$http_user_agent&quot; &#39;</span><span class="token punctuation">;</span>
                                   
// \u5F53nginx\u5904\u4E8EF5<span class="token punctuation">\\</span>squid\u7B49\u4E4B\u540E\u7684\u67B6\u6784\u53EF\u80FD\u9700\u8981\u83B7\u53D6\u7528\u6237\u7684\u771F\u5B9Eip
log_format  porxy  <span class="token string">&#39;$http_x_forwarded_for - $remote_user  [$time_local]  &#39;</span>
                             <span class="token string">&#39; &quot;$request&quot;  $status $body_bytes_sent &#39;</span>
                             <span class="token string">&#39; &quot;$http_referer&quot;  &quot;$http_user_agent&quot; &#39;</span><span class="token punctuation">;</span>
                             
// \u65E5\u5FD7\u683C\u5F0F\u5141\u8BB8\u5305\u542B\u7684\u53D8\u91CF
<span class="token variable">$remote_addr</span>, <span class="token variable">$http_x_forwarded_for</span>\uFF08\u53CD\u5411\uFF09 \u8BB0\u5F55\u5BA2\u6237\u7AEFIP\u5730\u5740
<span class="token variable">$remote_user</span> \u8BB0\u5F55\u5BA2\u6237\u7AEF\u7528\u6237\u540D\u79F0
<span class="token variable">$request</span> \u8BB0\u5F55\u8BF7\u6C42\u7684URL\u548CHTTP\u534F\u8BAE
<span class="token variable">$status</span> \u8BB0\u5F55\u8BF7\u6C42\u72B6\u6001
<span class="token variable">$body_bytes_sent</span> \u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7684\u5B57\u8282\u6570\uFF0C\u4E0D\u5305\u62EC\u54CD\u5E94\u5934\u7684\u5927\u5C0F\uFF1B \u8BE5\u53D8\u91CF\u4E0EApache\u6A21\u5757mod_log_config\u91CC\u7684\u201C%B\u201D\u53C2\u6570\u517C\u5BB9\u3002
<span class="token variable">$bytes_sent</span> \u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7684\u603B\u5B57\u8282\u6570\u3002
<span class="token variable">$connection</span> \u8FDE\u63A5\u7684\u5E8F\u5217\u53F7\u3002
<span class="token variable">$connection_requests</span> \u5F53\u524D\u901A\u8FC7\u4E00\u4E2A\u8FDE\u63A5\u83B7\u5F97\u7684\u8BF7\u6C42\u6570\u91CF\u3002
<span class="token variable">$msec</span> \u65E5\u5FD7\u5199\u5165\u65F6\u95F4\u3002\u5355\u4F4D\u4E3A\u79D2\uFF0C\u7CBE\u5EA6\u662F\u6BEB\u79D2\u3002
<span class="token variable">$pipe</span> \u5982\u679C\u8BF7\u6C42\u662F\u901A\u8FC7HTTP\u6D41\u6C34\u7EBF<span class="token punctuation">(</span>pipelined<span class="token punctuation">)</span>\u53D1\u9001\uFF0Cpipe\u503C\u4E3A\u201Cp\u201D\uFF0C\u5426\u5219\u4E3A\u201C.\u201D\u3002
<span class="token variable">$http_referer</span> \u8BB0\u5F55\u4ECE\u54EA\u4E2A\u9875\u9762\u94FE\u63A5\u8BBF\u95EE\u8FC7\u6765\u7684
<span class="token variable">$http_user_agent</span> \u8BB0\u5F55\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u76F8\u5173\u4FE1\u606F
<span class="token variable">$request_length</span> \u8BF7\u6C42\u7684\u957F\u5EA6\uFF08\u5305\u62EC\u8BF7\u6C42\u884C\uFF0C\u8BF7\u6C42\u5934\u548C\u8BF7\u6C42\u6B63\u6587\uFF09\u3002
<span class="token variable">$request_time</span> \u8BF7\u6C42\u5904\u7406\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u7CBE\u5EA6\u6BEB\u79D2\uFF1B \u4ECE\u8BFB\u5165\u5BA2\u6237\u7AEF\u7684\u7B2C\u4E00\u4E2A\u5B57\u8282\u5F00\u59CB\uFF0C\u76F4\u5230\u628A\u6700\u540E\u4E00\u4E2A\u5B57\u7B26\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u540E\u8FDB\u884C\u65E5\u5FD7\u5199\u5165\u4E3A\u6B62\u3002
<span class="token variable">$time_iso8601</span> ISO8601\u6807\u51C6\u683C\u5F0F\u4E0B\u7684\u672C\u5730\u65F6\u95F4\u3002
<span class="token variable">$time_local</span> \u901A\u7528\u65E5\u5FD7\u683C\u5F0F\u4E0B\u7684\u672C\u5730\u65F6\u95F4\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>open_log_file_cache</em> \u6307\u4EE4\uFF0C\u5BF9\u4E8E\u6BCF\u4E00\u6761\u65E5\u5FD7\uFF0C\u90FD\u5C06\u662F\u5148\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6\uFF0C\u518D\u5199\u5165\u65E5\u5FD7\uFF0C\u7136\u540E\u5173\u95ED\uFF0C\u53EF\u4EE5\u4F7F\u7528open_log_file_cache\u6765\u8BBE\u7F6E\u65E5\u5FD7\u6587\u4EF6\u7F13\u5B58(\u9ED8\u8BA4\u662Foff)\uFF0C\u683C\u5F0F\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u8BED\u6CD5: open_log_file_cache <span class="token assign-left variable">max</span><span class="token operator">=</span>N <span class="token punctuation">[</span>inactive<span class="token operator">=</span>time<span class="token punctuation">]</span> <span class="token punctuation">[</span>min_uses<span class="token operator">=</span>N<span class="token punctuation">]</span> <span class="token punctuation">[</span>valid<span class="token operator">=</span>time<span class="token punctuation">]</span><span class="token punctuation">;</span>
open_log_file_cache off<span class="token punctuation">;</span>
\u9ED8\u8BA4\u503C: open_log_file_cache off<span class="token punctuation">;</span>
\u914D\u7F6E\u6BB5: http, server, location
max:\u8BBE\u7F6E\u7F13\u5B58\u4E2D\u7684\u6700\u5927\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\u91CF\uFF0C\u5982\u679C\u7F13\u5B58\u88AB\u5360\u6EE1\uFF0C\u91C7\u7528LRU\u7B97\u6CD5\u5C06\u63CF\u8FF0\u7B26\u5173\u95ED\u3002
inactive:\u8BBE\u7F6E\u5B58\u6D3B\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u662F10s
min_uses:\u8BBE\u7F6E\u5728inactive\u65F6\u95F4\u6BB5\u5185\uFF0C\u65E5\u5FD7\u6587\u4EF6\u6700\u5C11\u4F7F\u7528\u591A\u5C11\u6B21\u540E\uFF0C\u8BE5\u65E5\u5FD7\u6587\u4EF6\u63CF\u8FF0\u7B26\u8BB0\u5165\u7F13\u5B58\u4E2D\uFF0C\u9ED8\u8BA4\u662F1\u6B21
valid:\u8BBE\u7F6E\u68C0\u67E5\u9891\u7387\uFF0C\u9ED8\u8BA460s
off\uFF1A\u7981\u7528\u7F13\u5B58

\u5B9E\u4F8B:
open_log_file_cache <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">1000</span> <span class="token assign-left variable">inactive</span><span class="token operator">=</span>20s <span class="token assign-left variable">valid</span><span class="token operator">=</span>1m <span class="token assign-left variable">min_uses</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>log_not_found</em> \u6307\u4EE4\uFF0C\u662F\u5426\u5728error_log\u4E2D\u8BB0\u5F55\u4E0D\u5B58\u5728\u7684\u9519\u8BEF\uFF0C\u6A21\u5F0F\u662F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u8BED\u6CD5: log_not_found on <span class="token operator">|</span> off<span class="token punctuation">;</span>
\u9ED8\u8BA4\u503C: log_not_found on<span class="token punctuation">;</span>
\u914D\u7F6E\u6BB5: http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>error_log</em>\u6307\u4EE4\uFF0C\u7528\u4E8E\u914D\u7F6E\u9519\u8BEF\u65E5\u5FD7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u8BED\u6CD5: error_log <span class="token function">file</span> <span class="token operator">|</span> stderr <span class="token operator">|</span> syslog:server<span class="token operator">=</span>address<span class="token punctuation">[</span>,parameter<span class="token operator">=</span>value<span class="token punctuation">]</span> <span class="token punctuation">[</span>debug <span class="token operator">|</span> info <span class="token operator">|</span> notice <span class="token operator">|</span> warn <span class="token operator">|</span> error <span class="token operator">|</span> crit <span class="token operator">|</span> alert <span class="token operator">|</span> emerg<span class="token punctuation">]</span><span class="token punctuation">;</span>
\u9ED8\u8BA4\u503C: error_log logs/error.log error<span class="token punctuation">;</span>
\u914D\u7F6E\u6BB5: main, http, server, location
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65E5\u5FD7\u5206\u5272\uFF0Cnginx\u7684\u65E5\u5FD7\u6A21\u5F0F\u4E4B\u540E\u5199\u5165\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u6240\u4EE5\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\u4F1A\u4EA7\u751F\u4E00\u4E2A\u5DE8\u5927\u65E0\u6BD4\u7684\u65E5\u5FD7\u6587\u4EF6\uFF0C\u8FD9\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684\uFF0C\u56E0\u6B64\u9700\u8981\u505A\u4E9B\u4EC0\u4E48\uFF0C\u6BD4\u5982\u6309\u5929\u8BB0\u5F55\u65E5\u5FD7\u6587\u4EF6\u3002\u5728nginx\u4E2D\u60F3\u8981\u6309\u5929\u8BB0\u5F55\u65E5\u5FD7\u6587\u4EF6\u6709\u4FE9\u4E2D\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u559C\u597D\u8FDB\u884C\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u65B9\u5F0F\u4E00 \u4E3B\u52A8\u5206\u5272
//\u901A\u8FC7lograted\u89C4\u5219\u6216\u8005\u81EA\u5B9A\u4E49\u811A\u672C\u5C06\u65E5\u5FD7\u6587\u4EF6\u6309\u5929\u8FDB\u884C\u5206\u5272


#!/bin/bash
#\u6B64\u811A\u672C\u7528\u4E8E\u81EA\u52A8\u5206\u5272Nginx\u7684\u65E5\u5FD7\uFF0C\u5305\u62ECaccess.log\u548Cerror.log
#\u6BCF\u592900:00\u6267\u884C\u6B64\u811A\u672C \u5C06\u524D\u4E00\u5929\u7684access.log\u91CD\u547D\u540D\u4E3Aaccess-xxxx-xx-xx.log\u683C\u5F0F\uFF0C\u5E76\u91CD\u65B0\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6
#Nginx\u65E5\u5FD7\u6587\u4EF6\u6240\u5728\u76EE\u5F55
LOG_PATH=/opt/nginx/logs
#\u83B7\u53D6\u6628\u5929\u7684\u65E5\u671F
YESTERDAY=$(date -d &quot;yesterday&quot; +%Y-%m-%d)
#\u83B7\u53D6pid\u6587\u4EF6\u8DEF\u5F84
PID=/var/run/nginx/nginx.pid
#\u5206\u5272\u65E5\u5FD7
mv \${LOG_PATH}access.log \${LOG_PATH}access-\${YESTERDAY}.log
mv \${LOG_PATH}error.log \${LOG_PATH}error-\${YESTERDAY}.log
#\u5411Nginx\u4E3B\u8FDB\u7A0B\u53D1\u9001USR1\u4FE1\u53F7\uFF0C\u91CD\u65B0\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6
kill -USR1 \`cat \${PID}\`
//\u6DFB\u52A0\u5230\u5B9A\u65F6\u4EFB\u52A1\u4E2D
00 00 * * * /bin/bash /opt/nginx/sbin/cut_nginx_log.sh


// \u65B9\u5F0F\u4E8C \u5206\u79BB\u6CD5
// \u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\uFF0C\u6309\u7167\u4E0B\u65B9\u5F0F\u8FDB\u884C\u5206\u79BB\u8BB0\u5F55\u65E5\u5FD7
if ($time_iso8601 ~ &quot;^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})&quot;){
    set $year $1;
    set $month $2;
    set $day $3;
    set $hour $4;
    set $minutes $5;
    set $seconds $6;
}
#\u6309\u5929\u5206\u79BB\u65E5\u5FD7
access_log logs/xxx-access-$year-$month-$day.log;
#\u6309\u5206\u949F\u5206\u79BB\u65E5\u5FD7
access_log logs/xxx-access-$year-$month-$day-$hour-$minutes.log;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u5B89\u5168\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168\u914D\u7F6E" aria-hidden="true">#</a> \u5B89\u5168\u914D\u7F6E</h5><p>\u8981\u60F3\u5B89\u5168\u9996\u5148\u4E0D\u80FD\u4EE5root\u542F\u52A8\u76F8\u5173\u7684\u670D\u52A1\uFF0Cnginx\u540C\u6837\u4E5F\u662F\uFF0C\u7531\u4E8E\u670D\u52A1\u53EF\u80FD\u9700\u898180\u548C443\u7AEF\u53E3\uFF0C\u56E0\u6B64\u9700\u8981root\u6743\u9650\u3002\u5F53\u7136\u5982\u679C\u80FD\u8FD0\u884C1024\u4EE5\u540E\u7684\u4EFB\u4F55\u7AEF\u53E3\u4E0A\u76F4\u63A5\u4E5F\u975Eroot\u7684\u65B9\u5F0F\u542F\u52A8\u5373\u53EF\u3002\u5728\u975E\u8981\u752880\u7AEF\u53E3\u4E0B\uFF0C\u5E38\u89C1\u7684\u65B9\u6848\u662F+s\u8FD0\u884C\uFF0C\uFF08\u4EE5\u666E\u901A\u7528\u6237\u542F\u52A8nginx\uFF0C\u4F46nginx\u7684master process\u8FD8\u662F\u4EE5root\u8FD0\u884C\uFF0Cworker process\u4EE5\u975Eroot\u7528\u6237\u6743\u9650\u8FD0\u884C\uFF0C\u56E0\u6B64\u6709\u53EF\u627F\u53D7\u8303\u56F4\u5185\u7684\u98CE\u9669,\u4E0D\u8BF4ZDAY\u7684\u60C5\u51B5\u4E0B\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># chown -R webapp:webaapp nginx</span>
<span class="token comment"># chown root nginx/sbin/nginx</span>
<span class="token comment"># chmod u+s nginx/sbin/nginx</span>
<span class="token comment"># su - webapp</span>
<span class="token comment"># /usr/local/nginx/sbin/nginx -t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E38\u89C1\u7684\u5B89\u5168\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u9690\u85CF\u670D\u52A1\u5668\u7684\u7248\u672C\u53F7\u5728\u914D\u7F6E\u6587\u4EF6\u7684http\u6A21\u5757 \u6DFB\u52A0\u914D\u7F6E
server_tokens off<span class="token punctuation">;</span>

// \u5173\u95ED\u76EE\u5F55\u904D\u5386 \u9ED8\u8BA4\u5C31\u662F\u5173\u95ED\u7684
autoindex off<span class="token punctuation">;</span> 

// \u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u53D8\u91CF\u4E0D\u80FD\u4F7F\u7528\u7528\u6237\u53EF\u63A7\u90E8\u5206 
// <span class="token variable">$uri</span> \u548C  <span class="token variable">$document_uri</span>\u8868\u793A\u7684\u662F\u89E3\u7801\u4EE5\u540E\u7684\u8BF7\u6C42\u8DEF\u5F84\uFF0C\u4E0D\u5E26\u53C2\u6570,
// <span class="token variable">$request_uri</span>\u8868\u793A\u7684\u662F\u5B8C\u6574\u7684URI\uFF08\u6CA1\u6709\u89E3\u7801\uFF09
// \u4E0B\u9762\u7684\u914D\u7F6E\u662F\u4E0D\u5B89\u5168\u7684\u56E0\u4E3A<span class="token variable">$uri</span>\u662F\u53EF\u63A7\u90E8\u5206
location /e <span class="token punctuation">{</span> <span class="token builtin class-name">return</span> <span class="token number">302</span> http://<span class="token variable">$host</span><span class="token variable">$uri</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
location /e <span class="token punctuation">{</span> <span class="token builtin class-name">return</span> <span class="token number">302</span> http://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span><span class="token punctuation">}</span>//\u5B89\u5168\u7684
// \u5982\u679C\u65E5\u5FD7\u6587\u4EF6\u4E2D\u6709\u7528\u6237\u53EF\u63A7\u90E8\u5206\uFF0C\u5904\u7406\u662F\u4E00\u5B9A\u8981\u5C0F\u5FC3\u547D\u4EE4\u6CE8\u5165

// \u53EA\u5141\u8BB8\u6307\u5B9A\u7684HTTP\u65B9\u6CD5\uFF0C\u73B0\u6709\u7684\u4E00\u822C\u5E94\u53EA\u4F1A\u4F7F\u7528\u5230HTTP\u7684GET\u3001POST\u65B9\u6CD5\u800C\u4E0D\u4F1A\u7528\u5230PUT\u7B49\u65B9\u6CD5\uFF0C\u5728\u786E\u5B9A\u540E\u914D\u7F6E
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_method</span> <span class="token operator">!</span>~* GET<span class="token operator">|</span>POST<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

// \u914D\u7F6E\u5B89\u5168HTTP\u5934
add_header X-Frame-Options <span class="token string">&quot;ALLOW-FROM https://mp.weixin.qq.com&quot;</span><span class="token punctuation">;</span>
add_header X-Content-Type-Options <span class="token string">&quot;nosniff&quot;</span>
add_header X-XSS-Protection <span class="token string">&quot;1;mode=block&quot;</span>
add_header Content-Security-Policy <span class="token string">&quot;default-src &#39;self&#39; https://mp.weixin.qq.com&quot;</span>

// \u5408\u7406\u914D\u7F6E\u4E0B\u9762\u7684\u503C\u9632\u6B62DDOS\u548CCC
client_body_timeout   <span class="token number">10</span><span class="token punctuation">;</span>
client_header_timeout <span class="token number">10</span><span class="token punctuation">;</span>
keepalive_timeout     <span class="token number">5</span> <span class="token number">5</span><span class="token punctuation">;</span>
send_timeout          <span class="token number">10</span><span class="token punctuation">;</span>
limit_zone slimits <span class="token variable">$binary_remote_addr</span> 5m<span class="token punctuation">;</span>
limit_conn slimits <span class="token number">5</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u5F00\u542Fhttps\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542Fhttps\u6A21\u5F0F" aria-hidden="true">#</a> \u5F00\u542FHTTPS\u6A21\u5F0F</h5><p>\u8FD9\u4E2A\u793E\u4F1A\u6587\u660E\u4EBA\u592A\u5C11\u4E86\uFF0C\u6240\u6709\u88F8\u5954\u7684HTTP\u4E0D\u518D\u90A3\u4E48\u5B89\u5168\u53EF\u9760\uFF0C\u6B64\u65F6\u5C31\u9700\u8981\u5F00\u542FHTTPS\u6A21\u5F0F\u4E86\uFF0C\u5982\u679C\u53EA\u662F\u60F3\u79C1\u4EBA\u4E4B\u95F4\u5F00\u542FHTTPS\u6A21\u5F0F\uFF0C\u800C\u4E0D\u9700\u8981X\u4FE1\u673A\u6784\u9881\u53D1\u8BC1\u4E66\uFF0C\u53EF\u4EE5\u4F7F\u7528OpenSSL\u8FD9\u6837\u73A9\uFF0C\u751F\u6210\u81EA\u5DF1\u7684\u8BC1\u4E66\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u521B\u5EFA\u670D\u52A1\u5668\u8BC1\u4E66\u5BC6\u94A5\u6587\u4EF6 xxx.com.key \u8F93\u5165\u5BC6\u7801\uFF0C\u786E\u8BA4\u5BC6\u7801\uFF0C\u81EA\u5DF1\u968F\u4FBF\u5B9A\u4E49\uFF0C\u4F46\u662F\u8981\u8BB0\u4F4F
$ openssl genrsa <span class="token parameter variable">-des3</span> <span class="token parameter variable">-out</span> xxx.com.key <span class="token number">1024</span>
// \u521B\u5EFA\u670D\u52A1\u5668\u8BC1\u4E66\u7684\u7533\u8BF7\u6587\u4EF6 xxx.com.csr
$ openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> xxx.com.key <span class="token parameter variable">-out</span> xxx.com .csr
\u8F93\u51FA\u5185\u5BB9\u4E3A\uFF1A
Enter pass phrase <span class="token keyword">for</span> root.key: \u2190 \u8F93\u5165\u524D\u9762\u521B\u5EFA\u7684\u5BC6\u7801 
Country Name <span class="token punctuation">(</span><span class="token number">2</span> letter code<span class="token punctuation">)</span> <span class="token punctuation">[</span>AU<span class="token punctuation">]</span>:CN \u2190 \u56FD\u5BB6\u4EE3\u53F7\uFF0C\u4E2D\u56FD\u8F93\u5165CN 
State or Province Name <span class="token punctuation">(</span>full name<span class="token punctuation">)</span> <span class="token punctuation">[</span>Some-State<span class="token punctuation">]</span>:BeiJing \u2190 \u7701\u7684\u5168\u540D\uFF0C\u62FC\u97F3 
Locality Name <span class="token punctuation">(</span>eg, city<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>:BeiJing \u2190 \u5E02\u7684\u5168\u540D\uFF0C\u62FC\u97F3 
Organization Name <span class="token punctuation">(</span>eg, company<span class="token punctuation">)</span> <span class="token punctuation">[</span>Internet Widgits Pty Ltd<span class="token punctuation">]</span>:MyCompany Corp. \u2190 \u516C\u53F8\u82F1\u6587\u540D 
Organizational Unit Name <span class="token punctuation">(</span>eg, section<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>: \u2190 \u53EF\u4EE5\u4E0D\u8F93\u5165 
Common Name <span class="token punctuation">(</span>eg, YOUR name<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>: \u2190 \u6B64\u65F6\u4E0D\u8F93\u5165 
Email Address <span class="token punctuation">[</span><span class="token punctuation">]</span>:admin@mycompany.com \u2190 \u7535\u5B50\u90AE\u7BB1\uFF0C\u53EF\u968F\u610F\u586B
Please enter the following \u2018extra\u2019 attributes 
to be sent with your certificate request 
A challenge password <span class="token punctuation">[</span><span class="token punctuation">]</span>: \u2190 \u53EF\u4EE5\u4E0D\u8F93\u5165 
An optional company name <span class="token punctuation">[</span><span class="token punctuation">]</span>: \u2190 \u53EF\u4EE5\u4E0D\u8F93\u5165
//\u5907\u4EFD\u4E00\u4EFD\u670D\u52A1\u5668\u5BC6\u94A5\u6587\u4EF6
$ <span class="token function">cp</span> xxx.com.key xxx.com.key.org
//\u53BB\u9664\u6587\u4EF6\u53E3\u4EE4
$ openssl rsa <span class="token parameter variable">-in</span> xxx.com.key.org <span class="token parameter variable">-out</span> xxx.com.key
//\u751F\u6210\u8BC1\u4E66\u6587\u4EF6server.crt
$ openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-days</span> <span class="token number">365</span> <span class="token parameter variable">-in</span> server.csr <span class="token parameter variable">-signkey</span> server.key <span class="token parameter variable">-out</span> server.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u4E86\u8BC1\u4E66\u5C31\u53EF\u4EE5\u5728nginx\u4E2D\u914D\u7F6E\u5E76\u5F00\u542Fhttps\u3002\u914D\u7F6E\u5B8C\u4EE5\u540E\u53EF\u4EE5\u4F7F\u7528\u5728\u7EBF\u76D1\u6D4B\u5DE5\u5177\u8FDB\u884C\u68C0\u6D4B</p><p>https://www.trustasia.com/tools-ssl-state</p><p>https://myssl.com/</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server<span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  0opslab.com<span class="token punctuation">;</span>
        add_header Strict-Transport-Security max-age<span class="token operator">=</span><span class="token number">15768000</span><span class="token punctuation">;</span>
        <span class="token builtin class-name">return</span> <span class="token number">301</span> https://<span class="token variable">$server_name</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
        server_name  0opslab.com<span class="token punctuation">;</span>
        charset utf-8<span class="token punctuation">;</span>

        ssl_certificate     /data/nginx/key/xxx.crt<span class="token punctuation">;</span>
        ssl_certificate_key /data/nginx/key/xxx.key<span class="token punctuation">;</span>
        ssl_session_timeout 5m<span class="token punctuation">;</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>RC4:<span class="token operator">!</span>DHE<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

        add_header X-Frame-Options <span class="token string">&quot;DENY&quot;</span><span class="token punctuation">;</span>
        add_header X-Content-Type-Options <span class="token string">&quot;nosniff&quot;</span><span class="token punctuation">;</span>
        add_header X-XSS-Protection <span class="token string">&quot;1;mode=block&quot;</span><span class="token punctuation">;</span>
        add_header Strict-Transport-Security <span class="token string">&quot;max-age=31536000&quot;</span><span class="token punctuation">;</span>
        
        
        //location
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74),t=[l];function p(c,o){return s(),a("div",null,t)}const r=n(i,[["render",p],["__file","nginx-config.html.vue"]]);export{r as default};
