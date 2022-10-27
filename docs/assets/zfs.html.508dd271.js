import{_ as n,o as s,c as a,e}from"./app.a667bd71.js";const l={},i=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># WARNING:</span>
<span class="token comment">#   In order to avoid headaches when moving ZFS physical devices around,</span>
<span class="token comment">#   one will be much better served to reference devices by their *immutable*</span>
<span class="token comment">#   ID - as in /dev/disk/by-id/* - rather than their block device name -</span>
<span class="token comment">#   as in /dev/{sd,nvme}* - which is bound to change as per PCI enumeration</span>
<span class="token comment">#   order.</span>
<span class="token comment"># For the sake of briefness, we&#39;ll use the following variables:</span>
<span class="token comment">#   \${device}    device (/dev/disk/by-id/\${device})</span>
<span class="token comment">#   \${part}      partition (/dev/disk/by-id/\${part=\${device}-part\${N}})</span>
<span class="token comment">#   \${pool}      ZFS pool (name)</span>
<span class="token comment">#   \${fs_vol}    ZFS file system or volume (name)</span>
<span class="token comment">#   \${snapshot}  ZFS snapshot (name)</span>


<span class="token comment">## Pools</span>

<span class="token comment"># Create a new &quot;RAID-5&quot; (raidz1) pool</span>
<span class="token comment"># Recommended: use entire devices rather than partitions</span>
zpool create <span class="token variable">\${pool}</span> raidz1 <span class="token variable">\${device}</span> <span class="token variable">\${device}</span> <span class="token variable">\${device}</span> <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># Add 2nd-level &quot;RAID-1&quot; (mirror) ZFS Intent Log (ZIL; synchronous write cache)</span>
<span class="token comment"># Recommended: use separate, fast, low-latency devices (e.g. NVMe)</span>
zpool <span class="token function">add</span> <span class="token variable">\${pool}</span> log mirror <span class="token variable">\${part}</span> <span class="token variable">\${part}</span>

<span class="token comment"># Add 2nd-level &quot;RAID-0&quot; Adaptive Replacement Cache (ARC; read cache)</span>
<span class="token comment"># Recommended: use separate, fast, low-latency devices (e.g. NVMe)</span>
zpool <span class="token function">add</span> <span class="token variable">\${pool}</span> cache <span class="token variable">\${part}</span> <span class="token variable">\${part}</span> <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># Remove log or cache components</span>
zpool remove zfs <span class="token variable">\${part}</span> <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># Import (enable) existing pool from newly connected devices</span>
<span class="token comment"># Note: this will create the /etc/zfs/zpool.cache devices cache</span>
zpool <span class="token function">import</span> <span class="token parameter variable">-d</span> /dev/disk/by-id <span class="token parameter variable">-aN</span>

<span class="token comment"># Import (enable) existing pool using the devices cache</span>
zpool <span class="token function">import</span> <span class="token parameter variable">-c</span> /etc/zfs/zpool.cache <span class="token parameter variable">-aN</span>

<span class="token comment"># Export (disable) pool (e.g. before shutdown)</span>
zpool <span class="token builtin class-name">export</span> <span class="token parameter variable">-a</span>

<span class="token comment"># List all (imported) pools</span>
zpool list

<span class="token comment"># See pool status</span>
zpool status <span class="token variable">\${pool}</span>

<span class="token comment"># See detailed pool I/O statistics</span>
zpool iostat <span class="token variable">\${pool}</span> <span class="token parameter variable">-v</span>

<span class="token comment"># Verify pool integrity (data checksums)</span>
<span class="token comment"># (watch progress with &#39;zpool status&#39;)</span>
zpool scrub <span class="token variable">\${pool}</span>

<span class="token comment"># Remove a failing device from a pool</span>
<span class="token comment"># Note: redundant pools (mirror, raidz) will continue working in degraded state</span>
zpool detach <span class="token variable">\${pool}</span> <span class="token variable">\${device}</span>

<span class="token comment"># Replace a failed device in a pool</span>
<span class="token comment"># Note: new device will be &quot;resilvered&quot; automatically (parity reconstruction)</span>
<span class="token comment">#       (watch progress with &#39;zpool status&#39;)</span>
zpool replace <span class="token variable">\${pool}</span> <span class="token variable">\${failed-device}</span> <span class="token variable">\${new-device}</span>

<span class="token comment"># Erase zpool labels (&quot;superblock&quot;) from a device/partition</span>
<span class="token comment"># WARNING: MUST do before reusing a device/partition for other purposes</span>
zpool labelclear <span class="token variable">\${device}</span>

<span class="token comment"># Query pool configuration (properties)</span>
zpool get all <span class="token variable">\${pool}</span>

<span class="token comment"># Change pool configuration (property)</span>
zpool <span class="token builtin class-name">set</span> <span class="token operator">&lt;</span>property<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>value<span class="token operator">&gt;</span> <span class="token variable">\${pool}</span>

<span class="token comment"># Dump the entire pool (commands) history</span>
zpool <span class="token function">history</span> <span class="token variable">\${pool}</span>

<span class="token comment"># More...</span>
<span class="token function">man</span> zpool


<span class="token comment">## File systems / Volumes</span>

<span class="token comment"># Create a new file system</span>
zfs create <span class="token variable">\${pool}</span>/<span class="token variable">\${fs_vol}</span>

<span class="token comment"># Create a new volume (&quot;block device&quot;)</span>
<span class="token comment"># Note: look for it in /dev/zvol/\${pool}/\${fs_vol}</span>
zfs create <span class="token parameter variable">-V</span> <span class="token operator">&lt;</span>size<span class="token operator">&gt;</span> <span class="token variable">\${pool}</span>/<span class="token variable">\${fs_vol}</span>

<span class="token comment"># List all file systems / volumes</span>
zfs list

<span class="token comment"># Mount all file systems</span>
<span class="token comment"># Note: see &#39;zfs get mountpoint \${pool}&#39; for mountpoint root path</span>
zfs <span class="token function">mount</span> <span class="token parameter variable">-a</span>

<span class="token comment"># Create a snapshot</span>
zfs snapshot <span class="token variable">\${pool}</span>/<span class="token variable">\${fs_vol}</span>@<span class="token variable">\${snapshot}</span>

<span class="token comment"># Delete a snapshot</span>
zfs destroy <span class="token variable">\${pool}</span>/<span class="token variable">\${fs_vol}</span>@<span class="token variable">\${snapshot}</span>

<span class="token comment"># Full backup</span>
<span class="token comment"># Note: pipe (|) source to destination through netcat, SSH, etc.</span>
<span class="token comment"># ... on source:</span>
zfs send <span class="token parameter variable">-p</span> <span class="token parameter variable">-R</span> <span class="token variable">\${pool}</span>/<span class="token variable">\${fs_vol}</span>@<span class="token variable">\${snapshot}</span>
<span class="token comment"># ... on destination:</span>
zfs receive <span class="token parameter variable">-F</span> <span class="token variable">\${pool}</span>/<span class="token variable">\${fs_vol}</span>

<span class="token comment"># Incremental backup</span>
<span class="token comment"># Note: pipe (|) source to destination through netcat, SSH, etc.</span>
<span class="token comment"># ... on source:</span>
zfs send <span class="token parameter variable">-p</span> <span class="token parameter variable">-R</span> <span class="token parameter variable">-i</span> <span class="token variable">\${pool}</span>/<span class="token variable">\${fs_vol}</span>@<span class="token variable">\${snapshot-previous}</span> <span class="token variable">\${pool}</span>/<span class="token variable">\${fs_vol}</span>@<span class="token variable">\${snapshot}</span>
<span class="token comment"># ... on destination:</span>
zfs receive <span class="token parameter variable">-F</span> <span class="token variable">\${pool}</span>/<span class="token variable">\${fs_vol}</span>

<span class="token comment"># Query file system / volume configuration (properties)</span>
zfs get all <span class="token variable">\${pool}</span>
zfs get all <span class="token variable">\${pool}</span>/<span class="token variable">\${fs_vol}</span>

<span class="token comment"># Change file system / volume configuration (property)</span>
zfs <span class="token builtin class-name">set</span> <span class="token operator">&lt;</span>property<span class="token operator">&gt;=</span><span class="token operator">&lt;</span>value<span class="token operator">&gt;</span> <span class="token variable">\${pool}</span>/<span class="token variable">\${fs_vol}</span>

<span class="token comment"># More...</span>
<span class="token function">man</span> zfs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[i];function t(c,p){return s(),a("div",null,o)}const v=n(l,[["render",t],["__file","zfs.html.vue"]]);export{v as default};
