import { ExternalLink, Github, Quote } from 'lucide-react';

export default function Conclusion() {
  return (
    <section id="conclusion" className="py-24 px-6 lg:px-12 bg-[#050505]">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Key Takeaway */}
        <div className="relative p-8 md:p-12 rounded-3xl bg-[#09090b] border border-white/5 hover:border-amber-500/30 transition-colors shadow-2xl shadow-black/50">
          <Quote className="absolute top-8 left-8 text-white/5 rotate-180" size={64} />
          
          <div className="relative z-10">
            <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-6 font-mono">
              核心收获
            </h3>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-[#f4f4f5] leading-relaxed indent-12 pt-4">
              这个项目让我意识到，在 AI 时代前端开发不仅是“还原设计稿”，更是<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">“设计一套规则来承接无限可能的数据”</span>。UI 正在从静态的页面走向『动态的、随内容生长的容器』。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <a 
              href="https://ai.studio/apps/2975383f-b5d8-4cf5-b200-92c33aeea662" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#f4f4f5] text-[#09090b] font-bold rounded-full overflow-hidden hover:scale-105 active:scale-95 transition-transform"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <span>体验区</span>
              <ExternalLink size={18} />
            </a>
            
            <a 
              href="https://github.com/jk04020808-arch/ai-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-black/20 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 active:scale-95 transition-all"
            >
              <Github size={18} />
              <span>源码参考</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-24 pb-8 text-center text-sm text-white/40 font-mono flex flex-col items-center gap-2">
           <div className="h-px w-24 bg-white/10 mb-4"></div>
           <p>为智能体网络进行设计与工程化开发。</p>
           <p>© {new Date().getFullYear()} 版权所有.</p>
        </footer>
      </div>
    </section>
  );
}
