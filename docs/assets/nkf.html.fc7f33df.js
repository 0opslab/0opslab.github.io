import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},t=a(`<h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># check the file&#39;s charactor code</span>
<span class="token comment">#\u68C0\u67E5\u6587\u4EF6\u7684\u5B57\u7B26\u4EE3\u7801</span>
nkf <span class="token parameter variable">-g</span> test.txt

<span class="token comment"># convert charactor code to UTF-8</span>
<span class="token comment">#\u5C06\u5B57\u7B26\u4EE3\u7801\u8F6C\u6362\u4E3AUTF-8</span>
nkf <span class="token parameter variable">-w</span> <span class="token parameter variable">--overwrite</span> test.txt

<span class="token comment"># convert charactor code to EUC-JP</span>
<span class="token comment">#\u5C06\u5B57\u7B26\u4EE3\u7801\u8F6C\u6362\u4E3AEUC-JP</span>
nkf <span class="token parameter variable">-e</span> <span class="token parameter variable">--overwrite</span> test.txt

<span class="token comment"># convert charactor code to Shift-JIS</span>
<span class="token comment">#\u5C06\u5B57\u7B26\u4EE3\u7801\u8F6C\u6362\u4E3AShift-JIS</span>
nkf <span class="token parameter variable">-s</span> <span class="token parameter variable">--overwrite</span> test.txt

<span class="token comment"># convert charactor code to ISO-2022-JP</span>
<span class="token comment">#\u5C06\u5B57\u7B26\u4EE3\u7801\u8F6C\u6362\u4E3AISO-2022-JP</span>
nkf <span class="token parameter variable">-j</span> <span class="token parameter variable">--overwrite</span> test.txt

<span class="token comment"># convert newline to LF</span>
<span class="token comment">#\u5C06\u6362\u884C\u7B26\u8F6C\u6362\u4E3ALF</span>
nkf <span class="token parameter variable">-Lu</span> <span class="token parameter variable">--overwrite</span> test.txt

<span class="token comment"># convert newline to CRLF</span>
<span class="token comment">#\u5C06\u6362\u884C\u7B26\u8F6C\u6362\u4E3ACRLF</span>
nkf <span class="token parameter variable">-Lw</span> <span class="token parameter variable">--overwrite</span> test.txt

<span class="token comment"># convert newline to CR</span>
<span class="token comment">#\u5C06\u6362\u884C\u7B26\u8F6C\u6362\u4E3ACR</span>
nkf <span class="token parameter variable">-Lm</span> <span class="token parameter variable">--overwrite</span> test.txt

<span class="token comment"># MIME encode</span>
<span class="token comment">#MIME\u7F16\u7801</span>
<span class="token builtin class-name">echo</span> \u30C6\u30B9\u30C8 <span class="token operator">|</span> nkf <span class="token parameter variable">-WwMQ</span>

<span class="token comment"># MIME decode</span>
<span class="token comment">#MIME\u89E3\u7801</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;=E3=83=86=E3=82=B9=E3=83=88&quot;</span> <span class="token operator">|</span> nkf <span class="token parameter variable">-WwmQ</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function c(r,o){return s(),e("div",null,l)}const m=n(i,[["render",c],["__file","nkf.html.vue"]]);export{m as default};
