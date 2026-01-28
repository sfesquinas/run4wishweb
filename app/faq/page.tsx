import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas frecuentes — Run4Wish | R4W",
  description:
    "Qué es un wish, clubes, retos, cómo empezar. Respuestas rápidas a las dudas más comunes.",
  alternates: { canonical: "/faq" },
};

const faq = [
  {
    q: "¿Qué es un “Wish” en R4W?",
    a: "Un wish es un deseo convertido en objetivo claro y accionable. No se queda en “quiero algo”, sino que se traduce a pasos.",
  },
  {
    q: "¿R4W sirve para metas personales y profesionales?",
    a: "Sí. Hábitos, salud, estudio, negocio, carrera, finanzas o proyectos creativos.",
  },
  {
    q: "¿Qué son los Clubes?",
    a: "Comunidades por interés/objetivo. Acompañarte, compartir ideas y mantener el compromiso.",
  },
  {
    q: "¿Qué son los Retos?",
    a: "Sprints de 7/14/30 días con tareas pequeñas para avanzar con foco y constancia.",
  },
  {
    q: "¿Necesito experiencia o un plan perfecto?",
    a: "No. R4W está pensado para empezar simple y mejorar sobre la marcha.",
  },
  {
    q: "¿Puedo cambiar un wish si me equivoco?",
    a: "Sí. Ajustar es parte del progreso.",
  },
  {
    q: "¿Cómo empiezo?",
    a: 'Ve a "Empieza ahora", crea tu primer wish, únete a un club y elige un reto.',
  },
];

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section style={{ paddingTop: "3rem" }}>
        <h1>FAQ – Preguntas frecuentes</h1>
      </section>

      {faq.map(({ q, a }) => (
        <section key={q}>
          <h2>{q}</h2>
          <p>{a}</p>
        </section>
      ))}

      <section>
        <Link href="/empieza-ahora" className="btn-primary">
          Empieza ahora
        </Link>
      </section>
    </>
  );
}
