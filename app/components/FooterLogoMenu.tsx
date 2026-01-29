"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/clubes", label: "Mi Tribu" },
  { href: "/wishes", label: "Wishes" },
  { href: "/empieza-ahora", label: "Empieza ahora" },
  { href: "/mi-diario", label: "Mi diario" },
  { href: "/faq", label: "FAQ" },
];

const legal = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/politica-privacidad", label: "Privacidad" },
  { href: "/politica-cookies", label: "Cookies" },
];

const items = [...nav, ...legal];

export default function FooterLogoMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocumentClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, [open]);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <button
        type="button"
        className="footer-logo-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Menú de navegación"
      >
        <Image
          src="/logo.svg"
          alt=""
          width={100}
          height={30}
          style={{ display: "block", height: 30, width: "auto" }}
        />
      </button>
      {open && (
        <div
          role="menu"
          className="nav-dropdown-menu footer-dropdown-menu"
          style={{
            position: "absolute",
            bottom: "100%",
            left: 0,
            marginBottom: 4,
            minWidth: 180,
            padding: "0.5rem 0",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            zIndex: 50,
          }}
        >
          {items.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="nav-dropdown-link"
              aria-current={pathname === href ? "page" : undefined}
              style={{
                display: "block",
                padding: "0.5rem 1rem",
                color: "var(--text-muted)",
                fontSize: "0.9rem",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
