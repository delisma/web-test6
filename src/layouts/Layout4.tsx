import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Fingerprint, ScanEye, Network } from 'lucide-react';

export function Layout4({ preset, data }: any) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".neon-glow", {
        opacity: 0.5, yoyo: true, repeat: -1, duration: 2, ease: "sine.inOut"
      });
      gsap.from(".reveal-text", {
        x: -50, opacity: 0, duration: 1.5, stagger: 0.2, ease: "power3.out"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="w-full min-h-screen bg-[var(--c-primary)] text-[var(--c-text)] font-[Sora] overflow-hidden relative">
      <div className="neon-glow absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-[var(--c-accent)] blur-[150px] mix-blend-screen opacity-20 pointer-events-none"></div>
      
      <header className="flex justify-between p-6 glass-panel border-b border-white/5 relative z-10 backdrop-blur-md">
        <div className="font-bold tracking-widest text-[#7B61FF] flex items-center gap-2 reveal-text">
          <Network size={20} /> {data.brand}
        </div>
        <div className="font-[Fira_Code] text-xs text-white/50 reveal-text">STATUS: ONLINE</div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <h1 className="text-5xl md:text-8xl lg:text-9xl uppercase font-black leading-[1.1]">
          <span className="block reveal-text text-white">{preset.hero.line1}</span>
          <span className="block font-[Instrument_Serif] italic text-[var(--c-accent)] reveal-text normal-case">{preset.hero.line2}</span>
        </h1>
        
        <p className="mt-8 text-xl font-[Fira_Code] text-[var(--c-accent)]/80 max-w-xl reveal-text border-l block pl-4 border-[var(--c-accent)]">
          {data.purpose}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
          {data.valueProps.map((vp: any, i: number) => (
            <div key={i} className="bg-white/5 border border-[var(--c-accent)]/20 p-8 rounded-2xl backdrop-blur-xl hover:bg-[var(--c-accent)]/10 transition-colors reveal-text">
              <div className="text-[var(--c-accent)] mb-6">
                {i === 0 ? <Fingerprint size={32} /> : i === 1 ? <ScanEye size={32} /> : <Network size={32} />}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{vp.title}</h3>
              <p className="font-[Fira_Code] text-sm text-white/60">{vp.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center reveal-text">
          <button className="px-10 py-5 bg-[var(--c-accent)] text-white font-bold tracking-widest rounded-2xl shadow-[0_0_30px_rgba(123,97,255,0.4)] hover:shadow-[0_0_60px_rgba(123,97,255,0.8)] transition-all">
            {data.ctaText} // INIT
          </button>
        </div>
      </div>
    </div>
  );
}
