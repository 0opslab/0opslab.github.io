import{_ as n,o as a,c as s,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8</span>
<span class="token variable">$FLINK_HOME</span>/bin/start-local.sh
<span class="token variable">$FLINK_HOME</span>/bin/start-cluster.sh


<span class="token comment"># \u8FD0\u884C\u793A\u4F8B\u7A0B\u5E8F\uFF0C\u4E0D\u4F20\u53C2\u6570</span>
$ flink run ./examples/batch/WordCount.jar


<span class="token comment"># \u8FD0\u884C\u793A\u4F8B\u7A0B\u5E8F\uFF0C\u5E26\u8F93\u5165\u6216\u8F93\u51FA\u6587\u4EF6\u53C2\u6570</span>
$ flink run ./examples/batch/WordCount.jar <span class="token parameter variable">--input</span> file:///home/a.txt <span class="token parameter variable">--out</span> file:///home2.txt

<span class="token comment"># \u8FD0\u884C\u793A\u4F8B\u7A0B\u5E8F\uFF0C\u5E26\u8F93\u5165\u548C\u8F93\u51FA\u6587\u4EF6\u53C2\u6570,\u5E76\u8BBE\u7F6E16\u4E2A\u5E76\u53D1\u5EA6</span>
$ flink run <span class="token parameter variable">-p</span> <span class="token number">16</span> ./examples/batch/WordCount.jar <span class="token parameter variable">--input</span> file:///home/a.txt <span class="token parameter variable">--output</span> file:///home/2.txt

<span class="token comment"># \u8FD0\u884C\u793A\u4F8B\u7A0B\u5E8F\uFF0C\u5E76\u7981\u6B62Flink\u8F93\u51FA\u65E5\u5FD7</span>
$ flink run <span class="token parameter variable">-q</span> ./examples/batch/WordCount.jar

<span class="token comment"># \u4EE5\u72EC\u7ACB(detached)\u6A21\u5F0F\u8FD0\u884C\u793A\u4F8B\u7A0B\u5E8F</span>
$ flink run <span class="token parameter variable">-d</span> ./examples/batch/WordCount.jar

<span class="token comment"># \u5728\u6307\u5B9AJobManager\u4E0A\u8FD0\u884C\u793A\u4F8B\u7A0B\u5E8F</span>
$ flink run <span class="token parameter variable">-m</span> myJMHost:6123 ./examples/batch/WordCount.jar <span class="token parameter variable">--input</span> file:///home/a.txt <span class="token parameter variable">--output</span> file:///home/result.txt

<span class="token comment"># \u8FD0\u884C\u793A\u4F8B\u7A0B\u5E8F\uFF0C\u6307\u5B9A\u7A0B\u5E8F\u5165\u53E3\u7C7B(Main\u65B9\u6CD5\u6240\u5728\u7C7B)</span>
$ flink run <span class="token parameter variable">-c</span> org.apache.flink.examples.java.wordcount.WordCount ./examples/batch/WordCount.jar <span class="token parameter variable">--input</span> file:///home/a.txt <span class="token parameter variable">--output</span> file:///home/result.txt

<span class="token comment"># \u8FD0\u884C\u793A\u4F8B\u7A0B\u5E8F\uFF0C\u4F7F\u7528per-job YARN \u96C6\u7FA4\u542F\u52A8 2 \u4E2ATaskManager</span>
$ flink run <span class="token parameter variable">-m</span> yarn-cluster <span class="token parameter variable">-yn</span> <span class="token number">2</span> ./examples/batch/WordCount.jar <span class="token parameter variable">--input</span> hdfs:///a.txt <span class="token parameter variable">--output</span> hdfs:///result.txt

<span class="token comment"># \u4EE5JSON\u683C\u5F0F\u8F93\u51FA WordCount\u793A\u4F8B\u7A0B\u5E8F\u4F18\u5316\u6267\u884C\u8BA1\u5212</span>
$ flink info ./examples/batch/WordCount.jar <span class="token parameter variable">--input</span> file:///home/a.txt <span class="token parameter variable">--output</span> file:///home/result.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4EFB\u52A1\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u7BA1\u7406" aria-hidden="true">#</a> \u4EFB\u52A1\u7BA1\u7406</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u5DF2\u7ECF\u8C03\u5EA6\u7684\u548C\u6B63\u5728\u8FD0\u884C\u7684Job(\u5305\u542BJob ID\u4FE1\u606F)</span>
$ flink list

<span class="token comment"># \u5217\u51FA\u5DF2\u7ECF\u8C03\u5EA6\u7684Job(\u5305\u542BJob ID\u4FE1\u606F)</span>
$ flink list <span class="token parameter variable">-s</span>

<span class="token comment"># \u5217\u51FA\u6B63\u5728\u8FD0\u884C\u7684Job(\u5305\u542BJob ID\u4FE1\u606F)</span>
$ flink list <span class="token parameter variable">-r</span>

<span class="token comment"># \u5217\u51FA\u5728Flink YARN\u4E2D\u8FD0\u884CJob</span>
$ flink list <span class="token parameter variable">-m</span> yarn-cluster <span class="token parameter variable">-yid</span> <span class="token operator">&lt;</span>yarnApplicationID<span class="token operator">&gt;</span> <span class="token parameter variable">-r</span>

<span class="token comment"># \u53D6\u6D88\u4E00\u4E2AJob</span>
<span class="token comment"># \u53D6\u6D88\u548C\u505C\u6B62Job\u533A\u522B\u5982\u4E0B\uFF1A</span>
<span class="token comment"># \u8C03\u7528\u53D6\u6D88Job\u65F6\uFF0C\u4F5C\u4E1A\u4E2D\u7684operator\u7ACB\u5373\u6536\u5230\u4E00\u4E2A\u8C03\u7528cancel()\u65B9\u6CD5\u7684\u6307\u4EE4\u4EE5\u5C3D\u5FEB\u53D6\u6D88\u5B83\u4EEC\u3002\u5982\u679Coperator\u5728\u8C03\u7528\u53D6\u6D88\u64CD\u4F5C\u540E\u6CA1\u6709\u505C\u6B62\uFF0CFlink\u5C06\u5B9A\u671F\u5F00\u542F\u4E2D\u65AD\u7EBF\u7A0B\u6765\u53D6\u6D88\u4F5C\u4E1A\u76F4\u5230\u4F5C\u4E1A\u505C\u6B62\u3002</span>
<span class="token comment"># \u8C03\u7528\u505C\u6B62Job\u662F\u4E00\u79CD\u505C\u6B62\u6B63\u5728\u8FD0\u884C\u7684\u6D41\u4F5C\u4E1A\u7684\u66F4\u52A0\u4F18\u96C5\u7684\u65B9\u6CD5\u3002\u505C\u6B62\u4EC5\u9002\u7528\u4E8E\u4F7F\u7528\u5B9E\u73B0\`StoppableFunction\`\u63A5\u53E3\u7684\u6E90\u7684\u90A3\u4E9B\u4F5C\u4E1A\u3002\u5F53\u7528\u6237\u8BF7\u6C42\u505C\u6B62\u4F5C\u4E1A\u65F6\uFF0C\u6240\u6709\u6E90\u5C06\u6536\u5230\u8C03\u7528stop()\u65B9\u6CD5\u6307\u4EE4\u3002\u4F46\u662FJob\u8FD8\u662F\u4F1A\u6301\u7EED\u8FD0\u884C\uFF0C\u76F4\u5230\u6240\u6709\u6765\u6E90\u5DF2\u7ECF\u6B63\u786E\u5173\u95ED\u3002\u8FD9\u5141\u8BB8\u4F5C\u4E1A\u5B8C\u6210\u5904\u7406\u6240\u6709\u6B63\u5728\u4F20\u8F93\u7684\u6570\u636E(inflight data)</span>
$ flink cancel <span class="token operator">&lt;</span>jobID<span class="token operator">&gt;</span>

<span class="token comment"># \u53D6\u6D88\u4E00\u4E2A\u5E26\u6709\u4FDD\u5B58\u70B9(savepoint)\u7684Job</span>
$ flink cancel <span class="token parameter variable">-s</span> <span class="token punctuation">[</span>targetDirectory<span class="token punctuation">]</span> <span class="token operator">&lt;</span>jobID<span class="token operator">&gt;</span>

<span class="token comment"># \u505C\u6B62\u4E00\u4E2AJob(\u53EA\u9002\u7528\u4E8E\u6D41\u8BA1\u7B97Job)</span>
$ flink stop <span class="token operator">&lt;</span>jobID<span class="token operator">&gt;</span>

<span class="token comment">## \u68C0\u67E5\u70B9\u548C\u4FDD\u5B58\u70B9</span>
<span class="token comment"># \u68C0\u67E5\u70B9\uFF08Checkpoint\uFF09\u673A\u5236\u662F Flink \u5B9E\u73B0\u9519\u8BEF\u5BB9\u5FCD\u673A\u5236\u7684\u6838\u5FC3\u3002\u901A\u8FC7\u6301\u7EED\u4EE5\u5F02\u6B65\u7684\u65B9\u5F0F\u4FDD\u5B58\u8F7B\u91CF\u7EA7\u7684\u955C\u50CF\uFF0C\u5F53\u9519\u8BEF\uFF08\u673A\u5668\u3001\u7F51\u7EDC\u6216\u8005\u8F6F\u4EF6\u539F\u56E0\uFF09\u53D1\u751F\u65F6\uFF0C\u7CFB\u7EDF\u91CD\u542F\u64CD\u4F5C\u5E76\u91CD\u7F6E\u64CD\u4F5C\u5230\u6700\u65B0\u4FDD\u5B58\u6210\u529F\u7684\u68C0\u67E5\u70B9\u3002</span>
<span class="token comment"># \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u68C0\u67E5\u70B9\u662F\u7981\u7528\u7684\uFF0C\u9700\u8981\u624B\u52A8\u542F\u7528\u68C0\u67E5\u70B9</span>
<span class="token comment"># Flink \u68C0\u67E5\u70B9\u9700\u8981\u4E24\u4E2A\u524D\u63D0\uFF1A</span>
<span class="token comment"># 	* \u6301\u4E45\u5316\u6570\u636E\u6E90\u652F\u6301\u91CD\u653E\uFF08Replay\uFF09\u6570\u636E\uFF0C\u5982 Kafka \u548C HDFS</span>
<span class="token comment"># 	* \u7528\u4E8E\u6301\u4E45\u5316\u72B6\u6001\u7684\u5B58\u50A8\uFF0C\u5982 HDFS \u548C RocksDB\uFF1B</span>
<span class="token comment"># \u4FDD\u5B58\u70B9\u901A\u8FC7 Flink \u68C0\u67E5\u70B9\u673A\u5236\u4FDD\u5B58\u4E86\u4EFB\u52A1\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u72B6\u6001\u7684\u955C\u50CF\u3002\u901A\u5E38\u7528\u4E8E\u505C\u6B62\u5E76\u6062\u590D\u3001\u5206\u53D1\u548C\u4EFB\u52A1\u66F4\u65B0.\u5982\u679C\u4E0D\u6307\u5B9A\u4FDD\u5B58\u70B9\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u4E3A \`state.savepoints.dir\` \u914D\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7F16\u8F91 conf/flink-conf.yml \u6587\u4EF6\u4FEE\u6539\uFF1Astate.savepoints.dir: hdfs://RM/user/flink/savepoints </span>
<span class="token comment"># \u89E6\u53D1\u4FDD\u5B58\u70B9</span>
$ bin/flink savepoint <span class="token operator">&lt;</span>\u4EFB\u52A1 ID<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>\u4FDD\u5B58\u70B9\u76EE\u5F55<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token parameter variable">-yid</span> <span class="token operator">&lt;</span>YARN \u5E94\u7528 ID<span class="token operator">&gt;</span>

<span class="token comment"># \u53D6\u6D88\u65F6\u89E6\u53D1\u4FDD\u5B58\u70B9</span>
$ bin/flink cancel <span class="token parameter variable">-s</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>\u4FDD\u5B58\u70B9\u76EE\u5F55<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>\u4EFB\u52A1 ID<span class="token operator">&gt;</span> <span class="token parameter variable">-yid</span> <span class="token operator">&lt;</span>YARN \u5E94\u7528 ID<span class="token operator">&gt;</span> 

<span class="token comment"># \u4ECE\u4FDD\u5B58\u70B9\u6062\u590D\u8FD0\u884C</span>
$ bin/flink run <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>\u4FDD\u5B58\u70B9\u76EE\u5F55<span class="token operator">&gt;</span> <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>\u4E3B\u7C7B<span class="token operator">&gt;</span> <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>JM \u5730\u5740<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>\u5E76\u53D1\u6570<span class="token operator">&gt;</span> app.jar 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[i];function r(p,o){return a(),s("div",null,t)}const m=n(l,[["render",r],["__file","flink.html.vue"]]);export{m as default};
