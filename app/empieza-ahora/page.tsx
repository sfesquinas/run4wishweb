import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empieza ahora — Tu primer wish en 2 minutos | Run4Wish",
  description:
    "Elige tipo de wish, escríbelo, únete a un club y arranca un reto 7/14/30 días. Crear cuenta gratis.",
  alternates: { canonical: "/empieza-ahora" },
};

export default function EmpiezaAhora() {
  return (
    <>
      <section style={{ paddingTop: "3rem" }}>
        <h1>Empieza ahora</h1>
        <h2>Tu primer wish en menos de 2 minutos</h2>
        <p>No necesitas perfección. Solo el primer paso.</p>
        <hr />
      </section>

      <section>
        <h2>1) Elige tu tipo de Wish</h2>
        <ul>
          <li>Relaciones y bienestar</li>
          <li>Finanzas</li>
          <li>Aprendizaje e idiomas</li>
          <li>Creatividad y proyectos</li>
          <li>Negocio y carrera</li>
          <li>Salud y hábitos</li>
        </ul>
      </section>

      <section>
        <h2>2) Escribe tu Wish</h2>
        <p>Quiero… Porque… Lo mediré así…</p>
      </section>

      <section>
        <h2>3) Únete a un Club</h2>
        <p>Elige una comunidad para avanzar acompañado/a.</p>
        <Link href="/clubes">Ver clubes</Link>
      </section>

      <section>
        <h2>4) Arranca un reto</h2>
        <p>Sprint para ganar ritmo:</p>
        <ul>
          <li>30 días (transformación)</li>
          <li>14 días (consistencia)</li>
          <li>7 días (iniciación)</li>
        </ul>
      </section>

      <section>
        <h2>¿Listo/a para empezar?</h2>
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
