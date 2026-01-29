import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cómo funciona Run4Wish — 6 pasos para cumplir tu wish | R4W",
  description:
    "Wish → mini-objetivos → Club → Retos → Revisar → Mi Diario. Estructura, comunidad y constancia para lograr tus metas.",
  alternates: { canonical: "/como-funciona" },
  openGraph: {
    title: "Cómo funciona Run4Wish — 6 pasos para cumplir tu wish | R4W",
    description:
      "Wish → mini-objetivos → Club → Retos → Revisar → Mi Diario. Estructura, comunidad y constancia para lograr tus metas.",
    images: ["/og/run4wish.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo funciona Run4Wish — 6 pasos para cumplir tu wish | R4W",
    description:
      "Wish → mini-objetivos → Club → Retos → Revisar → Mi Diario. Estructura, comunidad y constancia para lograr tus metas.",
    images: ["/og/run4wish.jpg"],
  },
};

export default function ComoFunciona() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Cómo funciona", item: `${SITE_URL}/como-funciona` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="como-funciona-hero" aria-labelledby="como-funciona-heading">
        <Image
          src="/img/como-funciona.png"
          alt="Cómo funciona Run4Wish — De tu deseo a tu logro"
          width={1200}
          height={630}
          priority={true}
          className="como-funciona-hero-img"
        />
        <p className="como-funciona-hero-label">Tu camino</p>
        <h1 id="como-funciona-heading">
          Cómo funciona Run<span className="brand-4">4</span>Wish
        </h1>
        <p className="como-funciona-hero-tagline">
          De &quot;quiero hacerlo&quot; a &quot;lo estoy logrando&quot;
        </p>
        <p className="como-funciona-hero-text">
          R4W convierte un deseo en un sistema fácil de seguir. No es magia: es
          estructura + comunidad + constancia.
        </p>
        <hr className="como-funciona-hero-hr" />
      </section>

      <section className="como-funciona-steps-wrap" aria-label="Los 6 pasos">
        <div className="como-funciona-steps">
          <article className="como-funciona-step">
            <h2><span className="como-funciona-step-num">01</span> Regístrate</h2>
            <p>No olvides validar tu mail: si no, Wisho no te dejará entrar. Así protegemos tus datos.</p>
          </article>

          <article className="como-funciona-step">
            <h2><span className="como-funciona-step-num">02</span> Entra, piensa tu deseo y lánzalo</h2>
            <p>Por ejemplo: viajar, comprar…</p>
          </article>

          <article className="como-funciona-step">
            <h2><span className="como-funciona-step-num">03</span> Responde a la pregunta del día</h2>
            <p>Para avanzar. Atento a los retos que van a ir subiendo.</p>
          </article>

          <article className="como-funciona-step">
            <h2><span className="como-funciona-step-num">04</span> Entrena</h2>
            <p>Entrena cada día.</p>
          </article>

          <article className="como-funciona-step">
            <h2><span className="como-funciona-step-num">05</span> Crea un club con tu tribu o únete al que más te guste</h2>
            <p>Chatea, pide ayuda… Aquí no estás solo.</p>
          </article>

          <article className="como-funciona-step">
            <h2><span className="como-funciona-step-num">06</span> Entra en la web cada día</h2>
            <p>Estará esperándote un consejo, una propuesta, un reto…</p>
            <p className="como-funciona-step-cta">
              <Link href="/mi-diario" className="como-funciona-step-link">
                Ir a Mi Diario
              </Link>
            </p>
          </article>
        </div>
      </section>

      <section className="como-funciona-cta-wrap">
        <h2>El primer paso empieza aquí</h2>
        <p>No hace falta hacerlo perfecto. Hace falta empezar.</p>
        <a
          href="https://run4wish.vercel.app/register"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label="Empezar mi camino — Ir al registro"
        >
          Empezar mi camino
        </a>
      </section>
    </>
  );
}
