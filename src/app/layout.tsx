import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/frontpage/header";
import footer from "@/components/frontpage/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "GreyNAT - Cybersecurity Services",
    template: "%s | GreyNAT",
  },
  description:
    "Expert cybersecurity services that keep your infrastructure resilient, your data safe, and your business ahead of evolving threats.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "incident response",
    "security audits",
    "threat intelligence",
    "cloud security",
  ],
  authors: [{ name: "GreyNAT" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GreyNAT",
    title: "GreyNAT - Cybersecurity Services",
    description:
      "Expert cybersecurity services that keep your infrastructure resilient, your data safe, and your business ahead of evolving threats.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreyNAT - Cybersecurity Services",
    description:
      "Expert cybersecurity services that keep your infrastructure resilient, your data safe, and your business ahead of evolving threats.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <footer />
      </body>
    </html>
  );
}
