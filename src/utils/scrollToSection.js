export const scrollToSection = (href) => {
  if (!href) return;

  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const targetId = href.startsWith('#') ? href.slice(1) : href;
  const element = document.getElementById(targetId);

  if (!element) return;

  const navbarOffset = 96;
  const top = element.getBoundingClientRect().top + window.scrollY - navbarOffset;

  window.scrollTo({ top, behavior: 'smooth' });
};
