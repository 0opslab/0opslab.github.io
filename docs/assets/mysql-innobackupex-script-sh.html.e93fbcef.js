import{_ as s,o as n,c as a,e}from"./app.a667bd71.js";const p={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token comment">#\`\`\`ops</span>
<span class="token comment">#title:\u4E00\u6B3E\u6BD4\u8F83\u7279\u522B\u7684mysql\u5907\u4EFD\u811A\u672C\u770B\u4E0D\u61C2\u6700\u597D\u522B\u4E71\u7528</span>
<span class="token comment">#descr:</span>
<span class="token comment">#\`\`\`</span>

<span class="token comment"># \u6CE8\u610F\u6B64\u811A\u672C\u4E0D\u9002\u5408\u6309\u5929\u505A\u589E\u91CF\u5907\u4EFD</span>
<span class="token comment"># --no-timestamp:</span>
<span class="token comment"># \u8FD9\u4E2A\u9009\u9879\u4E0D\u521B\u5EFA\u4E00\u4E2A\u65F6\u95F4\u6233\u7684\u76EE\u5F55\u6765\u5B58\u50A8\u5907\u4EFD</span>
<span class="token comment"># --use-memory:</span>
<span class="token comment"># \u901A\u8FC7\u4F7F\u7528\u66F4\u591A\u7684\u5185\u5B58\uFF0C\u51C6\u5907\u8FC7\u7A0B\u53EF\u4EE5\u52A0\u5FEB\u901F\u5EA6\u3002\u5B83\u4F9D\u8D56\u4E8E\u60A8\u7684\u7CFB\u7EDF\u4E0A\u7684\u514D\u8D39\u6216\u53EF\u7528RAM\uFF0C\u9ED8\u8BA4\u4E3A100MB\u3002</span>
<span class="token comment"># \u4E00\u822C\u6765\u8BF4\uFF0C\u8FDB\u7A0B\u7684\u5185\u5B58\u8D8A\u591A\u8D8A\u597D\u3002\u8FDB\u7A0B\u4E2D\u4F7F\u7528\u7684\u5185\u5B58\u7684\u6570\u91CF\u53EF\u4EE5\u7531\u591A\u4E2A\u5B57\u8282\u6765\u6307\u5B9A:</span>
<span class="token comment"># --compress:</span>
<span class="token comment"># \u538B\u7F29\u9009\u9879</span>
<span class="token comment"># --compress-threads:</span>
<span class="token comment"># \u538B\u7F29\u7EBF\u7A0B</span>
<span class="token comment"># --incremental-basedir:</span>
<span class="token comment"># \u589E\u91CF\u5907\u4EFD\u7684\u57FA\u7840\u8DEF\u5F84(\u4E0A\u6B21\u5907\u4EFD\u8DEF\u5F84)</span>
<span class="token comment"># --incremental:</span>
<span class="token comment"># \u589E\u91CF\u5907\u4EFD\u9009\u9879</span>


<span class="token assign-left variable">BAK_PATH</span><span class="token operator">=</span>/data/database_backup
<span class="token assign-left variable">CURRENT_DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d<span class="token variable">)</span></span>
<span class="token assign-left variable">LOG_FILE</span><span class="token operator">=</span><span class="token string">&quot;mysql_back_info_<span class="token variable">\${CURRENT_DATE}</span>.log&quot;</span>
<span class="token assign-left variable">LOG_DIR</span><span class="token operator">=</span><span class="token string">&#39;/var/log/mysql_back&#39;</span>
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span>
<span class="token assign-left variable">PASS</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span>
<span class="token assign-left variable">CONF_FILE</span><span class="token operator">=</span><span class="token string">&#39;/etc/my.cnf&#39;</span>
<span class="token comment">#SOCK_FILE=&#39;/data/db/mysql/var/mysql.sock&#39;</span>
<span class="token assign-left variable">SOCK_FILE</span><span class="token operator">=</span><span class="token string">&#39;/var/lib/mysql/mysql.sock&#39;</span>
<span class="token comment">#DATA_DIR=&#39;/data/db/mysql/var&#39;</span>
<span class="token assign-left variable">DATA_DIR</span><span class="token operator">=</span><span class="token string">&#39;/var/lib/mysql&#39;</span>
<span class="token assign-left variable">BASE_DIR</span><span class="token operator">=</span><span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${CURRENT_DATE}</span>
<span class="token assign-left variable">SCRIPT_DIR</span><span class="token operator">=</span><span class="token string">&#39;/root/scripts&#39;</span>
<span class="token assign-left variable">BINLOG_DIR</span><span class="token operator">=</span><span class="token string">&#39;/data/db/mysql_binlog&#39;</span>
<span class="token comment"># BINLOG_BIN=&#39;/usr/local/lnmp/mysql/bin/mysqlbinlog&#39;</span>


<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$UID</span>&quot;</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;You must run as root&quot;</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">\${LOG_DIR}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${LOG_DIR}</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">:</span>
<span class="token keyword">fi</span>

<span class="token function-name function">do_install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    yum <span class="token function">install</span> http://www.percona.com/downloads/percona-release/redhat/0.1-4/percona-release-0.1-4.noarch.rpm <span class="token parameter variable">-y</span>
    yum <span class="token function">install</span> percona-xtrabackup-24 <span class="token parameter variable">-y</span>
<span class="token punctuation">}</span>


<span class="token function-name function">do_full_backup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">\${BASE_DIR}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${BASE_DIR}</span>
    <span class="token keyword">fi</span>
    innobackupex <span class="token punctuation">\\</span>
    --defaults-file<span class="token operator">=</span><span class="token variable">\${CONF_FILE}</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--user</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">USER</span>}</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--password</span><span class="token operator">=</span><span class="token variable">\${PASS}</span> <span class="token punctuation">\\</span>
    --use-memory<span class="token operator">=</span>4G <span class="token punctuation">\\</span>
    <span class="token parameter variable">--compress</span> <span class="token punctuation">\\</span>
    --compress-threads<span class="token operator">=</span><span class="token number">4</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-S</span> <span class="token variable">\${SOCK_FILE}</span> <span class="token punctuation">\\</span>
    <span class="token variable">\${BASE_DIR}</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/<span class="token variable">\${LOG_FILE}</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>

    <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$num</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;full backup OK.&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;full backup FAIL&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token variable">\${num}</span>
    <span class="token keyword">fi</span>

    do_write_file
<span class="token punctuation">}</span>

<span class="token function-name function">do_write_file</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">\${SCRIPT_DIR}</span>/<span class="token variable">\${CURRENT_DATE}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${SCRIPT_DIR}</span>/<span class="token variable">\${CURRENT_DATE}</span>
    <span class="token keyword">fi</span>

    <span class="token function">ls</span> <span class="token parameter variable">-rt1</span> <span class="token variable">\${BASE_DIR}</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token variable">\${SCRIPT_DIR}</span>/<span class="token variable">\${CURRENT_DATE}</span>/back.lock
<span class="token punctuation">}</span>


<span class="token function-name function">do_read_file</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $<span class="token punctuation">{</span>SCRIPT_DIR<span class="token punctuation">}</span>/$<span class="token punctuation">{</span>CURRENT_DATE<span class="token punctuation">}</span>/back.lock<span class="token variable">)</span></span>
<span class="token punctuation">}</span>

<span class="token function-name function">do_inc_backup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token assign-left variable">LAST_BACKUP_DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>do_read_file<span class="token variable">\`</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">\${LAST_BACKUP_DIR}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Not found last_backup_dir.data file&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">else</span>
        innobackupex <span class="token punctuation">\\</span>
        --defaults-file<span class="token operator">=</span><span class="token variable">\${CONF_FILE}</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">--user</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">USER</span>}</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">--password</span><span class="token operator">=</span><span class="token variable">\${PASS}</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">-S</span> <span class="token variable">\${SOCK_FILE}</span> <span class="token punctuation">\\</span>
        --use-memory<span class="token operator">=</span>4G <span class="token punctuation">\\</span>
        <span class="token parameter variable">--compress</span> <span class="token punctuation">\\</span>
        --compress-threads<span class="token operator">=</span><span class="token number">4</span> <span class="token punctuation">\\</span>
        --incremental-basedir<span class="token operator">=</span><span class="token variable">\${BASE_DIR}</span>/<span class="token variable">\${LAST_BACKUP_DIR}</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">--incremental</span> <span class="token punctuation">\\</span>
        <span class="token variable">\${BASE_DIR}</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/<span class="token variable">\${LOG_FILE}</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>

        <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$?</span>&quot;</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${num}</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;INC backup Success.&quot;</span>
            do_write_file
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;INC backup Failed.&quot;</span>
            <span class="token builtin class-name">exit</span> <span class="token variable">\${num}</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>


<span class="token function-name function">do_write_list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">$1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-f</span> <span class="token variable">\${SCRIPT_DIR}</span>/list.lock<span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;list.lock\u5B58\u5728&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
            <span class="token builtin class-name">exit</span> <span class="token number">1</span>
        <span class="token keyword">fi</span>

        <span class="token function">ls</span> <span class="token parameter variable">-tr1</span>  <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">$1</span> <span class="token operator">&gt;</span> <span class="token variable">\${SCRIPT_DIR}</span>/list.lock
    <span class="token keyword">else</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">do_merge_backup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token assign-left variable">RECOVERY_INC_DIR</span><span class="token operator">=</span><span class="token variable">$1</span>
    <span class="token assign-left variable">SUB_BACKUP_DIR</span><span class="token operator">=</span><span class="token variable">$2</span>
    <span class="token assign-left variable">END_NR_NUM</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$RECOVERY_INC_DIR</span>&quot;</span> $<span class="token punctuation">{</span>SCRIPT_DIR<span class="token punctuation">}</span>/list.lock <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">\${SCRIPT_DIR}</span>/list.lock <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>counter<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> counter<span class="token operator">&lt;=</span>\${END_NR_NUM}<span class="token punctuation">;</span> <span class="token operator">++</span>counter<span class="token punctuation">))</span></span>
        <span class="token keyword">do</span>
            <span class="token assign-left variable">DIR_NAME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $<span class="token punctuation">{</span>SCRIPT_DIR<span class="token punctuation">}</span>/list.lock <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;NR==&quot;&#39;</span>$<span class="token punctuation">{</span>counter<span class="token punctuation">}</span><span class="token string">&#39;&quot;{print}&#39;</span><span class="token variable">)</span></span>
            <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${counter}</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token comment"># \u53D6\u56DE\u5168\u91CF\u5907\u4EFD</span>
                innobackupex <span class="token punctuation">\\</span>
                <span class="token parameter variable">--decompress</span> <span class="token punctuation">\\</span>
                <span class="token parameter variable">--parallel</span><span class="token operator">=</span><span class="token number">4</span> <span class="token punctuation">\\</span>
                <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${DIR_NAME}</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
                <span class="token function">find</span>  <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${DIR_NAME}</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.qp&quot;</span> <span class="token parameter variable">-delete</span>
                innobackupex <span class="token punctuation">\\</span>
                --apply-log <span class="token punctuation">\\</span>
                --redo-only <span class="token punctuation">\\</span>
                --use-memory<span class="token operator">=</span>4G <span class="token punctuation">\\</span>
                <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${DIR_NAME}</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
                <span class="token comment"># \u5B9A\u4E49\u5168\u91CF\u5907\u4EFD\u76EE\u5F55\u53D8\u91CF</span>
                <span class="token assign-left variable">FULL_BACKUP_DIR</span><span class="token operator">=</span><span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${DIR_NAME}</span>
            <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">\${counter}</span> <span class="token parameter variable">-eq</span> <span class="token variable">\${END_NR_NUM}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token comment"># \u5408\u5E76\u6700\u540E\u4E00\u4E2A\u589E\u91CF\uFF0C\u4E0D\u9700\u8981--redo-only\u53C2\u6570</span>
                innobackupex <span class="token punctuation">\\</span>
                <span class="token parameter variable">--decompress</span> <span class="token punctuation">\\</span>
                <span class="token parameter variable">--parallel</span><span class="token operator">=</span><span class="token number">4</span> <span class="token punctuation">\\</span>
                <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${DIR_NAME}</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
                <span class="token function">find</span> <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${DIR_NAME}</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.qp&quot;</span> <span class="token parameter variable">-delete</span>
                innobackupex <span class="token punctuation">\\</span>
                --apply-log <span class="token punctuation">\\</span>
                --use-memory<span class="token operator">=</span>4G <span class="token punctuation">\\</span>
                <span class="token variable">\${FULL_BACKUP_DIR}</span> <span class="token punctuation">\\</span>
                --incremental-dir<span class="token operator">=</span><span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${DIR_NAME}</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
            <span class="token keyword">else</span>
            <span class="token comment"># \u5408\u5E76\u975E\u5168\u91CF\u5907\u4EFD\u548C\u975E\u6700\u540E\u4E00\u6B21\u7684\u589E\u91CF\u5907\u4EFD</span>
                innobackupex <span class="token punctuation">\\</span>
                <span class="token parameter variable">--decompress</span> <span class="token punctuation">\\</span>
                <span class="token parameter variable">--parallel</span><span class="token operator">=</span><span class="token number">4</span> <span class="token punctuation">\\</span>
                <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${DIR_NAME}</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
                <span class="token function">find</span> <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${DIR_NAME}</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.qp&quot;</span> <span class="token parameter variable">-delete</span>
                innobackupex <span class="token punctuation">\\</span>
                --apply-log <span class="token punctuation">\\</span>
                --use-memory<span class="token operator">=</span>4G <span class="token punctuation">\\</span>
                --redo-only <span class="token punctuation">\\</span>
                <span class="token variable">\${FULL_BACKUP_DIR}</span> <span class="token punctuation">\\</span>
                --incremental-dir<span class="token operator">=</span><span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${DIR_NAME}</span> <span class="token punctuation">\\</span>
                <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
            <span class="token keyword">fi</span>
        <span class="token keyword">done</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">do_packaging_backup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    innobackupex <span class="token punctuation">\\</span>
    --defaults-file<span class="token operator">=</span><span class="token variable">\${CONF_FILE}</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--user</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">USER</span>}</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--password</span><span class="token operator">=</span><span class="token variable">\${PASS}</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-S</span> <span class="token variable">\${SOCK_FILE}</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--stream</span><span class="token operator">=</span>tar ./ <span class="token operator">|</span> <span class="token function">gzip</span> -<span class="token operator">&gt;</span> <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${CURRENT_DATE}</span>_all.tar.gz
<span class="token punctuation">}</span>

<span class="token function-name function">do_recovery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token assign-left variable">SUB_BACKUP_DIR</span><span class="token operator">=</span><span class="token variable">$1</span>
    <span class="token assign-left variable">RECOVERY_INC_DIR</span><span class="token operator">=</span><span class="token variable">$2</span>
    do_merge_backup <span class="token variable">\${RECOVERY_INC_DIR}</span> <span class="token variable">\${SUB_BACKUP_DIR}</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Merge SUCC&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Merge FAIL&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
    <span class="token comment"># \u5173\u95EDmysql\u670D\u52A1</span>
    <span class="token function">service</span> mysqld stop
    <span class="token comment"># \u83B7\u53D6\u5168\u91CF\u5907\u4EFD\u76EE\u5F55</span>
    <span class="token assign-left variable">FULL_BACKUP_DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $<span class="token punctuation">{</span>SCRIPT_DIR<span class="token punctuation">}</span>/list.lock <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;NR==1{print}&#39;</span><span class="token variable">)</span></span>
    <span class="token comment"># \u56DE\u6EDA\u6240\u6709\u672A\u63D0\u4EA4\u7684\u4E8B\u52A1</span>
    innobackupex <span class="token punctuation">\\</span>
    --apply-log <span class="token punctuation">\\</span>
    <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${FULL_BACKUP_DIR}</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5F00\u59CB\u56DE\u6EDA\u6240\u6709\u672A\u63D0\u4EA4\u7684\u4E8B\u52A1&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;\u5F00\u59CB\u56DE\u6EDA\u6240\u6709\u672A\u63D0\u4EA4\u7684\u4E8B\u52A1\u5931\u8D25\uFF0C\u8BF7\u5C1D\u8BD5\u624B\u52A8\u6267\u884C\u547D\u4EE4: <span class="token entity" title="\\n">\\n</span>innobackupex --apply-log <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${FULL_BACKUP_DIR}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>

    <span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-d</span> <span class="token variable">\${DATA_DIR}</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable">\${DATA_DIR}</span>\u76EE\u5F55\u5B58\u5728, \u5728\u56DE\u5199\u65F6\u4F1A\u5931\u8D25\uFF0C\u8FD9\u91CC\u5148\u9000\u51FA\uFF0C\u8BF7\u624B\u52A8\u5220\u9664\u6570\u636E\u76EE\u5F55\u5E76\u624B\u52A8\u6267\u884C: <span class="token entity" title="\\n">\\n</span>innobackupex --copy-back <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${FULL_BACKUP_DIR}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
    <span class="token comment"># \u62F7\u56DE\u6570\u636E\u81F3\u6570\u636E\u76EE\u5F55</span>
    innobackupex <span class="token punctuation">\\</span>
    --copy-back <span class="token punctuation">\\</span>
    <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${FULL_BACKUP_DIR}</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql.mysql <span class="token variable">\${DATA_DIR}</span>
        <span class="token function">service</span> mysqld start
    <span class="token keyword">else</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">do_replay_binlog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token assign-left variable">SUB_BACKUP_DIR</span><span class="token operator">=</span><span class="token variable">$1</span>
    <span class="token assign-left variable">STOP_TIME</span><span class="token operator">=</span><span class="token variable">$2</span>
    <span class="token assign-left variable">RECOVERY_INC_DIR</span><span class="token operator">=</span><span class="token variable">$3</span>
    <span class="token assign-left variable">RECOVERY_NEX_DIR</span><span class="token operator">=</span><span class="token variable">$4</span>
    <span class="token assign-left variable">RECOVERY_DAY</span><span class="token operator">=</span><span class="token variable">$5</span>
    <span class="token assign-left variable">STOP_DATETIME</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${RECOVERY_DAY}</span> <span class="token variable">\${STOP_TIME}</span>&quot;</span>

    <span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-f</span> <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${RECOVERY_INC_DIR}</span>/xtrabackup_binlog_info<span class="token punctuation">;</span> <span class="token keyword">then</span>
         <span class="token assign-left variable">begin_file</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $<span class="token punctuation">{</span>BAK_PATH<span class="token punctuation">}</span>/$<span class="token punctuation">{</span>SUB_BACKUP_DIR<span class="token punctuation">}</span>/$<span class="token punctuation">{</span>RECOVERY_INC_DIR<span class="token punctuation">}</span>/xtrabackup_binlog_info <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
         <span class="token assign-left variable">begin_position</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $<span class="token punctuation">{</span>BAK_PATH<span class="token punctuation">}</span>/$<span class="token punctuation">{</span>SUB_BACKUP_DIR<span class="token punctuation">}</span>/$<span class="token punctuation">{</span>RECOVERY_INC_DIR<span class="token punctuation">}</span>/xtrabackup_binlog_info <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>
     <span class="token keyword">else</span>
         <span class="token builtin class-name">exit</span> <span class="token number">1</span>
     <span class="token keyword">fi</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-z</span> <span class="token variable">\${RECOVERY_NEX_DIR}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-f</span>  <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${RECOVERY_NEX_DIR}</span>/xtrabackup_binlog_info.qp<span class="token punctuation">;</span><span class="token keyword">then</span>
            innobackupex <span class="token punctuation">\\</span>
            <span class="token parameter variable">--decompress</span> <span class="token punctuation">\\</span>
            <span class="token parameter variable">--parallel</span><span class="token operator">=</span><span class="token number">4</span> <span class="token punctuation">\\</span>
            <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${RECOVERY_NEX_DIR}</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">\${LOG_DIR}</span>/recovery_info_<span class="token variable">\${CURRENT_DATE}</span>.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
            <span class="token function">find</span> <span class="token variable">\${BAK_PATH}</span>/<span class="token variable">\${SUB_BACKUP_DIR}</span>/<span class="token variable">\${RECOVERY_NEX_DIR}</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.qp&quot;</span> <span class="token parameter variable">-delete</span>
        <span class="token keyword">fi</span>
        <span class="token assign-left variable">end_file</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $<span class="token punctuation">{</span>BAK_PATH<span class="token punctuation">}</span>/$<span class="token punctuation">{</span>SUB_BACKUP_DIR<span class="token punctuation">}</span>/$<span class="token punctuation">{</span>RECOVERY_NEX_DIR<span class="token punctuation">}</span>/xtrabackup_binlog_info <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
    <span class="token keyword">else</span>
        <span class="token assign-left variable">end_file</span><span class="token operator">=</span><span class="token variable">\${begin_file}</span>
    <span class="token keyword">fi</span>
    mysqlbinlog <span class="token variable">\${BINLOG_DIR}</span>/<span class="token variable">\${begin_file}</span> <span class="token punctuation">\\</span>
                <span class="token variable">\${BINLOG_DIR}</span>/<span class="token variable">\${end_file}</span> <span class="token punctuation">\\</span>
                --start-position<span class="token operator">=</span><span class="token variable">\${begin_position}</span> <span class="token punctuation">\\</span>
                --stop-datetime<span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${STOP_DATETIME}</span>&quot;</span><span class="token operator">|</span> mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;recovery Success&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;recovery Failed.&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">do_recovery_main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;\u8BF7\u51C6\u5907\u597D\u6570\u636E\u5E93\u7BA1\u7406\u5458\u5BC6\u7801\uFF0C\u540E\u9762\u8981\u7528\u5230\uFF0C\u8FD9\u91CC\u8BF7\u8F93\u5165\u65F6\u95F4[2018-02-23 17-10-10]: &quot;</span> RECOVERY_DAY RECOVERY_TIME
    <span class="token assign-left variable">STOP_TIME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>RECOVERY_TIME<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{gsub(&quot;-&quot;, &quot;:&quot;);print $1$2$3}&#39;</span><span class="token variable">)</span></span>
    <span class="token assign-left variable">SUB_BACKUP_DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>RECOVERY_DAY<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;-&#39;</span> <span class="token string">&#39;{print $1$2$3}&#39;</span><span class="token variable">)</span></span>
    <span class="token assign-left variable">RECOVERY_H</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>RECOVERY_TIME<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&#39;-&#39;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
    <span class="token assign-left variable">RECOVERY_M</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>RECOVERY_TIME<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&#39;-&#39;</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>
    <span class="token comment"># \u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u4E00\u4E0B\uFF0C\u8FD9\u91CC\u65B9\u4FBF\u6D4B\u8BD5\u5907\u4EFD\u65F6\u95F4\u95F4\u9694\u7CBE\u786E\u81F3\u5206\u949F\uFF0C\u5982\u679C\u589E\u91CF\u6309\u65F6\u5907\u4EFD\uFF0C\u8BF7\u5728\u6B64\u5904\u4F5C\u76F8\u5E94\u4FEE\u6539, \u6BD4\u5982\u6309\u5C0F\u65F6\u5907\u4EFD:</span>
    <span class="token comment"># REGEX_STRING=\${RECOVERY_DAY}_\${RECOVERY_H}-[0-5][0-9]-[0-5][0-9]</span>
    <span class="token assign-left variable">REGEX_STRING</span><span class="token operator">=</span><span class="token variable">\${RECOVERY_DAY}</span>_<span class="token variable">\${RECOVERY_H}</span>-<span class="token variable">\${RECOVERY_M<span class="token operator">:</span>0<span class="token operator">:</span>1}</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>
    do_write_list <span class="token variable">\${SUB_BACKUP_DIR}</span>
    <span class="token assign-left variable">RECOVERY_INC_DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $<span class="token punctuation">{</span>SCRIPT_DIR<span class="token punctuation">}</span>/list.lock <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/&#39;</span>$<span class="token punctuation">{</span>REGEX_STRING<span class="token punctuation">}</span><span class="token string">&#39;/ {print}&#39;</span><span class="token variable">)</span></span>
    <span class="token assign-left variable">RECOVERY_NEX_DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $<span class="token punctuation">{</span>SCRIPT_DIR<span class="token punctuation">}</span>/list.lock <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/&#39;</span>$<span class="token punctuation">{</span>REGEX_STRING<span class="token punctuation">}</span><span class="token string">&#39;/ {nr[NR+1]; next};NR in nr&#39;</span><span class="token variable">)</span></span>
    do_recovery <span class="token variable">\${SUB_BACKUP_DIR}</span> <span class="token variable">\${RECOVERY_INC_DIR}</span>
    <span class="token keyword">while</span> <span class="token builtin class-name">:</span>
    <span class="token keyword">do</span>
        checkPidExists
        <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token variable">$?</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${num}</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
            <span class="token builtin class-name">break</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>

    do_replay_binlog <span class="token variable">\${SUB_BACKUP_DIR}</span> <span class="token variable">\${STOP_TIME}</span> <span class="token variable">\${RECOVERY_INC_DIR}</span> <span class="token variable">\${RECOVERY_NEX_DIR}</span> <span class="token variable">\${RECOVERY_DAY}</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${SCRIPT_DIR}</span>/list.lock
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token function-name function">checkPidExists</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable"><span class="token variable">\`</span>pidof mysqld<span class="token variable">\`</span></span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token builtin class-name">return</span> <span class="token number">1</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">return</span> <span class="token number">0</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
    full<span class="token punctuation">)</span>
    do_full_backup
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    inc<span class="token punctuation">)</span>
    do_inc_backup
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token function">install</span><span class="token punctuation">)</span>
    do_install
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    packaging<span class="token punctuation">)</span>
    do_packaging_backup
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    recovery<span class="token punctuation">)</span>
    do_recovery_main
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable">$0</span> &lt;params: [full|inc|recovery|packaging]&gt;&quot;</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;full: \u5168\u91CF\u5907\u4EFD&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;inc: \u589E\u91CF\u5907\u4EFD&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;recovery: \u6062\u590D\u5907\u4EFD&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;packaging: \u6253\u5305\u5907\u4EFD&quot;</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),t=[l];function i(o,c){return n(),a("div",null,t)}const k=s(p,[["render",i],["__file","mysql-innobackupex-script-sh.html.vue"]]);export{k as default};
