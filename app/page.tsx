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
      <section className="home-section" style={{ paddingTop: "5rem", paddingBottom: "2.5rem" }}>
        <Image
          src="/img/hero-run4wish.jpg"
          alt="Persona preparándose para correr: constancia diaria con Run4Wish"
          width={1200}
          height={630}
          priority={true}
          style={{ width: "100%", height: "auto", marginBottom: "2rem", borderRadius: 8 }}
        />
        <h1>La vida es un reto diario. Run4Wish te entrena para ganarla.</h1>
        <p style={{ marginBottom: "1.5rem", maxWidth: "540px" }}>
          Da igual dónde naciste. Si tienes un deseo y eres constante, lo
          lograrás.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/empieza-ahora" className="btn-primary">
            Empieza ahora
          </Link>
          <Link href="/como-funciona" className="btn-primary">
            Cómo funciona
          </Link>
        </div>
      </section>

      {/* Así es R4W */}
      <section className="home-section">
        <h2>Así es Run4Wish</h2>
        <p style={{ marginBottom: "2rem" }}>
          La vida tiene retos, preparación, gente, aspiraciones y economía. R4W
          los traduce en sistema.
        </p>
        <FeatureGrid />
      </section>

      {/* Declaración */}
      <section className="home-section">
        <h2>Nuestra declaración</h2>
        <p style={{ marginBottom: "1rem" }}>
          R4W nace para demostrar que la condición socioeconómica no define tu
          destino. Si tienes un deseo y lo persigues con constancia, lo puedes
          lograr.
        </p>
        <p style={{ marginBottom: 0 }}>
          Por eso creamos <strong>carreras especiales</strong>: cualquiera puede
          enviarnos su deseo; lo valoramos y, si podemos hacerlo posible, lo
          convertimos en el premio final de una carrera.
        </p>
        <p style={{ marginTop: "1rem" }}>
          <Link href="/carreras">Ver carreras y cómo colaborar</Link>
        </p>
      </section>

      {/* Cómo empezar */}
      <section className="home-section">
        <h2>Cómo empezar</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Image
              src="/img/app-1.jpg"
              alt="Pantalla login en Run4Wish"
              width={300}
              height={600}
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 300px"
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
            <p style={{ margin: 0, textAlign: "center", color: "var(--text)", fontWeight: 500 }}>
              Regístrate gratis
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Image
              src="/img/app-2.jpg"
              alt="Pantalla de pregunta del dia en Run4Wish"
              width={300}
              height={600}
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 300px"
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
            <p style={{ margin: 0, textAlign: "center", color: "var(--text)", fontWeight: 500 }}>
              Responde 1 pregunta al día
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Image
              src="/img/app-3.jpg"
              alt="Pantalla de trainig y premio en Run4Wish"
              width={300}
              height={600}
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 300px"
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
            <p style={{ margin: 0, textAlign: "center", color: "var(--text)", fontWeight: 500 }}>
              Entrena y participa en las carreras
            </p>
          </div>
        </div>
        <Link href="/empieza-ahora" className="btn-primary">
          Empieza tu carrera
        </Link>
        <p style={{ marginTop: "1rem" }}>
          <Link href="/como-funciona">Quiero saber más</Link>
        </p>
      </section>
    </>
  );
}



