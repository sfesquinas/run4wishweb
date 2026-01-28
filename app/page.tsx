import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Run4Wish — Convierte la constancia en deseos cumplidos | R4W",
  description:
    "Reto diario de 1 pregunta. Gana quien no falla ningún día. Crea tu wish, únete a clubes, sigue retos. Empieza gratis.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <h1>Run4Wish — Convierte la constancia en deseos cumplidos</h1>
        <p style={{ marginBottom: "1.5rem", maxWidth: "540px" }}>
          Run4Wish es un reto diario donde avanzas en una carrera respondiendo
          una sola pregunta al día. No gana el más listo. Gana quien no falla
          ningún día. La constancia te acerca a tu deseo.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/empieza-ahora" className="btn-primary">
            Quiero CUMPLIR mi deseo
          </Link>
          <Link href="/como-funciona" className="btn-primary">
            Cómo funciona
          </Link>
        </div>
      </section>

      {/* Cómo funciona (3 pasos) */}
      <section>
        <h2>¿Cómo funciona Run4Wish?</h2>
        <h3>Te registras gratis</h3>
        <p>Entras en la carrera junto a otros runners reales y simulados.</p>
        <h3>Respondes 1 pregunta al día</h3>
        <p>Solo 20 segundos. Si aciertas, adelantas. Si fallas, te quedas atrás.</p>
        <h3>La constancia te acerca al deseo</h3>
        <p>No es suerte. Es no romper la cadena diaria.</p>
      </section>

      <section>
        <h2>Esto no es un juego. Es un hábito disfrazado de carrera.</h2>
        <p>
          Run4Wish entrena foco, disciplina y capacidad de cumplir. Aparecer
          cada día es el hábito más poderoso.
        </p>
      </section>

      <section>
        <h2>¿Por qué engancha tanto?</h2>
        <p>Avance real. Compites. No quieres romper tu racha. Tu deseo se acerca.</p>
        <Link href="/empieza-ahora" className="btn-primary">
          Quiero empezar hoy
        </Link>
      </section>

      <section>
        <h2>Para quién es Run4Wish</h2>
        <p>
          Para cualquier persona mayor de edad con un deseo y ganas de
          demostrarse que puede conseguirlo con constancia. Solo compromiso.
        </p>
        <Link href="/carreras" className="btn-primary">
          Ver las carreras disponibles
        </Link>
      </section>

      <section>
        <h2>La mayoría abandona sus metas. Aquí no puedes.</h2>
        <p>Cada día cuenta. Cada día suma. Cada día te acerca.</p>
      </section>

      <section>
        <h2>Empieza hoy tu carrera</h2>
        <Link href="/empieza-ahora" className="btn-primary">
          Crear mi cuenta gratis
        </Link>
        <p style={{ marginTop: "1rem" }}>
          <Link href="/como-funciona">Quiero saber más</Link>
        </p>
      </section>
    </>
  );
}
