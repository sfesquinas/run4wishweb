import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

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
        <dl style={{ display: "grid", gap: "1.25rem" }}>
          <div>
            <dt style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.25rem" }}>
              Pregunta diaria
            </dt>
            <dd style={{ margin: 0, color: "var(--text-muted)" }}>
              La vida es un reto cada día. En R4W: una pregunta, 20 segundos.
              Sin excusas.
            </dd>
          </div>
          <div>
            <dt style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.25rem" }}>
              Training
            </dt>
            <dd style={{ margin: 0, color: "var(--text-muted)" }}>
              Estudiamos, trabajamos, entrenamos. En R4W: contenido y práctica
              para mejorar.
            </dd>
          </div>
          <div>
            <dt style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.25rem" }}>
              Tribu
            </dt>
            <dd style={{ margin: 0, color: "var(--text-muted)" }}>
              Creamos relaciones con nuestra gente. En R4W: clubes donde avanzas
              acompañado.
            </dd>
          </div>
          <div>
            <dt style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.25rem" }}>
              Carreras
            </dt>
            <dd style={{ margin: 0, color: "var(--text-muted)" }}>
              Aspiraciones, deseos, objetivos. En R4W: retos con premios reales.
            </dd>
          </div>
          <div>
            <dt style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.25rem" }}>
              Wishes
            </dt>
            <dd style={{ margin: 0, color: "var(--text-muted)" }}>
              Hace falta una economía. En R4W: deseos y recompensas que impulsan.
            </dd>
          </div>
        </dl>
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <Image
            src="/img/app-1.jpg"
            alt="Pantalla de pregunta diaria en Run4Wish"
            width={400}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
          <Image
            src="/img/app-2.jpg"
            alt="Pantalla de ranking y carrera en Run4Wish"
            width={400}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
          <Image
            src="/img/app-3.jpg"
            alt="Pantalla de wish y recompensas en Run4Wish"
            width={400}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
        </div>
        <ol style={{ marginLeft: "1.25rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Regístrate gratis.</li>
          <li style={{ marginBottom: "0.5rem" }}>Responde 1 pregunta al día.</li>
          <li style={{ marginBottom: "0.5rem" }}>
            Entrena, únete a tu tribu, participa en carreras.
          </li>
          <li>Cumple tu wish.</li>
        </ol>
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



