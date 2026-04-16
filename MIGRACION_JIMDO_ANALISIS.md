# ANÁLISIS: Migración de Jimdo a Solución Independiente
**Documento de decisión para Maybol Coffee & Cacao**

---

## 📊 ESTADO ACTUAL

**Plataforma actual:** Jimdo (https://dash.e.jimdo.com/)  
**Líneas de negocio:** Maybol Cacao + Maybol Coffee  
**Lenguajes:** Español e Inglés  
**Infraestructura ya disponible:** Servidor Node.js/Express + API IA + Archivos locales HTML/CSS/JS

---

## 🔴 LIMITACIONES DE JIMDO (El Problema)

### 1. **Falta de Control de Código**
- No puedes editar HTML/CSS directamente
- Limitado a templates predefinidos
- Imposible integrar funcionalidades custom sin workarounds
- No hay acceso a servidor backend personalizado

### 2. **Restricción de Dominio (⚠️ CRÍTICA)**
- **UNA VEZ retires el dominio de Jimdo, NO PUEDES volver a asociarlo a tu cuenta Jimdo**
- Esto es irreversible y vinculante
- Si quieres volver a Jimdo en el futuro, necesitarías comprar un nuevo dominio
- Pérdida potencial de historial SEO (aunque es recuperable con redirects)

### 3. **Limitaciones Técnicas**
| Aspecto | Jimdo | Solución Custom |
|--------|-------|-----------------|
| Cambios de diseño | Superficiales | Control total |
| Integración 3rd party | Limitada | Completa |
| Chat IA personalizado | No disponible | ✅ Ya tienes |
| Bases de datos | Limitadas | Completa |
| Velocidad de carga | Media (depende de Jimdo) | Optimizable |
| Certificado SSL | Incluido | Sí (Let's Encrypt) |
| Backups | Jimdo maneja | Tú controlas |
| Escalabilidad | Limitada | Según tu infraestructura |

### 4. **Dependencia de Terceros**
- Cambios en políticas de Jimdo te afectan
- Posibles aumentos de precios
- Tiempos de respuesta lentos (están en servidores de Jimdo)
- Limitación en API calls y recursos

### 5. **Migración de Datos**
- Exportación incompleta desde Jimdo
- Pérdida potencial de datos
- Tiempo muerto durante transición

---

## ✅ VENTAJAS DE MIGRAR A SOLUCIÓN INDEPENDIENTE

### 1. **Control Absoluto**
- Edita código directamente
- Personalización ilimitada
- Funcionalidades propias según necesidad

### 2. **Integración IA**
- Ya tienes servidor Node.js funcionando
- API de chat IA implementada
- Funcionalidades avanzadas posibles

### 3. **Escalabilidad**
- Crece sin limitaciones de plan Jimdo
- Múltiples idiomas/productos fácilmente
- Manejo de tráfico variable

### 4. **Costo**
- A largo plazo más económico
- Sin comisiones de plataforma
- Pago por lo que realmente usas

### 5. **SEO y Rendimiento**
- Optimización total para motores de búsqueda
- Control de metadata
- Carga más rápida (sin intermediarios)

---

## ⚠️ RIESGOS Y CONSIDERACIONES

### 1. **El Problema del Dominio**
```
SITUACIÓN ACTUAL:
✅ Dominio conectado a Jimdo
📍 DNS apunta a servidores de Jimdo

SI DESCONECTAS:
🔴 Jimdo BLOQUEA futuras reconexiones
❌ No puedes volver a Jimdo con ese dominio
⚠️ Decisión permanente

SOLUCIÓN:
✅ Usar servicios DNS separados (Namecheap, Cloudflare, AWS Route53)
✅ Apuntar a tu propio servidor
✅ Mantener control del dominio registrador
```

### 2. **Tiempo de Inactividad**
- Mitigación: Preparar todo offline → luego cambiar DNS (solo 1-2 horas)

### 3. **Mantenimiento Técnico**
- Necesitas en alguien que maneje servidor Node.js
- Actualizaciones de seguridad necesarias
- Monitoreo y backups

### 4. **Certificado SSL**
- No es problema (Let's Encrypt es gratis)

### 5. **Email Corporativo**
- Si usas email con ese dominio, debes migrar también (MX records)

---

## 🎯 OPCIÓN A: MANTENER JIMDO (Cambios Básicos)

### Caso de uso:
- No necesitas funcionalidades muy complejas
- Presupuesto limitado para mantenimiento
- Quieres algo simple y rápido

### Ventajas:
✅ Sin cambios de infraestructura  
✅ Soporte Jimdo disponible  
✅ Mantenimiento automático  
✅ Seguridad manejada por Jimdo  

### Desventajas:
❌ Limitaciones permanentes  
❌ No puedes usar API IA actual  
❌ Dependencia de Jimdo  
❌ Menos control  

### Acciones:
1. Mejorar tienda con lo que Jimdo permite
2. Añadir funcionalidades básicas (formularios, galerías)
3. Optimizar contenido existente

### Costo:
- Plan Jimdo: ~€11-25/mes
- Dominio: €5-15/año
- **Total: ~€135-315/año**

---

## 🚀 OPCIÓN B: MIGRAR A SOLUCIÓN COMPLETA CON CÓDIGO

### Caso de uso:
- Necesitas funcionalidades avanzadas
- Tienes presupuesto para mantenimiento técnico
- Quieres diferenciarte competitivamente

### Ventajas:
✅ Control total del código  
✅ Integración IA funcionando  
✅ Escalable indefinidamente  
✅ Más económico a largo plazo  
✅ Diferenciación competitiva  

### Desventajas:
❌ Requiere conocimiento técnico  
❌ Mantenimiento contínuo  
❌ Migración compleja (1-2 semanas)  
❌ Configuración inicial más larga  

### Tecnologías Recomendadas:

#### Opción B1: Simplest (Recomendado para empezar)
```
→ Node.js + Express (ya tienes estructura)
→ Hosting: Render.com, Railway.app o Replit
→ Base de datos: SQLite (simple) o MongoDB (escalable)
→ Dominio: GoDaddy, Namecheap o Cloudflare
→ Email: Mailgun o SendGrid
→ CDN/Cache: Cloudflare (gratis con SSL)

Tiempo implementación: 1-2 semanas
Costo mensual: €5-20
```

#### Opción B2: Escalable y Profesional
```
→ Next.js (React) o Vue.js (frontend moderno)
→ Node.js/Express (backend)
→ Base de datos: PostgreSQL
→ Hosting: Vercel, Netlify o AWS
→ Email: Sendgrid
→ CDN: Cloudflare
→ SSL: Let's Encrypt (gratis)

Tiempo implementación: 2-3 semanas
Costo mensual: €20-50
```

#### Opción B3: Full Enterprise
```
→ Next.js con TypeScript
→ PostgreSQL con backups automáticos
→ AWS o DigitalOcean
→ Stripe para pagos
→ Admin dashboard completo
→ CI/CD automático

Tiempo implementación: 3-4 semanas
Costo mensual: €30-100
```

### Costo Comparativo (Anual):
| Servicio | B1 | B2 | B3 |
|----------|-----|------|---------|
| Hosting | €60 | €100+ | €200+ |
| Dominio | €10 | €10 | €10 |
| Email | €0-50 | €50 | €50 |
| BD/Storage | €0-20 | €50 | €100 |
| SSL | €0 | €0 | €0 |
| **TOTAL/AÑO** | **€70-140** | **€210+** | **€360+** |

---

## 📋 GUÍA PASO A PASO: MIGRACIÓN (Opción B)

### **FASE 0: PREPARACIÓN (1-2 días)**

#### Step 1: Auditoría de contenido
```bash
✓ Descargar todos los assets de Jimdo
✓ Documentar estructura de menú
✓ Listar todas las páginas y productos
✓ Exportar contactos/formularios si es posible
✓ Guardar copias de todas las imágenes
✓ Documentar URLs actuales para redirects
```

#### Step 2: Documentar URLs actuales
```
Ejemplo:
- maybolcacao.es/productos → /products
- maybolcoffe.es/tienda → /shop
- maybolcacao.es/contacto → /contact
```

#### Step 3: Backup completo de Jimdo
```
Descargar todo desde panel Jimdo antes de cambiar DNS
```

---

### **FASE 1: CONFIGURACIÓN INFRAESTRUCTURA (2-3 días)**

#### Step 1: Elegir proveedor hosting
```bash
# Recomendado: Render.com (más simple que AWS)
1. Ir a render.com
2. Crear cuenta gratis
3. Conectar repositorio GitHub
4. Crear servicio Web Service
5. Configurar variables de entorno
```

#### Step 2: Configurar base de datos (si es necesario)
```bash
# Para SQLite (simplest)
No requiere setup, usa archivo local

# Para PostgreSQL
Crear instancia en Render o Heroku
Obtener connection string
```

#### Step 3: Estructura de proyecto local
```
maybol/
├── api/
│   ├── ai-chat.js          ✓ Ya existe
│   ├── products.js         (crear)
│   ├── orders.js           (crear)
│   └── contact.js          (crear)
├── public/                 (Static assets)
│   ├── css/
│   ├── js/
│   └── img/
├── views/                  (Templates si es necesario)
├── db/
│   └── database.js         (Manejo de datos)
├── server.js               ✓ Ya existe (mejorar)
├── package.json            ✓ Ya existe
└── render.yaml             ✓ Ya existe
```

---

### **FASE 2: DESARROLLO (1-2 semanas)**

#### Step 1: Migrar HTML a rutas de servidor
```javascript
// server.js mejorado
const express = require('express');
const app = express();

// Rutas principales
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/products', (req, res) => res.sendFile(__dirname + '/products.html'));
app.get('/shop', (req, res) => res.sendFile(__dirname + '/shop.html'));
app.get('/contact', (req, res) => res.sendFile(__dirname + '/contact.html'));

// API endpoints
app.post('/api/ai-chat', require('./api/ai-chat'));
app.post('/api/contact', require('./api/contact'));
app.get('/api/products', require('./api/products'));

app.listen(3000, () => console.log('Server running'));
```

#### Step 2: Crear API endpoints necesarios
```javascript
// api/contact.js
module.exports = async (req, res) => {
  const { name, email, message } = req.body;
  // Validar datos
  // Guardar en base de datos o enviar email
  // Responder al cliente
  res.json({ success: true });
};

// api/products.js
module.exports = async (req, res) => {
  // Obtener productos de DB o JSON
  // Filtrar por categoría si es necesario
  res.json(products);
};
```

#### Step 3: Importar datos
```bash
# Copiar estructura de carpetas de Jimdo
cp -r ./jimdo-backup/maybolcacao ./public/
cp -r ./jimdo-backup/maybolcoffe ./public/

# Verificar que CSS/JS funcionan correctamente
```

#### Step 4: Ajustar rutas internas
```bash
# Buscar y reemplazar referencias relativas
# Ejemplo: /assets/ → /public/assets/
```

#### Step 5: Implementar multiidioma
```javascript
// Usar estructura existente en en/ y es/
app.use((req, res, next) => {
  const lang = req.query.lang || req.headers['accept-language'].split(',')[0];
  req.lang = lang.includes('es') ? 'es' : 'en';
  next();
});

app.get('/:path(*)', (req, res) => {
  const file = `${req.lang}/${req.params.path}/index.html`;
  res.sendFile(__dirname + '/' + file);
});
```

---

### **FASE 3: TESTING LOCAL (2-3 días)**

#### Step 1: Verificar funcionalidad
```bash
npm start
# Visitar http://localhost:3000
# Probar todos los formularios
# Verificar chat IA
# Probar navegación multiidioma
```

#### Step 2: Testing en staging
```bash
# Push a repositorio GitHub
# Render automáticamente deploya en URL temporal
# Probar con datos reales
```

#### Step 3: Realizar SEO audit
```bash
# Verificar que todas las URLs redirect correctamente
# Generar sitemap.xml
# Verificar robots.txt
# Comprobar Open Graph meta tags
```

---

### **FASE 4: PREPARAR MIGRACIÓN DE DOMINIO (1-2 días)**

#### Step 1: Configurar registrador de dominio
```
IMPORTANTE: El dominio debe estar registrado FUERA de Jimdo
Opciones recomendadas:
- Namecheap ✓ (Cheap + good support)
- GoDaddy (Popular)
- Cloudflare (DNS gratis, ¡recomendado!)
- AWS Route53

⚠️ SI EL DOMINIO ESTÁ EN JIMDO:
Opción A: Transferir dominio a otro registrador (2-7 días)
Opción B: Cambiar nameservers en Jimdo (menos recomendado)
```

#### Step 2: Configurar DNS records
```
Con Cloudflare o Namecheap:

A Record:
  Name: @ (o maybolcacao.com)
  Type: A
  Value: [IP de tu servidor Render/Railway]
  TTL: 300

www Record:
  Name: www
  Type: CNAME
  Value: maybolcacao.com
  TTL: 300

MX Record (para email):
  Name: @
  Type: MX
  Value: tu-proveedor-email.com
  Priority: 10

TXT Record (verificación):
  Name: @
  Type: TXT
  Value: v=spf1 include:tu-email.com ~all
```

#### Step 3: Obtener certificado SSL
```bash
# Render lo hace automáticamente con Let's Encrypt
# Esperar 5 minutos a que se valide
```

---

### **FASE 5: MIGRACIÓN (Día crítico - ~2 horas downtime)

#### Step 1: Aviso previo
```
24 horas antes:
- Notificar a clientes por email
- Publicar en redes sociales
- Preparar comunicado
```

#### Step 2: Última verificación
```bash
# Verificar que todo está en producción
# Hacer backup final de Jimdo
# Verificar certificado SSL
# Probar con VPN para simular caché vieja
```

#### Step 3: Cambiar DNS (momento crítico)
```
EN TU REGISTRADOR (Namecheap/Cloudflare/etc):
Cambiar nameservers/A records para apuntar a nuevo servidor

Tiempo de propagación: 1-48 horas
(Normalmente 30-60 minutos en local)
```

#### Step 4: Verificación post-migración
```bash
# Esperar 5 minutos, luego verificar
ping maybolcacao.com
# Debería apuntar a IP nueva

curl https://maybolcacao.com
# Debería traer HTML correcto

# Verificar en navegador
https://maybolcacao.com
# Debería cargar sin errores
```

#### Step 5: Monitoreo
```
Primeras 24 horas:
- Monitorear errores del servidor
- Verificar que chat IA funciona
- Comprobar formularios de contacto
- Verificar en dispositivos móviles
```

---

### **FASE 6: POST-MIGRACIÓN (1 semana)**

#### Step 1: Validar todas las páginas
```bash
# Ejecutar crawler de integridad
# Comprobar enlaces rotos
# Verificar mobile responsiveness
```

#### Step 2: Configurar redirects permanentes
```javascript
// Para URLs antiguas de Jimdo que cambien
app.get('/pagina-vieja', (req, res) => {
  res.redirect(301, '/nueva-pagina');
});
```

#### Step 3: Notificar a search engines
```
Google Search Console:
- Verificar propiedad (si es nuevo sitio)
- Enviar sitemap.xml
- Comprobar que indexa correctamente

Herramientas:
- Google Search Console
- Bing Webmaster Tools
- Verificar en Google Maps
```

#### Step 4: Monitorear SEO
```
Semanas 1-4:
- Verificar posicionamiento de keywords principales
- Monitorear tráfico orgánico
- Comprobar que Google re-indexa páginas

Nota: Puede tardar 2-4 semanas en estabilizarse
```

---

## ⚡ TIMELINE RESUMIDO

| Fase | Duración | Descripción |
|------|----------|-------------|
| **Preparación** | 1-2 días | Auditoría y backups |
| **Infraestructura** | 2-3 días | Hostname, BD, DNS |
| **Desarrollo** | 1-2 semanas | Migrar código, APIs |
| **Testing** | 2-3 días | Local, staging, SEO |
| **Preparación DNS** | 1-2 días | Configurar records |
| **Migración Real** | 0.5-2 horas | Cambiar DNS |
| **Post-Migración** | 1-4 semanas | Validación y SEO |
| **TOTAL** | **3-4 semanas** | De principio a fin |

---

## 💰 COMPARATIVA ECONÓMICA (5 años)

### OPCIÓN A: Mantener Jimdo
```
€135-315/año × 5 años = €675-1,575
+ Limitaciones tecnológicas
+ Sin control de código
+ Dependencia de Jimdo
= COSTO REAL MAYOR (por restricciones)
```

### OPCIÓN B1: Migrar (Simple)
```
Setup inicial:
  - Desarrollo: €500-1,000 (una sola vez)
  - Migración: €200-300 (una sola vez)
  
Operación anual:
  - Hosting: €60
  - Dominio: €10
  - Email: €0-50
  - TOTAL/AÑO: €70-120

5 AÑOS:
  - Setup: €700-1,300
  - 5 años operación: €350-600
  - TOTAL: €1,050-1,900

PERO GANAS: Control total, escalabilidad, IA, sin restricciones
```

### OPCIÓN B2: Migrar (Escalable)
```
Setup inicial:
  - Desarrollo: €1,500-2,500
  - Migración: €300-500
  
Operación anual:
  - TOTAL/AÑO: €200-300

5 AÑOS:
  - Setup: €1,800-3,000
  - 5 años operación: €1,000-1,500
  - TOTAL: €2,800-4,500

PERO GANAS: Escalabilidad profesional, CDN, backups automáticos
```

---

## ⚠️ PUNTOS CRÍTICOS A RECORDAR

### 1. **EL DOMINIO ES PERMANENTE**
```
❌ UNA VEZ DESCONECTAS DE JIMDO, NO PUEDES VOLVER
Decisión de negocio importante para tomar
```

### 2. **SEO NO SE PIERDE**
```
✅ Con redirects 301 correctos, preservas traffic
✅ Google entiende migración si lo haces bien
✅ Riesgo: Solo si URL cambia sin redirect
```

### 3. **DOWNTIME MÍNIMO**
```
✅ Con buena planificación: <2 horas
✅ Cambio DNS es el único punto crítico
✅ Resto se puede hacer offline
```

### 4. **CAPACIDADES TÉCNICAS**
```
Necesitas:
✓ Alguien que entienda Node.js (¿ya lo tienes?)
✓ Alguien para mantenimiento (~2h/mes)
✓ Monitoreo básico (podría ser automático)
```

### 5. **MAIL CORPORATIVO**
```
Si usas email@maybolcacao.com:
⚠️ Planificar migración de mail service
⚠️ Configurar MX records
⚠️ Comunicar a clientes esta dirección
```

---

## 📞 RECOMENDACIÓN FINAL

### Para **Maybol Coffee & Cacao**:

**RECOMENDACIÓN: OPCIÓN B1 (Migración Simple)**

**Razones:**
1. ✅ Ya tienes infraestructura Node.js funcionando
2. ✅ Ya tienes API IA implementada
3. ✅ Tienes estructura HTML/CSS lista
4. ✅ El costo es mínimo comparado con Jimdo
5. ✅ Tamaño de proyecto es manejable (2 líneas de negocio)
6. ✅ Growth potential sin limitaciones

**Plan de acción recomendado:**
```
Semana 1-2: Desarrollo y testing
Semana 3: Preparación DNS y certificado
Semana 4: Go live

Costo: €700-1,500 para setup
Costo operación: €70-120/año vs €135-315/año en Jimdo
Beneficio: Control total + IA + escalabilidad
```

**Próximos pasos:**
1. Revisar y validar con el cliente esta análisis
2. Tomar decisión: Opción A vs Opción B
3. Si es B, iniciar Fase 0 inmediatamente
4. Designar responsable técnico de mantenimiento

---

## 📎 ANEXOS

### Herramientas útiles
- **Hosting:** Render.com, Railway.app, Replit
- **Registrador:** Namecheap, Cloudflare, GoDaddy
- **DNS:** Cloudflare (recomendado, gratis)
- **Email:** Mailgun, SendGrid, Resend
- **Monitoring:** Uptime Robot (gratis)
- **Analytics:** Google Analytics, Plausible
- **Backups:** Automated en Render + daily backup scripts

### Contactos útiles
- Render Support: https://render.com/support
- Cloudflare DNS Help: https://dash.cloudflare.com
- Let's Encrypt (SSL): https://letsencrypt.org

### Documentación de referencia
- Migración de dominio: https://support.google.com/webmasters/answer/83106
- DNS Setup: https://docs.render.com/custom-domains
- Node.js deployment: https://nodejs.org/en/docs/guides/nodejs-web-app/

---

**Documento preparado para:** Maybol Coffee & Cacao  
**Fecha:** Abril 2026  
**Versión:** 1.0
