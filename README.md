# Run4Wish Web — Reproducción local

Reproducción local de [run4wish.com](https://run4wish.com) para iterar y mejorar cada apartado.

## Cómo correr en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura del sitio

**Orden de navegación:** Inicio → Cómo funciona → Carreras → Clubes → Wishes → **Mi diario** → Empieza ahora → FAQ.

| Ruta | Página | Contenido |
|------|--------|-----------|
| `/` | Inicio | Hero, concepto R4W (pregunta diaria, training, tribu, carreras, wishes), CTAs |
| `/como-funciona` | Cómo funciona | 5 pasos: Wish → mini-objetivos → Club → Retos → Revisar |
| `/carreras` | Carreras | Retos con premios; colaboración / carreras especiales |
| `/clubes` | Clubes | Tribu; qué son, qué pasa dentro, ejemplos |
| `/wishes` | Wishes | Qué son, plantilla rápida, consejo R4W |
| `/mi-diario` | **Mi diario** | Blog de **microtextos motivadores diarios** (público, sin login). Ver `NOTAS-PENDIENTES.md` para evolución futura con usuario. |
| `/empieza-ahora` | Empieza ahora | 4 pasos: tipo wish → escribe → club → reto. CTA crear cuenta |
| `/faq` | FAQ | Preguntas frecuentes |

## Apartados para mejorar (uno a uno)

1. **Home**
   - Hero (titular, subtítulo, CTAs)
   - Sección "Cómo funciona" (3 pasos)
   - "Esto no es un juego..."
   - "¿Por qué engancha?"
   - "Para quién es"
   - "La mayoría abandona..."
   - "Empieza hoy" + footer de CTAs

2. **Cómo funciona**
   - Intro + 5 pasos (con ejemplos y estilo)
   - CTA final

3. **Carreras**
   - Áreas de colaboración
   - Lo que valoramos
   - Formulario / contacto

4. **Clubes**
   - Explicación + qué pasa dentro
   - Ejemplos de clubes (cards o lista)
   - CTA "Unirme a un Club"

5. **Empieza ahora**
   - Flujo 4 pasos (¿wizard o secciones?)
   - Formulario "Escribe tu Wish"
   - Integración con Clubes y Retos
   - CTA crear cuenta (login/signup)

6. **FAQ**
   - Acordeón o lista de preguntas
   - Enlaces a Empieza ahora / Clubes

7. **WISHES**
   - Plantilla descargable / editable
   - Consejo R4W
   - CTA crear wish

8. **Mi diario**
   - Blog de microtextos motivadores diarios (público)
   - Más adelante, con soporte usuario: ver `NOTAS-PENDIENTES.md`

9. **Global**
   - Header/nav (responsive, móvil, desplegable)
   - Footer
   - Tema oscuro + CTAs naranja (refinar)
   - Tipografía y espaciado

## Notas y pendientes

Ver **`NOTAS-PENDIENTES.md`** para: definición de "Mi diario" (blog vs. diario personal), evolución cuando haya soporte para ligar datos del usuario a la web, y otros recordatorios.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **CSS** (variables en `app/globals.css`)

## Origen

Contenido y estructura basados en [run4wish.com](https://run4wish.com) (WordPress). Diseño: fondo oscuro, texto claro, botones naranja.
