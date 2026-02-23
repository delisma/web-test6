import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function Layout12({ preset, data }: any) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".story-reveal", {
        y: 80, opacity: 0, duration: 2, stagger: 0.3, ease: "power3.out"
      });
      gsap.from(".story-image", {
        scale: 1.05, opacity: 0, duration: 3, ease: "power2.out", delay: 0.5
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="w-full min-h-screen bg-[var(--c-bg)] text-[var(--c-text)] font-[Cormorant_Garamond] selection:bg-[var(--c-accent)] selection:text-white">
      
      {/* Editorial Header */}
      <nav className="w-full text-center py-12 story-reveal">
        <div className="text-4xl font-bold tracking-widest uppercase border-y border-[var(--c-text)]/20 inline-block px-12 py-4">
          {data.brand}
        </div>
        <div className="font-[Chivo_Mono] text-xs uppercase tracking-widest mt-6 text-[var(--c-primary)]">
          Volume 1 — The Visual Frontier
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-8 py-16">
        
        {/* Massive Narrative Hero */}
        <section className="text-center mb-32">
          <h1 className="text-6xl md:text-9xl font-bold italic text-[var(--c-primary)] leading-[0.9] story-reveal mb-12 mix-blend-multiply">
            {preset.hero.line1} <br/>
            <span className="font-[Playfair_Display] text-[var(--c-accent)]">{preset.hero.line2}</span>
          </h1>
          <div className="w-full aspect-video bg-[#dbd4ca] rounded-3xl overflow-hidden story-image relative border border-[var(--c-primary)]/10 shadow-2xl flex items-center justify-center">
            {/* Semantic Image Placeholder representing sunset/earth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-primary)]/40 to-transparent z-10"></div>
            <div className="w-[150%] h-[150%] rounded-[100%] bg-gradient-to-t from-[var(--c-accent)] to-[var(--c-primary)] blur-3xl opacity-20 translate-y-1/2"></div>
            <p className="z-20 font-[Chivo_Mono] text-white/50 text-sm tracking-widest uppercase">Visual Canvas Initialized</p>
          </div>
          <p className="text-2xl md:text-4xl leading-relaxed max-w-3xl mx-auto mt-24 text-[var(--c-primary)] story-reveal">
            {data.purpose}
          </p>
        </section>

        {/* Narrative Flow value props */}
        <section className="flex flex-col gap-32 border-t border-[var(--c-primary)]/20 pt-32">
          {data.valueProps.map((vp: any, i: number) => (
            <div key={i} className={`flex flex-col ${i%2!==0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center story-reveal`}>
              <div className="md:w-1/2">
                <div className="font-[Chivo_Mono] text-[var(--c-accent)] text-6xl mb-6">0{i+1}</div>
                <h2 className="text-4xl md:text-5xl font-bold font-[Playfair_Display] italic mb-6 text-[var(--c-primary)]">{vp.title}</h2>
                <p className="text-2xl leading-relaxed text-[var(--c-primary)]/80">
                  {vp.desc}
                </p>
              </div>
              <div className="md:w-1/2 aspect-square rounded-[3rem] bg-[var(--c-primary)]/5 border border-[var(--c-primary)]/10 flex items-center justify-center p-12">
                 {/* Visual Abstract */}
                 <div className={`w-full h-full rounded-full border border-[var(--c-accent)]/30 scale-100 ${i===1 && 'rounded-xl'} ${i===2 && 'rounded-none transform rotate-45'}`}></div>
              </div>
            </div>
          ))}
        </section>

        {/* Narrative Conclusion */}
        <section className="text-center py-48 story-reveal">
          <h2 className="text-5xl md:text-7xl font-[Playfair_Display] italic text-[var(--c-primary)] mb-12">The Next Chapter Begins.</h2>
          <button className="px-16 py-6 bg-[var(--c-primary)] text-[var(--c-bg)] font-[Chivo_Mono] uppercase tracking-[0.2em] text-sm hover:bg-[var(--c-accent)] transition-colors duration-500 rounded-full">
            {data.ctaText}
          </button>
        </section>

      </main>
    </div>
  );
}
