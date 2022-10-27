import{_ as n,o as e,c as s,e as a}from"./app.a667bd71.js";const i={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Create new environment</span>
<span class="token comment">#\u521B\u9020\u65B0\u7684\u73AF\u5883</span>
virtualenv /path/to/project/env_name

<span class="token comment"># Create new environment and inherit already installed Python libraries</span>
<span class="token comment">#\u521B\u5EFA\u65B0\u73AF\u5883\u5E76\u7EE7\u627F\u5DF2\u5B89\u88C5\u7684Python\u5E93</span>
virtualenv --system-site-package /path/to/project/env_name

<span class="token comment"># Create new environment with a given Python interpreter</span>
<span class="token comment">#\u4F7F\u7528\u7ED9\u5B9A\u7684Python\u89E3\u91CA\u5668\u521B\u5EFA\u65B0\u73AF\u5883</span>
virtualenv /path/to/project/env_name <span class="token parameter variable">-p</span> /usr/bin/python/3.4

<span class="token comment"># Activate environnment</span>
<span class="token comment">#\u6FC0\u6D3B\u73AF\u5883</span>
<span class="token builtin class-name">source</span> /path/to/project/env_name/bin/activate

<span class="token comment"># Quit environment</span>
<span class="token comment">#\u9000\u51FA\u73AF\u5883</span>
deactivate


<span class="token comment"># virtualenvwrapper (wrapper for virtualenv)</span>
<span class="token comment">#virtualenvwrapper\uFF08virtualenv\u7684\u5305\u88C5\uFF09</span>
<span class="token comment"># installation</span>
<span class="token comment">#\u5B89\u88C5</span>
pip <span class="token function">install</span> <span class="token parameter variable">--user</span> virtualenvwrapper
<span class="token comment"># configuration</span>
<span class="token comment">#\u7EC4\u6001</span>
<span class="token comment"># add in ~/.bashrc or similar</span>
<span class="token comment">#\u6DFB\u52A0\u301C/ .bashrc\u6216\u7C7B\u4F3C\u7684</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">WORKON_HOME</span><span class="token operator">=~</span>/.virtualenvs
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$WORKON_HOME</span>
<span class="token builtin class-name">source</span> ~/.local/bin/virtualenvwrapper.sh

<span class="token comment"># Create new environmment (with virtualenvwrapper)</span>
<span class="token comment">#\u521B\u5EFA\u65B0\u73AF\u5883\uFF08\u4F7F\u7528virtualenvwrapper\uFF09</span>
mkvirtualenv env_name
<span class="token comment"># new environmment is stored in ~/.virtualenvs</span>
<span class="token comment">#\u65B0\u73AF\u5883\u5B58\u50A8\u5728\u301C/ .virtualenvs\u4E2D</span>

<span class="token comment"># Activate environmment (with virtualenvwrapper)</span>
<span class="token comment">#\u6FC0\u6D3B\u73AF\u5883\uFF08\u4F7F\u7528virtualenvwrapper\uFF09</span>
workon env_name

<span class="token comment"># Quit environmment (with virtualenvwrapper)</span>
<span class="token comment">#\u9000\u51FA\u73AF\u5883\uFF08\u4F7F\u7528virtualenvwrapper\uFF09</span>
deactivate

<span class="token comment"># Delete environmment (with virtualenvwrapper)</span>
<span class="token comment">#\u5220\u9664\u73AF\u5883\uFF08\u4F7F\u7528virtualenvwrapper\uFF09</span>
rmvirtualenv env_name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=[l];function t(r,c){return e(),s("div",null,v)}const p=n(i,[["render",t],["__file","virtualenv.html.vue"]]);export{p as default};
