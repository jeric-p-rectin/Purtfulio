import { useEffect, useRef } from 'react';

/**
 * Fires `onReveal` once, shortly BEFORE the target scrolls into view.
 *
 * The previous implementation created a fresh IntersectionObserver per
 * section with `{ threshold: 0.3 }` and no rootMargin, so nothing began
 * animating until the section was already 30% on screen — the animation
 * played while you were looking straight at it.
 *
 * `rootMargin: '0px 0px 20% 0px'` grows the observed area past the bottom
 * of the viewport, so the reveal starts as the section approaches and is
 * finishing by the time it is actually in front of you.
 */
export function useReveal<T extends HTMLElement>(
  onReveal: () => void,
  options?: { rootMargin?: string }
) {
  const ref = useRef<T | null>(null);
  const firedRef = useRef(false);
  const callbackRef = useRef(onReveal);

  // Keep the latest callback without re-creating the observer.
  callbackRef.current = onReveal;

  useEffect(() => {
    const el = ref.current;
    if (!el || firedRef.current) return;

    const fire = () => {
      if (firedRef.current) return;
      firedRef.current = true;
      callbackRef.current();
    };

    // Reduced motion: reveal immediately, skip the observer entirely.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      fire();
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      fire();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            fire();
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: 0,
        rootMargin: options?.rootMargin ?? '0px 0px 20% 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
