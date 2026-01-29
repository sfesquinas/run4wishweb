import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Empieza ahora — Pide tu primer deseo en 2 minutos | Run4Wish",
  description:
    "Elige tipo de wish, escríbelo, únete a un club y arranca un reto 7/14/30 días. Crear cuenta gratis.",
  alternates: { canonical: "/empieza-ahora" },
  openGraph: {
    title: "Empieza ahora — Tu primer wish en 2 minutos | Run4Wish",
    description:
      "Elige tipo de wish, escríbelo, únete a un club y arranca un reto 7/14/30 días. Crear cuenta gratis.",
    images: ["/og/run4wish.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empieza ahora — Tu primer wish en 2 minutos | Run4Wish",
    description:
      "Elige tipo de wish, escríbelo, únete a un club y arranca un reto 7/14/30 días. Crear cuenta gratis.",
    images: ["/og/run4wish.jpg"],
  },
};

export default function EmpiezaAhora() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Empieza ahora", item: `${SITE_URL}/empieza-ahora` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="empieza-section empieza-hero" aria-labelledby="empieza-heading">
        <p className="empieza-hero-label">Tu primer paso</p>
        <h1 id="empieza-heading">Empieza ahora</h1>
        <h2>Pide tu primer deseo en menos de 2 minutos</h2>
        <p className="empieza-hero-tagline">No necesitas perfección. Solo el primer paso.</p>
        <hr className="empieza-hero-hr" />
      </section>

      <section className="empieza-section">
        <div className="empieza-step empieza-step--img-left">
          <div className="empieza-step-img-wrap">
            <Image
              src="/img/wisho-pide-deseo.svg"
              alt="Wisho pide deseo — Elige tu tipo de deseo"
              width={200}
              height={200}
              className="empieza-step-img"
              sizes="(max-width: 768px) 140px, 200px"
            />
          </div>
          <div className="empieza-step-content">
            <h2><span className="empieza-step-num">01</span> Piensa tu tipo de deseo</h2>
            <ul>
              <li>Tecnología</li>
              <li>Moda</li>
              <li>Compras</li>
              <li>Gastronomía</li>
              <li>Viajes</li>
              <li>Experiencias</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="empieza-section">
        <div className="empieza-step empieza-step--img-right">
          <div className="empieza-step-content">
            <h2><span className="empieza-step-num">02</span> Escribe tu deseo</h2>
            <p>Quiero… Porque… Lo mediré así…</p>
          </div>
          <div className="empieza-step-img-wrap">
            <Image
              src="/img/wisho.svg"
              alt="Wisho — Escribe tu deseo"
              width={200}
              height={200}
              className="empieza-step-img"
              sizes="(max-width: 768px) 140px, 200px"
            />
          </div>
        </div>
      </section>

      <section className="empieza-section">
        <div className="empieza-step empieza-step--img-left">
          <div className="empieza-step-img-wrap">
            <Image
              src="/img/wisho-tribu.svg"
              alt="Wisho tribu — Únete a un Club"
              width={200}
              height={200}
              className="empieza-step-img"
              sizes="(max-width: 768px) 140px, 200px"
            />
          </div>
          <div className="empieza-step-content">
            <h2><span className="empieza-step-num">03</span> Únete a un Club</h2>
            <p>Elige una comunidad para avanzar en compañia, o crea el tuyo propio y anue a tu tribo.</p>
            <Link href="/clubes">Ver clubes</Link>
          </div>
        </div>
      </section>

      <section className="empieza-section">
        <div className="empieza-step empieza-step--img-right">
          <div className="empieza-step-content">
            <h2><span className="empieza-step-num">04</span> Sigue los retos que irán surgiendo</h2>
            <ul>
              <li>30 días (transformación)</li>
              <li>14 días (consistencia)</li>
              <li>7 días (iniciación)</li>
              <li>1 hora (intensa)</li>
            </ul>
          </div>
          <div className="empieza-step-img-wrap">
            <Image
              src="/img/wisho-celebra.svg"
              alt="Wisho celebra — Retos que irán surgiendo"
              width={200}
              height={200}
              className="empieza-step-img"
              sizes="(max-width: 768px) 140px, 200px"
            />
          </div>
        </div>
      </section>

      <section className="empieza-section">
        <h2>¿Empezamos?</h2>
        <a
          href="https://run4wish.vercel.app/register"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label="Crear cuenta — Ir al registro"
        >
          Crear cuenta / Empezar
        </a>
        <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
          Si hoy empiezas, hoy ya ganaste.
        </p>
      </section>
    </>
  );
}
