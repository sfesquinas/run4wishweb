import Link from "next/link";
import Image from "next/image";
import NavDropdown from "./NavDropdown";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/como-funciona", label: "Cómo funciona" },
  //{ href: "/carreras", label: "Carreras" }, // oculto de momento
  { href: "/clubes", label: "Mi Tribu" },
  { href: "/wishes", label: "Wishes" },
  { href: "/empieza-ahora", label: "Empieza ahora" },
  { href: "/mi-diario", label: "Mi diario" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header
      className="header-sticky"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2.5rem",
        borderBottom: "1px solid var(--border)",
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Link href="/" className="header-logo" aria-label="Run4Wish — Inicio">
        <Image
          src="/logo.svg"
          alt="Run4Wish"
          width={120}
          height={36}
          style={{ display: "block", height: 36, width: "auto" }}
          priority={true}
        />
      </Link>
      <NavDropdown items={nav} />
    </header>
  );
}
