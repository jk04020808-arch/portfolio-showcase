import { motion } from 'motion/react';
import { Play, Sparkles, Layers, Box, Cpu } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 px-6 lg:px-12 border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text */}
        <div className="flex flex-col items-start space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f4f4f5] leading-[1.1]">
              智能体<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">海报生成引擎</span>
            </h1>
            <p className="text-2xl font-medium text-white/80">
              从灵感到海报，只需一句话
            </p>
          </div>

          <p className="text-lg text-white/60 leading-relaxed max-w-xl">
            输入一段文字描述，多智能体协同系统将自动完成理解、布局、配图与排版，将你的想法瞬间转化为极具视觉冲击力的高清海报。
          </p>

          <div className="flex flex-col space-y-3">
            <span className="text-sm text-white/40 uppercase tracking-widest font-mono">核心技术栈</span>
            <div className="flex flex-wrap gap-4 text-white/70">
              <span className="flex items-center gap-2 font-mono text-sm bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"><Box size={14}/> Tailwind CSS</span>
              <span className="flex items-center gap-2 font-mono text-sm bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"><Cpu size={14}/> Claude / DeepSeek</span>
              <span className="flex items-center gap-2 font-mono text-sm bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"><Layers size={14}/> html-to-image</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="relative w-full aspect-video max-w-[600px] mx-auto lg:ml-auto">
          {/* Custom Video Presentation */}
          <div className="w-full h-full border border-[#27272a] bg-[#09090b]/80 rounded-3xl overflow-hidden relative shadow-2xl shadow-black/50 group hover:border-amber-500/30 transition-colors duration-500 flex flex-col">
            {/* Header bar */}
            <div className="h-10 border-b border-[#27272a] flex items-center px-4 gap-2 bg-[#050505] z-10 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#3f3f46]"></div>
              <div className="w-3 h-3 rounded-full bg-[#3f3f46]"></div>
              <div className="w-3 h-3 rounded-full bg-[#3f3f46]"></div>
              <div className="ml-4 font-mono text-[10px] text-white/30 hidden sm:block">智能体编排演示.mp4</div>
            </div>
            
            <div className="flex-1 relative bg-black" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={togglePlay}>
              <video 
                ref={videoRef}
                src="/5月10日.mp4" 
                loop 
                muted 
                playsInline
                className="w-full h-full object-contain absolute inset-0 cursor-pointer"
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#18181b] text-white flex items-center justify-center pl-1 backdrop-blur-sm border border-[#27272a] shadow-xl group-hover:scale-110 group-hover:border-amber-500/50 transition-all duration-300">
                    <Play fill="currentColor" size={24} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
