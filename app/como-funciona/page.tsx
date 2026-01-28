import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo funciona Run4Wish — 5 pasos para cumplir tu wish | R4W",
  description:
    "Wish → mini-objetivos → Club → Retos → Revisar. Estructura, comunidad y constancia para lograr tus metas.",
  alternates: { canonical: "/como-funciona" },
};

export default function ComoFunciona() {
  return (
    <>
      <section style={{ paddingTop: "3rem" }}>
        <h1>Cómo funciona R4W</h1>
        <h2>De &quot;quiero hacerlo&quot; a &quot;lo estoy logrando&quot;</h2>
        <p>
          R4W convierte un deseo en un sistema fácil de seguir. No es magia: es
          estructura + comunidad + constancia.
        </p>
        <hr />
      </section>

      <section>
        <h2>Paso 1: Crea tu Wish</h2>
        <p>Escribe tu deseo con claridad:</p>
        <ul>
          <li>¿Qué cambiaría si lo consigues?</li>
          <li>¿Por qué lo quieres?</li>
          <li>¿Qué quieres lograr?</li>
        </ul>
        <p><strong>Ejemplos:</strong> Aprender inglés, ahorrar 1.000€ en 90 días, entrenar 3 veces/semana, lanzar mi marca en 60 días.</p>
      </section>

      <section>
        <h2>Paso 2: Convierte el wish en mini-objetivos</h2>
        <p>Pasos pequeños: realistas, medibles, simples.</p>
        <p>Ejemplo: Wish &quot;Lanzar mi marca&quot; → nombre, propuesta, contenido, landing, primer producto, lanzamiento.</p>
      </section>

      <section>
        <h2>Paso 3: Únete a un Club</h2>
        <p>Comunidad con el mismo tipo de objetivo: responsabilidad, motivación, ideas, apoyo.</p>
      </section>

      <section>
        <h2>Paso 4: Participa en Retos</h2>
        <p>Sprints 7/14/30 días. Progreso real, hitos, mini-tareas diarias.</p>
      </section>

      <section>
        <h2>Paso 5: Revisa y mejora</h2>
        <p>Si te bloqueas, la comunidad ayuda. Si vas rápido, subes nivel. Si te pasaste, simplificas.</p>
      </section>

      <section>
        <h2>¿Listo/a?</h2>
        <p>Empieza con un wish pequeño. Lo importante es arrancar.</p>
        <Link href="/empieza-ahora" className="btn-primary">
          Empieza ahora
        </Link>
      </section>
    </>
  );
}
