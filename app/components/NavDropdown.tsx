"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

type Item = { href: string; label: string };

export default function NavDropdown({ items }: { items: Item[] }) {
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
        className="nav-menu-btn"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Menú de navegación"
        style={{
          padding: "0.5rem 0.75rem",
          background: "transparent",
          border: "1px solid var(--border)",
          borderRadius: 6,
          color: "var(--text-muted)",
          fontSize: "0.9rem",
          cursor: "pointer",
        }}
      >
        Menú
      </button>
      {open && (
        <div
          role="menu"
          className="nav-dropdown-menu"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: 4,
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
