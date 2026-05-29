import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} \u2014 ${site.tagline}`,
    template: `%s \u2014 ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/img/gingermail-icon.png",
  },
  openGraph: {
    title: `${site.name} \u2014 ${site.tagline}`,
    description: site.description,
    type: "website",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/img/gingermail-icon.png", width: 1024, height: 1024 }],
  },
  twitter: {
    card: "summary",
    title: `${site.name} \u2014 ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-teal-700">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
