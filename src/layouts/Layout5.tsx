import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function Layout5({ preset, data }: any) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".gallery-title", {
        y: 100, opacity: 0, duration: 1.5, stagger: 0.1, ease: "power4.out"
      });
      gsap.from(".gallery-img", {
        scale: 1.1, opacity: 0, duration: 2, ease: "power3.out", stagger: 0.2
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="w-full min-h-screen bg-[var(--c-bg)] text-[var(--c-text)] font-[Outfit] flex flex-col items-center pt-12 overflow-x-hidden">
      
      {/* Brand Header */}
      <nav className="w-full flex justify-between items-center px-12 md:px-24 mb-24 z-10 gallery-title">
        <div className="text-3xl font-black uppercase tracking-tighter text-[var(--c-primary)]">{data.brand}</div>
        <button className="px-6 py-2 bg-[var(--c-primary)] text-[var(--c-bg)] rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-[var(--c-accent)] transition-colors">
          Experience
        </button>
      </nav>

      {/* Hero Central Vision */}
      <section className="text-center w-full px-4 mb-32 z-10 relative">
        <h1 className="text-6xl md:text-[8rem] uppercase font-black tracking-tighter leading-[0.8] mb-8 text-[var(--c-primary)] gallery-title">
          <span className="block">{preset.hero.line1}</span>
        </h1>
        <div className="text-4xl md:text-6xl font-[Oswald] tracking-tight text-[var(--c-accent)] uppercase gallery-title">
          {preset.hero.line2}
        </div>
        <p className="mt-12 text-lg font-[Space_Mono] max-w-xl mx-auto text-white/50 gallery-title">
          {data.purpose}
        </p>
      </section>

      {/* Gallery Showcase Grid */}
      <section className="w-full px-12 md:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-48 z-10">
        {data.valueProps.map((vp: any, i: number) => (
          <div key={i} className="gallery-img aspect-[4/5] bg-gradient-to-br from-white/10 to-transparent p-1 shadow-2xl overflow-hidden relative group cursor-pointer border border-white/5">
            <div className="absolute inset-0 bg-[var(--c-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10"></div>
            <div className="w-full h-full bg-[var(--c-bg)] p-8 flex flex-col justify-end relative z-20 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 font-[Oswald] -mt-4 uppercase">{i+1}</div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[var(--c-primary)] mb-4">{vp.title}</h3>
              <p className="font-[Space_Mono] text-sm text-[var(--c-text)] opacity-60 leading-relaxed">{vp.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Massive CTA */}
      <section className="w-full py-32 bg-[var(--c-accent)] text-white text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter gallery-title mb-12">Take Control</h2>
        <button className="bg-white text-black px-16 py-6 text-2xl font-bold uppercase tracking-widest hover:scale-105 transition-transform">
          {data.ctaText}
        </button>
      </section>
    </div>
  );
}
