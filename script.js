(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }));
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const progress = document.querySelector('.reading-progress span');
  const updateProgress = () => {
    if (!progress) return;
    const available = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${available > 0 ? Math.min(100, window.scrollY / available * 100) : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  document.querySelectorAll('[data-tilt]').forEach((surface) => {
    const image = surface.querySelector('img');
    if (!image || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    surface.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return;
      const box = surface.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      image.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 8}deg) rotate(-3deg) scale(1.015)`;
    });
    surface.addEventListener('pointerleave', () => { image.style.transform = ''; });
  });
})();
