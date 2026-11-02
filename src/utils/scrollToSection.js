export const scrollToSection = (href) => {
  if (!href) return;

  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth';

  if (href === '#') {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const targetId = href.startsWith('#') ? href.slice(1) : href;
  const element = document.getElementById(targetId);

  if (!element) return;

  const navigationHeight = document
    .querySelector('[data-site-navigation]')
    ?.getBoundingClientRect().height ?? 0;
  const top = element.getBoundingClientRect().top + window.scrollY - navigationHeight - 16;

  window.scrollTo({ top, behavior });
};
