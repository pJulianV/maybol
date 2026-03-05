// Meybol Cacao – shared footer JS
(function() {
  var footerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="footer-logo-link">
            <img class="footer-logo" src="https://storage.e.jimdo.com/cdn-cgi/image/quality=85,fit=scale-down,format=auto,trim=0;0;0;0,width=1024,height=593/image/91296128/e39d9412-67ad-4717-b0e9-f344d8f6ed67.png" alt="Meybol Cacao">
          </a>
          <p style="font-size:.85rem;margin-bottom:1rem;">Handgemachte Tree-to-Bar Schokolade aus peruanischem Urkakao.</p>
          <div class="footer-social">
            <a href="https://facebook.com/MeybolCacao" target="_blank" title="Facebook" aria-label="Facebook">
              <svg width="10" height="18" viewBox="0 0 8 16" fill="currentColor"><path d="M6,3H4.538C4.077,3,4,3.252,4,3.889V5h2L5.761,8H4v8H2V8H0V5h2V3.077C2,1.055,3.064,0,4.461,0L6,0V3Z"/></svg>
            </a>
            <a href="https://www.instagram.com/meybolcacao/" target="_blank" title="Instagram" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UC4IrrCJCxbk6yHV67VwXxDg" target="_blank" title="YouTube" aria-label="YouTube">
              <svg width="18" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-2.7A12.6 12.6 0 0012 4a12.6 12.6 0 00-3.82.04 4.83 4.83 0 01-3.77 2.65C3.77 7.59 3 9.54 3 12s.77 4.41 1.41 5.32a4.83 4.83 0 013.77 2.65C9.63 20.52 10.8 20 12 20s2.37.52 3.82-.03a4.83 4.83 0 013.77-2.65C20.23 16.41 21 14.46 21 12s-.77-4.41-1.41-5.31zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
            </a>
            <a href="https://wa.me/4917620275594" target="_blank" title="WhatsApp" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0C4.477 0 0 4.477 0 10c0 1.763.463 3.476 1.344 4.987L0 20l5.196-1.322A9.95 9.95 0 0010 20c5.523 0 10-4.477 10-10S15.523 0 10 0zm5.58 13.855c-.235.66-1.37 1.26-1.887 1.32-.48.056-1.09.08-1.76-.11-.406-.117-.928-.274-1.596-.538C7.9 13.647 6.31 11.8 6.19 11.65c-.12-.15-.98-1.3-.98-2.48 0-1.18.62-1.76.84-2 .218-.24.476-.3.635-.3.16 0 .318.002.457.01.147.007.344-.056.538.41.2.48.677 1.66.736 1.78.058.122.097.264.02.424-.077.16-.116.26-.234.4-.12.14-.25.314-.358.422-.12.12-.244.25-.105.49.14.24.62 1.02 1.33 1.65.914.812 1.685 1.064 1.926 1.186.24.12.38.1.52-.06.14-.16.597-.697.757-.937.16-.24.318-.2.537-.12.22.08 1.397.66 1.637.78.24.12.398.18.458.28.06.1.06.56-.176 1.22z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <p class="footer-title">Navigation</p>
          <div class="footer-links">
            <a href="index.html">Home</a>
            <a href="shop.html">Shop</a>
            <a href="awards.html">Awards</a>
            <a href="kakaozeremonie.html">Kakaozeremonie</a>
            <a href="kakaonibs.html">Kakaonibs</a>
            <a href="projekt.html">Hilfsprojekte</a>
            <a href="kontakt.html">Kontakt</a>
            <a href="pressebereich.html">Pressebereich</a>
            <a href="https://www.meybolcacao.de/shop/native-kakaobohnen-roh-chuncho/" target="_blank" rel="noopener">Rohkakao kaufen ↗</a>
          </div>
          <p class="footer-title" style="margin-top:1.5rem;">Rechtliches</p>
          <div class="footer-links">
            <a href="https://www.meybolcacao.de/impressum/" target="_blank">Impressum</a>
            <a href="https://www.meybolcacao.de/datenschutz/" target="_blank">Datenschutz</a>
            <a href="https://www.meybolcacao.de/lieferbedingungen/" target="_blank">Lieferbedingungen</a>
            <a href="https://www.meybolcacao.de/widerrufsbelehrung/" target="_blank">Widerrufsbelehrung</a>
            <a href="https://www.meybolcacao.de/agb/" target="_blank">AGB</a>
            <a href="https://www.meybolcacao.de/cookie-einstellungen/" target="_blank">Cookie-Einstellungen</a>
          </div>
        </div>
        <div>
          <p class="footer-title">Kontakt</p>
          <p style="font-size:.85rem;">Meybol Cacao Germany GmbH</p>
          <p style="font-size:.85rem;margin-top:.4rem;">
            <a href="mailto:info@meybolcacao.de" style="color:#c9b8b4;">info@meybolcacao.de</a>
          </p>
          <p style="font-size:.85rem;margin-top:.4rem;">
            <a href="https://wa.me/4917620275594" target="_blank" style="color:#c9b8b4;">WhatsApp: +49 176 20275594</a>
          </p>
          <p style="font-size:.85rem;margin-top:.8rem;">
            <a href="http://www.meybol-cacao.com/" target="_blank" style="color:#c9b8b4;">www.meybol-cacao.com</a>
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2025 Meybol Cacao Germany GmbH. Copyright Pictures Meybol Cacao Germany GmbH.</span>
        <div class="footer-legal">
          <a href="https://www.meybolcacao.de/impressum/" target="_blank">Impressum</a>
          <a href="https://www.meybolcacao.de/datenschutz/" target="_blank">Datenschutz</a>
          <a href="https://www.meybolcacao.de/agb/" target="_blank">AGB</a>
        </div>
      </div>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
