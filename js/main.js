document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initContactForm();
  initAnimations();
});

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;
  const scrollThreshold = 100;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > scrollThreshold) {
      navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

function initMobileMenu() {
  const toggle = document.querySelector('.navbar-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    toggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.setAttribute('aria-hidden', isExpanded);
    mobileMenu.classList.toggle('open');
  });

  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      mobileMenu.classList.remove('open');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      mobileMenu.classList.remove('open');
      toggle.focus();
    }
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const successEl = document.getElementById('form-success');
    const errorEl = document.getElementById('form-error');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (successEl) successEl.classList.remove('show');
    if (errorEl) errorEl.classList.remove('show');

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email || !data.message) {
      if (errorEl) errorEl.classList.add('show');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      if (errorEl) errorEl.classList.add('show');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        if (successEl) successEl.classList.add('show');
        form.reset();
      } else {
        if (errorEl) errorEl.classList.add('show');
      }
    } catch (error) {
      if (errorEl) errorEl.classList.add('show');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar mensaje';
    }
  });
}

function initAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.project-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
  });

  animatedElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 100}ms`;
  });

  // Reveal animations for case study pages
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => revealObserver.observe(el));
}