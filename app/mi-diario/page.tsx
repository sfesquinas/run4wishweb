import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi diario — Microtextos motivadores | Run4Wish",
  description:
    "Pequeños textos motivadores a diario. Inspiración y constancia para tu camino.",
  alternates: { canonical: "/mi-diario" },
};

export default function MiDiario() {
  return (
    <section style={{ paddingTop: "3rem" }}>
      <h1>Mi diario</h1>
      <p>Microtextos motivadores a diario. (Próximamente.)</p>
    </section>
  );
}
