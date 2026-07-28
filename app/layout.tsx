import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Núcleo TC | Medicina e Nutrição Integradas",
  description: "Cuidado médico e nutricional individualizado para compreender o seu corpo e construir uma transformação consciente.",
  icons: {
    icon: "/brand/favicon.png",
    shortcut: "/brand/favicon.png",
  },
  openGraph: {
    title: "Núcleo TC | Transformação começa no núcleo",
    description: "Medicina e nutrição integradas para um cuidado verdadeiramente individual.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Núcleo TC — Transformação começa no núcleo." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Núcleo TC | Transformação começa no núcleo",
    description: "Medicina e nutrição integradas para um cuidado verdadeiramente individual.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
