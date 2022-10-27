import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const p={},t=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u4E00\u4E2A\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u7684linux\u4E3B\u673A\u57FA\u672C\u4FE1\u606F\u76D1\u63A7\u7684\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token assign-left variable">usage</span><span class="token operator">=</span><span class="token string">&quot;usage: <span class="token variable">$0</span> <span class="token entity" title="\\n">\\n</span>
\u7CFB\u7EDF\u8D44\u6E90\u76D1\u63A7: \u8BB0\u5F55cpu\\memory\\load\\gpu\\disk, \u5165\u5E93influxdb, \u5F53\u8D85\u8FC7\u89C4\u5B9A\u6570\u503C\u65F6\u53D1\u7535\u90AE\u901A\u77E5\u7BA1\u7406\u5458
recommend: run by crontab
&quot;</span>

<span class="token comment"># *** config start ***</span>

<span class="token comment"># \u5F53\u524D\u670D\u52A1\u5668\u540D</span>
<span class="token assign-left variable">HOST</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">hostname</span><span class="token variable">)</span></span>

<span class="token assign-left variable">ROOT</span><span class="token operator">=</span><span class="token string">&#39;/var/log/monitor&#39;</span>

<span class="token assign-left variable">INFLUXDB_HOST</span><span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span>
<span class="token assign-left variable">INFLUXDB_PORT</span><span class="token operator">=</span><span class="token number">8086</span>

<span class="token comment"># \u5F53\u524D\u76EE\u5F55\u8DEF\u5F84</span>

<span class="token comment"># log \u6587\u4EF6\u8DEF\u5F84</span>
<span class="token assign-left variable">CPU_LOG</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${ROOT}</span>/cpu.log&quot;</span>
<span class="token assign-left variable">MEM_LOG</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${ROOT}</span>/mem.log&quot;</span>
<span class="token assign-left variable">LOAD_LOG</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${ROOT}</span>/load.log&quot;</span>
<span class="token assign-left variable">GPU_LOG</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${ROOT}</span>/gpu.log&quot;</span>
<span class="token assign-left variable">RENDERER_LOG</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${ROOT}</span>/renderer.log&quot;</span>

<span class="token comment"># \u901A\u77E5\u7535\u90AE\u5217\u8868</span>
<span class="token assign-left variable">NOTICE_EMAIL</span><span class="token operator">=</span><span class="token string">&#39;admin@admin.com&#39;</span>

<span class="token comment"># cpu,memory,load average \u8BB0\u5F55\u4E0A\u4E00\u6B21\u53D1\u9001\u901A\u77E5\u7535\u90AE\u65F6\u95F4</span>
<span class="token assign-left variable">CPU_REMARK</span><span class="token operator">=</span><span class="token string">&#39;/tmp/servermonitor_cpu.remark&#39;</span>
<span class="token assign-left variable">MEM_REMARK</span><span class="token operator">=</span><span class="token string">&#39;/tmp/servermonitor_mem.remark&#39;</span>
<span class="token assign-left variable">LOAD_REMARK</span><span class="token operator">=</span><span class="token string">&#39;/tmp/servermonitor_loadaverage.remark&#39;</span>
<span class="token assign-left variable">GPU_REMARK</span><span class="token operator">=</span><span class="token string">&#39;/tmp/servermonitor_gpu.remark&#39;</span>

<span class="token comment"># \u53D1\u901A\u77E5\u7535\u90AE\u95F4\u9694\u65F6\u95F4</span>
<span class="token assign-left variable">REMARK_EXPIRE</span><span class="token operator">=</span><span class="token number">3600</span>
<span class="token assign-left variable">NOW</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>

<span class="token assign-left variable">LIMIT_CPU</span><span class="token operator">=</span><span class="token number">8</span>
<span class="token assign-left variable">LIMIT_MEM</span><span class="token operator">=</span><span class="token number">80</span>
<span class="token assign-left variable">LIMIT_LOAD</span><span class="token operator">=</span><span class="token number">35</span>
<span class="token assign-left variable">LIMIT_GPU</span><span class="token operator">=</span><span class="token number">80</span>

<span class="token assign-left variable">FDISK</span><span class="token operator">=</span><span class="token string">&#39;/dev/sda5&#39;</span>


<span class="token comment"># *** function start ***</span>

<span class="token comment"># func{\u83B7\u53D6CPU\u5360\u7528}   </span>
<span class="token keyword">function</span> <span class="token function-name function">GetCpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">cpufree</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">vmstat</span> <span class="token number">1</span> <span class="token number">5</span> <span class="token operator">|</span><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;3,$p&#39;</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{x = x + $15} END {print x/5}&#39;</span> <span class="token operator">|</span><span class="token function">awk</span> -F. <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
    <span class="token assign-left variable">cpuused</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">100</span> <span class="token operator">-</span> $cpufree<span class="token variable">))</span></span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$cpuused</span>
    <span class="token comment"># curl -i -XPOST &quot;http://\${INFLUXDB_HOST}:\${INFLUXDB_PORT}/write?db=monitordb&quot; --data-binary &quot;cpu,host=\${HOST} used=\${cpuused}&quot;</span>

    <span class="token builtin class-name">local</span> remark
    <span class="token assign-left variable">remark</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>GetRemark $<span class="token punctuation">{</span>CPU_REMARK<span class="token punctuation">}</span><span class="token variable">)</span></span>

    <span class="token comment"># \u68C0\u67E5CPU\u5360\u7528\u662F\u5426\u8D85\u8FC790%</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$remark</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$cpuused</span>&quot;</span> <span class="token parameter variable">-gt</span> <span class="token variable">\${LIMIT_CPU}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;CPU uses more than <span class="token variable">\${LIMIT_CPU}</span>%&quot;</span> <span class="token operator">|</span> CustomSendMail <span class="token variable">\${NOTICE_EMAIL}</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">$CPU_REMARK</span>&quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># func{\u83B7\u53D6\u5185\u5B58\u4F7F\u7528\u60C5\u51B5}  </span>
<span class="token keyword">function</span> <span class="token function-name function">GetMem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">mem</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">free</span> <span class="token parameter variable">-m</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;3,3p&#39;</span><span class="token variable">)</span></span>
    <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $mem <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39; &#39;</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">)</span></span>
    <span class="token assign-left variable">free</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $mem <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39; &#39;</span> <span class="token string">&#39;{print $4}&#39;</span><span class="token variable">)</span></span>
    <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$used <span class="token operator">+</span> $free<span class="token variable">))</span></span>
    <span class="token assign-left variable">limit</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$total<span class="token operator">/</span><span class="token number">10</span><span class="token variable">))</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${total}</span> <span class="token variable">\${used}</span> <span class="token variable">\${free}</span>&quot;</span>
    <span class="token comment"># curl -i -XPOST &quot;http://\${INFLUXDB_HOST}:\${INFLUXDB_PORT}/write?db=monitordb&quot; --data-binary &quot;mem,host=\${HOST} used=\${used},total=\${total}&quot;</span>

    <span class="token builtin class-name">local</span> remark
    <span class="token assign-left variable">remark</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>GetRemark $<span class="token punctuation">{</span>MEM_REMARK<span class="token punctuation">}</span><span class="token variable">)</span></span>

    <span class="token comment"># \u68C0\u67E5\u5185\u5B58\u5360\u7528\u662F\u5426\u8D85\u8FC790%</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$remark</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$used</span>&quot;</span> <span class="token parameter variable">-gt</span> <span class="token string">&quot;<span class="token variable">\${LIMIT_MEM}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Memory uses more than <span class="token variable">\${LIMIT_MEM}</span>%&quot;</span> <span class="token operator">|</span> CustomSendMail <span class="token variable">\${NOTICE_EMAIL}</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">$MEM_REMARK</span>&quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># func{\u83B7\u53D6load average} </span>
<span class="token keyword">function</span> <span class="token function-name function">GetLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">load</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">uptime</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;load average: &#39;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>
    <span class="token assign-left variable">m1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $load <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;, &#39;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
    <span class="token assign-left variable">m5</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $load <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;, &#39;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>
    <span class="token assign-left variable">m15</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $load <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;, &#39;</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">)</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${m1}</span> <span class="token variable">\${m5}</span> <span class="token variable">\${m15}</span>&quot;</span>
    <span class="token comment">#curl -i -XPOST &quot;http://\${INFLUXDB_HOST}:\${INFLUXDB_PORT}/write?db=monitordb&quot; --data-binary &quot;load,host=\${HOST} m1=\${m1},m5=\${m5},m15=\${m15},cores=40&quot;</span>

    <span class="token builtin class-name">local</span> remark
    <span class="token assign-left variable">remark</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>GetRemark $<span class="token punctuation">{</span>LOAD_REMARK<span class="token punctuation">}</span><span class="token variable">)</span></span>

    <span class="token comment"># \u68C0\u67E5\u662F\u5426\u8D1F\u8F7D\u662F\u5426\u6709\u538B\u529B</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$remark</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$m1</span>&quot;</span> <span class="token parameter variable">-gt</span> <span class="token string">&quot;<span class="token variable">\${LIMIT_LOAD}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Load Average more than <span class="token variable">\${LIMIT_LOAD}</span>&quot;</span> <span class="token operator">|</span> CustomSendMail <span class="token variable">\${NOTICE_EMAIL}</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">$LOAD_REMARK</span>&quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># func{\u83B7\u53D6GPU\u5229\u7528\u7387}</span>
<span class="token keyword">function</span> <span class="token function-name function">GetGpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>nvidia-smi --query-gpu<span class="token operator">=</span>utilization.gpu <span class="token parameter variable">--format</span><span class="token operator">=</span>csv <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;utilization&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
    <span class="token assign-left variable">no</span><span class="token operator">=</span><span class="token number">0</span>
    <span class="token assign-left variable">total_used</span><span class="token operator">=</span><span class="token number">0</span>
    <span class="token assign-left variable">total_num</span><span class="token operator">=</span><span class="token number">0</span>
    <span class="token assign-left variable">params</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">\${used}</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span>
        gpu_array<span class="token punctuation">[</span><span class="token variable">\${no}</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token variable">\${i}</span>
        <span class="token assign-left variable">params</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${params}</span>,used<span class="token variable">\${no}</span>=<span class="token variable">\${i}</span>&quot;</span>
        <span class="token builtin class-name">let</span> <span class="token assign-left variable">no</span><span class="token operator">+=</span><span class="token number">1</span>
        <span class="token builtin class-name">let</span> <span class="token assign-left variable">total_used</span><span class="token operator">+=</span><span class="token variable">\${i}</span>
        <span class="token builtin class-name">let</span> <span class="token assign-left variable">total_num</span><span class="token operator">+=</span><span class="token number">1</span>
    <span class="token keyword">done</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$total_used</span>/<span class="token variable">$total_num</span>&quot;</span>
    <span class="token assign-left variable">gpu_average</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$total_used<span class="token operator">/</span>$total_num<span class="token variable">))</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${used}</span> <span class="token variable">$gpu_average</span>&quot;</span>

    <span class="token comment">#curl -i -XPOST &quot;http://\${INFLUXDB_HOST}:\${INFLUXDB_PORT}/write?db=monitordb&quot; --data-binary &quot;gpu,host=\${HOST} used=\${gpu_average}\${params}&quot;</span>

    <span class="token builtin class-name">local</span> remark
    <span class="token assign-left variable">remark</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>GetRemark $<span class="token punctuation">{</span>GPU_REMARK<span class="token punctuation">}</span><span class="token variable">)</span></span>
    <span class="token comment"># \u68C0\u67E5GPU\u4F7F\u7528\u7387</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$remark</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${gpu_average}</span>&quot;</span> <span class="token parameter variable">-gt</span> <span class="token string">&quot;<span class="token variable">\${LIMIT_GPU}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;GPU more than <span class="token variable">\${LIMIT_GPU}</span>%&quot;</span> <span class="token operator">|</span> CustomSendMail <span class="token variable">\${NOTICE_EMAIL}</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;GPU_REMARK&quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># func{\u83B7\u53D6\u78C1\u76D8\u4F7F\u7528\u7387}</span>
<span class="token keyword">function</span> <span class="token function-name function">GetStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">#disk_info=$(df -h | grep &quot;\`cat /etc/fstab | grep &#39;/dev/&#39; | grep -v swap |  grep -v boot | awk &#39;{print $1}&#39; | grep -v &#39;#&#39;\`&quot;)</span>

    <span class="token comment">#\u8981\u5C06$FDISK\u5206\u5272\u5F00\uFF0C\u5148\u5B58\u50A8\u65E7\u7684\u5206\u9694\u7B26</span>
    <span class="token assign-left variable">OLD_IFS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$IFS</span>&quot;</span>
    <span class="token comment">#\u8BBE\u7F6E\u5206\u9694\u7B26</span>
    <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span>
    <span class="token comment">#\u5982\u4E0B\u4F1A\u81EA\u52A8\u5206\u9694</span>
    <span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">$FDISK</span><span class="token punctuation">)</span>
    <span class="token comment">#\u6062\u590D\u539F\u6765\u7684\u5206\u9694\u7B26</span>
    <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$OLD_IFS</span>&quot;</span>

    <span class="token comment">#\u904D\u5386\u6570\u7EC4</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">s</span> <span class="token keyword">in</span> <span class="token variable">\${arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
    <span class="token keyword">do</span>
        <span class="token assign-left variable">params</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">df</span> <span class="token parameter variable">-h</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;<span class="token variable">$s</span>&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print &quot;total=&quot;$2&quot;,per=&quot;$5&quot;,used=&quot;$3}&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/%//&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/G//g&#39;</span><span class="token variable">\`</span></span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$params</span>
        <span class="token comment">#curl -i -XPOST &quot;http://\${INFLUXDB_HOST}:\${INFLUXDB_PORT}/write?db=monitordb&quot; --data-binary &quot;disk,host=\${HOST},dev=\${s} \${params}&quot;</span>
    <span class="token keyword">done</span>
<span class="token punctuation">}</span>


<span class="token comment">#  func{\u83B7\u53D6\u4E0A\u4E00\u6B21\u53D1\u9001\u7535\u90AE\u65F6\u95F4}</span>
<span class="token keyword">function</span> <span class="token function-name function">GetRemark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> remark

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">remark</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $1<span class="token variable">)</span></span>

        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$((</span> $NOW <span class="token operator">-</span> $remark <span class="token variable">))</span></span> <span class="token parameter variable">-gt</span> <span class="token string">&quot;<span class="token variable">$REMARK_EXPIRE</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$1</span>
            <span class="token assign-left variable">remark</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">else</span>
        <span class="token assign-left variable">remark</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
    <span class="token keyword">fi</span>

    <span class="token builtin class-name">echo</span> <span class="token variable">$remark</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">CustomSendMail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment"># \u53EF\u4EE5\u8C03\u7528\u96C6\u7FA4\u516C\u5171\u90AE\u4EF6\u670D\u52A1</span>
    <span class="token function">sendmail</span> <span class="token string">&quot;Subject: <span class="token variable">\${HOST}</span> <span class="token variable">$1</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d<span class="token string">&#39; &#39;</span>%H:%M:%S<span class="token variable">)</span></span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># *** run start ***</span>

<span class="token assign-left variable">cpuinfo</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>GetCpu<span class="token variable">)</span></span>
<span class="token assign-left variable">meminfo</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>GetMem<span class="token variable">)</span></span>
<span class="token assign-left variable">loadinfo</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>GetLoad<span class="token variable">)</span></span>
<span class="token assign-left variable">gpuinfo</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>GetGpu<span class="token variable">)</span></span>
<span class="token assign-left variable">storageinfo</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>GetStorage<span class="token variable">)</span></span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;[<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>] cpu: <span class="token variable">\${cpuinfo}</span>&quot;</span>                        <span class="token comment"># | tee -a &quot;\${CPU_LOG}&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>] mem: <span class="token variable">\${meminfo}</span>&quot;</span>                        <span class="token comment"># | tee -a &quot;\${MEM_LOG}&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>] load: <span class="token variable">\${loadinfo}</span>&quot;</span>                      <span class="token comment"># | tee -a &quot;\${LOAD_LOG}&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>] gpu: <span class="token variable">\${gpuinfo}</span>&quot;</span>                        <span class="token comment"># | tee -a &quot;\${GPU_LOG}&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;[<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>] storage: <span class="token variable">\${storageinfo}</span>&quot;</span>                <span class="token comment"># | tee -a &quot;\${GPU_LOG}&quot;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function o(i,c){return a(),n("div",null,l)}const k=s(p,[["render",o],["__file","systeminfo-monitor-sh.html.vue"]]);export{k as default};
