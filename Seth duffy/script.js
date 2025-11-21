// The PTSD Dude — scripts: smooth scroll, reveal motion, nav toggle, form mailto

(function() {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal, .card, .panel, .blog-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  revealEls.forEach(el => io.observe(el));

  const heroImg = document.querySelector('.hero-bg img');
  if (heroImg) {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      heroImg.style.transform = `translate3d(0, ${y * 0.06}px, 0) scale(1.03)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Smooth anchor scroll fallback (beyond CSS behavior)
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').substring(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });


})();