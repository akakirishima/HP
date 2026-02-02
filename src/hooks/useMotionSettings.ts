import { useEffect, useState } from 'react';

const registerListener = (query: MediaQueryList, handler: () => void) => {
  if ('addEventListener' in query) {
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }

  const legacyQuery = query as MediaQueryList & {
    addListener?: (handler: () => void) => void;
    removeListener?: (handler: () => void) => void;
  };

  if (legacyQuery.addListener && legacyQuery.removeListener) {
    legacyQuery.addListener(handler);
    return () => legacyQuery.removeListener?.(handler);
  }

  return () => undefined;
};

export default function useMotionSettings() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 768px)');

    const update = () => {
      setReduceMotion(motionQuery.matches);
      setIsMobile(mobileQuery.matches);
    };

    update();
    const cleanupMotion = registerListener(motionQuery, update);
    const cleanupMobile = registerListener(mobileQuery, update);

    return () => {
      cleanupMotion();
      cleanupMobile();
    };
  }, []);

  return { reduceMotion, isMobile };
}
