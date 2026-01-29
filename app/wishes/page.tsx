import Image from "next/image";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wishes — La moneda que mueve tu avance | Run4Wish",
  description:
    "Wishes son la moneda de R4W: se ganan con constancia y sirven para reservar carreras, responder preguntas fallidas y acceder a desafíos.",
  alternates: { canonical: "/wishes" },
  openGraph: {
    title: "Wishes — La moneda que mueve tu avance | Run4Wish",
    description:
      "Wishes son la moneda de R4W: se ganan con constancia y sirven para reservar carreras, responder preguntas fallidas y acceder a desafíos.",
    images: ["/og/run4wish.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishes — La moneda que mueve tu avance | Run4Wish",
    description:
      "Wishes son la moneda de R4W: se ganan con constancia y sirven para reservar carreras, responder preguntas fallidas y acceder a desafíos.",
    images: ["/og/run4wish.jpg"],
  },
};

export default function Wishes() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Wishes", item: `${SITE_URL}/wishes` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="wishes-hero" aria-labelledby="wishes-heading">
        <Image
          src="/img/hero-wishes.jpg"
          alt="Wishes — La moneda que mueve tu avance"
          width={1200}
          height={630}
          priority={true}
          className="wishes-hero-img"
        />
        <p className="wishes-hero-label">La moneda</p>
        <h1 id="wishes-heading">Wishes</h1>
        <p className="wishes-hero-tagline">La moneda que mueve tu avance.</p>
        <p className="wishes-hero-text">
          Los WISHES son la energía de R4W. Se ganan con constancia y se usan
          para avanzar dentro del sistema.
        </p>
        <hr className="wishes-hero-hr" />
      </section>

      <section className="wishes-section" aria-labelledby="wishes-para-que">
        <h2 id="wishes-para-que">¿Para qué sirven los WISHES?</h2>
        <div className="wishes-cards">
          <article className="wishes-card">
            <span className="wishes-card-icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
              </svg>
            </span>
            <p>Reservar carreras con premio</p>
          </article>
          <article className="wishes-card">
            <span className="wishes-card-icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <p>Responder preguntas fallidas y seguir en carrera</p>
          </article>
          <article className="wishes-card">
            <span className="wishes-card-icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </span>
            <p>Acceder a desafíos y experiencias especiales</p>
          </article>
          <article className="wishes-card">
            <span className="wishes-card-icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <p>Mantener tu ritmo cuando necesitas un impulso</p>
          </article>
        </div>
      </section>

      <section className="wishes-section" aria-labelledby="wishes-como">
        <h2 id="wishes-como">¿Cómo se consiguen WISHES?</h2>
        <div className="wishes-cards">
          <article className="wishes-card">
            <span className="wishes-card-icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </span>
            <p>Entrenando de forma continua</p>
          </article>
          <article className="wishes-card">
            <span className="wishes-card-icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <p>Completando la misión del día</p>
          </article>
          <article className="wishes-card">
            <span className="wishes-card-icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </span>
            <p>Manteniendo tu constancia</p>
          </article>
          <article className="wishes-card">
            <span className="wishes-card-icon" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <p>Participando y apoyando dentro de la comunidad</p>
          </article>
        </div>
        <p className="wishes-cards-summary">Cada acción suma. Cada día cuenta.</p>
      </section>

      <section className="wishes-section wishes-rule-wrap">
        <p className="wishes-rule-label">Regla R4W</p>
        <p className="wishes-rule-text">
          Los WISHES no se regalan. Se ganan apareciendo, incluso cuando cuesta.
        </p>
      </section>

      <section className="wishes-section wishes-cta-wrap">
        <h2>Empieza a ganar tus primeros WISHES</h2>
        <p>Aparece, entrena, completa la misión. Los WISHES llegan con la constancia.</p>
        <a
          href="https://run4wish.vercel.app/register"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label="Empieza ahora — Ir al registro"
        >
          Empieza ahora
        </a>
      </section>
    </>
  );
}
