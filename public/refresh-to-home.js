const scrollPositionKey = 'alpha-classes:refresh-scroll-position';
const navigation = performance.getEntriesByType('navigation')[0];

window.addEventListener('pagehide', () => {
  sessionStorage.setItem(scrollPositionKey, String(window.scrollY));
});

if (navigation?.type === 'reload') {
  const savedScrollY = Number(sessionStorage.getItem(scrollPositionKey)) || 0;
  sessionStorage.removeItem(scrollPositionKey);
  history.scrollRestoration = 'manual';

  if (window.location.hash) {
    history.replaceState(
      history.state,
      '',
      `${window.location.pathname}${window.location.search}`,
    );
  }

  const scrollToTop = () => {
    const startY = Math.max(0, savedScrollY);
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, startY);

    if (startY === 0) {
      document.documentElement.style.removeProperty('scroll-behavior');
      return;
    }

    const duration = Math.min(1200, Math.max(700, startY * 0.25));
    let animationStart;

    const animate = (timestamp) => {
      animationStart ??= timestamp;
      const progress = Math.min((timestamp - animationStart) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      window.scrollTo(0, startY * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        document.documentElement.style.removeProperty('scroll-behavior');
      }
    };

    requestAnimationFrame(animate);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scrollToTop, { once: true });
  } else {
    requestAnimationFrame(scrollToTop);
  }
} else {
  sessionStorage.removeItem(scrollPositionKey);
}
