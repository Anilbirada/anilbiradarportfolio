/* ================================================
   ANIL BIRADAR — PORTFOLIO JAVASCRIPT
   script.js
   ================================================ */

'use strict';

/* ---- DOM Ready Helper ---- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initTypingAnimation();
  initScrollReveal();
  initSkillBars();
  initCounterAnimations();
  initBackToTop();
  initActiveNavLinks();
  initContactForm();
});

/* ================================================
   1. NAVBAR — sticky + scroll class
   ================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load
}

/* ================================================
   2. HAMBURGER MENU (Mobile)
   ================================================ */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav-link, .nav-resume-btn').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
}

/* ================================================
   3. TYPING ANIMATION
   ================================================ */
function initTypingAnimation() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const phrases = [
    'Web Developer',
    'Data Analyst',
    'Power BI Enthusiast',
    'BCA Student',
    'UI Designer',
  ];

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let isPaused    = false;

  const TYPING_SPEED   = 90;
  const DELETING_SPEED = 50;
  const PAUSE_AFTER    = 1800;

  const type = () => {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      // Typing forward
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        isPaused = true;
        setTimeout(() => {
          isPaused    = false;
          isDeleting  = true;
          type();
        }, PAUSE_AFTER);
        return;
      }
    } else {
      // Deleting
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting  = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    if (!isPaused) {
      setTimeout(type, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }
  };

  type();
}

/* ================================================
   4. SCROLL REVEAL — IntersectionObserver
   ================================================ */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ================================================
   5. SKILL BARS — animate when in view
   ================================================ */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar');
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar   = entry.target;
          const fill  = bar.querySelector('.skill-fill');
          const width = bar.dataset.width || '0';
          if (fill) {
            fill.style.width = width + '%';
          }
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(bar => observer.observe(bar));
}

/* ================================================
   6. COUNTER ANIMATION (About stats)
   ================================================ */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step     = Math.ceil(duration / target);
  let current    = 0;

  const update = () => {
    current += 1;
    el.textContent = current;
    if (current < target) {
      setTimeout(update, step);
    } else {
      el.textContent = target;
      // Add '+' suffix for non-percentage stats
      if (!el.closest('.stat-card')?.querySelector('.stat-label')?.textContent.includes('%')) {
        el.textContent = target + (target === 100 ? '%' : '+');
      }
    }
  };
  update();
}

/* ================================================
   7. BACK TO TOP BUTTON
   ================================================ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const toggle = () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggle, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ================================================
   8. ACTIVE NAV LINK — highlight on scroll
   ================================================ */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: `-${document.getElementById('navbar')?.offsetHeight || 72}px 0px -60% 0px` }
  );

  sections.forEach(section => observer.observe(section));
}

/* ================================================
   9. CONTACT FORM — client-side feedback
   ================================================ */
function initContactForm() {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const name      = form.querySelector('#name').value.trim();
    const email     = form.querySelector('#email').value.trim();

    // Basic validation
    if (!name || !email) {
      showStatus('error', '⚠ Please fill in all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      showStatus('error', '⚠ Please enter a valid email address.');
      return;
    }

    // Simulate sending (replace with EmailJS / Formspree integration)
    submitBtn.disabled    = true;
    submitBtn.innerHTML   = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    setTimeout(() => {
      showStatus('success', `✓ Thank you, ${name}! Your message has been sent. I'll reply soon.`);
      form.reset();
      submitBtn.disabled  = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    }, 1600);
  });

  function showStatus(type, message) {
    status.className  = `form-status ${type}`;
    status.textContent = message;
    status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    setTimeout(() => {
      status.className = 'form-status';
      status.textContent = '';
    }, 5000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

/* ================================================
   10. SMOOTH SCROLL — for all anchor links
   ================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = document.getElementById('navbar')?.offsetHeight || 72;
    const top       = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ================================================
   11. PARALLAX ORBS (subtle mouse tracking)
   ================================================ */
(function initParallaxOrbs() {
  const orbs = document.querySelectorAll('.orb');
  if (!orbs.length) return;

  let ticking = false;

  document.addEventListener('mousemove', (e) => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 8;
        orb.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
      });

      ticking = false;
    });
  });
})();
