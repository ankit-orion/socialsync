import { useCallback } from 'react';

// Persist AudioContext globally so browsers don't block multiple rapid instances
let globalCtx: AudioContext | null = null;

function getContext() {
  if (typeof window === 'undefined') return null;
  if (!globalCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      globalCtx = new AudioContextClass();
    }
  }
  if (globalCtx?.state === 'suspended') {
    globalCtx.resume();
  }
  return globalCtx;
}

export function useSound() {
  // A very soft, minimal glass 'tick' for hovering over buttons
  const playHover = useCallback(() => {
    const ctx = getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      // Extremely quick frequency drop to simulate a mechanical click 
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.02, ctx.currentTime + 0.01); 
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {
      // Audio context might be completely blocked by iOS permissions, just fail silently
    }
  }, []);

  // A slightly deeper 'pop' resonance for confirming clicks
  const playClick = useCallback(() => {
    const ctx = getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {
      // Fail silently if browser blocked
    }
  }, []);

  return { playHover, playClick };
}
