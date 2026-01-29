import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clubes Run4Wish — Comunidades por objetivo | R4W",
  description:
    "Avanza acompañado: Finanzas, Idiomas, Creatividad, Emprender, Hábitos. Motivación, ideas y accountability.",
  alternates: { canonical: "/clubes" },
  openGraph: {
    title: "Clubes Run4Wish — Comunidades por objetivo | R4W",
    description:
      "Avanza acompañado: Finanzas, Idiomas, Creatividad, Emprender, Hábitos. Motivación, ideas y accountability.",
    images: ["/og/run4wish.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clubes Run4Wish — Comunidades por objetivo | R4W",
    description:
      "Avanza acompañado: Finanzas, Idiomas, Creatividad, Emprender, Hábitos. Motivación, ideas y accountability.",
    images: ["/og/run4wish.jpg"],
  },
};

export default function Clubes() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Clubes", item: `${SITE_URL}/clubes` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section style={{ paddingTop: "3rem" }}>
        <h1>Clubes</h1>
        <h2>No avanzas solo/a. Avanzas mejor acompañado/a.</h2>
        <p>
          Un Club es un espacio de comunidad centrado en un tipo de objetivo.
          Motivación real, ideas y compromiso compartido.
        </p>
        <hr />
      </section>

      <section>
        <h2>¿Qué pasa dentro de un Club?</h2>
        <ul>
          <li>Te inspiras con otros caminos y estrategias</li>
          <li>Celebras avances (grandes y pequeños)</li>
          <li>Pides feedback cuando te bloqueas</li>
          <li>Compartes tu objetivo semanal</li>
        </ul>
      </section>

      <section>
        <h2>Ejemplos de Clubes</h2>
        <ul>
          <li>Club Finanzas &amp; Orden</li>
          <li>Club Idiomas &amp; Aprendizaje</li>
          <li>Club Creatividad &amp; Contenido</li>
          <li>Club Emprender &amp; Vender</li>
          <li>Club Hábitos &amp; Energía</li>
        </ul>
      </section>

      <section>
        <h2>Regla simple R4W</h2>
        <p>Pequeños pasos + comunidad = progreso sostenible.</p>
        <Link href="/empieza-ahora" className="btn-primary">
          Unirme a un Club
        </Link>
      </section>
    </>
  );
}
