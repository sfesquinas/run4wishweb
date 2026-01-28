import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Carreras — Construye Run4Wish con nosotros | R4W",
  description:
    "Colabora en soporte, producto, marketing, contenido o comunidad. Ganas de construir y orientación a resultados.",
  alternates: { canonical: "/carreras" },
  openGraph: {
    title: "Carreras — Construye Run4Wish con nosotros | R4W",
    description:
      "Colabora en soporte, producto, marketing, contenido o comunidad. Ganas de construir y orientación a resultados.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carreras — Construye Run4Wish con nosotros | R4W",
    description:
      "Colabora en soporte, producto, marketing, contenido o comunidad. Ganas de construir y orientación a resultados.",
    images: ["/og-image.png"],
  },
};

export default function Carreras() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Carreras", item: `${SITE_URL}/carreras` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section style={{ paddingTop: "3rem" }}>
        <h1>Carreras</h1>
        <h2>Construyamos R4W juntos</h2>
        <p>
          Buscamos personas que quieran ayudar a crear una plataforma que
          convierta deseos en resultados.
        </p>
        <hr />
      </section>

      <section>
        <h2>¿En qué puedes colaborar?</h2>
        <ul>
          <li>Soporte (ayudar a usuarios a empezar)</li>
          <li>Marketing/crecimiento (SEO, redes, partnerships)</li>
          <li>Producto (ideas, pruebas, feedback)</li>
          <li>Contenido (guías, recursos, retos)</li>
          <li>Comunidad (moderación y dinámica de clubes)</li>
        </ul>
      </section>

      <section>
        <h2>Lo que valoramos</h2>
        <ul>
          <li>Ganas reales de construir</li>
          <li>Orientación a resultados</li>
          <li>Empatía y comunicación clara</li>
          <li>Mentalidad de mejora continua</li>
        </ul>
      </section>

      <section>
        <h2>¿Te interesa?</h2>
        <p>Escríbenos con:</p>
        <ol style={{ marginLeft: "1.25rem", marginBottom: "1rem" }}>
          <li>Un ejemplo de algo que hayas construido o aprendido</li>
          <li>En qué quieres aportar</li>
          <li>Quién eres</li>
        </ol>
        <a href="mailto:contacto@run4wish.com" className="btn-primary">
          Contactar / Enviar propuesta
        </a>
      </section>
    </>
  );
}
