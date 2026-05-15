import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, Columns, DownloadCloud } from 'lucide-react';

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 px-6 lg:px-12 border-b border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f4f4f5] mb-6">
            前端工程化 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">亮点</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            从“盲盒”走向“白盒”，用前端工程化手段解决真实的排版与渲染挑战。
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px]">
          
          {/* Highlight 1: Whitebox vs Blackbox (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 rounded-3xl bg-[#09090b] border border-white/5 overflow-hidden relative group flex flex-col">
             <div className="p-8 pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <ArrowLeftRight className="text-amber-500" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">创新的双模界面设计</h3>
                </div>
                <p className="text-sm text-white/60 mb-2">
                  无缝切换 Editor（编辑态）与 Preview（预览态）。编辑态暴露 AI 的“思维过程”与物理排版边界；预览态隐去代码痕迹，提供沉浸式成品体验。
                </p>
             </div>
             <div className="flex-1 relative overflow-hidden bg-black/50 mx-8 mb-8 rounded-2xl border border-white/5">
                <SliderDemo />
             </div>
          </div>

          {/* Highlight 2: Dynamic CSS Grid */}
          <div className="rounded-3xl bg-[#09090b] border border-white/5 overflow-hidden relative flex flex-col">
             <div className="p-8 pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <Columns className="text-orange-500" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">动态 12 栅格推算</h3>
                </div>
                <p className="text-sm text-white/60">
                 放弃死板绝对定位，利用 Tailwind CSS 12 栅格系统承接 AI 结构化 JSON，实现模块犹如俄罗斯方块般自适应排列。
                </p>
             </div>
             <div className="flex-1 relative mx-8 mb-8 rounded-2xl border border-[#27272a] bg-[#050505] overflow-hidden flex items-center justify-center">
                <GridAnimationDemo />
             </div>
          </div>

          {/* Highlight 3: Streaming & Export */}
          <div className="lg:col-span-3 rounded-3xl bg-[#09090b] border border-white/5 overflow-hidden relative flex flex-col md:flex-row">
             <div className="p-8 md:w-1/3 border-r border-white/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#3f3f46]/30 flex items-center justify-center">
                    <DownloadCloud className="text-zinc-400" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">高清流式渲染与导出</h3>
                </div>
                <p className="text-sm text-white/60 mb-4">
                  流式响应解决大模型延迟，实现打字机效果。并巧妙解决了 <code>html-to-image</code> 的跨域污染和视网膜屏幕高清截断问题。
                </p>
             </div>
             <div className="md:w-2/3 bg-[#000000] p-8 relative flex items-center overflow-x-auto">
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                </div>
                <pre className="text-xs lg:text-sm font-mono text-white/80 whitespace-pre-wrap">
                  <span className="text-amber-500">const</span> exportImage = <span className="text-orange-400">async</span> (element) {`=>`} {'{\n'}
                  {'  '}<span className="text-white/40">// 解决 Retina 屏幕发虚与跨域污染问题</span>{'\n'}
                  {'  '}<span className="text-amber-500">const</span> scale = <span className="text-orange-400">window</span>.devicePixelRatio || <span className="text-zinc-400">1</span>;{'\n'}
                  {'  '}<span className="text-amber-500">const</span> options = {'{\n'}
                  {'    '}width: element.clientWidth * scale,{'\n'}
                  {'    '}height: element.clientHeight * scale,{'\n'}
                  {'    '}style: {'{'} transform: <span className="text-zinc-400">{`\`scale(\${scale})\``}</span>, transformOrigin: <span className="text-zinc-400">'top left'</span> {'}'},{'\n'}
                  {'    '}pixelRatio: scale,{'\n'}
                  {'    '}useCORS: <span className="text-zinc-400">true</span> <span className="text-white/40">// 处理外部 AI 图像生成的跨域问题</span>{'\n'}
                  {'  }'};{'\n'}
                  {'  '}<span className="text-amber-500">return</span> <span className="text-orange-400">await</span> toPng(element, options);{'\n'}
                  {'}'}
                </pre>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SliderDemo() {
  const [sliderVal, setSliderVal] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      className="absolute inset-0 select-none touch-none"
      ref={containerRef}
      onPointerMove={(e) => {
        if (!containerRef.current || e.buttons !== 1) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        setSliderVal(Math.max(0, Math.min(100, (x / rect.width) * 100)));
      }}
      onPointerDown={(e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        setSliderVal(Math.max(0, Math.min(100, (x / rect.width) * 100)));
      }}
    >
       {/* Preview State (Bottom Layer - "Blackbox") */}
       <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#18181b] to-black flex items-center justify-center overflow-hidden">
          <div className="w-[85%] sm:w-[360px] flex flex-col justify-center">
             <div className="h-24 mb-4 flex flex-col justify-center bg-black/40 border border-white/5 p-4 shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                 <h1 className="text-3xl font-bold font-heading uppercase text-amber-500 tracking-widest leading-none mb-1">赛博原生</h1>
                 <p className="text-[10px] text-white/40 font-mono">STYLE: CYBERPUNK_2026 // TYPE: GROTESK</p>
             </div>
             <div className="h-40 relative overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0c] flex flex-col p-4 text-left group">
                 {/* Cyberpunk Grid Background */}
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#db8a0020 1px, transparent 1px), linear-gradient(90deg, #db8a0020 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                 <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent"></div>
                 
                 {/* Content Overlay */}
                 <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                       <div>
                          <div className="w-8 h-1 bg-amber-500 mb-2 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                          <h3 className="text-white font-bold tracking-widest text-sm uppercase">Neural Sync</h3>
                          <div className="text-amber-500/70 font-mono text-[8px] tracking-widest animate-pulse">SYS_OPT_001 // ACTIVE</div>
                       </div>
                       <div className="w-10 h-10 border border-amber-500/30 rounded-full flex items-center justify-center relative bg-black/40 backdrop-blur">
                          <div className="w-8 h-8 rounded-full border border-amber-500/10 border-t-amber-500 animate-[spin_3s_linear_infinite]"></div>
                          <div className="absolute w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_5px_rgba(245,158,11,1)]"></div>
                       </div>
                    </div>
                    
                    <div className="flex gap-2 w-full mt-2">
                       <div className="flex-1 bg-black/40 border border-white/10 p-2 backdrop-blur-sm relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-0.5 h-full bg-orange-500/50"></div>
                          <div className="text-[8px] text-white/40 mb-1 font-mono uppercase">Capacity</div>
                          <div className="text-xs sm:text-sm font-bold text-white tracking-widest">94.2<span className="text-white/40 text-[9px]">%</span></div>
                       </div>
                       <div className="flex-1 bg-black/40 border border-white/10 p-2 backdrop-blur-sm relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-0.5 h-full bg-amber-500/50"></div>
                          <div className="text-[8px] text-white/40 mb-1 font-mono uppercase">Latency</div>
                          <div className="text-xs sm:text-sm font-bold text-white tracking-widest">12<span className="text-white/40 text-[9px]">ms</span></div>
                       </div>
                    </div>
                 </div>

                 <div className="absolute bottom-1.5 right-1.5 text-[8px] text-amber-500/80 font-mono bg-black/80 px-1.5 py-0.5 rounded border border-amber-500/20 backdrop-blur-md">
                    ASSET_ID: 89A2-F8
                 </div>
             </div>
          </div>
       </div>

       {/* Editor State (Top Layer - "Whitebox") */}
       <div 
         className="absolute inset-0 z-10 bg-[#050505] flex items-center justify-center border-r-2 border-stone-500 overflow-hidden"
         style={{ clipPath: `inset(0 ${100 - sliderVal}% 0 0)` }}
       >
          <div className="w-[85%] sm:w-[360px] flex flex-col justify-center">
             <div className="border border-orange-500/30 border-dashed p-4 relative mb-4 h-24 flex items-center bg-[#050505]">
                <div className="absolute -top-3 left-2 bg-[#050505] px-1 text-orange-500 text-[10px] sm:text-xs">{"<HeaderBlock> span: 12"}</div>
                <pre className="whitespace-pre overflow-hidden text-orange-400 font-mono text-[10px] sm:text-xs leading-relaxed">
{`{
  "title": "赛博原生",
  "theme": "CYBERPUNK",
  "font": "GROTESK"
}`}
                </pre>
             </div>
             <div className="border border-orange-500/30 border-dashed p-4 relative h-40 flex flex-col justify-center bg-[#050505] overflow-hidden">
                <div className="absolute -top-3 left-2 bg-[#050505] px-1 text-orange-500 text-[10px] sm:text-xs">{"<MetricsBlock> span: 12"}</div>
                <pre className="whitespace-pre overflow-hidden text-orange-400 font-mono text-[10px] sm:text-xs leading-relaxed">
{`{
  "component": "NeuralSync",
  "status": "ACTIVE",
  "data": {
    "capacity": 94.2,
    "latency": 12
  },
  "style": { "glow": "amber" }
}`}
                </pre>
             </div>
          </div>
       </div>

       {/* Slider Handle */}
       <div 
         className="absolute top-0 bottom-0 w-1 bg-stone-500 cursor-ew-resize flex items-center justify-center z-20"
         style={{ left: `calc(${sliderVal}% - 2px)` }}
       >
         <div className="w-6 h-6 bg-stone-500 rounded-full flex items-center justify-center shadow-lg shadow-black/50">
           <ArrowLeftRight size={14} className="text-black" />
         </div>
       </div>
       
       <div className="absolute bottom-2 left-4 px-2 py-1 bg-black/80 text-xs font-mono text-orange-400 rounded z-20">白盒模式</div>
       <div className="absolute bottom-2 right-4 px-2 py-1 bg-black/80 text-xs font-mono text-stone-400 rounded z-20">预览模式</div>
    </div>
  )
}

function GridAnimationDemo() {
  const layouts = [
    [
      { id: 1, col: 'col-span-12', row: 'row-span-1', color: 'bg-zinc-800/80 border-zinc-700' },
      { id: 2, col: 'col-span-8', row: 'row-span-2', color: 'bg-stone-800/80 border-stone-700' },
      { id: 3, col: 'col-span-4', row: 'row-span-2', color: 'bg-[#18181b] border-white/10' },
    ],
    [
      { id: 1, col: 'col-span-4', row: 'row-span-3', color: 'bg-zinc-800/80 border-zinc-700' },
      { id: 2, col: 'col-span-8', row: 'row-span-1', color: 'bg-stone-800/80 border-stone-700' },
      { id: 3, col: 'col-span-8', row: 'row-span-2', color: 'bg-[#18181b] border-white/10' },
    ],
    [
      { id: 3, col: 'col-span-12', row: 'row-span-1', color: 'bg-[#18181b] border-white/10' },
      { id: 1, col: 'col-span-6', row: 'row-span-2', color: 'bg-zinc-800/80 border-zinc-700' },
      { id: 2, col: 'col-span-6', row: 'row-span-2', color: 'bg-stone-800/80 border-stone-700' },
    ]
  ];

  const [currentLayout, setCurrentLayout] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLayout((prev) => (prev + 1) % layouts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-4 grid grid-cols-12 grid-rows-3 gap-2">
      {layouts[currentLayout].map((item) => (
        <motion.div
           key={item.id}
           layout
           transition={{ type: 'spring', stiffness: 200, damping: 20 }}
           className={`rounded-lg border overflow-hidden relative ${item.col} ${item.row} ${item.color} flex flex-col justify-center`}
        >
          {item.id === 1 && (
            <div className="p-4 w-full h-full flex flex-col justify-between">
              <div className="w-3/4 h-2.5 bg-white/20 rounded-full mb-2"></div>
              <div className="w-1/2 h-2.5 bg-white/10 rounded-full"></div>
            </div>
          )}
          {item.id === 2 && (
            <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-4">
              <div className="w-10 h-10 rounded-full border border-white/20 flex flex-col items-center justify-center gap-1 opacity-50">
                <div className="w-3 h-3 rounded-full bg-white/40"></div>
              </div>
              <div className="ml-3 flex-1">
                 <div className="w-full h-2 bg-white/10 rounded-full mb-2"></div>
                 <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
              </div>
            </div>
          )}
          {item.id === 3 && (
            <div className="p-4 w-full h-full flex flex-col gap-2 justify-end items-end">
               <div className="w-full h-2 bg-white/10 rounded-full"></div>
               <div className="w-4/5 h-2 bg-white/10 rounded-full"></div>
               <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
            </div>
          )}
          <span className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-30">
            <span className="text-white text-[10px] font-mono tracking-widest uppercase">Block {item.id}</span>
          </span>
        </motion.div>
      ))}
    </div>
  )
}
