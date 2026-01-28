import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wishes — Tu deseo con estructura | Run4Wish",
  description:
    "Crea wishes, prioriza, divide en mini-objetivos y mide progreso. Plantilla para tu primer wish.",
  alternates: { canonical: "/wishes" },
  openGraph: {
    title: "Wishes — Tu deseo con estructura | Run4Wish",
    description:
      "Crea wishes, prioriza, divide en mini-objetivos y mide progreso. Plantilla para tu primer wish.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wishes — Tu deseo con estructura | Run4Wish",
    description:
      "Crea wishes, prioriza, divide en mini-objetivos y mide progreso. Plantilla para tu primer wish.",
    images: ["/og-image.png"],
  },
};

export default function Wishes() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Wishes", item: `${SITE_URL}/wishes` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section style={{ paddingTop: "3rem" }}>
        <h1>WISHES</h1>
        <h2>Tu deseo, con estructura</h2>
        <p>
          Aquí empieza todo. Un wish es una intención clara que se transforma en
          pasos.
        </p>
        <hr />
      </section>

      <section>
        <h2>¿Qué puedes hacer con WISHES?</h2>
        <ul>
          <li>Crear wishes personales o profesionales</li>
          <li>Priorizar (qué va primero)</li>
          <li>Dividir en mini-objetivos</li>
          <li>Medir progreso y celebrar hitos</li>
          <li>Ajustar el plan sin perder el rumbo</li>
        </ul>
      </section>

      <section>
        <h2>Plantilla rápida para tu primer Wish</h2>
        <p>Copia y completa:</p>
        <ul style={{ listStyle: "none", marginLeft: 0 }}>
          <li><strong>Mi Wish:</strong> &quot;Quiero ____________________________.&quot;</li>
          <li><strong>Por qué lo quiero:</strong> &quot;Porque ____________________________.&quot;</li>
          <li><strong>Cómo sabré que lo logré:</strong> &quot;Lo habré conseguido cuando ____________________________.&quot;</li>
          <li><strong>Primer paso (hoy):</strong> &quot;Hoy haré ____________________________.&quot;</li>
        </ul>
      </section>

      <section>
        <h2>Consejo R4W</h2>
        <p>
          Si te da pereza empezar, tu wish es demasiado grande. Hazlo más
          pequeño hasta que puedas decir: &quot;esto lo hago hoy&quot;.
        </p>
        <Link href="/empieza-ahora" className="btn-primary">
          Crear mi primer Wish
        </Link>
      </section>
    </>
  );
}
