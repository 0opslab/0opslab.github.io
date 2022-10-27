import{_ as e,o as s,c as n,e as a}from"./app.a667bd71.js";const d={},c=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># open encrypted partition /dev/sdb1 (reachable at /dev/mapper/backup)</span>
<span class="token comment">#\u6253\u5F00\u52A0\u5BC6\u5206\u533A/ dev / sdb1\uFF08\u53EF\u5728/ dev / mapper / backup\u5904\u8BBF\u95EE\uFF09</span>
cryptsetup <span class="token function">open</span> <span class="token parameter variable">--type</span> luks /dev/sdb1 backup

<span class="token comment"># open encrypted partition /dev/sdb1 using a keyfile (reachable at /dev/mapper/hdd)</span>
<span class="token comment">#\u4F7F\u7528\u5BC6\u94A5\u6587\u4EF6\u6253\u5F00\u52A0\u5BC6\u5206\u533A/ dev / sdb1\uFF08\u53EF\u5728/ dev / mapper / hdd\u5904\u8BBF\u95EE\uFF09</span>
cryptsetup <span class="token function">open</span> <span class="token parameter variable">--type</span> luks --key-file hdd.key /dev/sdb1 hdd

<span class="token comment"># close luks container at /dev/mapper/hdd</span>
<span class="token comment">#\u5728/ dev / mapper / hdd\u5173\u95EDluks\u5BB9\u5668</span>
cryptsetup close hdd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[c];function p(i,l){return s(),n("div",null,t)}const o=e(d,[["render",p],["__file","cryptsetup.html.vue"]]);export{o as default};
