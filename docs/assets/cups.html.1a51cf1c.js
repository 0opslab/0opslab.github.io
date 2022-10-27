import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Manage printers through CUPS:</span>
<span class="token comment">#\u901A\u8FC7CUPS\u7BA1\u7406\u6253\u5370\u673A\uFF1A</span>
http://localhost:631 <span class="token punctuation">(</span>in web browser<span class="token punctuation">)</span>

<span class="token comment"># Print file from command line</span>
<span class="token comment">#\u4ECE\u547D\u4EE4\u884C\u6253\u5370\u6587\u4EF6</span>
lp myfile.txt

<span class="token comment"># Display print queue</span>
<span class="token comment">#\u663E\u793A\u6253\u5370\u961F\u5217</span>
lpq

<span class="token comment"># Remove print job from queue</span>
<span class="token comment">#\u4ECE\u961F\u5217\u4E2D\u5220\u9664\u6253\u5370\u4F5C\u4E1A</span>
<span class="token function">lprm</span> <span class="token number">545</span>
or
<span class="token function">lprm</span> -

<span class="token comment"># Print log location</span>
<span class="token comment">#\u6253\u5370\u65E5\u5FD7\u4F4D\u7F6E</span>
/var/log/cups

<span class="token comment"># Reject new jobs</span>
<span class="token comment">#\u62D2\u7EDD\u65B0\u7684\u5DE5\u4F5C</span>
cupsreject printername

<span class="token comment"># Accept new jobs</span>
<span class="token comment">#\u63A5\u53D7\u65B0\u5DE5\u4F5C</span>
cupsaccept printername
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(m,d){return s(),e("div",null,c)}const r=n(i,[["render",t],["__file","cups.html.vue"]]);export{r as default};
