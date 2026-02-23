import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function Layout8({ preset, data }: any) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".fade-minimal", {
        y: 20, opacity: 0, duration: 1.5, stagger: 0.15, ease: "power2.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="w-full min-h-screen bg-[var(--c-bg)] text-[var(--c-text)] font-[Work_Sans] p-8 md:p-16 flex flex-col justify-between selection:bg-[var(--c-accent)] selection:text-white">
      
      {/* Top Bar Minimal */}
      <header className="flex justify-between items-start fade-minimal">
        <div className="font-bold tracking-tight text-xl text-black">
          {data.brand}.
        </div>
        <div className="font-[IBM_Plex_Mono] text-xs text-black/40 text-right">
          Build 01 <br/> {new Date().getFullYear()}
        </div>
      </header>

      {/* Center Focus */}
      <main className="flex-1 flex flex-col justify-center items-center text-center max-w-3xl mx-auto w-full py-24">
        <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-tighter text-black fade-minimal mb-6 leading-[0.9]">
          <span className="font-semibold block">{preset.hero.line1}</span>
          <span className="font-[Lora] italic text-[var(--c-accent)] block mt-2">{preset.hero.line2}</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-black/60 max-w-xl mx-auto fade-minimal leading-relaxed mb-16">
          {data.purpose}
        </p>

        <button className="fade-minimal px-8 py-3 bg-[var(--c-accent)] text-white rounded-full font-medium hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(244,63,94,0.3)] hover:shadow-[0_15px_50px_rgba(244,63,94,0.4)]">
          {data.ctaText}
        </button>
      </main>

      {/* Footer Features (subtle) */}
      <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black/5 pt-8 fade-minimal">
        {data.valueProps.map((vp: any, i: number) => (
          <div key={i} className="group cursor-default">
            <h3 className="text-sm font-bold text-black mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              {vp.title}
            </h3>
            <p className="font-[IBM_Plex_Mono] text-xs leading-relaxed text-black/50 pr-4">
              {vp.desc}
            </p>
          </div>
        ))}
      </footer>

    </div>
  );
}
