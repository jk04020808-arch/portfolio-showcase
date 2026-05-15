import { motion } from 'motion/react';
import { ArrowRight, Clock, Zap, XCircle, CheckCircle2 } from 'lucide-react';

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 lg:px-12 border-b border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f4f4f5] mb-6">
              痛点 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">分析</span>
            </h2>
            
            <p className="text-lg text-[#d4d4d8] leading-relaxed">
              传统的排版工具（如 PS、Canva）面临着<strong className="text-white">“高门槛、低效”</strong>的问题，即使提供了模板，用户面对需要大量改写的文案和找图依然不知所措；而主流 AI 绘画工具（如 Midjourney）只能生成底图，无法生成精确、可编辑的排版文字。
            </p>

            <div className="space-y-6 pt-4">
              <div className="p-6 rounded-2xl bg-orange-950/20 border border-orange-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="text-orange-400" size={24} />
                  <h3 className="text-xl font-semibold text-white">传统流程</h3>
                </div>
                <p className="text-white/60 mb-4">排版痛苦微调，耗时数小时甚至一天。</p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-orange-300/80 font-medium">
                  <span className="bg-orange-900/30 px-3 py-1 rounded">构思文字</span>
                  <ArrowRight size={14} className="opacity-50" />
                  <span className="bg-orange-900/30 px-3 py-1 rounded">寻找配图</span>
                  <ArrowRight size={14} className="opacity-50" />
                  <span className="bg-orange-900/30 px-3 py-1 rounded">寻找模板</span>
                  <ArrowRight size={14} className="opacity-50" />
                  <span className="bg-orange-900/30 px-3 py-1 rounded border border-orange-500/50">痛苦微调</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-orange-400/60 font-mono">
                  <Clock size={12} /> 耗时: 3 - 5 hrs
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#27272a] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Zap size={100} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="text-amber-500" size={24} />
                    <h3 className="text-xl font-semibold text-white">Agentic 流程</h3>
                  </div>
                  <p className="text-white/60 mb-4">意图驱动，AI 自动拆解与流式布局。</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-amber-500/80 font-medium">
                    <span className="bg-amber-500/10 px-3 py-1 rounded">输入意图或粗略文案</span>
                    <ArrowRight size={14} className="opacity-50" />
                    <span className="bg-amber-500/10 px-3 py-1 rounded">AI 拆解区块并出图</span>
                    <ArrowRight size={14} className="opacity-50" />
                    <span className="bg-amber-500 text-black px-3 py-1 rounded shadow-[0_0_15px_rgba(245,158,11,0.4)]">代码层动态排版</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-amber-500/80 font-mono">
                    <Clock size={12} /> 耗时: ~ 1 min
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Comparison */}
          <div className="relative w-full h-[500px] flex items-center justify-center p-8 bg-black/20 border border-white/5 rounded-3xl">
            {/* Artistic abstraction of the old vs new */}
            <div className="w-full h-full flex flex-col justify-between">
              
              {/* Old way */}
              <div className="h-[45%] bg-black/40 rounded-xl border border-white/5 border-dashed flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <div className="w-full text-center font-mono text-[80px] tracking-[0.5em] font-bold text-orange-500 blur-sm">混乱</div>
                 </div>
                 <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded flex items-center justify-center"><XCircle className="text-white/20"/></div>
                      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded flex items-center justify-center text-xs text-white/30 text-center p-1">排版错乱</div>
                      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded flex items-center justify-center"><XCircle className="text-white/20"/></div>
                    </div>
                    <div className="text-sm font-mono text-white/40 border border-white/10 px-4 py-2 rounded-full uppercase tracking-widest">人工手动微调</div>
                 </div>
              </div>

              {/* New way */}
              <div className="h-[50%] bg-[#0a0a0a] rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden shadow-lg shadow-black">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                <div className="grid grid-cols-4 grid-rows-2 gap-2 w-3/4 h-3/4 relative z-10">
                  <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }} className="col-span-2 row-span-2 bg-zinc-800/80 rounded border border-zinc-700 flex flex-col justify-between p-3">
                     <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
                     <div className="space-y-1">
                        <div className="h-2 w-full bg-zinc-700 rounded"></div>
                        <div className="h-2 w-2/3 bg-zinc-700 rounded"></div>
                     </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 0.3, duration: 1, repeat: Infinity, repeatType: 'reverse' }} className="col-span-2 row-span-1 bg-stone-800/80 rounded border border-stone-700 p-2 flex items-center">
                    <div className="h-2 w-3/4 bg-stone-700 rounded"></div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 0.6, duration: 1, repeat: Infinity, repeatType: 'reverse' }} className="col-span-1 row-span-1 bg-[#18181b] rounded border border-white/10 flex flex-col justify-center items-center gap-1">
                    <div className="h-1 w-1/2 bg-white/20 rounded"></div>
                    <div className="h-1 w-1/2 bg-white/20 rounded"></div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 0.9, duration: 1, repeat: Infinity, repeatType: 'reverse' }} className="col-span-1 row-span-1 bg-amber-500/10 rounded border border-amber-500/30 flex items-center justify-center">
                    <Zap className="text-amber-500/80" size={16} />
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
