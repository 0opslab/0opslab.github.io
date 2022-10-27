import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<p>\u7B80\u5355\u7684\u8BF4\uFF1Ahive\u662F\u57FA\u4E8Ehadoop\u7684\u6570\u636E\u4ED3\u5E93\uFF0C\u56E0\u4E3AHIVE\u7684\u6570\u636E\u5B58\u50A8\u5728hdfs\u4E0A\uFF0C\u5E76\u4E14hive\u7684\u6570\u636E\u8BA1\u7B97\u7528mapreduce\u3002</p><p>hive\u4E3B\u8981\u7684\u5E94\u7528\u573A\u666F</p><p>\u200B 1.\u65E5\u5FD7\u5206\u6790\uFF1A\u5927\u90E8\u5206\u4E92\u8054\u7F51\u516C\u53F8\u4F7F\u7528hive\u8FDB\u884C\u65E5\u5FD7\u5206\u6790\uFF0C\u5305\u62EC\u767E\u5EA6\u3001\u6DD8\u5B9D\u7B49</p><p>\u200B (\u7EDF\u8BA1\u7F51\u7AD9\u4E00\u4E2A\u65F6\u95F4\u6BB5\u5185\u7684pv\u3001uv)</p><p>\u200B 2.\u591A\u7EF4\u5EA6\u6570\u636E\u5206\u6790</p><h3 id="hive-\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#hive-\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> Hive \u6570\u636E\u7C7B\u578B</h3><p>Hive \u63D0\u4F9B\u4E86\u57FA\u672C\u6570\u636E\u7C7B\u578B\u548C\u590D\u6742\u6570\u636E\u7C7B\u578B\uFF0C\u590D\u6742\u6570\u636E\u7C7B\u578B\u662F Java \u8BED\u8A00\u6240\u4E0D\u5177\u6709\u7684.Hive \u7684\u4E24\u79CD\u6570\u636E\u7C7B\u578B\u4EE5\u53CA\u6570\u636E\u7C7B\u578B\u4E4B\u95F4\u7684\u8F6C\u6362.</p><p>\u57FA\u672C\u7C7B\u578B:TINYINT\u3001smallint\u3001int\u3001bigint\u3001float\u3001double\u3001boolean\u3001string</p><p>\u590D\u6742\u7C7B\u578B:ARRAY\u3001MAP\u3001STRUCT</p><h3 id="hive\u7684\u4F53\u7CFB\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#hive\u7684\u4F53\u7CFB\u7ED3\u6784" aria-hidden="true">#</a> HIVE\u7684\u4F53\u7CFB\u7ED3\u6784</h3><ul><li><p>\u7528\u6237\u63A5\u53E3\u4E3B\u8981\u6709\u4E09\u4E2A\uFF1ACLI\uFF0CClient \u548C WUI\u3002\u5176\u4E2D\u6700\u5E38\u7528\u7684\u662FCLI\uFF0CCli\u542F\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u540C\u65F6\u542F\u52A8\u4E00\u4E2AHive\u526F\u672C\u3002Client\u662FHive\u7684\u5BA2\u6237\u7AEF\uFF0C\u7528\u6237\u8FDE\u63A5\u81F3Hive Server\u3002\u5728\u542F\u52A8 Client\u6A21\u5F0F\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6307\u51FAHive Server\u6240\u5728\u8282\u70B9\uFF0C\u5E76\u4E14\u5728\u8BE5\u8282\u70B9\u542F\u52A8Hive Server\u3002 WUI\u662F\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EEHive\u3002</p></li><li><p>Hive\u5C06\u5143\u6570\u636E\u5B58\u50A8\u5728\u6570\u636E\u5E93\u4E2D\uFF0C\u5982mysql\u3001derby\u3002Hive\u4E2D\u7684\u5143\u6570\u636E\u5305\u62EC\u8868\u7684\u540D\u5B57\uFF0C\u8868\u7684\u5217\u548C\u5206\u533A\u53CA\u5176\u5C5E\u6027\uFF0C\u8868\u7684\u5C5E\u6027\uFF08\u662F\u5426\u4E3A\u5916\u90E8\u8868\u7B49\uFF09\uFF0C\u8868\u7684\u6570\u636E\u6240\u5728\u76EE\u5F55\u7B49\u3002</p></li><li><p>\u89E3\u91CA\u5668\u3001\u7F16\u8BD1\u5668\u3001\u4F18\u5316\u5668\u5B8C\u6210HQL\u67E5\u8BE2\u8BED\u53E5\u4ECE\u8BCD\u6CD5\u5206\u6790\u3001\u8BED\u6CD5\u5206\u6790\u3001\u7F16\u8BD1\u3001\u4F18\u5316\u4EE5\u53CA\u67E5\u8BE2\u8BA1\u5212\u7684\u751F\u6210\u3002\u751F\u6210\u7684\u67E5\u8BE2\u8BA1\u5212\u5B58\u50A8\u5728HDFS\u4E2D\uFF0C\u5E76\u5728\u968F\u540E\u6709MapReduce\u8C03\u7528\u6267\u884C\u3002</p></li><li><p>Hive\u7684\u6570\u636E\u5B58\u50A8\u5728HDFS\u4E2D\uFF0C\u5927\u90E8\u5206\u7684\u67E5\u8BE2\u3001\u8BA1\u7B97\u7531MapReduce\u5B8C\u6210\uFF08\u5305\u542B*\u7684\u67E5\u8BE2\uFF0C\u6BD4\u5982select * from tbl\u4E0D\u4F1A\u751F\u6210MapRedcue\u4EFB\u52A1\uFF09\u3002</p></li></ul><h3 id="hive\u7684\u6587\u4EF6\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#hive\u7684\u6587\u4EF6\u683C\u5F0F" aria-hidden="true">#</a> HIVE\u7684\u6587\u4EF6\u683C\u5F0F</h3><ul><li>TEXTFILE\u9ED8\u8BA4\u683C\u5F0F\uFF0C\u6570\u636E\u4E0D\u505A\u538B\u7F29\uFF0C\u78C1\u76D8\u5F00\u9500\u5927\uFF0C\u6570\u636E\u89E3\u6790\u5F00\u9500\u5927\u3002 \u53EF\u7ED3\u5408Gzip\u3001Bzip2\u4F7F\u7528(\u7CFB\u7EDF\u81EA\u52A8\u68C0\u67E5\uFF0C\u6267\u884C\u67E5\u8BE2\u65F6\u81EA\u52A8\u89E3\u538B)\uFF0C\u4F46\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0Chive\u4E0D\u4F1A\u5BF9\u6570\u636E\u8FDB\u884C\u5207\u5206\uFF0C \u4ECE\u800C\u65E0\u6CD5\u5BF9\u6570\u636E\u8FDB\u884C\u5E76\u884C\u64CD\u4F5C\u3002</li><li>SEQUENCEFILE\u662FHadoop API\u63D0\u4F9B\u7684\u4E00\u79CD\u4E8C\u8FDB\u5236\u6587\u4EF6\u652F\u6301\uFF0C\u5176\u5177\u6709\u4F7F\u7528\u65B9\u4FBF\u3001\u53EF\u5206\u5272\u3001\u53EF\u538B\u7F29\u7684\u7279\u70B9\u3002 SequenceFile\u652F\u6301\u4E09\u79CD\u538B\u7F29\u9009\u62E9\uFF1ANONE\uFF0CRECORD\uFF0CBLOCK\u3002Record\u538B\u7F29\u7387\u4F4E\uFF0C\u4E00\u822C\u5EFA\u8BAE\u4F7F\u7528BLOCK\u538B\u7F29</li><li>RCFILERCFILE\u662F\u4E00\u79CD\u884C\u5217\u5B58\u50A8\u76F8\u7ED3\u5408\u7684\u5B58\u50A8\u65B9\u5F0F\u3002\u9996\u5148\uFF0C\u5176\u5C06\u6570\u636E\u6309\u884C\u5206\u5757\uFF0C\u4FDD\u8BC1\u540C\u4E00\u4E2Arecord\u5728\u4E00\u4E2A\u5757\u4E0A\uFF0C\u907F\u514D\u8BFB\u4E00\u4E2A\u8BB0\u5F55\u9700\u8981\u8BFB\u53D6\u591A\u4E2Ablock\u3002\u5176\u6B21\uFF0C\u5757\u6570\u636E\u5217\u5F0F\u5B58\u50A8\uFF0C\u6709\u5229\u4E8E\u6570\u636E\u538B\u7F29\u548C\u5FEB\u901F\u7684\u5217\u5B58\u53D6\u3002</li><li>ORCFILE(0.11\u4EE5\u540E\u51FA\u73B0)</li></ul><h3 id="hive\u547D\u4EE4\u884C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#hive\u547D\u4EE4\u884C\u64CD\u4F5C" aria-hidden="true">#</a> HIVE\u547D\u4EE4\u884C\u64CD\u4F5C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u521B\u5EFA\u6570\u636E\u5E93</span>
hive<span class="token operator">&gt;</span> create database zwctest<span class="token punctuation">;</span>

<span class="token comment">#\u67E5\u770B\u6570\u636E\u5E93</span>
hive<span class="token operator">&gt;</span> show databases<span class="token punctuation">;</span>
OK
default
zwctest
Time taken: <span class="token number">0.019</span> seconds, Fetched: <span class="token number">2</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

 

<span class="token comment"># \u5207\u6362\u6570\u636E\u5E93</span>
<span class="token comment"># \u5207\u6362\u6570\u636E\u5E93\u7684\u65F6\u5019\u53EF\u4EE5\u8F93\u5165\uFF1Ause database_name\uFF1B</span>
hive<span class="token operator">&gt;</span> use zwctest<span class="token punctuation">;</span>
OK
Time taken: <span class="token number">0.012</span> seconds

 

<span class="token comment"># \u5220\u9664\u6570\u636E\u5E93</span>
hive<span class="token operator">&gt;</span> drop database <span class="token keyword">if</span> exists zwctest<span class="token punctuation">;</span>

 

<span class="token comment"># \u521B\u5EFA\u8868</span>
<span class="token comment"># \u521B\u5EFA\u4E00\u4E2A\u5916\u90E8\u8868\uFF0C\u8868\u6709\u5B57\u6BB5name\uFF0Csex\uFF0Cage\u3002comment\u540E\u9762\u5185\u5BB9\u4E3A\u5B57\u6BB5\u63CF\u8FF0\u4FE1\u606F\u3002</span>
hive<span class="token operator">&gt;</span> create external table <span class="token keyword">if</span> not exists studenttable<span class="token punctuation">(</span>
    <span class="token operator">&gt;</span> name string comment <span class="token string">&#39;name value&#39;</span>,
    <span class="token operator">&gt;</span> sex string comment <span class="token string">&#39;sex value&#39;</span>,
    <span class="token operator">&gt;</span> age string comment <span class="token string">&#39;age value&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">&gt;</span> row <span class="token function">format</span> delimited
    <span class="token operator">&gt;</span> fields terminated by <span class="token string">&#39;\\t&#39;</span>
    <span class="token operator">&gt;</span> lines terminated by <span class="token string">&#39;\\n&#39;</span>
    <span class="token operator">&gt;</span> stored as textfile<span class="token punctuation">;</span>
OK
Time taken: <span class="token number">0.163</span> seconds

 

<span class="token comment"># \u67E5\u770B\u6240\u6709\u8868</span>
hive<span class="token operator">&gt;</span> show tables<span class="token punctuation">;</span>
OK
testtable
Time taken: <span class="token number">0.023</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

 

<span class="token comment"># \u67E5\u770B\u8868\u4FE1\u606F</span>
hive<span class="token operator">&gt;</span> desc studenttable<span class="token punctuation">;</span>
OK
name                    string                  name value          
sex                     string                  sex value           
age                     string                  age value      

<span class="token comment">#\u8FD9\u91CC\u9762\u6709\u4E00\u4E2A\u5B57\u6BB5data\uFF0C\u662Fstring\u7C7B\u578B\u7684\uFF0C\u63CF\u8FF0\u4FE1\u606Fcomment\u662F\u201Cd comment\u201D\u3002</span>

<span class="token comment">#\u67E5\u770B\u62D3\u5C55\u63CF\u8FF0\u4FE1\u606F</span>
hive<span class="token operator">&gt;</span> describe formatted studenttable<span class="token punctuation">;</span>
OK
<span class="token comment"># col_name              data_type               comment             </span>
                 
name                    string                  name value          
sex                     string                  sex value           
age                     string                  age value           
                 
<span class="token comment"># Detailed Table Information             </span>
Database:               zwctest                  
Owner:                  root                     
CreateTime:             Sun Oct <span class="token number">23</span> <span class="token number">17</span>:52:38 CST <span class="token number">2016</span>     
LastAccessTime:         UNKNOWN                  
Protect Mode:           None                     
Retention:              <span class="token number">0</span>                        
Location:               hdfs://test1:8020/user/hive/warehouse/zwctest.db/studenttable    
Table Type:             EXTERNAL_TABLE           
Table Parameters:                
        EXTERNAL                TRUE                
        transient_lastDdlTime   <span class="token number">1477216358</span>          
                 
<span class="token comment"># Storage Information            </span>
SerDe Library:          org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe       
InputFormat:            org.apache.hadoop.mapred.TextInputFormat         
OutputFormat:           org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat       
Compressed:             No                       
Num Buckets:            <span class="token parameter variable">-1</span>                       
Bucket Columns:         <span class="token punctuation">[</span><span class="token punctuation">]</span>                       
Sort Columns:           <span class="token punctuation">[</span><span class="token punctuation">]</span>                       
Storage Desc Params:             
        field.delim             <span class="token punctuation">\\</span>t                  
        line.delim              <span class="token punctuation">\\</span>n                  
        serialization.format    <span class="token punctuation">\\</span>t                  
Time taken: <span class="token number">0.055</span> seconds, Fetched: <span class="token number">31</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># \u6CE8\uFF1Adesc\u4E3A\u7B80\u5199\uFF0C\u53EF\u5199\u5168\u62FCdescribe</span>

 

<span class="token comment"># \u5220\u9664\u8868</span>
hive<span class="token operator">&gt;</span> drop table testtable<span class="token punctuation">;</span>
OK
Time taken: <span class="token number">0.198</span> seconds

 

<span class="token comment"># \u8868\u52A0\u8F7D\u6570\u636E</span>
hive<span class="token operator">&gt;</span> load data <span class="token builtin class-name">local</span> inpath <span class="token string">&#39;/data/apps/test/zhangwenchao/data/data.txt&#39;</span> into table studenttable<span class="token punctuation">;</span> 
Loading data to table zwctest.studenttable
Table zwctest.studenttable: <span class="token punctuation">[</span>numFiles<span class="token operator">=</span><span class="token number">1</span>, <span class="token assign-left variable">totalSize</span><span class="token operator">=</span><span class="token number">2117</span><span class="token punctuation">]</span>
OK
Time taken: <span class="token number">0.659</span> seconds

 

<span class="token comment"># \u67E5\u770B\u6570\u636E</span>
<span class="token keyword">select</span> * from testtable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),t=[l];function c(d,p){return s(),e("div",null,t)}const r=n(i,[["render",c],["__file","hive.html.vue"]]);export{r as default};
