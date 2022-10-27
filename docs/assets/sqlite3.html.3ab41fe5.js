import{_ as s,o as n,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<h1 id="title-sqlite3-sqlite\u7B80\u6613\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#title-sqlite3-sqlite\u7B80\u6613\u6570\u636E\u5E93" aria-hidden="true">#</a> title{sqlite3 - sqlite\u7B80\u6613\u6570\u636E\u5E93}</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># create database and launch interactive shell</span>
<span class="token comment">#\u521B\u5EFA\u6570\u636E\u5E93\u5E76\u542F\u52A8\u4EA4\u4E92\u5F0Fshell</span>
sqlite3 example.db

<span class="token comment"># create table</span>
<span class="token comment">#\u521B\u5EFA\u8868</span>
sqlite3 example.db <span class="token string">&quot;CREATE TABLE Os(ID INTEGER PRIMARY KEY, Name TEXT, Year INTEGER);&quot;</span>

<span class="token comment"># insert data</span>
<span class="token comment">#\u63D2\u5165\u6570\u636E</span>
sqlite3 example.db <span class="token string">&quot;INSERT INTO &#39;Os&#39; VALUES(1,&#39;Linux&#39;,1991);&quot;</span>

<span class="token comment"># list tables</span>
<span class="token comment">#\u5217\u8868</span>
sqlite3 example.db <span class="token string">&quot;.tables&quot;</span>

<span class="token comment"># view records in table</span>
<span class="token comment">#\u67E5\u770B\u8868\u4E2D\u7684\u8BB0\u5F55</span>
sqlite3 example.db <span class="token string">&quot;SELECT * FROM &#39;Os&#39;;&quot;</span>

<span class="token comment"># view records in table conditionally</span>
<span class="token comment">#\u6709\u6761\u4EF6\u5730\u67E5\u770B\u8868\u4E2D\u7684\u8BB0\u5F55</span>
sqlite example.db <span class="token string">&quot;SELECT * FROM &#39;Os&#39; WHERE Year=&#39;1991&#39;;&quot;</span>

<span class="token comment"># view records with fuzzy matching</span>
<span class="token comment">#\u7528\u6A21\u7CCA\u5339\u914D\u67E5\u770B\u8BB0\u5F55</span>
sqlite3 ~/example.db <span class="token string">&quot;SELECT * FROM &#39;Os&#39; WHERE Year like &#39;19%&#39;;&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function c(d,m){return n(),e("div",null,t)}const r=s(i,[["render",c],["__file","sqlite3.html.vue"]]);export{r as default};
