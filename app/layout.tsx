import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE_URL } from "@/lib/site";

const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Run4Wish – R4W",
  description:
    "Plataforma donde conviertes deseos en objetivos claros: crea tu wish, únete a clubes, sigue retos, comparte avances.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Run4Wish",
    title: "Run4Wish – R4W",
    description:
      "Plataforma donde conviertes deseos en objetivos claros: crea tu wish, únete a clubes, sigue retos, comparte avances.",
    images: ["/og/run4wish.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Run4Wish – R4W",
    description:
      "Plataforma donde conviertes deseos en objetivos claros: crea tu wish, únete a clubes, sigue retos, comparte avances.",
    images: ["/og/run4wish.jpg"],
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  themeColor: "#0d1117",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Run4Wish",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
      },
      {
        "@type": "WebSite",
        name: "Run4Wish",
        url: SITE_URL,
        description:
          "Plataforma donde conviertes deseos en objetivos claros: crea tu wish, únete a clubes, sigue retos, comparte avances.",
        inLanguage: "es",
      },
    ],
  };

  return (
    <html lang="es" className={fontSans.variable}>
      <body>
        <a href="#main" className="skip-link">
          Ir al contenido
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
