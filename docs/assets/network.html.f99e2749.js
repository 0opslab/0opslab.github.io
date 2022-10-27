import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},t=e(`<p>\u518D\u8BF4linux\u7F51\u7EDC\u524D\u5148\u9700\u8981\u786E\u8BA4\u8BBE\u5907\u7684\u4E00\u4E9B\u4FE1\u606F\uFF0C\u6BD4\u5982\u7F51\u5361\u7C7B\u578B\uFF0C\u7F51\u5361\u7684\u901F\u5EA6\u7B49\u7B49\u3002\u5728linux\u53EF\u4EE5\u901A\u8FC7\u7F51\u5361\u7684\u8BBE\u5907\u540D\u79F0\u533A\u5206\u7F51\u5361\u7684\u7C7B\u578B\uFF0C\u4F8B\u5982</p><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><p>rz # \u901A\u8FC7ssh\u4E0A\u4F20\u5C0F\u6587\u4EF6 sz # \u901A\u8FC7ssh\u4E0B\u8F7D\u5C0F\u6587\u4EF6 ifconfig eth0 down # \u7981\u7528\u7F51\u5361 ifconfig eth0 up # \u542F\u7528\u7F51\u5361 ifup eth0:0 # \u542F\u7528\u7F51\u5361 mii-tool em1 # \u67E5\u770B\u7F51\u7EBF\u662F\u5426\u8FDE\u63A5 traceroute www.baidu.com # \u6D4B\u8BD5\u8DF3\u6570 vi /etc/resolv.conf # \u8BBE\u7F6EDNS nameserver IP \u5B9A\u4E49DNS\u670D\u52A1\u5668\u7684IP\u5730\u5740 nslookup www.moon.com # \u89E3\u6790\u57DF\u540DIP dig -x www.baidu.com # \u89E3\u6790\u57DF\u540DIP curl -I www.baidu.com # \u67E5\u770B\u7F51\u9875http\u5934 tcpdump tcp port 22 # \u6293\u5305 lynx # \u6587\u672C\u4E0A\u7F51 wget -P \u8DEF\u5F84 http\u5730\u5740 # \u4E0B\u8F7D \u5305\u540D:wgetrc curl -d &quot;user=xuesong&amp;pwd=123&quot; http://www.abc.cn/Result # \u63D0\u4EA4web\u9875\u9762\u8868\u5355 \u9700\u67E5\u770B\u8868\u5355\u63D0\u4EA4\u5730\u5740 rsync -avzP -e &quot;ssh -p 22&quot; /dir user@$IP:/dir # \u540C\u6B65\u76EE\u5F55 # --delete \u65E0\u5DEE\u540C\u6B65 \u5220\u9664\u76EE\u5F55\u4E0B\u5176\u5B83\u6587\u4EF6 ifconfig eth0:0 192.168.1.221 netmask 255.255.255.0 # \u589E\u52A0\u903B\u8F91IP\u5730\u5740 mtr -r www.baidu.com # \u6D4B\u8BD5\u7F51\u7EDC\u94FE\u8DEF\u8282\u70B9\u54CD\u5E94\u65F6\u95F4 # trace ping \u7ED3\u5408 echo 1 &gt; /proc/sys/net/ipv4/icmp_echo_ignore_all # \u7981ping ipcalc -m &quot;$ip&quot; -p &quot;$num&quot; # \u6839\u636EIP\u548C\u4E3B\u673A\u6700\u5927\u6570\u8BA1\u7B97\u63A9\u7801 dig +short txt hacker.wp.dg.cx # \u901A\u8FC7 DNS \u6765\u8BFB\u53D6 Wikipedia \u7684hacker\u8BCD\u6761 host -t txt hacker.wp.dg.cx # \u901A\u8FC7 DNS \u6765\u8BFB\u53D6 Wikipedia \u7684hacker\u8BCD\u6761 net rpc shutdown -I IP_ADDRESS -U username%password # \u8FDC\u7A0B\u5173\u6389\u4E00\u53F0WINDOWS\u673A\u5668 wget --random-wait -r -p -e robots=off -U Mozilla www.example.com # \u9012\u5F52\u65B9\u5F0F\u4E0B\u8F7D\u6574\u4E2A\u7F51\u7AD9</p><pre><code>\u7F51\u5361\u914D\u7F6E\u6587\u4EF6{

	vi /etc/sysconfig/network-scripts/ifcfg-eth0

	DEVICE=eth0
	BOOTPROTO=none
	BROADCAST=192.168.1.255
	HWADDR=00:0C:29:3F:E1:EA
	IPADDR=192.168.1.55
	NETMASK=255.255.255.0
	NETWORK=192.168.1.0
	ONBOOT=yes
	TYPE=Ethernet
	GATEWAY=192.168.1.1

}

route {

	route                           # \u67E5\u770B\u8DEF\u7531\u8868
	route add default  gw 192.168.1.1  dev eth0                        # \u6DFB\u52A0\u9ED8\u8BA4\u8DEF\u7531
	route add -net 172.16.0.0 netmask 255.255.0.0 gw 10.39.111.254     # \u6DFB\u52A0\u9759\u6001\u8DEF\u7531\u7F51\u5173
	route del -net 172.16.0.0 netmask 255.255.0.0 gw 10.39.111.254     # \u5220\u9664\u9759\u6001\u8DEF\u7531\u7F51\u5173

}
</code></pre><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## \u67E5\u770B\u7F51\u5361\u7684\u578B\u53F7</span>
<span class="token comment"># lspci | grep -i ethernet</span>
00:03.0 Ethernet controller: Red Hat, Inc Virtio network device

<span class="token comment">## \u67E5\u770B\u7F51\u5361\u7684\u5177\u4F53\u4FE1\u606F \u6CE8\u610FSpeed\u5B57\u6BB5\u7684\u503C\u4E3A\u7F51\u5361\u652F\u652F\u6301\u7684\u901F\u5EA6</span>
<span class="token comment"># ethtool eth0</span>
Settings <span class="token keyword">for</span> eth0:
        Supported ports: <span class="token punctuation">[</span> TP <span class="token punctuation">]</span>
        Supported <span class="token function">link</span> modes:   10baseT/Half 10baseT/Full 
                                100baseT/Half 100baseT/Full 
                                1000baseT/Full 
        Supports auto-negotiation: Yes
        Advertised <span class="token function">link</span> modes:  10baseT/Half 10baseT/Full 
                                100baseT/Half 100baseT/Full 
                                1000baseT/Full 
        Advertised auto-negotiation: Yes
        Speed: 1000Mb/s
        Duplex: Full
        Port: Twisted Pair
        PHYAD: <span class="token number">1</span>
        Transceiver: internal
        Auto-negotiation: on
        Supports Wake-on: pumbag
        Wake-on: g
        Current message level: 0x00000001 <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        Link detected: <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5224\u65AD\u5E26\u5BBD\uFF0C\u670D\u52A1\u5668\u7684\u5E26\u5BBD\u8BF4\u7B80\u5355\u4E5F\u7B80\u5355\uFF0C\u8BF4\u96BE\u786E\u5B9E\u4E5F\u5F88\u96BE\uFF0C\u5728\u65E0\u914D\u7F6E\u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4F7F\u7528curl\u548Cwget\u8BF7\u6C42\u4E00\u4E2A\u5916\u90E8\u6587\u4EF6\u4EE5\u6B64\u53EF\u4EE5\u5224\u65AD(\u53CD\u5411\u5224\u65AD)\u6216\u8005\u5728\u7EBF\u4E2A\u7F51\u7AD9\u6D4B\u901F\u3002\u800C\u7F51\u4E0A\u5F88\u591A\u90FD\u4F1A\u8BF4\u7528iperf\u6D4B\u8BD5\uFF0C\u4F46\u662F\u9700\u8981\u4F60\u624B\u4E0A\u6709\u4E00\u53F0\u5916\u7F51\u7684\u670D\u52A1\u5668\u3002</p><h2 id="\u7F51\u7EDC\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u914D\u7F6E" aria-hidden="true">#</a> \u7F51\u7EDC\u914D\u7F6E</h2><p>\u5728\u4E0D\u540C\u7684Linux\u53D1\u578B\u7248\u4E2D\u7F51\u7EDC\u914D\u7F6E\u53EF\u80FD\u6709\u6240\u5DEE\u522B\uFF0C\u4F46\u5176\u672C\u8D28\u90FD\u662F\u4E00\u81F4\u7684\uFF0C\u5728Ubuntu\u4E0B/etc/network/interfaces\u4EE5\u53CA\u5728/etc/network/options\u4E2D\u914D\u7F6E\u7F51\u7EDC\u4FE1\u606F\u3002\u800C\u5728RedHat\u7CFB\u5217\u4E2D\u5219\u5728/etc/sysconfig/network-scripts/ifcfg-ifname\u914D\u7F6E\u3002\u65E0\u8BBA\u5728\u54EA\u91CC\u914D\u7F6E\u90FD\u53EF\u4EE5\u4F7F\u7528ifconfig\u547D\u4EE4\u67E5\u770B\u8FD9\u4E9B\u7F51\u7EDC\u914D\u7F6E\uFF0C\u4E0B\u9762\u662Fifconfig\u547D\u7684\u5E38\u7528\u53C2\u6570\u548C\u5B9E\u4F8B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage <span class="token builtin class-name">:</span> <span class="token function">ifconfig</span> <span class="token punctuation">[</span>\u7F51\u7EDC\u8BBE\u5907<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u53C2\u6570<span class="token punctuation">]</span>
descript :ifconfig\u547D\u4EE4\u7528\u6765\u67E5\u770B\u548C\u914D\u7F6E\u7F51\u7EDC\u8BBE\u5907\uFF0C\u5F53\u7F51\u7EDC\u73AF\u5883\u53D1\u751F\u6539\u53D8\u65F6\u53EF\u901A\u8FC7\u6B64\u547D\u4EE4\u5BF9\u7F51\u7EDC\u8FDB\u884C\u76F8\u5E94\u7684\u914D\u7F6E\u3002
     \u7528ifconfig\u547D\u4EE4\u914D\u7F6E\u7684\u7F51\u5361\u4FE1\u606F\uFF0C\u5728\u7F51\u5361\u91CD\u542F\u540E\u673A\u5668\u91CD\u542F\u540E\uFF0C\u914D\u7F6E\u5C31\u4E0D\u5B58\u5728\u3002\u8981\u60F3\u5C06\u4E0A\u8FF0\u7684\u914D\u7F6E\u4FE1\u606F\u6C38\u8FDC\u7684
     \u5B58\u5728\u7535\u8111\u91CC\uFF0C\u90A3\u5C31\u8981\u4FEE\u6539\u7F51\u5361\u7684\u914D\u7F6E\u6587\u4EF6\u4E86\u3002
param:
	- up 		\u542F\u52A8\u6307\u5B9A\u7F51\u7EDC\u8BBE\u5907/\u7F51\u5361\u3002
	- down \u3000 	\u5173\u95ED\u6307\u5B9A\u7F51\u7EDC\u8BBE\u5907/\u7F51\u5361\u3002\u8BE5\u53C2\u6570\u53EF\u4EE5\u6709\u6548\u5730\u963B\u6B62\u901A\u8FC7\u6307\u5B9A\u63A5\u53E3\u7684IP\u4FE1\u606F\u6D41\uFF0C
	<span class="token parameter variable">-a</span>\u3000\u3000\u3000\u3000\u3000\u3000 \u65E0\u8BBA\u662F\u5426\u6FC0\u6D3B\uFF0C\u663E\u793A\u6240\u6709\u914D\u7F6E\u7684\u7F51\u7EDC\u63A5\u53E3\u3002
    <span class="token parameter variable">-add</span> \u3000\u3000\u3000\u3000  \u3000\u3000 \u7ED9\u6307\u5B9A\u7F51\u5361\u914D\u7F6EIPv6\u5730\u5740
    <span class="token parameter variable">-del</span>\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000  \u5220\u9664\u6307\u5B9A\u7F51\u5361\u7684IPv6\u5730\u5740
    -arp<span class="token operator">|</span>-arp\u3000\u3000\u3000 \u3000\u3000  \u6253\u5F00\u6216\u5173\u95ED\u652F\u6301ARP\u534F\u8BAE
    -mtu<span class="token operator">&lt;</span>\u5B57\u8282\u6570<span class="token operator">&gt;</span>  \u3000\u3000  \u8BBE\u7F6E\u7F51\u5361\u7684\u6700\u5927\u4F20\u8F93\u5355\u5143
    -netmask<span class="token operator">&lt;</span>\u5B50\u7F51\u63A9\u7801<span class="token operator">&gt;</span> \u8BBE\u7F6E\u7F51\u5361\u7684\u5B50\u7F51\u63A9\u7801
 example:
 	\u67E5\u770B\u7F51\u7EDC\u4FE1\u606F
 	<span class="token comment">#ifconfig</span>
 	\u6253\u5F00\u548C\u5173\u95ED\u6307\u5B9A\u7F51\u5361
 	<span class="token comment"># ifconfig eno16777736 down</span>
 	\u542F\u7528\u548C\u5173\u95EDARP
 	<span class="token comment"># ifconfig eno16777736 arp</span>
 	<span class="token comment"># ifconfig eno16777736 -arp </span>
	\u8BBE\u7F6E\u7F51\u5361\u7684mac\u5730\u5740
	<span class="token comment"># ifconfig eno16777736 hw ether 00:0c:29:4d:a3:dd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F51\u7EDC\u53EF\u7528\u6027\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u53EF\u7528\u6027\u6D4B\u8BD5" aria-hidden="true">#</a> \u7F51\u7EDC\u53EF\u7528\u6027\u6D4B\u8BD5</h2><p>\u7F51\u7EDC\u53EF\u7528\u6027\u6D4B\u8BD5\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u7B80\u5355\u7684\u8BF4\u5C31\u662F\u80FD\u4E0A\u7F51\u5373\u53EF\u3002linux\u4E2D\u63D0\u4F9B\u4E86ping\u3001route\u3001traceroute\u3001nslookup\u3001netstat\u3001dig\u3001\u51E0\u4E2A\u547D\u4EE4\u5373\u53EF\u5B8C\u6574\u7684\u6D4B\u8BD5\u7F51\u7EDC\u7684\u53EF\u7528\u6027\u3002\u5F53\u7136\u6709mrt\u8FD9\u6837\u7684\u7EC4\u5408\u5DE5\u5177\uFF0C\u4F46\u662F\u5176\u4E0D\u662F\u6240\u6709\u4E3B\u673A\u4E0A\u90FD\u6709\u3002</p><p>#####Ping</p><p>\u5B83\u901A\u8FC7\u5411\u76EE\u6807\u4E3B\u673A\u53D1\u9001\u4E00\u4E2A\u4E2A\u6570\u636E\u5305\u4EE5\u53CA\u63A5\u53D7\u6570\u636E\u5305\u7684\u56DE\u5E94\u6765\u5224\u65AD\u4E3B\u673A\u548C\u76EE\u6807\u4E3B\u673A\u4E4B\u95F4\u7F51\u7EDC\u8FDE\u63A5\u60C5\u51B5\u3002ping\u7684\u4E24\u4E2A\u529F\u80FD\uFF1A\u5224\u65AD\u7F51\u7EDC\u662F\u5426\u53EF\u8FBE\u3001\u7F51\u7EDC\u6027\u80FD\u7EDF\u8BA1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage: <span class="token function">ping</span> \u3010\u9009\u9879\u3011 \u76EE\u6807\u4E3B\u673A\u6216IP\u5730\u5740
descript: ping\u4F7F\u7528\u7684\u662F\u7F51\u7EDC\u5C42\u7684ICMP\u534F\u8BAE\u3002
params:
  -c\u8BBE\u7F6E\u6570\u636E\u5305\u7684\u6570\u91CF
  -s\u8BBE\u7F6E\u6570\u636E\u5305\u7684\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u4E3A64\u5B57\u8282\uFF08\u5305\u62EC8\u5B57\u8282ICMP\u534F\u8BAE\u5934\u300156\u5B57\u8282\u6D4B\u8BD5\u6570\u636E\u300120\u5B57\u8282IP\u534F\u8BAE\u5934\uFF09
  -t\u8BBE\u7F6E\u6570\u636E\u5305\u7684\u751F\u5B58\u671F\uFF08TTL\uFF09
  -i\u8BBE\u7F6E\u6570\u636E\u5305\u7684\u95F4\u9694\uFF0C\u9ED8\u8BA4\u4E3A1s
  -R\u8BB0\u5F55\u8DEF\u7531\u8FC7\u7A0B
  -r\u5FFD\u7565\u666E\u901A\u7684\u8DEF\u7531\u8868\uFF0C\u76F4\u63A5\u5C06\u6570\u636E\u5305\u53D1\u9001\u5230\u8FDC\u7A0B\u4E3B\u673A\u4E0A
  -v\u8BE6\u7EC6\u663E\u793A\u547D\u4EE4\u7684\u6267\u884C\u8FC7\u7A0B
  -P\u8BBE\u7F6E\u586B\u6EE1\u6570\u636E\u5305\u7684\u8303\u672C\u6837\u5F0F
  -f\u6781\u9650\u68C0\u6D4B\uFF0C\u4EE5\u6700\u5C0F\u7684\u95F4\u9694\u6765\u6D4B\u8BD5
  -I\u8BBE\u7F6E\u6307\u5B9A\u7684\u7F51\u7EDC\u63A5\u53E3\u53D1\u9001\u6570\u636E\u5305
  
example
  <span class="token comment"># ping -c 2  www.baidu.com</span>
  PING www.a.shifen.com <span class="token punctuation">(</span><span class="token number">61.135</span>.169.125<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
  <span class="token number">64</span> bytes from <span class="token number">61.135</span>.169.125 <span class="token punctuation">(</span><span class="token number">61.135</span>.169.125<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">55</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">1.97</span> ms
  <span class="token number">64</span> bytes from <span class="token number">61.135</span>.169.125 <span class="token punctuation">(</span><span class="token number">61.135</span>.169.125<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">55</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">1.66</span> ms
  \u62A5\u6587\u5C3A\u5BF8\u3000\u3000\u3000\u3000\u76EE\u6807\u8BBE\u5907\u4E3B\u673A\u540D\u6216IP\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000 \u5E8F\u53F7\u3000\u3000\u3000\u3000\u751F\u5B58\u671F  \u5F80\u8FD4\u65F6\u95F4

  --- www.a.shifen.com <span class="token function">ping</span> statistics ---\u7EDF\u8BA1\u4FE1\u606F\u6458\u8981
  <span class="token number">2</span> packets transmitted, <span class="token number">2</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 1001ms
  \u53D1\u9001\u5305\u6570\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u63A5\u53D7\u5305\u6570\u3000\u3000\u3000\u3000\u4E22\u5305\u7387\u3000\u3000\u3000\u3000\u3000\u3000\u54CD\u5E94\u65F6\u95F4\u3000\u3000\u3000\u3000\u3000\u3000
  rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">1.666</span>/1.821/1.977/0.161 ms
  \u5E94\u7B54\u8BA1\u7B97\u6700\u5C0F\u503C/\u5E73\u5747\u503C/\u6700\u5927\u503C/


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="netstat" tabindex="-1"><a class="header-anchor" href="#netstat" aria-hidden="true">#</a> netstat</h5><p>\u662Fnetwork statistics\u7684\u7F29\u5199\uFF0C\u4E3B\u8981\u7528\u4E8E\u68C0\u6D4B\u4E3B\u673A\uFF08\u672C\u673A\uFF09\u7684\u7F51\u7EDC\u914D\u7F6E\u548C\u72B6\u51B5\uFF0C\u7528\u4E8E\u67E5\u770B\u4E0EIP\u3001TCP\u3001UDP\u3001ICMP\u534F\u8BAE\u76F8\u5173\u7684\u7EDF\u8BA1\u6570\u636E\uFF0C\u53EF\u4EE5\u67E5\u770B\u663E\u793A\u7F51\u7EDC\u8FDE\u63A5\uFF08\u5305\u62EC\u8FDB\u7AD9\u548C\u51FA\u6218\uFF09\u3001\u7CFB\u7EDF\u8DEF\u7531\u8868\u3001\u7F51\u7EDC\u63A5\u53E3\u72B6\u6001\u7B49\u3002</p><p>\u7F51\u7EDC\u72B6\u6001:</p><p>\u4ECE\u5BA2\u6237\u7AEF\u770B\u5176\u72B6\u6001\u53D8\u5316\u4E3A:CLOSED-&gt;SYN_SENT-&gt;ESTABLISHED-&gt;FIN_WAIT_1-&gt;FIN_WAIT_2-&gt;TIME_WAIT-&gt;CLOSED</p><p>\u4ECE\u670D\u52A1\u7AEF\u770B\u5176\u72B6\u6001\u53D8\u5316\u4E3A:CLOSED-&gt;LISTEN-&gt;SYN_RECVD-&gt;ESTABLISHED-&gt;CLOSE_WAIT-&gt;LAST_ACK-&gt;CLOSED</p><p>\u4E0B\u9762\u662F\u4E2A\u4E2A\u72B6\u6001\u7684\u63CF\u8FF0:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>*ESTABLISHED
	The socket has an established connection.
	\u5957\u63A5\u5B57\u6709\u4E00\u4E2A\u5DF2\u5EFA\u7ACB\u7684\u8FDE\u63A5\u3002
*SYN_SENT
	The socket is actively attempting to establish a connection. 
	\u5957\u63A5\u5B57\u6B63\u5728\u79EF\u6781\u5730\u5C1D\u8BD5\u5EFA\u7ACB\u8FDE\u63A5\u3002
*SYN_RECV
	A connection request has been received from the network.
	\u5DF2\u4ECE\u7F51\u7EDC\u63A5\u6536\u5230\u8FDE\u63A5\u8BF7\u6C42\u3002
*FIN_WAIT1
	The socket is closed, and the connection is shutting down.
	\u5957\u63A5\u5B57\u5173\u95ED\uFF0C\u8FDE\u63A5\u5173\u95ED\u3002
*FIN_WAIT2
	Connection is closed, and the socket is waiting <span class="token keyword">for</span> a <span class="token function">shutdown</span> from the remote end.
	\u8FDE\u63A5\u5173\u95ED\uFF0C\u800C\u5957\u63A5\u5B57\u6B63\u5728\u7B49\u5F85\u8FDC\u7A0B\u7ED3\u675F\u7684\u5173\u95ED\u3002
*TIME_WAIT
	The socket is waiting after close to handle packets still <span class="token keyword">in</span> the network.
	\u8BE5\u5957\u63A5\u5B57\u5728\u63A5\u8FD1\u5904\u7406\u7F51\u7EDC\u4E2D\u7684\u6570\u636E\u5305\u540E\u7B49\u5F85\u3002
*CLOSED
	The socket is not being used.
	\u5957\u63A5\u5B57\u6CA1\u6709\u88AB\u4F7F\u7528\u3002
*CLOSE_WAIT
 	The remote end has shut down, waiting <span class="token keyword">for</span> the socket to close.
 	\u8FDC\u7AEF\u5173\u95ED\uFF0C\u7B49\u5F85\u5957\u63A5\u5B57\u5173\u95ED\u3002
*LAST_ACK
	The remote end has shut down, and the socket is closed. Waiting <span class="token keyword">for</span> acknowledgement.
	\u8FDC\u7AEF\u5173\u95ED\uFF0C\u5957\u63A5\u5B57\u5173\u95ED\u3002\u7B49\u5F85\u786E\u8BA4\u3002
*LISTEN
	The  socket is listening <span class="token keyword">for</span> incoming connections.  \u5957\u63A5\u5B57\u662F\u76D1\u542C\u4F20\u5165\u7684\u8FDE\u63A5\u3002
*CLOSING
	Both sockets are shut down but we still don\u2019t have all our data sent.
	\u4E24\u4E2A\u5957\u63A5\u5B57\u90FD\u5173\u95ED\u4E86\uFF0C\u4F46\u6211\u4EEC\u4ECD\u7136\u6CA1\u6709\u6240\u6709\u7684\u6570\u636E\u53D1\u9001\u3002
*UNKNOWN
	The state of the socket is unknown.
	\u5957\u63A5\u5B57\u7684\u72B6\u6001\u672A\u77E5\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>useage: <span class="token function">netstat</span> \u3010\u9009\u9879\u3011
descript:\u67E5\u770Blinux\u672C\u673A\u7684\u72B6\u51B5
param:
  -r\u2014\u2014\u663E\u793A\u5F53\u524D\u4E3B\u673A\u8DEF\u7531\u8868\u4FE1\u606F
  -a\u2014\u2014\u663E\u793A\u5F53\u524D\u6240\u6709\u5F00\u653E\u7684\u7AEF\u53E3\uFF08\u6BD4\u9ED8\u8BA4\u8FD8\u8981\u591A\u51E0\u4E2A<span class="token punctuation">)</span>
  -t\u2014\u2014\u663E\u793Atcp\u4F20\u8F93\u534F\u8BAE\u7684\u8FDE\u63A5\u72B6\u51B5\uFF0C\u7B49\u52A0\u4E8Enetstat <span class="token operator">|</span> <span class="token function">grep</span> tcp \u4F46-t\u66F4\u5FEB
  -u\u2014\u2014\u663E\u793Audp\u4F20\u8F93\u534F\u8BAE\u7684\u8FDE\u63A5\u72B6\u51B5\uFF0C\u7B49\u4EF7\u4E8Enetstat <span class="token operator">|</span> <span class="token function">grep</span> udp
  -i\u2014\u2014\u663E\u793A\u6240\u6709\u7F51\u7EDC\u63A5\u53E3\u7684\u7EDF\u8BA1\u4FE1\u606F\u8868
  -l\u2014\u2014\u663E\u793A\u6B63\u5904\u4E8E\u76D1\u542C\u72B6\u6001\u7684\u670D\u52A1\u548C\u7AEF\u53E3
  -p\u2014\u2014\u663E\u793A\u6B63\u5728\u4F7F\u7528\u7AEF\u53E3\u7684\u670D\u52A1\u8FDB\u7A0B\u53F7\u548C\u670D\u52A1\u7A0B\u5E8F\u540D\u79F0
  -c\u2014\u2014\u6301\u7EED\u5217\u51FA\u7F51\u7EDC\u72B6\u6001\uFF0C\u76D1\u63A7\u8FDE\u63A5\u60C5\u51B5
  -n\u2014\u2014\u4EE5\u6570\u5B57\u7684\u5F62\u5F0F\u663E\u793AIP\u5730\u5740\u548C\u7AEF\u53E3\u53F7
  -e\u2014\u2014\u663E\u793A\u4EE5\u592A\u7F51\u7684\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u6B64\u9879\u53EF\u4EE5\u4E0Ea\u7EC4\u5408\u4F7F\u7528
example 
  $ <span class="token function">netstat</span> <span class="token parameter variable">-atn</span>
  Active Internet connections <span class="token punctuation">(</span>servers and established<span class="token punctuation">)</span>
  \u534F\u8BAE   \u6536\u3000\u3000\u3000\u9001\u3000\u3000\u3000\u672C\u5730\u5730\u5740\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u4E0E\u672C\u5730\u8FDE\u63A5\u7684\u8FDC\u7A0B\u4E3B\u673A\u5730\u5740\u3000\u3000\u8FDE\u63A5\u72B6\u6001
  Proto Recv-Q Send-Q Local Address           Foreign Address         State      
  tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:42081           <span class="token number">0.0</span>.0.0:*               LISTEN         
  tcp        <span class="token number">0</span>      <span class="token number">1</span> <span class="token number">172.30</span>.0.54:47570       <span class="token number">74.125</span>.204.102:443      SYN_SENT     
  tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">172.30</span>.0.54:32840       <span class="token number">165.254</span>.134.121:80      ESTABLISHED
  tcp        <span class="token number">0</span>      <span class="token number">1</span> <span class="token number">172.30</span>.0.54:47568       <span class="token number">74.125</span>.204.102:443      SYN_SENT   
  tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::56937                :::*                    LISTEN       

  State\u2014\u2014\u8868\u793A\u8FDE\u63A5\u72B6\u6001\uFF0C
  		\u5E38\u89C1\u7684\u72B6\u6001\u6709listen\uFF08\u8868\u793A\u76D1\u542C\u72B6\u6001\uFF0C\u7B49\u5F85\u63A5\u6536\u5165\u7AD9\u7684\u8BF7\u6C42\uFF09\u3001
  		established\uFF08\u8868\u793A\u672C\u673A\u5DF2\u7ECF\u4E0E\u5176\u4ED6\u4E3B\u673A\u5EFA\u7ACB\u597D\u8FDE\u63A5\uFF09\u3001
  		time_wait<span class="token punctuation">(</span>\u7B49\u5F85\u8DB3\u591F\u7684\u65F6\u95F4\u4EE5\u786E\u4FDD\u8FDC\u7A0BTCP\u63A5\u6536\u8FDE\u63A5\u4E2D\u65AD\u8BF7\u6C42\u7684\u786E\u8BA4<span class="token punctuation">)</span>\u3001
  		syn sent\uFF08\u5C1D\u8BD5\u53D1\u8D77\u8FDE\u63A5\uFF09\u3001
  		syn recv\uFF08\u63A5\u53D7\u53D1\u8D77\u7684\u8FDE\u63A5\uFF09\u7B49
  
  <span class="token comment"># \u67E5\u770B\u6240\u6709\u8FDE\u63A5</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-a</span>
  <span class="token comment"># \u67E5\u770B\u6240\u6709tcp\u8FDE\u63A5</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-at</span>
  <span class="token comment"># \u67E5\u770B\u6240\u6709udp\u8FDE\u63A5</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-au</span>
  <span class="token comment"># \u67E5\u770B\u6240\u6709unixsocket\u8FDE\u63A5</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-ax</span>
  <span class="token comment"># \u540C\u65F6\u5217\u51FA\u8FDB\u573A\u4FE1\u606F</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-ap</span>
  <span class="token comment"># \u67E5\u770B\u670D\u52A1\u5668\u5F53\u524D\u7684\u7F51\u7EDC\u8FDE\u63A5\u60C5\u51B5</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}&#39;</span>
  <span class="token comment"># \u6240\u6709\u94FE\u63A5\u5230\u672C\u673A\u7684IP</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-nut</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;$NF==&quot;ESTABLISHED&quot; {print $5}&#39;</span> <span class="token operator">|</span> <span class="token function">cut</span> -d: <span class="token parameter variable">-f1</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-u</span>
  <span class="token comment"># \u67E5\u770B\u7F51\u7EDC\u76D1\u542C</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-ntlp</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-nulp</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-nxlp</span>
  <span class="token comment"># \u5C06\u4F1A\u663E\u793A\u4F7F\u7528\u8BE5\u7AEF\u53E3\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u8FDB\u7A0Bid</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-nap</span> <span class="token operator">|</span> <span class="token function">grep</span> port 
  <span class="token comment"># \u5C06\u4F1A\u663E\u793A\u5305\u62ECTCP\u548CUDP\u7684\u6240\u6709\u8FDE\u63A5</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-a</span>  or <span class="token function">netstat</span> \u2013all
  <span class="token comment"># \u5C06\u4F1A\u663E\u793ATCP\u8FDE\u63A5   </span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">--tcp</span>  or <span class="token function">netstat</span> \u2013t 
  <span class="token comment"># \u5C06\u4F1A\u663E\u793AUDP\u8FDE\u63A5</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">--udp</span> or <span class="token function">netstat</span> \u2013u 
  <span class="token comment"># \u5C06\u4F1A\u663E\u793A\u8BE5\u4E3B\u673A\u8BA2\u9605\u7684\u6240\u6709\u591A\u64AD\u7F51\u7EDC\u3002</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-g</span> 
  <span class="token comment"># \u6709\u4E9B\u670D\u52A1\u5668\u4E0A\u6CA1\u5B89\u88C5telnet\u7B49\u547D\u540D\u8DDF\u6CA1\u6709nmap,\u6B64\u65F6\u60F3\u770B\u8FDC\u7A0B\u7AEF\u53E3\u662F\u5426\u5F00\u653E\uFF1F</span>
  $ <span class="token builtin class-name">echo</span> <span class="token operator">&gt;</span>/dev/tcp/8.8.8.8/53 <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;open&quot;</span>
  <span class="token comment"># \u7528netstat\u663E\u793A\u6240\u6709tcp4\u76D1\u542C\u7AEF\u53E3</span>
  $ <span class="token function">netstat</span> <span class="token parameter variable">-lnt4</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $4}&#39;</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-f2</span> -d: <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-o</span> <span class="token string">&#39;[0-9]*&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="route" tabindex="-1"><a class="header-anchor" href="#route" aria-hidden="true">#</a> route</h5><p>\u8BE5\u547D\u4EE4\u7528\u6765\u663E\u793A\u5E76\u8BBE\u7F6ELinux\u5185\u6838\u4E2D\u7684\u7F51\u7EDC\u8DEF\u7531\u8868\uFF0C\u4E3B\u8981\u8BBE\u7F6E\u9759\u6001\u8DEF\u7531\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage: route <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> \u53C2\u6570
\u9009\u9879:
    -A\uFF1A\u8BBE\u7F6E\u5730\u5740\u7C7B\u578B\uFF1B
    -C\uFF1A\u6253\u5370\u5C06Linux\u6838\u5FC3\u7684\u8DEF\u7531\u7F13\u5B58\uFF1B
    -v\uFF1A\u8BE6\u7EC6\u4FE1\u606F\u6A21\u5F0F\uFF1B
    -n\uFF1A\u4E0D\u6267\u884CDNS\u53CD\u5411\u67E5\u627E\uFF0C\u76F4\u63A5\u663E\u793A\u6570\u5B57\u5F62\u5F0F\u7684IP\u5730\u5740\uFF1B
    -e\uFF1Anetstat\u683C\u5F0F\u663E\u793A\u8DEF\u7531\u8868\uFF1B
    -net\uFF1A\u5230\u4E00\u4E2A\u7F51\u7EDC\u7684\u8DEF\u7531\u8868\uFF1B
    -host\uFF1A\u5230\u4E00\u4E2A\u4E3B\u673A\u7684\u8DEF\u7531\u8868\u3002
 \u53C2\u6570:
    Add\uFF1A\u589E\u52A0\u6307\u5B9A\u7684\u8DEF\u7531\u8BB0\u5F55\uFF1B
    Del\uFF1A\u5220\u9664\u6307\u5B9A\u7684\u8DEF\u7531\u8BB0\u5F55\uFF1B
    Target\uFF1A\u76EE\u7684\u7F51\u7EDC\u6216\u76EE\u7684\u4E3B\u673A\uFF1B
    gw\uFF1A\u8BBE\u7F6E\u9ED8\u8BA4\u7F51\u5173\uFF1B
    mss\uFF1A\u8BBE\u7F6ETCP\u7684\u6700\u5927\u533A\u5757\u957F\u5EA6\uFF08MSS\uFF09\uFF0C\u5355\u4F4DMB\uFF1B
    window\uFF1A\u6307\u5B9A\u901A\u8FC7\u8DEF\u7531\u8868\u7684TCP\u8FDE\u63A5\u7684TCP\u7A97\u53E3\u5927\u5C0F\uFF1B
    dev\uFF1A\u8DEF\u7531\u8BB0\u5F55\u6240\u8868\u793A\u7684\u7F51\u7EDC\u63A5\u53E3\u3002
 \u5B9E\u4F8B:
 	<span class="token comment"># \u663E\u793A\u5F53\u524D\u8DEF\u7531</span>
 	$ route
 	<span class="token comment"># \u589E\u52A0\u4E00\u6761\u5230\u8FBE244.0.0.0\u7684\u8DEF\u7531\u3002</span>
 	$ route <span class="token function">add</span> <span class="token parameter variable">-net</span> <span class="token number">224.0</span>.0.0 netmask <span class="token number">240.0</span>.0.0 dev eth0
 	<span class="token comment"># \u5220\u9664\u8DEF\u7531</span>
 	$ route del <span class="token parameter variable">-net</span> <span class="token number">224.0</span>.0.0 netmask <span class="token number">240.0</span>.0.0
 	<span class="token comment"># \u5220\u9664\u7F51\u5173</span>
 	$ route del default gw <span class="token number">192.168</span>.120.240
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="traceroute" tabindex="-1"><a class="header-anchor" href="#traceroute" aria-hidden="true">#</a> traceroute</h5><p>\u547D\u4EE4\u7528\u4E8E\u8FFD\u8E2A\u6570\u636E\u5305\u5728\u7F51\u7EDC\u4E0A\u7684\u4F20\u8F93\u65F6\u7684\u5168\u90E8\u8DEF\u5F84\uFF0C\u5B83\u9ED8\u8BA4\u53D1\u9001\u7684\u6570\u636E\u5305\u5927\u5C0F\u662F40\u5B57\u8282</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage: traceroute<span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span><span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
\u9009\u9879:
  -d\uFF1A\u4F7F\u7528Socket\u5C42\u7EA7\u7684\u6392\u9519\u529F\u80FD\uFF1B
  -f<span class="token operator">&lt;</span>\u5B58\u6D3B\u6570\u503C<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u7B2C\u4E00\u4E2A\u68C0\u6D4B\u6570\u636E\u5305\u7684\u5B58\u6D3B\u6570\u503CTTL\u7684\u5927\u5C0F\uFF1B
  -F\uFF1A\u8BBE\u7F6E\u52FF\u79BB\u65AD\u4F4D\uFF1B
  -g<span class="token operator">&lt;</span>\u7F51\u5173<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u6765\u6E90\u8DEF\u7531\u7F51\u5173\uFF0C\u6700\u591A\u53EF\u8BBE\u7F6E8\u4E2A\uFF1B
  -i<span class="token operator">&lt;</span>\u7F51\u7EDC\u754C\u9762<span class="token operator">&gt;</span>\uFF1A\u4F7F\u7528\u6307\u5B9A\u7684\u7F51\u7EDC\u754C\u9762\u9001\u51FA\u6570\u636E\u5305\uFF1B
  -I\uFF1A\u4F7F\u7528ICMP\u56DE\u5E94\u53D6\u4EE3UDP\u8D44\u6599\u4FE1\u606F\uFF1B
  -m<span class="token operator">&lt;</span>\u5B58\u6D3B\u6570\u503C<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u68C0\u6D4B\u6570\u636E\u5305\u7684\u6700\u5927\u5B58\u6D3B\u6570\u503CTTL\u7684\u5927\u5C0F\uFF1B
  -n\uFF1A\u76F4\u63A5\u4F7F\u7528IP\u5730\u5740\u800C\u975E\u4E3B\u673A\u540D\u79F0\uFF1B
  -p<span class="token operator">&lt;</span>\u901A\u4FE1\u7AEF\u53E3<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6EUDP\u4F20\u8F93\u534F\u8BAE\u7684\u901A\u4FE1\u7AEF\u53E3\uFF1B
  -r\uFF1A\u5FFD\u7565\u666E\u901A\u7684Routing Table\uFF0C\u76F4\u63A5\u5C06\u6570\u636E\u5305\u9001\u5230\u8FDC\u7AEF\u4E3B\u673A\u4E0A\u3002
  -s<span class="token operator">&lt;</span>\u6765\u6E90\u5730\u5740<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u672C\u5730\u4E3B\u673A\u9001\u51FA\u6570\u636E\u5305\u7684IP\u5730\u5740\uFF1B
  -t<span class="token operator">&lt;</span>\u670D\u52A1\u7C7B\u578B<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u68C0\u6D4B\u6570\u636E\u5305\u7684TOS\u6570\u503C\uFF1B
  -v\uFF1A\u8BE6\u7EC6\u663E\u793A\u6307\u4EE4\u7684\u6267\u884C\u8FC7\u7A0B\uFF1B
  -w<span class="token operator">&lt;</span>\u8D85\u65F6\u79D2\u6570<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u7B49\u5F85\u8FDC\u7AEF\u4E3B\u673A\u56DE\u62A5\u7684\u65F6\u95F4\uFF1B
  -x\uFF1A\u5F00\u542F\u6216\u5173\u95ED\u6570\u636E\u5305\u7684\u6B63\u786E\u6027\u68C0\u9A8C\u3002
 \u5B9E\u4F8B:
 	<span class="token comment"># \u6D4B\u8BD5\u5230google.com\u7684\u8DEF\u7531</span>
 	$ <span class="token function">traceroute</span> www.google.com
 	<span class="token comment"># \u8BBE\u7F6E\u8DF3\u8F6C</span>
 	$ <span class="token function">traceroute</span> <span class="token parameter variable">-m</span> <span class="token number">10</span> www.google.com
 	<span class="token comment"># \u77E5\u9053\u65AD\u5F00</span>
 	$ <span class="token function">traceroute</span> <span class="token parameter variable">-p</span> <span class="token number">10086</span> www.google.com
 	<span class="token comment"># \u7ED5\u8FC7\u6B63\u5E38\u7684\u8DEF\u7531\u8868\uFF0C\u76F4\u63A5\u53D1\u9001\u5230\u7F51\u7EDC\u76F8\u8FDE\u7684\u4E3B\u673A</span>
 	$ <span class="token function">traceroute</span> <span class="token parameter variable">-r</span> www.google.com
 	<span class="token comment"># \u628A\u5BF9\u5916\u53D1\u63A2\u6D4B\u5305\u7684\u7B49\u5F85\u54CD\u5E94\u65F6\u95F4\u8BBE\u7F6E\u4E3A3\u79D2</span>
 	$ <span class="token function">traceroute</span> <span class="token parameter variable">-w</span> <span class="token number">3</span> www.google.com
 	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="nslookup-dig" tabindex="-1"><a class="header-anchor" href="#nslookup-dig" aria-hidden="true">#</a> nslookup + dig</h5><p>Linux\u4E2D\u548Cdns\u6709\u5173\u7684\u914D\u7F6E\u5206\u522B\u4E3A:host\u6587\u4EF6,\u7F51\u5361\u77E5\u9053\u7684dns\u670D\u52A1\u5730\u5740,resolv.conf\u6307\u5B9A\u7684\u670D\u52A1\u3002\u5728linux\u53EF\u4EE5\u4F7F\u7528nslookup\u548Cdig\u6765\u67E5\u8BE2\u57DF\u540D\u89E3\u6790\u7684\u5DE5\u5177\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage: <span class="token function">nslookup</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> \u53C2\u6570
\u9009\u9879: 
	-sil\uFF1A\u4E0D\u663E\u793A\u4EFB\u4F55\u8B66\u544A\u4FE1\u606F\u3002
\u5B9E\u4F8B:
	$ <span class="token function">nslookup</span> www.google.com

usage: <span class="token function">dig</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> \u53C2\u6570
\u9009\u9879:
  @<span class="token operator">&lt;</span>\u670D\u52A1\u5668\u5730\u5740<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u8FDB\u884C\u57DF\u540D\u89E3\u6790\u7684\u57DF\u540D\u670D\u52A1\u5668\uFF1B
  -b<span class="token operator">&lt;</span>ip\u5730\u5740<span class="token operator">&gt;</span>\uFF1A\u5F53\u4E3B\u673A\u5177\u6709\u591A\u4E2AIP\u5730\u5740\uFF0C\u6307\u5B9A\u4F7F\u7528\u672C\u673A\u7684\u54EA\u4E2AIP\u5730\u5740\u5411\u57DF\u540D\u670D\u52A1\u5668\u53D1\u9001\u57DF\u540D\u67E5\u8BE2\u8BF7\u6C42\uFF1B
  -f<span class="token operator">&lt;</span>\u6587\u4EF6\u540D\u79F0<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9Adig\u4EE5\u6279\u5904\u7406\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u6307\u5B9A\u7684\u6587\u4EF6\u4E2D\u4FDD\u5B58\u7740\u9700\u8981\u6279\u5904\u7406\u67E5\u8BE2\u7684DNS\u4EFB\u52A1\u4FE1\u606F\uFF1B
  -P\uFF1A\u6307\u5B9A\u57DF\u540D\u670D\u52A1\u5668\u6240\u4F7F\u7528\u7AEF\u53E3\u53F7\uFF1B
  -t<span class="token operator">&lt;</span>\u7C7B\u578B<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u8981\u67E5\u8BE2\u7684DNS\u6570\u636E\u7C7B\u578B\uFF1B
  -x<span class="token operator">&lt;</span>IP\u5730\u5740<span class="token operator">&gt;</span>\uFF1A\u6267\u884C\u9006\u5411\u57DF\u540D\u67E5\u8BE2\uFF1B
  -4\uFF1A\u4F7F\u7528IPv4\uFF1B
  -6\uFF1A\u4F7F\u7528IPv6\uFF1B
  -h\uFF1A\u663E\u793A\u6307\u4EE4\u5E2E\u52A9\u4FE1\u606F\u3002
\u5B9E\u4F8B:
	<span class="token comment"># \u67E5\u770B\u57DF\u540D</span>
	$ <span class="token function">dig</span> www.google.com
	<span class="token comment"># \u67E5\u770BMX\u8BB0\u5F55</span>
	$ <span class="token function">dig</span> www.google.com <span class="token parameter variable">-t</span> MX
	<span class="token comment"># \u67E5\u770BCNAME</span>
	$ <span class="token function">dig</span> www.google.com <span class="token parameter variable">-t</span> CNAME
	<span class="token comment"># \u6307\u5B9Adns\uFF0C\u4F8B\u5982\u67E5\u8BE28.8.8.8\u4E2D\u76840opslab.com\u8BB0\u5F55</span>
	$ <span class="token function">dig</span> +short @8.8.8.8 0opslab.com
	<span class="token comment"># \u67E5\u770B\u5B8C\u6574\u7684\u89E3\u6790\u4FE1\u606F</span>
	$ <span class="token function">dig</span> +trace 0opslab.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F51\u7EDC\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u76D1\u63A7" aria-hidden="true">#</a> \u7F51\u7EDC\u76D1\u63A7</h2><p>\u7F51\u7EDC\u76D1\u63A7\u4E0D\u8BBA\u662F\u5F00\u53D1\u8FD8\u662F\u8FD0\u7EF4\u90FD\u5E94\u5B9E\u65F6\u638C\u63E1\u7684\u4E00\u4E2A\u6570\u636E\uFF0C\u5728\u5E73\u65F6\u5F00\u53D1\u4E2D\u6709\u4E91\u670D\u52A1\u63D0\u4F9B\u7684\u76D1\u63A7\u754C\u9762\uFF0C\u548C\u7EDF\u4E00\u90E8\u7F72\u7684\u76D1\u63A7\u5DE5\u5177zabbix\u548Cnagios\u7B49\u670D\u52A1\u3002\u4F46\u662F\u5229\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u63D0\u4F9B\u7684\u547D\u4EE4\u67E5\u770B\u548C\u76D1\u63A7\u7F51\u7EDC\u4E5F\u662F\u5FC5\u5907\u6280\u80FD\u3002\u7CFB\u7EDF\u63D0\u4F9B\u7684\u5E38\u7528\u5DE5\u5177\u6709,tcpdump,dstat\u7B49\u3002\u53E6\u5916\u6709\u4E00\u4E9B\u6BD4\u8F83\u597D\u7528\u7684\u7B2C\u4E09\u65B9\u76D1\u63A7\u8F6F\u4EF6,iftop,iptraf,nload\u7B49\u3002</p><ul><li>\u76D1\u63A7\u603B\u4F53\u5E26\u5BBD\u4F7F\u7528\u2015\u2015nload\u3001bmon\u3001slurm\u3001bwm-ng\u3001cbm\u3001speedometer\u548Cnetload</li><li>\u76D1\u63A7\u603B\u4F53\u5E26\u5BBD\u4F7F\u7528\uFF08\u6279\u91CF\u5F0F\u8F93\u51FA\uFF09\u2015\u2015vnstat\u3001ifstat\u3001dstat\u548Ccollectl</li><li>\u6BCF\u4E2A\u5957\u63A5\u5B57\u8FDE\u63A5\u7684\u5E26\u5BBD\u4F7F\u7528\u2015\u2015iftop\u3001iptraf\u3001tcptrack\u3001pktstat\u3001netwatch\u548Ctrafshow</li><li>\u6BCF\u4E2A\u8FDB\u7A0B\u7684\u5E26\u5BBD\u4F7F\u7528\u2015\u2015nethogs</li></ul><h3 id="tcpdump" tabindex="-1"><a class="header-anchor" href="#tcpdump" aria-hidden="true">#</a> tcpdump</h3><p>\u8BF4\u9053\u7F51\u7EDC\u76D1\u63A7\uFF0C\u5728linux\u6709\u6B3E\u5DE5\u5177\u4E0D\u5F97\u4E0D\u8BF4\uFF0C\u5B83\u5C31\u662Ftcpdump\uFF0C\u4ED6\u662F\u4E00\u6B3E\u547D\u4EE4\u884C\u4E0B\u7684sniffer\u5DE5\u5177\uFF0Cdump the traffic on a network\uFF0C\u6839\u636E\u4F7F\u7528\u8005\u7684\u5B9A\u4E49\u5BF9\u7F51\u7EDC\u4E0A\u7684\u6570\u636E\u5305\u8FDB\u884C\u622A\u83B7\u7684\u5305\u5206\u6790\u5DE5\u5177\u3002 tcpdump\u53EF\u4EE5\u5C06\u7F51\u7EDC\u4E2D\u4F20\u9001\u7684\u6570\u636E\u5305\u7684\u201C\u5934\u201D\u5B8C\u5168\u622A\u83B7\u4E0B\u6765\u63D0\u4F9B\u5206\u6790\u3002\u5B83\u652F \u6301\u9488\u5BF9\u7F51\u7EDC\u5C42\u3001\u534F\u8BAE\u3001\u4E3B\u673A\u3001\u7F51\u7EDC\u6216\u7AEF\u53E3\u7684\u8FC7\u6EE4\uFF0C\u5E76\u63D0\u4F9Band\u3001or\u3001not\u7B49\u903B\u8F91\u8BED\u53E5\u6765\u5E2E\u52A9\u4F60\u53BB\u6389\u65E0\u7528\u7684\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage :tcpdum <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span>
\u9009\u9879:
  -a\uFF1A\u5C1D\u8BD5\u5C06\u7F51\u7EDC\u548C\u5E7F\u64AD\u5730\u5740\u8F6C\u6362\u6210\u540D\u79F0\uFF1B
  -c<span class="token operator">&lt;</span>\u6570\u636E\u5305\u6570\u76EE<span class="token operator">&gt;</span>\uFF1A\u6536\u5230\u6307\u5B9A\u7684\u6570\u636E\u5305\u6570\u76EE\u540E\uFF0C\u5C31\u505C\u6B62\u8FDB\u884C\u503E\u5012\u64CD\u4F5C\uFF1B
  -d\uFF1A\u628A\u7F16\u8BD1\u8FC7\u7684\u6570\u636E\u5305\u7F16\u7801\u8F6C\u6362\u6210\u53EF\u9605\u8BFB\u7684\u683C\u5F0F\uFF0C\u5E76\u503E\u5012\u5230\u6807\u51C6\u8F93\u51FA\uFF1B
  -dd\uFF1A\u628A\u7F16\u8BD1\u8FC7\u7684\u6570\u636E\u5305\u7F16\u7801\u8F6C\u6362\u6210C\u8BED\u8A00\u7684\u683C\u5F0F\uFF0C\u5E76\u503E\u5012\u5230\u6807\u51C6\u8F93\u51FA\uFF1B
  -ddd\uFF1A\u628A\u7F16\u8BD1\u8FC7\u7684\u6570\u636E\u5305\u7F16\u7801\u8F6C\u6362\u6210\u5341\u8FDB\u5236\u6570\u5B57\u7684\u683C\u5F0F\uFF0C\u5E76\u503E\u5012\u5230\u6807\u51C6\u8F93\u51FA\uFF1B
  -e\uFF1A\u5728\u6BCF\u5217\u503E\u5012\u8D44\u6599\u4E0A\u663E\u793A\u8FDE\u63A5\u5C42\u7EA7\u7684\u6587\u4EF6\u5934\uFF1B
  -f\uFF1A\u7528\u6570\u5B57\u663E\u793A\u7F51\u9645\u7F51\u7EDC\u5730\u5740\uFF1B
  -F<span class="token operator">&lt;</span>\u8868\u8FBE\u6587\u4EF6<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u5185\u542B\u8868\u8FBE\u65B9\u5F0F\u7684\u6587\u4EF6\uFF1B
  -i<span class="token operator">&lt;</span>\u7F51\u7EDC\u754C\u9762<span class="token operator">&gt;</span>\uFF1A\u4F7F\u7528\u6307\u5B9A\u7684\u7F51\u7EDC\u622A\u9762\u9001\u51FA\u6570\u636E\u5305\uFF1B
  -l\uFF1A\u4F7F\u7528\u6807\u51C6\u8F93\u51FA\u5217\u7684\u7F13\u51B2\u533A\uFF1B
  -n\uFF1A\u4E0D\u628A\u4E3B\u673A\u7684\u7F51\u7EDC\u5730\u5740\u8F6C\u6362\u6210\u540D\u5B57\uFF1B
  -N\uFF1A\u4E0D\u5217\u51FA\u57DF\u540D\uFF1B
  -O\uFF1A\u4E0D\u5C06\u6570\u636E\u5305\u7F16\u7801\u6700\u4F73\u5316\uFF1B
  -p\uFF1A\u4E0D\u8BA9\u7F51\u7EDC\u754C\u9762\u8FDB\u5165\u6DF7\u6742\u6A21\u5F0F\uFF1B
  <span class="token parameter variable">-q</span> \uFF1A\u5FEB\u901F\u8F93\u51FA\uFF0C\u4EC5\u5217\u51FA\u5C11\u6570\u7684\u4F20\u8F93\u534F\u8BAE\u4FE1\u606F\uFF1B
  -r<span class="token operator">&lt;</span>\u6570\u636E\u5305\u6587\u4EF6<span class="token operator">&gt;</span>\uFF1A\u4ECE\u6307\u5B9A\u7684\u6587\u4EF6\u8BFB\u53D6\u6570\u636E\u5305\u6570\u636E\uFF1B
  -s<span class="token operator">&lt;</span>\u6570\u636E\u5305\u5927\u5C0F<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u6BCF\u4E2A\u6570\u636E\u5305\u7684\u5927\u5C0F\uFF1B
  -S\uFF1A\u7528\u7EDD\u5BF9\u800C\u975E\u76F8\u5BF9\u6570\u503C\u5217\u51FATCP\u5173\u8054\u6570\uFF1B
  -t\uFF1A\u5728\u6BCF\u5217\u503E\u5012\u8D44\u6599\u4E0A\u4E0D\u663E\u793A\u65F6\u95F4\u6233\u8BB0\uFF1B
  -tt\uFF1A \u5728\u6BCF\u5217\u503E\u5012\u8D44\u6599\u4E0A\u663E\u793A\u672A\u7ECF\u683C\u5F0F\u5316\u7684\u65F6\u95F4\u6233\u8BB0\uFF1B
  -T<span class="token operator">&lt;</span>\u6570\u636E\u5305\u7C7B\u578B<span class="token operator">&gt;</span>\uFF1A\u5F3A\u5236\u5C06\u8868\u8FBE\u65B9\u5F0F\u6240\u6307\u5B9A\u7684\u6570\u636E\u5305\u8F6C\u8BD1\u6210\u8BBE\u7F6E\u7684\u6570\u636E\u5305\u7C7B\u578B\uFF1B
  -v\uFF1A\u8BE6\u7EC6\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF1B
  -vv\uFF1A\u66F4\u8BE6\u7EC6\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF1B
  -x\uFF1A\u7528\u5341\u516D\u8FDB\u5236\u5B57\u7801\u5217\u51FA\u6570\u636E\u5305\u8D44\u6599\uFF1B
  -w<span class="token operator">&lt;</span>\u6570\u636E\u5305\u6587\u4EF6<span class="token operator">&gt;</span>\uFF1A\u628A\u6570\u636E\u5305\u6570\u636E\u5199\u5165\u6307\u5B9A\u7684\u6587\u4EF6\u3002
\u5B9E\u4F8B:
	<span class="token comment"># \u622A\u53D6\u6240\u6709\u6570\u636E\u5305</span>
	$ tcpdump
	<span class="token comment"># \u76D1\u89C6\u6307\u5B9A\u63A5\u53E3\u4E0A\u7684\u6570\u636E\u5305</span>
	$ tcpdump <span class="token parameter variable">-i</span> eth1
	<span class="token comment"># \u6253\u5370\u6240\u6709\u8FDB\u5165\u6216\u79BB\u5F00sundown\u7684\u6570\u636E\u5305</span>
	$ tcpdump <span class="token function">host</span> sundown
	<span class="token comment"># \u4E5F\u53EF\u4EE5\u6307\u5B9Aip,\u4F8B\u5982\u622A\u83B7\u6240\u6709210.27.48.1 \u7684\u4E3B\u673A\u6536\u5230\u7684\u548C\u53D1\u51FA\u7684\u6240\u6709\u7684\u6570\u636E\u5305</span>
	$ tcpdump <span class="token function">host</span> <span class="token number">210.27</span>.48.1 
	<span class="token comment"># \u6253\u5370\u6240\u6709hello \u6708hot\u6216\u8005\u4E0Eace\u4E4B\u95F4\u7684\u901A\u4FE1\u5305</span>
	$ tcpdump <span class="token function">host</span> hello and <span class="token punctuation">\\</span><span class="token punctuation">(</span> hot or ace <span class="token punctuation">\\</span><span class="token punctuation">)</span>
	<span class="token comment"># \u4E3B\u673A210.27.48.1 \u548C\u4E3B\u673A210.27.48.2 \u6216210.27.48.3\u7684\u901A\u4FE1</span>
	$ tcpdump <span class="token function">host</span> <span class="token number">210.27</span>.48.1 and <span class="token punctuation">\\</span> <span class="token punctuation">(</span><span class="token number">210.27</span>.48.2 or <span class="token number">210.27</span>.48.3 <span class="token punctuation">\\</span><span class="token punctuation">)</span>
	<span class="token comment"># \u6253\u5370ace\u4E0E\u4EFB\u4F55\u5176\u4ED6\u4E3B\u673A\u4E4B\u95F4\u901A\u4FE1\u7684IP \u6570\u636E\u5305, \u4F46\u4E0D\u5305\u62EC\u4E0Ehelios\u4E4B\u95F4\u7684\u6570\u636E\u5305.</span>
	$ tcpdump <span class="token function">ip</span> <span class="token function">host</span> ace and not helios
	<span class="token comment"># \u5982\u679C\u60F3\u8981\u83B7\u53D6\u4E3B\u673A210.27.48.1\u9664\u4E86\u548C\u4E3B\u673A210.27.48.2\u4E4B\u5916\u6240\u6709\u4E3B\u673A\u901A\u4FE1\u7684ip\u5305\uFF0C\u4F7F\u7528\u547D\u4EE4\uFF1A</span>
	$ tcpdump <span class="token function">ip</span> <span class="token function">host</span> <span class="token number">210.27</span>.48.1 and <span class="token operator">!</span> <span class="token number">210.27</span>.48.2
	<span class="token comment"># \u622A\u83B7\u4E3B\u673Ahostname\u53D1\u9001\u7684\u6240\u6709\u6570\u636E</span>
	$ tcpdump <span class="token parameter variable">-i</span> eth0 src <span class="token function">host</span> <span class="token function">hostname</span>
	<span class="token comment"># \u76D1\u89C6\u6240\u6709\u9001\u5230\u4E3B\u673Ahostname\u7684\u6570\u636E\u5305</span>
	$ tcpdump <span class="token parameter variable">-i</span> eth0 dst <span class="token function">host</span> <span class="token function">hostname</span>
 	<span class="token comment"># \u5982\u679C\u60F3\u8981\u83B7\u53D6\u4E3B\u673A210.27.48.1\u63A5\u6536\u6216\u53D1\u51FA\u7684telnet\u5305\uFF0C\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4</span>
	$ tcpdump tcp port <span class="token number">23</span> and <span class="token function">host</span> <span class="token number">210.27</span>.48.1
	<span class="token comment"># \u5BF9\u672C\u673A\u7684udp 123 \u7AEF\u53E3\u8FDB\u884C\u76D1\u89C6 123 \u4E3Antp\u7684\u670D\u52A1\u7AEF\u53E3</span>
	$ tcpdump udp port <span class="token number">123</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dstat" tabindex="-1"><a class="header-anchor" href="#dstat" aria-hidden="true">#</a> dstat</h3><p>dstat\u547D\u4EE4\u662F\u4E00\u4E2A\u7528\u6765\u66FF\u6362vmstat\u3001iostat\u3001netstat\u3001\u548Cifstat\u8FD9\u4E9B\u5DE5\u5177\u7684\u3002\u662F\u4E00\u4E2A\u5168\u80FD\u7CFB\u7EDF\u4FE1\u606F\u7EDF\u8BA1\u5DE5\u5177\u3002dstat\u975E\u5E38\u5F3A\u5927\uFF0C\u53EF\u4EE5\u5B9E\u65F6\u7684\u76D1\u63A7cpu\u3001\u78C1\u76D8\u3001\u7F51\u7EDC\u3001IO\u3001\u5185\u5B58\u7B49\u4F7F\u7528\u60C5\u51B5,\u4E0Esysstat\u76F8\u6BD4\uFF0Cdstat\u62E5\u6709\u4E00\u4E2A\u5F69\u8272\u7684\u754C\u9762\uFF0C\u5728\u624B\u52A8\u89C2\u5BDF\u6027\u80FD\u72B6\u51B5\u65F6\uFF0C\u6570\u636E\u6BD4\u8F83\u663E\u773C\u5BB9\u6613\u89C2\u5BDF\uFF1B\u800C\u4E14dstat\u652F\u6301\u5373\u65F6\u5237\u65B0\uFF0C\u8B6C\u5982\u8F93\u5165<code>dstat 3</code>\u5373\u6BCF\u4E09\u79D2\u6536\u96C6\u4E00\u6B21\uFF0C\u4F46\u6700\u65B0\u7684\u6570\u636E\u90FD\u4F1A\u6BCF\u79D2\u5237\u65B0\u663E\u793A\u3002\u548Csysstat\u76F8\u540C\u7684\u662F\uFF0Cdstat\u4E5F\u53EF\u4EE5\u6536\u96C6\u6307\u5B9A\u7684\u6027\u80FD\u8D44\u6E90\uFF0C\u8B6C\u5982<code>dstat -c</code>\u5373\u663E\u793ACPU\u7684\u4F7F\u7528\u60C5\u51B5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage:
	dstat <span class="token punctuation">[</span>-afv<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>delay <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">]</span>
params:
	<span class="token comment"># dstat --list \u53EF\u4EE5\u67E5\u770Bdstat\u80FD\u4F7F\u7528\u7684\u6240\u6709\u53C2\u6570</span>
	-c,--cpu \u7EDF\u8BA1CPU\u72B6\u6001\uFF0C\u5305\u62EC user, system, idle, \u7B49\u5F85\u78C1\u76D8IO,\u786C\u4EF6\u4E2D\u65AD,\u8F6F\u4EF6\u4E2D\u65AD\u7B49\uFF1B
	-d, <span class="token parameter variable">--disk</span> \u7EDF\u8BA1\u78C1\u76D8\u8BFB\u5199\u72B6\u6001
	<span class="token parameter variable">-D</span> total,sda \u7EDF\u8BA1\u6307\u5B9A\u78C1\u76D8\u6216\u6C47\u603B\u4FE1\u606F
	-l, <span class="token parameter variable">--load</span> \u7EDF\u8BA1\u7CFB\u7EDF\u8D1F\u8F7D\u60C5\u51B5\uFF0C\u5305\u62EC1\u5206\u949F\u30015\u5206\u949F\u300115\u5206\u949F\u5E73\u5747\u503C
	-m, <span class="token parameter variable">--mem</span> \u7EDF\u8BA1\u7CFB\u7EDF\u7269\u7406\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\uFF0C\u5305\u62ECused, buffers, cache, <span class="token function">free</span>
	-s, <span class="token parameter variable">--swap</span> \u7EDF\u8BA1swap\u5DF2\u4F7F\u7528\u548C\u5269\u4F59\u91CF
	-n, <span class="token parameter variable">--net</span> \u7EDF\u8BA1\u7F51\u7EDC\u4F7F\u7528\u60C5\u51B5\uFF0C\u5305\u62EC\u63A5\u6536\u548C\u53D1\u9001\u6570\u636E
	<span class="token parameter variable">-N</span> eth1,total  \u7EDF\u8BA1eth1\u63A5\u53E3\u6C47\u603B\u6D41\u91CF
	-r, <span class="token parameter variable">--io</span> \u7EDF\u8BA1I/O\u8BF7\u6C42\uFF0C\u5305\u62EC\u8BFB\u5199\u8BF7\u6C42
	-p, <span class="token parameter variable">--proc</span> \u7EDF\u8BA1\u8FDB\u7A0B\u4FE1\u606F\uFF0C\u5305\u62ECrunnable\u3001uninterruptible\u3001new
	-y, <span class="token parameter variable">--sys</span> \u7EDF\u8BA1\u7CFB\u7EDF\u4FE1\u606F\uFF0C\u5305\u62EC\u4E2D\u65AD\u3001\u4E0A\u4E0B\u6587\u5207\u6362
	<span class="token parameter variable">-t</span> \u663E\u793A\u7EDF\u8BA1\u65F6\u65F6\u95F4\uFF0C\u5BF9\u5206\u6790\u5386\u53F2\u6570\u636E\u975E\u5E38\u6709\u7528
	<span class="token parameter variable">--fs</span> \u7EDF\u8BA1\u6587\u4EF6\u6253\u5F00\u6570\u548Cinodes\u6570
	<span class="token parameter variable">--nocolor</span> \u4E0D\u663E\u793A\u989C\u8272
	<span class="token parameter variable">--socket</span> \u663E\u793A\u7F51\u7EDC\u7EDF\u8BA1\u6570\u636E
	<span class="token parameter variable">--tcp</span> \u663E\u793A\u5E38\u7528\u7684tcp\u7EDF\u8BA1
	<span class="token parameter variable">--udp</span> \u76D1\u542C\u7684UDP\u63A5\u53E3\u53CA\u5176\u5F53\u524D\u7528\u91CF\u7684\u4E00\u4E9B\u52A8\u6001\u6570\u636E
\u53E6\u5916dstat\u9644\u5E26\u4E86\u4E00\u4E9B\u5F3A\u5927\u7684\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u901A\u7528/usr/share/dstat\u67E5\u770B\u3002\u5E38\u7528\u7684\u6709
	--dist-util \u663E\u793A\u67D0\u4E00\u65F6\u95F4\u78C1\u76D8\u7684\u5FD9\u788C\u60C5\u51B5
	<span class="token parameter variable">--freespace</span> \u663E\u793A\u5F53\u524D\u78C1\u76D8\u7684\u4F7F\u7528\u7387
	--proc-count \u663E\u793A\u6B63\u5728\u8FD0\u884C\u7684\u7A0B\u5E8F\u6570\u91CF
	--top-bio \u663E\u793A\u5757I/O\u6700\u5927\u7684\u8FDB\u573A
	--top-cpu \u663E\u793ACPU\u5360\u7528\u6700\u5927\u7684\u8FDB\u7A0B
	--top-io \u663E\u793A\u6B63\u5E38I/O\u6700\u5927\u7684\u8FDB\u7A0B
	--top-mem \u663E\u793A\u5360\u7528\u6700\u591A\u5185\u5B58\u7684\u8FDB\u573A
	
example:
<span class="token comment"># dstat</span>
//cpu-usgae
//usr \u7528\u6237\u8FDB\u573A\u6D88\u8017cpu\u7684\u65F6\u95F4\u767E\u5206\u6BD4 sys\u5185\u6838\u8FDB\u7A0B\u6D88\u8017\u7684CPU\u65F6\u95F4\u767E\u5206\u6BD4 
//idl CPU\u5904\u5728\u7A7A\u95F2\u72B6\u6001\u65F6\u95F4\u767E\u5206\u6BD4
//wai IO\u7B49\u5F85\u6D88\u8017\u7684CPU\u65F6\u95F4\u767E\u5206\u6BD4 
//hiq \u786C\u4E2D\u65AD siq \u8F6F\u4E2D\u65AD
----total-cpu-usage---- -dsk/total- -net/total- ---paging-- ---system--
usr sys idl wai hiq siq<span class="token operator">|</span> <span class="token builtin class-name">read</span>  writ<span class="token operator">|</span> recv  send<span class="token operator">|</span>  <span class="token keyword">in</span>   out <span class="token operator">|</span> int   csw
  <span class="token number">0</span>   <span class="token number">0</span>  <span class="token number">99</span>   <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>7706B  164k<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">189</span>   <span class="token number">225</span>
  <span class="token number">0</span>   <span class="token number">0</span> <span class="token number">100</span>   <span class="token number">0</span>   <span class="token number">0</span>   <span class="token number">0</span><span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>4436B  826B<span class="token operator">|</span>   <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">195</span>   <span class="token number">248</span>
  
<span class="token comment"># dstat --top-mem --top-io --top-cpu</span>
--most-expensive- ----most-expensive---- -most-expensive-
  memory process <span class="token operator">|</span>     i/o process      <span class="token operator">|</span>  cpu process
systemd-jour23.0M<span class="token operator">|</span>weixin        <span class="token number">0</span>     <span class="token number">0</span> <span class="token operator">|</span>barad_agent  <span class="token number">0.0</span>

//\u67E5\u770B\u7CFB\u7EDF\u8D1F\u8F7D
<span class="token comment"># dstat -l</span>
//\u67E5\u770B\u7CFB\u7EDF\u5185\u5B58
<span class="token comment"># dstat -m</span>
// \u67E5\u770B\u5185\u5B58\u5360\u7528
<span class="token comment"># dstat -g -l -m -s --top-mem</span>
// \u8F93\u51FA\u4E00\u4E2Acsv\u6587\u4EF6
<span class="token comment"># dstat --output /tmp/sampleoutput.csv -cdn</span>
// \u67E5\u770Bcpu\u3001disk\u3001net\u3001page\u3001system\u7684\u4FE1\u606F \u6CA110\u79D2\u66F4\u65B0\u4E00\u6B21
<span class="token comment"># dstat 10</span>
//\u5C06\u76D1\u63A7\u4FE1\u606F\u4FDD\u5B58\u7684\u6587\u4EF6\u4E2D
<span class="token comment"># dstat 10 --output /tmp/ds.csv</span>
//\u76D1\u63A7swap\uFF0Cprocess\uFF0Csockets\uFF0Cfilesystem\u5E76\u663E\u793A\u76D1\u63A7\u7684\u65F6\u95F4
<span class="token comment"># dstat -tsp --socket --fs</span>
// \u76D1\u63A7\u5F53\u524D\u6700\u6D88\u8017IO\u7684\u8FDB\u7A0B\u548C\u6700\u6D88\u8017\u5757\u8BBE\u5907IO\u7684\u8FDB\u7A0B
<span class="token comment"># dstat -t --top-io-adv --top-bio-adv</span>
// \u76D1\u63A7\u5F53\u65F6\u6700\u8017CPU/BLOCK IO/\u5185\u5B58/IO\u7684\u8FDB\u7A0B
<span class="token comment"># dstat --top-cpu --top-bio --top-mem --top-io</span>
//\u67E5\u770B\u5168\u90E8\u5185\u5B58\u90FD\u6709\u8C01\u5728\u5360\u7528
<span class="token comment"># dstat -g -l -m -s --top-mem</span>
//\u663E\u793A\u4E00\u4E9B\u5173\u4E8ECPU\u8D44\u6E90\u635F\u8017\u7684\u6570\u636E
<span class="token comment">#dstat -c -y -l --proc-count --top-cpu</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u9AD8\u901F\u4E3B\u673A\u4E0A\u5229\u7528iftop\u7B49\u57FA\u4E8Elibpacp\u5E93\u7684\u5DE5\u5177\u6765\u8BF4\u4E0D\u80FD\u5B8C\u7F8E\u7684\u5DE5\u4F5C\uFF0C\u6B64\u65F6\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u76F8\u5E94\u7684\u7CFB\u7EDF\u6587\u4EF6\u8BB0\u5F55\u3002\u5229\u6DA6eth0\u7F51\u5361\u662F\u7684\u6570\u636E\u4FE1\u606F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u5BF9\u5E94\u7684\u6587\u4EF6</p><ul><li>/sys/class/net/eth0/statistics/rx_packets: \u6536\u5230\u7684\u6570\u636E\u5305\u6570\u636E</li><li>/sys/class/net/eth0/statistics/tx_packets: \u4F20\u8F93\u7684\u6570\u636E\u5305\u6570\u91CF</li><li>/sys/class/net/eth0/statistics/rx_bytes: \u63A5\u6536\u7684\u5B57\u8282\u6570</li><li>/sys/class/net/eth0/statistics/tx_bytes: \u4F20\u8F93\u7684\u5B57\u8282\u6570</li><li>/sys/class/net/eth0/statistics/rx_dropped: \u5F53\u6536\u5230\u5305\u6570\u636E\u5305\u4E0B\u964D\u7684\u6570\u636E\u91CF</li><li>/sys/class/net/eth0/statistics/tx_dropped: \u4F20\u8F93\u5305\u6570\u636E\u5305\u4E0B\u964D\u7684\u6570\u636E\u91CF</li></ul><p>\u8FD9\u4E9B\u6570\u636E\u4F1A\u6839\u636E\u5185\u6838\u6570\u636E\u53D1\u751F\u53D8\u66F4\u7684\u65F6\u5019\u81EA\u52A8\u5237\u65B0\u3002\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u7F16\u5199\u4E00\u7CFB\u5217\u7684\u811A\u672C\u8FDB\u884C\u5206\u6790\u5E76\u8BA1\u7B97\u6D41\u91CF\u7EDF\u8BA1</p>`,43),l=[t];function p(c,o){return s(),a("div",null,l)}const r=n(i,[["render",p],["__file","network.html.vue"]]);export{r as default};
