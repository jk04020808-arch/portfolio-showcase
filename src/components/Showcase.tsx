import { motion } from 'motion/react';
import { Layout, Image as ImageIcon, Type, Sparkles } from 'lucide-react';

const posters = [
  {
    id: 1,
    image: 'poster-SILENT DUNE.png',
    title: 'SILENT DUNE',
    span: 'col-span-1'
  },
  {
    id: 2,
    image: 'poster-极简沙漠植物雕塑.png',
    title: 'DESERT SCULPTURE',
    span: 'col-span-1'
  },
  {
    id: 3,
    image: 'poster-深渊探机.png',
    title: 'ABYSS EXPLORER',
    span: 'col-span-1'
  },
  {
    id: 4,
    image: 'poster-FUTURE AGRI-HUB.png',
    title: 'AGRI HUB (EN)',
    span: 'col-span-1'
  },
  {
    id: 5,
    image: 'poster-未来农业枢纽.png',
    title: '未来农业枢纽 (CN)',
    span: 'col-span-1'
  }
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 px-6 lg:px-12 border-b border-white/5 bg-[#0a0a0a]">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-16 px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold text-amber-500 border border-amber-500/30 rounded-full bg-amber-500/10 backdrop-blur-sm mb-4">
            <Sparkles size={16} />
            <span>作品画廊</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f4f4f5] mb-6">
            精选 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">视觉作品</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            对未来概念与建筑范式的平行探索。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4 overflow-x-hidden">
          {posters.map((poster, i) => (
            <motion.div
              key={poster.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative group rounded-2xl overflow-hidden bg-black border border-white/5 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/20 aspect-[3/4] ${poster.span}`}
            >
              {/* Image Container */}
              <div className="w-full h-full overflow-hidden relative bg-zinc-950">
                <img 
                  src={poster.image} 
                  alt={poster.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                {/* Fallback overlay in case image isn't loaded */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 bg-zinc-900 text-zinc-600 font-mono text-sm group-hover:opacity-0 transition-opacity">
                  [ 图像: {poster.title} ]<br/>
                  (请将压缩图像上传至 /public)
                </div>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white tracking-widest">{poster.title}</h3>
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                          <ImageIcon size={14} className="text-white" />
                        </div>
                    </div>
                  </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
