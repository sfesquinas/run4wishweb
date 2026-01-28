import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Run4Wish — Convierte la constancia en deseos cumplidos | R4W",
  description:
    "Reto diario de 1 pregunta. Gana quien no falla ningún día. Crea tu wish, únete a clubes, sigue retos. Empieza gratis.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Run4Wish — Convierte la constancia en deseos cumplidos | R4W",
    description:
      "Reto diario de 1 pregunta. Gana quien no falla ningún día. Crea tu wish, únete a clubes, sigue retos. Empieza gratis.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Run4Wish — Convierte la constancia en deseos cumplidos | R4W",
    description:
      "Reto diario de 1 pregunta. Gana quien no falla ningún día. Crea tu wish, únete a clubes, sigue retos. Empieza gratis.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-section" style={{ paddingTop: "5rem", paddingBottom: "2.5rem" }}>
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



