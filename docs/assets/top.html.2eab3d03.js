import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},i=e(`<p>###top/htop</p><p>top\u662F\u4E00\u4E2A\u5F88\u6709\u7528\u7684\u547D\u4EE4\uFF0C\u53EF\u4EE5\u76D1\u89C6\u7CFB\u7EDF\u4E2D\u4E0D\u540C\u8FDB\u7A0B\u6240\u4F7F\u7528\u7684\u8D44\u6E90\uFF0C\u5B83\u63D0\u4F9B\u5B9E\u65F6\u7684\u7CFB\u7EDF\u72B6\u6001\u4FE1\u606F\uFF0C\u662F\u4E00\u4E2A\u7EFC\u5408\u4E86\u591A\u65B9\u4FE1\u606F\u7684\u76D1\u89C6\u5DE5\u5177\uFF0C\u901A\u8FC7top\u547D\u4EE4\u6240\u63D0\u4F9B\u7684\u4EA4\u4E92\u5F0F\u7684\u89E3\u5BC6\uFF0C\u53EF\u4EE5\u7528\u70ED\u952E\u7BA1\u7406\u3002\u53E6\u5916htop\u547D\u4EE4\u662F\u52A0\u5F3A\u7248\u7684top\u547D\u4EE4\uFF0C\u4F46\u662F\u5728\u5E38\u7528\u7684\u53D1\u578B\u7248\u4E2D\u6CA1\u6709\u9ED8\u8BA4\u6309\u7167\uFF0C\u56E0\u6B64\u4E0D\u505A\u8BA8\u8BBA\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>usage: <span class="token function">top</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span>
\u9009\u9879:
  -b\uFF1A\u4EE5\u6279\u5904\u7406\u6A21\u5F0F\u64CD\u4F5C\uFF1B
  -c\uFF1A\u663E\u793A\u5B8C\u6574\u7684\u6CBB\u547D\u4EE4\uFF1B
  -d\uFF1A\u5C4F\u5E55\u5237\u65B0\u95F4\u9694\u65F6\u95F4\uFF1B
  -I\uFF1A\u5FFD\u7565\u5931\u6548\u8FC7\u7A0B\uFF1B
  -s\uFF1A\u4FDD\u5BC6\u6A21\u5F0F\uFF1B
  -S\uFF1A\u7D2F\u79EF\u6A21\u5F0F\uFF1B
  -i<span class="token operator">&lt;</span>\u65F6\u95F4<span class="token operator">&gt;</span>\uFF1A\u8BBE\u7F6E\u95F4\u9694\u65F6\u95F4\uFF1B
  -u<span class="token operator">&lt;</span>\u7528\u6237\u540D<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u7528\u6237\u540D\uFF1B
  -p<span class="token operator">&lt;</span>\u8FDB\u7A0B\u53F7<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u8FDB\u7A0B\uFF1B
  -n<span class="token operator">&lt;</span>\u6B21\u6570<span class="token operator">&gt;</span>\uFF1A\u5FAA\u73AF\u663E\u793A\u7684\u6B21\u6570\u3002
\u4EA4\u4E92\u547D\u4EE4\uFF1A
  h\uFF1A\u663E\u793A\u5E2E\u52A9\u753B\u9762\uFF0C\u7ED9\u51FA\u4E00\u4E9B\u7B80\u77ED\u7684\u547D\u4EE4\u603B\u7ED3\u8BF4\u660E\uFF1B
  k\uFF1A\u7EC8\u6B62\u4E00\u4E2A\u8FDB\u7A0B\uFF1B
  i\uFF1A\u5FFD\u7565\u95F2\u7F6E\u548C\u50F5\u6B7B\u8FDB\u7A0B\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F00\u5173\u5F0F\u547D\u4EE4\uFF1B
  q\uFF1A\u9000\u51FA\u7A0B\u5E8F\uFF1B
  r\uFF1A\u91CD\u65B0\u5B89\u6392\u4E00\u4E2A\u8FDB\u7A0B\u7684\u4F18\u5148\u7EA7\u522B\uFF1B
  S\uFF1A\u5207\u6362\u5230\u7D2F\u8BA1\u6A21\u5F0F\uFF1B
  s\uFF1A\u6539\u53D8\u4E24\u6B21\u5237\u65B0\u4E4B\u95F4\u7684\u5EF6\u8FDF\u65F6\u95F4\uFF08\u5355\u4F4D\u4E3As\uFF09\uFF0C\u5982\u679C\u6709\u5C0F\u6570\uFF0C\u5C31\u6362\u7B97\u6210ms\u3002\u8F93\u51650\u503C\u5219\u7CFB\u7EDF\u5C06\u4E0D\u65AD\u5237\u65B0\uFF0C\u9ED8\u8BA4\u503C\u662F5s\uFF1B
  f\u6216\u8005F\uFF1A\u4ECE\u5F53\u524D\u663E\u793A\u4E2D\u6DFB\u52A0\u6216\u8005\u5220\u9664\u9879\u76EE\uFF1B
  o\u6216\u8005O\uFF1A\u6539\u53D8\u663E\u793A\u9879\u76EE\u7684\u987A\u5E8F\uFF1B
  l\uFF1A\u5207\u6362\u663E\u793A\u5E73\u5747\u8D1F\u8F7D\u548C\u542F\u52A8\u65F6\u95F4\u4FE1\u606F\uFF1B
  m\uFF1A\u5207\u6362\u663E\u793A\u5185\u5B58\u4FE1\u606F\uFF1B
  t\uFF1A\u5207\u6362\u663E\u793A\u8FDB\u7A0B\u548CCPU\u72B6\u6001\u4FE1\u606F\uFF1B
  c\uFF1A\u5207\u6362\u663E\u793A\u547D\u4EE4\u540D\u79F0\u548C\u5B8C\u6574\u547D\u4EE4\u884C\uFF1B
  M\uFF1A\u6839\u636E\u9A7B\u7559\u5185\u5B58\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F\uFF1B
  P\uFF1A\u6839\u636ECPU\u4F7F\u7528\u767E\u5206\u6BD4\u5927\u5C0F\u8FDB\u884C\u6392\u5E8F\uFF1B
  T\uFF1A\u6839\u636E\u65F6\u95F4/\u7D2F\u8BA1\u65F6\u95F4\u8FDB\u884C\u6392\u5E8F\uFF1B
  w\uFF1A\u5C06\u5F53\u524D\u8BBE\u7F6E\u5199\u5165~/.toprc\u6587\u4EF6\u4E2D\u3002
  


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>		\u524D\u4E94\u884C\u662F\u7CFB\u7EDF\u6574\u4F53\u7684\u7EDF\u8BA1\u4FE1\u606F\u3002
		\u7B2C\u4E00\u884C: \u4EFB\u52A1\u961F\u5217\u4FE1\u606F\uFF0C\u540C uptime \u547D\u4EE4\u7684\u6267\u884C\u7ED3\u679C\u3002\u5185\u5BB9\u5982\u4E0B\uFF1A
			01:06:48 \u5F53\u524D\u65F6\u95F4
			up 1:22 \u7CFB\u7EDF\u8FD0\u884C\u65F6\u95F4\uFF0C\u683C\u5F0F\u4E3A\u65F6:\u5206
			1 user \u5F53\u524D\u767B\u5F55\u7528\u6237\u6570
			load average: 0.06, 0.60, 0.48 \u7CFB\u7EDF\u8D1F\u8F7D\uFF0C\u5373\u4EFB\u52A1\u961F\u5217\u7684\u5E73\u5747\u957F\u5EA6\u3002
			\u4E09\u4E2A\u6570\u503C\u5206\u522B\u4E3A 1\u5206\u949F\u30015\u5206\u949F\u300115\u5206\u949F\u524D\u5230\u73B0\u5728\u7684\u5E73\u5747\u503C\u3002

		\u7B2C\u4E8C\u3001\u4E09\u884C:\u4E3A\u8FDB\u7A0B\u548CCPU\u7684\u4FE1\u606F\u3002\u5F53\u6709\u591A\u4E2ACPU\u65F6\uFF0C\u8FD9\u4E9B\u5185\u5BB9\u53EF\u80FD\u4F1A\u8D85\u8FC7\u4E24\u884C\u3002\u5185\u5BB9\u5982\u4E0B\uFF1A
			Tasks: 29 total \u8FDB\u7A0B\u603B\u6570
			1 running \u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u6570
			28 sleeping \u7761\u7720\u7684\u8FDB\u7A0B\u6570
			0 stopped \u505C\u6B62\u7684\u8FDB\u7A0B\u6570
			0 zombie \u50F5\u5C38\u8FDB\u7A0B\u6570
			Cpu(s): 0.3% us \u7528\u6237\u7A7A\u95F4\u5360\u7528CPU\u767E\u5206\u6BD4
			1.0% sy \u5185\u6838\u7A7A\u95F4\u5360\u7528CPU\u767E\u5206\u6BD4
			0.0% ni \u7528\u6237\u8FDB\u7A0B\u7A7A\u95F4\u5185\u6539\u53D8\u8FC7\u4F18\u5148\u7EA7\u7684\u8FDB\u7A0B\u5360\u7528CPU\u767E\u5206\u6BD4
			98.7% id \u7A7A\u95F2CPU\u767E\u5206\u6BD4
			0.0% wa \u7B49\u5F85\u8F93\u5165\u8F93\u51FA\u7684CPU\u65F6\u95F4\u767E\u5206\u6BD4
			0.0% hi
			0.0% si

		\u7B2C\u56DB\u3001\u4E94\u884C:\u4E3A\u5185\u5B58\u4FE1\u606F\u3002\u5185\u5BB9\u5982\u4E0B\uFF1A
			Mem: 191272k total \u7269\u7406\u5185\u5B58\u603B\u91CF
			173656k used \u4F7F\u7528\u7684\u7269\u7406\u5185\u5B58\u603B\u91CF
			17616k free \u7A7A\u95F2\u5185\u5B58\u603B\u91CF
			22052k buffers \u7528\u4F5C\u5185\u6838\u7F13\u5B58\u7684\u5185\u5B58\u91CF
			Swap: 192772k total \u4EA4\u6362\u533A\u603B\u91CF
			0k used \u4F7F\u7528\u7684\u4EA4\u6362\u533A\u603B\u91CF
			192772k free \u7A7A\u95F2\u4EA4\u6362\u533A\u603B\u91CF
			123988k cached \u7F13\u51B2\u7684\u4EA4\u6362\u533A\u603B\u91CF\u3002
			\u5185\u5B58\u4E2D\u7684\u5185\u5BB9\u88AB\u6362\u51FA\u5230\u4EA4\u6362\u533A\uFF0C\u800C\u540E\u53C8\u88AB\u6362\u5165\u5230\u5185\u5B58\uFF0C\u4F46\u4F7F\u7528\u8FC7\u7684\u4EA4\u6362\u533A\u5C1A\u672A\u88AB\u8986\u76D6\uFF0C
			\u8BE5\u6570\u503C\u5373\u4E3A\u8FD9\u4E9B\u5185\u5BB9\u5DF2\u5B58\u5728\u4E8E\u5185\u5B58\u4E2D\u7684\u4EA4\u6362\u533A\u7684\u5927\u5C0F\u3002
			\u76F8\u5E94\u7684\u5185\u5B58\u518D\u6B21\u88AB\u6362\u51FA\u65F6\u53EF\u4E0D\u5FC5\u518D\u5BF9\u4EA4\u6362\u533A\u5199\u5165\u3002

		\u8FDB\u7A0B\u4FE1\u606F\u533A,\u5404\u5217\u7684\u542B\u4E49\u5982\u4E0B:  # \u663E\u793A\u5404\u4E2A\u8FDB\u7A0B\u7684\u8BE6\u7EC6\u4FE1\u606F

		\u5E8F\u53F7 \u5217\u540D    \u542B\u4E49
		a   PID      \u8FDB\u7A0Bid
		b   PPID     \u7236\u8FDB\u7A0Bid
		c   RUSER    Real user name
		d   UID      \u8FDB\u7A0B\u6240\u6709\u8005\u7684\u7528\u6237id
		e   USER     \u8FDB\u7A0B\u6240\u6709\u8005\u7684\u7528\u6237\u540D
		f   GROUP    \u8FDB\u7A0B\u6240\u6709\u8005\u7684\u7EC4\u540D
		g   TTY      \u542F\u52A8\u8FDB\u7A0B\u7684\u7EC8\u7AEF\u540D\u3002\u4E0D\u662F\u4ECE\u7EC8\u7AEF\u542F\u52A8\u7684\u8FDB\u7A0B\u5219\u663E\u793A\u4E3A ?
		h   PR       \u4F18\u5148\u7EA7
		i   NI       nice\u503C\u3002\u8D1F\u503C\u8868\u793A\u9AD8\u4F18\u5148\u7EA7\uFF0C\u6B63\u503C\u8868\u793A\u4F4E\u4F18\u5148\u7EA7
		j   P        \u6700\u540E\u4F7F\u7528\u7684CPU\uFF0C\u4EC5\u5728\u591ACPU\u73AF\u5883\u4E0B\u6709\u610F\u4E49
		k   %CPU     \u4E0A\u6B21\u66F4\u65B0\u5230\u73B0\u5728\u7684CPU\u65F6\u95F4\u5360\u7528\u767E\u5206\u6BD4
		l   TIME     \u8FDB\u7A0B\u4F7F\u7528\u7684CPU\u65F6\u95F4\u603B\u8BA1\uFF0C\u5355\u4F4D\u79D2
		m   TIME+    \u8FDB\u7A0B\u4F7F\u7528\u7684CPU\u65F6\u95F4\u603B\u8BA1\uFF0C\u5355\u4F4D1/100\u79D2
		n   %MEM     \u8FDB\u7A0B\u4F7F\u7528\u7684\u7269\u7406\u5185\u5B58\u767E\u5206\u6BD4
		o   VIRT     \u8FDB\u7A0B\u4F7F\u7528\u7684\u865A\u62DF\u5185\u5B58\u603B\u91CF\uFF0C\u5355\u4F4Dkb\u3002VIRT=SWAP+RES
		p   SWAP     \u8FDB\u7A0B\u4F7F\u7528\u7684\u865A\u62DF\u5185\u5B58\u4E2D\uFF0C\u88AB\u6362\u51FA\u7684\u5927\u5C0F\uFF0C\u5355\u4F4Dkb\u3002
		q   RES      \u8FDB\u7A0B\u4F7F\u7528\u7684\u3001\u672A\u88AB\u6362\u51FA\u7684\u7269\u7406\u5185\u5B58\u5927\u5C0F\uFF0C\u5355\u4F4Dkb\u3002RES=CODE+DATA
		r   CODE     \u53EF\u6267\u884C\u4EE3\u7801\u5360\u7528\u7684\u7269\u7406\u5185\u5B58\u5927\u5C0F\uFF0C\u5355\u4F4Dkb
		s   DATA     \u53EF\u6267\u884C\u4EE3\u7801\u4EE5\u5916\u7684\u90E8\u5206(\u6570\u636E\u6BB5+\u6808)\u5360\u7528\u7684\u7269\u7406\u5185\u5B58\u5927\u5C0F\uFF0C\u5355\u4F4Dkb
		t   SHR      \u5171\u4EAB\u5185\u5B58\u5927\u5C0F\uFF0C\u5355\u4F4Dkb
		u   nFLT     \u9875\u9762\u9519\u8BEF\u6B21\u6570
		v   nDRT     \u6700\u540E\u4E00\u6B21\u5199\u5165\u5230\u73B0\u5728\uFF0C\u88AB\u4FEE\u6539\u8FC7\u7684\u9875\u9762\u6570\u3002
		w   S        \u8FDB\u7A0B\u72B6\u6001\u3002
			D=\u4E0D\u53EF\u4E2D\u65AD\u7684\u7761\u7720\u72B6\u6001
			R=\u8FD0\u884C
			S=\u7761\u7720
			T=\u8DDF\u8E2A/\u505C\u6B62
			Z=\u50F5\u5C38\u8FDB\u7A0B
		x   COMMAND  \u547D\u4EE4\u540D/\u547D\u4EE4\u884C
		y   WCHAN    \u82E5\u8BE5\u8FDB\u7A0B\u5728\u7761\u7720\uFF0C\u5219\u663E\u793A\u7761\u7720\u4E2D\u7684\u7CFB\u7EDF\u51FD\u6570\u540D
		z   Flags    \u4EFB\u52A1\u6807\u5FD7\uFF0C\u53C2\u8003 sched.h
</code></pre><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Update every &lt;interval&gt; samples:</span>
<span class="token comment">#\u66F4\u65B0\u6BCF\u4E2A&lt;interval&gt;\u6837\u672C\uFF1A</span>
<span class="token function">top</span> <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>interval<span class="token operator">&gt;</span>

<span class="token comment"># Set the delay between updates to &lt;delay&gt; seconds:</span>
<span class="token comment">#\u5C06\u66F4\u65B0\u4E4B\u95F4\u7684\u5EF6\u8FDF\u8BBE\u7F6E\u4E3A&lt;delay&gt;\u79D2\uFF1A</span>
<span class="token function">top</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>delay<span class="token operator">&gt;</span>

<span class="token comment"># Set event counting to accumulative mode:</span>
<span class="token comment">#\u5C06\u4E8B\u4EF6\u8BA1\u6570\u8BBE\u7F6E\u4E3A\u7D2F\u79EF\u6A21\u5F0F\uFF1A</span>
<span class="token function">top</span> <span class="token parameter variable">-a</span>

<span class="token comment"># Set event counting to delta mode:</span>
<span class="token comment">#\u5C06\u4E8B\u4EF6\u8BA1\u6570\u8BBE\u7F6E\u4E3A\u589E\u91CF\u6A21\u5F0F\uFF1A</span>
<span class="token function">top</span> <span class="token parameter variable">-d</span>

<span class="token comment"># Set event counting to absolute mode:</span>
<span class="token comment">#\u5C06\u4E8B\u4EF6\u8BA1\u6570\u8BBE\u7F6E\u4E3A\u7EDD\u5BF9\u6A21\u5F0F\uFF1A</span>
<span class="token function">top</span> <span class="token parameter variable">-e</span>

<span class="token comment"># Do not calculate statistics on shared libraries, also known as frameworks:</span>
<span class="token comment">#\u4E0D\u8981\u8BA1\u7B97\u5171\u4EAB\u5E93\u7684\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u4E5F\u79F0\u4E3A\u6846\u67B6\uFF1A</span>
<span class="token function">top</span> <span class="token parameter variable">-F</span>

<span class="token comment"># Calculate statistics on shared libraries, also known as frameworks (default):</span>
<span class="token comment">#\u8BA1\u7B97\u5171\u4EAB\u5E93\u7684\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u4E5F\u79F0\u4E3A\u6846\u67B6\uFF08\u9ED8\u8BA4\uFF09\uFF1A</span>
<span class="token function">top</span> <span class="token parameter variable">-f</span>

<span class="token comment"># Print command line usage information and exit:</span>
<span class="token comment">#\u6253\u5370\u547D\u4EE4\u884C\u4F7F\u7528\u4FE1\u606F\u5E76\u9000\u51FA\uFF1A</span>
<span class="token function">top</span> <span class="token parameter variable">-h</span>

<span class="token comment"># Order the display by sorting on &lt;key&gt; in descending order</span>
<span class="token comment">#\u901A\u8FC7\u6309\u964D\u5E8F\u6392\u5E8F&lt;key&gt;\u6765\u6392\u5E8F\u663E\u793A</span>
<span class="token function">top</span> <span class="token parameter variable">-o</span> <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span>

$ <span class="token function">top</span>
<span class="token comment"># top -xxx \u5F53\u524D\u65F6\u95F4  up xx \u7CFB\u7EDF\u8FD0\u884C\u65F6\u95F4  x users\u5F53\u524D\u767B\u5F55\u7528\u6237\u6570 </span>
<span class="token comment"># load average \u7CFB\u7EDF\u8D1F\u8F7D \u5373\u4EFB\u52A1\u961F\u5217\u7684\u5E73\u5747\u957F\u5EA6 \u5206\u522B1\u5206\u949F 5\u5206\u949F 15\u5206\u949F\u524D\u5230\u73B0\u5728\u7684\u5E73\u5747\u503C</span>
<span class="token function">top</span> - <span class="token number">13</span>:28:01 up <span class="token number">76</span> days, <span class="token number">16</span>:09,  <span class="token number">2</span> users,  load average: <span class="token number">0.00</span>, <span class="token number">0.01</span>, <span class="token number">0.05</span>
<span class="token comment"># \u7B2C\u4E8C\u3001\u4E09\u884C\u4E3A\u8FDB\u7A0B\u548CCPU\u7684\u4FE1\u606F\uFF0C\u5F53\u6709\u591A\u4E2ACPU\u65F6\uFF0C\u8FD9\u4E9B\u5185\u5BB9\u53EF\u80FD\u4F1A\u8D85\u8FC7\u4FE9\u884C</span>
<span class="token comment"># total \u8FDB\u7A0B\u603B\u6570 running \u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u6570 sleeping \u7761\u7720\u7684\u8FDB\u7A0B\u6570 </span>
<span class="token comment"># stoped \u505C\u6B62\u7684\u8FDB\u7A0B\u6570 zombie \u50F5\u5C38\u8FDB\u7A0B\u6570</span>
Tasks:  <span class="token number">85</span> total,   <span class="token number">1</span> running,  <span class="token number">84</span> sleeping,   <span class="token number">0</span> stopped,   <span class="token number">0</span> zombie
<span class="token comment"># CPU\u4FE1\u606F \u591A\u4E2ACPU\u5728\u6570\u5B57\u952E\u76D81 \u53EF\u4EE5\u6309\u7167\u6BCF\u4E2A\u903B\u8F91CPU\u7684\u72B6\u51B5</span>
<span class="token comment"># us \u7528\u6237\u7A7A\u95F4\u5360\u7528CPU\u767E\u5206\u6BD4 sy\u5185\u6838\u7A7A\u95F4\u5360\u7528CPU\u767E\u5206\u6BD4 ni\u7528\u6237\u8FDB\u573A\u7A7A\u95F4\u5185\u6539\u53D8\u4F18\u5148\u7EA7\u7684\u8FDB\u7A0B\u5360\u7528CPU\u767E\u5206\u6BD4</span>
<span class="token comment"># id \u7A7A\u95F2CPU\u767E\u5206\u6BD4 wa \u7B49\u5F85\u8F93\u5165\u8F93\u51FA\u7684CPU\u65F6\u95F4\u767E\u5206\u6BD4 hi \u786C\u4EF6CPU\u4E2D\u65AD\u518D\u7528\u767E\u5206\u6BD4 si\u8F6F\u4E2D\u65AD\u5360\u7528\u767E\u5206\u6BD4</span>
<span class="token comment"># \u865A\u62DF\u673A\u5360\u7528\u767E\u5206\u6BD4</span>
%Cpu<span class="token punctuation">(</span>s<span class="token punctuation">)</span>:  <span class="token number">0.2</span> us,  <span class="token number">0.1</span> sy,  <span class="token number">0.0</span> ni, <span class="token number">99.7</span> id,  <span class="token number">0.1</span> wa,  <span class="token number">0.0</span> hi,  <span class="token number">0.0</span> si,  <span class="token number">0.0</span> st
<span class="token comment"># \u5185\u5B58\u4FE1\u606F</span>
<span class="token comment"># total \u7269\u7406\u5185\u5B58\u603B\u91CF free \u7A7A\u95F2\u5185\u5B58\u603B\u91CF	used \u4F7F\u7528\u7684\u7269\u7406\u5185\u5B58\u603B\u91CF  buff/cache \u5185\u6838\u7F13\u5B58\u7684\u5185\u5B58\u91CF</span>
KiB Mem <span class="token builtin class-name">:</span>  <span class="token number">3882032</span> total,   <span class="token number">211112</span> free,   <span class="token number">166384</span> used,  <span class="token number">3504536</span> buff/cache
<span class="token comment"># swap </span>
<span class="token comment"># total \u4EA4\u6362\u533A\u603B\u603B\u91CF	free \u7A7A\u95F2\u4EA4\u6362\u533A\u603B\u91CF used \u4F7F\u7528\u7684\u4EA4\u6362\u533A\u603B\u91CF avail mem\u6709\u6548\u5185\u5B58</span>
KiB Swap:        <span class="token number">0</span> total,        <span class="token number">0</span> free,        <span class="token number">0</span> used.  <span class="token number">3409756</span> avail Mem
<span class="token comment"># PID-\u8FDB\u7A0BID  USER-\u8FDB\u7A0B\u641C\u6709\u8005 PR-\u8FDB\u7A0B\u4F18\u5148\u7EA7 NI-nice\u503C\u8D1F\u503C\u8868\u793A\u9AD8\u4F18\u5148\u7EA7 \u6B63\u76F4\u8868\u793A\u4F4E\u4F18\u5148\u7EA7</span>
<span class="token comment"># VIRT-\u8FDB\u7A0B\u4F7F\u7528\u7684\u865A\u62DF\u5185\u5B58\u603B\u91CF,\u5355\u4F4D\u4E3AKB  RES-\u8FDB\u7A0B\u4F7F\u7528\u7684\uFF0C\u672A\u88AB\u6362\u51FA\u6765\u7684\u7269\u7406\u5185\u5B58\u5927\u5C0F</span>
<span class="token comment"># SHR-\u5171\u4EAB\u5185\u5B58\u5927\u5C0F\uFF0C\u5355\u4F4DKB S-\u8FDB\u7A0B\u72B6\u6001 D=\u4E0D\u53EF\u4E2D\u65AD\u7684\u7761\u7720\u72B6\u6001 R=\u7761\u7720 T=\u8DDF\u8E2A/\u505C\u6B62 Z=\u50F5\u5C38\u8FDB\u7A0B</span>
<span class="token comment"># %CPU-\u4E0A\u6B21\u66F4\u65B0\u5230\u73B0\u5728\u7684CPU\u65F6\u95F4\u5360\u7528\u767E\u5206\u6BD4 %MEM-\u8FDB\u7A0B\u4F7F\u7528\u7684\u7269\u7406\u5185\u5B58\u767E\u5206\u6BD4 </span>
<span class="token comment"># TIME+/\u8FDB\u7A0B\u4F7F\u7528CPU\u65F6\u95F4\u603B\u8BA1\uFF0C\u5355\u4F4D1/100\u79D2</span>
<span class="token comment"># COMMAND-\u8FDB\u7A0B\u540D\u79F0</span>
  PID <span class="token environment constant">USER</span>      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
    <span class="token number">1</span> root      <span class="token number">20</span>   <span class="token number">0</span>  <span class="token number">123036</span>   <span class="token number">3736</span>   <span class="token number">2428</span> S   <span class="token number">0.0</span>  <span class="token number">0.1</span>   <span class="token number">4</span>:57.39 systemd
    
$ <span class="token function">top</span>  <span class="token parameter variable">-d</span> <span class="token number">2</span> //\u6BCF\u9694\u4FE9\u79D2\u663E\u793A\u6240\u6709\u8FDB\u7A0B\u7684\u8D44\u6E90\u5360\u7528\u60C5\u51B5
$ <span class="token function">top</span> <span class="token parameter variable">-p</span> <span class="token number">4360,4345</span> //\u76D1\u63A7\u5236\u5EA6\u7684\u8FDB\u573A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[i];function p(c,o){return s(),a("div",null,l)}const r=n(t,[["render",p],["__file","top.html.vue"]]);export{r as default};
