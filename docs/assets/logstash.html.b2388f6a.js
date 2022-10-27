import{_ as s,o as n,c as a,e as t}from"./app.a667bd71.js";const e={},p=t(`<h2 id="input\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#input\u914D\u7F6E" aria-hidden="true">#</a> input\u914D\u7F6E</h2><h3 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> File</h3><p>logstash\u4F7F\u7528\u4E00\u4E2A\u53EB\u505AFileWatch\u7684Ruby Gem\u5E93\u6765\u76D1\u542C\u6587\u4EF6\u53D8\u5316\u3002\u8FD9\u4E2A\u5E93\u652F\u6301glob\u5C55\u5F00\u6587\u4EF6\u8DEF\u5F84\uFF0C\u800C\u4E14\u4F1A\u4F7F\u7528\u4E00\u4E2A\u53EB\u505A.sincedb\u7684 \u6570\u636E\u5E93\u6587\u4EF6\u5939\u6765\u8DDF\u8E2A\u5457\u76D1\u542C\u6587\u4EF6\u7684\u53D8\u5316\u5305\u62EC\u88AB\u76D1\u542C\u6587\u4EF6\u7684inode,major,number,minor,number\u548Cpos\u9700\u8981\u6CE8\u610F\u7684\u662FFileWath\u53EA\u652F\u6301 \u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u800C\u4E14\u4E0D\u4F1A\u81EA\u52A8\u9012\u5F52\u76EE\u5F55\uFF0C\u6240\u6709\u9700\u8981\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u7684\u65B9\u5F0F\u5199\u660E\u5177\u4F53\u7684\u6587\u4EF6\u3002\u53E6\u5916FileWath\u4E0D\u652F\u6301 path =&gt; &quot;/path/%{yyyy-mm-dd}.log&quot;\u8FD9\u79CD\u6A21\u7CCA\u5339\u914D\u7684\u65B9\u5F0F\u3002\u5982\u679C\u9700\u8981\u7684\u8BDD\u53EF\u4EE5\u8FD9\u6837\u5199 path =&gt; &quot;/path/*.log&quot;\u6216\u8005\u4F7F\u7528 /**/\u8868\u793A\u9012\u5F52\u5168\u90E8\u5B50\u76EE\u5F55\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u914D\u7F6E\u5B9E\u4F8B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>input<span class="token punctuation">{</span>
    file <span class="token punctuation">{</span>
        path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;/var/log/*.log&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;/var/log/message&quot;</span><span class="token punctuation">]</span>
        type <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;system&quot;</span>
        # logstash \u9ED8\u8BA4\u4F1A\u4ECE\u6587\u4EF6\u672B\u5C3E\u5F00\u59CB\u8BFB\u53D6\uFF0C\u5047\u5982\u6709\u539F\u59CB\u6570\u636E\u53EF\u4EE5\u4F7F\u7528beginning\u6307\u5B9A\u4ECE\u5F00\u59CB\u4F4D\u7F6E\u8BFB\u53D6
        start_position <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;beginning&quot;</span>
        # stat_interval \u8BBE\u5B9A\u6BCF\u9694\u591A\u4E45\u68C0\u67E5\u4E00\u6B21\u88AB\u76D1\u542C\u6587\u4EF6\u7684\u72B6\u6001<span class="token punctuation">,</span>\u9ED8\u8BA4\u662F<span class="token number">1</span>\u79D2
        # sincedb_write_interval \u6BCF\u9694\u591A\u4E45\u5199\u4E00\u6B21sincedb\u6587\u4EF6 \u9ED8\u8BA4\u662F<span class="token number">15</span>\u79D2
        # sincedb_path \u6307\u5B9Asincedb\u6587\u4EF6\u7684\u8DEF\u5F84
        # ignore_older \u5728\u6BCF\u6B21\u68C0\u67E5\u6587\u4EF6\u5217\u8868\u7684\u65F6\u5019\uFF0C\u5982\u679C\u4E00\u4E2A\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u8D85\u8FC7\u8FD9\u4E2A\u503C\u5C31\u5FFD\u7565\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u662F\u4E00\u5929
        # close_older \u4E00\u4E2A\u88AB\u76D1\u542C\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u503C\u8FD8\u6CA1\u6709\u66F4\u65B0\u5185\u5BB9\u5C31\u5173\u95ED\u76D1\u542C\u5B83\u7684\u6587\u4EF6\u53E5\u67C4\uFF0C\u9ED8\u8BA4\u662F\u4E00\u5C0F\u65F6
        # exclude \u4E0D\u60F3\u88AB\u76D1\u542C\u7684\u6587\u4EF6\u53EF\u4EE5\u6392\u9664
        # discover_interval \u6BCF\u9694\u591A\u4E45\u53BB\u68C0\u67E5\u4E00\u88AB\u76D1\u542C\u6587\u4EF6\u7684path\u662F\u5426\u6709\u4FE1\u7684\u6587\u4EF6\u3002\u9ED8\u8BA4\u662F<span class="token number">15</span>\u79D2
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
output<span class="token punctuation">{</span>
    stdout <span class="token punctuation">{</span> 
        codec <span class="token operator">=</span><span class="token operator">&gt;</span> rubydebug 
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sdtin" tabindex="-1"><a class="header-anchor" href="#sdtin" aria-hidden="true">#</a> sdtin</h3><p>tdin\u5E94\u8BE5\u662Flogstash\u91CC\u6700\u7B80\u5355\u548C\u57FA\u7840\u7684\u5DEE\u8DDD\u4E86\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u914D\u7F6E\u5B9E\u4F8B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>input <span class="token punctuation">{</span>
	stdin<span class="token punctuation">{</span>
		add_field <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&quot;key&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">}</span>
		codec <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;plain&quot;</span>
		tags <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">]</span>
		type <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;std&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

filter<span class="token punctuation">{</span>
	

<span class="token punctuation">}</span>

output<span class="token punctuation">{</span>
	stdout<span class="token punctuation">{</span>
		codec <span class="token operator">=</span><span class="token operator">&gt;</span> rubydebug 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4EE5\u4E0A\u8FF0\u7684\u914D\u7F6E\u542F\u52A8logstash\u540E\uFF0C\u5728stdin\u4E2D\u8F93\u5165helloworld \u4F1A\u8F93\u51FA\u5982\u4E0B\u4FE1\u606F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;@timestamp&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">16</span><span class="token constant">T04</span><span class="token operator">:</span><span class="token number">39</span><span class="token operator">:</span><span class="token number">23.321</span>Z<span class="token punctuation">,</span>
      <span class="token string">&quot;@version&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;host&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;admin1602130927&quot;</span><span class="token punctuation">,</span>
       <span class="token string">&quot;message&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;hello world\\r&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;type&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;std&quot;</span><span class="token punctuation">,</span>
           <span class="token string">&quot;key&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;tags&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token string">&quot;add&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u5176\u4E2D\u7684type\u548Ctag\u662Flogstash\u4E8B\u4EF6\u4E2D\u4FE9\u4E2A\u7279\u6B8A\u7684\u5B57\u6BB5\uFF0C\u901A\u5E38\u6765\u8BF4\u4F1A\u5728\u8F93\u5165\u533A\u4E2D\u901A\u8FC7type\u6765\u6807\u8BB0\u4E8B\u4EF6\u7C7B\u578B\uFF0C\u800Ctags\u5219\u662F\u5728\u6570\u636E\u5904\u7406 \u8FC7\u7A0B\u4E2D\uFF0C\u7531\u5177\u4F53\u7684\u63D2\u4EF6\u6765\u6DFB\u52A0\u6216\u8005\u5220\u9664\u3002</p><h3 id="syslog" tabindex="-1"><a class="header-anchor" href="#syslog" aria-hidden="true">#</a> syslog</h3><p>syslog\u53EF\u80FD\u662F\u8FD0\u7EF4\u9886\u57DF\u6700\u6D41\u884C\u7684\u6570\u636E\u4F20\u8F93\u534F\u8BAE\u4E86\u3002\u5F53\u60F3\u4ECE\u624B\u80CC\u4E0A\u624B\u673A\u7CFB\u7EDF\u65E5\u5FD7\u7684\u65F6\u5019\uFF0Csyslog\u5E94\u8BE5\u662F\u7B2C\u4E00\u9009\u62E9\uFF0C\u5C24\u5176\u662F\u7F51\u7EDC\u8BBE\u5907\uFF0C\u6BD4\u5982 \u601D\u8003-syslog\u51E0\u4E4E\u662F\u552F\u4E00\u53EF\u884C\u7684\u529E\u6CD5\u3002\u53EF\u4EE5\u901A\u8FC7syslog.conf\uFF0Crsyslog.con\u6216\u8005syslog-ng.conf\u6765\u53D1\u9001\u6570\u636E\u5230logstash\u4E0A\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>input<span class="token punctuation">{</span>
	syslog<span class="token punctuation">{</span>
		port <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;514&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter<span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
output<span class="token punctuation">{</span>
	stdout<span class="token punctuation">{</span>
		codec <span class="token operator">=</span><span class="token operator">&gt;</span> rubydebug 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> tcp</h3><p>\u751F\u6210\u4E0A\u53EF\u80FD\u4F1A\u7528redis\u670D\u52A1\u5668\u6216\u8005\u5176\u4ED6\u7684\u6D88\u606F\u961F\u5217\u7CFB\u7EDF\u6765\u5934\u505A\u5B8Clogstash broker\u7684\u89D2\u8272\u3002\u4E0D\u8FC7logstash\u5176\u5B9E\u4E5F\u6709\u81EA\u5DF1\u7684tcp/udp\u7684 \u63D2\u4EF6\u3002\u5728\u76D1\u542C\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u4E5F\u7B97\u80FD\u7528\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>input <span class="token punctuation">{</span>
	tcp <span class="token punctuation">{</span>
		port <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">10000</span>
		mode <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;server&quot;</span>
		ssl_enable <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter<span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
output<span class="token punctuation">{</span>
	stdout<span class="token punctuation">{</span>
		codec <span class="token operator">=</span><span class="token operator">&gt;</span> rubydebug 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###Codec logstash\u4E0D\u53EA\u662F\u4E00\u4E2Ainput &gt; filter &gt; output\u7684\u6570\u636E\u6D41\uFF0C\u800C\u662F\u4E00\u4E2Ainput-&gt;decode &gt; filter -&gt; encode -&gt; output\u7684\u5B8C \u6574\u6570\u636E\u6D41\uFF0CCodec\u662Fdecode\u548Cencode\u65F6\u95F4\u7684\u7B80\u79F0\u3002codec\u7684\u5F15\u5165\u4F7F\u7528logstash\u53EF\u4EE5\u66F4\u597D\u7684\u4E0E\u5176\u4ED6\u7684\u81EA\u52A8\u5B9A\u4E49\u683C\u5F0F\u7684\u8FD0\u7EF4\u4EA7\u54C1\u5171\u4EAB\uFF0C\u6BD4 \u5982graphite\u3001fluent\u3001netflowcollectd\u4EE5\u53CA\u4F7F\u7528msgpack\u3001json\u3001end\u7B49\u901A\u7528\u6570\u636E\u7684\u4EA7\u54C1\u3002</p><h4 id="json\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#json\u7F16\u7801" aria-hidden="true">#</a> json\u7F16\u7801</h4><p>\u5728\u65E9\u8D77\u7684logstash\u4E2D\u53EF\u4EE5\u901A\u8FC7\u9884\u5B9A\u597D\u7684json\u6570\u636E\u6765\u7701\u7565\u6389filter/grok\u914D\u7F6E\uFF0C\u4ECE\u800C\u964D\u4F4Ecpu\u4F7F\u7528\u7387\u3002 \u4F8B\u5982\u76F4\u63A5\u5728nginx\u4E2D\u914D\u7F6Eaccesslog\u7684\u65E5\u5FD7\u683C\u5F0F\u4E3A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>logformat json &#39;<span class="token punctuation">{</span><span class="token string">&quot;@timestamp&quot;</span><span class="token operator">:</span><span class="token string">&quot;$time_iso8601&quot;</span><span class="token punctuation">,</span>&#39;
               &#39;<span class="token string">&quot;@version&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>&#39;
               &#39;<span class="token string">&quot;host&quot;</span><span class="token operator">:</span><span class="token string">&quot;$server_addr&quot;</span><span class="token punctuation">,</span>&#39;
               &#39;<span class="token string">&quot;client&quot;</span><span class="token operator">:</span><span class="token string">&quot;$remote_addr&quot;</span><span class="token punctuation">,</span>&#39;
               &#39;<span class="token string">&quot;size&quot;</span><span class="token operator">:</span>$body_bytes_sent<span class="token punctuation">,</span>&#39;
               &#39;<span class="token string">&quot;responsetime&quot;</span><span class="token operator">:</span>$request_time<span class="token punctuation">,</span>&#39;
               &#39;<span class="token string">&quot;domain&quot;</span><span class="token operator">:</span><span class="token string">&quot;$host&quot;</span><span class="token punctuation">,</span>&#39;
               &#39;<span class="token string">&quot;url&quot;</span><span class="token operator">:</span><span class="token string">&quot;$uri&quot;</span><span class="token punctuation">,</span>&#39;
               &#39;<span class="token string">&quot;status&quot;</span><span class="token operator">:</span><span class="token string">&quot;$status&quot;</span><span class="token punctuation">}</span>&#39;<span class="token punctuation">;</span>
access_log <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>nginx<span class="token operator">/</span>access<span class="token punctuation">.</span>log_json json<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u901A\u7528File\u76F4\u63A5\u8F93\u5165\u5230logstash\u4E2D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>input<span class="token punctuation">{</span>
	file<span class="token punctuation">{</span>
		path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/var/nginx/access_*.log&quot;</span>
		codec <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;json&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter<span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
output<span class="token punctuation">{</span>
	sdtout<span class="token punctuation">{</span>
		codec <span class="token operator">=</span><span class="token operator">&gt;</span> rubydebug 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="multiline" tabindex="-1"><a class="header-anchor" href="#multiline" aria-hidden="true">#</a> Multiline</h4><p>\u6709\u4E9B\u65F6\u5019\uFF0C\u5E94\u7528\u7A0B\u5E8F\u4F1A\u4EE5\u591A\u884C\u7684\u5185\u5BB9\u6765\u6253\u5370\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u8FD9\u79CD\u65E5\u5FD7\u901A\u5E38\u5F88\u96BE\u901A\u8FC7\u547D\u4EE4\u884C\u89E3\u6790\u7684\u65B9\u5F0F\u6765\u505A\u5206\u6790\u3002\u800Clogstash\u4E3A\u6B64\u5F00\u53D1\u4E86 codec/multiline\u63D2\u4EF6\u6765\u89E3\u51B3\u8FD9\u7C7B\u95EE\u9898.\u5982\u4E0B\u914D\u7F6E\u5F88\u7B80\u5355\u5C31\u662F\u628A\u5F53\u524D\u884C\u7684\u6570\u636E\u6DFB\u52A0\u5230\u524D\u4E00\u884C\u7684\u540E\u9762\uFF0C\u77E5\u9053\u65B0\u8FDB\u884C\u4EE5[\u5F00\u5934\u4E3A\u6B62\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>input{
	stdin{
		# \u5339\u914D\u4EE5[\u5F00\u5934\u7684\u884C\uFF0C\u5982\u679C\u4E0D\u662F\uFF0C\u54EA\u80AF\u5B9A\u5C5E\u4E8E\u524D\u4E00\u884C
		codec =&gt; multiline{
			# \u5FC5\u987B\u914D\u7F6E \u8981\u5339\u914D\u7684\u6B63\u5219\u8868\u8FBE\u5F0F
			pattern =&gt; &quot;^\\[&quot;
			# \u5426\u5B9A\u6B63\u5219\u8868\u8FBE\u5F0F
			negate =&gt; true
			# \u53EF\u4EE5\u8BBE\u7F6E\u4E3Aprevious\u6216next
			# \u8868\u793A\u5982\u679C\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u4E86\uFF0C\u90A3\u4E48\u8BE5\u4E8B\u4EF6\u5C5E\u4E8E\u4E0B\u4E00\u4E2A\u8FD8\u662F\u524D\u4E00\u4E2A\u4E8B\u4EF6
			what =&gt; &quot;previous&quot;
		}
	}
}
filter{
	
}
output{
	stdout{
		codec =&gt; rubydebug 
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E4B\u540E\u5728stdin\u4E2D\u8F93\u5165</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">[</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">4</span><span class="token operator">-</span><span class="token number">16</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">34</span><span class="token operator">:</span><span class="token number">34</span><span class="token punctuation">]</span> exception
        db error<span class="token operator">:</span> no session
<span class="token punctuation">[</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">4</span><span class="token operator">-</span><span class="token number">16</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">34</span><span class="token operator">:</span><span class="token number">57</span><span class="token punctuation">]</span> login userid<span class="token punctuation">;</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;@timestamp&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">16</span><span class="token constant">T06</span><span class="token operator">:</span><span class="token number">35</span><span class="token operator">:</span><span class="token number">21.613</span>Z<span class="token punctuation">,</span>
      <span class="token string">&quot;@version&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;host&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;admin1602130927&quot;</span><span class="token punctuation">,</span>
       <span class="token string">&quot;message&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;[2017-4-16 14:34:34] exception\\r\\n\\tdb error: no session\\r&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;tags&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token string">&quot;multiline&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="collectd" tabindex="-1"><a class="header-anchor" href="#collectd" aria-hidden="true">#</a> collectd</h4><p>collectd\u662F\u4E00\u4E2A\u6536\u83B7\u8FDB\u7A0B\uFF0C\u7528\u6765\u6536\u96C6\u7CFB\u7EDF\u6027\u80FD\u548C\u63D0\u4F9B\u5404\u79CD\u5B58\u50A8\u65B9\u5F0F\u6765\u5B58\u50A8\u4E0D\u540C\u503C\u7684\u673A\u5236\u3002\u5B83\u4F1A\u5728\u7CFB\u7EDF\u8FD0\u884C\u548C\u5B58\u50A8\u4FE1\u606F\u65F6\u5468\u671F\u6027\u7684\u7EDF\u8BA1\u7CFB \u7EDF\u76F8\u5173\u7684\u4FE1\u606F\u3002\u8FD9\u4E9B\u4FE1\u606F\u6709\u5229\u4E8E\u67E5\u627E\u5F53\u524D\u7CFB\u7EDF\u6027\u80FD\u74F6\u9888\u3002</p><p>######collectd\u7684\u914D\u7F6E \u4EE5\u4E0B\u914D\u7F6E\u53EF\u4EE5\u5B9E\u73B0\u5BF9\u670D\u52A1\u5668\u57FA\u672C\u7684CPU\u3001\u5185\u5B58\u3001\u7F51\u5361\u6D41\u91CF\u3001\u78C1\u76D8 IO \u4EE5\u53CA\u78C1\u76D8\u7A7A\u95F4\u5360\u7528\u60C5\u51B5\u7684\u76D1\u63A7:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Hostname</span> <span class="token string">&quot;host.example.com&quot;</span>
<span class="token class-name">LoadPlugin</span> <span class="token keyword">interface</span>
<span class="token class-name">LoadPlugin</span> cpu
<span class="token class-name">LoadPlugin</span> memory
<span class="token class-name">LoadPlugin</span> network
<span class="token class-name">LoadPlugin</span> df
<span class="token class-name">LoadPlugin</span> disk
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Plugin</span> <span class="token keyword">interface</span><span class="token punctuation">&gt;</span></span>
    <span class="token class-name">Interface</span> <span class="token string">&quot;eth0&quot;</span>
    <span class="token class-name">IgnoreSelected</span> <span class="token boolean">false</span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token class-name">Plugin</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Plugin</span> network<span class="token punctuation">&gt;</span></span>
    # logstash \u7684 <span class="token constant">IP</span> \u5730\u5740\u548C collectd \u7684\u6570\u636E\u63A5\u6536\u7AEF\u53E3\u53F7<span class="token operator">&gt;</span>
    # \u5982\u679Clogstash\u548Ccollectd\u5728\u540C\u4E00\u53F0\u4E3B\u673A\u4E0A\u4E5F\u53EF\u4EE5\u7528\u73AF\u56DE\u5730\u5740<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>
    <span class="token operator">&lt;</span><span class="token class-name">Server</span> <span class="token string">&quot;10.0.0.1&quot;</span> <span class="token string">&quot;25826&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token class-name">Server</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token class-name">Plugin</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5728logstash\u4E2D\u914D\u7F6E\u63A5\u53D7\u7A0B\u5E8F\u5373\u53EF\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>input<span class="token punctuation">{</span>
	udp <span class="token punctuation">{</span>
		port <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">25826</span>
		buffer_size <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">4096</span>
		workers <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">3</span>
		queue_size <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">30000</span>
		codec <span class="token operator">=</span><span class="token operator">&gt;</span> collectd<span class="token punctuation">{</span><span class="token punctuation">}</span>
		type <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;collectd&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter<span class="token punctuation">{</span>
	

<span class="token punctuation">}</span>

output<span class="token punctuation">{</span>
	stdout<span class="token punctuation">{</span>
		codec <span class="token operator">=</span><span class="token operator">&gt;</span> rubydebug 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h2><p>\u4E30\u5BCC\u7684filter\u662Flogstash\u5A01\u529B\u5F3A\u5927\u7684\u91CD\u8981\u56E0\u7D20\u3002\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u7528filter</p><h4 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h4><p>\u8BE5\u63D2\u4EF6\u53EF\u4EE5\u5C06\u65E5\u5FD7\u8BB0\u5F55\u4E2D\u7684\u65F6\u95F4\u5B57\u7B26\u4E32\uFF0C\u7F16\u7A0BLogstash::timestamp\u5BF9\u8C61\uFF0C\u7136\u540E\u5B58\u50A8\u5230@timestamp\u5B57\u6BB5\u91CC</p><h4 id="grok" tabindex="-1"><a class="header-anchor" href="#grok" aria-hidden="true">#</a> grok</h4><p>grok\u53EF\u4EE5\u8BF4\u662Flogstash\u6700\u91CD\u8981\u7684\u4E00\u4E2A\u63D2\u4EF6\u3002\u4F7F\u7528grok\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u8BED\u6CD5\u914D\u7F6E</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>filter<span class="token punctuation">{</span>
	grok <span class="token punctuation">{</span>
		match <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;grok_parttern&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D\u5904\u7406grok_pattern\u5916\u5176\u4ED6\u7684\u6B27\u5F0Flogstash\u7684\u5173\u952E\u5B57\u3002grok_pattern\u90E8\u5206\u662F\u4F7F\u7528\u8005\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u5B9E\u73B0\u586B\u5199\u7684\u3002\u5B83\u6709\u96F6\u4E2A\u6216\u591A\u4E2A %{SYNTAX:SEMANTIC}\u7EC4\u6210\uFF0C\u5176\u4E2DSYNTAX\u662F\u8868\u8FBE\u5F0F\u7684\u540D\u5B57\uFF0C\u662F\u7531grok\u63D0\u4F9B\u7684\uFF0C\u4F8B\u5982\u6570\u5B57\u8868\u8FBE\u5F0F\u7684\u540D\u5B57\u662FNUMBER\uFF0CIP\u5730\u5740\u8868\u8FBE\u5F0F\u7684\u540D \u5B57\u662FIP\u3002SEMANTIC\u8868\u793A\u89E3\u6790\u51FA\u6765\u7684\u8FD9\u4E2A\u5B57\u7B26\u7684\u540D\u5B57\uFF0C\u7531\u81EA\u5DF1\u5B9A\u4E49\uFF0C\u4F8B\u5982IP\u5B57\u6BB5\u7684\u540D\u5B57\u53EF\u4EE5\u662Fclient\u3002</p><p>\u5BF9\u4E8E\u4E0B\u9762\u8FD9\u6761\u65E5\u5FD7\uFF1A</p><div class="language-log ext-log line-numbers-mode"><pre class="language-log"><code><span class="token ip-address constant">55.3.244.1</span> GET <span class="token file-path string">/index.html</span> <span class="token number">15824</span> <span class="token number">0.043</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u8FD9\u6837\u89E3\u6790\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>input<span class="token punctuation">{</span>
	stdin<span class="token punctuation">{</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter<span class="token punctuation">{</span>
	grok <span class="token punctuation">{</span>
		match <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;%{IP:client} %{WORD:method} %{URIPATHPARAM:request} %{NUMBER:bytes} %{NUMBER:duration}&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
output<span class="token punctuation">{</span>
	stdout <span class="token punctuation">{</span> 
        codec <span class="token operator">=</span><span class="token operator">&gt;</span> rubydebug 
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u4F1A\u5F97\u5230\u8FD9\u6837\u7684\u7ED3\u679C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">{</span>
      <span class="token string">&quot;duration&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;0.043&quot;</span><span class="token punctuation">,</span>
       <span class="token string">&quot;request&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/index.html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;@timestamp&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">16</span><span class="token constant">T07</span><span class="token operator">:</span><span class="token number">29</span><span class="token operator">:</span><span class="token number">37.416</span>Z<span class="token punctuation">,</span>
        <span class="token string">&quot;method&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
         <span class="token string">&quot;bytes&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;15824&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;@version&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;host&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;admin1602130927&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;client&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;55.3.244.1&quot;</span><span class="token punctuation">,</span>
       <span class="token string">&quot;message&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;55.3.244.1 GET /index.html 15824 0.043\\r&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>grok\u63D0\u4F9B\u4E86\u54EA\u4E9BSYNTAX\uFF1F\u53EF\u4EE5\u67E5\u770B\u6587\u4EF6grok-patterns\uFF0C\u5B83\u9ED8\u8BA4\u653E\u5728\u8DEF\u5F84/usr/local/logstash/vendor/bundle/jruby/1.9/gems/logstash-patterns-core-0.3.0/patterns\u4E0B\u3002\u5047\u8BBE\u73B0\u5728\u8981\u5339\u914D\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u4E3Aregexp\u7684\u5B57\u7B26\u4E32\uFF0C\u800Cgrok\u9884\u5B9A\u4E49\u7684SYNTAX\u90FD \u4E0D\u6EE1\u8DB3\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49\u4E00\u4E2ASYNTAX</p><p>\u81EA\u5B9A\u4E49SYNTAX \u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A</p><ul><li><p>\u533F\u540DSYNTAX \u5C06%{SYNTAX:SEMANTIC} \u5199\u4E3A(?SEMANTICregexp)</p></li><li><p>\u547D\u540DSYNTAX \u5728dir\u4E0B\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6587\u4EF6\u540D\u968F\u610F\u5C06dir\u52A0\u5165grok\u8DEF\u5F84\uFF1A patterns_dir =&gt; &quot;./dir&quot; \u5C06\u60F3\u8981\u589E\u52A0\u7684SYNTAX\u5199\u5165\uFF1A SYNTAX_NAME regexp \u4F7F\u7528\u65B9\u6CD5\u548C\u4F7F\u7528\u9ED8\u8BA4SYNTAX\u76F8\u540C\uFF1A%{SYNTAX_NAME:SEMANTIC}</p></li></ul><h4 id="dissect" tabindex="-1"><a class="header-anchor" href="#dissect" aria-hidden="true">#</a> dissect</h4><p>grok\u867D\u7136\u7075\u6D3B\uFF0C\u4F46\u5176\u6027\u80FD\u5374\u662F\u5DEE\u5F3A\u4EBA\u610F\uFF0C\u56E0\u6B64logstash\u4E2D5.0\u7684\u7248\u672C\u4E2D\u52A0\u5165\u4E86dissect\u63D2\u4EF6\uFF0C\u5F53\u65E5\u5FD7\u6709\u6BD4\u8F83\u7B80\u660E\u7684\u5206\u9694\u6807\u5FD7\uFF0C\u800C\u4E14\u91CD\u590D \u6027\u6BD4\u8F83\u7684\u6253\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528dissect\u5FEB\u66F4\u7684\u5B8C\u6210\u89E3\u6790\u5DE5\u4F5C\u3002\u548C Grok \u5F88\u7C7B\u4F3C\u7684 %{} \u8BED\u6CD5\u6765\u8868\u793A\u5B57\u6BB5\uFF0C\u8FD9\u663E\u7136\u662F\u57FA\u4E8E\u4E60\u60EF\u5EF6\u7EED\u7684\u8003\u8651\u3002 \u4E0D\u8FC7\u793A\u4F8B\u4E2D %{+ts} \u7684\u52A0\u53F7\u5C31\u4E0D\u4E00\u822C\u4E86\u3002dissect \u9664\u4E86\u5B57\u6BB5\u5916\u9762\u7684\u5B57\u7B26\u4E32\u5B9A\u4F4D\u529F\u80FD\u4EE5\u5916\uFF0C\u8FD8\u901A\u8FC7\u51E0\u4E2A\u7279\u6B8A\u7B26\u53F7\u6765\u5904\u7406\u5B57\u6BB5\u63D0\u53D6\u7684\u89C4\u5219\uFF1A</p><ul><li>%{+key} \u8FD9\u4E2A + \u8868\u793A\uFF0C\u524D\u9762\u5DF2\u7ECF\u6355\u83B7\u5230\u4E00\u4E2A key \u5B57\u6BB5\u4E86\uFF0C\u800C\u8FD9\u6B21\u6355\u83B7\u7684\u5185\u5BB9\uFF0C\u81EA\u52A8\u6DFB\u8865\u5230\u4E4B\u524D key \u5B57\u6BB5\u5185\u5BB9\u7684\u540E\u9762\u3002</li><li>%{+key/2} \u8FD9\u4E2A /2 \u8868\u793A\uFF0C\u5728\u6709\u591A\u6B21\u6355\u83B7\u5185\u5BB9\u90FD\u586B\u5230 key \u5B57\u6BB5\u91CC\u7684\u65F6\u5019\uFF0C\u62FC\u63A5\u5B57\u7B26\u4E32\u7684\u987A\u5E8F\u8C01\u524D\u8C01\u540E\u3002/2 \u8868\u793A\u6392\u7B2C 2 \u4F4D\u3002</li><li>%{?string} \u8FD9\u4E2A ? \u8868\u793A\uFF0C\u8FD9\u5757\u53EA\u662F\u4E00\u4E2A\u5360\u4F4D\uFF0C\u5E76\u4E0D\u4F1A\u5B9E\u9645\u751F\u6210\u6355\u83B7\u5B57\u6BB5\u5B58\u5230 Event \u91CC\u9762\u3002</li><li>%{?string} %{&amp;string} \u5F53\u540C\u6837\u6355\u83B7\u540D\u79F0\u90FD\u662F string\uFF0C\u4F46\u662F\u4E00\u4E2A ? \u4E00\u4E2A &amp; \u7684\u65F6\u5019\uFF0C\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u952E\u503C\u5BF9 \u5B9E\u4F8B</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>input <span class="token punctuation">{</span>
	stdin<span class="token punctuation">{</span>
		type <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;dissect&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

filter<span class="token punctuation">{</span>
	dissect<span class="token punctuation">{</span>
		mapping <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;http://%{domain}/%{?url}?%{?arg1}=%{&amp;arg1}&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

output<span class="token punctuation">{</span>
	stdout<span class="token punctuation">{</span>
		codec <span class="token operator">=</span><span class="token operator">&gt;</span> rubydebug 
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>rizhiyi<span class="token punctuation">.</span>com<span class="token operator">/</span>index<span class="token punctuation">.</span><span class="token keyword">do</span><span class="token operator">?</span>id<span class="token operator">=</span><span class="token number">123</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;@timestamp&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">16</span><span class="token constant">T08</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">41.812</span>Z<span class="token punctuation">,</span>
        <span class="token string">&quot;domain&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;rizhiyi.com&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;@version&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;host&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;admin1602130927&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;id&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;123\\r&quot;</span><span class="token punctuation">,</span>
       <span class="token string">&quot;message&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;http://rizhiyi.com/index.do?id=123\\r&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;type&quot;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;dissect&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> output</h2><p>Output\u5C31\u662F\u6587\u4EF6\u7684\u8F93\u51FA\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u8F93\u51FA\u5230\u591A\u4E2A\u76EE\u6807\u6E90\uFF0C\u5728\u8FD9\u91CC\u6307\u5B9A\u5B83\u8F93\u51FA\u5230Redis server\uFF0C\u540C\u65F6\u8BBE\u7F6E\u8F93\u51FA\u7684\u7C7B\u578B\u4E3Alist\uFF0Ckey\u5C31\u662F\u6BCF \u4E00\u6761\u65E5\u5FD7\u7684\u540D\u79F0\uFF0C\u5B83\u9ED8\u8BA4\u662F\u4EE5map\u5F62\u5F0F\u8F93\u51FA\u7684\uFF0Chost\u4E3Aredis\u7684\u4E3B\u673A\u5730\u5740</p><h4 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> elasticsearch</h4><p>logstash\u652F\u6301\u76F4\u63A5\u5C06\u65E5\u5FD7\u5B58\u50A8\u5230\u5230elasticsearch\u4E2D\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u914D\u7F6E\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>output <span class="token punctuation">{</span>
    elasticsearch <span class="token punctuation">{</span>
        hosts <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.0.2:9200&quot;</span><span class="token punctuation">]</span>
        index <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;logstash-%{type}-%{+YYYY.MM.dd}&quot;</span>
        document_type <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;%{type}&quot;</span>
        flush_size <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">20000</span>
        idle_flush_time <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">10</span>
        sniffing <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">true</span>
        template_overwrite <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="file-1" tabindex="-1"><a class="header-anchor" href="#file-1" aria-hidden="true">#</a> file</h4><p>\u901A\u8FC7\u65E5\u5FD7\u6536\u96C6\u7CFB\u7EDF\u5C06\u5206\u6563\u5728\u6570\u767E\u53F0\u670D\u52A1\u5668\u4E0A\u7684\u6570\u636E\u96C6\u4E2D\u5B58\u50A8\u5728\u67D0\u4E2D\u5FC3\u670D\u52A1\u5668\u4E0A\uFF0C\u8FD9\u662F\u8FD0\u7EF4\u6700\u539F\u59CB\u7684\u9700\u6C42</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>output <span class="token punctuation">{</span>
    file <span class="token punctuation">{</span>
        path <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;/path/to/%{+yyyy}/%{+MM}/%{+dd}/%{host}.log.gz&quot;</span>
        message_format <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;%{message}&quot;</span>
        gzip <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><p>\u4E00\u4E0B\u914D\u7F6E\u4F7F\u5F97logstash\u76D1\u542C\u670D\u52A1\u5668\u7684\u6307\u5B9A\u7AEF\u53E3\uFF0C\u51E1\u662F\u5199\u5199\u5165\u5230\u8BE5\u7AEF\u53E3\u7684\u6570\u636E\u90FD\u4F1A\u88AB\u4FDD\u5B58\u8FDB\u5165redis\u4E2D\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>input<span class="token punctuation">{</span>
	log4j<span class="token punctuation">{</span>
		mode <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;server&quot;</span>
		host <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;127.0.0.1&quot;</span>
		port <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;4567&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

filter <span class="token punctuation">{</span>

 
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
  redis <span class="token punctuation">{</span>
    host <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;127.0.0.1&quot;</span>
    port <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">6379</span>
    data_type <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;list&quot;</span> 
    key <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;log4j&quot;</span> 
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u4EE5\u4E0B\u914D\u7F6E\u5219\u4F1A\u4ECEredis\u4E2D\u8BFB\u53D6\u4F24\u5904\u7A0B\u5E8F\u5199\u5165\u7684\u6570\u636E\uFF0C\u5E76\u5C06\u4E4B\u5B58\u50A8\u5230es\u4E2D\u53BB\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>input<span class="token punctuation">{</span>
	log4j<span class="token punctuation">{</span>
		mode <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;server&quot;</span>
		host <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;127.0.0.1&quot;</span>
		port <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;4567&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
filter <span class="token punctuation">{</span>
  #<span class="token class-name">Only</span> matched data are send <span class="token keyword">to</span> <span class="token namespace">output<span class="token punctuation">.</span></span>
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
  # <span class="token class-name">For</span> detail config <span class="token keyword">for</span> elasticsearch as output<span class="token punctuation">,</span> 
  # <span class="token class-name">See</span><span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>co<span class="token operator">/</span>guide<span class="token operator">/</span>en<span class="token operator">/</span>logstash<span class="token operator">/</span>current<span class="token operator">/</span>plugins<span class="token operator">-</span>outputs<span class="token operator">-</span>elasticsearch<span class="token punctuation">.</span>html
  elasticsearch <span class="token punctuation">{</span>
    action <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;index&quot;</span>            #<span class="token class-name">The</span> operation on <span class="token class-name">ES</span>
    hosts  <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;localhost:9200&quot;</span>     #<span class="token class-name">ElasticSearch</span> host<span class="token punctuation">,</span> can be array<span class="token punctuation">.</span>
    index  <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;log4j&quot;</span>               #<span class="token class-name">The</span> index <span class="token keyword">to</span> <span class="token namespace">write</span> data <span class="token keyword">to</span><span class="token punctuation">,</span> can be any string<span class="token punctuation">.</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,69),o=[p];function i(l,c){return n(),a("div",null,o)}const u=s(e,[["render",i],["__file","logstash.html.vue"]]);export{u as default};
