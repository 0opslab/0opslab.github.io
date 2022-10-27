import{_ as e,o as n,c as a,e as s}from"./app.a667bd71.js";const i={},r=s(`<h1 id="desc-python-is-a-high-level-programming-language" tabindex="-1"><a class="header-anchor" href="#desc-python-is-a-high-level-programming-language" aria-hidden="true">#</a> Desc: Python is a high-level programming language.</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Basic example of server with python</span>
<span class="token comment"># Will start a Web Server in the current directory on port 8000</span>
<span class="token comment"># go to http://127.0.0.1:8000</span>

<span class="token comment"># Python v2.7</span>
python <span class="token parameter variable">-m</span> SimpleHTTPServer
<span class="token comment"># Python 3</span>
python <span class="token parameter variable">-m</span> http.server <span class="token number">8000</span>

<span class="token comment"># SMTP-Server for debugging, messages will be discarded, and printed on stdout.</span>
python <span class="token parameter variable">-m</span> smtpd <span class="token parameter variable">-n</span> <span class="token parameter variable">-c</span> DebuggingServer localhost:1025

<span class="token comment"># Pretty print a json</span>
python <span class="token parameter variable">-mjson.tool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[r];function t(c,o){return n(),a("div",null,l)}const m=e(i,[["render",t],["__file","py-cmd.html.vue"]]);export{m as default};
