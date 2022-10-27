import{_ as s,o as a,c as n,e}from"./app.a667bd71.js";const l={},i=e(`<h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-a, <span class="token parameter variable">--all</span>            \u663E\u793A\u6240\u6709\u8BBE\u5907\u3002
-b, <span class="token parameter variable">--bytes</span>          \u4EE5bytes\u65B9\u5F0F\u663E\u793A\u8BBE\u5907\u5927\u5C0F\u3002
-d, <span class="token parameter variable">--nodeps</span>         \u4E0D\u663E\u793A slaves \u6216 holders\u3002
-D, <span class="token parameter variable">--discard</span>        print discard capabilities\u3002
-e, <span class="token parameter variable">--exclude</span> <span class="token operator">&lt;</span>list<span class="token operator">&gt;</span> \u6392\u9664\u8BBE\u5907 <span class="token punctuation">(</span>default: RAM disks<span class="token punctuation">)</span>\u3002
-f, <span class="token parameter variable">--fs</span>             \u663E\u793A\u6587\u4EF6\u7CFB\u7EDF\u4FE1\u606F\u3002
-h, <span class="token parameter variable">--help</span>           \u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u3002
-i, <span class="token parameter variable">--ascii</span>          use ascii characters only\u3002
-m, <span class="token parameter variable">--perms</span>          \u663E\u793A\u6743\u9650\u4FE1\u606F\u3002
-l, <span class="token parameter variable">--list</span>           \u4F7F\u7528\u5217\u8868\u683C\u5F0F\u663E\u793A\u3002
-n, <span class="token parameter variable">--noheadings</span>     \u4E0D\u663E\u793A\u6807\u9898\u3002
-o, <span class="token parameter variable">--output</span> <span class="token operator">&lt;</span>list<span class="token operator">&gt;</span>  \u8F93\u51FA\u5217\u3002
-P, <span class="token parameter variable">--pairs</span>          \u4F7F\u7528key<span class="token operator">=</span><span class="token string">&quot;value&quot;</span>\u683C\u5F0F\u663E\u793A\u3002
-r, <span class="token parameter variable">--raw</span>            \u4F7F\u7528\u539F\u59CB\u683C\u5F0F\u663E\u793A\u3002
-t, <span class="token parameter variable">--topology</span>       \u663E\u793A\u62D3\u6251\u7ED3\u6784\u4FE1\u606F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Show all available block devices along with their partitioning schemes</span>
<span class="token comment">#\u663E\u793A\u6240\u6709\u53EF\u7528\u7684\u5757\u8BBE\u5907\u53CA\u5176\u5206\u533A\u65B9\u6848</span>
lsblk

<span class="token comment"># To show SCSI devices:</span>
<span class="token comment">#\u8981\u663E\u793ASCSI\u8BBE\u5907\uFF1A</span>
lsblk <span class="token parameter variable">--scsi</span>

<span class="token comment"># To show a specific device</span>
<span class="token comment">#\u663E\u793A\u7279\u5B9A\u8BBE\u5907</span>
lsblk /dev/sda

<span class="token comment"># To verify TRIM support:</span>
<span class="token comment">#\u8981\u9A8C\u8BC1TRIM\u652F\u6301\uFF1A</span>
<span class="token comment"># Check the values of DISC-GRAN (discard granularity) and DISC-MAX (discard max bytes) columns.</span>
<span class="token comment">#\u68C0\u67E5DISC-GRAN\uFF08\u4E22\u5F03\u7C92\u5EA6\uFF09\u548CDISC-MAX\uFF08\u4E22\u5F03\u6700\u5927\u5B57\u8282\uFF09\u5217\u7684\u503C\u3002</span>
<span class="token comment"># Non-zero values indicate TRIM support</span>
<span class="token comment">#\u975E\u96F6\u503C\u8868\u793ATRIM\u652F\u6301</span>
lsblk <span class="token parameter variable">--discard</span>

<span class="token comment"># To featch info about filesystems:</span>
<span class="token comment">#\u8981\u83B7\u53D6\u6709\u5173\u6587\u4EF6\u7CFB\u7EDF\u7684\u4FE1\u606F\uFF1A</span>
lsblk <span class="token parameter variable">--fs</span>

<span class="token comment"># For JSON, LIST or TREE output formats use the following flags:</span>
<span class="token comment">#\u5BF9\u4E8EJSON\uFF0CLIST\u6216TREE\u8F93\u51FA\u683C\u5F0F\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u6807\u5FD7\uFF1A</span>
lsblk <span class="token parameter variable">--json</span>
lsblk <span class="token parameter variable">--list</span>
lsblk <span class="token parameter variable">--tree</span> <span class="token comment"># default view</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[i];function c(t,d){return a(),n("div",null,r)}const o=s(l,[["render",c],["__file","lsblk.html.vue"]]);export{o as default};
