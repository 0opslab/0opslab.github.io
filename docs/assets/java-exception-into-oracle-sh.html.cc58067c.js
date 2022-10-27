import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},o=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u83B7\u53D6jva\u5E94\u7528\u65E5\u5FD7\u6587\u4EF6\u4E2D\u7684\u5F02\u5E38\u4FE1\u606F\u5E76\u5199\u5165oracle\u6570\u636E\u5E93\u4E2D</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;#!/bin/bash&quot;</span> <span class="token operator">&gt;</span>sqlplus_load.bash
<span class="token builtin class-name">echo</span> <span class="token string">&quot;sqlplus -s /nolog &gt; runlog &lt;&lt;EOF&quot;</span> <span class="token operator">&gt;</span>sqlplus_load.bash
<span class="token builtin class-name">echo</span> <span class="token string">&quot;conn qhmcc/XWsptyapp123#@XWTEST26DB&quot;</span><span class="token operator">&gt;&gt;</span>sqlplus_load.bash

<span class="token builtin class-name">echo</span> <span class="token string">&quot;declare v_clob clob:=&#39;&#39;||&quot;</span><span class="token operator">&gt;&gt;</span>sqlplus_load.bash
<span class="token function">find</span> /webapp02/bes820/var/domains/domain1/nodes/ <span class="token parameter variable">-name</span> server.log <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">grep</span> <span class="token string">&#39;at com.xwte&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;#&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $3 }&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-r</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&quot;s/^/&#39;&amp;/g&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&quot;s/$/&#39;||cha(10)/g&quot;</span><span class="token operator">&gt;&gt;</span>sqlplus_load.bash
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&#39;&#39;;&quot;</span><span class="token operator">&gt;&gt;</span>sqlplus_load.bash

<span class="token builtin class-name">echo</span> <span class="token string">&quot;begin&quot;</span><span class="token operator">&gt;&gt;</span>sqlplus_load.bash
<span class="token builtin class-name">echo</span> <span class="token string">&quot;    insert into t_runtime_exception(createtime,serverip,content) values(sysdate,&#39;135.191.168.68&#39;,v_clob);&quot;</span><span class="token operator">&gt;&gt;</span>sqlplus_load.bash
<span class="token builtin class-name">echo</span> <span class="token string">&quot;end;&quot;</span><span class="token operator">&gt;&gt;</span>sqlplus_load.bash
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/&quot;</span><span class="token operator">&gt;&gt;</span>sqlplus_load.bash
<span class="token builtin class-name">echo</span> <span class="token string">&quot;commit;&quot;</span><span class="token operator">&gt;&gt;</span>sqlplus_load.bash
<span class="token builtin class-name">echo</span> <span class="token string">&quot;exit&quot;</span><span class="token operator">&gt;&gt;</span>sqlplus_load.bash
<span class="token builtin class-name">echo</span> <span class="token string">&quot;EOF&quot;</span><span class="token operator">&gt;&gt;</span>sqlplus_load.bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[o];function p(c,i){return n(),a("div",null,l)}const u=s(t,[["render",p],["__file","java-exception-into-oracle-sh.html.vue"]]);export{u as default};
