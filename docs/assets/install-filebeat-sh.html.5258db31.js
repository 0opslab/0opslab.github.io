import{_ as n,o as s,c as e,e as i}from"./app.a667bd71.js";const a={},l=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u5B89\u88C5filebeat</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token comment">##\u6DFB\u52A0Elasticsearch \u6E90</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/yum.repos.d/elk.repo<span class="token operator">&lt;&lt;</span><span class="token string">EOF
[elasticsearch-5.x]
name=Elasticsearch repository for 5.x packages
baseurl=https://artifacts.elastic.co/packages/5.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md

EOF</span>

<span class="token comment">##yum\u5B89\u88C5filebeat</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> filebeat

<span class="token comment">##\u4FEE\u6539filebeat\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/filebeat/filebeat.yml<span class="token operator">&lt;&lt;</span><span class="token string">EOF
filebeat.prospectors:

- input_type: log
  paths:
    - /data/nginx/logs/error.log
  document_type: nginx-error

- input_type: log
  paths:
    - /data/nginx/logs/access.log
  document_type: nginx-access

output.logstash:

  hosts: [&quot;127.0.0.1:5044&quot;]

EOF</span>

<span class="token comment">##\u91CD\u542Ffilebeat\u751F\u6548</span>
<span class="token function">service</span>  filebeat  restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(d,r){return s(),e("div",null,c)}const o=n(a,[["render",t],["__file","install-filebeat-sh.html.vue"]]);export{o as default};
