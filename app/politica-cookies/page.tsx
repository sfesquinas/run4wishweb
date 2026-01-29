import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies — Run4Wish | Wishing4World S.L.",
  description:
    "Política de cookies de Run4Wish. Cookies técnicas y necesarias. Titular: Wishing4World S.L. Contacto: hola@run4wish.com.",
  alternates: { canonical: "/politica-cookies" },
  robots: { index: true, follow: true },
};

export default function PoliticaCookies() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Política de cookies", item: `${SITE_URL}/politica-cookies` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="legal-wrap">
        <h1 id="cookies-heading">Política de cookies — Run4Wish</h1>
        <p className="legal-meta">
          Titular: Wishing4World S.L. · País: España · Contacto:{" "}
          <a href="mailto:hola@run4wish.com">hola@run4wish.com</a> · Última actualización: 13/01/2026
        </p>

        <section className="legal-section" aria-labelledby="c1">
          <h2 id="c1">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos que se almacenan en el dispositivo del usuario al
            acceder a una aplicación o sitio web, y que permiten el correcto funcionamiento del
            servicio, así como recordar información técnica necesaria.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="c2">
          <h2 id="c2">2. ¿Qué tipos de cookies utiliza Run4Wish?</h2>
          <p>Run4Wish no utiliza cookies de publicidad ni de seguimiento comercial.</p>
          <p>Únicamente utiliza:</p>
          <p>
            <strong>a) Cookies técnicas o necesarias</strong>
          </p>
          <p>Permiten:</p>
          <ul>
            <li>El inicio de sesión del usuario</li>
            <li>La seguridad del acceso</li>
            <li>El correcto funcionamiento de la app</li>
            <li>La persistencia de la sesión</li>
          </ul>
          <p>Estas cookies son imprescindibles para el funcionamiento de la aplicación.</p>
          <p>
            <strong>b) Almacenamiento local / identificadores técnicos</strong>
          </p>
          <p>
            Run4Wish puede utilizar almacenamiento local del dispositivo o identificadores técnicos
            con la misma finalidad que las cookies técnicas: garantizar la experiencia del usuario y
            el funcionamiento del servicio.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="c3">
          <h2 id="c3">3. Cookies de terceros</h2>
          <p>
            Run4Wish puede apoyarse en proveedores tecnológicos (infraestructura, hosting, bases de
            datos, envío de emails), que pueden utilizar identificadores técnicos necesarios para
            prestar el servicio, siempre bajo cumplimiento del RGPD.
          </p>
          <p>No se utilizan cookies de terceros con fines publicitarios.</p>
        </section>

        <section className="legal-section" aria-labelledby="c4">
          <h2 id="c4">4. Gestión de cookies</h2>
          <p>Al tratarse exclusivamente de cookies técnicas y necesarias:</p>
          <ul>
            <li>No es necesario consentimiento explícito previo</li>
            <li>El uso de la app implica su aceptación</li>
            <li>
              El usuario puede configurar su navegador o dispositivo para bloquearlas, aunque esto
              puede afectar al correcto funcionamiento de la app.
            </li>
          </ul>
        </section>

        <section className="legal-section" aria-labelledby="c5">
          <h2 id="c5">5. Actualizaciones de la política de cookies</h2>
          <p>
            Esta política puede actualizarse en función de cambios técnicos o legales. La versión
            vigente estará siempre disponible dentro de la app.
          </p>
        </section>
      </div>
    </>
  );
}
