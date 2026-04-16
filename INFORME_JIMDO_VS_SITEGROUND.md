# Informe corto: Jimdo vs SiteGround (Maybol)

Fecha: 2026-04-09
Moneda de referencia: EUR (Jimdo) y USD (SiteGround)

## 1) Solución A: seguir en Jimdo

Nombre comercial:
- Jimdo Website (Start, Grow, Unlimited)

Precios publicados (sitio oficial):
- Start: 11 EUR/mes
- Grow: 18 EUR/mes
- Unlimited: 45 EUR/mes

Notas de precio:
- Los precios mostrados aplican normalmente a contrato de 12 meses.
- Incluyen IVA en la página consultada de Jimdo.

Para Alemania:
- Sí sirve para Alemania.
- Jimdo es una plataforma de origen alemán y orientada al mercado europeo.

## 2) Solución B: migrar a hosting editable con código (SiteGround)

Nombre comercial:
- SiteGround Web Hosting (StartUp, GrowBig, GoGeek)

Precios publicados (sitio oficial, promo y renovación):
- StartUp: 2.99 USD/mes (promo), renueva a 17.99 USD/mes
- GrowBig: 4.99 USD/mes (promo), renueva a 29.99 USD/mes
- GoGeek: 7.99 USD/mes (promo), renueva a 44.99 USD/mes

Notas de precio:
- Los precios promo suelen requerir pago anual por adelantado.
- IVA no incluido en la página consultada de SiteGround.
- En renovaciones, el costo sube de forma importante frente al precio promo.

Para Alemania:
- Sí sirve para Alemania.
- Recomendado seleccionar centro de datos en Europa para latencia y cumplimiento.

## 3) Consecuencias irreversibles al quitar el dominio de Jimdo

Punto critico (segun el caso reportado por cliente):
- Si se quita/desconecta el dominio de Jimdo, puede no permitirse volver a conectarlo en la misma configuracion.

Consecuencias de negocio:
- Riesgo de no poder regresar a la situacion anterior en Jimdo con ese dominio.
- Necesidad de completar la migracion al nuevo proveedor sin vuelta atras simple.
- Posible impacto temporal en SEO y trafico si no se hacen redirecciones 301.
- Riesgo operativo si se cambia DNS sin ventana controlada.
- Necesidad de revisar correo corporativo (MX/SPF/DKIM) para no perder emails.

Mitigacion recomendada antes de desconectar:
- Confirmar por escrito con soporte Jimdo la politica exacta para ese dominio.
- Tener el sitio nuevo 100% listo y probado en staging.
- Preparar redirecciones 301 de todas las URLs importantes.
- Programar cambio de DNS en ventana de bajo trafico.
- Verificar email corporativo y backups antes del corte.

## 4) Resumen de decision rapida

Si quieren simplicidad y cambios basicos:
- Elegir Jimdo.

Si quieren control total del codigo y escalar funcionalidades:
- Elegir SiteGround + web propia.

Advertencia final:
- No desconectar dominio de Jimdo hasta tener validada la politica de reconexion y el plan de migracion final.

## 5) Fuentes consultadas

- Jimdo pricing: https://www.jimdo.com/pricing/
- SiteGround hosting: https://es.siteground.com/hosting-web.htm
