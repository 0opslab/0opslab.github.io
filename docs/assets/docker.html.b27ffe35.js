import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},c=e(`<h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4ECE\u516C\u7F51\u62C9\u53D6\u4E00\u4E2A\u955C\u50CF</span>
<span class="token function">docker</span> pull images_name

<span class="token comment"># \u67E5\u770B\u5DF2\u6709\u7684docker\u955C\u50CF</span>
<span class="token function">docker</span> images

<span class="token comment"># \u67E5\u770B\u5E2E\u52A9</span>
<span class="token function">docker</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">--help</span>

<span class="token comment"># \u542F\u52A8\u4E00\u4E2A\u5BB9\u5668</span>
<span class="token function">docker</span> run hello-world

<span class="token comment"># \u5BFC\u51FA\u955C\u50CF</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> image_name.tar image_name

<span class="token comment"># \u5220\u9664\u955C\u50CF</span>
<span class="token function">docker</span> rim image_name

<span class="token comment"># \u542F\u52A8\u4E00\u4E2A\u5BB9\u5668\u5E76\u8FDB\u5165\u8BE5\u5BB9\u5668</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>con_name images

<span class="token comment"># \u521B\u5EFA\u4E00\u4E2A\u5BB9\u5668\uFF0C\u653E\u5165\u540E\u53F0\u8FD0\u884C\uFF0C\u628A\u7269\u7406\u673A80\u7AEF\u53E3\u6620\u5C04\u5230\u5BB9\u5668\u768480\u7AEF\u53E3</span>
<span class="token comment"># -p \u53C2\u6570\u8BF4\u660E</span>
<span class="token comment">#-p hostPort:containerPort</span>
<span class="token comment">#-p ip:hostPort:containerPort</span>
<span class="token comment">#-p ip::containerPort</span>
<span class="token comment">#-p hostPort:containerPort:udp</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">81</span>:80 image_name

<span class="token comment"># \u770B\u5BB9\u5668\u7684\u7AEF\u53E3\u6620\u5C04\u60C5\u51B5</span>
<span class="token function">docker</span> port con_id

<span class="token comment"># \u67E5\u770B\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># \u67E5\u770B\u6240\u6709\u7684\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>

<span class="token comment"># \u52A8\u6001\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> con_name

<span class="token comment"># \u8FDB\u5165\u5BB9\u5668</span>
<span class="token function">docker</span> attach con_name

<span class="token comment"># \u9000\u51FA\u5BB9\u5668</span>
<span class="token builtin class-name">exit</span>
<span class="token comment">#\u4E00\u8D77\u6309\uFF0C\u6CE8\u610F\u987A\u5E8F\uFF0C\u9000\u51FA\u540E\u5BB9\u5668\u4F9D\u7136\u4FDD\u6301\u542F\u52A8\u72B6\u6001</span>
ctrl+p <span class="token operator">&amp;&amp;</span> ctrl+q <span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># \u5220\u9664\u5BB9\u5668</span>
<span class="token comment"># \u5F3A\u5236\u5220\u9664\u9700\u8981\u52A0-f\uFF0C\u4E0D\u52A0-f\u4E0D\u80FD\u5220\u9664\u6B63\u5728\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668\uFF0C\u975E\u5E38\u5371\u9669\uFF0C\u6700\u597D\u4E0D\u7528</span>
<span class="token function">docker</span> <span class="token function">rm</span>  con_name

<span class="token comment">#\u67E5\u770Bdocker\u7F51\u7EDC</span>
<span class="token function">docker</span> network <span class="token function">ls</span>

<span class="token comment"># \u8FDB\u5165\u5BB9\u5668</span>
<span class="token function">docker</span> attach 775c7c9ee1e1
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 775c7c9ee1e1 /bin/bash 


<span class="token comment"># \u4E0A\u4F20\u6587\u4EF6</span>
<span class="token function">docker</span> <span class="token function">cp</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> SRC_PATH<span class="token operator">|</span>- CONTAINER:DEST_PATH
<span class="token function">docker</span> <span class="token function">cp</span> /root/test.txt ecef8319d2c8:/root/

<span class="token comment"># \u4E0B\u8F7D\u94FE\u63A5</span>
<span class="token function">docker</span> <span class="token function">cp</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER:SRC_PATH DEST_PATH
<span class="token function">docker</span> <span class="token function">cp</span> ecef8319d2c8:/root/test.txt /root/


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-\u521B\u5EFA\u56FA\u5B9Aip\u7684\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#docker-\u521B\u5EFA\u56FA\u5B9Aip\u7684\u5BB9\u5668" aria-hidden="true">#</a> docker \u521B\u5EFA\u56FA\u5B9Aip\u7684\u5BB9\u5668</h3><p>docker\u5B89\u88C5\u540E\uFF0C\u9ED8\u8BA4\u4F1A\u521B\u5EFA\u4E0B\u9762\u4E09\u79CD\u7C7B\u578B\u7684\u7F51\u7EDC,\u800C\u542F\u52A8\u5BB9\u5668\u7684\u65F6\u5019\uFF0C\u7528--network\u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u7F51\u7EDC\u7C7B\u578B\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u542F\u52A8\u7684docker\u5BB9\u5668\uFF0C\u90FD\u662F\u4F7F\u7528bridge\u6865\u63A5\u7F51\u7EDC\uFF0C\u6BCF\u6B21Docker\u5BB9\u5668\u91CD\u542F\u65F6\uFF0C\u4F1A\u6309\u7167\u987A\u5E8F\u83B7\u53D6\u5BF9\u5E94\u7684IP\u5730\u5740\uFF0C\u8FD9\u4E2A\u5C31\u5BFC\u81F4\u91CD\u542F\u4E0B\uFF0CDocker\u7684IP\u5730\u5740\u5C31\u53D8\u4E86\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">ls</span>
NETWORK ID          NAME                DRIVER              SCOPE
// \u6865\u63A5\u7F51\u7EDC
344af693dee1        bridge              bridge              <span class="token builtin class-name">local</span>
// \u4E3B\u673A\u7F51\u7EDC
de666e900e5d        <span class="token function">host</span>                <span class="token function">host</span>                <span class="token builtin class-name">local</span>
// \u65E0\u6307\u5B9A\u7F51\u7EDC
1b9b4d0a48a4        none                null                <span class="token builtin class-name">local</span>


<span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> test1 <span class="token parameter variable">--network</span> bridge <span class="token parameter variable">--ip</span> <span class="token number">172.17</span>.0.10 centos:latest /bin/bash



<span class="token comment">## \u521B\u5EFA\u81EA\u5B9A\u4E49\u7F51\u7EDC</span>
<span class="token function">docker</span> network create <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">172.18</span>.0.0/16 mynetwork
\u279C ~ <span class="token function">docker</span> network <span class="token function">ls</span>
NETWORK ID     NAME        DRIVER       SCOPE
9781b1f585ae    bridge       bridge       <span class="token builtin class-name">local</span>
1252da701e55    <span class="token function">host</span>        <span class="token function">host</span>        <span class="token builtin class-name">local</span>
4f11ae9c85de    mynetwork      bridge       <span class="token builtin class-name">local</span>
237ea3d5cfbf    none        null        <span class="token builtin class-name">local</span>

<span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> networkTest1 <span class="token parameter variable">--net</span> mynetwork <span class="token parameter variable">--ip</span> <span class="token number">172.18</span>.0.2 centos:latest /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker\u5BB9\u5668\u7684dns\u548C\u4E3B\u673A\u540D" tabindex="-1"><a class="header-anchor" href="#docker\u5BB9\u5668\u7684dns\u548C\u4E3B\u673A\u540D" aria-hidden="true">#</a> docker\u5BB9\u5668\u7684DNS\u548C\u4E3B\u673A\u540D</h3><p>\u540C\u4E00\u4E2Adocker\u955C\u50CF\u53EF\u4EE5\u542F\u52A8\u5F88\u591A\u5BB9\u5668\uFF0C\u5B83\u4EEC\u7684\u4E3B\u673A\u540D\u5E76\u4E0D\u4E00\u6837\uFF0C\u53EF\u77E5\u4E3B\u673A\u540D\u5E76\u4E0D\u662F\u5199\u5165\u955C\u50CF\u4E2D\uFF0C\u5B9E\u9645\u4E0A\u5BB9\u5668\u4E2D/etc\u76EE\u5F55\u4E0B\u6709\u4E09\u4E2A\u6587\u4EF6\u662F\u5BB9\u5668\u542F\u52A8\u540E\u88AB\u865A\u62DF\u6587\u4EF6\u8986\u76D6\u6389\u7684\uFF0C\u5206\u522B\u662F/etc/hostname \u3001/etc/hosts \u3001/etc/resolv.conf\u901A\u8FC7\u5728\u5BB9\u5668\u4E2D\u8FD0\u884Cmount\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u3002\u8FD9\u79CD\u80FD\u89E3\u51B3\u4E3B\u673A\u540D\u7684\u95EE\u9898,\u540C\u65F6\u4E5F\u80FD\u8BA9DNS\u53CA\u65F6\u66F4\u65B0.\u7531\u4E8E\u8FD9\u4E9B\u6587\u4EF6\u7684\u7EF4\u62A4\u65B9\u6CD5\u968F\u7740docker\u7248\u672C\u6F14\u8FDB\u800C\u4E0D\u65AD\u53D8\u5316,\u56E0\u6B64<strong>\u5C3D\u91CF\u4E0D\u4FEE\u6539\u8FD9\u4E9B\u6587\u4EF6,\u800C\u662F\u901A\u8FC7docker\u63D0\u4F9B\u7684\u53C2\u6570\u8FDB\u884C\u76F8\u5173\u8BBE\u7F6E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8BBE\u7F6E\u5BB9\u5668\u7684\u4E3B\u673A\u540D
-h HOSTNAME \u6216\u8005 --hostname=HOSTNAME

--dns=IP_ADDRESS
\u4E3A\u5BB9\u5668\u914D\u7F6EDNS,\u5199\u5728/etc/resolv.conf\u4E2D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5907\u4EFD\u4E0E\u56DE\u590D" tabindex="-1"><a class="header-anchor" href="#\u5907\u4EFD\u4E0E\u56DE\u590D" aria-hidden="true">#</a> \u5907\u4EFD\u4E0E\u56DE\u590D</h3><p>\u90FD\u662F5G\u7684\u4F20\u8F93\u901F\u5EA6\u8FBE\u5230GB\u7EA7\u522B\uFF0C\u4F46\u662F\u4E07\u6076\u7684\u73B0\u5B9E\u603B\u662F\u90A3\u4E48cool\u3002\u56E0\u6B64\u5230\u5907\u4EFD\u5230\u78C1\u76D8\u8FD8\u662F\u5FC5\u987B\u7684\u3002docker\u63D0\u4F9B\u4E86\u76F8\u5E94\u7684\u5BFC\u5165\u5230\u5904\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4ECE\u955C\u50CF\u5907\u4EFD</span>
<span class="token function">docker</span> save <span class="token punctuation">[</span>options<span class="token punctuation">]</span> images <span class="token punctuation">[</span>images<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># \u5982\u4E0B\u4FE9\u6761\u547D\u4EE4\u662F\u7B49\u4EF7\u7684\u3002\u5C06\u955C\u50CFnginx:latest\u5BFC\u51FA\u5230nginx.tar\u6587\u4EF6\u4E2D</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> nginx.tar nginx:latest
<span class="token function">docker</span> save <span class="token operator">&gt;</span> nginx.tar nginx:latest

<span class="token comment"># \u5982\u4E0B\u4FE9\u6761\u547D\u4EE4\u662F\u7B49\u4EF7\u7684\u3002\u5C06\u5907\u4EFD\u6587\u4EF6\u5BFC\u5165</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> nginx.tar
<span class="token function">docker</span> load <span class="token operator">&lt;</span> nginx.tar

<span class="token comment"># \u4ECE\u5BB9\u5668\u5BFC\u5165\u5BFC\u51FA</span>
<span class="token function">docker</span> <span class="token builtin class-name">export</span> <span class="token parameter variable">-o</span> nginx-test.tar nginx-test 
<span class="token function">docker</span> <span class="token function">import</span> nginx-test.tar nginx:imp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4-1" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4-1" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">### \u542F\u52A8\u56FA\u5B9A\u4E3B\u673A\u540D\u56FA\u5B9A\u4E3B\u673AIP\u7684\u5BB9\u5668</span>
<span class="token comment">## \u901A\u8FC7-h\u53C2\u6570\u6307\u5B9A\u4E3B\u673A\u540D</span>
<span class="token comment">## \u901A\u8FC7\u2014\u2014name\u6307\u5B9A\u5BB9\u5668\u540D</span>
<span class="token comment">## \u901A\u8FC7--network\u6307\u5B9A\u7F51\u7EDC</span>
<span class="token comment">## \u901A\u8FC7-p\u6307\u5B9A\u7AEF\u53E3\u6620\u5C04</span>
<span class="token comment">## http://hadoop01:8088</span>
<span class="token comment">## http://hadoop01:50070</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-h</span> hadoop01 <span class="token parameter variable">--name</span> hadoop01 <span class="token parameter variable">--network</span><span class="token operator">=</span>dockernet <span class="token parameter variable">--ip</span> <span class="token number">135.191</span>.1.100  centos:hadoop /run.sh

<span class="token comment"># Start docker daemon</span>
<span class="token function">docker</span> <span class="token parameter variable">-d</span>

<span class="token comment"># start a container with an interactive shell</span>
<span class="token function">docker</span> run <span class="token parameter variable">-ti</span> <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span> /bin/bash

<span class="token comment"># &quot;shell&quot; into a running container (docker-1.3+)</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-ti</span> <span class="token operator">&lt;</span>container_name<span class="token operator">&gt;</span> <span class="token function">bash</span>

<span class="token comment"># inspect a running container</span>
<span class="token function">docker</span> inspect <span class="token operator">&lt;</span>container_name<span class="token operator">&gt;</span> <span class="token punctuation">(</span>or <span class="token operator">&lt;</span>container_id<span class="token operator">&gt;</span><span class="token punctuation">)</span>

<span class="token comment"># Get the process ID for a container</span>
<span class="token comment"># Source: https://github.com/jpetazzo/nsenter</span>
<span class="token function">docker</span> inspect <span class="token parameter variable">--format</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>.State.Pid<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span>container_name_or_ID<span class="token operator">&gt;</span>

<span class="token comment"># List the current mounted volumes for a container (and pretty print)</span>
<span class="token comment"># Source:</span>
<span class="token comment"># http://nathanleclaire.com/blog/2014/07/12/10-docker-tips-and-tricks-that-will-make-you-sing-a-whale-song-of-joy/</span>
<span class="token function">docker</span> inspect <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&#39;{{json .Volumes}}&#39;</span> <span class="token operator">&lt;</span>container_id<span class="token operator">&gt;</span> <span class="token operator">|</span> python <span class="token parameter variable">-mjson.tool</span>

<span class="token comment"># Copy files/folders between a container and your host</span>
<span class="token function">docker</span> <span class="token function">cp</span> foo.txt mycontainer:/foo.txt

<span class="token comment"># list currently running containers</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># list all containers</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>

<span class="token comment"># list all images</span>
<span class="token function">docker</span> images

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[c];function t(o,p){return s(),a("div",null,l)}const d=n(i,[["render",t],["__file","docker.html.vue"]]);export{d as default};
