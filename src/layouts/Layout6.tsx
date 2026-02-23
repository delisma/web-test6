import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Play } from 'lucide-react';

export function Layout6({ preset, data }: any) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".funnel-item", {
        scale: 0.95, opacity: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.5)"
      });
      gsap.to(".pulse-btn", {
        boxShadow: "0px 0px 20px 5px rgba(234,88,12,0.6)", 
        repeat: -1, yoyo: true, duration: 1.5
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="w-full min-h-screen bg-slate-900 flex flex-col font-[Inter] text-slate-50 items-center justify-center pt-24 pb-32">
      
      {/* Top Warning/Conversion Bar */}
      <div className="fixed top-0 w-full bg-[var(--c-accent)] text-white text-center py-2 text-xs font-bold tracking-widest uppercase z-50">
        Limited Access — Secure your workspace today
      </div>

      <div className="max-w-4xl w-full px-6 flex flex-col items-center text-center">
        {/* Brand Tag */}
        <div className="px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm font-semibold mb-8 funnel-item">
          Introducing {data.brand}
        </div>

        {/* Hero Copy */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 funnel-item leading-tight">
          <span className="text-white">{preset.hero.line1}</span><br />
          <span className="font-[Merriweather] italic text-[var(--c-accent)] font-medium text-4xl md:text-6xl">{preset.hero.line2}</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl font-light funnel-item leading-relaxed">
          {data.purpose} Stop wasting time with fragmented tools. 
        </p>

        {/* Primary CTA Video/Button Combo */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-24 w-full funnel-item">
          <button className="pulse-btn w-full sm:w-auto px-8 py-4 bg-[var(--c-accent)] text-white font-bold rounded-lg text-lg hover:bg-orange-500 transition-colors shadow-lg">
            {data.ctaText} Now
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg text-lg border border-slate-700 hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
            <Play size={20} fill="currentColor" /> Watch Demo
          </button>
        </div>

        {/* Value Props 3-Column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
          {data.valueProps.map((vp: any, i: number) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 funnel-item hover:border-[var(--c-accent)] transition-colors">
              <div className="h-10 w-10 bg-slate-700 rounded-lg flex items-center justify-center text-[var(--c-accent)] font-bold mb-4 font-[Roboto_Mono]">
                0{i+1}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{vp.title}</h3>
              <p className="text-slate-400 text-sm">{vp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
