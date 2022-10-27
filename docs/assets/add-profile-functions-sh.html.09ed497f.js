import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u8BB2linux\u4E00\u4E9B\u5E38\u7528\u7684\u64CD\u4F5C\u5C01\u88C5\u6210\u51FD\u6570\u65B9\u4FBF\u4F7F\u7528</span>
<span class="token comment">#descr:\u5EFA\u8BAE\u5C06\u8BE5\u95EE\u52A0\u5165\u5230/etc/profile\u6587\u4EF6\u4E2D\uFF0C\u8BE5\u6587\u771F\u7684\u4F1A\u7ECF\u5E38\u7528\u5230</span>
<span class="token comment">#\`\`\`</span>


<span class="token comment"># if [ -f /etc/profile.d/ljohn.sh ];then</span>
<span class="token comment">#    echo &quot;The file is exist&quot;</span>
<span class="token comment"># else</span>
<span class="token comment">#    cat &gt;&gt; /etc/profile.d/ljohn.sh &lt;&lt;EOF</span>
<span class="token comment"># HISTSIZE=10000</span>
<span class="token comment"># HISTTIMEFORMAT=&quot;%F %T root &quot;</span>

<span class="token comment"># alias l=&#39;ls -AFhlt&#39;</span>
<span class="token comment"># alias lh=&#39;l | head&#39;</span>
<span class="token comment"># alias vi=vim</span>

<span class="token comment"># GREP_OPTIONS=&quot;--color=auto&quot;</span>
<span class="token comment"># alias grep=&#39;grep --color&#39;</span>
<span class="token comment"># alias egrep=&#39;egrep --color&#39;</span>
<span class="token comment"># alias fgrep=&#39;fgrep --color&#39;</span>
<span class="token comment"># EOF</span>
<span class="token comment">#    if [ $? -eq 0 ];then</span>
<span class="token comment">#       echo &#39;PS1=&quot;\\[\\e[32;1m\\][\\u@\\h \\W]\\\\$\\[\\e[0m\\]&quot;&#39; &gt;&gt; /etc/profile.d/ljohn.sh</span>
<span class="token comment">#    else</span>
<span class="token comment">#       echo &quot;config failure&quot; &amp;&amp; exit 1</span>
<span class="token comment">#    fi</span>
<span class="token comment">#    chmod 644 /etc/profile.d/ljohn.sh</span>
<span class="token comment">#    source /etc/profile.d/ljohn.sh</span>
<span class="token comment">#    [ $? -eq 0 ] &amp;&amp; echo &quot;ok&quot; || echo &quot;failure&quot;</span>
<span class="token comment"># fi</span>

<span class="token comment">#</span>
<span class="token comment"># Set colors</span>
<span class="token comment">#</span>

<span class="token assign-left variable">bold</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput bold<span class="token variable">)</span></span>
<span class="token assign-left variable">underline</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput sgr <span class="token number">0</span> <span class="token number">1</span><span class="token variable">)</span></span>
<span class="token assign-left variable">reset</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput sgr0<span class="token variable">)</span></span>

<span class="token assign-left variable">purple</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput setaf <span class="token number">171</span><span class="token variable">)</span></span>
<span class="token assign-left variable">red</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput setaf <span class="token number">1</span><span class="token variable">)</span></span>
<span class="token assign-left variable">green</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput setaf <span class="token number">76</span><span class="token variable">)</span></span>
<span class="token assign-left variable">tan</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput setaf <span class="token number">3</span><span class="token variable">)</span></span>
<span class="token assign-left variable">blue</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput setaf <span class="token number">38</span><span class="token variable">)</span></span>


<span class="token comment">#</span>
<span class="token comment"># Headers and Logging</span>
<span class="token comment">#</span>

<span class="token function-name function">e_header</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable">\${bold}</span><span class="token variable">\${purple}</span>========== %s ==========<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">e_arrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;\u279C <span class="token variable">$@</span><span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">e_success</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${green}</span>\u2714 %s <span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">e_error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${red}</span>\u2716 %s <span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">e_warning</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${tan}</span>\u279C %s <span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">e_underline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${underline}</span><span class="token variable">\${bold}</span>%s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">e_bold</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${bold}</span>%s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">e_note</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${underline}</span><span class="token variable">\${bold}</span><span class="token variable">\${blue}</span>Note:<span class="token variable">\${reset}</span>  <span class="token variable">\${blue}</span>%s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">seek_confirmation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable">\${bold}</span><span class="token variable">$@</span><span class="token variable">\${reset}</span>&quot;</span>
  <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot; (y/n) &quot;</span> <span class="token parameter variable">-n</span> <span class="token number">1</span>
  <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># Test whether the result of an &#39;ask&#39; is a confirmation</span>
<span class="token function-name function">is_confirmed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$REPLY</span>&quot;</span> <span class="token operator">=~</span> ^<span class="token punctuation">[</span>Yy<span class="token punctuation">]</span>$ <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">return</span> <span class="token number">0</span>
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token comment"># command test</span>
<span class="token function-name function">type_exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">type</span> <span class="token parameter variable">-P</span> $1<span class="token variable">)</span></span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">return</span> <span class="token number">0</span>
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>


<span class="token comment"># os test</span>
<span class="token function-name function">is_os</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${<span class="token environment constant">OSTYPE</span>}</span>&quot;</span> <span class="token operator">==</span> <span class="token variable">$1</span>* <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">return</span> <span class="token number">0</span>
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token comment"># join</span>

<span class="token keyword">function</span> <span class="token function-name function">join_by</span> <span class="token punctuation">{</span> <span class="token builtin class-name">local</span> <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$1</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">shift</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>


<span class="token comment"># send dingTalk</span>

<span class="token function-name function">dingTalk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">DING</span><span class="token operator">=</span><span class="token string">&quot;https://oapi.dingtalk.com/robot/send?access_token=&quot;</span><span class="token variable">$DINGTOKEN</span>
    <span class="token assign-left variable">MSG</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">printf</span> <span class="token string">&#39;{&quot;msgtype&quot;: &quot;text&quot;, &quot;text&quot;: {&quot;content&quot;: &quot;%s&quot;}}&#39;</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span><span class="token variable">\`</span></span>
    <span class="token function">curl</span> <span class="token variable">\${DING}</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type: application/json&#39;</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$MSG</span>&quot;</span> <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token punctuation">}</span>


<span class="token comment">#@label:\u901A\u8FC7netstat\u7EDF\u8BA1\u5404\u4E2A\u72B6\u6001\u7684\u4FE1\u606F</span>
<span class="token comment"># LAST_ACK 5   (\u6B63\u5728\u7B49\u5F85\u5904\u7406\u7684\u8BF7\u6C42\u6570) </span>
<span class="token comment"># SYN_RECV 30 </span>
<span class="token comment"># ESTABLISHED 1597 (\u6B63\u5E38\u6570\u636E\u4F20\u8F93\u72B6\u6001) </span>
<span class="token comment"># FIN_WAIT1 51 </span>
<span class="token comment"># FIN_WAIT2 504 </span>
<span class="token comment"># TIME_WAIT 1057 (\u5904\u7406\u5B8C\u6BD5\uFF0C\u7B49\u5F85\u8D85\u65F6\u7ED3\u675F\u7684\u8BF7\u6C42\u6570) </span>
<span class="token function-name function">netstatinfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">netstat</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">#@label:\u901A\u8FC7\u5B9A\u671F\u8BFB\u53D6/sys/class/net/eth0/statistics/rx\u548Ctx\u7CFB\u5217\u7684\u5305 \u663E\u793A\u7F51\u7EDC\u7684\u8D1F\u8F7D\u60C5\u51B5</span>
<span class="token function-name function">netspeed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token assign-left variable">INTERVAL</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span>  <span class="token comment"># update interval in seconds</span>
 
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> usage: <span class="token variable">$0</span> <span class="token punctuation">[</span>network-interface<span class="token punctuation">]</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> e.g. <span class="token variable">$0</span> eth0
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">exit</span>
	<span class="token keyword">fi</span>
	 
	<span class="token assign-left variable">IF</span><span class="token operator">=</span><span class="token variable">$1</span>
	 
	<span class="token keyword">while</span> <span class="token boolean">true</span>
	<span class="token keyword">do</span>
    <span class="token assign-left variable">R1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /sys/class/net/$1/statistics/rx_bytes<span class="token variable">\`</span></span>
    <span class="token assign-left variable">T1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /sys/class/net/$1/statistics/tx_bytes<span class="token variable">\`</span></span>
    <span class="token function">sleep</span> <span class="token variable">$INTERVAL</span>
    <span class="token assign-left variable">R2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /sys/class/net/$1/statistics/rx_bytes<span class="token variable">\`</span></span>
    <span class="token assign-left variable">T2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /sys/class/net/$1/statistics/tx_bytes<span class="token variable">\`</span></span>
    <span class="token assign-left variable">TBPS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $T2 - $T1<span class="token variable">\`</span></span>
    <span class="token assign-left variable">RBPS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $R2 - $R1<span class="token variable">\`</span></span>
    <span class="token assign-left variable">TKBPS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $TBPS / <span class="token number">1024</span><span class="token variable">\`</span></span>
    <span class="token assign-left variable">RKBPS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $RBPS / <span class="token number">1024</span><span class="token variable">\`</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;TX <span class="token variable">$1</span>: <span class="token variable">$TKBPS</span> kb/s RX <span class="token variable">$1</span>: <span class="token variable">$RKBPS</span> kb/s&quot;</span>
	<span class="token keyword">done</span>
<span class="token punctuation">}</span>


<span class="token comment">#@label:\u67E5\u770B\u6700\u6D88\u8017CPU\u7684\u8FDB\u7A0B</span>
<span class="token function-name function">cputop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    HEADCOUNT <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span>
    HEADCOUNT <span class="token operator">=</span> <span class="token variable">$1</span>
    <span class="token function">ps</span> auxw<span class="token operator">|</span><span class="token function">head</span> -1<span class="token punctuation">;</span><span class="token function">ps</span> auxw<span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-rn</span> -k3<span class="token operator">|</span><span class="token function">head</span> <span class="token parameter variable">-HEADCOUNT</span>
<span class="token punctuation">}</span>

<span class="token comment">#@label:\u67E5\u770B\u6700\u6D88\u8017\u5185\u5B58\u7684\u8FDB\u7A0B</span>
<span class="token function-name function">memtop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
    HEADCOUNT <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span>
    HEADCOUNT <span class="token operator">=</span> <span class="token variable">$1</span>
    <span class="token function">ps</span> auxw<span class="token operator">|</span><span class="token function">head</span> -1<span class="token punctuation">;</span><span class="token function">ps</span> auxw<span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-rn</span> -k4<span class="token operator">|</span><span class="token function">head</span> <span class="token parameter variable">-10</span>
<span class="token punctuation">}</span>

<span class="token comment">#@label:\u865A\u62DF\u5185\u5B58\u4F7F\u7528\u6700\u591A\u7684\u524DN\u4E2A\u8FDB\u7A0B</span>
<span class="token function-name function">cache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
    HEADCOUNT <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span>
    HEADCOUNT <span class="token operator">=</span> <span class="token variable">$1</span>
    <span class="token function">ps</span> auxw<span class="token operator">|</span><span class="token function">head</span> -1<span class="token punctuation">;</span><span class="token function">ps</span> auxw<span class="token operator">|</span><span class="token function">sort</span> <span class="token parameter variable">-rn</span> -k5<span class="token operator">|</span><span class="token function">head</span> <span class="token parameter variable">-10</span>
<span class="token punctuation">}</span>

<span class="token comment">#func{\u83B7\u53D6\u76EE\u5F55\u7684\u6587\u4EF6\u7684md5\u4FE1\u606F\u5E76\u4FDD\u5B58\u5230\u5F53\u524D\u76EE\u5F55\u4E0B}</span>
<span class="token comment">#test hash_dir ~/workspace</span>
<span class="token keyword">function</span> <span class="token function-name function">hash_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token assign-left variable">log</span><span class="token operator">=</span><span class="token string">&quot;hash_&quot;</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d%H<span class="token variable">\`</span></span><span class="token string">&quot;.log&quot;</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> $1<span class="token variable">\`</span></span>
    <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$1</span><span class="token string">&quot;/&quot;</span><span class="token variable">$file</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            hash_dir <span class="token variable">$1</span><span class="token string">&quot;/&quot;</span><span class="token variable">$file</span>
        <span class="token keyword">else</span>
           <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span>md5 $1<span class="token string">&quot;/&quot;</span>$file<span class="token variable">\`</span></span><span class="token operator">&gt;&gt;</span><span class="token variable">$log</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token comment"># cat function.sh &gt;&gt; ~/.bashrc</span>

<span class="token comment"># User specific aliases and functions</span>
<span class="token comment">#@label:\u901A\u8FC7netstat\u7EDF\u8BA1\u5404\u4E2A\u72B6\u6001\u7684\u4FE1\u606F</span>
<span class="token function-name function">net_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment"># LAST_ACK 5   (\u6B63\u5728\u7B49\u5F85\u5904\u7406\u7684\u8BF7\u6C42\u6570)</span>
	<span class="token comment"># SYN_RECV 30</span>
	<span class="token comment"># ESTABLISHED 1597 (\u6B63\u5E38\u6570\u636E\u4F20\u8F93\u72B6\u6001)</span>
	<span class="token comment"># FIN_WAIT1 51</span>
	<span class="token comment"># FIN_WAIT2 504</span>
	<span class="token comment"># TIME_WAIT 1057 (\u5904\u7406\u5B8C\u6BD5\uFF0C\u7B49\u5F85\u8D85\u65F6\u7ED3\u675F\u7684\u8BF7\u6C42\u6570)</span>
	<span class="token function">netstat</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">#@label:\u901A\u8FC7\u5B9A\u671F\u8BFB\u53D6/sys/class/net/eth0/statistics/rx\u548Ctx\u7CFB\u5217\u7684\u5305 \u663E\u793A\u7F51\u7EDC\u7684\u8D1F\u8F7D\u60C5\u51B5</span>
<span class="token function-name function">netspeed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment"># update interval in seconds</span>
	<span class="token assign-left variable">INTERVAL</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span>
		<span class="token builtin class-name">echo</span> usage: <span class="token variable">$0</span> <span class="token punctuation">[</span>network-interface<span class="token punctuation">]</span>
		<span class="token builtin class-name">echo</span>
		<span class="token builtin class-name">echo</span> e.g. <span class="token variable">$0</span> eth0
		<span class="token builtin class-name">echo</span>
		<span class="token builtin class-name">exit</span>
	<span class="token keyword">fi</span>
	 
	<span class="token assign-left variable">IF</span><span class="token operator">=</span><span class="token variable">$1</span>
	 
	<span class="token keyword">while</span> <span class="token boolean">true</span>
	<span class="token keyword">do</span>
		<span class="token assign-left variable">R1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /sys/class/net/$1/statistics/rx_bytes<span class="token variable">\`</span></span>
		<span class="token assign-left variable">T1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /sys/class/net/$1/statistics/tx_bytes<span class="token variable">\`</span></span>
		<span class="token function">sleep</span> <span class="token variable">$INTERVAL</span>
		<span class="token assign-left variable">R2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /sys/class/net/$1/statistics/rx_bytes<span class="token variable">\`</span></span>
		<span class="token assign-left variable">T2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /sys/class/net/$1/statistics/tx_bytes<span class="token variable">\`</span></span>
		<span class="token assign-left variable">TBPS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $T2 - $T1<span class="token variable">\`</span></span>
		<span class="token assign-left variable">RBPS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $R2 - $R1<span class="token variable">\`</span></span>
		<span class="token assign-left variable">TKBPS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $TBPS / <span class="token number">1024</span><span class="token variable">\`</span></span>
		<span class="token assign-left variable">RKBPS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $RBPS / <span class="token number">1024</span><span class="token variable">\`</span></span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;TX <span class="token variable">$1</span>: <span class="token variable">$TKBPS</span> kb/s RX <span class="token variable">$1</span>: <span class="token variable">$RKBPS</span> kb/s&quot;</span>
	<span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token comment">#@label:\u751F\u6210\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6hash\u4FE1\u606F</span>
<span class="token function-name function">hash_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token assign-left variable">log_file</span><span class="token operator">=</span><span class="token string">&quot;./&quot;</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y%m%d_%H<span class="token variable">\`</span></span><span class="token string">&quot;_hash.log&quot;</span>
	<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> $1<span class="token variable">\`</span></span>
	<span class="token keyword">do</span>
		<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$1</span><span class="token string">&quot;/&quot;</span><span class="token variable">$file</span> <span class="token punctuation">]</span> 
		<span class="token keyword">then</span>
			hash_dir <span class="token variable">$1</span><span class="token string">&quot;/&quot;</span><span class="token variable">$file</span>
		<span class="token keyword">else</span>
			<span class="token assign-left variable">hash</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>md5sum $1<span class="token string">&quot;/&quot;</span>$file<span class="token variable">\`</span></span>
			<span class="token builtin class-name">echo</span> <span class="token variable">$hash</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$log_file</span>
		<span class="token keyword">fi</span>
	<span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token comment">#@label:\u67E5\u770B\u77E5\u9053\u8FDB\u7A0B\u7684\u53E5\u67C4\u548C\u7EBF\u7A0B\u6570</span>
<span class="token function-name function">proc_info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span>
		<span class="token builtin class-name">echo</span> \u67E5\u770B\u6307\u5B9A\u8FDB\u7A0B\u7684\u4FE1\u606F
		<span class="token builtin class-name">echo</span> 	usage: proc_info pid
		<span class="token builtin class-name">echo</span>
		<span class="token builtin class-name">return</span>
	<span class="token keyword">fi</span>
	<span class="token builtin class-name">echo</span> pid info: <span class="token variable">\${1}</span> 
	<span class="token builtin class-name">echo</span> fleinfo:
	<span class="token function">lsof</span> <span class="token parameter variable">-p</span> <span class="token number">25758</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;REG  &#39;</span> <span class="token operator">|</span> <span class="token function">grep</span>  <span class="token parameter variable">-v</span> <span class="token string">&#39;mem    REG&#39;</span>	
	<span class="token comment">#echo exefile: \`ll /proc/\${1}/exe\`</span>
	<span class="token comment">#echo cwd: \`ls /proc/\${1}/cwd\`</span>
	<span class="token builtin class-name">echo</span> proc-status<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
	<span class="token function">head</span> <span class="token parameter variable">-28</span> /proc/<span class="token variable">\${1}</span>/status
	<span class="token builtin class-name">echo</span> proc-tcp<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
	<span class="token function">lsof</span> <span class="token parameter variable">-p</span> <span class="token variable">\${1}</span> <span class="token parameter variable">-nP</span> <span class="token operator">|</span> <span class="token function">grep</span> TCP
	<span class="token builtin class-name">echo</span> proc-udp<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
	<span class="token function">lsof</span> <span class="token parameter variable">-p</span> <span class="token variable">\${1}</span> <span class="token parameter variable">-nP</span> <span class="token operator">|</span> <span class="token function">grep</span> UDP
<span class="token punctuation">}</span>

<span class="token comment">#@label:\u67E5\u770Bcpu\u4FE1\u606F</span>
<span class="token function-name function">cpu_info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> CPU\u578B\u53F7: <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> name <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-f2</span> -d: <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span><span class="token variable">\`</span></span>
	<span class="token builtin class-name">echo</span> CPU\u4E2A\u6570: <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /proc/cpuinfo<span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;physical id&quot;</span><span class="token operator">|</span> <span class="token function">sort</span><span class="token operator">|</span> <span class="token function">uniq</span><span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
	<span class="token builtin class-name">echo</span> CPU\u6838\u6570: <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /proc/cpuinfo<span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;cpu cores&quot;</span><span class="token operator">|</span> <span class="token function">uniq</span><span class="token variable">\`</span></span>
	<span class="token builtin class-name">echo</span> \u903B\u8F91CPU\u603B\u6570: <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /proc/cpuinfo<span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;processor&quot;</span><span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;=======\u7CFB\u7EDF\u6574\u4F53\u7684 CPU\u5229\u7528\u7387\u548C\u95F2\u7F6E\u7387=========&quot;</span>
	<span class="token function">grep</span> <span class="token string">&quot;cpu &quot;</span> /proc/stat <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39; &#39;</span> <span class="token string">&#39;{total = $2 + $3 + $4 + $5} END {print &quot;idle \\t used\\n&quot; $5*100/total &quot;% &quot; $2*100/total &quot;%&quot;}&#39;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;=======\u4F7F\u7528CPU\u6700\u591A\u76843\u4E2A\u8FDB\u7A0B================&quot;</span>
	<span class="token function">ps</span> <span class="token parameter variable">-aeo</span> pcpu,user,pid,cmd <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-3</span>
<span class="token punctuation">}</span>

<span class="token comment">#@label:\u67E5\u770Bio\u4FE1\u606F</span>
<span class="token function-name function">io_info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">echo</span> \u901A\u8FC7top\u547D\u4EE4\u53EF\u4EE5\u7C97\u7565\u7684\u770B\u51FAIO\u7684\u5927\u81F4\u60C5\u51B5
	<span class="token builtin class-name">echo</span>		us\uFF1A\u7528\u6237\u6001\u4F7F\u7528\u7684cpu\u65F6\u95F4\u6BD4
	<span class="token builtin class-name">echo</span>		sy\uFF1A\u7CFB\u7EDF\u6001\u4F7F\u7528\u7684cpu\u65F6\u95F4\u6BD4
	<span class="token builtin class-name">echo</span>		ni\uFF1A\u7528\u505Anice\u52A0\u6743\u7684\u8FDB\u7A0B\u5206\u914D\u7684\u7528\u6237\u6001cpu\u65F6\u95F4\u6BD4
	<span class="token builtin class-name">echo</span>		id\uFF1A\u7A7A\u95F2\u7684cpu\u65F6\u95F4\u6BD4
	<span class="token builtin class-name">echo</span>		wa\uFF1Acpu\u7B49\u5F85\u78C1\u76D8\u5199\u5165\u5B8C\u6210\u65F6\u95F4
	<span class="token builtin class-name">echo</span>		hi\uFF1A\u786C\u4E2D\u65AD\u6D88\u8017\u65F6\u95F4
	<span class="token builtin class-name">echo</span>		si\uFF1A\u8F6F\u4E2D\u65AD\u6D88\u8017\u65F6\u95F4
	<span class="token builtin class-name">echo</span>		st\uFF1A\u865A\u62DF\u673A\u5077\u53D6\u65F6\u95F4
<span class="token punctuation">}</span>
<span class="token comment">#@label:\u6309\u7167 Swap \u5206\u533A\u7684\u4F7F\u7528\u60C5\u51B5\u5217\u51FA\u524D 10 \u7684\u8FDB\u7A0B</span>
<span class="token function-name function">proc_swap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> /proc/*/status <span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">awk</span> <span class="token string">&#39;/VmSwap|Name|^Pid/{printf $2 &quot; &quot; $3}END{ print &quot;&quot;}&#39;</span> <span class="token variable">$file</span><span class="token punctuation">;</span> <span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-k</span> <span class="token number">3</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-r</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-10</span>
<span class="token punctuation">}</span>

<span class="token comment">#@label:\u5728\u6307\u5B9A\u76EE\u5F55\u4E2D\u67E5\u627E\u6700\u5927\u7684N\u4E2A\u6587\u4EF6</span>
<span class="token function-name function">file_max</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4ECE\u6307\u5B9A\u7684\u76EE\u5F55\u4E2D\u67E5\u627E\u6700\u5927\u7684N\u4E2A\u6587\u4EF6 usage:file_max path count&quot;</span>
		<span class="token builtin class-name">exit</span>
	<span class="token keyword">fi</span>
	<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token variable">$2</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$2</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">10</span>
	<span class="token keyword">fi</span>

	<span class="token function">find</span> <span class="token variable">$1</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-print0</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> <span class="token function">du</span> <span class="token parameter variable">-h</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-rh</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token variable">$count</span>
<span class="token punctuation">}</span>


<span class="token comment">#@label:\u663E\u793A\u6307\u5B9AJava\u8FDB\u7A0B\u7684\u4FE1\u606F</span>
<span class="token function-name function">java_info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">#\u663E\u793A\u6700\u540E\u4E00\u6B21\u6216\u5F53\u524D\u6B63\u5728\u53D1\u751F\u7684\u5783\u573E\u6536\u96C6\u7684\u8BF1\u53D1\u539F\u56E0</span>
	jstat <span class="token parameter variable">-gccause</span> <span class="token variable">$pid</span>

	<span class="token comment">#\u663E\u793A\u5404\u4E2A\u4EE3\u7684\u5BB9\u91CF\u53CA\u4F7F\u7528\u60C5\u51B5</span>
	jstat <span class="token parameter variable">-gccapacity</span> <span class="token variable">$pid</span>

	<span class="token comment">#\u663E\u793A\u65B0\u751F\u4EE3\u5BB9\u91CF\u53CA\u4F7F\u7528\u60C5\u51B5</span>
	jstat <span class="token parameter variable">-gcnewcapacity</span> <span class="token variable">$pid</span>

	<span class="token comment">#\u663E\u793A\u8001\u5E74\u4EE3\u5BB9\u91CF</span>
	jstat <span class="token parameter variable">-gcoldcapacity</span> <span class="token variable">$pid</span>

	<span class="token comment">#\u663E\u793A\u5783\u573E\u6536\u96C6\u4FE1\u606F\uFF08\u95F4\u96941\u79D2\u6301\u7EED\u8F93\u51FA\uFF09</span>
	<span class="token comment">#jstat -gcutil $pid 1000</span>

	<span class="token comment">#\u6309\u7EBF\u7A0B\u72B6\u6001\u7EDF\u8BA1\u7EBF\u7A0B\u6570(\u52A0\u5F3A\u7248)</span>
	jstack <span class="token variable">$pid</span> <span class="token operator">|</span> <span class="token function">grep</span> java.lang.Thread.State:<span class="token operator">|</span><span class="token function">sort</span><span class="token operator">|</span><span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{sum+=$1; split($0,a,&quot;:&quot;);gsub(/^[ \\t]+|[ \\t]+$/, &quot;&quot;, a[2]);printf &quot;%s: %s\\n&quot;, a[2], $1}; END {printf &quot;TOTAL: %s&quot;,sum}&#39;</span><span class="token punctuation">;</span>

	<span class="token comment"># \u67E5\u770B\u5806\u5185\u5BF9\u8C61\u7684\u5206\u5E03 Top 50\uFF08\u5B9A\u4F4D\u5185\u5B58\u6CC4\u6F0F\uFF09</span>
	jmap \u2013histo:live <span class="token variable">$pid</span> <span class="token operator">|</span> sort-n <span class="token parameter variable">-r</span> <span class="token parameter variable">-k2</span> <span class="token operator">|</span> head-n <span class="token number">50</span>

<span class="token punctuation">}</span>

<span class="token comment">#@label:\u83B7\u53D6\u7528\u6237\u6307\u5B9A\u7528\u6237\u7684\u8FDB\u7A0BPID=\`GetPID root TestApp\` echo $PID</span>
<span class="token keyword">function</span> <span class="token function-name function">GetPID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token assign-left variable">PsUser</span><span class="token operator">=</span><span class="token variable">$1</span>
 <span class="token assign-left variable">PsName</span><span class="token operator">=</span><span class="token variable">$2</span>
 <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-u</span> $PsUser<span class="token operator">|</span><span class="token function">grep</span> $PsName<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">vi</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> dbx <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">tail</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> start<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> stop <span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-n</span> 1p <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
 <span class="token builtin class-name">echo</span> <span class="token variable">$pid</span>
<span class="token punctuation">}</span>

<span class="token comment">#@label:\u591A\u4E3B\u673A\u6267\u884C\u547D\u4EE4</span>
<span class="token function-name function">xcall</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token assign-left variable">list</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;135.191.107.124&#39;</span> <span class="token string">&#39;135.191.107.125&#39;</span> <span class="token string">&#39;135.191.107.126&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token variable">\${list<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
    <span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token variable">$host</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
        <span class="token function">ssh</span> <span class="token variable">$host</span> <span class="token variable">$1</span>
    <span class="token keyword">done</span>    
<span class="token punctuation">}</span> 


<span class="token comment">#@label:\u591A\u4E3B\u673A\u6267\u884C\u547D\u4EE4</span>
<span class="token function-name function">ecplog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token assign-left variable">txt</span><span class="token operator">=</span><span class="token variable">$1</span>
    <span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">&quot;find /webapp02/logs/ -name <span class="token entity" title="\\&quot;">\\&quot;</span>crmDetail_*.log<span class="token entity" title="\\&quot;">\\&quot;</span> -exec grep --color <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${txt}</span><span class="token entity" title="\\&quot;">\\&quot;</span> {} \\;&quot;</span>
    <span class="token assign-left variable">list</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;135.191.107.124&#39;</span> <span class="token string">&#39;135.191.107.125&#39;</span> <span class="token string">&#39;135.191.107.126&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token variable">\${list<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
    <span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token variable">$host</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
        <span class="token comment">#echo == $cmd</span>
        <span class="token function">ssh</span> <span class="token variable">$host</span> <span class="token variable">$cmd</span>
    <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token comment">#@label:\u591A\u4E3B\u673A\u6267\u884C\u547D\u4EE4</span>
<span class="token function-name function">ecpdatelog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token assign-left variable">txt</span><span class="token operator">=</span><span class="token variable">$1</span>
    <span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">&quot;find /webapp02/logs/ -name <span class="token entity" title="\\&quot;">\\&quot;</span>crmDetail_*<span class="token variable">$1</span><span class="token entity" title="\\&quot;">\\&quot;</span> -exec grep --color <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$2</span><span class="token entity" title="\\&quot;">\\&quot;</span> {} \\;&quot;</span>
    <span class="token assign-left variable">list</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;135.191.107.124&#39;</span> <span class="token string">&#39;135.191.107.125&#39;</span> <span class="token string">&#39;135.191.107.126&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token for-or-select variable">host</span> <span class="token keyword">in</span> <span class="token variable">\${list<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
    <span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token variable">$host</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
        <span class="token function">ssh</span> <span class="token variable">$host</span> <span class="token variable">$cmd</span>
    <span class="token keyword">done</span>  
<span class="token punctuation">}</span>

<span class="token comment">#@label:\u5217\u51FA\u6700\u5E38\u7528\u768410\u6761\u5386\u53F2\u547D\u4EE4</span>
<span class="token function-name function">history_top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">printf</span> <span class="token string">&quot;%-32s %-10s<span class="token entity" title="\\n">\\n</span>&quot;</span> \u547D\u4EE4 \u6B21\u6570
  <span class="token function">cat</span> ~/.bash_history <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ list [$1] ++; } \\
      END {
      for (i in list)
      {
      printf (&quot;%-30s %-10s\\n&quot;, i, list [i]); }
  }&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nrk</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token function">head</span>
<span class="token punctuation">}</span>

<span class="token function-name function">file_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token assign-left variable">Count</span><span class="token operator">=</span><span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">File</span> <span class="token keyword">in</span> /var/*<span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token function">file</span> <span class="token variable">$File</span>
    <span class="token assign-left variable">Count</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$Count</span>+1<span class="token punctuation">]</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">return</span> <span class="token variable">$Count</span>
<span class="token punctuation">}</span>


<span class="token comment">#@label:\u67E5\u770Bcpu\u67B6\u6784</span>
<span class="token function-name function">cpu_arch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token assign-left variable">Vendor</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> <span class="token string">&quot;vendor_id&quot;</span> /proc/cpuinfo  <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token operator">|</span> <span class="token function">cut</span> -d: <span class="token parameter variable">-f2</span><span class="token variable">\`</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$Vendor</span>&quot;</span> <span class="token operator">=~</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>:space:<span class="token punctuation">]</span><span class="token punctuation">]</span>*GenuineIntel$ <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">return</span> <span class="token string">&quot;Intel&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">return</span> <span class="token string">&quot;AMD&quot;</span>
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">disk_info</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;======================disk info========================&quot;</span>
   <span class="token function">df</span> -ThP<span class="token operator">|</span><span class="token function">column</span> <span class="token parameter variable">-t</span>
<span class="token punctuation">}</span>

<span class="token function-name function">cpu_info</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;=======================cpu info========================&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;cpu processor is <span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;processor&quot;</span> /proc/cpuinfo <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">)</span></span>&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;cpu mode name is <span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;model name&quot;</span> /proc/cpuinfo <span class="token operator">|</span><span class="token function">uniq</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $4,$5,$6,$7,$8,$9}&#39;</span><span class="token variable">)</span></span>&quot;</span>
   <span class="token function">grep</span> <span class="token string">&quot;cpu MHz&quot;</span> /proc/cpuinfo <span class="token operator">|</span><span class="token function">uniq</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1,$2&quot;:&quot;$4}&#39;</span>
   <span class="token function">awk</span> <span class="token string">&#39;/cache size/ {print $1,$2&quot;:&quot;$4$5}&#39;</span> /proc/cpuinfo <span class="token operator">|</span><span class="token function">uniq</span>
<span class="token punctuation">}</span>

<span class="token function-name function">mem_info</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;=====================memory info========================&quot;</span>
   <span class="token assign-left variable">MemTotal</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;/MemTotal/ {print $2}&#39;</span> /proc/meminfo<span class="token variable">)</span></span>
   <span class="token assign-left variable">MemFree</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;/MemFree/ {print $2}&#39;</span> /proc/meminfo<span class="token variable">)</span></span>
   <span class="token assign-left variable">Buffers</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;/^Buffers:/ {print $2}&#39;</span> /proc/meminfo<span class="token variable">)</span></span>
   <span class="token assign-left variable">Cached</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;/^Cached:/ {print $2}&#39;</span> /proc/meminfo<span class="token variable">)</span></span>
   <span class="token assign-left variable">FreeMem</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$MemFree<span class="token operator">/</span><span class="token number">1024</span><span class="token operator">+</span>$Buffers<span class="token operator">/</span><span class="token number">1024</span><span class="token operator">+</span>$Cached<span class="token operator">/</span><span class="token number">1024</span><span class="token variable">))</span></span>
   <span class="token assign-left variable">UsedMem</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$MemTotal<span class="token operator">/</span><span class="token number">1024</span><span class="token operator">-</span>$FreeMem<span class="token variable">))</span></span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Total memory is <span class="token variable"><span class="token variable">$((</span>$MemTotal<span class="token operator">/</span><span class="token number">1024</span><span class="token variable">))</span></span> MB&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Free  memory is <span class="token variable">\${FreeMem}</span> MB&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Used  memory is <span class="token variable">\${UsedMem}</span> MB&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">load_info</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;=====================load info==========================&quot;</span>
   <span class="token assign-left variable">Load1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span>  <span class="token string">&#39;{print $1}&#39;</span> /proc/loadavg<span class="token variable">)</span></span>
   <span class="token assign-left variable">Load5</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span>  <span class="token string">&#39;{print $2}&#39;</span> /proc/loadavg<span class="token variable">)</span></span>
   <span class="token assign-left variable">Load10</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span> /proc/loadavg<span class="token variable">)</span></span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Load in 1  min is <span class="token variable">$Load1</span>&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Load in 5  min is <span class="token variable">$Load5</span>&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Load in 10 min is <span class="token variable">$Load10</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">network_info</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;=====================network info=======================&quot;</span>
   <span class="token assign-left variable">network</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ifconfig</span> <span class="token operator">|</span><span class="token function">grep</span>  <span class="token string">&quot;inet addr&quot;</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;127.0.0.1&quot;</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&quot;s/addr://g&quot;</span><span class="token variable">)</span></span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;network eth0 IP is <span class="token variable">$network</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">network_card_info</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;=====================network_card_info===================&quot;</span>
   <span class="token assign-left variable">card</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ip</span> a<span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;inet|/&quot;</span>  <span class="token string">&#39;/inet.*brd/ {print $2}&#39;</span><span class="token variable">)</span></span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;Network card  is <span class="token variable">$card</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">system_info</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;====================system info========================&quot;</span>
   <span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /etc/redhat-release<span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;NR==1{print}&#39;</span><span class="token variable">\`</span></span>
   <span class="token assign-left variable">KERNEL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> -a<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">\`</span></span>
   <span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> -a<span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
   <span class="token function">cat</span> /etc/issue <span class="token operator">&amp;&gt;</span> /dev/null
   <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[31m The system is no support <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
   <span class="token builtin class-name">exit</span> <span class="token number">1</span>
   <span class="token keyword">else</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;system_version is <span class="token entity" title="\\033">\\033</span>[32m <span class="token variable">$VERSION</span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;system_kernel_version is  <span class="token entity" title="\\033">\\033</span>[32m <span class="token variable">$KERNEL</span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;system_hostname is <span class="token entity" title="\\033">\\033</span>[32m <span class="token environment constant">$HOSTNAME</span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
   <span class="token keyword">fi</span>

<span class="token punctuation">}</span>

<span class="token function-name function">disk_info</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;======================disk info========================&quot;</span>
   <span class="token assign-left variable">DISK</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">df</span> -ThP<span class="token operator">|</span><span class="token function">column</span> <span class="token parameter variable">-t</span><span class="token variable">)</span></span>
   <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\033">\\033</span>[32m <span class="token variable">$DISK</span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">cpu_info</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;=======================cpu info========================&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;cpu processor is <span class="token entity" title="\\033">\\033</span>[32m <span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;processor&quot;</span> /proc/cpuinfo <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">)</span></span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;cpu mode name is <span class="token entity" title="\\033">\\033</span>[32m <span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;model name&quot;</span> /proc/cpuinfo <span class="token operator">|</span><span class="token function">uniq</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $4,$5,$6,$7,$8,$9}&#39;</span><span class="token variable">)</span></span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
   <span class="token function">grep</span> <span class="token string">&quot;cpu MHz&quot;</span> /proc/cpuinfo <span class="token operator">|</span><span class="token function">uniq</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $1,$2&quot;:&quot;$4}&#39;</span>
   <span class="token function">awk</span> <span class="token string">&#39;/cache size/ {print $1,$2&quot;:&quot;$4$5}&#39;</span> /proc/cpuinfo <span class="token operator">|</span><span class="token function">uniq</span>
<span class="token punctuation">}</span>

<span class="token function-name function">mem_info</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;====================memory info========================&quot;</span>
   <span class="token assign-left variable">MemTotal</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;/MemTotal/ {print $2}&#39;</span> /proc/meminfo<span class="token variable">)</span></span>
   <span class="token assign-left variable">MemFree</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;/MemFree/ {print $2}&#39;</span> /proc/meminfo<span class="token variable">)</span></span>
   <span class="token assign-left variable">Buffers</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;/^Buffers:/ {print $2}&#39;</span> /proc/meminfo<span class="token variable">)</span></span>
   <span class="token assign-left variable">Cached</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;/^Cached:/ {print $2}&#39;</span> /proc/meminfo<span class="token variable">)</span></span>
   <span class="token assign-left variable">FreeMem</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$MemFree<span class="token operator">/</span><span class="token number">1024</span><span class="token operator">+</span>$Buffers<span class="token operator">/</span><span class="token number">1024</span><span class="token operator">+</span>$Cached<span class="token operator">/</span><span class="token number">1024</span><span class="token variable">))</span></span>
   <span class="token assign-left variable">UsedMem</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$MemTotal<span class="token operator">/</span><span class="token number">1024</span><span class="token operator">-</span>$FreeMem<span class="token variable">))</span></span>
   <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Total memory is <span class="token entity" title="\\033">\\033</span>[32m <span class="token variable"><span class="token variable">$((</span>$MemTotal<span class="token operator">/</span><span class="token number">1024</span><span class="token variable">))</span></span> MB <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Free  memory is <span class="token entity" title="\\033">\\033</span>[32m <span class="token variable">\${FreeMem}</span> MB <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Used  memory is <span class="token entity" title="\\033">\\033</span>[32m <span class="token variable">\${UsedMem}</span> MB <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">loadavg_info</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;==================load average info====================&quot;</span>
   <span class="token assign-left variable">Load1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span>  <span class="token string">&#39;{print $1}&#39;</span> /proc/loadavg<span class="token variable">)</span></span>
   <span class="token assign-left variable">Load5</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span>  <span class="token string">&#39;{print $2}&#39;</span> /proc/loadavg<span class="token variable">)</span></span>
   <span class="token assign-left variable">Load10</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span> /proc/loadavg<span class="token variable">)</span></span>
   <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Loadavg in 1  min is <span class="token entity" title="\\033">\\033</span>[32m <span class="token variable">$Load1</span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Loadavg in 5  min is <span class="token entity" title="\\033">\\033</span>[32m <span class="token variable">$Load5</span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
   <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Loadavg in 10 min is <span class="token entity" title="\\033">\\033</span>[32m <span class="token variable">$Load10</span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">network_info</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;====================network info=======================&quot;</span>
   <span class="token assign-left variable">network_card</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ip</span> addr <span class="token operator">|</span><span class="token function">grep</span> inet <span class="token operator">|</span><span class="token function">egrep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;inet6|127.0.0.1&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $NF}&#39;</span><span class="token variable">)</span></span>
   <span class="token assign-left variable">IP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ip</span> addr <span class="token operator">|</span><span class="token function">grep</span> inet <span class="token operator">|</span><span class="token function">egrep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;inet6|127.0.0.1&quot;</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;/&quot;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span> 
   <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;network_device is <span class="token entity" title="\\033">\\033</span>[32m <span class="token variable">$network_card</span> <span class="token entity" title="\\033">\\033</span>[0m  address is  <span class="token entity" title="\\033">\\033</span>[32m <span class="token variable">$IP</span> <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[p];function o(i,c){return n(),a("div",null,l)}const k=s(t,[["render",o],["__file","add-profile-functions-sh.html.vue"]]);export{k as default};
