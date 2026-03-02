# Meybol Cacao Germany GmbH — Website

Sitio web estático de **Meybol Cacao Germany GmbH**, marca de chocolate artesanal Tree-to-Bar elaborado con cacao nativo chuncho de Perú. Múltiplemente galardonada con el *International Chocolate Award*.

🌐 **Web oficial:** [meybolcacao.de](https://www.meybolcacao.de)

---

## Estructura del proyecto

```
maybol/
├── index.html              # Página de inicio
├── shop.html               # Catálogo completo (31 productos en 7 categorías)
├── awards.html             # Premios International Chocolate Award 2018–2024
├── kakaozeremonie.html     # Ceremonia del cacao (MUNAY)
├── kakaonibs.html          # Nibs de cacao chuncho
├── kontakt.html            # Formulario de contacto + mapa
├── projekt.html            # Proyectos de sostenibilidad (AILLA / MISKY / INTI)
├── pressebereich.html      # Área de prensa
└── assets/
    ├── style.css           # Hoja de estilos compartida
    ├── nav.js              # Navegación + botón volver arriba (inyectados vía JS)
    └── footer.js           # Pie de página (inyectado vía JS)
```

## Tecnologías

| Recurso | Detalle |
|---------|---------|
| HTML5 / CSS3 | Sin frameworks — vanilla |
| Fuentes | [Prompt](https://fonts.google.com/specimen/Prompt) + [Roboto](https://fonts.google.com/specimen/Roboto) via Google Fonts |
| Imágenes | CDN de Jimdo (`storage.e.jimdo.com`) — acceso directo |
| JavaScript | Vanilla JS (sin dependencias) |

## Características

- **Navegación sticky** con dropdowns en escritorio y menú hamburguesa en móvil
- **Breadcrumbs** en todas las páginas interiores
- **Botón volver arriba** que aparece al hacer scroll
- **Barra de categorías sticky** en el Shop con resaltado automático al hacer scroll
- **Totalmente responsive** (breakpoints: 980 px, 768 px, 640 px)
- Nav y footer compartidos inyectados via JS — un solo archivo para editar

## Cómo usar localmente

Abrir cualquier archivo `.html` directamente en el navegador. No requiere servidor local.

```bash
# O con un servidor simple de Python:
python -m http.server 8000
# → http://localhost:8000
```

## Paleta de colores

| Variable | Valor | Uso |
|----------|-------|-----|
| `--primary` | `#bd9a90` | Color principal, botones, acentos |
| `--primary-dk` | `#a07d73` | Hover states |
| `--darker` | `#4a4a4a` | Texto principal |
| `--cream` | `#f5f0ed` | Fondo alternado |
| `--nav-bg` | `#bd9a90` | Fondo de la navegación |

---

© 2025 Meybol Cacao Germany GmbH
