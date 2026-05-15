import { motion, AnimatePresence } from 'motion/react';
import { Paperclip, SlidersHorizontal, ArrowUp, Sparkles, X, Layout } from 'lucide-react';
import { useState } from 'react';

export default function InteractiveDemo() {
  const [showSettings, setShowSettings] = useState(false);
  const sizes = [
    "A0 (超大展板)", 
    "A1 (大型展板)", 
    "A2 (中型展板)", 
    "A3 (小型展板)", 
    "A4 (打印标准)", 
    "16:9 (横向展板)", 
    "9:16 (竖向展板)", 
    "1:1 (社交媒体)"
  ];
  const [selectedSize, setSelectedSize] = useState("16:9 (横向展板)");

  return (
    <section id="demo" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-[#050505] overflow-hidden pt-20 pb-32">
      {/* Background gradients/waves */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Subtle glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-900/5 blur-[150px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-900/5 blur-[150px]"></div>
        {/* Curved lines suggesting a wave, styled via svg */}
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
           <path d="M-100 450 C 300 250, 800 750, 1600 350" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-500/20" />
           <path d="M-100 650 C 400 850, 800 150, 1600 550" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-orange-500/20" />
           <path d="M-200 300 C 400 100, 1000 900, 1800 400" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-500/10" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 flex flex-col items-center mt-12">
        {/* Icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-[88px] h-[88px] rounded-full border border-[#27272a] flex items-center justify-center mb-10 bg-[#09090b] relative shadow-[0_0_40px_rgba(245,158,11,0.05)]"
        >
          <div className="absolute inset-0 rounded-full border border-amber-500/10 scale-[1.12]"></div>
          <Sparkles className="text-amber-500" size={32} />
        </motion.div>

        {/* Title & Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-14"
        >
          <h2 className="text-[40px] md:text-[44px] font-bold tracking-wider text-white mb-5">
            要设计什么类型的项目展板？
          </h2>
          <p className="text-white/40 text-[15px] font-light tracking-wide">
            描述项目概念、风格或上传参考图，多智能体系统将为您演算完整方案
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-[800px] mb-12"
        >
          <div className="relative flex items-center bg-[#09090b] border border-white/5 rounded-[48px] p-2 pr-3 shadow-2xl transition-all focus-within:border-amber-500/30 hover:border-white/10 h-[88px]">
            <button className="flex items-center justify-center w-[60px] h-[60px] ml-1 rounded-full bg-white/[0.03] text-white/40 hover:text-white transition-colors">
              <Paperclip size={22} />
            </button>
            
            <div className="flex-1 flex flex-col justify-center h-full ml-5 mr-4 relative">
              <input 
                type="text" 
                placeholder="为极简沙漠植物..." 
                className="w-full bg-transparent border-none outline-none text-white placeholder-white/20 text-[17px] pb-3"
              />
              <div className="absolute bottom-[22px] left-0 right-0 h-[1px] bg-white/[0.06]"></div>
            </div>

            <div className="flex items-center gap-2 relative">
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className={`flex items-center justify-center w-[52px] h-[52px] rounded-full transition-colors ${showSettings ? 'bg-amber-500/10 text-amber-500' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
              >
                <SlidersHorizontal size={22} />
              </button>

              {/* Settings Popover */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 bottom-[120%] w-56 bg-[#09090b] border border-[#27272a] rounded-xl shadow-2xl overflow-hidden z-20"
                  >
                    <div className="p-3 border-b border-white/5 flex items-center justify-between">
                      <span className="text-xs font-medium text-white/80 flex items-center gap-2">
                        <Layout size={14} /> 
                        展板比例
                      </span>
                      <button onClick={() => setShowSettings(false)} className="text-white/40 hover:text-white">
                        <X size={14} />
                      </button>
                    </div>
                    <div className="p-2 flex flex-col gap-1 max-h-[300px] overflow-y-auto custom-scrollbar">
                       {sizes.map((size) => (
                         <button 
                           key={size}
                           onClick={() => { setSelectedSize(size); setShowSettings(false); }}
                           className={`text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center justify-between ${selectedSize === size ? 'bg-amber-500/10 text-amber-400' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                         >
                            <span>{size}</span>
                            {selectedSize === size && <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>}
                         </button>
                       ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white/[0.03] text-white/50 hover:bg-white/10 hover:text-white transition-colors border border-white/5 ml-1">
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
