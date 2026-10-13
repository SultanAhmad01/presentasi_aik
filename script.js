/* Interaksi ringan untuk website presentasi AIK. */
(() => {
  'use strict';

  document.documentElement.classList.add('js-ready');

  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');
    const progressBar = document.getElementById('reading-progress-bar');
    const header = document.getElementById('site-header');
    const links = [...document.querySelectorAll('.nav-link, .mobile-nav-link')];
    const sections = [...document.querySelectorAll('main section[id]')];
    const revealItems = [...document.querySelectorAll('.reveal')];

    function setMenuOpen(isOpen) {
      if (!menuButton || !mobileNav) return;
      mobileNav.classList.toggle('hidden', !isOpen);
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
      openIcon?.classList.toggle('hidden', isOpen);
      closeIcon?.classList.toggle('hidden', !isOpen);
    }

    menuButton?.addEventListener('click', () => {
      setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    mobileNav?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    });

    // Progress membaca dan perubahan header ketika halaman digulir.
    let scheduled = false;
    function updateScrollState() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const percent = maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0;
      if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
      header?.classList.toggle('is-scrolled', currentScroll > 8);
      scheduled = false;
    }

    window.addEventListener('scroll', () => {
      if (scheduled) return;
      window.requestAnimationFrame(updateScrollState);
      scheduled = true;
    }, { passive: true });
    window.addEventListener('resize', updateScrollState, { passive: true });
    updateScrollState();

    // Tampilkan elemen secara halus ketika mendekati area pandang.
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
      revealItems.forEach((item) => revealObserver.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    }

    // Sorot tautan yang sesuai dengan section yang sedang dibaca.
    if ('IntersectionObserver' in window) {
      const sectionObserver = new IntersectionObserver((entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!current) return;
        const currentHref = `#${current.target.id}`;
        links.forEach((link) => {
          const active = link.getAttribute('href') === currentHref;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }, { rootMargin: '-22% 0px -62% 0px', threshold: [0, 0.1, 0.25, 0.5] });
      sections.forEach((section) => sectionObserver.observe(section));
    }
  });
})();
