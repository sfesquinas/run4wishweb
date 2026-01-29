import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal — Run4Wish | Wishing4World S.L.",
  description:
    "Aviso legal de Run4Wish. Titular: Wishing4World S.L. Contacto: hola@run4wish.com. Condiciones de uso, propiedad intelectual y responsabilidad.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegal() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Aviso legal", item: `${SITE_URL}/aviso-legal` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="legal-wrap">
        <h1 id="aviso-legal-heading">Aviso legal — Run4Wish</h1>
        <p className="legal-meta">
          Titular: Wishing4World S.L. · País: España · Contacto:{" "}
          <a href="mailto:hola@run4wish.com">hola@run4wish.com</a> · Última actualización: 13/01/2026
        </p>

        <section className="legal-section" aria-labelledby="sec1">
          <h2 id="sec1">1. Identificación del titular</h2>
          <p>
            En cumplimiento de la Ley 34/2002 (LSSI-CE), se informa que esta aplicación y sus
            servicios asociados (en adelante, &quot;Run4Wish&quot;) son titularidad de:
          </p>
          <ul>
            <li>Empresa: Wishing4World S.L.</li>
            <li>Domicilio social: (pendiente de incorporación y actualización)</li>
            <li>CIF/NIF: (pendiente de incorporación y actualización)</li>
            <li>Correo electrónico: hola@run4wish.com</li>
          </ul>
          <p>
            Wishing4World S.L. incorporará y actualizará en este apartado los datos fiscales
            completos en cuanto estén formalmente disponibles.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="sec2">
          <h2 id="sec2">2. Objeto y ámbito de aplicación</h2>
          <p>
            El presente Aviso Legal regula el acceso, navegación y uso de la app Run4Wish y/o sus
            sitios web asociados, así como las responsabilidades derivadas del uso de sus contenidos
            (textos, gráficos, diseños, código, etc.).
          </p>
        </section>

        <section className="legal-section" aria-labelledby="sec3">
          <h2 id="sec3">3. Condiciones de uso</h2>
          <p>
            El usuario se compromete a hacer un uso adecuado de Run4Wish, conforme a la ley, la
            buena fe, el orden público y las presentes condiciones.
          </p>
          <p>
            <strong>Queda prohibido:</strong>
          </p>
          <ul>
            <li>Usar la app con fines ilícitos o perjudiciales.</li>
            <li>
              Introducir o difundir malware, bots, scripts o cualquier sistema de automatización no
              autorizado.
            </li>
            <li>Intentar acceder a sistemas, datos o cuentas sin autorización.</li>
            <li>Manipular mecánicas del juego, rankings o sistemas de la app.</li>
          </ul>
          <p>
            Wishing4World S.L. podrá suspender o restringir el acceso cuando detecte un uso indebido
            o infracción de estas condiciones.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="sec4">
          <h2 id="sec4">4. Propiedad intelectual e industrial</h2>
          <p>
            Todos los derechos sobre Run4Wish (marca, nombre, diseño, personajes, contenidos,
            software, código, logotipos, textos e imágenes) pertenecen a Wishing4World S.L. o a
            terceros licenciantes.
          </p>
          <p>
            Queda prohibida su reproducción, distribución, transformación o comunicación pública sin
            autorización expresa.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="sec5">
          <h2 id="sec5">5. Responsabilidad</h2>
          <p>
            Wishing4World S.L. no garantiza la disponibilidad ininterrumpida del servicio, pudiendo
            producirse interrupciones por mantenimiento, actualizaciones o causas ajenas.
          </p>
          <p>En la medida permitida por la ley, Wishing4World S.L. no se responsabiliza de:</p>
          <ul>
            <li>Daños derivados del uso indebido por parte del usuario.</li>
            <li>Fallos de red, dispositivo o servicios de terceros.</li>
            <li>Contenidos o servicios enlazados de terceros (si existieran).</li>
          </ul>
        </section>

        <section className="legal-section" aria-labelledby="sec6">
          <h2 id="sec6">6. Enlaces a terceros</h2>
          <p>
            Si Run4Wish incluye enlaces a páginas de terceros, Wishing4World S.L. no se
            responsabiliza del contenido, políticas o prácticas de dichos sitios externos.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="sec7">
          <h2 id="sec7">7. Protección de datos y privacidad</h2>
          <p>
            El tratamiento de datos personales se rige por la Política de Privacidad de Run4Wish,
            disponible dentro de la app.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="sec8">
          <h2 id="sec8">8. Comunicaciones</h2>
          <p>
            Para comunicaciones relacionadas con el servicio, soporte o cuestiones legales, el
            usuario puede contactar en:{" "}
            <a href="mailto:hola@run4wish.com">hola@run4wish.com</a>.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="sec9">
          <h2 id="sec9">9. Ley aplicable y jurisdicción</h2>
          <p>
            Este Aviso Legal se rige por la legislación española. En caso de conflicto, las partes
            se someterán a los juzgados y tribunales que correspondan conforme a la normativa
            aplicable, especialmente la de consumidores y usuarios cuando proceda.
          </p>
        </section>
      </div>
    </>
  );
}
