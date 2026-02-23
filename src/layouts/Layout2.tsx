import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Diamond, ShieldCheck, Zap } from 'lucide-react';

export function Layout2({ preset, data }: any) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 40, opacity: 0, duration: 1.5, stagger: 0.15, ease: "expo.out", delay: 0.2
      });
      gsap.from(".gold-line", {
        scaleX: 0, duration: 2, ease: "power4.inOut"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="w-full flex flex-col min-h-screen bg-[var(--c-primary)] text-[var(--c-text)]">
      {/* Absolute Header */}
      <header className="flex justify-between items-center p-8 absolute w-full top-0 z-50 mix-blend-difference">
        <div className="font-[Inter] text-sm tracking-[0.3em] uppercase fade-up">{data.brand}</div>
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-[Inter] fade-up">
          <a href="#" className="hover:text-[var(--c-accent)] transition-colors">Manifesto</a>
          <a href="#" className="hover:text-[var(--c-accent)] transition-colors">Atelier</a>
        </div>
      </header>

      {/* Hero Luxe */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
        <div className="gold-line absolute top-1/2 left-0 w-full h-[1px] bg-[var(--c-accent)]/30 origin-left"></div>
        <div className="z-10 bg-[var(--c-primary)] px-8 py-4">
          <p className="text-[var(--c-accent)] text-sm tracking-[0.4em] uppercase mb-8 font-[JetBrains_Mono] fade-up">Private Access</p>
          <h1 className="text-5xl md:text-8xl lg:text-9xl text-white">
            <span className="block font-[Inter] font-light tracking-tight fade-up">{preset.hero.line1}</span>
            <span className="block font-[Playfair_Display] italic text-[var(--c-accent)] mt-2 fade-up">{preset.hero.line2}</span>
          </h1>
          <p className="mt-8 text-white/50 max-w-xl mx-auto font-light fade-up">
            {data.purpose}
          </p>
        </div>
      </section>

      {/* Editorial Features */}
      <section className="px-8 md:px-24 py-32 border-t border-white/5">
        <div className="flex flex-col md:flex-row gap-24">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-[Playfair_Display] italic fade-up text-white">The Standard</h2>
            <div className="w-12 h-[1px] bg-[var(--c-accent)] mt-8 fade-up"></div>
          </div>
          <div className="md:w-2/3 flex flex-col gap-16">
            {data.valueProps.map((vp: any, i: number) => (
              <div key={i} className="flex flex-col fade-up group">
                <div className="flex items-center gap-6 mb-4">
                  <span className="text-[var(--c-accent)] font-[JetBrains_Mono]">0{i+1}</span>
                  <h3 className="text-2xl text-white tracking-wide">{vp.title}</h3>
                </div>
                <p className="text-white/50 font-light leading-loose md:pl-12 group-hover:text-white/80 transition-colors">{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="h-[60vh] flex flex-col items-center justify-center border-t border-[var(--c-accent)]/20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-accent)]/10 to-transparent"></div>
        <button className="z-10 px-12 py-5 border border-[var(--c-accent)] text-[var(--c-accent)] hover:bg-[var(--c-accent)] hover:text-black transition-all duration-500 uppercase tracking-widest text-sm fade-up">
          {data.ctaText}
        </button>
      </section>
    </div>
  );
}
