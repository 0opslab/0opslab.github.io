import{_ as a,o as e,c as t,e as d}from"./app.a667bd71.js";const o={},r=d('<p>export ORACLE_SID=XE export NLS_LANG=american_america.AL32UTF8</p><p>#\u6570\u636E\u5E93\u7ED3\u6784\u63A7\u5236\u6587\u4EF6 CTL_FILE=/Vminfo/Vmdata.ctl #sqlload\u8F93\u51FA\u65E5\u5FD7\u6587\u4EF6 LOG_FILE=/Vminfo/sqlload.log #\u6570\u636E\u6587\u4EF6 DATA_FILE=/Vminfo/Vmdata${ddate}.txt</p><p>sqlldr ARADMIN/clmAdm1n@10.200.108.100/XE control=${CTL_FILE} data=${DATA_FILE} log=${LOG_FILE}</p><h1 id="clean-log-files" tabindex="-1"><a class="header-anchor" href="#clean-log-files" aria-hidden="true">#</a> Clean log files</h1><h1 id="clear-yesterday-s-data" tabindex="-1"><a class="header-anchor" href="#clear-yesterday-s-data" aria-hidden="true">#</a> clear yesterday&#39;s data</h1><p>rm -f /Vminfo/Vmdata${yydate}.txt /Vminfo/Vmdata${ydate}.bad /Vminfo/Export66VMinfo${yydate}.csv /Vminfo/Export32VMinfo${yydate}.csv /Vminfo/ExportAllVMinfo${yydate}.csv clm-db1:/Vminfo #</p><h2 id="\u63A7\u5236\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u6587\u4EF6" aria-hidden="true">#</a> \u63A7\u5236\u6587\u4EF6</h2><p>LOAD DATA INFILE &#39;result/stat-20100821-detail.txt&#39; replace into table LOGDETAILS_20100821 -- insert append replace FIELDS TERMINATED BY &#39; |+-s| &#39; --\u5B57\u6BB5\u5206\u5272\u7B26\u53F7 TRAILING NULLCOLS --\u5141\u8BB8\u5339\u914D\u4E0D\u5230\u7684\u5B57\u6BB5 ( ID RECNUM , --RECNUM\u5C5E\u6027\u6765\u5B9E\u73B0id\u7684\u81EA\u589E \u5982\u679C\u5165\u5E93\u65B9\u5F0F\u662F\u8FFD\u52A0\u4E00\u5B9A\u8981\u4F7F\u7528\u5E8F\u5217COUNTERINFO_SEQ.nextval IP , HITTIME &quot;to_date(:HITTIME, &#39;YYYY-MM-DD HH24:Mi:SS&#39;)&quot;, URL , STATUS , SIZES , URL_SOURCE char(1024), TOOLS char(1024), SERVERINFO , SYSTEM_ID , SOURCETYPE_ID , SERVERSOURCE )</p>',8),l=[r];function n(i,c){return e(),t("div",null,l)}const E=a(o,[["render",n],["__file","sqlload.html.vue"]]);export{E as default};
