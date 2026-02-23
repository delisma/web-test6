import { useEffect } from 'react';
import { PRESETS } from '../presets';

export function FontLoader({ presetId }: { presetId: string }) {
  useEffect(() => {
    const preset = PRESETS.find(p => p.id === presetId);
    if (!preset) return;

    // Load fonts
    const fonts = preset.typography.fonts.map(f => f.replace(/ /g, '+')).join('&family=');
    const url = `https://fonts.googleapis.com/css2?family=${fonts}&display=swap`;
    
    // Check if link exists
    let link = document.getElementById('dynamic-google-fonts') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.id = 'dynamic-google-fonts';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = url;
  }, [presetId]);

  return null;
}
