import Image from "next/image";

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
      title: "Mi Tribu",
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
        <Image
          src="/img/wisho-contorno.svg"
          alt=""
          width={24}
          height={24}
          className="feature-card-icon-img"
        />
      ),
      title: "Wishes",
      benefit: "Hace falta una economía.",
      how: "En R4W: Wish es la moneda con la que damos recompensas, compra entradas a carreras VIP, usas para resolver preguntas falladas.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      ),
      title: "Mi Ritmo",
      benefit: "Cada uno tiene sus preferencias y su forma de avanzar.",
      how: "En R4W: tu espacio. Preferencias, cambiar de look, ver tu avance y seguir a tu ritmo.",
    },
  ];

  return (
    <div className="feature-grid">
      {features.map((feature) => (
        <article key={feature.title} className="feature-card">
          <div className="feature-card-icon">{feature.icon}</div>
          <h3 className="feature-card-title">{feature.title}</h3>
          <p className="feature-card-benefit">{feature.benefit}</p>
          <p className="feature-card-how">{feature.how}</p>
        </article>
      ))}
    </div>
  );
}
