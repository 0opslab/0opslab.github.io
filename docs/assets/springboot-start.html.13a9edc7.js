import{_ as i,o as t,c as e,e as n}from"./app.a667bd71.js";const l={},o=n("<ol><li>\u521B\u5EFAspringbootApplication\u5BF9\u8C61springboot\u5BB9\u5668\u521D\u59CB\u5316\u64CD\u4F5C</li><li>\u83B7\u53D6\u5F53\u524D\u5E94\u7528\u7684\u542F\u52A8\u7C7B\u578B\u3002 2.1\uFF1A\u901A\u8FC7\u5224\u65AD\u5F53\u524Dclasspath\u662F\u5426\u52A0\u8F7Dservlet\u7C7B\uFF0C\u8FD4\u56DEservlet web\u542F\u52A8\u65B9\u5F0F\u3002 2.2\uFF1AwebApplicationType\u4E09\u79CD\u7C7B\u578B\uFF1A 1.reactive\uFF1A\u54CD\u5E94\u5F0F\u542F\u52A8\uFF08spring5\u65B0\u7279\u6027\uFF09 2.none:\u5373\u4E0D\u5D4C\u5165web\u5BB9\u5668\u542F\u52A8\uFF08springboot\u653E\u5728\u5916\u90E8\u670D\u52A1\u5668\u8FD0\u884C \uFF09 3.servlet:\u57FA\u4E8Eweb\u5BB9\u5668\u8FDB\u884C\u542F\u52A8</li><li>\u8BFB\u53D6springboot\u4E0B\u7684META-INFO/spring.factories\u6587\u4EF6\uFF0C\u83B7\u53D6\u5BF9\u5E94\u7684ApplicationContextInitializer\u88C5\u914D\u5230\u96C6\u5408</li><li>\u8BFB\u53D6springboot\u4E0B\u7684META-INFO/spring.factories\u6587\u4EF6\uFF0C\u83B7\u53D6\u5BF9\u5E94\u7684ApplicationListener\u88C5\u914D\u5230\u96C6\u5408</li><li>mainApplicationClass\uFF0C\u83B7\u53D6\u5F53\u524D\u8FD0\u884C\u7684\u4E3B\u51FD\u6570</li></ol><p>\u25A0 \u8C03\u7528springbootApplication\u5BF9\u8C61\u7684run\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u542F\u52A8\uFF0C\u8FD4\u56DE\u5F53\u524D\u5BB9\u5668\u7684\u4E0A\u4E0B\u6587</p><ol><li>\u8C03\u7528run\u65B9\u6CD5\u542F\u52A8</li><li>StopWatch stopWatch = new StopWatch()\uFF0C\u8BB0\u5F55\u9879\u76EE\u542F\u52A8\u65F6\u95F4</li><li>getRunListeners\uFF0C\u8BFB\u53D6META-INF/spring.factores\uFF0C\u5C06SpringApplicationRunListeners\u7C7B\u578B\u5B58\u5230\u96C6\u5408\u4E2D</li><li>listeners.starting();\u5FAA\u73AF\u8C03\u7528starting\u65B9\u6CD5</li><li>prepareEnvironment(listeners, applicationArguments);\u5C06\u914D\u7F6E\u6587\u4EF6\u8BFB\u53D6\u5230\u5BB9\u5668\u4E2D \u8BFB\u53D6\u591A\u6570\u636E\u6E90\uFF1Aclasspath:/,classpath:/config/,file:./,file:./config/\u5E95\u4E0B\u3002\u5176\u4E2Dclasspath\u662F\u8BFB\u53D6\u7F16\u8BD1\u540E\u7684\uFF0Cfile\u662F\u8BFB\u53D6\u7F16\u8BD1\u524D\u7684 \u652F\u6301yml\uFF0Cyaml\uFF0Cxml\uFF0Cproperties</li><li>Banner printedBanner = printBanner(environment);\u5F00\u59CB\u6253\u5370banner\u56FE\uFF0C\u5C31\u662Fsprongboot\u542F\u52A8\u6700\u5F00\u5934\u7684\u56FE\u6848</li><li>\u521D\u59CB\u5316AnnotationConfigServletWebServerApplicationContext\u5BF9\u8C61</li><li>\u5237\u65B0\u4E0A\u4E0B\u6587\uFF0C\u8C03\u7528\u6CE8\u89E3\uFF0CrefreshContext(context);</li><li>\u521B\u5EFAtomcat</li><li>\u52A0\u8F7Dspringmvc</li><li>\u5237\u65B0\u540E\u7684\u65B9\u6CD5\uFF0C\u7A7A\u65B9\u6CD5\uFF0C\u7ED9\u7528\u6237\u81EA\u5B9A\u4E49\u91CD\u5199afterRefresh\uFF08\uFF09</li><li>stopWatch.stop();\u7ED3\u675F\u8BA1\u65F6</li><li>\u4F7F\u7528\u5E7F\u64AD\u548C\u56DE\u8C03\u673A\u5236\u544A\u8BC9\u76D1\u542C\u8005springboot\u5BB9\u5668\u5DF2\u7ECF\u542F\u52A8\u5316\u6210\u529F\uFF0Clisteners.started(context);</li><li>\u4F7F\u7528\u5E7F\u64AD\u548C\u56DE\u8C03\u673A\u5236\u544A\u8BC9\u76D1\u542C\u8005springboot\u5BB9\u5668\u5DF2\u7ECF\u542F\u52A8\u5316\u6210\u529F\uFF0C listeners.running(context);</li><li>\u8FD4\u56DE\u4E0A\u4E0B\u6587</li></ol>",3),r=[o];function s(p,a){return t(),e("div",null,r)}const g=i(l,[["render",s],["__file","springboot-start.html.vue"]]);export{g as default};