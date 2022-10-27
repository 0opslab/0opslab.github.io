import{_ as a,o as s,c as n,e}from"./app.a667bd71.js";const p={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</span>
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

/xwapp/kafka/bin/kafka-topic.sh <span class="token parameter variable">--list</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.27.158:2181,135.191.27.193:2181,135.191.27.195:2181
 
/xwapp/kafka/bin/kafka-topic.sh <span class="token parameter variable">--describe</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.27.158:2181,135.191.27.193:2181,135.191.27.195:2181 <span class="token parameter variable">--topic</span> appbusinessevent

/xwapp/kafka/bin/kafka-consumer-groups.sh  --bootstrap-server <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">--list</span>


/xwapp/kafka/bin/kafka-consumer-groups.sh <span class="token parameter variable">--group</span> <span class="token number">1</span> <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.27.158:2181,135.191.27.193:2181,135.191.27.195:2181 <span class="token parameter variable">--topic</span> xwtec-test

/xwapp/kafka/bin/kafka-consumer-groups.sh  --bootstrap-server <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">--describe</span> <span class="token parameter variable">--group</span> <span class="token number">1</span>


/xwapp/kafka/bin/kafka-consumer-groups.sh  --bootstrap-server <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">--describe</span> <span class="token parameter variable">--group</span> <span class="token number">1</span>

/xwapp/kafka/bin/kafka-console-consumer.sh --bootstrap-server <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">--topic</span> appbusinessevent --from-beginning

/xwapp/kafka/bin/kafka-run-class.sh kafka.tools.GetOffsetShell --broker-list <span class="token number">135.191</span>.27.158:9092,135.191.27.193:9092,135.191.27.195:9092 <span class="token parameter variable">-topic</span> appbusinessevent <span class="token parameter variable">--time</span> <span class="token parameter variable">-2</span>

/xwapp/kafka/bin/kafka-preferred-replica-election.sh <span class="token parameter variable">--zookeeper</span> <span class="token number">135.191</span>.27.158:2181,135.191.27.193:2181,135.191.27.195:2181


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u4EE5\u6DFB\u52A0\u5230bashrc\u4E2D\u65B9\u4FBF\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u53EF\u4EE5\u6DFB\u52A0\u5230bashrc\u4E2D\u65B9\u4FBF\u4F7F\u7528" aria-hidden="true">#</a> \u53EF\u4EE5\u6DFB\u52A0\u5230bashrc\u4E2D\u65B9\u4FBF\u4F7F\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// <span class="token function">add</span> ~/.bashrc
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
\`\`<span class="token variable"><span class="token variable">\`</span>


<span class="token comment">## kafka\u914D\u7F6E\u7B80\u4F8B</span>
<span class="token variable">\`</span></span>\`\`<span class="token variable"><span class="token variable">\`</span><span class="token function">bash</span>
<span class="token assign-left variable">broker.id</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">listeners</span><span class="token operator">=</span>PLAINTEXT://135.191.107.124:9092
<span class="token assign-left variable">num.network.threads</span><span class="token operator">=</span><span class="token number">33</span>
<span class="token assign-left variable">num.io.threads</span><span class="token operator">=</span><span class="token number">66</span>
<span class="token assign-left variable">socket.send.buffer.bytes</span><span class="token operator">=</span><span class="token number">102400</span>
<span class="token assign-left variable">socket.receive.buffer.bytes</span><span class="token operator">=</span><span class="token number">102400</span>
<span class="token assign-left variable">socket.request.max.bytes</span><span class="token operator">=</span><span class="token number">104857600</span>
<span class="token assign-left variable">log.dirs</span><span class="token operator">=</span>/webapp01/data/kafka/kafka-logs
<span class="token assign-left variable">num.partitions</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">num.recovery.threads.per.data.dir</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">offsets.topic.replication.factor</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">transaction.state.log.replication.factor</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">transaction.state.log.min.isr</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">log.retention.hours</span><span class="token operator">=</span><span class="token number">168</span>
<span class="token assign-left variable">log.segment.bytes</span><span class="token operator">=</span><span class="token number">1073741824</span>
<span class="token assign-left variable">log.retention.check.interval.ms</span><span class="token operator">=</span><span class="token number">300000</span>
<span class="token assign-left variable">zookeeper.connect</span><span class="token operator">=</span><span class="token number">135.191</span>.107.124:2181,135.191.107.125:2181,135.191.107.126:2181
<span class="token assign-left variable">zookeeper.connection.timeout.ms</span><span class="token operator">=</span><span class="token number">6000</span>
<span class="token assign-left variable">group.initial.rebalance.delay.ms</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token variable">\`</span></span>\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[i];function l(t,o){return s(),n("div",null,r)}const k=a(p,[["render",l],["__file","kafka-cmd.html.vue"]]);export{k as default};
