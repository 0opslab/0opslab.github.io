import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">###yum install pigz</span>
<span class="token function">wget</span> http://zlib.net/pigz/pigz-2.3.3.tar.gz

<span class="token function">tar</span> zxvf pigz-2.3.3.tar.gz
<span class="token builtin class-name">cd</span> pigz-2.3.3
<span class="token function">make</span>
<span class="token function">cp</span> pigz /usr/local/bin/
<span class="token function">cp</span> unpigz /usr/local/bin/

<span class="token comment">#\u538B\u7F29\uFF1A</span>
<span class="token function">tar</span> cvf - \u76EE\u5F55\u540D <span class="token operator">|</span> pigz <span class="token parameter variable">-9</span> <span class="token parameter variable">-p</span> <span class="token number">24</span> <span class="token operator">&gt;</span> file.tgz
<span class="token comment"># -c \u8868\u793A\u6253\u5370\u5230\u6807\u51C6\u8F93\u51FAstd\uFF0C\u5982\u679C\u6CA1\u6709-c\u9009\u9879\uFF0C\u5219\u4F1A\u751F\u6210\u4E00\u4E2A\u540E\u7F00\u4E3Agz\u7684\u538B\u7F29\u6587\u4EF6\u3002</span>
pigz <span class="token parameter variable">-c</span> <span class="token function">file</span> <span class="token operator">&gt;</span> file.gz
<span class="token comment"># -k \u8868\u793A\u538B\u7F29\u540E\u4E0D\u5220\u9664\u6E90\u6587\u4EF6</span>
pigz <span class="token parameter variable">-k</span> <span class="token function">file</span>

<span class="token comment">#\u2013blocksize mmm \u8BBE\u7F6E\u538B\u7F29\u5757block\u7684\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u4E3A128kb</span>
<span class="token comment">#-0 to -9, -11 : \u538B\u7F29\u7EA7\u522B\uFF0C\u503C\u8D8A\u5927\uFF0C\u538B\u7F29\u7387\u8D8A\u9AD8\uFF0C\u5F53\u7136\u8017\u8D39\u7684\u65F6\u95F4\u4E5F\u5C31\u8D8A\u957F</span>
<span class="token comment">#-p n : \u6307\u5B9A\u538B\u7F29\u6838\u5FC3\u6570\uFF0C\u9ED8\u8BA48\u4E2A</span>
<span class="token comment">#-k :\u538B\u7F29\u540E\u4FDD\u7559\u539F\u6587\u4EF6</span>

pigz <span class="token parameter variable">-6</span> <span class="token parameter variable">-p</span> <span class="token number">10</span> <span class="token parameter variable">-k</span> filename
<span class="token comment">#\u538B\u7F29\u540E\u751F\u6210 filename.gz\u6587\u4EF6</span>

<span class="token comment">#\u538B\u7F29\u76EE\u5F55</span>
<span class="token function">tar</span> cv filename <span class="token operator">|</span> pigz <span class="token parameter variable">-6</span> <span class="token parameter variable">-p</span> <span class="token number">10</span> <span class="token parameter variable">-k</span> <span class="token operator">&gt;</span> filename.tar.gz

<span class="token comment">#\u89E3\u538B:</span>
<span class="token comment">#Usage: pigz [options] [files ...]</span>

<span class="token comment">#\u89E3\u538B\u6587\u4EF6</span>
<span class="token function">gzip</span> <span class="token parameter variable">-d</span> filename.gz
<span class="token comment">#\u6216\u8005</span>
pigz <span class="token parameter variable">-d</span> filename.gz

<span class="token comment">#\u89E3\u538B\u76EE\u5F55</span>
<span class="token function">tar</span> xvf filename.tar.gz
<span class="token comment">#\u6216\u8005</span>
pigz <span class="token parameter variable">-d</span> filename.tar.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function p(t,r){return s(),a("div",null,c)}const o=n(i,[["render",p],["__file","pigz.html.vue"]]);export{o as default};
