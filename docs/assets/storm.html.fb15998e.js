import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">## storm  \u5355\u8282\u70B9\u5B89\u88C5\u90E8\u7F72</span>

yum <span class="token function">install</span> <span class="token parameter variable">-y</span>  <span class="token function">curl</span> openssh-server openssh-clients postfix cronie <span class="token function">git</span> nmap <span class="token function">unzip</span> <span class="token function">wget</span> <span class="token function">lsof</span> xz gcc <span class="token function">make</span> <span class="token function">vim</span>  <span class="token function">curl</span> gcc-c++ libtool

<span class="token comment">##\u6CE8\u610F\u4FEE\u6539\u4E3B\u673A\u540D</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span>/etc/hosts<span class="token operator">&lt;&lt;</span><span class="token string">EOF
192.168.142.137   master.storm.com
EOF</span>

<span class="token function">hostname</span>   master.storm.com
<span class="token function">sed</span> <span class="token parameter variable">-i</span>  <span class="token string">&#39;/HOSTNAME/d&#39;</span> /etc/sysconfig/network
<span class="token builtin class-name">echo</span>  <span class="token string">&quot;HOSTNAME=master.storm.com&quot;</span> <span class="token operator">&gt;&gt;</span>/etc/sysconfig/network

<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span>/etc/profile<span class="token operator">&lt;&lt;</span><span class="token string">EOF
export JAVA_HOME=/opt/tomcat/jdk1.8.0_77/
export CLASSPATH=/opt/tomcat/jdk1.8.0_77/lib/*.jar:/opt/tomcat/jdk1.8.0_77/jre/lib/*.jar
export PATH=\\<span class="token environment constant">$PATH</span>:/opt/tomcat/jdk1.8.0_77/bin
EOF</span>

<span class="token builtin class-name">cd</span> /opt/
<span class="token function">tar</span> zxvf tomcat.tar

<span class="token builtin class-name">source</span>  /etc/profile

<span class="token comment">## \u7F16\u8BD1\u5B89\u88C5ZMQ\uFF1A</span>
<span class="token comment">#wget http://download.zeromq.org/zeromq-3.2.5.tar.gz</span>
<span class="token function">tar</span> zxvf  zeromq-3.2.5.tar.gz
<span class="token builtin class-name">cd</span> zeromq-3.2.5
./configure
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

<span class="token comment">## \u7F16\u8BD1\u5B89\u88C5JZMQ\uFF1A</span>
<span class="token comment">##git clone https://github.com/nathanmarz/jzmq.git</span>
<span class="token function">tar</span> zxvf  jzmq.tar
<span class="token builtin class-name">cd</span> jzmq
./autogen.sh
./configure
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>


<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/zookeeper/

<span class="token function">tar</span> zxvf zk.tar
<span class="token function">cat</span> <span class="token operator">&gt;</span>/opt/zk/conf/zoo.cfg<span class="token operator">&lt;&lt;</span><span class="token string">EOF
maxClientCnxns=500
tickTime=2000
initLimit=10
syncLimit=5
dataDir=/data/zookeeper/
dataLogDir=/data/zookeeper/logs
clientPort=2181
server.1=master.storm.com:2888:3888
EOF</span>

<span class="token builtin class-name">cd</span> /opt/zk/bin/
/opt/zk/bin/zkServer.sh start

<span class="token builtin class-name">cd</span> /opt
<span class="token function">tar</span> zxvf apache-storm-0.10.1.tar.gz
<span class="token function">mkdir</span>  <span class="token parameter variable">-p</span> /data/storm

<span class="token function">cat</span> <span class="token operator">&gt;</span>/opt/apache-storm-0.10.1/conf/storm.yaml<span class="token operator">&lt;&lt;</span><span class="token string">EOF
storm.zookeeper.servers:
     - &quot;master.storm.com&quot;
storm.zookeeper.port: 2181

nimbus.host: &quot;master.storm.com&quot;

supervisor.slots.ports:
    - 6700
    - 6701
    - 6702
    - 6703

storm.local.dir: &quot;/data/storm&quot;
EOF</span>


<span class="token comment">## \u542F\u52A8Storm\u5404\u4E2A\u540E\u53F0\u8FDB\u7A0B\u7684\u65B9\u5F0F\uFF1A</span>

<span class="token comment">##Nimbus: \u5728Storm\u4E3B\u63A7\u8282\u70B9\u4E0A\u8FD0\u884C</span>
<span class="token builtin class-name">cd</span> /opt/apache-storm-0.10.1
bin/storm nimbus <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token function">sleep</span> <span class="token number">10</span>
<span class="token comment">## Supervisor: \u5728Storm\u5404\u4E2A\u5DE5\u4F5C\u8282\u70B9\u4E0A\u8FD0\u884C</span>
<span class="token builtin class-name">cd</span> /opt/apache-storm-0.10.1
bin/storm supervisor <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token function">sleep</span> <span class="token number">10</span>
<span class="token comment">##UI: \u5728Storm\u4E3B\u63A7\u8282\u70B9\u4E0A\u8FD0\u884C</span>
<span class="token builtin class-name">cd</span> /opt/apache-storm-0.10.1
bin/storm ui <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
<span class="token comment">##\u542F\u52A8\u540E\u53EF\u4EE5\u901A\u8FC7http://{nimbus host}:8080\u89C2\u5BDF\u96C6\u7FA4\u7684worker\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5\u3001Topologies\u7684\u8FD0\u884C\u72B6\u6001\u7B49\u4FE1\u606F\u3002</span>


<span class="token comment">## \u5982\u679C\u662F\u96C6\u7FA4\uFF0C\u591A\u8282\u70B9\uFF0C\u5176\u4ED6\u8282\u70B9Supervisor: \u5728Storm\u5404\u4E2A\u5DE5\u4F5C\u8282\u70B9\u4E0A\u8FD0\u884C</span>
<span class="token comment">##cd /opt/apache-storm-0.10.1</span>
<span class="token comment">##bin/storm supervisor &gt;/dev/null 2&gt;&amp;1 &amp;</span>

<span class="token comment">## \u505C\u6B62Storm Topology\uFF1A</span>
<span class="token comment">##storm kill {toponame}</span>
<span class="token comment">##\u5176\u4E2D\uFF0C{toponame}\u4E3ATopology\u63D0\u4EA4\u5230Storm\u96C6\u7FA4\u65F6\u6307\u5B9A\u7684Topology\u4EFB\u52A1\u540D\u79F0\u3002</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function o(c,r){return s(),a("div",null,t)}const d=n(i,[["render",o],["__file","storm.html.vue"]]);export{d as default};
