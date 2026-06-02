(function () {
  'use strict';

  const PRICES = {
    cosmetic: { base: 8500, house: 1.15, commercial: 1.25 },
    newbuild: { base: 11200, house: 1.12, commercial: 1.2 },
    capital: { base: 14500, house: 1.18, commercial: 1.3 },
    design: { base: 28000, house: 1.22, commercial: 1.35 },
  };

  const LEVEL_MULT = { standard: 1, comfort: 1.25, premium: 1.55 };

  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const stickyCta = document.getElementById('sticky-cta');
  const calcForm = document.getElementById('calculator-form');
  const contactForm = document.getElementById('contact-form');
  const modal = document.getElementById('success-modal');

  function formatPrice(n) {
    return new Intl.NumberFormat('ru-RU').format(Math.round(n));
  }

  function calculatePrice() {
    const area = Number(document.getElementById('calc-area').value) || 0;
    const type = document.getElementById('calc-type').value;
    const object = document.getElementById('calc-object').value;
    const level = document.querySelector('input[name="level"]:checked')?.value || 'standard';

    const cfg = PRICES[type] || PRICES.capital;
    let perSqm = cfg.base * (cfg[object] || 1) * (LEVEL_MULT[level] || 1);
    const from = area * perSqm;
    const to = from * 1.1;

    document.getElementById('calc-price-from').textContent = formatPrice(from);
    document.getElementById('calc-price-to').textContent = formatPrice(to);
  }

  function syncAreaInputs(source) {
    const input = document.getElementById('calc-area');
    const range = document.getElementById('calc-area-range');
    if (source === 'range') {
      input.value = range.value;
    } else {
      const v = Math.min(300, Math.max(10, Number(input.value) || 10));
      input.value = v;
      range.value = v;
    }
    calculatePrice();
  }

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    nav?.classList.remove('open');
    burger?.classList.remove('active');
    burger?.setAttribute('aria-expanded', 'false');
  }

  function showModal() {
    if (modal?.showModal) modal.showModal();
  }

  function hideModal() {
    modal?.close();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    showModal();
    form.reset();
    document.getElementById('calc-area').value = 65;
    document.getElementById('calc-area-range').value = 65;
    calculatePrice();
  }

  function initScrollButtons() {
    document.querySelectorAll('[data-scroll]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-scroll');
        const preset = btn.getAttribute('data-preset');
        if (preset) {
          const sel = document.getElementById('calc-type');
          if (sel) sel.value = preset;
          calculatePrice();
        }
        scrollToId(id);
      });
    });
  }

  function initHeader() {
    const onScroll = () => {
      const y = window.scrollY;
      header?.classList.toggle('header--scrolled', y > 60);
      if (stickyCta && window.innerWidth <= 768) {
        const heroBottom = document.getElementById('hero')?.offsetHeight || 600;
        stickyCta.classList.toggle('visible', y > heroBottom * 0.5);
        stickyCta.setAttribute('aria-hidden', y <= heroBottom * 0.5 ? 'true' : 'false');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initBurger() {
    burger?.addEventListener('click', () => {
      const open = nav?.classList.toggle('open');
      burger.classList.toggle('active', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function initCalculator() {
    const areaInput = document.getElementById('calc-area');
    const areaRange = document.getElementById('calc-area-range');
    areaInput?.addEventListener('input', () => syncAreaInputs('input'));
    areaRange?.addEventListener('input', () => syncAreaInputs('range'));
    document.getElementById('calc-type')?.addEventListener('change', calculatePrice);
    document.getElementById('calc-object')?.addEventListener('change', calculatePrice);
    document.querySelectorAll('input[name="level"]').forEach((r) => {
      r.addEventListener('change', calculatePrice);
    });
    calcForm?.addEventListener('submit', handleSubmit);
    calculatePrice();
  }

  function initPortfolioFilter() {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        buttons.forEach((b) => {
          b.classList.toggle('active', b === btn);
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });
        items.forEach((item) => {
          const cats = item.getAttribute('data-category') || '';
          const show = filter === 'all' || cats.includes(filter);
          item.classList.toggle('hidden', !show);
        });
      });
    });
  }

  function initReviewsSlider() {
    const track = document.getElementById('reviews-track');
    const prev = document.getElementById('reviews-prev');
    const next = document.getElementById('reviews-next');
    if (!track) return;

    let index = 0;

    function getStep() {
      const card = track.querySelector('.review-card');
      if (!card) return 0;
      const gap = 24;
      return card.offsetWidth + gap;
    }

    function getMaxIndex() {
      const cards = track.querySelectorAll('.review-card');
      const visible = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
      return Math.max(0, cards.length - visible);
    }

    function update() {
      const max = getMaxIndex();
      index = Math.min(index, max);
      track.style.transform = `translateX(-${index * getStep()}px)`;
    }

    prev?.addEventListener('click', () => {
      index = Math.max(0, index - 1);
      update();
    });
    next?.addEventListener('click', () => {
      index = Math.min(getMaxIndex(), index + 1);
      update();
    });
    window.addEventListener('resize', () => {
      index = 0;
      update();
    });
  }

  function initPhoneMask() {
    const phones = document.querySelectorAll('input[type="tel"]');
    phones.forEach((input) => {
      input.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, '');
        if (v.startsWith('8')) v = '7' + v.slice(1);
        if (!v.startsWith('7') && v.length) v = '7' + v;
        v = v.slice(0, 11);
        let formatted = '+7';
        if (v.length > 1) formatted += ' (' + v.slice(1, 4);
        if (v.length >= 4) formatted += ') ' + v.slice(4, 7);
        if (v.length >= 7) formatted += '-' + v.slice(7, 9);
        if (v.length >= 9) formatted += '-' + v.slice(9, 11);
        e.target.value = formatted;
      });
    });
  }

  function initModal() {
    document.getElementById('modal-close')?.addEventListener('click', hideModal);
    document.getElementById('modal-ok')?.addEventListener('click', hideModal);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) hideModal();
    });
  }

  contactForm?.addEventListener('submit', handleSubmit);
  initScrollButtons();
  initHeader();
  initBurger();
  initCalculator();
  initPortfolioFilter();
  initReviewsSlider();
  initPhoneMask();
  initModal();
})();
