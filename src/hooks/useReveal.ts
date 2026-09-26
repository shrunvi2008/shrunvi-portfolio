import { useEffect } from 'react';

/**
 * Adds the `is-visible` class to every `.reveal` element when it enters the viewport.
 * Supports staggered timing via the `data-reveal-delay` attribute (in ms).
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window) || elements.length === 0) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) {
              el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
