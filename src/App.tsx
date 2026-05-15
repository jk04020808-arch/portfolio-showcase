import Hero from './components/Hero';
import InteractiveDemo from './components/InteractiveDemo';
import Problem from './components/Problem';
import Architecture from './components/Architecture';
import Highlights from './components/Highlights';
import Showcase from './components/Showcase';
import Conclusion from './components/Conclusion';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] selection:bg-amber-500/30 selection:text-amber-100 overflow-x-hidden relative font-sans">
      <Navigation />
      <Hero />
      <InteractiveDemo />
      <Problem />
      <Architecture />
      <Highlights />
      <Showcase />
      <Conclusion />
    </div>
  );
}
