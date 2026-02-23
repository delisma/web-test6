import React, { useLayoutEffect, useRef } from 'react';
import { PRESETS } from '../presets';
import { DATA } from '../data';
import { FontLoader } from './FontLoader';
import { Link } from 'react-router-dom';

// We'll dynamically import Layouts or map them here. 
// For now we'll just require them (once we generate them).
import { Layout1 } from '../layouts/Layout1';
import { Layout2 } from '../layouts/Layout2';
import { Layout3 } from '../layouts/Layout3';
import { Layout4 } from '../layouts/Layout4';
import { Layout5 } from '../layouts/Layout5';
import { Layout6 } from '../layouts/Layout6';
import { Layout7 } from '../layouts/Layout7';
import { Layout8 } from '../layouts/Layout8';
import { Layout9 } from '../layouts/Layout9';
import { Layout10 } from '../layouts/Layout10';
import { Layout11 } from '../layouts/Layout11';
import { Layout12 } from '../layouts/Layout12';

const layoutMap: Record<string, React.FC<{ preset: any, data: any }>> = {
  "1": Layout1, "2": Layout2, "3": Layout3, "4": Layout4,
  "5": Layout5, "6": Layout6, "7": Layout7, "8": Layout8,
  "9": Layout9, "10": Layout10, "11": Layout11, "12": Layout12
};

export function DynamicPage({ id }: { id: string }) {
  const preset = PRESETS.find(p => p.id === id);
  const Layout = layoutMap[id];

  useLayoutEffect(() => {
    if (!preset) return;
    document.documentElement.style.setProperty('--c-primary', preset.palette.primary);
    document.documentElement.style.setProperty('--c-accent', preset.palette.accent);
    document.documentElement.style.setProperty('--c-bg', preset.palette.background);
    document.documentElement.style.setProperty('--c-text', preset.palette.text);
    Object.entries(preset.cssVars).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
  }, [preset]);

  if (!preset || !Layout) return <div className="p-8 text-white">Preset not found.</div>;

  return (
    <div 
      className={`min-h-screen noise-overlay flex flex-col font-sans transition-colors duration-700 ease-in-out`}
      style={{
        backgroundColor: "var(--c-bg)",
        color: "var(--c-text)",
        fontFamily: preset.typography.headings
      }}
    >
      <FontLoader presetId={id} />
      
      {/* Dev Navigation Bar for fast comparison */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/80 backdrop-blur-md rounded-full border border-white/10 z-[10000] flex items-center gap-4 text-white text-sm shadow-xl">
        <Link to="/" className="opacity-70 hover:opacity-100 font-mono hidden sm:block mr-2">Index</Link>
        <div className="hidden sm:block w-[1px] h-4 bg-white/20"></div>
        <div className="flex gap-1.5 flex-wrap justify-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <Link 
              key={i+1} 
              to={`/${i+1}`}
              className={`w-8 h-8 flex items-center justify-center rounded-full font-mono transition-all text-xs ${
                Number(id) === i + 1 
                  ? 'bg-white text-black font-bold shadow-md' 
                  : 'text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              {i+1}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="flex-1 w-full h-full relative z-10 w-full overflow-hidden">
        <Layout preset={preset} data={DATA} />
      </div>
    </div>
  );
}
