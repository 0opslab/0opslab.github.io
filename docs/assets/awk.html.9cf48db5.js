import{_ as n,o as t,c as s,e as a}from"./app.a667bd71.js";const i={},e=a(`<p>awk \u7528\u6CD5\uFF1Aawk &#39; pattern {action} &#39;</p><p>\u53D8\u91CF\u540D \u542B\u4E49 ARGC \u547D\u4EE4\u884C\u53D8\u5143\u4E2A\u6570 ARGV \u547D\u4EE4\u884C\u53D8\u5143\u6570\u7EC4 FILENAME \u5F53\u524D\u8F93\u5165\u6587\u4EF6\u540D FNR \u5F53\u524D\u6587\u4EF6\u4E2D\u7684\u8BB0\u5F55\u53F7 FS \u8F93\u5165\u57DF\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u4E00\u4E2A\u7A7A\u683C RS \u8F93\u5165\u8BB0\u5F55\u5206\u9694\u7B26 NF \u5F53\u524D\u8BB0\u5F55\u91CC\u57DF\u4E2A\u6570 NR \u5230\u76EE\u524D\u4E3A\u6B62\u8BB0\u5F55\u6570 OFS \u8F93\u51FA\u57DF\u5206\u9694\u7B26 ORS \u8F93\u51FA\u8BB0\u5F55\u5206\u9694\u7B26</p><hr><p>du -sk /data/ |gawk &#39;$1&gt;1024*1024 {print $1/1024/1024&quot;G&quot;} {print $1/1024&quot;M&quot;}&#39; 3.15131G 3226.94M \u7CBE\u786E\u5230M\u548CG \u5C0F\u6570\u70B9....</p><p>du -sk /data/ |gawk &#39;{print $1/1024}&#39; \u7EDF\u8BA1\u663E\u793A\u7CBE\u786E\u5230M</p><p>du -sk /data/ |gawk &#39;{print $1/1024/1024}&#39; \u7EDF\u8BA1\u663E\u793A\u7CBE\u786E\u5230G</p><hr><p>1\u3001awk &#39;/101/&#39; file \u663E\u793A\u6587\u4EF6file\u4E2D\u5305\u542B101\u7684\u5339\u914D\u884C\u3002 awk &#39;/101/,/105/&#39; file awk &#39;$1 == 5&#39; file awk &#39;$1 == &quot;CT&quot;&#39; file \u6CE8\u610F\u5FC5\u987B\u5E26\u53CC\u5F15\u53F7 awk &#39;$1 * $2 &gt;100 &#39; file<br> awk &#39;$2 &gt;5 &amp;&amp; $2&lt;=15&#39; file</p><p>2\u3001awk &#39;{print NR,NF,$1,$NF,}&#39; file \u663E\u793A\u6587\u4EF6file\u7684\u5F53\u524D\u8BB0\u5F55\u53F7\u3001\u57DF\u6570\u548C\u6BCF\u4E00\u884C\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u57DF\u3002 awk &#39;/101/ {print $1,$2 + 10}&#39; file \u663E\u793A\u6587\u4EF6file\u7684\u5339\u914D\u884C\u7684\u7B2C\u4E00\u3001\u4E8C\u4E2A\u57DF\u52A010\u3002 awk &#39;/101/ {print $1$2}&#39; file awk &#39;/101/ {print $1 $2}&#39; file \u663E\u793A\u6587\u4EF6file\u7684\u5339\u914D\u884C\u7684\u7B2C\u4E00\u3001\u4E8C\u4E2A\u57DF\uFF0C\u4F46\u663E\u793A\u65F6\u57DF\u4E2D\u95F4\u6CA1\u6709\u5206\u9694\u7B26\u3002</p><p>3\u3001df | awk &#39;$4&gt;1000000 &#39; \u901A\u8FC7\u7BA1\u9053\u7B26\u83B7\u5F97\u8F93\u5165\uFF0C\u5982\uFF1A\u663E\u793A\u7B2C4\u4E2A\u57DF\u6EE1\u8DB3\u6761\u4EF6\u7684\u884C\u3002</p><p>4\u3001awk -F &quot;|&quot; &#39;{print $1}&#39; file \u6309\u7167\u65B0\u7684\u5206\u9694\u7B26\u201C|\u201D\u8FDB\u884C\u64CD\u4F5C\u3002 awk &#39;BEGIN { FS=&quot;[: \\t|]&quot; } {print $1,$2,$3}&#39; file \u901A\u8FC7\u8BBE\u7F6E\u8F93\u5165\u5206\u9694\u7B26\uFF08FS=&quot;[: \\t|]&quot;\uFF09\u4FEE\u6539\u8F93\u5165\u5206\u9694\u7B26\u3002</p><p>Sep=&quot;|&quot; awk -F $Sep &#39;{print $1}&#39; file \u6309\u7167\u73AF\u5883\u53D8\u91CFSep\u7684\u503C\u505A\u4E3A\u5206\u9694\u7B26\u3002<br> awk -F &#39;[ :\\t|]&#39; &#39;{print $1}&#39; file \u6309\u7167\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u503C\u505A\u4E3A\u5206\u9694\u7B26\uFF0C\u8FD9\u91CC\u4EE3\u8868\u7A7A\u683C\u3001:\u3001TAB\u3001|\u540C\u65F6\u505A\u4E3A\u5206\u9694\u7B26\u3002 awk -F &#39;[][]&#39; &#39;{print $1}&#39; file \u6309\u7167\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u503C\u505A\u4E3A\u5206\u9694\u7B26\uFF0C\u8FD9\u91CC\u4EE3\u8868[\u3001]</p><p>5\u3001awk -f awkfile file \u901A\u8FC7\u6587\u4EF6awkfile\u7684\u5185\u5BB9\u4F9D\u6B21\u8FDB\u884C\u63A7\u5236\u3002 cat awkfile /101/{print &quot;\\047 Hello! \\047&quot;} --\u9047\u5230\u5339\u914D\u884C\u4EE5\u540E\u6253\u5370 &#39; Hello! &#39;.\\047\u4EE3\u8868\u5355\u5F15\u53F7\u3002 {print $1,$2} --\u56E0\u4E3A\u6CA1\u6709\u6A21\u5F0F\u63A7\u5236\uFF0C\u6253\u5370\u6BCF\u4E00\u884C\u7684\u524D\u4E24\u4E2A\u57DF\u3002</p><p>6\u3001awk &#39;$1 ~ /101/ {print $1}&#39; file \u663E\u793A\u6587\u4EF6\u4E2D\u7B2C\u4E00\u4E2A\u57DF\u5339\u914D101\u7684\u884C\uFF08\u8BB0\u5F55\uFF09\u3002</p><p>7\u3001awk &#39;BEGIN { OFS=&quot;%&quot;} {print $1,$2}&#39; file \u901A\u8FC7\u8BBE\u7F6E\u8F93\u51FA\u5206\u9694\u7B26\uFF08OFS=&quot;%&quot;\uFF09\u4FEE\u6539\u8F93\u51FA\u683C\u5F0F\u3002</p><p>8\u3001awk &#39;BEGIN { max=100 ;print &quot;max=&quot; max} BEGIN \u8868\u793A\u5728\u5904\u7406\u4EFB\u610F\u884C\u4E4B\u524D\u8FDB\u884C\u7684\u64CD\u4F5C\u3002 {max=($1 &gt;max ?$1:max); print $1,&quot;Now max is &quot;max}&#39; file \u53D6\u5F97\u6587\u4EF6\u7B2C\u4E00\u4E2A\u57DF\u7684\u6700\u5927\u503C\u3002 \uFF08\u8868\u8FBE\u5F0F1?\u8868\u8FBE\u5F0F2:\u8868\u8FBE\u5F0F3 \u76F8\u5F53\u4E8E\uFF1A if (\u8868\u8FBE\u5F0F1) \u8868\u8FBE\u5F0F2 else \u8868\u8FBE\u5F0F3 awk &#39;{print ($1&gt;4 ? &quot;high &quot;$1: &quot;low &quot;$1)}&#39; file</p><p>9\u3001awk &#39;$1 * $2 &gt;100 {print $1}&#39; file \u663E\u793A\u6587\u4EF6\u4E2D\u7B2C\u4E00\u4E2A\u57DF\u5339\u914D101\u7684\u884C\uFF08\u8BB0\u5F55\uFF09\u3002</p><p>10\u3001awk &#39;{$1 == &#39;Chi&#39; {$3 = &#39;China&#39;; print}&#39; file \u627E\u5230\u5339\u914D\u884C\u540E\u5148\u5C06\u7B2C3\u4E2A\u57DF\u66FF\u6362\u540E\u518D\u663E\u793A\u8BE5\u884C\uFF08\u8BB0\u5F55\uFF09\u3002 awk &#39;{$7 %= 3; print $7}&#39; file \u5C06\u7B2C7\u57DF\u88AB3\u9664\uFF0C\u5E76\u5C06\u4F59\u6570\u8D4B\u7ED9\u7B2C7\u57DF\u518D\u6253\u5370\u3002</p><p>11\u3001awk &#39;/tom/ {wage=$2+$3; printf wage}&#39; file \u627E\u5230\u5339\u914D\u884C\u540E\u4E3A\u53D8\u91CFwage\u8D4B\u503C\u5E76\u6253\u5370\u8BE5\u53D8\u91CF\u3002</p><p>12\u3001awk &#39;/tom/ {count++;}<br> END {print &quot;tom was found &quot;count&quot; times&quot;}&#39; file END\u8868\u793A\u5728\u6240\u6709\u8F93\u5165\u884C\u5904\u7406\u5B8C\u540E\u8FDB\u884C\u5904\u7406\u3002</p><p>13\u3001awk &#39;gsub(/$/,&quot;&quot;);gsub(/,/,&quot;&quot;); cost+=$4; END {print &quot;The total is $&quot; cost&gt;&quot;filename&quot;}&#39; file gsub\u51FD\u6570\u7528\u7A7A\u4E32\u66FF\u6362$\u548C,\u518D\u5C06\u7ED3\u679C\u8F93\u51FA\u5230filename\u4E2D\u3002 1 2 3 $1,200.00 1 2 3 $2,300.00 1 2 3 $4,000.00</p><pre><code>awk &#39;{gsub(/\\$/,&quot;&quot;);gsub(/,/,&quot;&quot;); 
if ($4&gt;1000&amp;&amp;$4&lt;2000) c1+=$4; 
else if ($4&gt;2000&amp;&amp;$4&lt;3000) c2+=$4; 
else if ($4&gt;3000&amp;&amp;$4&lt;4000) c3+=$4; 
else c4+=$4; } 
END {printf  &quot;c1=[%d];c2=[%d];c3=[%d];c4=[%d]\\n&quot;,c1,c2,c3,c4}&quot;&#39; file 
\u901A\u8FC7if\u548Celse if\u5B8C\u6210\u6761\u4EF6\u8BED\u53E5 

awk &#39;{gsub(/\\$/,&quot;&quot;);gsub(/,/,&quot;&quot;); 
if ($4&gt;3000&amp;&amp;$4&lt;4000) exit; 
else c4+=$4; } 
END {printf  &quot;c1=[%d];c2=[%d];c3=[%d];c4=[%d]\\n&quot;,c1,c2,c3,c4}&quot;&#39; file 
\u901A\u8FC7exit\u5728\u67D0\u6761\u4EF6\u65F6\u9000\u51FA\uFF0C\u4F46\u662F\u4ECD\u6267\u884CEND\u64CD\u4F5C\u3002 
awk &#39;{gsub(/\\$/,&quot;&quot;);gsub(/,/,&quot;&quot;); 
if ($4&gt;3000) next; 
else c4+=$4; } 
END {printf  &quot;c4=[%d]\\n&quot;,c4}&quot;&#39; file 
\u901A\u8FC7next\u5728\u67D0\u6761\u4EF6\u65F6\u8DF3\u8FC7\u8BE5\u884C\uFF0C\u5BF9\u4E0B\u4E00\u884C\u6267\u884C\u64CD\u4F5C\u3002 
</code></pre><p>14\u3001awk &#39;{ print FILENAME,$0 }&#39; file1 file2 file3&gt;fileall \u628Afile1\u3001file2\u3001file3\u7684\u6587\u4EF6\u5185\u5BB9\u5168\u90E8\u5199\u5230fileall\u4E2D\uFF0C\u683C\u5F0F\u4E3A \u6253\u5370\u6587\u4EF6\u5E76\u524D\u7F6E\u6587\u4EF6\u540D\u3002</p><p>15\u3001awk &#39; $1!=previous { close(previous); previous=$1 }<br> {print substr($0,index($0,&quot; &quot;) +1)&gt;$1}&#39; fileall \u628A\u5408\u5E76\u540E\u7684\u6587\u4EF6\u91CD\u65B0\u5206\u62C6\u4E3A3\u4E2A\u6587\u4EF6\u3002\u5E76\u4E0E\u539F\u6587\u4EF6\u4E00\u81F4\u3002</p><p>16\u3001awk &#39;BEGIN {&quot;date&quot;|getline d; print d}&#39; \u901A\u8FC7\u7BA1\u9053\u628Adate\u7684\u6267\u884C\u7ED3\u679C\u9001\u7ED9getline\uFF0C\u5E76\u8D4B\u7ED9\u53D8\u91CFd\uFF0C\u7136\u540E\u6253\u5370\u3002</p><p>17\u3001awk &#39;BEGIN {system(&quot;echo &quot;Input your name:\\c&quot;&quot;); getline d;print &quot;\\nYour name is&quot;,d,&quot;\\b!\\n&quot;}&#39; \u901A\u8FC7getline\u547D\u4EE4\u4EA4\u4E92\u8F93\u5165name\uFF0C\u5E76\u663E\u793A\u51FA\u6765\u3002 awk &#39;BEGIN {FS=&quot;:&quot;; while(getline&lt; &quot;/etc/passwd&quot; &gt;0) { if($1~&quot;050[0-9]_&quot;) print $1}}&#39; \u6253\u5370/etc/passwd\u6587\u4EF6\u4E2D\u7528\u6237\u540D\u5305\u542B050x_\u7684\u7528\u6237\u540D\u3002</p><p>18\u3001awk &#39;{ i=1;while(i&lt;NF) {print NF,$i;i++}}&#39; file \u901A\u8FC7while\u8BED\u53E5\u5B9E\u73B0\u5FAA\u73AF\u3002 awk &#39;{ for(i=1;i&lt;NF;i++) {print NF,$i}}&#39; file \u901A\u8FC7for\u8BED\u53E5\u5B9E\u73B0\u5FAA\u73AF\u3002<br> type file|awk -F &quot;/&quot; &#39; { for(i=1;i&lt;NF;i++) { if(i==NF-1) { printf &quot;%s&quot;,$i } else { printf &quot;%s/&quot;,$i } }}&#39; \u663E\u793A\u4E00\u4E2A\u6587\u4EF6\u7684\u5168\u8DEF\u5F84\u3002 \u7528for\u548Cif\u663E\u793A\u65E5\u671F awk &#39;BEGIN { for(j=1;j&lt;=12;j++) { flag=0; printf &quot;\\n%d\u6708\u4EFD\\n&quot;,j; for(i=1;i&lt;=31;i++) { if (j==2&amp;&amp;i&gt;28) flag=1; if ((j==4||j==6||j==9||j==11)&amp;&amp;i&gt;30) flag=1; if (flag==0) {printf &quot;%02d%02d &quot;,j,i} } } }&#39;</p><p>19\u3001\u5728awk\u4E2D\u8C03\u7528\u7CFB\u7EDF\u53D8\u91CF\u5FC5\u987B\u7528\u5355\u5F15\u53F7\uFF0C\u5982\u679C\u662F\u53CC\u5F15\u53F7\uFF0C\u5219\u8868\u793A\u5B57\u7B26\u4E32 Flag=abcd awk &#39;{print &#39;$Flag&#39;}&#39; \u7ED3\u679C\u4E3Aabcd awk &#39;{print &quot;$Flag&quot;}&#39; \u7ED3\u679C\u4E3A$Flag</p><p>\u4EE5\u4E0A\u8F6C\u81EAchinaunix\uFF0C\u4EE5\u4E0B\u662F\u81EA\u5DF1\u7684\u603B\u7ED3\uFF1A</p><p>\u6C42\u548C\uFF1A</p><p>$awk &#39;BEGIN{total=0}{total+=$4}END{print total}&#39; a.txt -----\u5BF9a.txt\u6587\u4EF6\u7684\u7B2C\u56DB\u4E2A\u57DF\u8FDB\u884C\u6C42\u548C\uFF01</p><p>$ awk &#39;/^(no|so)/&#39; test-----\u6253\u5370\u6240\u6709\u4EE5\u6A21\u5F0Fno\u6216so\u5F00\u5934\u7684\u884C\u3002</p><p>$ awk &#39;/^[ns]/{print $1}&#39; test-----\u5982\u679C\u8BB0\u5F55\u4EE5n\u6216s\u5F00\u5934\uFF0C\u5C31\u6253\u5370\u8FD9\u4E2A\u8BB0\u5F55\u3002</p><p>$ awk &#39;$1 ~/[0-9][0-9]$/(print $1}&#39; test-----\u5982\u679C\u7B2C\u4E00\u4E2A\u57DF\u4EE5\u4E24\u4E2A\u6570\u5B57\u7ED3\u675F\u5C31\u6253\u5370\u8FD9\u4E2A\u8BB0\u5F55\u3002</p><p>$ awk &#39;$1 == 100 || $2 &lt; 50&#39; test-----\u5982\u679C\u7B2C\u4E00\u4E2A\u6216\u7B49\u4E8E100\u6216\u8005\u7B2C\u4E8C\u4E2A\u57DF\u5C0F\u4E8E50\uFF0C\u5219\u6253\u5370\u8BE5\u884C\u3002</p><p>$ awk &#39;$1 != 10&#39; test-----\u5982\u679C\u7B2C\u4E00\u4E2A\u57DF\u4E0D\u7B49\u4E8E10\u5C31\u6253\u5370\u8BE5\u884C\u3002</p><p>$ awk &#39;/test/{print $1 + 10}&#39; test-----\u5982\u679C\u8BB0\u5F55\u5305\u542B\u6B63\u5219\u8868\u8FBE\u5F0Ftest\uFF0C\u5219\u7B2C\u4E00\u4E2A\u57DF\u52A010\u5E76\u6253\u5370\u51FA\u6765\u3002</p><p>$ awk &#39;{print ($1 &gt; 5 ? &quot;ok &quot;$1: &quot;error&quot;$1)}&#39; test-----\u5982\u679C\u7B2C\u4E00\u4E2A\u57DF\u5927\u4E8E5\u5219\u6253\u5370\u95EE\u53F7\u540E\u9762\u7684\u8868\u8FBE\u5F0F\u503C\uFF0C\u5426\u5219\u6253\u5370\u5192\u53F7\u540E\u9762\u7684\u8868\u8FBE\u5F0F\u503C\u3002</p><p>$ awk &#39;/^root/,/^mysql/&#39; test----\u6253\u5370\u4EE5\u6B63\u5219\u8868\u8FBE\u5F0Froot\u5F00\u5934\u7684\u8BB0\u5F55\u5230\u4EE5\u6B63\u5219\u8868\u8FBE\u5F0Fmysql\u5F00\u5934\u7684\u8BB0\u5F55\u8303\u56F4\u5185\u7684\u6240\u6709\u8BB0\u5F55\u3002\u5982\u679C\u627E\u5230\u4E00\u4E2A\u65B0\u7684\u6B63\u5219\u8868\u8FBE\u5F0Froot\u5F00\u5934\u7684\u8BB0 \u5F55\uFF0C\u5219\u7EE7\u7EED\u6253\u5370\u76F4\u5230\u4E0B\u4E00\u4E2A\u4EE5\u6B63\u5219\u8868\u8FBE\u5F0Fmysql\u5F00\u5934\u7684\u8BB0\u5F55\u4E3A\u6B62\uFF0C\u6216\u5230\u6587\u4EF6\u672B\u5C3E\u3002</p><p>##\u6309\u7B2C\u516D\u5217 \u91CD\u590D\u7684\u5220\u9664\uFF0C\u5E76\u4FDD\u7559\u4E00\u884C awk &#39;!arr[$6]++&#39; file</p><p>##\u6309\u7B2C2\u5217\u548C\u7B2C\u4E09 \u91CD\u590D\u7684\u5220\u9664\uFF0C\u5E76\u4FDD\u7559\u4E00\u884C awk &#39;!arr[$2$3]++&#39; test.log awk &#39;!arr[$2_$3]++&#39; test.log</p><p>##\u63D0\u53D6\u4E24\u4E2A\u6587\u4EF6\u7B2C\u4E00\u5217\u76F8\u540C\u7684\u884C awk -F&#39;,&#39; &#39;NR==FNR{a[$1]=$0;next}NR&gt;FNR{if($1 in a)print $0&quot;\\n&quot;a[$1]}&#39; 1.log 2.log</p><p>awk &#39;NR==FNR{a[$1]++}NR&gt;FNR&amp;&amp;a[$1]&gt;1&#39; 111.txt 111.txt</p><p>awk &#39;a[$1]++==1&#39;</p><p>cat 111.txt | awk -F &#39;[\u{1F610}]&#39; &#39;{print $2}&#39; &gt; 111.txt</p><p>##awk \u6309\u67D0\u4E2A\u4F4D\u7F6E\u7684\u5B57\u7B26\u5206\u9694\u7684\u65B9\u6CD5 awk -F &quot;:&quot; &#39;{ for(i=1;i&lt;=3;i++) printf(&quot;%s:&quot;,$i)}&#39; awk -F&#39;:&#39; &#39;{print $1 &quot;:&quot; $2 &quot;:&quot; $3; print $4}&#39; awk -F&#39;:&#39; &#39;{print $1 &quot;:&quot; $2 &quot;:&quot; $3; for(i=1;i&lt;=3;i++)$i=&quot;&quot;; print}&#39;</p><p>##awk\u6253\u5370\u7528\u6237\u548C\u5BC6\u7801 cat test.log |awk -F &#39;[ ]+&#39; &#39;{print $1 &quot; &quot; $2}&#39;</p><p>##\u6392\u5E8F\u663E\u793A\u91CD\u590D\u9879\u76EE cat test.log |awk -F &#39;[ ]+&#39; &#39;{print $1}&#39;| sort | uniq -c | sort -nr</p><p>#awk -F &#39;\\t&#39;\u6765\u8868\u793A\u5206\u9694\u7B26\uFF0C\u6BD4\u5982 awk -F &#39;\\t&#39; &#39;{print $1}&#39; file1.txt</p><p>##\u591A\u4E2A\u7A7A\u683C\u5206\u9694\u7684\u65B9\u6CD5 awk -F &#39;[ ]+&#39; &#39;{print $9}&#39; ls -lh /etc/sysconfig/network-scripts/ifcfg-* | awk -F &#39;[ ]+&#39; &#39;{print $9}&#39;</p><p>##\u6307\u5B9A\u5206\u9694\u7B26\u65E2\u53EF\u4EE5\u4E3A\u7A7A\u683C\uFF0C\u53C8\u53EF\u4EE5\u4E3A\u5192\u53F7\uFF0C\u90A3\u4E48\u5904\u7406\u5C06\u4F1A\u53D8\u5F97\u7B80\u5355\u3002\u53EF\u4EE5\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u6765\u6307\u5B9A\u591A\u4E2A\u5206\u9694\u7B26\uFF0C\u683C\u5F0F\u4E3A -F&#39;[\u7A7A\u683C:]+&#39; \u5982\u4E0B awk -F&#39;[ :]+&#39; &#39;{print $NF&quot;\\t&quot;$(NF-2)}&#39; file1.txt</p><p>1\u3001awk &#39;/101/&#39; file \u663E\u793A\u6587\u4EF6file\u4E2D\u5305\u542B101\u7684\u5339\u914D\u884C\u3002 awk &#39;/101/,/105/&#39; file awk &#39;$1 == 5&#39; file awk &#39;$1 == &quot;CT&quot;&#39; file \u6CE8\u610F\u5FC5\u987B\u5E26\u53CC\u5F15\u53F7 awk &#39;$1 * $2 &gt;100 &#39; file<br> awk &#39;$2 &gt;5 &amp;&amp; $2&lt;=15&#39; file</p><p>2\u3001awk &#39;{print NR,NF,$1,$NF,}&#39; file \u663E\u793A\u6587\u4EF6file\u7684\u5F53\u524D\u8BB0\u5F55\u53F7\u3001\u57DF\u6570\u548C\u6BCF\u4E00\u884C\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u57DF\u3002 awk &#39;/101/ {print $1,$2 + 10}&#39; file \u663E\u793A\u6587\u4EF6file\u7684\u5339\u914D\u884C\u7684\u7B2C\u4E00\u3001\u4E8C\u4E2A\u57DF\u52A010\u3002 awk &#39;/101/ {print $1$2}&#39; file awk &#39;/101/ {print $1 $2}&#39; file \u663E\u793A\u6587\u4EF6file\u7684\u5339\u914D\u884C\u7684\u7B2C\u4E00\u3001\u4E8C\u4E2A\u57DF\uFF0C\u4F46\u663E\u793A\u65F6\u57DF\u4E2D\u95F4\u6CA1\u6709\u5206\u9694\u7B26\u3002</p><p>3\u3001df | awk &#39;$4&gt;1000000 &#39; \u901A\u8FC7\u7BA1\u9053\u7B26\u83B7\u5F97\u8F93\u5165\uFF0C\u5982\uFF1A\u663E\u793A\u7B2C4\u4E2A\u57DF\u6EE1\u8DB3\u6761\u4EF6\u7684\u884C\u3002</p><p>4\u3001awk -F &quot;|&quot; &#39;{print $1}&#39; file \u6309\u7167\u65B0\u7684\u5206\u9694\u7B26\u201C|\u201D\u8FDB\u884C\u64CD\u4F5C\u3002 awk &#39;BEGIN { FS=&quot;[: \\t|]&quot; } {print $1,$2,$3}&#39; file \u901A\u8FC7\u8BBE\u7F6E\u8F93\u5165\u5206\u9694\u7B26\uFF08FS=&quot;[: \\t|]&quot;\uFF09\u4FEE\u6539\u8F93\u5165\u5206\u9694\u7B26\u3002</p><p>Sep=&quot;|&quot; awk -F $Sep &#39;{print $1}&#39; file \u6309\u7167\u73AF\u5883\u53D8\u91CFSep\u7684\u503C\u505A\u4E3A\u5206\u9694\u7B26\u3002<br> awk -F &#39;[ :\\t|]&#39; &#39;{print $1}&#39; file \u6309\u7167\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u503C\u505A\u4E3A\u5206\u9694\u7B26\uFF0C\u8FD9\u91CC\u4EE3\u8868\u7A7A\u683C\u3001:\u3001TAB\u3001|\u540C\u65F6\u505A\u4E3A\u5206\u9694\u7B26\u3002 awk -F &#39;[][]&#39; &#39;{print $1}&#39; file \u6309\u7167\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u503C\u505A\u4E3A\u5206\u9694\u7B26\uFF0C\u8FD9\u91CC\u4EE3\u8868[\u3001]</p><p>5\u3001awk -f awkfile file \u901A\u8FC7\u6587\u4EF6awkfile\u7684\u5185\u5BB9\u4F9D\u6B21\u8FDB\u884C\u63A7\u5236\u3002 cat awkfile /101/{print &quot;\\047 Hello! \\047&quot;} --\u9047\u5230\u5339\u914D\u884C\u4EE5\u540E\u6253\u5370 &#39; Hello! &#39;. \\047\u4EE3\u8868\u5355\u5F15\u53F7\u3002 {print $1,$2} --\u56E0\u4E3A\u6CA1\u6709\u6A21\u5F0F\u63A7\u5236\uFF0C\u6253\u5370\u6BCF\u4E00\u884C\u7684\u524D\u4E24\u4E2A\u57DF\u3002</p><p>6\u3001awk &#39;$1 ~ /101/ {print $1}&#39; file \u663E\u793A\u6587\u4EF6\u4E2D\u7B2C\u4E00\u4E2A\u57DF\u5339\u914D101\u7684\u884C\uFF08\u8BB0\u5F55\uFF09\u3002</p><p>7\u3001awk &#39;BEGIN { OFS=&quot;%&quot;} {print $1,$2}&#39; file \u901A\u8FC7\u8BBE\u7F6E\u8F93\u51FA\u5206\u9694\u7B26\uFF08OFS=&quot;%&quot;\uFF09\u4FEE\u6539\u8F93\u51FA\u683C\u5F0F\u3002</p><p>8\u3001awk &#39;BEGIN { max=100 ;print &quot;max=&quot; max} BEGIN \u8868\u793A\u5728\u5904\u7406\u4EFB\u610F\u884C\u4E4B\u524D\u8FDB\u884C\u7684\u64CD\u4F5C\u3002 {max=($1 &gt;max ?$1:max); print $1,&quot;Now max is &quot;max}&#39; file \u53D6\u5F97\u6587\u4EF6\u7B2C\u4E00\u4E2A\u57DF\u7684\u6700\u5927\u503C\u3002 \uFF08\u8868\u8FBE\u5F0F1?\u8868\u8FBE\u5F0F2:\u8868\u8FBE\u5F0F3 \u76F8\u5F53\u4E8E\uFF1A if (\u8868\u8FBE\u5F0F1) \u8868\u8FBE\u5F0F2 else \u8868\u8FBE\u5F0F3 awk &#39;{print ($1&gt;4 ? &quot;high &quot;$1: &quot;low &quot;$1)}&#39; file</p><p>9\u3001awk &#39;$1 * $2 &gt;100 {print $1}&#39; file \u663E\u793A\u6587\u4EF6\u4E2D\u7B2C\u4E00\u4E2A\u57DF\u5339\u914D101\u7684\u884C\uFF08\u8BB0\u5F55\uFF09\u3002</p><p>10\u3001awk &#39;{$1 == &#39;Chi&#39; {$3 = &#39;China&#39;; print}&#39; file \u627E\u5230\u5339\u914D\u884C\u540E\u5148\u5C06\u7B2C3\u4E2A\u57DF\u66FF\u6362\u540E\u518D\u663E\u793A\u8BE5\u884C\uFF08\u8BB0\u5F55\uFF09\u3002 awk &#39;{$7 %= 3; print $7}&#39; file \u5C06\u7B2C7\u57DF\u88AB3\u9664\uFF0C\u5E76\u5C06\u4F59\u6570\u8D4B\u7ED9\u7B2C7\u57DF\u518D\u6253\u5370\u3002</p><p>11\u3001awk &#39;/tom/ {wage=$2+$3; printf wage}&#39; file \u627E\u5230\u5339\u914D\u884C\u540E\u4E3A\u53D8\u91CFwage\u8D4B\u503C\u5E76\u6253\u5370\u8BE5\u53D8\u91CF\u3002</p><p>12\u3001awk &#39;/tom/ {count++;}<br> END {print &quot;tom was found &quot;count&quot; times&quot;}&#39; file END\u8868\u793A\u5728\u6240\u6709\u8F93\u5165\u884C\u5904\u7406\u5B8C\u540E\u8FDB\u884C\u5904\u7406\u3002</p><p>13\u3001awk &#39;gsub(/$/,&quot;&quot;);gsub(/,/,&quot;&quot;); cost+=$4; END {print &quot;The total is $&quot; cost&gt;&quot;filename&quot;}&#39; file gsub\u51FD\u6570\u7528\u7A7A\u4E32\u66FF\u6362$\u548C,\u518D\u5C06\u7ED3\u679C\u8F93\u51FA\u5230filename\u4E2D\u3002 1 2 3 $1,200.00 1 2 3 $2,300.00 1 2 3 $4,000.00</p><pre><code>awk &#39;{gsub(/\\$/,&quot;&quot;);gsub(/,/,&quot;&quot;); 
if ($4&gt;1000&amp;&amp;$4&lt;2000) c1+=$4; 
else if ($4&gt;2000&amp;&amp;$4&lt;3000) c2+=$4; 
else if ($4&gt;3000&amp;&amp;$4&lt;4000) c3+=$4; 
else c4+=$4; } 
END {printf  &quot;c1=[%d];c2=[%d];c3=[%d];c4=[%d]\\n&quot;,c1,c2,c3,c4}&quot;&#39; file 
\u901A\u8FC7if\u548Celse if\u5B8C\u6210\u6761\u4EF6\u8BED\u53E5 

awk &#39;{gsub(/\\$/,&quot;&quot;);gsub(/,/,&quot;&quot;); 
if ($4&gt;3000&amp;&amp;$4&lt;4000) exit; 
else c4+=$4; } 
END {printf  &quot;c1=[%d];c2=[%d];c3=[%d];c4=[%d]\\n&quot;,c1,c2,c3,c4}&quot;&#39; file 
\u901A\u8FC7exit\u5728\u67D0\u6761\u4EF6\u65F6\u9000\u51FA\uFF0C\u4F46\u662F\u4ECD\u6267\u884CEND\u64CD\u4F5C\u3002 
awk &#39;{gsub(/\\$/,&quot;&quot;);gsub(/,/,&quot;&quot;); 
if ($4&gt;3000) next; 
else c4+=$4; } 
END {printf  &quot;c4=[%d]\\n&quot;,c4}&quot;&#39; file 
\u901A\u8FC7next\u5728\u67D0\u6761\u4EF6\u65F6\u8DF3\u8FC7\u8BE5\u884C\uFF0C\u5BF9\u4E0B\u4E00\u884C\u6267\u884C\u64CD\u4F5C\u3002 
</code></pre><p>14\u3001awk &#39;{ print FILENAME,$0 }&#39; file1 file2 file3&gt;fileall \u628Afile1\u3001file2\u3001file3\u7684\u6587\u4EF6\u5185\u5BB9\u5168\u90E8\u5199\u5230fileall\u4E2D\uFF0C\u683C\u5F0F\u4E3A \u6253\u5370\u6587\u4EF6\u5E76\u524D\u7F6E\u6587\u4EF6\u540D\u3002</p><p>15\u3001awk &#39; $1!=previous { close(previous); previous=$1 }<br> {print substr($0,index($0,&quot; &quot;) +1)&gt;$1}&#39; fileall \u628A\u5408\u5E76\u540E\u7684\u6587\u4EF6\u91CD\u65B0\u5206\u62C6\u4E3A3\u4E2A\u6587\u4EF6\u3002\u5E76\u4E0E\u539F\u6587\u4EF6\u4E00\u81F4\u3002</p><p>16\u3001awk &#39;BEGIN {&quot;date&quot;|getline d; print d}&#39; \u901A\u8FC7\u7BA1\u9053\u628Adate\u7684\u6267\u884C\u7ED3\u679C\u9001\u7ED9getline\uFF0C\u5E76\u8D4B\u7ED9\u53D8\u91CFd\uFF0C\u7136\u540E\u6253\u5370\u3002</p><p>17\u3001awk &#39;BEGIN {system(&quot;echo &quot;Input your name:\\c&quot;&quot;); getline d;print &quot;\\nYour name is&quot;,d,&quot;\\b!\\n&quot;}&#39; \u901A\u8FC7getline\u547D\u4EE4\u4EA4\u4E92\u8F93\u5165name\uFF0C\u5E76\u663E\u793A\u51FA\u6765\u3002 awk &#39;BEGIN {FS=&quot;:&quot;; while(getline&lt; &quot;/etc/passwd&quot; &gt;0) { if($1~&quot;050[0-9]_&quot;) print $1}}&#39; \u6253\u5370/etc/passwd\u6587\u4EF6\u4E2D\u7528\u6237\u540D\u5305\u542B050x_\u7684\u7528\u6237\u540D\u3002</p><p>18\u3001awk &#39;{ i=1;while(i&lt;NF) {print NF,$i;i++}}&#39; file \u901A\u8FC7while\u8BED\u53E5\u5B9E\u73B0\u5FAA\u73AF\u3002 awk &#39;{ for(i=1;i&lt;NF;i++) {print NF,$i}}&#39; file \u901A\u8FC7for\u8BED\u53E5\u5B9E\u73B0\u5FAA\u73AF\u3002<br> type file|awk -F &quot;/&quot; &#39; { for(i=1;i&lt;NF;i++) { if(i==NF-1) { printf &quot;%s&quot;,$i } else { printf &quot;%s/&quot;,$i } }}&#39; \u663E\u793A\u4E00\u4E2A\u6587\u4EF6\u7684\u5168\u8DEF\u5F84\u3002 \u7528for\u548Cif\u663E\u793A\u65E5\u671F awk &#39;BEGIN { for(j=1;j&lt;=12;j++) { flag=0; printf &quot;\\n%d\u6708\u4EFD\\n&quot;,j; for(i=1;i&lt;=31;i++) { if (j==2&amp;&amp;i&gt;28) flag=1; if ((j==4||j==6||j==9||j==11)&amp;&amp;i&gt;30) flag=1; if (flag==0) {printf &quot;%02d%02d &quot;,j,i} } } }&#39;</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># sum integers from a file or stdin, one integer per line:</span>
<span class="token comment">#\u4ECE\u6587\u4EF6\u6216stdin\u4E2D\u6C42\u548C\u6574\u6570\uFF0C\u6BCF\u884C\u4E00\u4E2A\u6574\u6570\uFF1A</span>
<span class="token builtin class-name">printf</span> <span class="token string">&#39;1\\n2\\n3\\n&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ sum += $1} END {print sum}&#39;</span>

<span class="token comment"># using specific character as separator to sum integers from a file or stdin</span>
<span class="token comment">#\u4F7F\u7528\u7279\u5B9A\u5B57\u7B26\u4F5C\u4E3A\u5206\u9694\u7B26\u6765\u5BF9\u6587\u4EF6\u6216\u6807\u51C6\u8F93\u5165\u4E2D\u7684\u6574\u6570\u6C42\u548C</span>
<span class="token builtin class-name">printf</span> <span class="token string">&#39;1:2:3&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $1+$2+$3}&#39;</span>

<span class="token comment"># print a multiplication table</span>
<span class="token comment">#\u6253\u5370\u4E58\u6CD5\u8868</span>
<span class="token function">seq</span> <span class="token number">9</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;H;g&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">RS</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span> <span class="token string">&#39;{for(i=1;i&lt;=NF;i++)printf(&quot;%dx%d=%d%s&quot;, i, NR, i*NR, i==NR?&quot;\\n&quot;:&quot;\\t&quot;)}&#39;</span>

<span class="token comment"># Specify output separator character</span>
<span class="token comment">#\u6307\u5B9A\u8F93\u51FA\u5206\u9694\u7B26</span>
<span class="token builtin class-name">printf</span> <span class="token string">&#39;1 2 3&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;BEGIN {OFS=&quot;:&quot;}; {print $1,$2,$3}&#39;</span>

<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u7B2C\u4E00\u6BB5</span>
<span class="token function">head</span> <span class="token parameter variable">-n2</span> test.txt<span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{print $1}&#39;</span> 
<span class="token comment"># \u6253\u5370\u884C\u53F7\u548C\u6700\u540E\u4E00\u4E2A\u5B57\u6BB5\u548C\u5012\u6570\u7B2C\u4E8C\u4E2A\u5B57\u6BB5</span>
<span class="token function">head</span> <span class="token parameter variable">-n2</span> test.txt<span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{print $NR $NF-1 $NF}&#39;</span> 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u6574\u884C</span>
<span class="token function">head</span> <span class="token parameter variable">-n2</span> test.txt<span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{print $0}&#39;</span> 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u7B2C1\u30012\u30013\u30014\u6BB5\uFF0C\u4E2D\u95F4\u4EE5\u4E95\u53F7\u95F4\u9694</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{print $1&quot;#&quot;$2&quot;#&quot;$3&quot;#&quot;$4}&#39;</span> 
<span class="token comment">#\u6253\u5370\u5305\u542Boo\u7684\u884C</span>
<span class="token function">awk</span> <span class="token string">&#39;/oo/&#39;</span> test.txt 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u7B2C\u4E00\u5217\u5305\u542Boo\u7684\u884C</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$1 ~/oo/&#39;</span> test.txt 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u5305\u542Broot\u884C\u7684\u7B2C\u4E00\u3001\u4E09\u6BB5\uFF0C\u6253\u5370\u5305\u542Bgames\u884C\u7684\u7B2C\u4E00\u3001\u4E09\u6BB5</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;/root/ {print $1,$3} /games/ {print $1,$3}&#39;</span> test.txt 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u7B2C\u4E09\u6BB5\u662F\u6587\u672C0\u7684\u884C\uFF0C\u53CC\u5F15\u53F7\u4EE3\u8868\u5B57\u7B26\uFF0C\u6CA1\u6709\u53CC\u5F15\u53F7\u4EE3\u8868\u6570\u5B57</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$3==&quot;0&quot;&#39;</span> /etc/passwd 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u7B2C\u4E09\u6BB5\u5927\u4E8E\u7B49\u4E8E\u5B57\u7B26\u4E32500\u7684\u884C</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$3&gt;=&quot;500&quot;&#39;</span> /etc/passwd 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u7B2C\u4E09\u6BB5\u5927\u4E8E\u7B49\u4E8E\u6570\u5B57500\u7684\u884C</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$3&gt;=500&#39;</span> /etc/passwd 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u7B2C\u4E03\u6BB5\u4E0D\u4E3A/sbin/nologin\u7684\u884C</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$7!=&quot;/sbin/nologin&quot;&#39;</span> /etc/passwd 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u7B2C\u4E09\u6BB5\u5C0F\u4E8E\u7B2C\u56DB\u6BB5\u7684\u884C</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$3&lt;$4&#39;</span> /etc/passwd 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u7B2C\u4E09\u6BB5\u5927\u4E8E\u5B57\u7B265\u4E14\u7B2C\u4E09\u6BB5\u5C0F\u4E8E\u5B57\u7B267\u7684\u884C</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$3&gt;&quot;5&quot; &amp;&amp; $3&lt;&quot;7&quot;&#39;</span> /etc/passwd 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u7B2C\u4E09\u6BB5\u5927\u4E8E1000\u6216\u8005\u7B2C\u4E03\u6BB5\u7B49\u4E8E/bin/bash\u7684\u884C</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$3&gt;1000 || $7==&quot;/bin/bash&quot;&#39;</span> /etc/passwd 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u6253\u5370\u6BCF\u884C\u7B2C1\u30013\u30014\u6BB5\uFF0C\u5E76\u4EE5\u4E95\u53F7\u95F4\u9694</span>
<span class="token function">head</span> <span class="token parameter variable">-5</span> /etc/passwd <span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{OFS=&quot;#&quot;} {print $1,$3,$4}&#39;</span>
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u5982\u679C\u7B2C\u4E09\u6BB5\u5927\u4E8E1000\u5219\u6253\u5370\u7B2C1\u30013\u30014\u6BB5\uFF0C\u5E76\u4EE5\u4E95\u53F7\u95F4\u9694</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{OFS=&quot;#&quot;} {if ($3&gt;1000) {print $1,$2,$3,$4}}&#39;</span> /etc/passwd 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u9010\u884C\u6253\u5370\u8BE5\u884C\u5217\u6570</span>
<span class="token function">head</span> <span class="token parameter variable">-n3</span> /etc/passwd <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{print NF}&#39;</span>
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u9010\u884C\u6253\u5370\u8BE5\u884C\u884C\u6570</span>
<span class="token function">head</span> <span class="token parameter variable">-n3</span> /etc/passwd <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{print NR}&#39;</span> 
<span class="token comment">#\u6253\u5370\u884C\u6570\u5927\u4E8E40\u7684\u884C</span>
<span class="token function">awk</span> <span class="token string">&#39;NR&gt;40&#39;</span> /etc/passwd 
<span class="token comment">#\u6253\u5370\u884C\u6570\u5C0F\u4E8E20\u5E76\u4E14\u7B2C\u4E00\u6BB5\u5305\u542Broo\u7684\u884C</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;NR&lt;20 &amp;&amp; $1 ~ /roo/&#39;</span> /etc/passwd 
<span class="token comment">#\u4EE5\u5192\u53F7\u4E3A\u5206\u9694\u7B26\uFF0C\u7ED9\u7B2C\u4E00\u6BB5\u8D4B\u503Croot\uFF0C\u7136\u540E\u6253\u5370\u6BCF\u4E00\u884C</span>
<span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">3</span> /etc/passwd <span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$1=&quot;root&quot;&#39;</span> 
<span class="token comment">#\u9010\u884C\u505A\u5B8Ctot=tot+3\u7684\u8FD0\u7B97\uFF0C\u6700\u540E\u6253\u5370\u51FAtot\u7684\u503C</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{(tot=tot+$3)}; END {print tot}&#39;</span> /etc/passwd 
<span class="token comment">#\u5982\u679C\u7B2C\u4E00\u6BB5\u662Froot\uFF0C\u6253\u5370\u8BE5\u884C</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{if ($1==&quot;root&quot;) {print $0}}&#39;</span> /etc/passwd 
<span class="token comment">#\u7B2C3\u6BB5\u5927\u4E8E\u67D0\u4E2A\u5B57\u7B26\u5E76\u4E14\u5C0F\u4E8E\u67D0\u4E2A\u5B57\u7B26 \u3002\u8FD9\u91CC\u6570\u5B57\u4F7F\u7528\u4E86\u53CC\u5F15\u53F7\uFF0C\u6240\u4EE5\u8868\u793A\u5B57\u7B26</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$3&gt;&quot;4&quot; &amp;&amp; $3&lt;&quot;8&quot;&#39;</span> test.txt 
<span class="token comment">#\u6253\u5370\u7B2C3\u6BB5\u4E0E\u7B2C4\u6BB5\u76F8\u540C\u7684\u884C\u3002</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span>  <span class="token string">&#39;$3==$4&#39;</span> test.txt 
<span class="token comment">#\u6253\u5370\u7B2C3\u6BB5\u5C0F\u4E8E\u7B2C4\u6BB5\u7684\u884C\uFF0C\u6BD4\u8F83\u7684\u662F\u6570\u5B57</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span>  <span class="token string">&#39;$3&lt;$4&#39;</span> test.txt  
<span class="token comment">#\u5B57\u7B26\u4F5C\u4E3A\u5224\u65AD\u6761\u4EF6\u5219\u662F\u8981\u4F7F\u7528\u53CC\u5F15\u53F7\u62EC\u8D77\u6765\u7684</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$7!=&quot;/sbin/nologin&quot;  {print $0} &#39;</span> test.txt 
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$3&gt;=500 {print $0}&#39;</span> test.txt
<span class="token comment">#\u8FD9\u91CC\u8868\u793A\u6253\u5370\u7B2C3\u6BB5\u7B49\u4E8E0\u7684\u884C\uFF0C\u8981\u60F3\u7B49\u4E8E\u5FC5\u987B\u4F7F\u75282\u4E2A=\uFF0C\u4E0D\u7136\u5C31\u662F\u8D4B\u503C\u4E86\u3002</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$3==0&#39;</span>  test.txt  
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;/oo/ {print $1,$4} /user1/ {print $1,$6}&#39;</span> test.txt
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$1 ~ /oo/&#39;</span> test.txt
<span class="token comment">#\u5339\u914D\u51FA\u73B0oo\u7684\u884C</span>
<span class="token function">awk</span> <span class="token string">&#39;/oo/&#39;</span> test.txt 
<span class="token comment">#\u5C06\u4E4B\u524D\u7684\uFF1A\u5206\u9694\u7B26\u53F7\u66FF\u6362\u4E3A#\uFF0C\u5FC5\u987B\u4F7F\u7528\u53CC\u5F15\u53F7\u5F15\u8D77\u6765\u3002</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{print $1&quot;#&quot;$5&quot;#&quot;$6}&#39;</span> test.txt 
 <span class="token comment">#-F\u7528\u6765\u6307\u5B9A\u5206\u9694\u7B26\u3002\u4E0D\u52A0-F\u9009\u9879\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u7A7A\u683C\u6216\u8005tab\u4E3A\u5206\u9694\u7B26\uFF0Cprint\u4E3A\u6253\u5370\u7684\u610F\u601D\u3002 $1\u8868\u793A\u6253\u5370\u7B2C1\u5B57\u6BB5   $0\u8868\u793A\u6574\u884C  </span>
<span class="token function">head</span> <span class="token parameter variable">-n2</span>   test.txt  <span class="token operator">|</span><span class="token function">awk</span>  <span class="token parameter variable">-F</span>  <span class="token string">&#39;:&#39;</span>   <span class="token string">&#39;{print  $1}&#39;</span> 

<span class="token comment">## \u54CD\u5E94\u65F6\u95F4\u5927\u4E8E10\u7684\u8BB0\u5F55</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;=&gt;&#39;</span> <span class="token string">&#39;/=&gt;.*=&gt;/{if($2&gt;10){print $2 $3}}&#39;</span> access_124.log

<span class="token comment"># \u63D0\u53D6\u6570\u5B57</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;dsFUs34tg*fs5a%8ar%$#@&#39;</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;&quot;</span> <span class="token string">&#39;
{
  for(i=1;i&lt;=NF;i++) 
  {  
    if ($i ~ /[[:digit:]]/)     
    {
      str=$i
      str1=(str1 str)
    }  
  } 
  print str1
}&#39;</span>
 
<span class="token comment">#\u8F93\u51FA</span>
<span class="token comment">#3458</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;dsFUs34tg*fs5a%8ar%$#@&#39;</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;&quot;</span> <span class="token string">&#39;
{
  for(i=1;i&lt;=NF;i++) 
  {  
    if ($i ~ /[0-9]/)             
    {
      str=$i
      str1=(str1 str)
    }  
  } 
  print str1
}&#39;</span>


<span class="token comment">#\u4F8B\uFF1A\u6253\u5370\u51FA/etc/passwd\u7684\u6240\u6709\u7528\u6237\u540D\uFF0C\u5E76\u7EDF\u8BA1\u5176\u5B57\u7B26\u957F\u5EA6</span>
<span class="token function">awk</span> -F: <span class="token string">&#39;{print $1&quot;\u957F\u5EA6\u4E3A&quot;length($1)}&#39;</span> /etc/passwd

<span class="token comment">#\u67E5\u627E\u51FA\u7528\u6237\u540D\u957F\u5EA6\u5927\u4E8E5\u7684\u7528\u6237\uFF0C\u663E\u793A\u7528\u6237\u540D</span>
<span class="token function">awk</span> -F: <span class="token string">&#39;length($1)&gt;5 {print $1}&#39;</span> /etc/passwd

<span class="token comment">#\u5927\u5C0F\u8F6C\u6362\uFF1Atoupper(),tolower()</span>
<span class="token function">awk</span> -F: <span class="token string">&#39;{print toupper($1)}&#39;</span> /etc/passwd
<span class="token function">awk</span> -F: <span class="token string">&#39;{print tolower(toupper($1))}&#39;</span> /etc/passwd

<span class="token comment">#\u622A\u53D6\u51FD\u6570\uFF1Asubstr()</span>
<span class="token comment">#--\u628A$1\u4ECE\u7B2C\u4E00\u4E2A\u5B57\u7B26\u5F00\u59CB\uFF0C\u622A\u53D62\u4E2A\uFF08\u800C\u4E0D\u662F\u4ECE\u7B2C\u4E00\u4E2A\u5230\u7B2C\u4E8C\u4E2A)</span>
<span class="token function">awk</span> -F: <span class="token string">&#39;{print substr($1,1,2)}&#39;</span> /etc/passwd        
<span class="token builtin class-name">echo</span> 12345356346343234sfsahaha34523 <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print substr($0,index($0,&quot;haha&quot;),4)}&#39;</span>

<span class="token function">awk</span> -F: <span class="token string">&#39;NR==1 {sub(&quot;o&quot;,&quot;O&quot;,$0);print $0}&#39;</span> /etc/passwd
<span class="token comment">#rOot:x:0:0:root:/root:/bin/bash</span>

<span class="token function">awk</span> -F: <span class="token string">&#39;NR==1 {gsub(&quot;o&quot;,&quot;O&quot;,$0);print $0}&#39;</span> /etc/passwd
<span class="token comment">#rOOt:x:0:0:rOOt:/rOOt:/bin/bash</span>

<span class="token function">awk</span> -F: <span class="token string">&#39;NR==1 {gsub(&quot;/bin/bash&quot;,&quot;/sbin/nologin&quot;); print $0}&#39;</span> /etc/passwd

<span class="token comment">#\u62BD\u53D6xxx.log\u6574\u4E2A\u65E5\u5FD7\u6587\u4EF6\u4E2D\uFF0C\u5305\u542B\u201ClistAuths\u201D\u7684\u884C\uFF0C\u6253\u5370\u8F93\u51FA</span>
<span class="token function">awk</span> <span class="token string">&#39;{if($0~&quot;listAuths&quot;) print}&#39;</span>   xxx.log

<span class="token function">cat</span> check_info.log.2017-09-20 <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;(txt=|&amp;client)&#39;</span> <span class="token string">&#39;{print $2}&#39;</span>

<span class="token comment"># \u7EDF\u8BA1\u6570\u91CF\u4E0E\u53BB\u91CD</span>
<span class="token function">cat</span> check_info.log.2017-09-20 <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;(txt=|&amp;client)&#39;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>

<span class="token comment"># \u6309\u91CD\u590D\u6B21\u6570\u6392\u5E8F</span>
<span class="token function">cat</span> check_info.log.2017-09-20 <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;(txt=|&amp;client)&#39;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-nr</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="awk\u5185\u7F6E\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#awk\u5185\u7F6E\u51FD\u6570" aria-hidden="true">#</a> awk\u5185\u7F6E\u51FD\u6570</h3><p>blength[([s])] \u8BA1\u7B97\u5B57\u7B26\u4E32\u957F\u5EA6(byte\u4E3A\u5355\u4F4D) length[([s])] \u8BA1\u7B97\u5B57\u7B26\u4E32\u957F\u5EA6(character\u4E3A\u5355\u4F4D) rand() \u751F\u6210\u968F\u673A\u6570 srand([expr]) \u8BBE\u7F6Erand() seed int(x) \u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6574\u578B substr(s, m [, n]) \u53D6\u5B50\u5B57\u7B26\u4E32 index(s, t) \u5728\u5B57\u7B26\u4E32s\u4E2D\u5B9A\u4F4Dt\u5B57\u7B26\u4E32\u9996\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E match(s, ere) \u5728\u5B57\u7B26\u4E32s\u4E2D\u5339\u914D\u6B63\u5219ere\uFF0Cmatch\u4FEE\u6539RSTART\u3001RLENGTH\u53D8\u91CF\u3002 split(s, a[, fs]) \u5C06\u5B57\u7B26\u4E32\u5206\u5272\u5230\u6570\u7EC4\u4E2D sub(ere, repl [, in]) \u5B57\u7B26\u4E32\u66FF\u6362 gsub \u540C\u4E0A sprintf(fmt, expr, ...) \u683C\u5F0F\u5316\u8F93\u51FA<br> system(cmd) \u5728shell\u4E2D\u6267\u884Ccmd\u3002 toupper(s) \u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5927\u5199 tolower(s) \u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5C0F\u5199 cos(x) \u8FD4\u56DEx\u7684\u4F59\u5F26 exp(x) \u8FD4\u56DEe\u7684x\u6B21\u5E42 int(x) \u8FD4\u56DEx\u7684\u6574\u6570\u90E8\u5206 log(x) \u8FD4\u56DEx\u7684\u81EA\u7136\u6570\u5BF9\u6570(e\u4E3A\u5E95) sin(x) \u8FD4\u56DEx\u7684\u6B63\u5F26 aqrt(x) \u8FD4\u56DEx\u7684\u5E73\u65B9\u6839 atan2(y,x) \u8FD4\u56DEy/x\u7684\u53CD\u6B63\u5207 rand() \u8FD4\u56DE\u968F\u673A\u6570 srand(x) \u5EFA\u7ACBrand()\u7684\u65B0\u7684\u79CD\u5B50\u6570\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u79CD\u5B50\u6570\uFF0C\u5C31\u7528\u5F53\u524D\u65F6\u95F4\u3002\u8FD4\u56DE\u65E7\u7684\u79CD\u5B50\u503C\u3002 gsub(r,s,t) \u5728\u5B57\u7B26\u4E32t\u4E2D\u7528\u5B57\u7B26\u4E32s\u66FF\u6362\u548Cr\u5339\u914D\u7684\u6240\u6709\u5B57\u7B26\u4E32\u3002\u8FD4\u56DE\u66FF\u6362\u7684\u4E2A\u6570\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9At\uFF0C\u9ED8\u8BA4$0\u3002 index(s,t) \u8FD4\u56DE\u5B50\u4E32t\u5728\u5B57\u7B26\u4E32s\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9As\uFF0C\u5219\u8FD4\u56DE0\u3002 length(s) \u8FD4\u56DEs\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u3002\u5982\u679C\u672A\u7ED9\u51FAs\u53C2\u6570\uFF0C\u5219\u8FD4\u56DE$0\u7684\u957F\u5EA6\u3002 blength(s) \u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\u3002 substr(s,p,n) \u8FD4\u56DE\u5B57\u7B26\u4E32s\u4E2D\u4ECE\u4F4D\u7F6Ep\u5F00\u59CB\u6700\u5927\u957F\u5EA6\u4E3An\u7684\u5B50\u4E32\u3002\u5982\u679C\u6CA1\u6709\u7ED9\u51FAn\uFF0C\u8FD4\u56DE\u4ECEp\u5F00\u59CB\u5269\u4F59\u7684\u5B57\u7B26\u4E32<br> sub(r,s,t) \u5728\u5B57\u7B26\u4E32t\u4E2D\u7528s\u66FF\u6362r\u7684\u9996\u6B21\u5339\u914D\u3002\u6210\u529F\u8FD4\u56DE1\uFF0C\u5931\u8D25\u8FD4\u56DE0\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9At\uFF0C\u9ED8\u8BA4$0\u3002 split(s,a,sep) \u4F7F\u7528\u5B57\u6BB5\u5206\u9694\u7B26sep\u5C06\u5B57\u7B26\u4E32s\u5206\u89E3\u5230\u6570\u7EC4a\u7684\u5143\u7D20\u4E2D\uFF0C\u8FD4\u56DE\u5143\u7D20\u7684\u4E2A\u6570\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9Asep\uFF0C\u5219\u4F7F\u7528FS\u3002 tolower(s) \u5C06\u5B57\u7B26\u4E32s\u8F6C\u6362\u4E3A\u5C0F\u5199\uFF0C\u5E76\u8FD4\u56DE\u65B0\u4E32 toupper(s) \u5C06\u5B57\u7B26\u4E32s\u8F6C\u6362\u4E3A\u5927\u5199\uFF0C\u5E76\u8FD4\u56DE\u65B0\u4E32 sprintf(&quot;fmt&quot;,expr)\u4E0Eprintf\u683C\u5F0F\u76F8\u540C getline \u7528\u6237\u4ECE\u8F93\u5165\u4E2D\u8BFB\u53D6\u53E6\u4E00\u884C\u3002\u8F93\u5165\u5305\u62EC\u6587\u4EF6\u548C\u7BA1\u9053\u7684\u6570\u636E\u3002\u6210\u529F\u8BFB\u53D6\u4E00\u884C\u8FD4\u56DE1\uFF0C\u8BFB\u5230\u7ED3\u5C3E\u8FD4\u56DE0\uFF0C\u51FA\u9519\u8FD4\u56DE-1\uFF0C\u4E0Eshell\u7F16\u7A0B\u7684read\u51FD\u6570\u7C7B\u4F3C close \u5173\u95ED\u6253\u5F00\u7684\u6587\u4EF6\u548C\u7BA1\u9053 system \u6267\u884C\u4E00\u6761\u7CFB\u7EDF\u547D\u4EE4</p><h2 id="awk\u652F\u6301\u7684\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#awk\u652F\u6301\u7684\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> awk\u652F\u6301\u7684\u8FD0\u7B97\u7B26</h2><ol><li><p>\u7B97\u6570\u8FD0\u7B97</p><ul><li><ul><li><ul><li>/ %(\u53D6\u4F59\u6570\uFF09</li></ul></li></ul></li></ul><h2 id="a-\u5C31\u76F8\u5F53\u4E0E-a-a-1" tabindex="-1"><a class="header-anchor" href="#a-\u5C31\u76F8\u5F53\u4E0E-a-a-1" aria-hidden="true">#</a> ++ a++ \u5C31\u76F8\u5F53\u4E0E a=a+1</h2><h1 id="a-\u5C31\u76F8\u5F53\u4E0E-a-a-12-\u8D4B\u503C\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#a-\u5C31\u76F8\u5F53\u4E0E-a-a-12-\u8D4B\u503C\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> a-- \u5C31\u76F8\u5F53\u4E0E a=a-1 2\uFF09\u8D4B\u503C\u8FD0\u7B97\u7B26</h1><p>+= \u4F8B\u5982\uFF1A a+=b \u5C31\u76F8\u5F53\u4E0E a=a+b -= *= /= %=</p></li><li><p>\u5173\u7CFB\u8FD0\u7B97\u7B26</p><blockquote><p>\u5927\u4E8E = \u5927\u4E8E\u6216\u7B49\u4E8E<br> &lt; &lt;= == \u7B49\u4E8E != \u4E0D\u7B49\u4E8E</p></blockquote></li><li><p>\u903B\u8F91\u8FD0\u7B97\u7B26 \u903B\u8F91\u8FD0\u7B97\u7684\u7ED3\u679C\uFF0C\u53EA\u6709\u4E24\u79CD\uFF1A\u771F \u5047</p><p>\u903B\u8F91\u4E0E &amp;&amp; a &gt;= 60 &amp;&amp; a &lt;= 100 \u7279\u70B9\uFF1A 1\uFF09\u53EA\u6709\u4E24\u4E2A\u90FD\u4E3A\u771F\uFF0C\u7ED3\u679C\u624D\u662F\u771F 2\uFF09\u53EA\u6709\u7B2C1\u4E2A\u4E3A\u771F\uFF0C\u540E\u8BA1\u7B97\u540E\u4E00\u4E2A</p><p>\u903B\u8F91\u6216 || a &gt; 100 || a &lt; 0 \u7279\u70B9\uFF1A 1\uFF09\u53EA\u6709\u67091\u4E2A\u662F\u771F\uFF0C\u7ED3\u679C\u5C31\u4E3A\u771F\uFF01 2\uFF09\u5982\u679C\u524D1\u4E2A\u4E3A\u771F\uFF0C\u90A3\u4E48\u540E1\u4E2A\u5C31\u4E0D\u8BA1\u7B97\uFF01</p></li></ol><h2 id="begin-end" tabindex="-1"><a class="header-anchor" href="#begin-end" aria-hidden="true">#</a> BEGIN END</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># BEGIN{}: \u8BFB\u5165\u7B2C\u4E00\u884C\u6587\u672C\u4E4B\u524D\u6267\u884C\u7684\u8BED\u53E5\uFF0C\u4E00\u822C\u7528\u6765\u521D\u59CB\u5316\u64CD\u4F5C</span>
<span class="token comment"># {}: \u9010\u884C\u5904\u7406</span>
<span class="token comment"># END{}: \u5904\u7406\u5B8C\u6700\u540E\u4E00\u884C\u6587\u672C\u540E\u6267\u884C\uFF0C\u4E00\u822C\u7528\u6765\u5904\u7406\u8F93\u51FA\u7ED3\u679C</span>
<span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token string">&quot;0,1,2,3&quot;</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN{split(&#39;</span><span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">$s</span><span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>&#39;,myarray,<span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> for<span class="token punctuation">(</span>i <span class="token keyword">in</span> myarray<span class="token punctuation">)</span> <span class="token punctuation">{</span>if<span class="token punctuation">(</span>myarray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">)</span> print myarray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span>&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="cat\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#cat\u547D\u4EE4" aria-hidden="true">#</a> cat\u547D\u4EE4</h1><p>cat\u547D\u4EE4\u4E3B\u8981\u6709\u4E09\u5927\u529F\u80FD 1.\u4E00\u6B21\u663E\u793A\u6574\u4E2A\u6587\u4EF6 cat filename 2.\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6 cat &gt; fileName 3.\u5C06\u51E0\u4E2A\u6587\u4EF6\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6 cat file1 file2 &gt; file \u53C2\u6570\uFF1A -n \u6216 \u2013number \u7531 1 \u5F00\u59CB\u5BF9\u6240\u6709\u8F93\u51FA\u7684\u884C\u6570\u7F16\u53F7 -b \u6216 \u2013number-nonblank \u548C -n \u76F8\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u5BF9\u4E8E\u7A7A\u767D\u884C\u4E0D\u7F16\u53F7 -s \u6216 \u2013squeeze-blank \u5F53\u9047\u5230\u6709\u8FDE\u7EED\u4E24\u884C\u4EE5\u4E0A\u7684\u7A7A\u767D\u884C\uFF0C\u5C31\u4EE3\u6362\u4E3A\u4E00\u884C\u7684\u7A7A\u767D\u884C -v \u6216 \u2013show-nonprinting | \u7BA1\u9053 \u7BA1\u9053\u7684\u4F5C\u7528\u662F\u5C06\u5DE6\u8FB9\u547D\u4EE4\u7684\u8F93\u51FA\u4F5C\u4E3A\u53F3\u8FB9\u547D\u4EE4\u7684\u8F93\u5165 awk \u547D\u4EE4 awk \u662F\u884C\u5904\u7406\u5668\uFF0C\u4F18\u70B9\u662F\u5904\u7406\u5E9E\u5927\u6587\u4EF6\u65F6\u4E0D\u4F1A\u51FA\u73B0\u5185\u5B58\u6EA2\u51FA\u6216\u5904\u7406\u7F13\u6162\u7684\u95EE\u9898\uFF0C\u901A\u5E38\u7528\u6765\u683C\u5F0F\u5316\u6587\u672C\u4FE1\u606F\u3002awk\u4F9D\u6B21\u5BF9\u6BCF\u4E00\u884C\u8FDB\u884C\u5904\u7406\uFF0C\u7136\u540E\u8F93\u51FA\u3002 \u547D\u4EE4\u5F62\u5F0F awk [-F|-f|-v] \u2018BEGIN{} //{command1; command2} END{}\u2019 file [-F|-f|-v] \u5927\u53C2\u6570\uFF0C-F\u6307\u5B9A\u5206\u9694\u7B26\uFF0C-f\u8C03\u7528\u811A\u672C\uFF0C-v\u5B9A\u4E49\u53D8\u91CF var=value \u2019 \u2019 \u5F15\u7528\u4EE3\u7801\u5757 BEGIN \u521D\u59CB\u5316\u4EE3\u7801\u5757\uFF0C\u5728\u5BF9\u6BCF\u4E00\u884C\u8FDB\u884C\u5904\u7406\u4E4B\u524D\uFF0C\u521D\u59CB\u5316\u4EE3\u7801\uFF0C\u4E3B\u8981\u662F\u5F15\u7528\u5168\u5C40\u53D8\u91CF\uFF0C\u8BBE\u7F6EFS\u5206\u9694\u7B26 // \u5339\u914D\u4EE3\u7801\u5757\uFF0C\u53EF\u4EE5\u4F7F\u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F {} \u547D\u4EE4\u4EE3\u7801\u5757\uFF0C\u5305\u542B\u4E00\u6761\u6216\u591A\u6761\u547D\u4EE4 ;\u591A\u6761\u547D\u4EE4\u4F7F\u7528\u5206\u53F7\u5206\u9694 END \u7ED3\u5C3E\u4EE3\u7801\u5757\uFF0C\u5BF9\u6BCF\u4E00\u884C\u8FDB\u884C\u5904\u7406\u540E\u518D\u6267\u884C\u7684\u4EE3\u7801\u5757\uFF0C\u4E3B\u8981\u8FDB\u884C\u6700\u7EC8\u8BA1\u7B97\u6216\u8F93\u51FA \u7531\u4E8E\u7BC7\u5E45\u9650\u5236\uFF0C\u53EF\u81EA\u884C\u67E5\u627E\u66F4\u8BE6\u7EC6\u7684\u4FE1\u606F\u3002\u8FD9\u91CCawk\u547D\u4EE4\u7684\u4F5C\u7528\u662F\u4ECE\u6587\u4EF6\u4E2D\u6BCF\u4E00\u884C\u53D6\u51FA\u6211\u4EEC\u9700\u8981\u7684\u5B57\u7B26\u4E32</p><h1 id="sort-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#sort-\u547D\u4EE4" aria-hidden="true">#</a> sort \u547D\u4EE4</h1><p>sort\u5C06\u6587\u4EF6\u7684\u6BCF\u4E00\u884C\u4F5C\u4E3A\u4E00\u4E2A\u5355\u4F4D\uFF0C\u76F8\u4E92\u6BD4\u8F83\uFF0C\u6BD4\u8F83\u539F\u5219\u662F\u4ECE\u9996\u5B57\u7B26\u5411\u540E\uFF0C\u4F9D\u6B21\u6309ASCII\u7801\u503C\u8FDB\u884C\u6BD4\u8F83\uFF0C\u6700\u540E\u5C06\u4ED6\u4EEC\u6309\u5347\u5E8F\u8F93\u51FA\u3002 -b\uFF1A\u5FFD\u7565\u6BCF\u884C\u524D\u9762\u5F00\u59CB\u51FA\u7684\u7A7A\u683C\u5B57\u7B26\uFF1B -c\uFF1A\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u5DF2\u7ECF\u6309\u7167\u987A\u5E8F\u6392\u5E8F\uFF1B -d\uFF1A\u6392\u5E8F\u65F6\uFF0C\u5904\u7406\u82F1\u6587\u5B57\u6BCD\u3001\u6570\u5B57\u53CA\u7A7A\u683C\u5B57\u7B26\u5916\uFF0C\u5FFD\u7565\u5176\u4ED6\u7684\u5B57\u7B26\uFF1B -f\uFF1A\u6392\u5E8F\u65F6\uFF0C\u5C06\u5C0F\u5199\u5B57\u6BCD\u89C6\u4E3A\u5927\u5199\u5B57\u6BCD\uFF1B -i\uFF1A\u6392\u5E8F\u65F6\uFF0C\u9664\u4E86040\u81F3176\u4E4B\u95F4\u7684ASCII\u5B57\u7B26\u5916\uFF0C\u5FFD\u7565\u5176\u4ED6\u7684\u5B57\u7B26\uFF1B -m\uFF1A\u5C06\u51E0\u4E2A\u6392\u5E8F\u53F7\u7684\u6587\u4EF6\u8FDB\u884C\u5408\u5E76\uFF1B -M\uFF1A\u5C06\u524D\u97623\u4E2A\u5B57\u6BCD\u4F9D\u7167\u6708\u4EFD\u7684\u7F29\u5199\u8FDB\u884C\u6392\u5E8F\uFF1B -n\uFF1A\u4F9D\u7167\u6570\u503C\u7684\u5927\u5C0F\u6392\u5E8F\uFF1B -o&lt;\u8F93\u51FA\u6587\u4EF6&gt;\uFF1A\u5C06\u6392\u5E8F\u540E\u7684\u7ED3\u679C\u5B58\u5165\u5236\u5B9A\u7684\u6587\u4EF6\uFF1B -r\uFF1A\u4EE5\u76F8\u53CD\u7684\u987A\u5E8F\u6765\u6392\u5E8F\uFF1B -t&lt;\u5206\u9694\u5B57\u7B26&gt;\uFF1A\u6307\u5B9A\u6392\u5E8F\u65F6\u6240\u7528\u7684\u680F\u4F4D\u5206\u9694\u5B57\u7B26\uFF1B</p><h1 id="uniq-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#uniq-\u547D\u4EE4" aria-hidden="true">#</a> uniq \u547D\u4EE4</h1><p>uniq \u547D\u4EE4\u7528\u4E8E\u62A5\u544A\u6216\u5FFD\u7565\u6587\u4EF6\u4E2D\u7684\u91CD\u590D\u884C\uFF0C\u4E00\u822C\u4E0Esort\u547D\u4EE4\u7ED3\u5408\u4F7F\u7528 -c\u6216\u2014\u2014count\uFF1A\u5728\u6BCF\u5217\u65C1\u8FB9\u663E\u793A\u8BE5\u884C\u91CD\u590D\u51FA\u73B0\u7684\u6B21\u6570\uFF1B -d\u6216\u2013repeated\uFF1A\u4EC5\u663E\u793A\u91CD\u590D\u51FA\u73B0\u7684\u884C\u5217\uFF1B -f&lt;\u680F\u4F4D&gt;\u6216\u2013skip-fields=&lt;\u680F\u4F4D&gt;\uFF1A\u5FFD\u7565\u6BD4\u8F83\u6307\u5B9A\u7684\u680F\u4F4D\uFF1B -s&lt;\u5B57\u7B26\u4F4D\u7F6E&gt;\u6216\u2013skip-chars=&lt;\u5B57\u7B26\u4F4D\u7F6E&gt;\uFF1A\u5FFD\u7565\u6BD4\u8F83\u6307\u5B9A\u7684\u5B57\u7B26\uFF1B -u\u6216\u2014\u2014unique\uFF1A\u4EC5\u663E\u793A\u51FA\u4E00\u6B21\u7684\u884C\u5217\uFF1B -w&lt;\u5B57\u7B26\u4F4D\u7F6E&gt;\u6216\u2013check-chars=&lt;\u5B57\u7B26\u4F4D\u7F6E&gt;\uFF1A\u6307\u5B9A\u8981\u6BD4\u8F83\u7684\u5B57\u7B26\u3002</p><h1 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> &gt; \u547D\u4EE4</h1><blockquote><p>\u662F\u5B9A\u5411\u8F93\u51FA\u5230\u6587\u4EF6,\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5C31\u521B\u5EFA\u6587\u4EF6\u3002\u5982\u679C\u6587\u4EF6\u5B58\u5728\uFF0C\u5C31\u5C06\u5176\u6E05\u7A7A \u53E6\u5916 &gt;&gt;\u662F\u5C06\u8F93\u51FA\u5185\u5BB9\u8FFD\u52A0\u5230\u76EE\u6807\u6587\u4EF6\u4E2D\u3002\u5176\u4ED6\u540C&gt;</p></blockquote><pre><code># \u9ED8\u8BA4\u662F\u6267\u884C\u6253\u5370\u5168\u90E8 print $0
	# 1\u4E3A\u771F \u6253\u5370$0
	# 0\u4E3A\u5047 \u4E0D\u6253\u5370

	-F   # \u6539\u53D8FS\u503C(\u5206\u9694\u7B26)
	~    # \u57DF\u5339\u914D
	==   # \u53D8\u91CF\u5339\u914D
	!~   # \u5339\u914D\u4E0D\u5305\u542B
	=    # \u8D4B\u503C
	!=   # \u4E0D\u7B49\u4E8E
	+=   # \u53E0\u52A0
	
	\\b   # \u9000\u683C
	\\f   # \u6362\u9875
	\\n   # \u6362\u884C
	\\r   # \u56DE\u8F66
	\\t   # \u5236\u8868\u7B26Tab
	\\c   # \u4EE3\u8868\u4EFB\u4E00\u5176\u4ED6\u5B57\u7B26
	
	-F&quot;[ ]+|[%]+&quot;  # \u591A\u4E2A\u7A7A\u683C\u6216\u591A\u4E2A%\u4E3A\u5206\u9694\u7B26
	[a-z]+         # \u591A\u4E2A\u5C0F\u5199\u5B57\u6BCD
	[a-Z]          # \u4EE3\u8868\u6240\u6709\u5927\u5C0F\u5199\u5B57\u6BCD(aAbB...zZ)
	[a-z]          # \u4EE3\u8868\u6240\u6709\u5927\u5C0F\u5199\u5B57\u6BCD(ab...z)
	[:alnum:]      # \u5B57\u6BCD\u6570\u5B57\u5B57\u7B26
	[:alpha:]      # \u5B57\u6BCD\u5B57\u7B26
	[:cntrl:]      # \u63A7\u5236\u5B57\u7B26
	[:digit:]      # \u6570\u5B57\u5B57\u7B26
	[:graph:]      # \u975E\u7A7A\u767D\u5B57\u7B26(\u975E\u7A7A\u683C\u3001\u63A7\u5236\u5B57\u7B26\u7B49)
	[:lower:]      # \u5C0F\u5199\u5B57\u6BCD
	[:print:]      # \u4E0E[:graph:]\u76F8\u4F3C\uFF0C\u4F46\u662F\u5305\u542B\u7A7A\u683C\u5B57\u7B26
	[:punct:]      # \u6807\u70B9\u5B57\u7B26
	[:space:]      # \u6240\u6709\u7684\u7A7A\u767D\u5B57\u7B26(\u6362\u884C\u7B26\u3001\u7A7A\u683C\u3001\u5236\u8868\u7B26)
	[:upper:]      # \u5927\u5199\u5B57\u6BCD
	[:xdigit:]     # \u5341\u516D\u8FDB\u5236\u7684\u6570\u5B57(0-9a-fA-F)
	[[:digit:][:lower:]]    # \u6570\u5B57\u548C\u5C0F\u5199\u5B57\u6BCD(\u5360\u4E00\u4E2A\u5B57\u7B26)


	\u5185\u5EFA\u53D8\u91CF{
		$n            # \u5F53\u524D\u8BB0\u5F55\u7684\u7B2C n \u4E2A\u5B57\u6BB5\uFF0C\u5B57\u6BB5\u95F4\u7531 FS \u5206\u9694
		$0            # \u5B8C\u6574\u7684\u8F93\u5165\u8BB0\u5F55
		ARGC          # \u547D\u4EE4\u884C\u53C2\u6570\u7684\u6570\u76EE
		ARGIND        # \u547D\u4EE4\u884C\u4E2D\u5F53\u524D\u6587\u4EF6\u7684\u4F4D\u7F6E ( \u4ECE 0 \u5F00\u59CB\u7B97 ) 
		ARGV          # \u5305\u542B\u547D\u4EE4\u884C\u53C2\u6570\u7684\u6570\u7EC4
		CONVFMT       # \u6570\u5B57\u8F6C\u6362\u683C\u5F0F ( \u9ED8\u8BA4\u503C\u4E3A %.6g)
		ENVIRON       # \u73AF\u5883\u53D8\u91CF\u5173\u8054\u6570\u7EC4
		ERRNO         # \u6700\u540E\u4E00\u4E2A\u7CFB\u7EDF\u9519\u8BEF\u7684\u63CF\u8FF0
		FIELDWIDTHS   # \u5B57\u6BB5\u5BBD\u5EA6\u5217\u8868 ( \u7528\u7A7A\u683C\u952E\u5206\u9694 ) 
		FILENAME      # \u5F53\u524D\u6587\u4EF6\u540D
		FNR           # \u540C NR \uFF0C\u4F46\u76F8\u5BF9\u4E8E\u5F53\u524D\u6587\u4EF6
		FS            # \u5B57\u6BB5\u5206\u9694\u7B26 ( \u9ED8\u8BA4\u662F\u4EFB\u4F55\u7A7A\u683C ) 
		IGNORECASE    # \u5982\u679C\u4E3A\u771F\uFF08\u5373\u975E 0 \u503C\uFF09\uFF0C\u5219\u8FDB\u884C\u5FFD\u7565\u5927\u5C0F\u5199\u7684\u5339\u914D
		NF            # \u5F53\u524D\u8BB0\u5F55\u4E2D\u7684\u5B57\u6BB5\u6570(\u5217)
		NR            # \u5F53\u524D\u884C\u6570
		OFMT          # \u6570\u5B57\u7684\u8F93\u51FA\u683C\u5F0F ( \u9ED8\u8BA4\u503C\u662F %.6g) 
		OFS           # \u8F93\u51FA\u5B57\u6BB5\u5206\u9694\u7B26 ( \u9ED8\u8BA4\u503C\u662F\u4E00\u4E2A\u7A7A\u683C ) 
		ORS           # \u8F93\u51FA\u8BB0\u5F55\u5206\u9694\u7B26 ( \u9ED8\u8BA4\u503C\u662F\u4E00\u4E2A\u6362\u884C\u7B26 ) 
		RLENGTH       # \u7531 match \u51FD\u6570\u6240\u5339\u914D\u7684\u5B57\u7B26\u4E32\u7684\u957F\u5EA6
		RS            # \u8BB0\u5F55\u5206\u9694\u7B26 ( \u9ED8\u8BA4\u662F\u4E00\u4E2A\u6362\u884C\u7B26 ) 
		RSTART        # \u7531 match \u51FD\u6570\u6240\u5339\u914D\u7684\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u4F4D\u7F6E
		SUBSEP        # \u6570\u7EC4\u4E0B\u6807\u5206\u9694\u7B26 ( \u9ED8\u8BA4\u503C\u662F /034) 
		BEGIN         # \u5148\u5904\u7406(\u53EF\u4E0D\u52A0\u6587\u4EF6\u53C2\u6570)
		END           # \u7ED3\u675F\u65F6\u5904\u7406
	}

	\u5185\u7F6E\u51FD\u6570{
		gsub(r,s)          # \u5728\u6574\u4E2A$0\u4E2D\u7528s\u66FF\u4EE3r   \u76F8\u5F53\u4E8E sed &#39;s///g&#39;
		gsub(r,s,t)        # \u5728\u6574\u4E2At\u4E2D\u7528s\u66FF\u4EE3r 
		index(s,t)         # \u8FD4\u56DEs\u4E2D\u5B57\u7B26\u4E32t\u7684\u7B2C\u4E00\u4F4D\u7F6E 
		length(s)          # \u8FD4\u56DEs\u957F\u5EA6 
		match(s,r)         # \u6D4B\u8BD5s\u662F\u5426\u5305\u542B\u5339\u914Dr\u7684\u5B57\u7B26\u4E32 
		split(s,a,fs)      # \u5728fs\u4E0A\u5C06s\u5206\u6210\u5E8F\u5217a 
		sprint(fmt,exp)    # \u8FD4\u56DE\u7ECFfmt\u683C\u5F0F\u5316\u540E\u7684exp 
		sub(r,s)           # \u7528$0\u4E2D\u6700\u5DE6\u8FB9\u6700\u957F\u7684\u5B50\u4E32\u4EE3\u66FFs   \u76F8\u5F53\u4E8E sed &#39;s///&#39;
		substr(s,p)        # \u8FD4\u56DE\u5B57\u7B26\u4E32s\u4E2D\u4ECEp\u5F00\u59CB\u7684\u540E\u7F00\u90E8\u5206 
		substr(s,p,n)      # \u8FD4\u56DE\u5B57\u7B26\u4E32s\u4E2D\u4ECEp\u5F00\u59CB\u957F\u5EA6\u4E3An\u7684\u540E\u7F00\u90E8\u5206 
	}

	awk\u5224\u65AD{
		awk &#39;{print ($1&gt;$2)?&quot;\u7B2C\u4E00\u6392&quot;$1:&quot;\u7B2C\u4E8C\u6392&quot;$2}&#39;      # \u6761\u4EF6\u5224\u65AD \u62EC\u53F7\u4EE3\u8868if\u8BED\u53E5\u5224\u65AD &quot;?&quot;\u4EE3\u8868then &quot;:&quot;\u4EE3\u8868else
		awk &#39;{max=($1&gt;$2)? $1 : $2; print max}&#39;          # \u6761\u4EF6\u5224\u65AD \u5982\u679C$1\u5927\u4E8E$2,max\u503C\u4E3A\u4E3A$1,\u5426\u5219\u4E3A$2
		awk &#39;{if ( $6 &gt; 50) print $1 &quot; Too high&quot; ;\\
		else print &quot;Range is OK&quot;}&#39; file
		awk &#39;{if ( $6 &gt; 50) { count++;print $3 } \\
		else { x+5; print $2 } }&#39; file
	}

	awk\u5FAA\u73AF{
		awk &#39;{i = 1; while ( i &lt;= NF ) { print NF, $i ; i++ } }&#39; file
		awk &#39;{ for ( i = 1; i &lt;= NF; i++ ) print NF,$i }&#39; file
	}
	
	awk &#39;/Tom/&#39; file               # \u6253\u5370\u5339\u914D\u5230\u5F97\u884C
	awk &#39;/^Tom/{print $1}&#39;         # \u5339\u914DTom\u5F00\u5934\u7684\u884C \u6253\u5370\u7B2C\u4E00\u4E2A\u5B57\u6BB5
	awk &#39;$1 !~ /ly$/&#39;              # \u663E\u793A\u6240\u6709\u7B2C\u4E00\u4E2A\u5B57\u6BB5\u4E0D\u662F\u4EE5ly\u7ED3\u5C3E\u7684\u884C
	awk &#39;$3 &lt;40&#39;                   # \u5982\u679C\u7B2C\u4E09\u4E2A\u5B57\u6BB5\u503C\u5C0F\u4E8E40\u624D\u6253\u5370
	awk &#39;$4==90{print $5}&#39;         # \u53D6\u51FA\u7B2C\u56DB\u5217\u7B49\u4E8E90\u7684\u7B2C\u4E94\u5217
	awk &#39;/^(no|so)/&#39; test          # \u6253\u5370\u6240\u6709\u4EE5\u6A21\u5F0Fno\u6216so\u5F00\u5934\u7684\u884C
	awk &#39;$3 * $4 &gt; 500&#39;            # \u7B97\u672F\u8FD0\u7B97(\u7B2C\u4E09\u4E2A\u5B57\u6BB5\u548C\u7B2C\u56DB\u4E2A\u5B57\u6BB5\u4E58\u79EF\u5927\u4E8E500\u5219\u663E\u793A)
	awk &#39;{print NR&quot; &quot;$0}&#39;          # \u52A0\u884C\u53F7
	awk &#39;/tom/,/suz/&#39;              # \u6253\u5370tom\u5230suz\u4E4B\u95F4\u7684\u884C
	awk &#39;{a+=$1}END{print a}&#39;      # \u5217\u6C42\u548C
	awk &#39;sum+=$1{print sum}&#39;       # \u5C06$1\u7684\u503C\u53E0\u52A0\u540E\u8D4B\u7ED9sum
	awk &#39;{a+=$1}END{print a/NR}&#39;   # \u5217\u6C42\u5E73\u5747\u503C
	awk -F&#39;[ :\\t]&#39; &#39;{print $1,$2}&#39;           # \u4EE5\u7A7A\u683C\u3001:\u3001\u5236\u8868\u7B26Tab\u4E3A\u5206\u9694\u7B26
	awk &#39;{print &quot;&#39;&quot;$a&quot;&#39;&quot;,&quot;&#39;&quot;$b&quot;&#39;&quot;}&#39;          # \u5F15\u7528\u5916\u90E8\u53D8\u91CF
	awk &#39;{if(NR==52){print;exit}}&#39;           # \u663E\u793A\u7B2C52\u884C
	awk &#39;/\u5173\u952E\u5B57/{a=NR+2}a==NR {print}&#39;      # \u53D6\u5173\u952E\u5B57\u4E0B\u7B2C\u51E0\u884C
	awk &#39;gsub(/liu/,&quot;aaaa&quot;,$1){print $0}&#39;    # \u53EA\u6253\u5370\u5339\u914D\u66FF\u6362\u540E\u7684\u884C
	ll | awk -F&#39;[ ]+|[ ][ ]+&#39; &#39;/^$/{print $8}&#39;             # \u63D0\u53D6\u65F6\u95F4,\u7A7A\u683C\u4E0D\u56FA\u5B9A
	awk &#39;{$1=&quot;&quot;;$2=&quot;&quot;;$3=&quot;&quot;;print}&#39;                        # \u53BB\u6389\u524D\u4E09\u5217
	echo aada:aba|awk &#39;/d/||/b/{print}&#39;                    # \u5339\u914D\u4E24\u5185\u5BB9\u4E4B\u4E00
	echo aada:abaa|awk -F: &#39;$1~/d/||$2~/b/{print}&#39;         # \u5173\u952E\u5217\u5339\u914D\u4E24\u5185\u5BB9\u4E4B\u4E00
	echo Ma asdas|awk &#39;$1~/^[a-Z][a-Z]$/{print }&#39;          # \u7B2C\u4E00\u4E2A\u57DF\u5339\u914D\u6B63\u5219
	echo aada:aaba|awk &#39;/d/&amp;&amp;/b/{print}&#39;                   # \u540C\u65F6\u5339\u914D\u4E24\u6761\u4EF6
	awk &#39;length($1)==&quot;4&quot;{print $1}&#39;                        # \u5B57\u7B26\u4E32\u4F4D\u6570
	awk &#39;{if($2&gt;3){system (&quot;touch &quot;$1)}}&#39;                  # \u6267\u884C\u7CFB\u7EDF\u547D\u4EE4
	awk &#39;{sub(/Mac/,&quot;Macintosh&quot;,$0);print}&#39;                # \u7528Macintosh\u66FF\u6362Mac
	awk &#39;{gsub(/Mac/,&quot;MacIntosh&quot;,$1); print}&#39;              # \u7B2C\u4E00\u4E2A\u57DF\u5185\u7528Macintosh\u66FF\u6362Mac
	awk -F &#39;&#39; &#39;{ for(i=1;i&lt;NF+1;i++)a+=$i  ;print a}&#39;      # \u591A\u4F4D\u6570\u7B97\u51FA\u5176\u6BCF\u4F4D\u6570\u7684\u603B\u548C.\u6BD4\u5982 1234\uFF0C \u5F97\u5230 10
	awk &#39;{ i=$1%10;if ( i == 0 ) {print i}}&#39;               # \u5224\u65AD$1\u662F\u5426\u6574\u9664(awk\u4E2D\u5B9A\u4E49\u53D8\u91CF\u5F15\u7528\u65F6\u4E0D\u80FD\u5E26 $ )
	awk &#39;BEGIN{a=0}{if ($1&gt;a) a=$1 fi}END{print a}&#39;        # \u5217\u6C42\u6700\u5927\u503C  \u8BBE\u5B9A\u4E00\u4E2A\u53D8\u91CF\u5F00\u59CB\u4E3A0\uFF0C\u9047\u5230\u6BD4\u8BE5\u6570\u5927\u7684\u503C\uFF0C\u5C31\u8D4B\u503C\u7ED9\u8BE5\u53D8\u91CF\uFF0C\u76F4\u5230\u7ED3\u675F
	awk &#39;BEGIN{a=11111}{if ($1&lt;a) a=$1 fi}END{print a}&#39;    # \u6C42\u6700\u5C0F\u503C
	awk &#39;{if(A)print;A=0}/regexp/{A=1}&#39;                    # \u67E5\u627E\u5B57\u7B26\u4E32\u5E76\u5C06\u5339\u914D\u884C\u7684\u4E0B\u4E00\u884C\u663E\u793A\u51FA\u6765\uFF0C\u4F46\u5E76\u4E0D\u663E\u793A\u5339\u914D\u884C
	awk &#39;/regexp/{print A}{A=$0}&#39;                          # \u67E5\u627E\u5B57\u7B26\u4E32\u5E76\u5C06\u5339\u914D\u884C\u7684\u4E0A\u4E00\u884C\u663E\u793A\u51FA\u6765\uFF0C\u4F46\u5E76\u4E0D\u663E\u793A\u5339\u914D\u884C
	awk &#39;{if(!/mysql/)gsub(/1/,&quot;a&quot;);print $0}&#39;             # \u5C061\u66FF\u6362\u6210a\uFF0C\u5E76\u4E14\u53EA\u5728\u884C\u4E2D\u672A\u51FA\u73B0\u5B57\u4E32mysql\u7684\u60C5\u51B5\u4E0B\u66FF\u6362
	awk &#39;BEGIN{srand();fr=int(100*rand());print fr;}&#39;      # \u83B7\u53D6\u968F\u673A\u6570
	awk &#39;{if(NR==3)F=1}{if(F){i++;if(i%7==1)print}}&#39;       # \u4ECE\u7B2C3\u884C\u5F00\u59CB\uFF0C\u6BCF7\u884C\u663E\u793A\u4E00\u6B21
	awk &#39;{if(NF&lt;1){print i;i=0} else {i++;print $0}}&#39;      # \u663E\u793A\u7A7A\u884C\u5206\u5272\u5404\u6BB5\u7684\u884C\u6570
	echo +null:null  |awk -F: &#39;$1!~&quot;^+&quot;&amp;&amp;$2!=&quot;null&quot;{print $0}&#39;       # \u5173\u952E\u5217\u540C\u65F6\u5339\u914D
	awk -v RS=@ &#39;NF{for(i=1;i&lt;=NF;i++)if($i) printf $i;print &quot;&quot;}&#39;    # \u6307\u5B9A\u8BB0\u5F55\u5206\u9694\u7B26
	awk &#39;{b[$1]=b[$1]$2}END{for(i in b){print i,b[i]}}&#39;              # \u5217\u53E0\u52A0
	awk &#39;{ i=($1%100);if ( $i &gt;= 0 ) {print $0,$i}}&#39;                 # \u6C42\u4F59\u6570
	awk &#39;{b=a;a=$1; if(NR&gt;1){print a-b}}&#39;                            # \u5F53\u524D\u884C\u51CF\u4E0A\u4E00\u884C
	awk &#39;{a[NR]=$1}END{for (i=1;i&lt;=NR;i++){print a[i]-a[i-1]}}&#39;      # \u5F53\u524D\u884C\u51CF\u4E0A\u4E00\u884C
	awk -F: &#39;{name[x++]=$1};END{for(i=0;i&lt;NR;i++)print i,name[i]}&#39;   # END\u53EA\u6253\u5370\u6700\u540E\u7684\u7ED3\u679C,END\u5757\u91CC\u9762\u5904\u7406\u6570\u7EC4\u5185\u5BB9
	awk &#39;{sum2+=$2;count=count+1}END{print sum2,sum2/count}&#39;         # $2\u7684\u603B\u548C  $2\u603B\u548C\u9664\u4E2A\u6570(\u5E73\u5747\u503C)
	awk &#39;BEGIN{ &quot;date&quot; | getline d; split(d,mon) ; print mon[2]}&#39; file        # \u5C06date\u503C\u8D4B\u7ED9d\uFF0C\u5E76\u5C06d\u8BBE\u7F6E\u4E3A\u6570\u7EC4mon\uFF0C\u6253\u5370mon\u6570\u7EC4\u4E2D\u7B2C2\u4E2A\u5143\u7D20
	awk &#39;BEGIN{info=&quot;this is a test2010test!&quot;;print substr(info,4,10);}&#39;      # \u622A\u53D6\u5B57\u7B26\u4E32(substr\u4F7F\u7528)
	awk &#39;BEGIN{info=&quot;this is a test2010test!&quot;;print index(info,&quot;test&quot;)?&quot;ok&quot;:&quot;no found&quot;;}&#39;      # \u5339\u914D\u5B57\u7B26\u4E32(index\u4F7F\u7528)
	awk &#39;BEGIN{info=&quot;this is a test2010test!&quot;;print match(info,/[0-9]+/)?&quot;ok&quot;:&quot;no found&quot;;}&#39;    # \u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u67E5\u627E(match\u4F7F\u7528)
    awk &#39;{match($0,/.+is([^,]+).+not(.+)/,a);print a[1],a[2]}&#39; test # \u63D0\u53D6is\u540E\u9762\u7684\u7B2C\u4E00\u4E2A\u5355\u8BCD\uFF0C\u548Cnot \u540E\u9762\u7684\u7B2C\u4E00\u4E2A\u5355\u8BCD\uFF0C
	awk &#39;BEGIN{info=&quot;this is a test&quot;;split(info,tA,&quot; &quot;);print length(tA);for(k in tA){print k,tA[k];}}&#39;    # \u5B57\u7B26\u4E32\u5206\u5272(split\u4F7F\u7528)
	awk &#39;{for(i=1;i&lt;=4;i++)printf $i&quot;&quot;FS; for(y=10;y&lt;=13;y++)  printf $y&quot;&quot;FS;print &quot;&quot;}&#39;        # \u6253\u5370\u524D4\u5217\u548C\u540E4\u5217
	awk &#39;BEGIN{for(n=0;n++&lt;9;){for(i=0;i++&lt;n;)printf i&quot;x&quot;n&quot;=&quot;i*n&quot; &quot;;print &quot;&quot;}}&#39;                # \u4E58\u6CD5\u53E3\u8BC0
	awk &#39;{if (system (&quot;grep &quot;$2&quot; tmp/* &gt; /dev/null 2&gt;&amp;1&quot;) == 0 ) {print $1,&quot;Y&quot;} else {print $1,&quot;N&quot;} }&#39; a            # \u6267\u884C\u7CFB\u7EDF\u547D\u4EE4\u5224\u65AD\u8FD4\u56DE\u72B6\u6001
	awk  &#39;{for(i=1;i&lt;=NF;i++) a[i,NR]=$i}END{for(i=1;i&lt;=NF;i++) {for(j=1;j&lt;=NR;j++) printf a[i,j] &quot; &quot;;print &quot;&quot;}}&#39;   # \u5C06\u591A\u884C\u8F6C\u591A\u5217
	awk &#39;BEGIN{printf &quot;what is your name?&quot;;getline name &lt; &quot;/dev/tty&quot; } $1 ~name {print &quot;FOUND&quot; name &quot; on line &quot;, NR &quot;.&quot;} END{print &quot;see you,&quot; name &quot;.&quot;}&#39; file  # \u4E24\u6587\u4EF6\u5339\u914D
	cat 1.txt|awk -F&quot; # &quot; &#39;{print &quot;insert into user (user,password,email)values(&quot;&quot;&#39;\\&#39;&#39;&quot;$1&quot;&#39;\\&#39;\\,&#39;&quot;&quot;&#39;\\&#39;&#39;&quot;$2&quot;&#39;\\&#39;\\,&#39;&quot;&quot;&#39;\\&#39;&#39;&quot;$3&quot;&#39;\\&#39;\\)\\;&#39;&quot;}&#39; &gt;&gt;insert_1.txt     # \u5904\u7406sql\u8BED\u53E5
	
	\u53D6\u672C\u673AIP{
	/sbin/ifconfig |awk -v RS=&quot;Bcast:&quot; &#39;{print $NF}&#39;|awk -F: &#39;/addr/{print $2}&#39;
	/sbin/ifconfig |awk -v RS=&#39;inet addr:&#39; &#39;$1!=&quot;eth0&quot;&amp;&amp;$1!=&quot;127.0.0.1&quot;{print $1}&#39;|awk &#39;{printf&quot;%s|&quot;,$0}&#39;
	/sbin/ifconfig |awk  &#39;{printf(&quot;line %d,%s\\n&quot;,NR,$0)}&#39;         # \u6307\u5B9A\u7C7B\u578B(%d\u6570\u5B57,%s\u5B57\u7B26)
	}

	\u67E5\u770B\u78C1\u76D8\u7A7A\u95F4{
		df -h|awk -F&quot;[ ]+|%&quot; &#39;$5&gt;14{print $5}&#39;
		df -h|awk &#39;NR!=1{if ( NF == 6 ) {print $5} else if ( NF == 5) {print $4} }&#39; 
		df -h|awk &#39;NR!=1 &amp;&amp; /%/{sub(/%/,&quot;&quot;);print $(NF-1)}&#39;
		df -h|sed &#39;1d;/ /!N;s/\\n//;s/ \\+/ /;&#39;    #\u5C06\u78C1\u76D8\u5206\u533A\u6574\u7406\u6210\u4E00\u884C   \u53EF\u76F4\u63A5\u7528 df -P
	}

	\u6392\u5217\u6253\u5370{
		awk &#39;END{printf &quot;%-10s%-10s\\n%-10s%-10s\\n%-10s%-10s\\n&quot;,&quot;server&quot;,&quot;name&quot;,&quot;123&quot;,&quot;12345&quot;,&quot;234&quot;,&quot;1234&quot;}&#39; txt
		awk &#39;BEGIN{printf &quot;|%-10s|%-10s|\\n|%-10s|%-10s|\\n|%-10s|%-10s|\\n&quot;,&quot;server&quot;,&quot;name&quot;,&quot;123&quot;,&quot;12345&quot;,&quot;234&quot;,&quot;1234&quot;}&#39;
		awk &#39;BEGIN{
		print &quot;   *** \u5F00 \u59CB ***   &quot;;
		print &quot;+-----------------+&quot;;
		printf &quot;|%-5s|%-5s|%-5s|\\n&quot;,&quot;id&quot;,&quot;name&quot;,&quot;ip&quot;;
		}
		$1!=1 &amp;&amp; NF==4{printf &quot;|%-5s|%-5s|%-5s|\\n&quot;,$1,$2,$3&quot; &quot;$11}
		END{
		print &quot;+-----------------+&quot;;
		print &quot;   *** \u7ED3 \u675F ***   &quot;
		}&#39; txt
	}

	\u8001\u7537\u5B69awk\u7ECF\u5178\u9898{
		\u5206\u6790\u56FE\u7247\u670D\u52A1\u65E5\u5FD7\uFF0C\u628A\u65E5\u5FD7\uFF08\u6BCF\u4E2A\u56FE\u7247\u8BBF\u95EE\u6B21\u6570*\u56FE\u7247\u5927\u5C0F\u7684\u603B\u548C\uFF09\u6392\u884C\uFF0C\u4E5F\u5C31\u662F\u8BA1\u7B97\u6BCF\u4E2Aurl\u7684\u603B\u8BBF\u95EE\u5927\u5C0F
		\u8BF4\u660E\uFF1A\u672C\u9898\u751F\u4EA7\u73AF\u5883\u5E94\u7528\uFF1A\u8FD9\u4E2A\u529F\u80FD\u53EF\u4EE5\u7528\u4E8EIDC\u7F51\u7AD9\u6D41\u91CF\u5E26\u5BBD\u5F88\u9AD8\uFF0C\u7136\u540E\u901A\u8FC7\u5206\u6790\u670D\u52A1\u5668\u65E5\u5FD7\u54EA\u4E9B\u5143\u7D20\u5360\u7528\u6D41\u91CF\u8FC7\u5927\uFF0C\u8FDB\u800C\u8FDB\u884C\u4F18\u5316\u6216\u88C1\u526A\u8BE5\u56FE\u7247\uFF0C\u538B\u7F29js\u7B49\u63AA\u65BD\u3002
		\u672C\u9898\u9700\u8981\u8F93\u51FA\u4E09\u4E2A\u6307\u6807\uFF1A \u3010\u88AB\u8BBF\u95EE\u6B21\u6570\u3011    \u3010\u8BBF\u95EE\u6B21\u6570*\u5355\u4E2A\u88AB\u8BBF\u95EE\u6587\u4EF6\u5927\u5C0F\u3011   \u3010\u6587\u4EF6\u540D\uFF08\u5E26URL\uFF09\u3011
		\u6D4B\u8BD5\u6570\u636E
		59.33.26.105 - - [08/Dec/2010:15:43:56 +0800] &quot;GET /static/images/photos/2.jpg HTTP/1.1&quot; 200 11299 

		awk &#39;{array_num[$7]++;array_size[$7]+=$10}END{for(i in array_num) {print array_num[i]&quot; &quot;array_size[i]&quot; &quot;i}}&#39;
	}

	awk\u7EC3\u4E60\u9898{

		wang     4
		cui      3
		zhao     4
		liu      3
		liu      3
		chang    5
		li       2

		1 \u901A\u8FC7\u7B2C\u4E00\u4E2A\u57DF\u627E\u51FA\u5B57\u7B26\u957F\u5EA6\u4E3A4\u7684
		2 \u5F53\u7B2C\u4E8C\u5217\u503C\u5927\u4E8E3\u65F6\uFF0C\u521B\u5EFA\u7A7A\u767D\u6587\u4EF6\uFF0C\u6587\u4EF6\u540D\u4E3A\u5F53\u524D\u884C\u7B2C\u4E00\u4E2A\u57DF$1 (touch $1)
		3 \u5C06\u6587\u6863\u4E2D liu \u5B57\u7B26\u4E32\u66FF\u6362\u4E3A hong
		4 \u6C42\u7B2C\u4E8C\u5217\u7684\u548C
		5 \u6C42\u7B2C\u4E8C\u5217\u7684\u5E73\u5747\u503C
		6 \u6C42\u7B2C\u4E8C\u5217\u4E2D\u7684\u6700\u5927\u503C
		7 \u5C06\u7B2C\u4E00\u5217\u8FC7\u6EE4\u91CD\u590D\u540E\uFF0C\u5217\u51FA\u6BCF\u4E00\u9879\uFF0C\u6BCF\u4E00\u9879\u7684\u51FA\u73B0\u6B21\u6570\uFF0C\u6BCF\u4E00\u9879\u7684\u5927\u5C0F\u603B\u548C

		1\u3001\u5B57\u7B26\u4E32\u957F\u5EA6
			awk &#39;length($1)==&quot;4&quot;{print $1}&#39;
		2\u3001\u6267\u884C\u7CFB\u7EDF\u547D\u4EE4
			awk &#39;{if($2&gt;3){system (&quot;touch &quot;$1)}}&#39;
		3\u3001gsub(/r/,&quot;s&quot;,\u57DF) \u5728\u6307\u5B9A\u57DF(\u9ED8\u8BA4$0)\u4E2D\u7528s\u66FF\u4EE3r  (sed &#39;s///g&#39;)
			awk &#39;{gsub(/liu/,&quot;hong&quot;,$1);print $0}&#39; a.txt
		4\u3001\u5217\u6C42\u548C
			awk &#39;{a+=$2}END{print a}&#39;
		5\u3001\u5217\u6C42\u5E73\u5747\u503C
			awk &#39;{a+=$2}END{print a/NR}&#39;
			awk &#39;{a+=$2;b++}END{print a,a/b}&#39; 
		6\u3001\u5217\u6C42\u6700\u5927\u503C
			awk &#39;BEGIN{a=0}{if($2&gt;a) a=$2 }END{print a}&#39;
		7\u3001\u5C06\u7B2C\u4E00\u5217\u8FC7\u6EE4\u91CD\u590D\u5217\u51FA\u6BCF\u4E00\u9879\uFF0C\u6BCF\u4E00\u9879\u7684\u51FA\u73B0\u6B21\u6570\uFF0C\u6BCF\u4E00\u9879\u7684\u5927\u5C0F\u603B\u548C
			awk &#39;{a[$1]++;b[$1]+=$2}END{for(i in a){print i,a[i],b[i]}}&#39;
	}
</code></pre>`,87),p=[e];function o(l,r){return t(),s("div",null,p)}const c=n(i,[["render",o],["__file","awk.html.vue"]]);export{c as default};
