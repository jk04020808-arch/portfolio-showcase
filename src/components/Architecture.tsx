import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrainCircuit, Brush, AlignLeft, Code2, Globe } from 'lucide-react';

const agents = [
  {
    id: "visual",
    name: "主视觉工匠",
    icon: Brush,
    color: "from-zinc-300 to-stone-500 text-black",
    json: `{
  "agent": "VisualZone",
  "prompt": "Cyberpunk city, neon lights, high res...",
  "themeColor": "#A3E635",
  "gridSpan": { "col": 8, "row": 12 }
}`
  },
  {
    id: "copy",
    name: "文案提炼工匠",
    icon: AlignLeft,
    color: "from-amber-500 to-orange-400 text-black",
    json: `{
  "agent": "CopyZone",
  "headline": "AGENTIC STUDIO",
  "subHeadline": "Auto Layout Engine",
  "gridSpan": { "col": 4, "row": 6 }
}`
  },
  {
    id: "i18n",
    name: "翻译与排版",
    icon: Globe,
    color: "from-neutral-400 to-zinc-600 text-white",
    json: `{
  "agent": "I18nZone",
  "translations": {
    "zh": "多智能体海报引擎",
    "en": "Multi-Agent Poster Eng"
  },
  "gridSpan": { "col": 4, "row": 6 }
}`
  }
];

export default function Architecture() {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  return (
    <section id="architecture" className="py-24 px-6 lg:px-12 border-b border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f4f4f5] mb-6">
            智能体 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">架构设计</span>
          </h2>
          <p className="text-xl text-white/60 font-medium max-w-3xl mx-auto">
            采用 <strong className="text-white">“主脑 + 专项工匠”</strong> 的多智能体协同架构。
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 py-12">
          
          {/* Connecting Lines (Desktop) */}
          <div className="hidden md:block absolute left-[50%] top-1/2 -translate-y-1/2 w-32 h-[300px]">
             {/* Lines rendering from left brain to right agents */}
             <svg className="w-full h-full text-white/5" preserveAspectRatio="none" viewBox="0 0 100 300">
               <path d="M0,150 C50,150 50,50 100,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className={hoveredAgent === 'visual' ? 'stroke-zinc-400' : ''} />
               <path d="M0,150 C50,150 50,150 100,150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className={hoveredAgent === 'copy' ? 'stroke-amber-500' : ''} />
               <path d="M0,150 C50,150 50,250 100,250" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className={hoveredAgent === 'i18n' ? 'stroke-zinc-500' : ''} />
             </svg>
          </div>

          {/* Director Agent */}
          <div className="relative group z-10">
            <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full" />
            <div className="relative w-48 h-48 rounded-2xl bg-[#111113] border border-white/5 flex flex-col items-center justify-center gap-4 transition-transform hover:scale-105 shadow-2xl shadow-amber-900/10 hover:border-amber-500/20">
               <BrainCircuit size={48} className="text-amber-500" />
               <div className="text-center">
                 <h3 className="text-lg font-bold text-white">主脑智能体</h3>
                 <p className="text-xs text-white/50 uppercase tracking-widest mt-1">控制节点</p>
               </div>
            </div>
            {/* Tooltip for Director */}
            <div className="absolute top-[110%] left-1/2 -translate-x-1/2 w-64 bg-black border border-white/10 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
               <p className="text-sm text-white/70">负责定基调。规划全局排版结构（定义 12 栅格方案中每个元素的宽高比例），提取主题色，并分发任务。</p>
            </div>
          </div>

          {/* Zone Agents */}
          <div className="flex flex-col gap-8 z-10 w-full max-w-sm relative">
            {agents.map((agent) => {
              const Icon = agent.icon;
              return (
                <div 
                  key={agent.id}
                  className="relative group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all cursor-pointer flex items-center gap-4"
                  onMouseEnter={() => setHoveredAgent(agent.id)}
                  onMouseLeave={() => setHoveredAgent(null)}
                >
                  <div className={"w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center " + agent.color}>
                    <Icon className="text-current" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{agent.name}</h4>
                    <p className="text-xs text-white/40 font-mono mt-1">分区智能体</p>
                  </div>

                  {/* JSON Popover */}
                  <AnimatePresence>
                    {hoveredAgent === agent.id && (
                      <motion.div 
                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -10, scale: 0.95 }}
                        className="absolute left-[105%] top-1/2 -translate-y-1/2 bg-[#18181b] border border-white/5 rounded-xl p-4 shadow-2xl z-30 w-72 md:w-80"
                      >
                        <div className="flex items-center gap-2 mb-2 text-xs text-white/40 uppercase tracking-widest border-b border-white/10 pb-2">
                           <Code2 size={12} /> JSON 输出结构
                        </div>
                        <pre className="text-xs font-mono text-amber-500 overflow-x-auto">
                          <code>{agent.json}</code>
                        </pre>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
