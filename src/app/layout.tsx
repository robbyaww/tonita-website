import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "PT. Tonita Dwi Generasi — Catering Nusantara Terpercaya Sejak 1985",
    template: "%s | TDG Catering",
  },
  description:
    "PT. Tonita Dwi Generasi (TDG) — layanan catering profesional dengan menu khas nusantara. Berpengalaman 30+ tahun melayani perusahaan dan acara di Tangerang.",
  keywords: [
    "catering tangerang",
    "catering nusantara",
    "catering kantor",
    "nasi box tangerang",
    "catering harian",
    "TDG catering",
    "Tonita catering",
  ],
  openGraph: {
    title: "PT. Tonita Dwi Generasi — Catering Nusantara Terpercaya",
    description:
      "Layanan catering profesional dengan menu khas nusantara. 30+ tahun pengalaman.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PT. Tonita Dwi Generasi",
              alternateName: "TDG Catering",
              description:
                "Layanan catering profesional dengan menu khas nusantara sejak 1985",
              telephone: "+6281398681880",
              email: "tonitacatering.tdg@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Jl. Tanimbar Blok C-259, Cimone Mas Permai",
                addressLocality: "Tangerang",
                addressRegion: "Banten",
                addressCountry: "ID",
              },
              foundingDate: "1985",
              numberOfEmployees: 17,
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
