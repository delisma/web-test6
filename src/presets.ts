export type TypeScale = 'headings' | 'drama' | 'data' | 'body';

export interface Preset {
  id: string;
  name: string;
  identity: string;
  palette: {
    primary: string;
    accent: string;
    background: string;
    text: string;
  };
  typography: {
    fonts: string[];
    headings: string;
    drama: string;
    data: string;
  };
  imageMood: string;
  hero: {
    line1: string;
    line2: string;
  };
  cssVars: Record<string, string>;
  radius: string;
}

export const PRESETS: Preset[] = [
  {
    id: "1",
    name: "Organic Tech (Clinical Boutique)",
    identity: "A bridge between a biological research lab and an avant-garde luxury magazine.",
    palette: { primary: "#2E4036", accent: "#CC5833", background: "#F2F0E9", text: "#1A1A1A" },
    typography: {
      fonts: ["Plus Jakarta Sans", "Outfit", "Cormorant Garamond", "IBM Plex Mono"],
      headings: "Plus Jakarta Sans, sans-serif",
      drama: "Cormorant Garamond, serif",
      data: "IBM Plex Mono, monospace"
    },
    imageMood: "dark forest, organic textures, moss, ferns, laboratory glassware",
    hero: { line1: "T4 Canvas is the", line2: "Creation Engine." },
    cssVars: { "--noise-opacity": "0.08" },
    radius: "rounded-3xl"
  },
  {
    id: "2",
    name: "Midnight Luxe (Dark Editorial)",
    identity: "A private members' club meets a high-end watchmaker's atelier.",
    palette: { primary: "#0D0D12", accent: "#C9A84C", background: "#FAF8F5", text: "#e0dcd3" },
    typography: {
      fonts: ["Inter", "Playfair Display", "JetBrains Mono"],
      headings: "Inter, sans-serif",
      drama: "Playfair Display, serif",
      data: "JetBrains Mono, monospace"
    },
    imageMood: "dark marble, gold accents, architectural shadows, luxury interiors",
    hero: { line1: "T4 Canvas meets", line2: "Absolute Precision." },
    cssVars: { "--noise-opacity": "0.04" },
    radius: "rounded-xl"
  },
  {
    id: "3",
    name: "Brutalist Signal (Raw Precision)",
    identity: "A control room for the future — no decoration, pure information density.",
    palette: { primary: "#E8E4DD", accent: "#E63B2E", background: "#111111", text: "#E8E4DD" },
    typography: {
      fonts: ["Space Grotesk", "DM Serif Display", "Space Mono"],
      headings: "Space Grotesk, sans-serif",
      drama: "DM Serif Display, serif",
      data: "Space Mono, monospace"
    },
    imageMood: "concrete, brutalist architecture, raw materials, industrial",
    hero: { line1: "Command the", line2: "Generative System." },
    cssVars: { "--noise-opacity": "0.05" },
    radius: "rounded-none"
  },
  {
    id: "4",
    name: "Vapor Clinic (Neon Biotech)",
    identity: "A genome sequencing lab inside a Tokyo nightclub.",
    palette: { primary: "#0A0A14", accent: "#7B61FF", background: "#18181B", text: "#F0EFF4" },
    typography: {
      fonts: ["Sora", "Instrument Serif", "Fira Code"],
      headings: "Sora, sans-serif",
      drama: "Instrument Serif, serif",
      data: "Fira Code, monospace"
    },
    imageMood: "bioluminescence, dark water, neon reflections, microscopy",
    hero: { line1: "T4 Canvas beyond", line2: "Every Boundary." },
    cssVars: { "--noise-opacity": "0.03" },
    radius: "rounded-2xl"
  },
  {
    id: "5",
    name: "Hero-Centric (The Visionary)",
    identity: "A gallery experience built for aesthetics, bold imagery, and an authoritative voice.",
    palette: { primary: "#FFFFFF", accent: "#4F46E5", background: "#0F172A", text: "#f8fafc" },
    typography: {
      fonts: ["Outfit", "Oswald", "Space Mono"],
      headings: "Outfit, sans-serif",
      drama: "Oswald, sans-serif",
      data: "Space Mono, monospace"
    },
    imageMood: "vibrant product photography, editorial fashion, high contrast, clean studio lighting",
    hero: { line1: "Unbound Output", line2: "Flawless Generation." },
    cssVars: { "--noise-opacity": "0.02" },
    radius: "rounded-none"
  },
  {
    id: "6",
    name: "Conversion-Optimized (The Catalyst)",
    identity: "A high-velocity funnel built for action. Urgent, clear, and perfectly engineered.",
    palette: { primary: "#FAFAFA", accent: "#EA580C", background: "#1E293B", text: "#FAFAFA" },
    typography: {
      fonts: ["Inter", "Merriweather", "Roboto Mono"],
      headings: "Inter, sans-serif",
      drama: "Merriweather, serif",
      data: "Roboto Mono, monospace"
    },
    imageMood: "dynamic teamwork, forward momentum, abstract growth charts, kinetic energy",
    hero: { line1: "Scale your", line2: "Creation Velocity." },
    cssVars: { "--noise-opacity": "0.01" },
    radius: "rounded-md"
  },
  {
    id: "7",
    name: "Feature-Rich Showcase (The Schematic)",
    identity: "An interactive schematic. Dense with information but architected for absolute clarity.",
    palette: { primary: "#334155", accent: "#0D9488", background: "#020617", text: "#F1F5F9" },
    typography: {
      fonts: ["Inter", "Playfair Display", "Fira Code"],
      headings: "Inter, sans-serif",
      drama: "Playfair Display, serif",
      data: "Fira Code, monospace"
    },
    imageMood: "UI glassmorphism, isometric data grids, server racks, abstract code matrices",
    hero: { line1: "The ultimate platform for", line2: "Infinite Pixels." },
    cssVars: { "--noise-opacity": "0.07" },
    radius: "rounded-xl"
  },
  {
    id: "8",
    name: "Minimal & Direct (The Essentialist)",
    identity: "Zen-like clarity. Every element must justify its existence. No noise, only pure signal.",
    palette: { primary: "#Snow", accent: "#F43F5E", background: "#E2E8F0", text: "#18181B" },
    typography: {
      fonts: ["Work Sans", "Lora", "IBM Plex Mono"],
      headings: "Work Sans, sans-serif",
      drama: "Lora, serif",
      data: "IBM Plex Mono, monospace"
    },
    imageMood: "negative space, single object focus, soft shadows, clear skies, minimalism",
    hero: { line1: "Simply better", line2: "Image Studio." },
    cssVars: { "--noise-opacity": "0.05" },
    radius: "rounded-lg"
  },
  {
    id: "9",
    name: "Social Proof-Focused (The Community)",
    identity: "The community amphitheater. Trust is built through verifiable impact.",
    palette: { primary: "#D6D3D1", accent: "#10B981", background: "#FAF9F6", text: "#292524" },
    typography: {
      fonts: ["Syne", "Newsreader", "Courier Prime"],
      headings: "Syne, sans-serif",
      drama: "Newsreader, serif",
      data: "Courier Prime, monospace"
    },
    imageMood: "diverse portraits, candid moments, community gatherings, warm sunlight",
    hero: { line1: "Join the movement of", line2: "Visual Pioneers." },
    cssVars: { "--noise-opacity": "0.04" },
    radius: "rounded-full"
  },
  {
    id: "10",
    name: "Interactive Demo (The Sandbox)",
    identity: "The workbench. Highly tactile, constantly moving, instantly reactive.",
    palette: { primary: "#171717", accent: "#EAB308", background: "#0A0A0A", text: "#A3A3A3" },
    typography: {
      fonts: ["Manrope", "Bodoni Moda", "JetBrains Mono"],
      headings: "Manrope, sans-serif",
      drama: "Bodoni Moda, serif",
      data: "JetBrains Mono, monospace"
    },
    imageMood: "glowing screens, digital interfaces, dark mode UI, procedural generation",
    hero: { line1: "Experience the", line2: "Creative Engine." },
    cssVars: { "--noise-opacity": "0.06" },
    radius: "rounded-md"
  },
  {
    id: "11",
    name: "Trust & Authority (The Institution)",
    identity: "Unshakable reliability, enterprise-grade security, and institutional wisdom.",
    palette: { primary: "#1E3A8A", accent: "#D4AF37", background: "#F3F4F6", text: "#111827" },
    typography: {
      fonts: ["Inter", "Merriweather", "Roboto Mono"],
      headings: "Inter, sans-serif",
      drama: "Merriweather, serif",
      data: "Roboto Mono, monospace"
    },
    imageMood: "architectural glass facades, firm handshakes, global maps, structural steel",
    hero: { line1: "The definitive standard in", line2: "AI Imagery." },
    cssVars: { "--noise-opacity": "0.02" },
    radius: "rounded-sm"
  },
  {
    id: "12",
    name: "Storytelling-Driven (The Narrative)",
    identity: "The art gallery. Emotional resonance, narrative flow, and immersive media.",
    palette: { primary: "#993322", accent: "#F59E0B", background: "#FFF9F0", text: "#431407" },
    typography: {
      fonts: ["Cormorant Garamond", "Playfair Display", "Chivo Mono"],
      headings: "Cormorant Garamond, serif",
      drama: "Playfair Display, serif",
      data: "Chivo Mono, monospace"
    },
    imageMood: "cinematic wide shots, emotional expressions, natural landscapes, golden hour",
    hero: { line1: "A story about", line2: "Visual Limits." },
    cssVars: { "--noise-opacity": "0.06" },
    radius: "rounded-2xl"
  }
];
