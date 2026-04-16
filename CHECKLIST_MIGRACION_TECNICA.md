# 🔧 CHECKLIST TÉCNICO: Guía Paso a Paso Migration

## ✅ FASE 0: PREPARACIÓN (Días 1-2)

### Auditoría y Documentación
- [ ] Descargar completo desde Jimdo usando inspector de navegador
- [ ] Documentar todas las URLs actuales
- [ ] Listar todos los archivos y tamaños
- [ ] Exportar formularios, contactos, correos
- [ ] Captar estructura de menú actual
- [ ] Hacer screenshot de todas las páginas importantes
- [ ] Documentar colores, fuentes, branding
- [ ] Crear hoja de cálculo con mapeo de URLs antiguas → nuevas

### Backups Completos
- [ ] Backup completo de Jimdo (si es posible)
- [ ] Zip de todos los assets locales actuales
- [ ] Export de base de datos Jimdo (si la hay)
- [ ] Guardar capturas de tráfico/analytics actuales
- [ ] Screenshot del panel de administración Jimdo

### Resolución de Decisión
- [ ] Confirmar con cliente: OPCIÓN A o OPCIÓN B
- [ ] Si es B → Elegir nivel de implementación (B1/B2/B3)
- [ ] Si es B → Asignar responsable técnico
- [ ] Si es B → Presupuetar recursos

---

## ✅ FASE 1: INFRAESTRUCTURA (Días 3-5)

### 1.1 Hosting Setup (Render.com - Recomendado)

**Crear cuenta:**
- [ ] Ir a render.com
- [ ] Crear cuenta (GitHub recomendado)
- [ ] Verificar email
- [ ] Setup de 2FA si lo requiere

**Preparar repositorio Git:**
- [ ] Crear/validar repositorio en GitHub
- [ ] Pushear código actual
- [ ] Crear rama `development` para cambios
- [ ] Rama `main` para producción

**Crear servicio en Render:**
- [ ] Click en "New" → "Web Service"
- [ ] Conectar repositorio GitHub
- [ ] Seleccionar rama `main`
- [ ] Nombre del servicio: `maybol-app`
- [ ] Entorno: `Node`
- [ ] Build command: `npm install`
- [ ] Start command: `npm start`

**Variables de entorno:**
- [ ] `NODE_ENV=production`
- [ ] `PORT=3000`
- [ ] Database URL (si usa BD)
- [ ] API keys necesarias
- [ ] Emailer credentials (Mailgun/SendGrid)

**Verificar deployment:**
- [ ] Esperar a que compile
- [ ] Obtener URL temporal de Render (ej: maybol-app.onrender.com)
- [ ] Probar en navegador: https://maybol-app.onrender.com
- [ ] Verificar que carga sin errores

### 1.2 Base de Datos (si es necesario)

**Para SQLite (SimpleST):**
- [ ] Crear carpeta `/db` en proyecto
- [ ] Crear archivo `database.js`
- [ ] Configurar conexión SQLite

**Para PostgreSQL (Escalable):**
- [ ] En Render: "New" → "PostgreSQL"
- [ ] Esperar a que se cree la instancia
- [ ] Copiar connection string
- [ ] Agregar como variable de entorno en Web Service
- [ ] Crear schema inicial
- [ ] Ejecutar migraciones

### 1.3 Email Service (para formularios de contacto)

**Opción 1: Mailgun (recomendado para empezar)**
- [ ] Registrarse en mailgun.com
- [ ] Crear API key
- [ ] Crear dominio de sandbox
- [ ] Agregar variable de entorno `MAILGUN_API_KEY`
- [ ] Agregar variable de entorno `MAILGUN_DOMAIN`

**Opción 2: SendGrid (si necesita escalabilidad)**
- [ ] Registrarse en sendgrid.com
- [ ] Crear API key
- [ ] Verificar dominio (si planeas usar custom domain)
- [ ] Agregar variable de entorno `SENDGRID_API_KEY`

**Opción 3: Gmail + Nodemailer (para pruebas)**
- [ ] Crear cuenta Gmail dedicada
- [ ] Habilitar contraseñas de aplicación
- [ ] Guardar credenciales en variables de entorno

---

## ✅ FASE 2: DESARROLLO LOCAL (Días 6-12)

### 2.1 Estructura de Carpetas

```bash
maybol/
├── api/
│   ├── ai-chat.js           ✓ EXISTENTE
│   ├── contact.js           ← CREAR
│   ├── products.js          ← CREAR
│   ├── orders.js            ← CREAR
│   └── email.js             ← CREAR
├── db/
│   ├── database.js          ← CREAR
│   ├── products.json        ← CREAR
│   └── migrations.js        ← CREAR (opcional)
├── public/
│   ├── css/                 (assets)
│   ├── js/                  (assets)
│   ├── img/                 (assets)
│   └── favicon.ico
├── views/
│   ├── layouts/
│   │   └── base.html        ← CREAR (si usas templates)
│   └── pages/
├── utils/
│   ├── validators.js        ← CREAR
│   ├── logger.js            ← CREAR
│   └── helpers.js           ← CREAR
├── server.js                ✓ MEJORAR
├── package.json             ✓ VALIDAR
├── render.yaml              ✓ USAR
├── .env.example             ← CREAR
├── .env                     ← CREAR (LOCAL ONLY)
├── .gitignore               ✓ VALIDAR (.env, node_modules)
├── README.md                ← CREAR
└── sitemap.xml              ← CREAR
```

### 2.2 Mejoras a server.js

**Instalar dependencias adicionales:**
```bash
npm install express cors helmet compression dotenv
npm install --save-dev nodemon
```

**Actualizar server.js:**
```javascript
// server.js mejorado
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de seguridad
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes - CREAR
app.post('/api/ai-chat', require('./api/ai-chat'));
app.post('/api/contact', require('./api/contact'));
app.get('/api/products', require('./api/products'));
app.get('/api/products/:id', require('./api/products'));
app.post('/api/orders', require('./api/orders'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Rutas principales
app.get(['/', '/index\\.html?'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// 404 handler
app.use((req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API route not found', path: req.path });
  }
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Maybol server ready on port ${PORT}`);
  console.log(`🌐 Health: http://localhost:${PORT}/api/health`);
  console.log(`💬 AI: http://localhost:${PORT}/api/ai-chat`);
});
```

**Actualizar package.json scripts:**
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "node --test tests/**/*.test.js"
  }
}
```

### 2.3 API Endpoints - Implementar

**api/contact.js:**
```javascript
// api/contact.js
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Validar
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  
  try {
    // Guardar en BD o enviar email
    // TODO: Implementar lógica de email
    
    res.json({ 
      success: true,
      message: 'Message received'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Send failed' });
  }
};
```

**api/products.js:**
```javascript
// api/products.js
const fs = require('fs');

let products = [];

// Load products from JSON on startup
const loadProducts = () => {
  try {
    const data = fs.readFileSync('./db/products.json', 'utf8');
    products = JSON.parse(data);
  } catch (err) {
    console.log('No products.json found, starting empty');
    products = [];
  }
};

loadProducts();

module.exports = async (req, res) => {
  const { category } = req.query;
  
  let filtered = products;
  if (category) {
    filtered = products.filter(p => p.category === category);
  }
  
  res.json({ success: true, count: filtered.length, data: filtered });
};
```

### 2.4 Pruebas Locales

**Correr localmente:**
```bash
npm install
npm run dev
# Debería ver: "🚀 Maybol server ready on port 3000"
```

**Probar endpoints:**
```bash
# Health check
curl http://localhost:3000/api/health

# Chat IA
curl -X POST http://localhost:3000/api/ai-chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hola"}'

# Contacto
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test"}'
```

**Validar en navegador:**
- [ ] http://localhost:3000 → Carga index.html
- [ ] http://localhost:3000/api/health → JSON response
- [ ] Todos los formularios funcionan
- [ ] CSS/JS se carga correctamente

---

## ✅ FASE 3: MIGRACIÓN DE CONTENIDO (Días 7-10)

### 3.1 Importar HTML/CSS/JS de Jimdo

```bash
# Copiar estructura actual
mkdir -p public/maybolcacao
mkdir -p public/maybolcoffe
mkdir -p public/en public/es

# Copiar archivos (desde backup de Jimdo)
cp -r ./backup-jimdo/maybolcacao/* ./public/maybolcacao/
cp -r ./backup-jimdo/maybolcoffe/* ./public/maybolcoffe/

# Verificar estructura
ls -la public/maybolcacao/
ls -la public/maybolcoffe/
```

### 3.2 Ajustar referencias de rutas

**Buscar y reemplazar patrones:**
- [ ] Reemplazar rutas absolutas por relativas
- [ ] Verificar imports de CSS: `<link href="/css/..."`
- [ ] Verificar imports de JS: `<script src="/js/..."`
- [ ] Verificar imágenes: `<img src="/img/..."`
- [ ] Cambiar links internos a `/products` en lugar de URLs externas

**Comando para buscar incluso en VS Code o terminal:**
```bash
# Encontrar referencias a Jimdo
grep -r "jimdo" . --include="*.html" --include="*.js" --include="*.css"

# Encontrar rutas absolutas problemáticas
grep -r "http://" . --include="*.html" --include="*.js" | head -20
```

### 3.3 Importar datos de productos

**Crear db/products.json:**
```json
[
  {
    "id": 1,
    "name": "Cacao Premium 70%",
    "category": "cacao",
    "price": 24.99,
    "description": "Cacao de origen colombiano",
    "image": "/img/cacao-70.jpg",
    "stock": 50
  },
  {
    "id": 2,
    "name": "Café Colombiano",
    "category": "coffee",
    "price": 14.99,
    "description": "Café molido fresco",
    "image": "/img/cafe-colombiano.jpg",
    "stock": 100
  }
]
```

- [ ] Extraer productos de Jimdo
- [ ] Crear entrada por cada producto
- [ ] Verificar precios, descripciones, imágenes
- [ ] Probar endpoint `/api/products`

### 3.4 Validar integridad

```bash
# Verificar que no hay archivos rotos
npm install broken-link-checker

# Ejecutar validador de HTML
npx html-validate public/

# Verificar imágenes
find public -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.gif" \)
```

---

## ✅ FASE 4: TESTING STAGING (Días 11-13)

### 4.1 Deploy a Render

**Push cambios a GitHub:**
```bash
git add .
git commit -m "feat: Initial migration from Jimdo"
git push origin main

# Esperar a que Render recompile automáticamente
# Esto toma 2-5 minutos
```

**Verificar deployment:**
- [ ] Ir a render.com dashboard
- [ ] Ver status del deployment en Web Service
- [ ] Esperar "Service is live"
- [ ] Obtener URL: `https://maybol-app.onrender.com`

### 4.2 Testing en URL Staging

**Verificar funcionalidad:**
```bash
# Probar con la URL de Render
https://maybol-app.onrender.com/

# Probar endpoints
https://maybol-app.onrender.com/api/health
https://maybol-app.onrender.com/api/products

# Verificar HTTPS certificado
# Debería mostrar candado verde
```

**Testing en diferentes dispositivos:**
- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Mobile iOS (Safari)
- [ ] Mobile Android (Chrome)

**Testing de funcionalidad:**
- [ ] Navegar por todas las páginas
- [ ] Probar formularios de contacto
- [ ] Probar chat IA
- [ ] Verificar tienda/shop
- [ ] Probar links internos
- [ ] Reproducir audio/video si los hay
- [ ] Verificar carga de imágenes

### 4.3 SEO Pre-launch Checklist

- [ ] Crear `public/robots.txt`:
```txt
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://maybolcacao.com/sitemap.xml
```

- [ ] Crear `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://maybolcacao.com/</loc>
    <lastmod>2026-04-09</lastmod>
  </url>
  <url>
    <loc>https://maybolcacao.com/products</loc>
    <lastmod>2026-04-09</lastmod>
  </url>
</urlset>
```

- [ ] Verificar meta tags:
  - [ ] `<title>` descriptivo
  - [ ] `<meta description>`
  - [ ] `<meta viewport>` para mobile
  - [ ] Open Graph tags

- [ ] Crear `public/manifest.json` para PWA:
```json
{
  "name": "Maybol Cacao",
  "short_name": "Maybol",
  "icons": [
    { "src": "/img/logo-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/img/logo-512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "start_url": "/",
  "display": "standalone"
}
```

- [ ] Validar con herramientas:
  - [ ] Google Pagespeed Insights
  - [ ] W3C HTML Validator
  - [ ] Mobile-Friendly Test

---

## ✅ FASE 5: CONFIGURACIÓN DNS (Días 14-15)

### 5.1 Registrador de Dominio (SI NO ESTÁ EN JIMDO)

**Si el dominio está en Jimdo:**
```
⚠️ Opción A: Transferir dominio a otro registrador
   1. En Jimdo: Solicitar "Authorization Code"
   2. En nuevo registrador (Namecheap/Cloudflare): 
      Iniciar transfer con auth code
   3. Esperar 2-7 días para transfer
   4. Confirmar en nuevo registrador
   
⚠️ Opción B: Cambiar nameservers solo en Jimdo
   1. En Jimdo: Ir a Domain Settings
   2. Cambiar nameservers a tu provider
   3. Menos recomendado (menos control)
```

**Si el dominio está en otro registrador:**
- [ ] Acceder a registrador (Namecheap, GoDaddy, etc.)
- [ ] Ir a DNS settings del dominio

### 5.2 Configurar DNS (Opción A: Con Cloudflare)

**Recomendado para principiantes - Gratis y fácil:**

```bash
1. Ir a cloudflare.com
2. Sign up
3. Click "Add a Site" 
4. Entrar: maybolcacao.com
5. Plan: Free
6. Copiar nameservers:
   • tara.ns.cloudflare.com
   • tim.ns.cloudflare.com
```

**En tu registrador actual (Jimdo o donde esté):**
- [ ] Cambiar nameservers a:
  - `tara.ns.cloudflare.com`
  - `tim.ns.cloudflare.com`
- [ ] Esperar 30 minutos a 24 horas

**En Cloudflare DNS:**
- [ ] Crear record A (www):
```
Type: A
Name: @
Content: [IP de Render - ej: 34.12.34.56]
TTL: Auto
Proxy: DNS only (nube gris)
```

- [ ] Crear record CNAME (si aplica):
```
Type: CNAME
Name: www
Content: maybolcacao.com
TTL: Auto
Proxy: Proxied (nube naranja)
```

- [ ] Crear MX record (email):
```
Type: MX
Name: @
Content: mail.youremail.com (si usas email externo)
Priority: 10
```

### 5.3 Configurar SSL

**Render proporciona SSL automático:**
- [ ] En Render dashboard → Settings
- [ ] Custom Domain → Add Custom Domain
- [ ] Entrar: maybolcacao.com
- [ ] Agregar también: www.maybolcacao.com
- [ ] Render auto-genera SSL con Let's Encrypt
- [ ] Esperar validación (10 minutos)

**Verificar:**
```bash
curl -I https://maybolcacao.com
# Debería mostrar: 200 OK

# Con OpenSSL
openssl s_client -connect maybolcacao.com:443

# Debería mostrar certificado Let's Encrypt
```

### 5.4 Verificar DNS Propagación

```bash
# Herramientas online:
# - whatsmydns.net
# - dnschecker.org

# O desde terminal:
nslookup maybolcacao.com
dig maybolcacao.com
ping maybolcacao.com

# Debería apuntar a IP de Render (no a Jimdo)
```

---

## ✅ FASE 6: MIGRACIÓN VIVA (El Momento Crítico)

### 6.1 Checklist Pre-Migración (24h antes)

- [ ] Backup final de Jimdo
- [ ] Verificar que todo funciona en staging
- [ ] Notificar a clientes (email + redes sociales)
- [ ] Preparar comunicado post-migración
- [ ] Tener soporte técnico disponible
- [ ] Setup de monitoreo (Uptime Robot)

### 6.2 Desconectar Jimdo (Punto de No Retorno)

**EN JIMDO DASHBOARD:**
- [ ] Ir a Domain Settings
- [ ] Si queda conectado: Disconnect Domain
- [ ] ⚠️ CONFIRMAR: "Este dominio NO se podrá reconectar"
- [ ] Hacer click en Disconnect

**EN TU REGISTRADOR:**
- [ ] Cambiar nameservers definitivamente a Cloudflare/otro
- [ ] O cambiar A record si está allí

### 6.3 Activación DNS (Momento exacto)

```
TIMELINE:
T-0: Desconectar Jimdo
T+30 min: Cambiar DNS
T+1 hora: Propagación DNS empieza
T+24 horas: Propagación completa (puede ser más rápido)

DURANTE ESTO:
- Algunos usuarios verán sitio Jimdo
- Otros verán sitio nuevo (caché)
- Es NORMAL - durará máximo 48 horas
```

### 6.4 Validación Post-Migración (Hora 1)

```bash
# Después de cambiar DNS, esperar 10-30 minutos, luego:

# Verificar DNS cambió
nslookup maybolcacao.com
# Debería mostrar IP de Render, NO de Jimdo

# Verificar página carga
curl https://maybolcacao.com
# Debería traer HTML del nuevo servidor

# Verificar en navegador
https://maybolcacao.com
# Debería cargar sin errores

# Verificar HTTPS
# Candado verde en navegador

# Verificar APIs
https://maybolcacao.com/api/health
# Debería mostrar: {"status":"ok",...}
```

### 6.5 Monitoreo Activo (Primeras 24h)

- [ ] Monitorear errores del servidor (Render dashboard)
- [ ] Verificar en navegadores diferentes (sin caché)
- [ ] Probar en dispositivos móviles
- [ ] Probar formularios de contacto
- [ ] Verificar chat IA funciona
- [ ] Hacer prueba de compra si hay tienda
- [ ] Monitorear uptime (Uptime Robot)

---

## ✅ FASE 7: POST-MIGRACIÓN (Semana 1-4)

### 7.1 Validación Completa (Días 1-3)

**Crawl de sitio:**
```bash
npm install crawl-my-site

# Encontrar enlaces rotos, etc
```

**Herramientas automatizadas:**
- [ ] Google Search Console: Verificar propiedad
- [ ] Google Analytics: Configurar seguimiento
- [ ] Google Business Profile: Verificar/actualizar
- [ ] Bing Webmaster Tools: Registrar sitio

### 7.2 Configurar Redirects (Si URLs cambiaron)

**En server.js:**
```javascript
// Redirects permanentes de URLs antiguas
const redirects = {
  '/pagina-vieja': '/nueva-pagina',
  '/producto-old': '/products/producto',
  '/shop-old': '/shop'
};

app.get('*', (req, res, next) => {
  if (redirects[req.path]) {
    return res.redirect(301, redirects[req.path]);
  }
  next();
});
```

### 7.3 Enviar Sitemap a Search Engines

**Google Search Console:**
1. Ir a google.com/webmasters
2. Agregar property: https://maybolcacao.com
3. Ir a Sitemaps
4. Enviar: https://maybolcacao.com/sitemap.xml
5. Esperar indexación

**Bing Webmaster Tools:**
1. Ir a bing.com/webmasters
2. Agregar sitio
3. Enviar sitemap

### 7.4 Monitorear Posicionamiento

**Primo mes:**
- [ ] Verificar que Google empieza a crawlear (Crawl Stats en GSC)
- [ ] Ver errores de indexación en Google Search Console
- [ ] Monitorear keywords principales en posición (Tools: Ahrefs, SEMrush, Ubersuggest)
- [ ] Mantener estadísticas en hoja de cálculo

**Esperado:**
- Semana 1: Google descubre nuevo sitio
- Semana 2: Empieza a re-indexar
- Semana 3-4: Posicionamiento estabiliza
- Mes 2-3: Recupera tráfico orgánico anterior

### 7.5 Cleanup Post-Migración

- [ ] Eliminar trazas de Jimdo del nuevo sitio
- [ ] Actua lizar links en redes sociales si es necesario
- [ ] Actualizar directorios de empresas
- [ ] Notificar a partners/proveedores del nuevo sitio
- [ ] Cerrar/cambiar email de Jimdo si lo había
- [ ] Documentar nueva estructura en README.md

### 7.6 Configurar Monitoreo Continuo

**Uptime Robot (gratis):**
```
1. Ir a uptimerobot.com
2. Create Monitor
3. URL: https://maybolcacao.com
4. Check every: 5 minutos
5. Alert to: tu@email.com
```

**Alertas en email si sitio cae:**
- [ ] Recibir notificación en segundos
- [ ] Poder actuar rápidamente

---

## 🚨 TROUBLESHOOTING COMÚN

### Problema: DNS no cambia
```
Solución:
- Esperar 24 horas (propagación)
- Limpiar caché: Ctrl+Shift+Del en navegador
- Usar incógnito
- Probar con nslookup: nslookup maybolcacao.com
```

### Problema: HTTPS no funciona
```
Solución:
- Ir a Render → Settings → Custom Domain
- Verificar que dominio está agregado
- Dejar que Render genere certificado (10 min)
- Borrar caché del navegador
```

### Problema: Imágenes no cargan
```
Solución:
- Verificar rutas en HTML: /img/ vs img/
- Verificar que público/img/ tiene archivos
- Comprobar permisos: chmod 755 public/img/
- Búsqueda de referencias rotas: grep -r "src="
```

### Problema: Formularios no envían
```
Solución:
- Verificar que API endpoint existe en server.js
- Verificar que credenciales de email son correctas
- Revisar logs en Render: var logs
- Probar manualmente: curl -X POST ...
```

### Problema: Sitio es lento
```
Solución:
- Activar compression middleware en server.js
- Optimizar imágenes (convertir a WEBP)
- Avivar caché en Cloudflare
- Verificar tamaño de bundles JS/CSS
```

---

## 📋 CHECKLIST FINAL

**Antes de considerarlo "Listo":**

- [ ] ✅ Sitio carga en HTTPS
- [ ] ✅ Todas las páginas accesibles
- [ ] ✅ Todos los formularios funcionan
- [ ] ✅ Chat IA responde
- [ ] ✅ Tienda funciona (si existe)
- [ ] ✅ Sin errores en console (F12)
- [ ] ✅ Mobile responsive
- [ ] ✅ DNS apunta correctamente
- [ ] ✅ Google Search Console verifica propiedad
- [ ] ✅ Sitemap enviado a Google
- [ ] ✅ Monitoreo (Uptime Robot) configurado
- [ ] ✅ Email corporativo funciona
- [ ] ✅ Backups automáticos habilitados
- [ ] ✅ Documentación actualizada
- [ ] ✅ Team capacitado en mantenimiento

---

**Checklist técnica completado: Ready for Production! 🚀**

Próximos pasos: Monitoreo continuo y optimización de performance.
