import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FeatureGrid from "./components/FeatureGrid";

const title = "Run4Wish | Convierte la constancia en deseos cumplidos";
const description =
  "Un reto diario de 20 segundos para entrenar constancia, unirte a tu tribu y avanzar en carreras con premios reales.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://www.run4wish.com"),
  alternates: { canonical: "https://www.run4wish.com/" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "https://www.run4wish.com/",
    siteName: "Run4Wish",
    type: "website",
    images: [
      {
        url: "/og/run4wish.jpg",
        width: 1200,
        height: 630,
        alt: "Run4Wish — Convierte la constancia en deseos cumplidos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/run4wish.jpg"],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-section home-hero" aria-labelledby="home-heading">
        <Image
          src="/img/hero-run4wish.jpg"
          alt="Persona preparándose para correr: constancia diaria con Run4Wish"
          width={1200}
          height={630}
          priority={true}
          className="home-hero-img"
        />
        <p className="home-hero-label">Tu reto diario</p>
        <h1 id="home-heading">
          La vida es un reto diario. Run<span className="brand-4">4</span>Wish te entrena para ganarla.
        </h1>
        <p className="home-hero-tagline">
          Da igual dónde naciste. Si tienes un deseo y eres constante, lo lograrás.
        </p>
        <div className="home-hero-ctas">
          <a
            href="https://run4wish.vercel.app/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary home-hero-cta-primary"
            aria-label="Crear cuenta — Ir al registro"
          >
            Empieza ahora
          </a>
          <Link href="/como-funciona" className="btn-secondary home-hero-cta-secondary">
            Cómo funciona
          </Link>
        </div>
      </section>

      {/* La vida que vives → R4W */}
      <section className="home-section">
        <h2>La vida que vives, en Run<span className="brand-4">4</span>Wish</h2>
        <p style={{ marginBottom: "2rem" }}>
          La vida tiene retos, preparación, gente, aspiraciones y economía. R4W
          los traduce en sistema.
        </p>
        <FeatureGrid />
      </section>

      {/* Declaración */}
      <section className="home-section home-declaracion" aria-labelledby="declaracion-heading">
        <div className="home-declaracion-card">
          <p className="home-declaracion-label">Por qué existimos</p>
          <h2 id="declaracion-heading" className="home-declaracion-title">
            Nuestra declaración
          </h2>
          <p className="home-declaracion-lead">
            R<span className="brand-4">4</span>W nace para demostrar que la condición socioeconómica no define tu
            destino. Si tienes un deseo y lo persigues con constancia, lo puedes
            lograr.
          </p>
          <p className="home-declaracion-body">
            Por eso creamos <strong>carreras especiales</strong>: cualquiera puede
            enviarnos su deseo; lo valoramos y, si podemos hacerlo posible, lo
            convertimos en el premio final de una carrera.
          </p>
          <p className="home-declaracion-cta">
            <Link href="/empieza-ahora" className="home-declaracion-link">
              Empieza ahora
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}



