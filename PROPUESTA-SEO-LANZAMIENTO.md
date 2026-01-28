# Propuesta SEO y lanzamiento pro — Run4Wish Web

**Objetivo:** Posicionar run4wish.com como referencia en “objetivos con constancia”, “wish goals”, “clubes de accountability” y términos afines; y lanzar la web con aspecto y UX de producto profesional.

---

## 1. Análisis actual

### 1.1 Estructura y URLs

| Aspecto | Estado | Detalle |
|--------|--------|---------|
| **URLs** | ✅ Correctas | `/`, `/como-funciona`, `/carreras`, `/clubes`, `/empieza-ahora`, `/faq`, `/wishes`. Semanticas, español, sin parámetros. |
| **Navegación** | ✅ Clara | Header con 6 enlaces + logo. Falta enlace a Home en nav (solo en logo). |
| **Jerarquía H1–H3** | ⚠️ Mejorable | Home: un H1 y varios H2/H3 bien. FAQ: cada pregunta es H2; idealmente H2 contenedor + preguntas en `<h3>` o dentro de acordeón con heading adecuado. |
| **Footer** | ❌ No existe | No hay footer (legal, enlaces, CTA, redes). |

### 1.2 Contenido y datos

| Aspecto | Estado | Detalle |
|--------|--------|---------|
| **Copy** | ✅ Sólido | Mensaje claro: constancia, wish, clubes, retos. Buena base para SEO. |
| **Longitud** | ⚠️ Escueta | Muchas secciones en 1–2 líneas. A Google le gustan ~300+ palabras por página temática cuando tiene sentido. |
| **Palabras clave** | ⚠️ Implícitas | Falta uso más explícito de términos como “objetivos con constancia”, “cumplir metas”, “accountability”, “retos 30 días”, “comunidad de objetivos”, etc. |
| **FAQ** | ✅ Bien | 7 preguntas útiles para featured snippets. Estructura (Schema FAQ) aún no implementada. |
| **CTAs** | ✅ Claros | “Crear cuenta”, “Empieza ahora”, “Cómo funciona”. Algunos apuntan a `#` (pendiente conexión con signup). |

### 1.3 Metadatos y SEO técnico

| Aspecto | Estado | Detalle |
|--------|--------|---------|
| **Title** | ⚠️ Genérico | Solo en layout: “Run4Wish – R4W”. Todas las páginas comparten el mismo. Sin variación por sección. |
| **Meta description** | ⚠️ Genérico | Una sola para todo el sitio. Máx ~155 caracteres, pero sin orientación por página. |
| **Open Graph** | ❌ No | Sin `og:title`, `og:description`, `og:image`, `og:url`, `og:type`. Redes y previews no optimizados. |
| **Twitter Cards** | ❌ No | Sin `twitter:card`, `twitter:title`, etc. |
| **Canonical** | ❌ No | Sin URLs canónicas. Importante cuando haya dominio definitivo y posible tráfico con params. |
| **Robots** | ❌ No | Sin `robots.txt`. Sin directivas para crawlers. |
| **Sitemap** | ❌ No | Sin `sitemap.xml`. Google no tiene un mapa explícito del sitio. |
| **Alternate/hreflang** | ➖ N/A por ahora | Solo español. Si más adelante hay EN/otros idiomas, habría que añadir. |
| **Structured data** | ❌ No | Sin JSON-LD (Organization, WebSite, FAQPage, etc.). Se pierde potencial en rich results. |

### 1.4 Técnico y UX

| Aspecto | Estado | Detalle |
|--------|--------|---------|
| **HTML** | ✅ Correcto | `lang="es"`. Uso razonable de secciones y encabezados. |
| **Semántica** | ⚠️ Mejorable | `<main>` existe. Falta `<article>` donde aplique, `aria-label` en nav, `role` en regiones clave. |
| **Imágenes** | ❌ N/A | Sin imágenes todavía. Cuando se añadan: `alt`, optimización, posible WebP/AVIF. |
| **Rendimiento** | ✅ Base OK | Next.js, React. Sin imágenes pesadas. Falta valorar Core Web Vitals en producción (LCP, INP, CLS). |
| **Responsive** | ⚠️ Básico | Layout flexible pero sin breakpoints ni menú móvil (hamburguesa). |
| **Focus / a11y** | ⚠️ Por revisar | Estilos de `:focus`, contraste (botones naranja sobre oscuro). |

---

## 2. Propuesta de actuación (estilo pro)

### 2.1 Metadatos y SEO por página

**Objetivo:** Cada URL con `title` y `description` únicos, y opcionalmente `keywords` si se usan.

- **Home**  
  - Title: `Run4Wish — Convierte la constancia en deseos cumplidos \| R4W`  
  - Description: `Reto diario de 1 pregunta. Gana quien no falla ningún día. Crea tu wish, únete a clubes, sigue retos. Empieza gratis.`  

- **Cómo funciona**  
  - Title: `Cómo funciona Run4Wish — 5 pasos para cumplir tu wish \| R4W`  
  - Description: `Wish → mini-objetivos → Club → Retos → Revisar. Estructura, comunidad y constancia para lograr tus metas.`  

- **Carreras**  
  - Title: `Carreras — Construye Run4Wish con nosotros \| R4W`  
  - Description: `Colabora en soporte, producto, marketing, contenido o comunidad. Ganas de construir y orientación a resultados.`  

- **Clubes**  
  - Title: `Clubes Run4Wish — Comunidades por objetivo \| R4W`  
  - Description: `Avanza acompañado: Finanzas, Idiomas, Creatividad, Emprender, Hábitos. Motivación, ideas y accountability.`  

- **Empieza ahora**  
  - Title: `Empieza ahora — Tu primer wish en 2 minutos \| Run4Wish`  
  - Description: `Elige tipo de wish, escríbelo, únete a un club y arranca un reto 7/14/30 días. Crear cuenta gratis.`  

- **FAQ**  
  - Title: `Preguntas frecuentes — Run4Wish \| R4W`  
  - Description: `Qué es un wish, clubes, retos, cómo empezar. Respuestas rápidas a las dudas más comunes.`  

- **Wishes**  
  - Title: `Wishes — Tu deseo con estructura \| Run4Wish`  
  - Description: `Crea wishes, prioriza, divide en mini-objetivos y mide progreso. Plantilla para tu primer wish.`  

**Implementación:**  
- `metadata` (o `generateMetadata`) por ruta en App Router.  
- Base común en `layout` (defaults, `openGraph.defaults`, `twitter.defaults`) y override por página.

---

### 2.2 Open Graph y Twitter Cards

- **Común:**  
  - `og:type`: `website` (o `article` en entradas si más adelante hay blog).  
  - `og:locale`: `es_ES`.  
  - `og:site_name`: `Run4Wish`.  

- **Por página:**  
  - `og:title`, `og:description`, `og:url` (canonical).  
  - `og:image`: imagen única por sección (1200×630 o equivalente). Si solo hay una, al menos una imagen compartida para toda la web.  

- **Twitter:**  
  - `twitter:card`: `summary_large_image`.  
  - `twitter:title`, `twitter:description`, `twitter:image` alineados con OG.  

- **Canonical:**  
  - `alternates.canonical` por página con URL absoluta (dominio producción).

---

### 2.3 `robots.txt` y sitemap

- **`robots.txt`**  
  - `User-agent: *`  
  - `Allow: /`  
  - `Disallow: /api/` (o rutas internas que no quieras indexar).  
  - `Sitemap: https://[dominio]/sitemap.xml`  

- **`sitemap.xml`**  
  - Generar con `next-sitemap` o ruta `app/sitemap.ts` en Next.js.  
  - Incluir: `/`, `/como-funciona`, `/carreras`, `/clubes`, `/empieza-ahora`, `/faq`, `/wishes`.  
  - `lastmod` y `changefreq` opcionales pero recomendables.

---

### 2.4 Structured data (JSON-LD)

- **`WebSite`** (en Home o layout):  
  - `name`, `url`, `description`, `inLanguage: "es"`.  
  - `potentialAction` tipo `SearchAction` si hay buscador.  

- **`Organization`** (global):  
  - `name`, `url`, `logo` (URL de imagen).  

- **`FAQPage`** (solo en `/faq`):  
  - Una `Question` por cada ítem del FAQ, con `acceptedAnswer` (texto).  
  - Aumenta probabilidad de salir en featured snippets de preguntas.  

- **`BreadcrumbList`** (opcional):  
  - En páginas internas: `Home > Cómo funciona`, etc.

---

### 2.5 Contenido y palabras clave

- **Home:**  
  - Mantener mensaje actual. Añadir 1–2 párrafos breves que usen de forma natural “objetivos con constancia”, “cumplir metas”, “comunidad”, “retos diarios”.  

- **Cómo funciona / Empieza ahora / Wishes:**  
  - Pequeñas ampliaciones (1–3 frases por paso) sin rellenar. Reforzar “wish”, “mini-objetivos”, “clubes”, “retos 7/14/30 días”.  

- **Clubes:**  
  - Descripción corta por tipo de club (Finanzas, Idiomas, etc.) para ganar longitud y variedad de términos.  

- **Carreras:**  
  - Dejar claro “colaborar”, “construir Run4Wish”, “producto”, “comunidad”.  

- **FAQ:**  
  - Ya es bueno. Revisar que las respuestas sean completas pero concisas (ideales para snippets).  

**Regla:** Priorizar legibilidad y utilidad; las keywords han de encajar de forma natural.

---

### 2.6 Estructura y semántica

- **Encabezados:**  
  - Una sola `H1` por página, claro y con palabra clave principal.  
  - H2 para bloques, H3 para subbloques. En FAQ, evitar que cada pregunta compita como H2; usar un H2 tipo “Preguntas frecuentes” y las preguntas en H3 o en acordeón con encabezados correctos.  

- **Semántica:**  
  - `<article>` en bloques de contenido independiente (ej. cada paso en “Cómo funciona”).  
  - `<nav>`, `aria-label="Navegación principal"`.  
  - Footer con `role="contentinfo"` o `<footer>`.  

- **Enlaces:**  
  - Logo siempre a `/`.  
  - En “Empieza ahora”, “Crear cuenta” debe ir a signup real (quitar `#` cuando exista).  
  - Links internos con texto descriptivo (evitar “clic aquí”).

---

### 2.7 Footer y navegación

- **Footer:**  
  - Logo o nombre + tagline breve.  
  - Enlaces: Cómo funciona, Clubes, FAQ, Empieza ahora, Wishes, Carreras.  
  - Legal: Aviso legal, Política de privacidad, Cookies (cuando existan).  
  - Redes si aplican.  
  - CTA secundario: “Empieza ahora” o “Crear cuenta”.  

- **Header:**  
  - Incluir “Inicio” en el nav si se considera necesario para usabilidad (si no, asegurar que el logo lleve claramente a home).  
  - En móvil: menú hamburguesa o drawer con los mismos enlaces.

---

### 2.8 Diseño y UX “pro”

- **Tipografía:**  
  - Una fuente para headings (ej. Clash Display, Satoshi, o similar) y otra para cuerpo (ej. IBM Plex Sans, Geist). Evitar solo system-ui si se busca identidad fuerte.  

- **Jerarquía visual:**  
  - Tamaños y pesos claros (H1 > H2 > H3), espaciado consistente entre secciones.  

- **CTAs:**  
  - Estilo actual (naranja) está bien. Asegurar buen contraste (WCAG AA). Un solo CTA principal por sección; el resto secundarios.  

- **Responsive:**  
  - Breakpoints definidos (móvil, tablet, desktop). Nav colapsable en móvil.  

- **Imágenes:**  
  - Hero, OG, ilustraciones por sección. `alt` descriptivos, lazy loading, formatos modernos.  

- **Micro-interacciones:**  
  - Hover en botones y enlaces, estados de focus visibles. Opcional: animaciones suaves al scroll.

---

### 2.9 Rendimiento y Core Web Vitals

- **Imágenes:** Next.js `Image`, `sizes`, formatos WebP/AVIF.  
- **Fuentes:** `next/font` para evitar layout shift.  
- **CSS:** Evitar CSS bloqueante innecesario; crítico above-the-fold mínimo.  
- **JS:** Lazy load de componentes below-the-fold si aplica.  
- **Medir:** Lighthouse + PageSpeed Insights en `/`, `/como-funciona`, `/empieza-ahora` antes y después de cambios.

---

### 2.10 Analytics y seguimiento

- **Google Search Console:**  
  - Añadir propiedad, verificar dominio, enviar sitemap.  

- **Google Analytics 4:**  
  - Instalar como en Next.js (evitando bloqueo de script en algunos navegadores). Eventos: clicks en “Crear cuenta”, “Empieza ahora”, “Cómo funciona”.  

- **Opcional:**  
  - Tag Manager si se prevé más tracking o anuncios.  
  - Eventos de conversión para “Crear cuenta” y “Empieza ahora”.

---

## 3. Priorización sugerida

| Fase | Qué hacer | Impacto |
|------|-----------|--------|
| **1. SEO técnico** | Metadatos por página, OG/Twitter, canonical, `robots.txt`, sitemap | Alto |
| **2. Datos estructurados** | `WebSite`, `Organization`, `FAQPage` | Alto (rich results, snippets) |
| **3. Contenido** | Ampliaciones breves + keywords naturales en Home, Cómo funciona, Clubes, Wishes | Alto |
| **4. Estructura** | Footer, mejora H1–H3 en FAQ, semántica y `aria` básicos | Medio |
| **5. Diseño “pro”** | Tipografía, responsive nav, imágenes hero/OG, refinar CTAs | Medio (UX + marca) |
| **6. Performance** | Imágenes optimizadas, fuentes, CWV | Medio |
| **7. Analytics** | GSC, GA4, eventos clave | Medio (medir y optimizar) |

---

## 4. Checklist pre-lanzamiento

- [ ] `title` y `description` únicos por ruta  
- [ ] Open Graph y Twitter Cards en todas las páginas indexables  
- [ ] Canonical por página con dominio real  
- [ ] `robots.txt` y `sitemap.xml` generados y accesibles  
- [ ] JSON-LD: `WebSite`, `Organization`, `FAQPage`  
- [ ] Footer con enlaces principales y legal (aunque sea “próximamente”)  
- [ ] Nav responsive (móvil)  
- [ ] CTAs “Crear cuenta” / “Empieza ahora” apuntando a flujo real o landing de signup  
- [ ] Al menos una imagen OG por sección (o una global)  
- [ ] Dominio verificado en GSC, sitemap enviado  
- [ ] GA4 (u otro) instalado y eventos de conversión configurados  
- [ ] Revisión rápida de accesibilidad (contraste, focus, navegación teclado)

---

Si quieres, el siguiente paso puede ser implementar la **Fase 1** (metadatos, OG, canonical, `robots`, sitemap) en el repo y luego ir fase por fase.
