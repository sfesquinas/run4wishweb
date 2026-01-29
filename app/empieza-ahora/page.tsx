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
      <section className="empieza-section empieza-hero">
        <h1>Empieza ahora</h1>
        <h2>Pide tu primer deseo en menos de 2 minutos</h2>
        <p>No necesitas perfección. Solo el primer paso.</p>
        <hr />
      </section>

      <section className="empieza-section">
        <Image
          src="/img/wisho-pide-deseo.jpg"
          alt="Wisho pide deseo — Elige tu tipo de deseo"
          width={200}
          height={200}
          className="empieza-step-img"
          sizes="(max-width: 768px) 120px, 200px"
        />
        <h2>1) Piensa tu tipo de deseo</h2>
        <ul>
          <li>Tecnología</li>
          <li>Moda</li>
          <li>Compras</li>
          <li>Gastronomía</li>
          <li>Viajes</li>
          <li>Experiencias</li>
        </ul>
      </section>

      <section className="empieza-section">
        <Image
          src="/img/wisho.jpg"
          alt="Wisho — Escribe tu deseo"
          width={200}
          height={200}
          className="empieza-step-img"
          sizes="(max-width: 768px) 120px, 200px"
        />
        <h2>2) Escribe tu deseo</h2>
        <p>Quiero… Porque… Lo mediré así…</p>
      </section>

      <section className="empieza-section">
        <Image
          src="/img/wisho-tribu.jpg"
          alt="Wisho tribu — Únete a un Club"
          width={200}
          height={200}
          className="empieza-step-img"
          sizes="(max-width: 768px) 120px, 200px"
        />
        <h2>3) Únete a un Club</h2>
        <p>Elige una comunidad para avanzar en compañia, o crea el tuyo propio y anue a tu tribo.</p>
        <Link href="/clubes">Ver clubes</Link>
      </section>

      <section className="empieza-section">
        <Image
          src="/img/wisho-celebra.jpg"
          alt="Wisho celebra — Retos que irán surgiendo"
          width={200}
          height={200}
          className="empieza-step-img"
          sizes="(max-width: 768px) 120px, 200px"
        />
        <h2>4) Presta atención a los nuevos retos que irán surgiendo</h2>
        <ul>
          <li>30 días (transformación)</li>
          <li>14 días (consistencia)</li>
          <li>7 días (iniciación)</li>
          <li>1 hora (intensa)</li>
        </ul>
      </section>

      <section className="empieza-section">
        <h2>¿Empezamos?</h2>
        <a href="#" className="btn-primary" aria-label="Crear cuenta (próximamente)">
          Crear cuenta / Empezar
        </a>
        <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
          Si hoy empiezas, hoy ya ganaste.
        </p>
      </section>
    </>
  );
}
