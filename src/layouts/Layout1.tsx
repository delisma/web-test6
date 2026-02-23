import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Code, BrainCircuit, Droplets } from 'lucide-react';

export function Layout1({ preset, data }: any) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100, opacity: 0, duration: 2, stagger: 0.2, ease: "power4.out"
      });
      gsap.from(".nav-item", {
        y: -20, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.5
      });
      gsap.from(".card", {
        y: 50, opacity: 0, duration: 1.5, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".cards-container", start: "top 80%" }
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="w-full relative flex flex-col min-h-screen">
      {/* Organic Top Bar */}
      <nav className="flex justify-between items-center p-8 md:p-12 absolute top-0 w-full z-10 text-[var(--c-primary)]">
        <div className="text-xl font-bold tracking-tight nav-item">{data.brand}</div>
        <button className="px-6 py-2 border border-[var(--c-primary)] rounded-full text-sm font-medium hover:bg-[var(--c-primary)] hover:text-[var(--c-bg)] transition-colors nav-item">
          Connect
        </button>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center px-8 md:px-24 pt-32 pb-24">
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-9xl tracking-tighter leading-[0.9] text-[var(--c-primary)]">
            <span className="block font-bold hero-text">{preset.hero.line1}</span>
            <span className="block font-[Cormorant_Garamond] italic text-[var(--c-accent)] hero-text mt-4">{preset.hero.line2}</span>
          </h1>
          <p className="mt-12 text-xl md:text-2xl max-w-2xl text-[var(--c-primary)]/80 font-[IBM_Plex_Mono] hero-text">
            {data.purpose}
          </p>
        </div>
      </section>

      {/* Philosophy / Features */}
      <section className="px-8 md:px-24 py-24 bg-[var(--c-primary)] text-[var(--c-bg)] cards-container rounded-t-[3rem] shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.valueProps.map((vp: any, i: number) => (
            <div key={i} className="card p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="h-16 w-16 rounded-full bg-[var(--c-accent)] flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                {i === 0 ? <Droplets /> : i === 1 ? <BrainCircuit /> : <Code />}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[Cormorant_Garamond] italic">{vp.title}</h3>
              <p className="opacity-80 leading-relaxed text-sm font-[IBM_Plex_Mono]">{vp.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[var(--c-primary)] text-[var(--c-bg)] px-8 md:px-24 py-24 text-center border-t border-white/10">
         <h2 className="text-5xl md:text-7xl font-[Cormorant_Garamond] italic mb-12">Begin Synthesis</h2>
         <button className="px-12 py-6 bg-[var(--c-accent)] text-white text-xl font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-4 mx-auto">
            {data.ctaText} <ArrowUpRight />
         </button>
      </footer>
    </div>
  );
}
