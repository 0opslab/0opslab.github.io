import{_ as n,o as a,c as s,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To resize an image to a fixed width and proportional height:</span>
<span class="token comment">#\u8981\u5C06\u56FE\u50CF\u8C03\u6574\u4E3A\u56FA\u5B9A\u5BBD\u5EA6\u548C\u6BD4\u4F8B\u9AD8\u5EA6\uFF1A</span>
convert original-image.jpg <span class="token parameter variable">-resize</span> 100x converted-image.jpg

<span class="token comment"># To resize an image to a fixed height and proportional width:</span>
<span class="token comment">#\u8981\u5C06\u56FE\u50CF\u8C03\u6574\u4E3A\u56FA\u5B9A\u9AD8\u5EA6\u548C\u6BD4\u4F8B\u5BBD\u5EA6\uFF0C\u8BF7\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</span>
convert original-image.jpg <span class="token parameter variable">-resize</span> x100 converted-image.jpg

<span class="token comment"># To resize an image to a fixed width and height:</span>
<span class="token comment">#\u8981\u5C06\u56FE\u50CF\u8C03\u6574\u4E3A\u56FA\u5B9A\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u8BF7\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</span>
convert original-image.jpg <span class="token parameter variable">-resize</span> 100x100 converted-image.jpg

<span class="token comment"># To resize an image and simultaneously change its file type:</span>
<span class="token comment">#\u8981\u8C03\u6574\u56FE\u50CF\u5927\u5C0F\u5E76\u540C\u65F6\u66F4\u6539\u5176\u6587\u4EF6\u7C7B\u578B\uFF1A</span>
convert original-image.jpg <span class="token parameter variable">-resize</span> 100x converted-image.png

<span class="token comment"># To resize all of the images within a directory:</span>
<span class="token comment">#\u8981\u8C03\u6574\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u56FE\u50CF\uFF1A</span>
<span class="token comment"># To implement a for loop:</span>
<span class="token comment">#\u8981\u5B9E\u73B0for\u5FAA\u73AF\uFF1A</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> original/image/path/<span class="token variable">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token assign-left variable">new_path</span><span class="token operator">=</span><span class="token variable">\${file<span class="token operator">%</span>.*}</span><span class="token punctuation">;</span>
    <span class="token assign-left variable">new_file</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">basename</span> $new_path<span class="token variable">\`</span></span><span class="token punctuation">;</span>
    convert <span class="token variable">$file</span> <span class="token parameter variable">-resize</span> <span class="token number">150</span> converted/image/path/<span class="token variable">$new_file</span>.png<span class="token punctuation">;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[l];function t(p,c){return a(),s("div",null,o)}const d=n(i,[["render",t],["__file","convert.html.vue"]]);export{d as default};
