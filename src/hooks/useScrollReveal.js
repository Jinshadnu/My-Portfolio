import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optional: unobserve once revealed for performance
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal, .reveal-stagger, .reveal-right, .reveal-left');

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
