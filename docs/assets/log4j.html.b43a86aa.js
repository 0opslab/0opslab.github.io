import{_ as e,o as n,c as l,e as i}from"./app.a667bd71.js";const d={},a=i(`<p>org.apache.log4j.ConsoleAppender\uFF08\u63A7\u5236\u53F0\uFF09 org.apache.log4j.FileAppender\uFF08\u6587\u4EF6\uFF09 org.apache.log4j.DailyRollingFileAppender\uFF08\u6BCF\u5929\u4EA7\u751F\u4E00\u4E2A\u65E5\u5FD7\u6587\u4EF6\uFF09 org.apache.log4j.RollingFileAppender\uFF08\u6587\u4EF6\u5927\u5C0F\u5230\u8FBE\u6307\u5B9A\u5C3A\u5BF8\u7684\u65F6\u5019\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\uFF09 org.apache.log4j.WriterAppender\uFF08\u5C06\u65E5\u5FD7\u4FE1\u606F\u4EE5\u6D41\u683C\u5F0F\u53D1\u9001\u5230\u4EFB\u610F\u6307\u5B9A\u7684\u5730\u65B9\uFF09</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>#############
# \u8F93\u51FA\u5230\u63A7\u5236\u53F0
#############

# log4j.rootLogger\u65E5\u5FD7\u8F93\u51FA\u7C7B\u522B\u548C\u7EA7\u522B\uFF1A\u53EA\u8F93\u51FA\u4E0D\u4F4E\u4E8E\u8BE5\u7EA7\u522B\u7684\u65E5\u5FD7\u4FE1\u606FDEBUG &lt; INFO &lt; WARN &lt; ERROR &lt; FATAL
# WARN\uFF1A\u65E5\u5FD7\u7EA7\u522B     CONSOLE\uFF1A\u8F93\u51FA\u4F4D\u7F6E\u81EA\u5DF1\u5B9A\u4E49\u7684\u4E00\u4E2A\u540D\u5B57       logfile\uFF1A\u8F93\u51FA\u4F4D\u7F6E\u81EA\u5DF1\u5B9A\u4E49\u7684\u4E00\u4E2A\u540D\u5B57
log4j.rootLogger=WARN,CONSOLE,logfile
# \u914D\u7F6ECONSOLE\u8F93\u51FA\u5230\u63A7\u5236\u53F0
log4j.appender.CONSOLE=org.apache.log4j.ConsoleAppender 
# \u914D\u7F6ECONSOLE\u8BBE\u7F6E\u4E3A\u81EA\u5B9A\u4E49\u5E03\u5C40\u6A21\u5F0F
log4j.appender.CONSOLE.layout=org.apache.log4j.PatternLayout 
# \u914D\u7F6ECONSOLE\u65E5\u5FD7\u7684\u8F93\u51FA\u683C\u5F0F  [frame] 2019-08-22 22:52:12,000  %r\u8017\u8D39\u6BEB\u79D2\u6570 %p\u65E5\u5FD7\u7684\u4F18\u5148\u7EA7 %t\u7EBF\u7A0B\u540D %C\u6240\u5C5E\u7C7B\u540D\u901A\u5E38\u4E3A\u5168\u7C7B\u540D %L\u4EE3\u7801\u4E2D\u7684\u884C\u53F7 %x\u7EBF\u7A0B\u76F8\u5173\u8054\u7684NDC %m\u65E5\u5FD7 %n\u6362\u884C
log4j.appender.CONSOLE.layout.ConversionPattern=[frame] %d{yyyy-MM-dd HH:mm:ss,SSS} - %-4r %-5p [%t] %C:%L %x - %m%n

################
# \u8F93\u51FA\u5230\u65E5\u5FD7\u6587\u4EF6\u4E2D
################

# \u914D\u7F6Elogfile\u8F93\u51FA\u5230\u6587\u4EF6\u4E2D \u6587\u4EF6\u5927\u5C0F\u5230\u8FBE\u6307\u5B9A\u5C3A\u5BF8\u7684\u65F6\u5019\u4EA7\u751F\u65B0\u7684\u65E5\u5FD7\u6587\u4EF6
log4j.appender.logfile=org.apache.log4j.RollingFileAppender
# \u4FDD\u5B58\u7F16\u7801\u683C\u5F0F
log4j.appender.logfile.Encoding=UTF-8
# \u8F93\u51FA\u6587\u4EF6\u4F4D\u7F6E\u6B64\u4E3A\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684logs\u6587\u4EF6\u5939\u4E2D
log4j.appender.logfile.File=logs/root.log
# \u540E\u7F00\u53EF\u4EE5\u662FKB,MB,GB\u8FBE\u5230\u8BE5\u5927\u5C0F\u540E\u521B\u5EFA\u65B0\u7684\u65E5\u5FD7\u6587\u4EF6
log4j.appender.logfile.MaxFileSize=10MB
# \u8BBE\u7F6E\u6EDA\u5B9A\u6587\u4EF6\u7684\u6700\u5927\u503C3 \u6307\u53EF\u4EE5\u4EA7\u751Froot.log.1\u3001root.log.2\u3001root.log.3\u548Croot.log\u56DB\u4E2A\u65E5\u5FD7\u6587\u4EF6
log4j.appender.logfile.MaxBackupIndex=3  
# \u914D\u7F6Elogfile\u4E3A\u81EA\u5B9A\u4E49\u5E03\u5C40\u6A21\u5F0F
log4j.appender.logfile.layout=org.apache.log4j.PatternLayout
log4j.appender.logfile.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %F %p %m%n

##########################
# \u5BF9\u4E0D\u540C\u7684\u7C7B\u8F93\u51FA\u4E0D\u540C\u7684\u65E5\u5FD7\u6587\u4EF6
##########################

# club.bagedate\u5305\u4E0B\u7684\u65E5\u5FD7\u5355\u72EC\u8F93\u51FA
log4j.logger.club.bagedate=DEBUG,bagedate
# \u8BBE\u7F6E\u4E3Afalse\u8BE5\u65E5\u5FD7\u4FE1\u606F\u5C31\u4E0D\u4F1A\u52A0\u5165\u5230rootLogger\u4E2D\u4E86
log4j.additivity.club.bagedate=false
# \u4E0B\u9762\u5C31\u548C\u4E0A\u9762\u914D\u7F6E\u4E00\u6837\u4E86
log4j.appender.bagedate=org.apache.log4j.RollingFileAppender
log4j.appender.bagedate.Encoding=UTF-8
log4j.appender.bagedate.File=logs/bagedate.log
log4j.appender.bagedate.MaxFileSize=10MB
log4j.appender.bagedate.MaxBackupIndex=3
log4j.appender.bagedate.layout=org.apache.log4j.PatternLayout
log4j.appender.bagedate.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %F %p %m%n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[a];function o(r,v){return n(),l("div",null,s)}const c=e(d,[["render",o],["__file","log4j.html.vue"]]);export{c as default};
