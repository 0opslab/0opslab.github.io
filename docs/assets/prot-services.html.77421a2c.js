import{_ as n,o as i,c as e,e as s}from"./app.a667bd71.js";const l={},d=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>21 ftp 
22 SSH 
23 Telnet 
25 SMTP 
53 DNS 
69 TFTP 
80 web 
80-89 web 
110 POP3 
135 RPC 
139 NETBIOS 
143 IMAP 
161 SNMP 
389 LDAP 
443 SSL\u5FC3\u810F\u6EF4\u8840\u4EE5\u53CA\u4E00\u4E9Bweb\u6F0F\u6D1E\u6D4B\u8BD5 
445 SMB 
512,513,514 Rexec 
873 Rsync\u672A\u6388\u6743 
1025,111 NFS 
1080 socks 
1158 ORACLE EMCTL2601,2604 zebra\u8DEF\u7531\uFF0C\u9ED8\u8BA4\u5BC6\u7801zebra\u6848 
1433 MSSQL (\u66B4\u529B\u7834\u89E3) 
1521 Oracle:(iSqlPlus Port:5560,7778) 
2082/2083 cpanel\u4E3B\u673A\u7BA1\u7406\u7CFB\u7EDF\u767B\u9646 \uFF08\u56FD\u5916\u7528\u8F83\u591A\uFF09 
2222 DA\u865A\u62DF\u4E3B\u673A\u7BA1\u7406\u7CFB\u7EDF\u767B\u9646 \uFF08\u56FD\u5916\u7528\u8F83\u591A\uFF09 
2601,2604 zebra\u8DEF\u7531\uFF0C\u9ED8\u8BA4\u5BC6\u7801zebra 
3128 squid\u4EE3\u7406\u9ED8\u8BA4\u7AEF\u53E3\uFF0C\u5982\u679C\u6CA1\u8BBE\u7F6E\u53E3\u4EE4\u5F88\u53EF\u80FD\u5C31\u76F4\u63A5\u6F2B\u6E38\u5185\u7F51\u4E86 
3306 MySQL \uFF08\u66B4\u529B\u7834\u89E3\uFF09 
3312/3311 kangle\u4E3B\u673A\u7BA1\u7406\u7CFB\u7EDF\u767B\u9646 
3389 \u8FDC\u7A0B\u684C\u9762 
3690 svn 
4440 rundeck \u53C2\u8003WooYun: \u501F\u7528\u65B0\u6D6A\u67D0\u670D\u52A1\u6210\u529F\u6F2B\u6E38\u65B0\u6D6A\u5185\u7F51 
4848 GlassFish web\u4E2D\u95F4\u4EF6 \u5F31\u53E3\u4EE4:admin/adminadmin 
5432 PostgreSQL 
5900 vnc 
5984 CouchDB http://xxx:5984/_utils/ 
6082 varnish \u53C2\u8003WooYun: Varnish HTTP accelerator CLI \u672A\u6388\u6743\u8BBF\u95EE\u6613\u5BFC\u81F4\u7F51\u7AD9\u88AB\u76F4\u63A5\u7BE1\u6539\u6216\u8005\u4F5C\u4E3A\u4EE3\u7406\u8FDB\u5165\u5185\u7F51 
6379 redis\u672A\u6388\u6743 
7001,7002 WebLogic\u9ED8\u8BA4\u5F31\u53E3\u4EE4\uFF0C\u53CD\u5E8F\u5217 
7778 Kloxo\u4E3B\u673A\u63A7\u5236\u9762\u677F\u767B\u5F55 
8000-9090 \u90FD\u662F\u4E00\u4E9B\u5E38\u89C1\u7684web\u7AEF\u53E3\uFF0C\u6709\u4E9B\u8FD0\u7EF4\u559C\u6B22\u628A\u7BA1\u7406\u540E\u53F0\u5F00\u5728\u8FD9\u4E9B\u975E80\u7684\u7AEF\u53E3\u4E0A 
8080 tomcat/WDCd/ \u4E3B\u673A\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u9ED8\u8BA4\u5F31\u53E3\u4EE4 
8080,8089,9090 JBOSS 
8081 Symantec AV/Filter for MSE 
8083 Vestacp\u4E3B\u673A\u7BA1\u7406\u7CFB\u7EDF \uFF08\u56FD\u5916\u7528\u8F83\u591A\uFF09 
8649 ganglia 
8888 amh/LuManager \u4E3B\u673A\u7BA1\u7406\u7CFB\u7EDF\u9ED8\u8BA4\u7AEF\u53E3 
9000 fcgi fcig php\u6267\u884C 
9043 websphere[web\u4E2D\u95F4\u4EF6] \u5F31\u53E3\u4EE4: admin/admin websphere/ websphere ststem/manager 
9200,9300 elasticsearch \u53C2\u8003WooYun: \u591A\u73A9\u67D0\u670D\u52A1\u5668ElasticSearch\u547D\u4EE4\u6267\u884C\u6F0F\u6D1E 
10000 Virtualmin/Webmin \u670D\u52A1\u5668\u865A\u62DF\u4E3B\u673A\u7BA1\u7406\u7CFB\u7EDF 
11211 memcache\u672A\u6388\u6743\u8BBF\u95EE 
27017,27018 Mongodb\u672A\u6388\u6743\u8BBF\u95EE 
28017 mongodb\u7EDF\u8BA1\u9875\u9762 
50000 SAP\u547D\u4EE4\u6267\u884C 
50060 hadoop 
50070,50030 hadoop\u9ED8\u8BA4\u7AEF\u53E3\u672A\u6388\u6743\u8BBF\u95EE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=[d];function a(c,r){return i(),e("div",null,v)}const u=n(l,[["render",a],["__file","prot-services.html.vue"]]);export{u as default};
