import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Home, AlertCircle, BrainCircuit, Sparkles, Image as ImageIcon, Flag } from 'lucide-react';

const navItems = [
  { id: 'hero', label: '首屏', icon: Home },
  { id: 'problem', label: '痛点', icon: AlertCircle },
  { id: 'architecture', label: '架构', icon: BrainCircuit },
  { id: 'highlights', label: '亮点', icon: Sparkles },
  { id: 'showcase', label: '展板', icon: ImageIcon },
  { id: 'conclusion', label: '总结', icon: Flag },
];

export default function Navigation() {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentActiveId = 'hero';
      sections.forEach((section) => {
        if (section && section.offsetTop <= scrollPosition) {
          currentActiveId = section.id;
        }
      });
      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.nav 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-row gap-2 bg-black/40 backdrop-blur-md p-2 rounded-full shadow-2xl"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 text-[#f4f4f5]' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute inset-0 rounded-full border border-white/20"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon size={18} />
              
              {/* Tooltip */}
              <span className="absolute top-[calc(100%+12px)] px-3 py-1.5 bg-black/80 border border-white/10 text-white/90 text-xs font-medium rounded-lg opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap shadow-xl">
                {item.label}
              </span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
}
