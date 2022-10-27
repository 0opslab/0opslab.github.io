import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},c=e(`<p>mode : \u6743\u9650\u8BBE\u5B9A\u5B57\u4E32\uFF0C\u683C\u5F0F\u5982\u4E0B :</p><p>[ugoa...][[+-=][rwxX]...][,...] \u5176\u4E2D\uFF1A</p><p>u \u8868\u793A\u8BE5\u6587\u4EF6\u7684\u62E5\u6709\u8005\uFF0Cg \u8868\u793A\u4E0E\u8BE5\u6587\u4EF6\u7684\u62E5\u6709\u8005\u5C5E\u4E8E\u540C\u4E00\u4E2A\u7FA4\u4F53(group)\u8005\uFF0Co \u8868\u793A\u5176\u4ED6\u4EE5\u5916\u7684\u4EBA\uFF0Ca \u8868\u793A\u8FD9\u4E09\u8005\u7686\u662F\u3002</p><ul><li>\u8868\u793A\u589E\u52A0\u6743\u9650\u3001- \u8868\u793A\u53D6\u6D88\u6743\u9650\u3001= \u8868\u793A\u552F\u4E00\u8BBE\u5B9A\u6743\u9650\u3002 r \u8868\u793A\u53EF\u8BFB\u53D6\uFF0Cw \u8868\u793A\u53EF\u5199\u5165\uFF0Cx \u8868\u793A\u53EF\u6267\u884C\uFF0CX \u8868\u793A\u53EA\u6709\u5F53\u8BE5\u6587\u4EF6\u662F\u4E2A\u5B50\u76EE\u5F55\u6216\u8005\u8BE5\u6587\u4EF6\u5DF2\u7ECF\u88AB\u8BBE\u5B9A\u8FC7\u4E3A\u53EF\u6267\u884C\u3002 \u5176\u4ED6\u53C2\u6570\u8BF4\u660E\uFF1A</li></ul><p>-c : \u82E5\u8BE5\u6587\u4EF6\u6743\u9650\u786E\u5B9E\u5DF2\u7ECF\u66F4\u6539\uFF0C\u624D\u663E\u793A\u5176\u66F4\u6539\u52A8\u4F5C -f : \u82E5\u8BE5\u6587\u4EF6\u6743\u9650\u65E0\u6CD5\u88AB\u66F4\u6539\u4E5F\u4E0D\u8981\u663E\u793A\u9519\u8BEF\u8BAF\u606F -v : \u663E\u793A\u6743\u9650\u53D8\u66F4\u7684\u8BE6\u7EC6\u8D44\u6599 -R : \u5BF9\u76EE\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u4E0E\u5B50\u76EE\u5F55\u8FDB\u884C\u76F8\u540C\u7684\u6743\u9650\u53D8\u66F4(\u5373\u4EE5\u9012\u5F52\u7684\u65B9\u5F0F\u9010\u4E2A\u53D8\u66F4) --help : \u663E\u793A\u8F85\u52A9\u8BF4\u660E --version : \u663E\u793A\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Add execute for all (myscript.sh)</span>
<span class="token comment">#\u4E3A\u6240\u6709\u6DFB\u52A0\u6267\u884C\uFF08myscript.sh\uFF09</span>
<span class="token function">chmod</span> a+x myscript.sh

<span class="token comment"># Set user to read/write/execute, group/global to read only (myscript.sh), symbolic mode</span>
<span class="token comment">#\u5C06\u7528\u6237\u8BBE\u7F6E\u4E3A\u8BFB/\u5199/\u6267\u884C\uFF0C\u5C06\u7EC4/\u5168\u5C40\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\uFF08myscript.sh\uFF09\uFF0C\u7B26\u53F7\u6A21\u5F0F</span>
<span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx, <span class="token assign-left variable">go</span><span class="token operator">=</span>r myscript.sh 

<span class="token comment"># Remove write from user/group/global (myscript.sh), symbolic mode</span>
<span class="token comment">#\u4ECE\u7528\u6237/\u7EC4/\u5168\u5C40\uFF08myscript.sh\uFF09\uFF0C\u7B26\u53F7\u6A21\u5F0F\u4E2D\u5220\u9664\u5199\u5165</span>
<span class="token function">chmod</span> a-w myscript.sh

<span class="token comment"># Remove read/write/execute from user/group/global (myscript.sh), symbolic mode</span>
<span class="token comment">#\u4ECE\u7528\u6237/\u7EC4/\u5168\u5C40\uFF08myscript.sh\uFF09\uFF0C\u7B26\u53F7\u6A21\u5F0F\u4E2D\u5220\u9664\u8BFB/\u5199/\u6267\u884C</span>
<span class="token function">chmod</span> <span class="token operator">=</span> myscript.sh

<span class="token comment"># Set user to read/write and group/global read (myscript.sh), octal notation</span>
<span class="token comment">#\u5C06\u7528\u6237\u8BBE\u7F6E\u4E3A\u8BFB/\u5199\u548C\u7EC4/\u5168\u5C40\u8BFB\uFF08myscript.sh\uFF09\uFF0C\u516B\u8FDB\u5236\u8868\u793A\u6CD5</span>
<span class="token function">chmod</span> <span class="token number">644</span> myscript.sh

<span class="token comment"># Set user to read/write/execute and group/global read/execute (myscript.sh), octal notation</span>
<span class="token comment">#\u5C06\u7528\u6237\u8BBE\u7F6E\u4E3A\u8BFB/\u5199/\u6267\u884C\u548C\u7EC4/\u5168\u5C40\u8BFB/\u6267\u884C\uFF08myscript.sh\uFF09\uFF0C\u516B\u8FDB\u5236\u8868\u793A\u6CD5</span>
<span class="token function">chmod</span> <span class="token number">755</span> myscript.sh

<span class="token comment"># Set user/group/global to read/write (myscript.sh), octal notation</span>
<span class="token comment">#\u5C06user / group / global\u8BBE\u7F6E\u4E3Aread / write\uFF08myscript.sh\uFF09\uFF0C\u516B\u8FDB\u5236\u8868\u793A\u6CD5</span>
<span class="token function">chmod</span> <span class="token number">666</span> myscript.sh

<span class="token comment"># Roles</span>
<span class="token comment">#\u89D2\u8272</span>
u - user <span class="token punctuation">(</span>owner of the <span class="token function">file</span><span class="token punctuation">)</span>
g - group <span class="token punctuation">(</span>members of file&#39;s group<span class="token punctuation">)</span>
o - global <span class="token punctuation">(</span>all <span class="token function">users</span> <span class="token function">who</span> are not owner and not part of group<span class="token punctuation">)</span>
a - all <span class="token punctuation">(</span>all <span class="token number">3</span> roles above<span class="token punctuation">)</span>

<span class="token comment"># Numeric representations</span>
<span class="token comment">#\u6570\u5B57\u8868\u793A</span>
<span class="token number">7</span> - full <span class="token punctuation">(</span>rwx<span class="token punctuation">)</span>
<span class="token number">6</span> - <span class="token builtin class-name">read</span> and <span class="token function">write</span> <span class="token punctuation">(</span>rw-<span class="token punctuation">)</span>
<span class="token number">5</span> - <span class="token builtin class-name">read</span> and execute <span class="token punctuation">(</span>r-x<span class="token punctuation">)</span>
<span class="token number">4</span> - <span class="token builtin class-name">read</span> only <span class="token punctuation">(</span>r--<span class="token punctuation">)</span>
<span class="token number">3</span> - <span class="token function">write</span> and execute <span class="token punctuation">(</span>-wx<span class="token punctuation">)</span>
<span class="token number">2</span> - <span class="token function">write</span> only <span class="token punctuation">(</span>-w-<span class="token punctuation">)</span>
<span class="token number">1</span> - execute only <span class="token punctuation">(</span>--x<span class="token punctuation">)</span>
<span class="token number">0</span> - none <span class="token punctuation">(</span>---<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[c];function l(o,p){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","chmod.html.vue"]]);export{u as default};
