import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const t={},p=e(`<p>FileAppender \u3000\u3000 \u666E\u901A\u5730\u8F93\u51FA\u5230\u672C\u5730\u6587\u4EF6 FlumeAppender\u3000\u3000 \u5C06\u51E0\u4E2A\u4E0D\u540C\u6E90\u7684\u65E5\u5FD7\u6C47\u96C6\u3001\u96C6\u4E2D\u5230\u4E00\u5904 RewriteAppender \u3000\u3000\u5BF9\u65E5\u5FD7\u4E8B\u4EF6\u8FDB\u884C\u63A9\u7801\u6216\u6CE8\u5165\u4FE1\u606F RollingFileAppender\u3000\u3000\u5BF9\u65E5\u5FD7\u6587\u4EF6\u8FDB\u884C\u5C01\u5B58 RoutingAppender\u3000\u3000\u5728\u8F93\u51FA\u5730\u4E4B\u95F4\u8FDB\u884C\u7B5B\u9009\u8DEF\u7531 SMTPAppender\u3000\u3000\u5C06LogEvent\u53D1\u9001\u5230\u6307\u5B9A\u90AE\u4EF6\u5217\u8868 SocketAppender\u3000\u3000\u5C06LogEvent\u4EE5\u666E\u901A\u683C\u5F0F\u53D1\u9001\u5230\u8FDC\u7A0B\u4E3B\u673A SyslogAppender\u3000\u3000\u5C06LogEvent\u4EE5RFC 5424\u683C\u5F0F\u53D1\u9001\u5230\u8FDC\u7A0B\u4E3B\u673A AsynchAppender \u3000\u3000\u5C06\u4E00\u4E2ALogEvent\u5F02\u6B65\u5730\u5199\u5165\u591A\u4E2A\u4E0D\u540C\u8F93\u51FA\u5730 ConsoleAppender\u3000\u3000\u5C06LogEvent\u8F93\u51FA\u5230\u63A7\u5236\u53F0 FailoverAppender\u3000\u3000\u7EF4\u62A4\u4E00\u4E2A\u961F\u5217\uFF0C\u7CFB\u7EDF\u5C06\u5C1D\u8BD5\u5411\u961F\u5217\u4E2D\u7684Appender\u4F9D\u6B21\u8F93\u51FALogEvent\uFF0C\u76F4\u5230\u6709\u4E00\u4E2A\u6210\u529F\u4E3A\u6B62</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">Configuration</span><span class="token punctuation">:</span>
  <span class="token key atrule">status</span><span class="token punctuation">:</span> warn
 
  <span class="token key atrule">Properties</span><span class="token punctuation">:</span> <span class="token comment"># \u5B9A\u4E49\u5168\u5C40\u53D8\u91CF</span>
    <span class="token key atrule">Property</span><span class="token punctuation">:</span> <span class="token comment"># \u7F3A\u7701\u914D\u7F6E\uFF08\u7528\u4E8E\u5F00\u53D1\u73AF\u5883\uFF09\u3002\u5176\u4ED6\u73AF\u5883\u9700\u8981\u5728VM\u53C2\u6570\u4E2D\u6307\u5B9A\uFF0C\u5982\u4E0B\uFF1A</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> log.path
        <span class="token key atrule">value</span><span class="token punctuation">:</span> logs
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> project.name
        <span class="token key atrule">value</span><span class="token punctuation">:</span> micro<span class="token punctuation">-</span>ext
  
  <span class="token key atrule">Appenders</span><span class="token punctuation">:</span>
    <span class="token key atrule">Console</span><span class="token punctuation">:</span>  <span class="token comment">#\u8F93\u51FA\u5230\u63A7\u5236\u53F0</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> CONSOLE
      <span class="token key atrule">target</span><span class="token punctuation">:</span> SYSTEM_OUT
      <span class="token key atrule">PatternLayout</span><span class="token punctuation">:</span>
        <span class="token key atrule">pattern</span><span class="token punctuation">:</span> <span class="token string">&quot;%highlight{%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level %logger{36}.%M():%L - %msg%n}&quot;</span>
    <span class="token key atrule">RollingRandomAccessFile</span><span class="token punctuation">:</span> <span class="token comment"># \u8F93\u51FA\u5230\u6587\u4EF6\uFF0C\u8D85\u8FC7128MB\u5F52\u6863</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ROLLING_FILE
        <span class="token key atrule">immediateFlush</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">bufferedIO</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">bufferSize</span><span class="token punctuation">:</span> <span class="token number">512</span>
        <span class="token key atrule">fileName</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>log.path<span class="token punctuation">}</span>/$<span class="token punctuation">{</span>project.name<span class="token punctuation">}</span>.log
        <span class="token key atrule">filePattern</span><span class="token punctuation">:</span> <span class="token string">&quot;\${log.path}/%d{yyyy-MM}/\${project.name}-%d{yyyyMMdd}.log.gz&quot;</span>
        <span class="token key atrule">PatternLayout</span><span class="token punctuation">:</span>
          <span class="token key atrule">pattern</span><span class="token punctuation">:</span> <span class="token string">&quot;%highlight{%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level %logger{36}.%M():%L - %msg%n}&quot;</span>
        <span class="token key atrule">Policies</span><span class="token punctuation">:</span>
          <span class="token key atrule">TimeBasedTriggeringPolicy</span><span class="token punctuation">:</span>
            <span class="token key atrule">modulate</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">1</span>
 
  <span class="token key atrule">Loggers</span><span class="token punctuation">:</span>
    <span class="token key atrule">Root</span><span class="token punctuation">:</span>
      <span class="token key atrule">level</span><span class="token punctuation">:</span> info
      <span class="token key atrule">AppenderRef</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">ref</span><span class="token punctuation">:</span> CONSOLE
        <span class="token punctuation">-</span> <span class="token key atrule">ref</span><span class="token punctuation">:</span> ROLLING_FILE
    <span class="token key atrule">Logger</span><span class="token punctuation">:</span> <span class="token comment"># \u4E3Acom.xjj\u5305\u914D\u7F6E\u7279\u6B8A\u7684Log\u7EA7\u522B\uFF0C\u65B9\u4FBF\u8C03\u8BD5</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> com.xwtec
        <span class="token key atrule">additivity</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">level</span><span class="token punctuation">:</span> debug
        <span class="token key atrule">AppenderRef</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">ref</span><span class="token punctuation">:</span> CONSOLE
          <span class="token punctuation">-</span> <span class="token key atrule">ref</span><span class="token punctuation">:</span> ROLLING_FILE
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> org.springframework
        <span class="token key atrule">additivity</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">level</span><span class="token punctuation">:</span> info
        <span class="token key atrule">AppenderRef</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">ref</span><span class="token punctuation">:</span> CONSOLE
          <span class="token punctuation">-</span> <span class="token key atrule">ref</span><span class="token punctuation">:</span> ROLLING_FILE
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> com.zaxxer
        <span class="token key atrule">additivity</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">level</span><span class="token punctuation">:</span> info
        <span class="token key atrule">AppenderRef</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">ref</span><span class="token punctuation">:</span> CONSOLE
          <span class="token punctuation">-</span> <span class="token key atrule">ref</span><span class="token punctuation">:</span> ROLLING_FILE
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> com.navercorp.pinpoint.profiler
        <span class="token key atrule">additivity</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">level</span><span class="token punctuation">:</span> info
        <span class="token key atrule">AppenderRef</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">ref</span><span class="token punctuation">:</span> CONSOLE
          <span class="token punctuation">-</span> <span class="token key atrule">ref</span><span class="token punctuation">:</span> ROLLING_FILE
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> com.navercorp.pinpoint.rpc
        <span class="token key atrule">additivity</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">level</span><span class="token punctuation">:</span> info
        <span class="token key atrule">AppenderRef</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">ref</span><span class="token punctuation">:</span> CONSOLE
          <span class="token punctuation">-</span> <span class="token key atrule">ref</span><span class="token punctuation">:</span> ROLLING_FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[p];function o(c,i){return s(),a("div",null,l)}const k=n(t,[["render",o],["__file","log4j2.html.vue"]]);export{k as default};
