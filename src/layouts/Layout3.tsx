import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function Layout3({ preset, data }: any) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".block-anim", {
        scaleY: 0, transformOrigin: "bottom", duration: 1, stagger: 0.1, ease: "power4.out"
      });
      gsap.from(".text-anim", {
        y: 20, opacity: 0, duration: 0.5, stagger: 0.05, delay: 0.5
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="w-full flex border-x-4 border-[var(--c-text)] min-h-screen bg-[var(--c-bg)] text-[var(--c-text)] font-[Space_Grotesk]">
      <div className="w-16 md:w-24 border-r-4 border-[var(--c-text)] flex flex-col items-center py-8 block-anim bg-[var(--c-accent)]">
        <div className="writing-vertical-rl rotate-180 text-[var(--c-bg)] font-bold text-xl tracking-widest whitespace-nowrap text-anim">
          SYS_OP_ACTIVE // {data.brand}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        {/* Nav */}
        <header className="border-b-4 border-[var(--c-text)] p-6 md:p-8 flex justify-between items-end block-anim bg-white">
          <div className="text-4xl md:text-6xl font-black uppercase text-anim leading-none">
            {data.brand}
          </div>
          <div className="font-[Space_Mono] text-sm text-[var(--c-accent)] font-bold text-anim">
            v1.0.0
          </div>
        </header>

        {/* Hero */}
        <section className="p-8 md:p-16 border-b-4 border-[var(--c-text)] block-anim bg-[var(--c-bg)] relative overflow-hidden">
          <h1 className="text-6xl md:text-[8rem] leading-[0.85] uppercase text-anim relative z-10">
            <span className="font-black">{preset.hero.line1}</span><br />
            <span className="font-[DM_Serif_Display] italic lowercase text-[var(--c-accent)]">{preset.hero.line2}</span>
          </h1>
          <p className="mt-12 text-xl md:text-3xl font-[Space_Mono] max-w-3xl text-anim border-l-8 pl-6 border-[var(--c-accent)]">
            {data.purpose}
          </p>
        </section>

        {/* Grid Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 block-anim flex-1">
          {data.valueProps.map((vp: any, i: number) => (
            <div key={i} className="p-8 md:p-12 border-b-4 md:border-b-0 border-r-4 border-[var(--c-text)] last:border-r-0 hover:bg-[var(--c-text)] hover:text-[var(--c-bg)] transition-colors group">
              <div className="font-[Space_Mono] text-[var(--c-accent)] text-6xl font-black mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
                0{i+1}
              </div>
              <h3 className="text-3xl font-black uppercase mb-4">{vp.title}</h3>
              <p className="font-[Space_Mono] text-lg leading-snug">{vp.desc}</p>
            </div>
          ))}
        </section>

        {/* Action */}
        <button className="w-full py-12 md:py-16 bg-[var(--c-accent)] text-[var(--c-bg)] text-4xl md:text-6xl font-black uppercase hover:bg-[var(--c-text)] transition-colors block-anim flex items-center justify-center gap-8">
          <span className="text-anim">{data.ctaText}</span>
          <span className="text-anim">→</span>
        </button>
      </div>
    </div>
  );
}
