import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Settings, Maximize2, RotateCcw, Monitor } from 'lucide-react';

export function Layout10({ preset, data }: any) {
  const comp = useRef(null);
  const [activeX, setActiveX] = useState(50);
  const [activeY, setActiveY] = useState(50);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".window-pane", {
        scale: 0.95, y: 50, opacity: 0, duration: 1.2, stagger: 0.1, ease: "power4.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setActiveX(x);
    setActiveY(y);
  };

  return (
    <div ref={comp} className="w-full min-h-screen bg-[var(--c-bg)] text-[var(--c-text)] font-[Manrope] p-4 md:p-8 flex flex-col items-center">
      
      <div className="w-full max-w-7xl flex-1 flex flex-col">
        {/* Header Workbench */}
        <header className="flex justify-between items-center mb-8 window-pane w-full">
          <div className="flex gap-4 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 font-bold tracking-widest text-white/80 uppercase text-sm">{data.brand} // Workbench</div>
          </div>
          <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded font-[JetBrains_Mono] text-xs font-bold transition-colors">
            <Monitor size={14} /> LIVE DEMO
          </button>
        </header>

        {/* The Sandbox Layout */}
        <main className="flex-1 flex flex-col md:flex-row gap-4 h-full relative z-10">
          
          {/* Left Panel */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            
            <div className="bg-[#111111] p-8 rounded-xl border border-white/10 window-pane flex-1">
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white leading-tight">
                {preset.hero.line1} <br/>
                <span className="font-[Bodoni_Moda] italic text-[var(--c-accent)] text-5xl lg:text-6xl">{preset.hero.line2}</span>
              </h1>
              <p className="text-[#A3A3A3] text-sm leading-relaxed mb-8">
                {data.purpose}
              </p>
              <button className="w-full py-4 bg-[var(--c-accent)] text-black font-bold text-lg rounded hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                {data.ctaText}
              </button>
            </div>

            <div className="bg-[#111111] rounded-xl border border-white/10 window-pane flex flex-col">
              <div className="p-4 border-b border-white/5 flex gap-4 text-xs font-bold font-[JetBrains_Mono] text-[#A3A3A3]">
                <Settings size={14}/> Parameters
              </div>
              <div className="p-6 flex flex-col gap-6">
                 {/* Fake Sliders */}
                 {data.valueProps.slice(0, 2).map((vp: any, i: number) => (
                   <div key={i}>
                     <div className="flex justify-between text-xs font-[JetBrains_Mono] text-white/50 mb-2">
                       <span>{vp.title.toUpperCase()}</span>
                       <span>{Math.round(activeX)}.{Math.round(activeY)}</span>
                     </div>
                     <div className="w-full h-1 bg-white/10 rounded overflow-hidden">
                       <div className="h-full bg-[var(--c-accent)] transition-all ease-out duration-75" style={{ width: `${i === 0 ? activeX : activeY}%` }}></div>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

          </div>

          {/* Right Panel - Canvas Interaction */}
          <div 
            className="w-full md:w-2/3 bg-[#111111] rounded-xl border border-[var(--c-accent)]/30 window-pane relative overflow-hidden group cursor-crosshair flex items-center justify-center p-8 text-center"
            onMouseMove={handleMouseMove}
          >
            {/* Interactive Grid Background */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-75 ease-out"
              style={{
                backgroundImage: `radial-gradient(circle at ${activeX}% ${activeY}%, var(--c-accent) 0%, transparent 20%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: '100% 100%, 20px 20px, 20px 20px'
              }}
            ></div>
            
            <div className="relative z-10 w-full max-w-lg border border-[var(--c-accent)]/50 bg-[#0A0A0A]/80 backdrop-blur-sm p-8 rounded-lg">
               <RotateCcw size={32} className="mx-auto text-[var(--c-accent)] mb-6 opacity-80" />
               <h3 className="text-2xl font-bold text-white mb-2">{data.valueProps[2].title}</h3>
               <p className="font-[JetBrains_Mono] text-sm text-[#A3A3A3] mb-8">{data.valueProps[2].desc}</p>
               <div className="font-[JetBrains_Mono] text-xs text-[var(--c-accent)]">
                 [ X: {Math.round(activeX)}, Y: {Math.round(activeY)} ]
               </div>
            </div>

            <div className="absolute top-4 right-4 flex gap-2">
              <button className="bg-white/10 p-2 rounded hover:bg-white/20 text-white transition-colors"><Maximize2 size={16}/></button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
