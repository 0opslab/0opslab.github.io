import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const p={},r=e(`<h3 id="kafka\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#kafka\u914D\u7F6E" aria-hidden="true">#</a> kafka\u914D\u7F6E</h3><div class="language-etc ext-etc line-numbers-mode"><pre class="language-etc"><code>broker.id=1
listeners=PLAINTEXT://135.191.107.124:9092
num.network.threads=33
num.io.threads=66
socket.send.buffer.bytes=102400
socket.receive.buffer.bytes=102400
socket.request.max.bytes=104857600
log.dirs=/webapp01/data/kafka/kafka-logs
num.partitions=10
num.recovery.threads.per.data.dir=1
offsets.topic.replication.factor=1
transaction.state.log.replication.factor=1
transaction.state.log.min.isr=1
log.retention.hours=168
log.segment.bytes=1073741824
log.retention.check.interval.ms=300000
zookeeper.connect=135.191.107.124:2181,135.191.107.125:2181,135.191.107.126:2181
zookeeper.connection.timeout.ms=6000
group.initial.rebalance.delay.ms=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#func{}</span>

<span class="token comment">##\u4EE5\u4E0B\u624B\u52A8\u6267\u884C</span>
<span class="token comment">##\u624B\u52A8\u6267\u884C</span>
<span class="token builtin class-name">source</span>  /etc/profile

<span class="token comment">#\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</span>
<span class="token builtin class-name">cd</span> /opt/kafka_2.10-0.9.0.1
/opt/kafka_2.10-0.9.0.1/bin/zookeeper-server-start.sh /opt/kafka_2.10-0.9.0.1/config/zookeeper.properties   <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

/opt/kafka_2.10-0.9.0.1/bin/kafka-server-start.sh /opt/kafka_2.10-0.9.0.1/config/server.properties   <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token comment">##bin/zookeeper-server-start.sh config/zookeeper.properties    &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="token comment">##bin/kafka-server-start.sh config/server.properties     &gt;/dev/null 2&gt;&amp;1 &amp;</span>

<span class="token comment">##\u505C\u6B62\u547D\u4EE4</span>
<span class="token comment">##ps ax | grep -i &#39;kafka.Kafka&#39; | grep -v grep | awk &#39;{print $1}&#39; | xargs kill</span>

<span class="token comment">##\u67E5\u770B\u521B\u5EFA\u7684Topic\uFF0C\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</span>
bin/kafka-topics.sh <span class="token parameter variable">--create</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">192.168</span>.142.136:2181 --replication-factor <span class="token number">1</span> <span class="token parameter variable">--partitions</span> <span class="token number">1</span> <span class="token parameter variable">--topic</span> mykafka
<span class="token comment">##bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test</span>

<span class="token comment">##\u5217\u51FA\u6240\u6709\u4E3B\u9898</span>
bin/kafka-topics.sh <span class="token parameter variable">--list</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">192.168</span>.142.136:2181

<span class="token comment">##\u5728\u4E00\u4E2A\u7EC8\u7AEF\uFF0C\u542F\u52A8Producer\uFF0C\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</span>
bin/kafka-console-producer.sh --broker-list <span class="token number">192.168</span>.142.136:9092  <span class="token parameter variable">--topic</span> mykafka
<span class="token comment">##bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test </span>

<span class="token comment">##\u5728\u53E6\u4E00\u4E2A\u7EC8\u7AEF\uFF0C\u542F\u52A8Consumer\uFF0C\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</span>
bin/kafka-console-consumer.sh <span class="token parameter variable">--zookeeper</span> <span class="token number">192.168</span>.142.136:2181 <span class="token parameter variable">--topic</span> mykafka --from-beginning
<span class="token comment">##bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic test --from-beginning</span>

<span class="token comment">#######confluent\u542F\u52A8</span>
<span class="token builtin class-name">cd</span> /opt/confluent-2.0.1/
bin/schema-registry-start etc/schema-registry/schema-registry.properties  <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
<span class="token comment">##\u505C\u6B62\u547D\u4EE4</span>
<span class="token comment">##ps ax | grep -i &#39;schema-registry&#39; | grep -v grep | awk &#39;{print $1}&#39; | xargs kill</span>

<span class="token builtin class-name">cd</span> /opt/confluent-2.0.1/
bin/kafka-rest-start etc/kafka-rest/kafka-rest.properties  <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
<span class="token comment">##\u505C\u6B62\u547D\u4EE4</span>
<span class="token comment">##ps ax | grep -i &#39;kafka-rest&#39; | grep -v grep | awk &#39;{print $1}&#39; | xargs kill</span>


<span class="token function">cat</span> /webapp01/local/kafka/config/server.properties 

<span class="token builtin class-name">export</span> <span class="token assign-left variable">KAFKA_HEAP_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-server -Xms2G -Xmx2G -XX:PermSize=128m -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:ParallelGCThreads=8 -XX:ConcGCThreads=5 -XX:InitiatingHeapOccupancyPercent=70&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JMX_PORT</span><span class="token operator">=</span><span class="token string">&quot;9999&quot;</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
<span class="token comment"># zookeeper kafka\u96C6\u7FA4</span>

zookeeper <span class="token number">135.191</span>.107.124:2181,135.191.107.125:2181,135.191.107.126:2181

kafka <span class="token number">135.191</span>.107.124:9092,135.191.107.125:9092,135.191.107.126:9092


<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token comment"># zookeeper \u7BA1\u7406</span>
zkCli.sh <span class="token parameter variable">-server</span> <span class="token number">127.0</span>.0.1:2181
zkCli.sh <span class="token parameter variable">-server</span> <span class="token number">135.191</span>.107.124:2181,135.191.107.125:2181,135.191.107.126:2181

\u6743\u9650\u63A7\u5236
setAcl / ip:127.0.0.1:cdrwa,ip:135.191.107.124:cdrwa,ip:135.191.107.125:cdrwa,ip:135.191.107.126:cdrwa,ip:135.191.168.68:cdrwa,ip:135.191.168.69:cdrwa

getAcl /

setAcl / ip:127.0.0.1:cdrwa,ip:135.191.27.158:cdrwa,ip:135.191.27.193:cdrwa,ip:135.191.27.195:cdrwa,ip:135.191.168.68:cdrwa,ip:135.191.168.69:cdrwa


/webapp01/local/kafka/bin/zookeeper-shell.sh <span class="token number">135.191</span>.107.124:2181,135.191.107.125:2181,135.191.107.126:2181 delete /broker/ids/3

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
<span class="token comment"># kafka </span>
\u542F\u52A8
/webapp01/local/kafka/bin/kafka-server-start.sh  <span class="token parameter variable">-daemon</span> /webapp01/local/kafka/config/server.properties

<span class="token comment">#\u521B\u5EFA\u4E3B\u9898</span>
/webapp01/local/kafka/bin/kafka-topics.sh <span class="token parameter variable">--create</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.107.124:2181,135.191.107.125:2181,135.191.107.126:2181 -replication-factor <span class="token number">3</span> <span class="token parameter variable">--partitions</span> <span class="token number">3</span> <span class="token parameter variable">--topic</span> xwtec-test

<span class="token comment">#\u67E5\u770B\u4E3B\u9898</span>
/webapp01/local/kafka/bin/kafka-topics.sh <span class="token parameter variable">--list</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.107.124:2181,135.191.107.125:2181,135.191.107.126:2181
/webapp01/local/kafka/bin/kafka-topics.sh <span class="token parameter variable">--describe</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.107.124:2181,135.191.107.125:2181,135.191.107.126:2181 <span class="token parameter variable">--topic</span> xwtec-test

<span class="token comment">#\u542F\u52A8\u751F\u4EA7\u8005</span>
/webapp01/local/kafka/bin/kafka-console-producer.sh --broker-list <span class="token number">135.191</span>.107.124:9092,135.191.107.125:9092,135.191.107.126:9092 <span class="token parameter variable">--topic</span> xwtec-test

<span class="token comment">#\u542F\u52A8\u6D88\u8D39\u8005</span>
/webapp01/local/kafka/bin/kafka-console-consumer.sh --bootstrap-server <span class="token number">135.191</span>.107.124:9092,135.191.107.125:9092,135.191.107.126:9092 <span class="token parameter variable">--topic</span> xwtec-test --from-beginning



<span class="token comment"># \u6D88\u8D39\u8005\u7EC4\u5217\u8868</span>
bin/kafka-consumer-groups.sh --bootstrap-server <span class="token number">135.191</span>.107.124:9092,135.191.107.125:9092,135.191.107.126:9092 <span class="token parameter variable">--list</span>

bin/kafka-consumer-groups.sh <span class="token parameter variable">--zookeeper</span> <span class="token number">127.0</span>.0.1:2181  <span class="token parameter variable">--list</span>

bin/kafka-consumer-groups.sh --bootstrap-server <span class="token number">127.0</span>.0.1:9092  <span class="token parameter variable">--list</span>


<span class="token comment"># \u6D88\u8D39\u8005\u7EC4\u7684\u4FE1\u606F\u67E5\u770B</span>
/xwapp/kafka/bin/kafka-consumer-groups.sh  --bootstrap-server <span class="token number">135.191</span>.107.124:9092,135.191.107.125:9092,135.191.107.126:9092 <span class="token parameter variable">--describe</span> <span class="token parameter variable">--group</span> <span class="token number">1</span>


<span class="token comment"># \u72B6\u6001</span>
/webapp01/local/kafka/bin/kafka-topics.sh <span class="token parameter variable">--describe</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.107.124:2181,135.191.107.125:2181,135.191.107.126:2181 <span class="token parameter variable">--topic</span> xwtec-test


<span class="token comment"># \u6D88\u8D39\u8FDB\u5EA6</span>
/xwapp/kafka/bin/kafka-consumer-groups.sh  --bootstrap-server <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">--describe</span> <span class="token parameter variable">--group</span> <span class="token number">1</span>


<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
<span class="token comment"># memcached</span>
/webapp01/local/memcached/memcached <span class="token parameter variable">-d</span> <span class="token parameter variable">-l</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">11211</span> <span class="token parameter variable">-m</span> <span class="token number">4096</span>





/xwapp/kafka/bin/kafka-topic.sh <span class="token parameter variable">--list</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.27.158:2181,135.191.27.193:2181,135.191.27.195:2181
 
/xwapp/kafka/bin/kafka-topic.sh <span class="token parameter variable">--describe</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.27.158:2181,135.191.27.193:2181,135.191.27.195:2181 <span class="token parameter variable">--topic</span> appbusinessevent

/xwapp/kafka/bin/kafka-consumer-groups.sh  --bootstrap-server <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">--list</span>


/xwapp/kafka/bin/kafka-consumer-groups.sh <span class="token parameter variable">--group</span> <span class="token number">1</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.27.158:2181,135.191.27.193:2181,135.191.27.195:2181 <span class="token parameter variable">--topic</span> xwtec-test

/xwapp/kafka/bin/kafka-consumer-groups.sh  --bootstrap-server <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">--describe</span> <span class="token parameter variable">--group</span> <span class="token number">1</span>


/xwapp/kafka/bin/kafka-consumer-groups.sh  --bootstrap-server <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">--describe</span> <span class="token parameter variable">--group</span> <span class="token number">1</span>

/xwapp/kafka/bin/kafka-console-consumer.sh --bootstrap-server <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">--topic</span> appbusinessevent --from-beginning

/xwapp/kafka/bin/kafka-run-class.sh kafka.tools.GetOffsetShell --broker-list <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">-topic</span> appbusinessevent <span class="token parameter variable">--time</span> <span class="token parameter variable">-2</span>




/xwapp/kafka/bin/kafka-preferred-replica-election.sh <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.27.158:2181,135.191.27.193:2181,135.191.27.195:2181


/xwapp/zookeeper/bin/zkCli.sh <span class="token parameter variable">-server</span> <span class="token number">135.191</span>.27.158:2181,135.191.27.193:2181,135.191.27.195:2181

 <span class="token builtin class-name">set</span> /brokers/topics/appbusinessevent/partitions/8/state <span class="token punctuation">{</span><span class="token string">&quot;controller_epoch&quot;</span>:20,<span class="token string">&quot;leader&quot;</span>:2,<span class="token string">&quot;version&quot;</span>:1,<span class="token string">&quot;leader_epoch&quot;</span>:1,<span class="token string">&quot;isr&quot;</span>:<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span>



// <span class="token function">add</span> ~/.bashrc
<span class="token comment"># User specific aliases and functions</span>
<span class="token function-name function">kafka_topic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        /xwapp/kafka/bin/kafka-topics.sh <span class="token parameter variable">--list</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.27.158:2181,135.191.27.193:2181,135.191.27.195:2181
<span class="token punctuation">}</span>


<span class="token comment">## see topic descrie</span>
<span class="token function-name function">kafka_topic_descrie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         /xwapp/kafka/bin/kafka-topics.sh  <span class="token parameter variable">--describe</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.27.158:2181,135.191.27.193:2181,135.191.27.195:2181 <span class="token parameter variable">--topic</span> <span class="token variable">$1</span>
<span class="token punctuation">}</span>


<span class="token comment">## set kafka_consumer_group</span>
<span class="token function-name function">kafka_consumer_group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        /xwapp/kafka/bin/kafka-consumer-groups.sh  --bootstrap-server <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">--list</span>
<span class="token punctuation">}</span>

<span class="token function-name function">kafka_consumer_group_descrie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        /xwapp/kafka/bin/kafka-consumer-groups.sh  --bootstrap-server <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">--describe</span> <span class="token parameter variable">--group</span> <span class="token variable">$1</span>
<span class="token punctuation">}</span> 



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[r];function t(l,i){return a(),n("div",null,o)}const k=s(p,[["render",t],["__file","kafka.html.vue"]]);export{k as default};
