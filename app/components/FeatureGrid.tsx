export default function FeatureGrid() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Pregunta diaria",
      benefit: "La vida es un reto cada día.",
      how: "En R4W: respondes una pregunta al día, en 20 segundos avanzas y creces. Constancia sin excusas.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Training",
      benefit: "Estudiamos, trabajamos, entrenamos.",
      how: "En R4W: puedes practicar a diario, tienes contenido variado que te hará mejorar.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Tribu",
      benefit: "Creamos relaciones con nuestra gente.",
      how: "En R4W: conectarás con tu tribu, entrarás a formar parte de clubes donde avanzas acompañado.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2h-2" />
          <path d="M6 9V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
          <path d="M8 13h8M8 17h8M12 9v8" />
        </svg>
      ),
      title: "Carreras",
      benefit: "Aspiraciones, deseos, objetivos.",
      how: "En R4W: envíanos tu deseo, lo estudiaresmo y si es viable prepararemos retos con premios reales.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
          <path d="M12 22V12" />
        </svg>
      ),
      title: "Wishes",
      benefit: "Hace falta una economía.",
      how: "En R4W: Wish es la moneda con la que damos recompensas, compra entradas a carreras VIP, usas para resolver preguntas falladas.",
    },
  ];

  return (
    <div className="feature-grid">
      {features.map((feature) => (
        <div
          key={feature.title}
          style={{
            padding: "1.5rem",
            border: "1px solid var(--border)",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              color: "var(--accent)",
              width: "fit-content",
              marginBottom: "0.25rem",
            }}
          >
            {feature.icon}
          </div>
          <h3 style={{ margin: 0, color: "var(--text)", fontSize: "1.125rem", fontWeight: 600 }}>
            {feature.title}
          </h3>
          <p style={{ margin: 0, color: "var(--text)", fontWeight: 500 }}>
            {feature.benefit}
          </p>
          <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.9rem" }}>
            {feature.how}
          </p>
        </div>
      ))}
    </div>
  );
}
