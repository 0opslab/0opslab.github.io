import{_ as s,o as a,c as e,e as n}from"./app.a667bd71.js";const l={},r=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># psql is the PostgreSQL terminal interface. The following commands were tested on version 9.5.</span>
<span class="token comment"># Connection options:</span>
<span class="token comment"># -U username (if not specified current OS user is used).</span>
<span class="token comment"># -p port.</span>
<span class="token comment"># -h server hostname/address.</span>

<span class="token comment"># Connect to a specific database:</span>
psql <span class="token parameter variable">-U</span> postgres <span class="token parameter variable">-h</span> serverAddress <span class="token parameter variable">-d</span> dbName

<span class="token comment"># Get databases on a server:</span>
psql <span class="token parameter variable">-U</span> postgres <span class="token parameter variable">-h</span> serverAddress <span class="token parameter variable">--list</span>

<span class="token comment"># Execute sql query and save output to file:</span>
psql <span class="token parameter variable">-U</span> postgres <span class="token parameter variable">-d</span> dbName <span class="token parameter variable">-c</span> <span class="token string">&#39;select * from tableName;&#39;</span> <span class="token parameter variable">-o</span> fileName

<span class="token comment"># Execute query and get tabular html output:</span>
psql <span class="token parameter variable">-U</span> postgres <span class="token parameter variable">-d</span> dbName <span class="token parameter variable">-H</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;select * from tableName;&#39;</span>

<span class="token comment"># Execute query and save resulting rows to csv file:</span>
psql <span class="token parameter variable">-U</span> postgres <span class="token parameter variable">-d</span> dbName <span class="token parameter variable">-t</span> <span class="token parameter variable">-A</span> <span class="token parameter variable">-P</span> <span class="token assign-left variable">fieldsep</span><span class="token operator">=</span><span class="token string">&#39;,&#39;</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;select * from tableName;&#39;</span> <span class="token parameter variable">-o</span> fileName.csv

<span class="token comment"># Read commands from file:</span>
psql <span class="token parameter variable">-f</span> fileName

<span class="token comment"># Restore databases from file:</span>
psql <span class="token parameter variable">-f</span> fileName.backup postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[r];function i(p,c){return a(),e("div",null,t)}const m=s(l,[["render",i],["__file","psql.html.vue"]]);export{m as default};
