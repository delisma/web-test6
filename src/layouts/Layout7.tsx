import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Terminal, Box, Layers, Play } from 'lucide-react';

export function Layout7({ preset, data }: any) {
  const comp = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".grid-line", { scaleY: 0, stagger: 0.1, duration: 1, ease: "power3.inOut" });
      gsap.from(".ui-panel", { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, delay: 0.5 });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="w-full min-h-screen bg-[var(--c-bg)] text-[var(--c-text)] font-[Inter] overflow-hidden relative selection:bg-[var(--c-accent)]">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="grid-line absolute w-[1px] h-full bg-[var(--c-primary)]" style={{ left: `${i * 5}%` }}></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 flex flex-col h-screen">
        <header className="flex justify-between items-center mb-16 ui-panel">
          <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">{data.brand}</div>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-md border border-white/10 hover:bg-white/5 font-[Fira_Code] text-xs">Docs</button>
            <button className="px-4 py-2 rounded-md bg-[var(--c-accent)] text-white hover:bg-teal-500 font-bold text-sm shadow-[0_0_15px_var(--c-accent)]">{data.ctaText}</button>
          </div>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Hero */}
          <div className="lg:w-1/2 ui-panel">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent)] border border-[var(--c-accent)]/20 text-xs font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--c-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--c-accent)]"></span>
              </span>
              SYSTEM ONLINE
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              {preset.hero.line1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--c-primary)] to-[var(--c-accent)] font-[Playfair_Display] italic">{preset.hero.line2}</span>
            </h1>
            
            <p className="text-lg text-slate-400 font-light max-w-lg mb-10 leading-relaxed">
              {data.purpose}
            </p>
          </div>

          {/* Right Interactive Schematic */}
          <div className="lg:w-1/2 w-full ui-panel relative perspective-1000">
            <div className="w-full bg-[#0B1121] rounded-xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
              <div className="flex border-b border-white/10 bg-white/5">
                {[<Terminal/>, <Box/>, <Layers/>].map((icon, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveTab(i)}
                    className={`flex-1 py-4 flex justify-center border-r border-white/10 last:border-0 hover:bg-white/5 transition-colors ${activeTab === i ? 'bg-white/10 text-[var(--c-accent)] border-b-2 border-b-[var(--c-accent)]' : 'text-slate-500'}`}
                  >
                    {React.cloneElement(icon as React.ReactElement, { size: 20 })}
                  </button>
                ))}
              </div>
              <div className="p-8 h-64 font-[Fira_Code] text-sm text-slate-300 flex flex-col justify-center">
                <div className="text-[var(--c-accent)] mb-4">// {data.valueProps[activeTab].title}</div>
                <div className="leading-relaxed opacity-80">{data.valueProps[activeTab].desc}</div>
                
                <div className="mt-8 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
