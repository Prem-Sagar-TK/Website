/* portfolio.js — Prem Sagar T.K */

'use strict';

/* ══════════════════════════════════════════
   NAVBAR — scroll-based appearance
══════════════════════════════════════════ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });


/* ══════════════════════════════════════════
   HAMBURGER MENU
══════════════════════════════════════════ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let   menuOpen   = false;

function toggleMenu(force) {
  menuOpen = typeof force === 'boolean' ? force : !menuOpen;
  hamburger.classList.toggle('open', menuOpen);
  mobileMenu.classList.toggle('open', menuOpen);
  mobileMenu.setAttribute('aria-hidden', String(!menuOpen));
  hamburger.setAttribute('aria-expanded', String(menuOpen));
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}

hamburger.addEventListener('click', () => toggleMenu());

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (menuOpen && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    toggleMenu(false);
  }
});


/* ══════════════════════════════════════════
   TYPEWRITER EFFECT
══════════════════════════════════════════ */
const roles     = ['Software Engineer', 'ML Engineer', 'Product Builder', 'Full-Stack Developer'];
const typeEl    = document.getElementById('typewriter');
let   roleIdx   = 0;
let   charIdx   = 0;
let   erasing   = false;
let   typeTimer = null;

function type() {
  const current = roles[roleIdx];

  if (erasing) {
    charIdx--;
    typeEl.textContent = current.substring(0, charIdx);
  } else {
    charIdx++;
    typeEl.textContent = current.substring(0, charIdx);
  }

  let delay = erasing ? 45 : 95;

  if (!erasing && charIdx === current.length) {
    // Finished typing — pause then erase
    delay   = 2200;
    erasing = true;
  } else if (erasing && charIdx === 0) {
    // Finished erasing — move to next role
    erasing = false;
    roleIdx = (roleIdx + 1) % roles.length;
    delay   = 380;
  }

  typeTimer = setTimeout(type, delay);
}

// Start after hero animation completes
setTimeout(type, 900);


/* ══════════════════════════════════════════
   INTERSECTION OBSERVER — fade-up reveals
══════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold:   0.08,
  rootMargin: '0px 0px -48px 0px',
});

document.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));


/* ══════════════════════════════════════════
   ACTIVE NAV LINK — highlight on scroll
══════════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
  const scrollY = window.scrollY;
  let   active  = '';

  sections.forEach(section => {
    const top    = section.offsetTop - 80;
    const bottom = top + section.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      active = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    const href      = link.getAttribute('href').replace('#', '');
    const isActive  = href === active;
    link.classList.toggle('active', isActive);
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink(); // Run on load


/* ══════════════════════════════════════════
   SMOOTH SCROLL — for all anchor links
══════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


/* ══════════════════════════════════════════
   STAT COUNTERS — animate on first view
══════════════════════════════════════════ */
function animateCounter(el, target, suffix = '', duration = 1200) {
  const start     = performance.now();
  const isSymbol  = isNaN(parseInt(target));

  if (isSymbol) return; // Skip non-numeric (like ₹5L)

  const end = parseInt(target);

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = Math.round(eased * end);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const statEl  = entry.target;
    const numEl   = statEl.querySelector('.stat-number');
    if (!numEl) return;

    const spanEl  = numEl.querySelector('span');
    const suffix  = spanEl ? spanEl.textContent : '';
    const raw     = numEl.textContent.replace(suffix, '').trim();
    const numeric = parseInt(raw.replace(/[^0-9]/g, ''));

    if (!isNaN(numeric) && !raw.startsWith('₹') && !raw.startsWith('0') && raw !== '2') {
      numEl.textContent = '0';
      if (spanEl) numEl.appendChild(spanEl);  // Re-attach suffix span
      animateCounter(numEl, numeric, '', 1200);

      // Re-insert the span after counting
      setTimeout(() => {
        if (spanEl && !numEl.contains(spanEl)) {
          numEl.appendChild(spanEl);
        }
      }, 50);
    }

    counterObserver.unobserve(statEl);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => counterObserver.observe(card));


/* ══════════════════════════════════════════
   KEYBOARD ACCESSIBILITY — close menu on Escape
══════════════════════════════════════════ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuOpen) {
    toggleMenu(false);
    hamburger.focus();
  }
});


/* ══════════════════════════════════════════
   CURSOR BLINK — pause when typewriter is mid-word
══════════════════════════════════════════ */
// The cursor blinks via CSS animation — no JS needed.


/* ══════════════════════════════════════════
   SCROLL PROGRESS — subtle top bar (optional)
══════════════════════════════════════════ */
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  width: 0%;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  z-index: 2000;
  transition: width 0.1s linear;
  pointer-events: none;
`;
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const max     = document.documentElement.scrollHeight - window.innerHeight;
  const pct     = max > 0 ? (window.scrollY / max) * 100 : 0;
  progressBar.style.width = pct + '%';
}, { passive: true });
