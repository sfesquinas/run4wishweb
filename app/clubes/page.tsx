import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clubes Run4Wish — Comunidades por objetivo | R4W",
  description:
    "Avanza acompañado: Finanzas, Idiomas, Creatividad, Emprender, Hábitos. Motivación, ideas y accountability.",
  alternates: { canonical: "/clubes" },
};

export default function Clubes() {
  return (
    <>
      <section style={{ paddingTop: "3rem" }}>
        <h1>Clubes</h1>
        <h2>No avanzas solo/a. Avanzas mejor acompañado/a.</h2>
        <p>
          Un Club es un espacio de comunidad centrado en un tipo de objetivo.
          Motivación real, ideas y compromiso compartido.
        </p>
        <hr />
      </section>

      <section>
        <h2>¿Qué pasa dentro de un Club?</h2>
        <ul>
          <li>Te inspiras con otros caminos y estrategias</li>
          <li>Celebras avances (grandes y pequeños)</li>
          <li>Pides feedback cuando te bloqueas</li>
          <li>Compartes tu objetivo semanal</li>
        </ul>
      </section>

      <section>
        <h2>Ejemplos de Clubes</h2>
        <ul>
          <li>Club Finanzas &amp; Orden</li>
          <li>Club Idiomas &amp; Aprendizaje</li>
          <li>Club Creatividad &amp; Contenido</li>
          <li>Club Emprender &amp; Vender</li>
          <li>Club Hábitos &amp; Energía</li>
        </ul>
      </section>

      <section>
        <h2>Regla simple R4W</h2>
        <p>Pequeños pasos + comunidad = progreso sostenible.</p>
        <Link href="/empieza-ahora" className="btn-primary">
          Unirme a un Club
        </Link>
      </section>
    </>
  );
}
