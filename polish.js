(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const loader = document.querySelector('.page-loader');
  let loaderDismissed = false;
  function dismissLoader() {
    if (loaderDismissed) return;
    loaderDismissed = true;
    document.documentElement.classList.remove('js-loading');
    loader?.setAttribute('aria-hidden', 'true');
    window.setTimeout(() => loader?.remove(), reduced.matches ? 0 : 450);
  }
  const heroImage = new Image();
  heroImage.src = 'assets/atelier-laundry.png';
  const heroReady = heroImage.decode ? heroImage.decode().catch(() => {}) : Promise.resolve();
  Promise.all([heroReady, document.fonts?.ready || Promise.resolve()]).then(dismissLoader);
  window.setTimeout(dismissLoader, 1800);
  window.addEventListener('pageshow', event => { if (event.persisted) dismissLoader(); });

  document.querySelectorAll('img').forEach(img => {
    img.decoding = 'async';
    if (!img.complete) {
      img.classList.add('media-loading');
      const finish = () => img.classList.remove('media-loading');
      img.addEventListener('load', finish, { once: true });
      img.addEventListener('error', finish, { once: true });
    }
  });

  if (!reduced.matches && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 20px 0px' });
    document.querySelectorAll('.service,.how,.about,.plans article,.care-story,.testimonials-top,.review-card,.location-heading,.location-layout,.cta').forEach((el, index) => {
      el.classList.add('scroll-reveal');
      el.style.setProperty('--reveal-delay', `${(index % 3) * 65}ms`);
      revealObserver.observe(el);
    });
  }

  let ticking = false;
  const progress = document.querySelector('.reading-progress');
  function updateScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progress?.style.setProperty('--reading-progress', ratio.toFixed(4));
    document.body.classList.toggle('is-scrolled', window.scrollY > 30);
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(updateScroll); }
  }, { passive: true });
  updateScroll();

  const branches = {
    'khader-bagh': { name: 'Khader Bagh', kind: 'REGISTERED OFFICE · HYDERABAD', address: '13-6-437/1/1, Flat No. 301, M.K. Plaza, Khader Bagh, Hyderabad, Telangana 500008' },
    upperpally: { name: 'Upperpally', kind: 'BRANCH · HYDERABAD', address: 'AK Villa, Shop No. 1, Plot No. 5 A, Core Hospital, Upperpally, Hyderabad, Telangana 500048' },
    puppalguda: { name: 'Puppalguda', kind: 'BRANCH · HYDERABAD', address: '8-1-423/A/196, Shop No. 1, Diamond Hills Colony, PuppalGuda, Hyderabad, Telangana 500008' }
  };
  const iframe = document.querySelector('#office-map');
  iframe.addEventListener('load', () => iframe.closest('.map-panel').classList.add('map-ready'));
  const announcer = document.createElement('p');
  announcer.className = 'sr-only'; announcer.setAttribute('aria-live', 'polite');
  document.querySelector('.location-details').append(announcer);
  document.querySelectorAll('[data-branch]').forEach(button => button.addEventListener('click', () => {
    if (button.getAttribute('aria-pressed') === 'true') return;
    const branch = branches[button.dataset.branch];
    document.querySelectorAll('[data-branch]').forEach(other => {
      other.classList.toggle('selected', other === button);
      other.setAttribute('aria-pressed', String(other === button));
    });
    document.querySelector('#location-name').textContent = branch.name;
    document.querySelector('#location-kicker').textContent = branch.kind;
    document.querySelector('#office-address').textContent = branch.address;
    const destination = encodeURIComponent(branch.address);
    const directions = 'https://www.google.com/maps/dir/?api=1&destination=' + destination;
    document.querySelector('#office-directions').href = directions;
    document.querySelector('#map-open-link').href = directions;
    iframe.closest('.map-panel').classList.remove('map-ready');
    iframe.title = 'Map to MagicKlean ' + branch.name;
    iframe.src = 'https://maps.google.com/maps?q=' + destination + '&t=m&z=16&output=embed';
    announcer.textContent = branch.name + ' selected. Address and directions updated.';
  }));
  const motionButtons = document.querySelectorAll('.motion-toggle,.illustration-motion');
  motionButtons.forEach(motionButton => motionButton.addEventListener('click', () => {
    const paused = document.documentElement.classList.toggle('motion-paused');
    motionButtons.forEach(button => {
      const illustration = button.classList.contains('illustration-motion');
      button.setAttribute('aria-pressed', String(paused));
      button.setAttribute('aria-label', (paused ? 'Play ' : 'Pause ') + (illustration ? 'care illustration' : 'decorative animations'));
      button.textContent = illustration ? (paused ? 'Play illustration ▷' : 'Pause illustration Ⅱ') : (paused ? '▷' : 'Ⅱ');
    });
  }));
  document.querySelector('#whatsapp').onclick = () => {
    showInfo('Speak with MagicKlean', 'Call +91 9393 931 947 or email magician@magicklean.com. WhatsApp messaging can be connected after client approval.');
    document.querySelector('#info-book').textContent = 'Book with MagicKlean ↗';
    document.querySelector('#info-book').onclick = () => { document.querySelector('#info').close(); openBooking(); };
  };

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('nav a').forEach(other => other.classList.remove('active'));
      link.classList.add('active');
    });
  });
})();
