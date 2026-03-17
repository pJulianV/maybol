// Meybol Coffee – shared footer
(function() {
  var footerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <p class="footer-title" style="font-size:1.4rem;letter-spacing:.1em;">MEYBOL COFFEE</p>
          <p style="font-size:.85rem;margin-bottom:1rem;color:#c9b8a8;">Premium-Hochlandkaffee aus Peru.<br>Aus starken Frauenhänden – fair, nachhaltig und voller Aroma.</p>
          <p><a href="shop.html" class="btn btn-primary btn-sm" style="font-size:.85rem;padding:.4rem 1rem;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align:middle;margin-right:.3rem;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>Zum Shop</a></p>
          <div class="footer-social">
            <a href="https://www.facebook.com/profile.php?id=100088193893433" target="_blank" rel="noopener" title="Facebook" aria-label="Facebook">
              <svg width="10" height="18" viewBox="0 0 8 16" fill="currentColor"><path d="M6,3H4.538C4.077,3,4,3.252,4,3.889V5h2L5.761,8H4v8H2V8H0V5h2V3.077C2,1.055,3.064,0,4.461,0L6,0V3Z"/></svg>
            </a>
            <a href="https://www.instagram.com/meybolcoffee/" target="_blank" rel="noopener" title="Instagram" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/4917620275594" target="_blank" rel="noopener" title="WhatsApp" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0C4.477 0 0 4.477 0 10c0 1.763.463 3.476 1.344 4.987L0 20l5.196-1.322A9.95 9.95 0 0010 20c5.523 0 10-4.477 10-10S15.523 0 10 0zm5.58 13.855c-.235.66-1.37 1.26-1.887 1.32-.48.056-1.09.08-1.76-.11-.406-.117-.928-.274-1.596-.538C7.9 13.647 6.31 11.8 6.19 11.65c-.12-.15-.98-1.3-.98-2.48 0-1.18.62-1.76.84-2 .218-.24.476-.3.635-.3.16 0 .318.002.457.01.147.007.344-.056.538.41.2.48.677 1.66.736 1.78.058.122.097.264.02.424-.077.16-.116.26-.234.4-.12.14-.25.314-.358.422-.12.12-.244.25-.105.49.14.24.62 1.02 1.33 1.65.914.812 1.685 1.064 1.926 1.186.24.12.38.1.52-.06.14-.16.597-.697.757-.937.16-.24.318-.2.537-.12.22.08 1.397.66 1.637.78.24.12.398.18.458.28.06.1.06.56-.176 1.22z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@meybolcacao1" target="_blank" title="TikTok" aria-label="TikTok" style="margin-left:6px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.44 0 9.92-4 9.99-9.44V12h-2v-.44C19.91 12.76 16.41 15 12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3c1.12 0 2.08.6 2.6 1.46V8h2v4.18C16.71 12.07 14.53 10 12 10c-2.21 0-4 1.79-4 4s1.79 4 4 4c3.54 0 6.43-2.86 6.93-6.43H20V12C19.92 17.52 15.52 22 10 22 4.48 22 0 17.52 0 12S4.48 2 10 2h2z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <p class="footer-title">Navigation</p>
          <div class="footer-links">
            <a href="index.html">Home</a>
            <a href="shop.html">Shop</a>
            <a href="uber-uns.html">Über uns</a>
            <a href="presse-kooperation.html">Presse &amp; Kooperation</a>
            <a href="kontakt.html">Kontakt</a>
          </div>
          <p class="footer-title" style="margin-top:1.5rem;">Rechtliches</p>
          <div class="footer-links">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">Lieferbedingungen</a>
            <a href="#">Widerrufsbelehrung</a>
            <a href="#">AGB</a>
            <a href="#">Cookie-Einstellungen</a>
          </div>
        </div>
        <div>
          <p class="footer-title">Kontakt</p>
          <p style="font-size:.85rem;color:#c9b8a8;">Meybol Coffee</p>
          <p style="font-size:.85rem;margin-top:.4rem;">
            <a href="mailto:info@meybolcoffee.de" style="color:#c9b8a8;">info@meybolcoffee.de</a>
          </p>
          <p style="font-size:.85rem;margin-top:.4rem;">
            <a href="https://wa.me/4917620275594" target="_blank" rel="noopener" style="color:#c9b8a8;">WhatsApp: +49 176 20275594</a>
          </p>
          <p style="font-size:.85rem;margin-top:.8rem;color:#c9b8a8;">Hamburg, Deutschland</p>
          <p style="font-size:.85rem;margin-top:.8rem;">
            <a href="https://www.meybolcacao.de" target="_blank" rel="noopener" style="color:#c9b8a8;">Entdecke auch: Meybol Cacao ↗</a>
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2025 Meybol Coffee. Alle Rechte vorbehalten.</span>
        <div>
          <a href="shop.html" class="btn btn-white btn-sm" style="display:inline-flex;align-items:center;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-right:.3rem;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>Shop</a>
        </div>
        <div class="footer-legal">
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
          <a href="#">AGB</a>
        </div>
      </div>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
