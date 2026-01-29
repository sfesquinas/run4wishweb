import Image from "next/image";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mi Tribu — Comunidades por objetivo | Run4Wish",
  description:
    "Avanza acompañado: Finanzas, Idiomas, Creatividad, Emprender, Hábitos. Motivación, ideas y accountability.",
  alternates: { canonical: "/clubes" },
  openGraph: {
    title: "Mi Tribu — Comunidades por objetivo | Run4Wish",
    description:
      "Avanza acompañado: Finanzas, Idiomas, Creatividad, Emprender, Hábitos. Motivación, ideas y accountability.",
    images: ["/og/run4wish.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Tribu — Comunidades por objetivo | Run4Wish",
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
      { "@type": "ListItem", position: 2, name: "Mi Tribu", item: `${SITE_URL}/clubes` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="clubes-hero" aria-labelledby="clubes-heading">
        <Image
          src="/img/hero-mi-tribu.jpg"
          alt="Mi Tribu — No avanzas solo, avanzas mejor acompañado"
          width={1200}
          height={630}
          priority={true}
          className="clubes-hero-img"
        />
        <p className="clubes-hero-label">Tu comunidad</p>
        <h1 id="clubes-heading">
          Mi Tribu
        </h1>
        <p className="clubes-hero-tagline">
          No avanzas en solitario.<br />
          Avanzas mejor en comunidad.
        </p>
        <p className="clubes-hero-text">
          Un club reúne personas con un mismo objetivo. Motivación real, ideas
          que suman y compromiso compartido.
        </p>
        <hr className="clubes-hero-hr" />
      </section>

      <section className="clubes-section" aria-labelledby="clubes-que-pasa">
        <h2 id="clubes-que-pasa">¿Qué pasa dentro de un Club?</h2>
        <div className="clubes-cards">
          <article className="clubes-card">
            <span className="clubes-card-icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
              </svg>
            </span>
            <p>Te inspiras con los caminos y estrategias de otras personas.</p>
          </article>
          <article className="clubes-card">
            <span className="clubes-card-icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                <path d="M12 14v4M10 16h4" />
              </svg>
            </span>
            <p>Celebras avances, grandes y pequeños.</p>
          </article>
          <article className="clubes-card">
            <span className="clubes-card-icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <p>Pides feedback cuando te bloqueas.</p>
          </article>
          <article className="clubes-card">
            <span className="clubes-card-icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <p>Compartes tu objetivo semanal.</p>
          </article>
        </div>
        <p className="clubes-cards-summary">
          En R4W, un Club es acción diaria: pides ayuda, sumas energía para
          seguir, preguntas, envías apoyo y ajustas tu estrategia con la
          comunidad.
        </p>
      </section>

      <section className="clubes-section clubes-cta-wrap">
        <h2>La regla que lo cambia todo</h2>
        <p>Pasos pequeños, comunidad activa y progreso que se mantiene.</p>
        <a
          href="https://run4wish.vercel.app/register"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label="Unirme a un Club — Ir al registro"
        >
          Unirme a un Club
        </a>
      </section>
    </>
  );
}
