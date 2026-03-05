// Meybol Cacao – shared nav, back-to-top & mobile menu
(function () {

  /* ── Build nav HTML ─────────────────────────────────── */
  var navHTML = `
  <nav class="nav" role="navigation" aria-label="Hauptnavigation">
    <div class="nav__inner">

      <a class="nav__logo" href="index.html" aria-label="Meybol Cacao – Startseite">
        <img src="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=0;0;0;0,width=1600,height=1235/image/91295713/9bf67d92-2100-44f4-84cf-a98c3054874d.png" alt="Meybol Cacao Logo">
      </a>

      <ul class="nav__menu" id="nav-menu" role="menubar">

        <li class="nav__item" role="none">
          <a class="nav__link" href="index.html" role="menuitem">Home</a>
        </li>

        <li class="nav__item" role="none">
          <a class="nav__link" href="shop.html" role="menuitem">Shop</a>
        </li>

        <li class="nav__item nav__has-drop" id="nav-nachhaltigkeit" role="none">
          <a class="nav__link" href="projekt.html" role="menuitem" aria-haspopup="true" aria-expanded="false">
            Nachhaltigkeit <span class="nav__arrow" aria-hidden="true">▾</span>
          </a>
          <ul class="nav__dropdown" role="menu" aria-label="Nachhaltigkeit Unterseiten">
            <li role="none"><a href="projekt.html" role="menuitem">🌱 Hilfsprojekte</a></li>
            <li role="none"><a href="https://www.meybolcacao.de/nachhaltigkeit-und-kakaoproduktion/kakaosorten/" target="_blank" rel="noopener" role="menuitem" class="nav__ext">Kakaosorten <span class="nav__exticon" aria-label="(externe Seite)">↗</span></a></li>
          </ul>
        </li>

        <li class="nav__item" role="none">
          <a class="nav__link" href="awards.html" role="menuitem">Awards</a>
        </li>

        <li class="nav__item nav__has-drop" id="nav-zeremonie" role="none">
          <a class="nav__link" href="kakaozeremonie.html" role="menuitem" aria-haspopup="true" aria-expanded="false">
            Kakaozeremonie <span class="nav__arrow" aria-hidden="true">▾</span>
          </a>
          <ul class="nav__dropdown" role="menu" aria-label="Kakaozeremonie Unterseiten">
            <li role="none"><a href="kakaozeremonie.html" role="menuitem">🍫 Kakaozeremonie</a></li>
            <li role="none"><a href="kakaonibs.html" role="menuitem">🫘 Kakaonibs</a></li>
          </ul>
        </li>

        <li class="nav__item nav__has-drop" id="nav-kontakt" role="none">
          <a class="nav__link" href="kontakt.html" role="menuitem" aria-haspopup="true" aria-expanded="false">
            Kontakt <span class="nav__arrow" aria-hidden="true">▾</span>
          </a>
          <ul class="nav__dropdown" role="menu" aria-label="Kontakt Unterseiten">
            <li role="none"><a href="kontakt.html" role="menuitem">✉️ Kontaktformular</a></li>
            <li role="none"><a href="pressebereich.html" role="menuitem">📰 Pressebereich</a></li>
          </ul>
        </li>

      </ul><!-- /nav__menu -->

      <div class="nav__right">
        <a class="nav__cart" href="https://www.meybolcacao.de/warenkorb/" target="_blank" rel="noopener" title="Warenkorb öffnen" aria-label="Warenkorb">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </a>
        <button class="nav__hamburger" id="nav-hamburger" aria-label="Menü öffnen" aria-expanded="false" aria-controls="nav-menu">
          <span></span><span></span><span></span>
        </button>
      </div>

    </div>
  </nav>`;

  /* ── Back-to-top button ──────────────────────────────── */
  var backTopHTML = `
  <button class="back-to-top" id="back-to-top" aria-label="Nach oben scrollen" title="Nach oben">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>`;

  /* ── Inject into DOM ─────────────────────────────────── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', backTopHTML);

  /* ── Hamburger toggle ───────────────────────────────── */
  var burger = document.getElementById('nav-hamburger');
  var menu   = document.getElementById('nav-menu');
  burger.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
  });

  /* ── Mobile: click parent to toggle dropdown ────────── */
  ['nav-nachhaltigkeit', 'nav-zeremonie', 'nav-kontakt'].forEach(function (id) {
    var item = document.getElementById(id);
    if (!item) return;
    var link = item.querySelector('.nav__link');
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 980) {
        e.preventDefault();
        var isOpen = item.classList.toggle('open');
        link.setAttribute('aria-expanded', isOpen);
      }
    });
  });

  /* ── Close mobile menu on outside click ─────────────── */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav') && menu.classList.contains('open')) {
      menu.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  /* ── Mark active page ───────────────────────────────── */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .nav__dropdown a').forEach(function (a) {
    if (a.getAttribute('href') === path) {
      a.classList.add('active');
      var parentItem = a.closest('.nav__item');
      if (parentItem) {
        var parentLink = parentItem.querySelector(':scope > .nav__link');
        if (parentLink) parentLink.classList.add('active');
      }
    }
  });

  /* ── Back-to-top logic ──────────────────────────────── */
  var btt = document.getElementById('back-to-top');
  window.addEventListener('scroll', function () {
    btt.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btt.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

})();
