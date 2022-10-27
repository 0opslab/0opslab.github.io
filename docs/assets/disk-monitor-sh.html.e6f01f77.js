import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const t={},p=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u78C1\u76D8\u76D1\u63A7\u811A\u672C</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>
<span class="token comment">#\u6BCF\u4E24\u5C0F\u65F6\u6267\u884C\u4E00\u6B21</span>
<span class="token comment">#0 */2 * * * /bin/sh /home/team/shells/disk_mintor.sh  </span>

<span class="token assign-left variable">diskinfo</span><span class="token operator">=</span><span class="token string">&quot;/tmp/diskinfo.txt&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">d</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">df</span> <span class="token parameter variable">-P</span> <span class="token operator">|</span> <span class="token function">grep</span> /dev <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $5}&#39;</span><span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/%//g&#39;</span><span class="token variable">\`</span></span>
<span class="token keyword">do</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$d</span> <span class="token parameter variable">-gt</span> <span class="token number">90</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token function">df</span> -h<span class="token operator">&gt;&gt;</span><span class="token variable">$diskinfo</span><span class="token punctuation">;</span>
		<span class="token comment">#sendmail</span>
		<span class="token function">mutt</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;disk warining!&quot;</span> <span class="token string">&quot;xxx@qq.com&quot;</span> <span class="token operator">&lt;</span><span class="token variable">\${diskinfo}</span> <span class="token parameter variable">-a</span> <span class="token variable">\${diskinfo}</span>
		<span class="token builtin class-name">exit</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>
	

<span class="token comment">#moniter available disk space</span>
<span class="token assign-left variable">SPACE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">df</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/\\/$/p&#39;</span><span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $4}&#39;</span><span class="token operator">|</span><span class="token function">sed</span> <span class="token string">&#39;s/%//&#39;</span><span class="token variable">\`</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$SPACE</span> <span class="token parameter variable">-ge</span> <span class="token number">8</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Disk space on root at <span class="token variable">$SPACE</span>% used&quot;</span> <span class="token operator">|</span> mail <span class="token parameter variable">-s</span> <span class="token string">&quot;Disk warning&quot;</span> liujian@erichfund.com
<span class="token keyword">fi</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[p];function l(o,c){return n(),a("div",null,i)}const d=s(t,[["render",l],["__file","disk-monitor-sh.html.vue"]]);export{d as default};
