import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, localBusinessSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  ...createMetadata({
    title: "Fönsterputs Kristianstad – Professionell Fönsterputsare",
    description:
      "Professionell fönsterputs i Kristianstad. Erfarna fönsterputsare för villor, lägenheter och företag. Städfirma med hemstädning, flyttstädning och kontorsstädning. Kostnadsfri offert – ring 076-285 53 34.",
    path: "/",
    keywords: [
      "Fönsterputsning Kristianstad",
      "Fönsterputs Kristianstad",
      "Fönsterputsare Kristianstad",
      "Städfirma Kristianstad",
      "Städning Kristianstad",
      "Hemstädning Kristianstad",
    ],
  }),
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${inter.variable} antialiased`}>
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
