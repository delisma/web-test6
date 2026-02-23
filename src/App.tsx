import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { DynamicPage } from './components/DynamicPage';

function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-zinc-950 text-white font-sans noise-overlay" style={{"--noise-opacity": 0.05} as React.CSSProperties}>
      <div className="max-w-4xl w-full text-center z-10 space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">T4 Canvas</h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto">
          Power-user interface for generating and editing images with top AI models. 12 Distinct Architectural Approaches.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <Link 
              key={i + 1} 
              to={`/${i + 1}`}
              className="px-6 py-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-700 transition-all font-mono shadow-sm group"
            >
              <div className="text-zinc-500 group-hover:text-zinc-400 text-sm mb-1 uppercase tracking-wider">Preset</div>
              <div className="text-2xl font-semibold text-white">/{i+1}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {Array.from({ length: 12 }).map((_, i) => (
           <Route key={i + 1} path={`/${i + 1}`} element={<DynamicPage id={String(i + 1)} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
