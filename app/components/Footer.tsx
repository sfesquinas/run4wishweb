import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "1.5rem",
        borderTop: "1px solid var(--border)",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" className="footer-logo" aria-label="Run4Wish — Inicio">
          <img
            src="/logo.svg"
            alt=""
            width={100}
            height={30}
            style={{ display: "block", height: 30, width: "auto" }}
          />
        </Link>
        <nav aria-label="Enlaces del footer" style={{ display: "flex", gap: "1rem" }}>
          <Link href="/" className="footer-link" style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Inicio
          </Link>
          <Link
            href="/como-funciona"
            className="footer-link"
            style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}
          >
            Cómo funciona
          </Link>
          <Link
            href="/empieza-ahora"
            className="footer-link"
            style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}
          >
            Empieza ahora
          </Link>
          <Link href="/faq" className="footer-link" style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
}
