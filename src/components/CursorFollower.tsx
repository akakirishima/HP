import React, { useEffect, useRef } from 'react';

type CursorFollowerProps = {
  size?: number; // diameter in px
  color?: string;
  hoverColor?: string;
  pressColor?: string; // used for "selected" state
  opacity?: number; // 0..1
  lerp?: number; // 0..1 smoothing for position
  scaleLerp?: number; // 0..1 smoothing for scale
  baseScale?: number; // normal state scale
  hoverScale?: number;
  pressScale?: number; // selected state scale
  // Trail & pulse
  enableTrail?: boolean;
  trailOpacity?: number;
  trailScale?: number;
  trailLerp?: number;
  enablePulse?: boolean;
  pulseColor?: string;
  pulseDurationMs?: number;
};

export default function CursorFollower({
  size = 14,
  color = '#e11d48', // red (normal)
  hoverColor = '#a855f7', // red-purple (hover)
  pressColor = '#7c3aed', // purple (selected)
  opacity = 0.9,
  lerp = 0.3,
  scaleLerp = 0.45,
  baseScale = 0.85,
  hoverScale = 2.2,
  pressScale = 3.0,
  enableTrail = true,
  trailOpacity = 0.35,
  trailScale = 1.6,
  trailLerp = 0.12,
  enablePulse = false,
  pulseColor = 'rgba(124, 58, 237, 0.35)',
  pulseDurationMs = 450,
}: CursorFollowerProps) {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Respect prefers-reduced-motion
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;


  useEffect(() => {
    const el = dotRef.current;
    const trail = trailRef.current;
    const ring = ringRef.current;
    if (reduce || !el) return;

    let rafId = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let s = baseScale; // current scale
    let ts = baseScale; // target scale
    let lastColor = color;
    let interactive = false;
    let selected = false; // right-click/context or text selection
    let selectTimer: number | null = null;
    // Trail state
    let tx2 = x;
    let ty2 = y;
    // Pulse state
    let pulseStart = 0; // timestamp, 0 means idle

    const isInteractive = (node: Element | null): boolean => {
      let el: Element | null = node;
      while (el) {
        if (el instanceof HTMLElement) {
          const tag = el.tagName;
          const role = (el.getAttribute('role') || '').toLowerCase();
          const disabled = el.hasAttribute('disabled') || el.getAttribute('aria-disabled') === 'true';
          if (!disabled) {
            // Native clickable elements
            if (tag === 'A') {
              const a = el as HTMLAnchorElement;
              if (a.href || role === 'button' || el.tabIndex >= 0) return true;
            }
            if (tag === 'BUTTON' || tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA' || tag === 'SUMMARY' || tag === 'LABEL') {
              return true;
            }
            // ARIA roles commonly used for interactive controls
            if ((role === 'button' || role === 'link' || role === 'menuitem' || role === 'checkbox' || role === 'radio' || role === 'switch') && el.tabIndex >= 0) {
              return true;
            }
          }
        }
        el = (el as HTMLElement).parentElement;
      }
      return false;
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const under = document.elementFromPoint(e.clientX, e.clientY);
      interactive = isInteractive(under);
      // If text is selected keep selected state
      const sel = document.getSelection();
      const hasRange = !!sel && sel.type === 'Range' && !sel.isCollapsed;
      if (!hasRange && selectTimer === null) {
        // Only drop selected state if not in temporary selection timer
        selected = false;
      }
      ts = selected ? pressScale : interactive ? hoverScale : baseScale;
    };

    const onDown = (e: MouseEvent) => {
      if (e.button === 2) {
        selected = true; // right button down -> selected state
        ts = pressScale;
      }
      if (enablePulse) {
        pulseStart = performance.now();
      }
    };
    const onUp = () => {
      const sel = document.getSelection();
      const hasRange = !!sel && sel.type === 'Range' && !sel.isCollapsed;
      if (!hasRange && selectTimer === null) {
        selected = false;
      }
      ts = selected ? pressScale : interactive ? hoverScale : baseScale;
    };

    const onContext = () => {
      // Enter selected state for a while when context menu opens
      selected = true;
      ts = pressScale;
      if (selectTimer) window.clearTimeout(selectTimer);
      selectTimer = window.setTimeout(() => {
        selectTimer = null;
        const sel = document.getSelection();
        const hasRange = !!sel && sel.type === 'Range' && !sel.isCollapsed;
        if (!hasRange) selected = false;
      }, 1200);
    };

    const onSelectionChange = () => {
      const sel = document.getSelection();
      const hasRange = !!sel && sel.type === 'Range' && !sel.isCollapsed;
      selected = hasRange;
      ts = selected ? pressScale : interactive ? hoverScale : baseScale;
    };

    const update = () => {
      x += (tx - x) * lerp;
      y += (ty - y) * lerp;
      s += (ts - s) * scaleLerp;
      const r = size / 2;

      const targetColor = selected ? (pressColor || hoverColor || color) : interactive ? (hoverColor || color) : color;
      if (targetColor !== lastColor) {
        el.style.background = targetColor;
        if (enableTrail && trail) trail.style.background = targetColor;
        lastColor = targetColor;
      }

      // Glow intensity based on state
      if (selected) {
        el.style.boxShadow = '0 0 0 14px rgba(124, 58, 237, 0.35), 0 0 24px rgba(124, 58, 237, 0.4)';
      } else if (interactive) {
        el.style.boxShadow = '0 0 0 10px rgba(168, 85, 247, 0.28), 0 0 16px rgba(168, 85, 247, 0.25)';
      } else {
        el.style.boxShadow = 'none';
      }

      el.style.transform = `translate3d(${x - r}px, ${y - r}px, 0) scale(${s})`;

      // Trail (ghost)
      if (enableTrail && trail) {
        tx2 += (x - tx2) * trailLerp;
        ty2 += (y - ty2) * trailLerp;
        const tr = (size * trailScale) / 2;
        trail.style.transform = `translate3d(${tx2 - tr}px, ${ty2 - tr}px, 0)`;
        // Show trail only when interactive or selected
        trail.style.opacity = (selected || interactive) ? String(trailOpacity) : '0';
      }

      // Pulse ring
      if (enablePulse && ring) {
        if (pulseStart > 0) {
          const now = performance.now();
          const t = Math.min(1, (now - pulseStart) / pulseDurationMs);
          const ease = 1 - Math.pow(1 - t, 3);
          const scale = 1 + ease * 3.5;
          const alpha = (1 - ease) * 0.6;
          ring.style.opacity = String(alpha);
          ring.style.transform = `translate3d(${x - r}px, ${y - r}px, 0) scale(${scale})`;
          if (t >= 1) {
            pulseStart = 0; // end pulse
          }
        } else {
          ring.style.opacity = '0';
          ring.style.transform = `translate3d(${x - r}px, ${y - r}px, 0) scale(1)`;
        }
      }
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown, { passive: true });
    window.addEventListener('mouseup', onUp, { passive: true });
    window.addEventListener('contextmenu', onContext, { passive: true });
    document.addEventListener('selectionchange', onSelectionChange);
    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('contextmenu', onContext);
      document.removeEventListener('selectionchange', onSelectionChange);
      if (selectTimer) {
        clearTimeout(selectTimer);
        selectTimer = null;
      }
    };
  }, [color, hoverColor, pressColor, baseScale, hoverScale, pressScale, lerp, scaleLerp, size, reduce, enablePulse, enableTrail, pulseDurationMs, trailLerp, trailOpacity, trailScale, pulseColor]);

  const style: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: size,
    height: size,
    borderRadius: '50%',
    background: color,
    opacity,
    pointerEvents: 'none',
    zIndex: 2147483647,
    transform: `translate3d(${typeof window !== 'undefined' ? window.innerWidth / 2 - size / 2 : 0}px, ${typeof window !== 'undefined' ? window.innerHeight / 2 - size / 2 : 0}px, 0)`,
    transition: 'background 120ms ease, box-shadow 120ms ease',
    willChange: 'transform, background, box-shadow',
    mixBlendMode: 'normal',
    transformOrigin: 'center',
  };

  const trailStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: size * trailScale,
    height: size * trailScale,
    borderRadius: '50%',
    background: color,
    opacity: 0,
    pointerEvents: 'none',
    zIndex: 2147483646,
    filter: 'blur(4px)',
    transform: `translate3d(${typeof window !== 'undefined' ? window.innerWidth / 2 - (size * trailScale) / 2 : 0}px, ${typeof window !== 'undefined' ? window.innerHeight / 2 - (size * trailScale) / 2 : 0}px, 0)`,
    transition: 'opacity 120ms ease',
    willChange: 'transform, opacity',
    mixBlendMode: 'normal',
  };

  const ringStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: size,
    height: size,
    borderRadius: '50%',
    border: `2px solid ${pulseColor}`,
    opacity: 0,
    pointerEvents: 'none',
    zIndex: 2147483645,
    transform: `translate3d(${typeof window !== 'undefined' ? window.innerWidth / 2 - size / 2 : 0}px, ${typeof window !== 'undefined' ? window.innerHeight / 2 - size / 2 : 0}px, 0) scale(1)`,
    transition: 'opacity 80ms ease',
    willChange: 'transform, opacity',
  };

  if (reduce) return null;

  return (
    <>
      {enableTrail && <div ref={trailRef} style={trailStyle} aria-hidden="true" />}
      {enablePulse && <div ref={ringRef} style={ringStyle} aria-hidden="true" />}
      <div ref={dotRef} style={style} aria-hidden="true" />
    </>
  );
}
