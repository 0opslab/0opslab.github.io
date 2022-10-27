import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#svn\u68C0\u51FA</span>
svn co svn://127.0.0.1:8088/useful-documents <span class="token parameter variable">--username</span> \u7528\u6237\u540D

<span class="token comment"># update working copy from repository</span>
<span class="token comment">#\u4ECE\u5B58\u50A8\u5E93\u66F4\u65B0\u5DE5\u4F5C\u526F\u672C</span>
svn update <span class="token string">&quot;/path&quot;</span>

<span class="token comment"># show changed files in working copy</span>
<span class="token comment">#\u663E\u793A\u5DE5\u4F5C\u526F\u672C\u4E2D\u5DF2\u66F4\u6539\u7684\u6587\u4EF6</span>
svn status

<span class="token comment"># show what changed in local file</span>
<span class="token comment">#\u663E\u793A\u672C\u5730\u6587\u4EF6\u4E2D\u7684\u66F4\u6539</span>
svn <span class="token function">diff</span> <span class="token string">&quot;/path/filename&quot;</span>

<span class="token comment"># add files or folders</span>
<span class="token comment">#\u6DFB\u52A0\u6587\u4EF6\u6216\u6587\u4EF6\u5939</span>
svn <span class="token function">add</span> <span class="token string">&quot;path/item&quot;</span>

<span class="token comment"># revert local uncommited changes</span>
<span class="token comment">#\u8FD8\u539F\u672C\u5730\u672A\u63D0\u4EA4\u7684\u66F4\u6539</span>
svn revert <span class="token string">&quot;/path/file&quot;</span>

<span class="token comment"># commit changes to repo</span>
<span class="token comment">#\u63D0\u4EA4\u5BF9repo\u7684\u66F4\u6539</span>
svn commit <span class="token parameter variable">-m</span> <span class="token string">&quot;message&quot;</span> <span class="token string">&quot;/path&quot;</span>

<span class="token comment"># show help for &#39;svn diff&#39;</span>
<span class="token comment">#\u663E\u793A&#39;svn diff&#39;\u7684\u5E2E\u52A9</span>
svn <span class="token builtin class-name">help</span> <span class="token function">diff</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(o,d){return s(),e("div",null,c)}const v=n(i,[["render",t],["__file","svn.html.vue"]]);export{v as default};
