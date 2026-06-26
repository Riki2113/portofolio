import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Riki Irawan – Fullstack Developer",
  description: "Portofolio Riki Irawan, Fullstack Developer spesialis Next.js dan Laravel.",
  openGraph: {
    title: "Riki Irawan – Fullstack Developer",
    description: "Portofolio Riki Irawan, Fullstack Developer spesialis Next.js dan Laravel.",
    url: "https://rikiirawan.vercel.app",
    siteName: "Riki Irawan",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Riki Irawan Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riki Irawan – Fullstack Developer",
    description: "Portofolio Riki Irawan, Fullstack Developer spesialis Next.js dan Laravel.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
