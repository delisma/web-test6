import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shield, Building2, Globe2 } from 'lucide-react';

export function Layout11({ preset, data }: any) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".inst-fade", {
        y: 30, opacity: 0, duration: 1.5, stagger: 0.2, ease: "power3.out"
      });
      gsap.from(".inst-line", {
        scaleX: 0, duration: 2, ease: "power4.inOut"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="w-full min-h-screen bg-[var(--c-bg)] text-[var(--c-text)] font-[Rethink_Sans]">
      
      {/* Formal Top Header */}
      <header className="w-full border-b border-gray-300 bg-white inst-fade">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Building2 className="text-[var(--c-primary)]" size={24} />
            <span className="text-xl font-bold tracking-tight text-[var(--c-primary)] uppercase">{data.brand}</span>
          </div>
          <div className="hidden md:flex gap-8 font-semibold text-sm text-gray-500 uppercase tracking-widest">
            <span>Enterprise</span>
            <span>Security</span>
            <span>Contact</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[var(--c-primary)] text-white w-full py-32 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-8 inst-fade">
              <Shield className="text-[var(--c-accent)]" size={20} />
              <span className="font-[Roboto_Mono] text-[var(--c-accent)] uppercase text-sm tracking-widest">Enterprise Grade</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 inst-fade">
              {preset.hero.line1} <br/>
              <span className="font-[Merriweather] italic text-[var(--c-accent)] font-normal">{preset.hero.line2}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg mb-12 inst-fade">
              {data.purpose}
            </p>
            <button className="inst-fade px-10 py-4 bg-[var(--c-accent)] text-[var(--c-primary)] font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
              {data.ctaText}
            </button>
          </div>
          
          <div className="md:w-1/2 w-full aspect-square border-l border-t border-[var(--c-accent)]/30 p-8 inst-fade relative bg-gradient-to-br from-white/5 to-transparent">
             <div className="absolute top-0 right-0 p-8 text-[var(--c-accent)]"><Globe2 size={48} /></div>
             <div className="flex flex-col h-full justify-end">
               <h3 className="text-3xl font-[Merriweather] italic mb-4">"The industry benchmark for visual generation."</h3>
               <p className="font-[Roboto_Mono] text-sm text-gray-400">Global Tech Authority</p>
               <div className="inst-line w-full h-1 bg-[var(--c-accent)] mt-8 origin-left"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Features List (Corporate style) */}
      <section className="max-w-7xl mx-auto px-8 py-32 bg-[var(--c-bg)]">
        <h2 className="text-4xl font-[Merriweather] italic text-[var(--c-primary)] mb-16 text-center md:text-left inst-fade">Institutional Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.valueProps.map((vp: any, i: number) => (
            <div key={i} className="border-t-2 border-gray-300 pt-8 inst-fade group cursor-default">
              <h3 className="text-2xl font-bold text-[var(--c-primary)] mb-4 flex justify-between items-center">
                {vp.title} <span className="font-[Roboto_Mono] text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">0{i+1}</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">{vp.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
