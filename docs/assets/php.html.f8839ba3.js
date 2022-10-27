import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># To view the php version:</span>
php <span class="token parameter variable">-v</span>

<span class="token comment"># To view the installed php modules:</span>
php <span class="token parameter variable">-m</span>

<span class="token comment"># To view phpinfo() information:</span>
php <span class="token parameter variable">-i</span>

<span class="token comment"># To lint a php file:</span>
php <span class="token parameter variable">-l</span> file.php

<span class="token comment"># To lint all php files within the cwd:</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.php&quot;</span> <span class="token parameter variable">-print0</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> <span class="token parameter variable">-n1</span> <span class="token parameter variable">-P8</span> php <span class="token parameter variable">-l</span>

<span class="token comment"># To enter an interactive shell:</span>
php <span class="token parameter variable">-a</span>

<span class="token comment"># To locate the system&#39;s php.ini files:</span>
php <span class="token parameter variable">-i</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;php.ini&quot;</span>

<span class="token comment"># To start a local webserver for the cwd on port 3000 (requires php &gt;= 5.4):</span>
php <span class="token parameter variable">-S</span> localhost:3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[l];function t(r,c){return s(),a("div",null,p)}const v=n(i,[["render",t],["__file","php.html.vue"]]);export{v as default};
