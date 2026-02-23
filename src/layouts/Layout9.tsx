import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Users, Star, MessageSquareQuote } from 'lucide-react';

export function Layout9({ preset, data }: any) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".proof-item", {
        y: 60, opacity: 0, duration: 1.5, stagger: 0.2, ease: "power3.out"
      });
      gsap.from(".avatar-ring", {
        scale: 0, opacity: 0, duration: 1, stagger: 0.1, ease: "back.out(1.5)"
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="w-full min-h-screen bg-[var(--c-bg)] text-[var(--c-text)] font-[Syne] overflow-hidden">
      
      {/* Warm Header */}
      <header className="flex justify-between items-center px-8 md:px-16 py-8 proof-item">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[var(--c-accent)] text-white flex items-center justify-center">
            <Users size={16} />
          </div>
          {data.brand}
        </div>
        <button className="px-6 py-2 rounded-full border border-stone-300 font-bold hover:bg-white hover:shadow-lg transition-all text-sm">
          Join 10,000+ Creators
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-8 md:px-16 pt-16 pb-32">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="md:w-1/2 proof-item text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-6">
              <span className="block">{preset.hero.line1}</span>
              <span className="font-[Newsreader] italic text-[var(--c-accent)] font-normal text-6xl md:text-8xl block mt-2">{preset.hero.line2}</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 font-[Courier_Prime] mb-10 max-w-lg leading-relaxed">
              {data.purpose}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <button className="px-10 py-5 bg-[var(--c-accent)] text-white font-bold rounded-full text-lg shadow-[0_8px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all w-full sm:w-auto">
                {data.ctaText}
              </button>
              <div className="flex items-center gap-2 text-sm font-bold text-stone-500">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-[var(--c-bg)] bg-stone-300 avatar-ring overflow-hidden`}>
                      <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000}?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80`} alt="Avatar" className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                  ))}
                </div>
                <div className="ml-2 font-[Courier_Prime] leading-tight">
                  <div className="flex text-amber-400"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div>
                  5.0 from 2k+ reviews
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="md:w-1/2 flex flex-col gap-6 relative">
             <div className="absolute -inset-10 bg-gradient-to-tr from-[var(--c-accent)]/20 to-transparent rounded-[4rem] blur-3xl -z-10"></div>
             {data.valueProps.map((vp: any, i: number) => (
               <div key={i} className={`bg-white p-8 border border-stone-200 shadow-xl proof-item rounded-3xl ${i%2!==0 ? 'md:ml-12' : 'md:mr-12'}`}>
                 <div className="flex gap-4 items-start mb-4">
                   <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-[var(--c-accent)]">
                     <MessageSquareQuote size={20} />
                   </div>
                   <div>
                     <h3 className="font-bold text-stone-900 text-lg">{vp.title}</h3>
                     <p className="font-[Courier_Prime] text-xs text-stone-500 uppercase tracking-widest mt-1">Verified Value</p>
                   </div>
                 </div>
                 <p className="font-[Newsreader] text-lg text-stone-700 italic leading-relaxed">"{vp.desc}"</p>
               </div>
             ))}
          </div>

        </div>
      </main>

    </div>
  );
}
