import{_ as n,o as s,c as e,e as a}from"./app.a667bd71.js";const i={},l=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Submit a new job:</span>
<span class="token comment">#\u63D0\u4EA4\u4E00\u4EFD\u65B0\u5DE5\u4F5C\uFF1A</span>
sbatch job.sh

<span class="token comment"># List all jobs for a user:</span>
<span class="token comment">#\u5217\u51FA\u7528\u6237\u7684\u6240\u6709\u5DE5\u4F5C\uFF1A</span>
squeue <span class="token parameter variable">-u</span> user_name

<span class="token comment"># Cancel a job by id or name:</span>
<span class="token comment">#\u901A\u8FC7ID\u6216\u540D\u79F0\u53D6\u6D88\u4F5C\u4E1A\uFF1A</span>
scancel job_id
scancel <span class="token parameter variable">--name</span> job_name

<span class="token comment"># List all information for a job:</span>
<span class="token comment">#\u5217\u51FA\u5DE5\u4F5C\u7684\u6240\u6709\u4FE1\u606F\uFF1A</span>
scontrol show jobid <span class="token parameter variable">-dd</span> job_id

<span class="token comment"># Status info for currently running job:</span>
<span class="token comment">#\u5F53\u524D\u8FD0\u884C\u4F5C\u4E1A\u7684\u72B6\u6001\u4FE1\u606F\uFF1A</span>
sstat <span class="token parameter variable">--format</span><span class="token operator">=</span>AveCPU,AvePages,AveRSS,AveVMSize,JobID <span class="token parameter variable">-j</span> job_id <span class="token parameter variable">--allsteps</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function r(o,t){return s(),e("div",null,c)}const m=n(i,[["render",r],["__file","slurm.html.vue"]]);export{m as default};
