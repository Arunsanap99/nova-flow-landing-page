/**
 * Novaflow - Modern Interactive Script (Vanilla JavaScript ES6+)
 * Implements theme toggle, smooth navigation, live event simulation,
 * animated stats, interactive FAQ, pricing toggle, and form validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initStickyHeader();
  initMobileNav();
  initScrollSpy();
  initHeroStreamSimulator();
  initMockupTabs();
  initAnimatedStats();
  initPricingToggle();
  initFaqAccordion();
  initFaqFilter();
  initContactForm();
  initBackToTop();
  initScrollReveal();
});

/* --------------------------------------------------------------------------
   1. Theme Toggle (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('novaflow-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // default dark

  document.documentElement.setAttribute('data-theme', initialTheme);
  updateThemeIcon(themeToggleBtn, initialTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('novaflow-theme', newTheme);
    updateThemeIcon(themeToggleBtn, newTheme);
    showToast(`Switched to ${newTheme} mode`);
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === 'light') {
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    `;
    btn.setAttribute('aria-label', 'Switch to dark theme');
  } else {
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
    `;
    btn.setAttribute('aria-label', 'Switch to light theme');
  }
}

/* --------------------------------------------------------------------------
   2. Sticky Navigation Header
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburger-toggle');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburgerBtn) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !document.body.classList.contains('nav-open');
    document.body.classList.toggle('nav-open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    hamburgerBtn.innerHTML = isOpen ? `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    ` : `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
      </svg>
    `;
  }

  hamburgerBtn.addEventListener('click', () => toggleMenu());
  if (overlay) overlay.addEventListener('click', () => toggleMenu(false));

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

/* --------------------------------------------------------------------------
   4. ScrollSpy: Highlight Active Navigation Links
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link, .mobile-nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else if (href && href.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   5. Hero Live Stream Simulator
   -------------------------------------------------------------------------- */
function initHeroStreamSimulator() {
  const feed = document.getElementById('live-event-feed');
  const toggleBtn = document.getElementById('stream-toggle-btn');
  const throughputEl = document.getElementById('mockup-throughput');
  if (!feed) return;

  let isPaused = false;
  let intervalId = null;

  const topics = [
    { topic: 'payment.authorized', payload: '{ id: "tx_9981", amt: $128.50, cur: "USD" }', lat: '0.4ms' },
    { topic: 'order.dispatched', payload: '{ order_id: "ord_441", carrier: "DHL" }', lat: '0.7ms' },
    { topic: 'user.signup', payload: '{ user: "sarah.m", tenant: "alpha_corp" }', lat: '0.5ms' },
    { topic: 'webhook.delivery', payload: '{ url: "api.stripe.com", status: 200 }', lat: '0.8ms' },
    { topic: 'cache.invalidated', payload: '{ key: "user_session:88190", ttl: 0 }', lat: '0.2ms' },
    { topic: 'inventory.reserved', payload: '{ sku: "NV-FLOW-01", qty: 2 }', lat: '0.6ms' }
  ];

  function getTimestamp() {
    const d = new Date();
    return d.toTimeString().split(' ')[0] + '.' + Math.floor(d.getMilliseconds() / 100);
  }

  function addEvent() {
    if (isPaused) return;
    const randomEvent = topics[Math.floor(Math.random() * topics.length)];
    const row = document.createElement('div');
    row.className = 'event-row';
    row.innerHTML = `
      <span class="event-time">${getTimestamp()}</span>
      <span class="event-topic">${randomEvent.topic}</span>
      <span class="event-payload">${randomEvent.payload}</span>
      <span class="event-latency">${randomEvent.lat}</span>
    `;

    feed.insertBefore(row, feed.firstChild);
    if (feed.children.length > 5) {
      feed.removeChild(feed.lastChild);
    }

    if (throughputEl) {
      const base = 14850;
      const variation = Math.floor(Math.random() * 300) - 150;
      throughputEl.textContent = (base + variation).toLocaleString() + ' /s';
    }
  }

  intervalId = setInterval(addEvent, 1800);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      toggleBtn.innerHTML = isPaused ? `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        Resume
      ` : `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
        Pause
      `;
      showToast(isPaused ? 'Live feed paused' : 'Live feed resumed');
    });
  }
}

/* --------------------------------------------------------------------------
   5b. Interactive Mockup Console Tabs
   -------------------------------------------------------------------------- */
function initMockupTabs() {
  const tabs = document.querySelectorAll('.mockup-tab-btn');
  const panels = {
    stream: document.getElementById('tab-stream'),
    code: document.getElementById('tab-code'),
    trace: document.getElementById('tab-trace')
  };

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      Object.entries(panels).forEach(([key, panel]) => {
        if (!panel) return;
        if (key === target) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Animated Statistics Counters
   -------------------------------------------------------------------------- */
function initAnimatedStats() {
  const statElements = document.querySelectorAll('.stat-number');
  const statsSection = document.getElementById('stats');
  if (!statElements.length || !statsSection) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateAllStats();
        observer.unobserve(statsSection);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);

  function animateAllStats() {
    statElements.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target') || '0');
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing: cubic ease-out
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * ease;

        if (decimals > 0) {
          el.textContent = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;
        } else {
          el.textContent = `${prefix}${Math.floor(currentVal).toLocaleString()}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = `${prefix}${decimals > 0 ? target.toFixed(decimals) : target.toLocaleString()}${suffix}`;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }
}

/* --------------------------------------------------------------------------
   7. Interactive Pricing Toggle (Monthly vs Annual)
   -------------------------------------------------------------------------- */
function initPricingToggle() {
  const toggleBtn = document.getElementById('pricing-toggle-switch');
  const monthlyLabel = document.getElementById('pricing-monthly-label');
  const annualLabel = document.getElementById('pricing-annual-label');
  const priceElements = document.querySelectorAll('[data-monthly-price]');

  if (!toggleBtn) return;

  let isAnnual = false;

  function updatePrices() {
    toggleBtn.classList.toggle('checked', isAnnual);
    if (monthlyLabel) monthlyLabel.classList.toggle('active', !isAnnual);
    if (annualLabel) annualLabel.classList.toggle('active', isAnnual);

    priceElements.forEach(el => {
      const monthly = el.getAttribute('data-monthly-price');
      const annual = el.getAttribute('data-annual-price');
      el.textContent = isAnnual ? annual : monthly;
    });
  }

  toggleBtn.addEventListener('click', () => {
    isAnnual = !isAnnual;
    updatePrices();
    showToast(isAnnual ? 'Switched to Annual billing (Saved 20%)' : 'Switched to Monthly billing');
  });

  if (monthlyLabel) {
    monthlyLabel.addEventListener('click', () => {
      if (isAnnual) {
        isAnnual = false;
        updatePrices();
      }
    });
  }

  if (annualLabel) {
    annualLabel.addEventListener('click', () => {
      if (!isAnnual) {
        isAnnual = true;
        updatePrices();
      }
    });
  }
}

/* --------------------------------------------------------------------------
   8. Interactive FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer-collapse');

    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close other accordions for clean single-expanded view
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherAnswer = otherItem.querySelector('.faq-answer-collapse');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAnswer) otherAnswer.style.maxHeight = '0px';
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0px';
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8b. Interactive FAQ Search & Live Filter
   -------------------------------------------------------------------------- */
function initFaqFilter() {
  const input = document.getElementById('faq-search-input');
  const items = document.querySelectorAll('.faq-item');
  if (!input || !items.length) return;

  let noMatchEl = document.getElementById('faq-no-match');
  if (!noMatchEl) {
    noMatchEl = document.createElement('div');
    noMatchEl.id = 'faq-no-match';
    noMatchEl.style.textAlign = 'center';
    noMatchEl.style.padding = '2.5rem 1rem';
    noMatchEl.style.color = 'var(--text-muted)';
    noMatchEl.style.fontSize = '0.9375rem';
    noMatchEl.textContent = 'No matching questions found. Try searching for "Kafka", "SLA", "latency", or "pricing".';
    noMatchEl.style.display = 'none';
    const wrapper = document.querySelector('.faq-wrapper');
    if (wrapper) wrapper.appendChild(noMatchEl);
  }

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    let matchCount = 0;

    items.forEach(item => {
      const question = item.querySelector('.faq-question-btn')?.textContent.toLowerCase() || '';
      const answer = item.querySelector('.faq-answer-content')?.textContent.toLowerCase() || '';

      if (!query || question.includes(query) || answer.includes(query)) {
        item.style.display = '';
        matchCount++;
      } else {
        item.style.display = 'none';
        item.classList.remove('active');
        const btn = item.querySelector('.faq-question-btn');
        const collapse = item.querySelector('.faq-answer-collapse');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (collapse) collapse.style.maxHeight = '0px';
      }
    });

    noMatchEl.style.display = matchCount === 0 ? 'block' : 'none';
  });
}

/* --------------------------------------------------------------------------
   9. Contact Form & Client-Side Validation
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = document.getElementById('contact-submit-btn');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  }

  function setFieldError(input, errorMsgId, message) {
    input.classList.add('error');
    const errorEl = document.getElementById(errorMsgId);
    if (errorEl) errorEl.textContent = message;
  }

  function clearFieldError(input, errorMsgId) {
    input.classList.remove('error');
    const errorEl = document.getElementById(errorMsgId);
    if (errorEl) errorEl.textContent = '';
  }

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 2) {
        clearFieldError(nameInput, 'name-error');
      }
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      if (validateEmail(emailInput.value)) {
        clearFieldError(emailInput, 'email-error');
      }
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      if (messageInput.value.trim().length >= 10) {
        clearFieldError(messageInput, 'message-error');
      }
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if (!nameInput || nameInput.value.trim().length < 2) {
      setFieldError(nameInput, 'name-error', 'Please enter your name (at least 2 letters).');
      isValid = false;
    } else {
      clearFieldError(nameInput, 'name-error');
    }

    if (!emailInput || !validateEmail(emailInput.value)) {
      setFieldError(emailInput, 'email-error', 'Please enter a valid work email.');
      isValid = false;
    } else {
      clearFieldError(emailInput, 'email-error');
    }

    if (!messageInput || messageInput.value.trim().length < 10) {
      setFieldError(messageInput, 'message-error', 'Please include a project message (at least 10 characters).');
      isValid = false;
    } else {
      clearFieldError(messageInput, 'message-error');
    }

    if (!isValid) return;

    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const firstName = nameVal.split(' ')[0] || 'there';

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin" style="animation: spin 1s linear infinite;" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        Sending Request...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        showToast({
          title: 'Receipt Confirmed',
          message: `Thank you, ${firstName}! We've confirmed receipt of your inquiry and sent details to ${emailVal}. A systems engineer will respond within 2 hours.`,
          type: 'success',
          duration: 5500
        });
      }, 700);
    }
  });
}

/* --------------------------------------------------------------------------
   10. Back-to-Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   11. Scroll Reveal Animations (Intersection Observer)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-fade-up');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   12. Notification Toast Component
   -------------------------------------------------------------------------- */
function showToast(optionsOrMessage, fallbackType = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.setAttribute('aria-label', 'Notifications');
    document.body.appendChild(container);
  }

  const isObj = typeof optionsOrMessage === 'object' && optionsOrMessage !== null;
  const message = isObj ? optionsOrMessage.message : optionsOrMessage;
  const type = (isObj ? optionsOrMessage.type : fallbackType) || 'info';
  const title = isObj && optionsOrMessage.title ? optionsOrMessage.title : (type === 'success' ? 'Success' : 'Notice');
  const duration = isObj && typeof optionsOrMessage.duration === 'number' ? optionsOrMessage.duration : 4500;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');

  const iconSvg = type === 'success' ? `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ` : type === 'error' ? `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
  ` : `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  `;

  toast.innerHTML = `
    <div class="toast-icon-wrap" aria-hidden="true">
      ${iconSvg}
    </div>
    <div class="toast-content">
      <h4 class="toast-title">${title}</h4>
      <p class="toast-message">${message}</p>
    </div>
    <button class="toast-close-btn" type="button" aria-label="Dismiss notification">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    <div class="toast-progress">
      <div class="toast-progress-bar" style="animation-duration: ${duration}ms;"></div>
    </div>
  `;

  container.appendChild(toast);

  let dismissTimeout = null;
  let remainingTime = duration;
  let startTime = Date.now();
  let isClosed = false;

  function dismiss() {
    if (isClosed) return;
    isClosed = true;
    clearTimeout(dismissTimeout);
    toast.classList.add('toast-closing');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 320);
  }

  const closeBtn = toast.querySelector('.toast-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', dismiss);
  }

  dismissTimeout = setTimeout(dismiss, duration);

  toast.addEventListener('mouseenter', () => {
    clearTimeout(dismissTimeout);
    remainingTime -= (Date.now() - startTime);
    const progressBar = toast.querySelector('.toast-progress-bar');
    if (progressBar) progressBar.style.animationPlayState = 'paused';
  });

  toast.addEventListener('mouseleave', () => {
    if (remainingTime > 0) {
      startTime = Date.now();
      dismissTimeout = setTimeout(dismiss, remainingTime);
      const progressBar = toast.querySelector('.toast-progress-bar');
      if (progressBar) progressBar.style.animationPlayState = 'running';
    } else {
      dismiss();
    }
  });
}
