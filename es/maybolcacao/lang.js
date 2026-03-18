// Selector de idioma y hreflang para Meybol (inspirado en comercio)
(function () {
  const langs = [
    { code: 'de', label: 'Deutsch', emoji: '🇩🇪' },
    { code: 'es', label: 'Español', emoji: '🇪🇸' },
    { code: 'en', label: 'English', emoji: '🇺🇸' }
  ];
  function getCurrentLang() {
    const path = window.location.pathname.split('/').filter(Boolean);
    if (path[0] === 'es') return 'es';
    if (path[0] === 'en') return 'en';
    return 'de';
  }
  function buildLangUrl(lang) {
    const path = window.location.pathname.split('/').filter(Boolean);
    if (path[0] === 'es' || path[0] === 'en') path.shift();
    const segs = lang === 'de' ? path : [lang, ...path];
    return '/' + segs.join('/');
  }
  function insertHreflang() {
    const head = document.head;
    if (!head) return;
    langs.forEach(l => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = l.code;
      link.href = buildLangUrl(l.code);
      head.appendChild(link);
    });
  }
  function insertSelector() {
    const current = getCurrentLang();
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:fixed;top:12px;right:12px;z-index:9999;font-family:sans-serif;';
    const select = document.createElement('select');
    select.style.cssText = 'padding:.35rem .5rem;border-radius:8px;border:1px solid #bbb;background:#fff;font-size:.95rem;';
    langs.forEach(l => {
      const opt = document.createElement('option');
      opt.value = l.code;
      opt.textContent = `${l.emoji} ${l.label}`;
      if (l.code === current) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener('change', () => {
      window.location.href = buildLangUrl(select.value);
    });
    wrapper.appendChild(select);
    document.body.appendChild(wrapper);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      insertHreflang();
      insertSelector();
    });
  } else {
    insertHreflang();
    insertSelector();
  }
})();
