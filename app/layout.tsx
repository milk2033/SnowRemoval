import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://snowremoval-greenbay.com'),
  title: "Snow Removal Green Bay & Appleton | Professional Plowing & Ice Dam Removal",
  description: "Reliable snow plowing and removal services in Green Bay, Appleton, Oshkosh, and Door County. 24/7 emergency driveway clearing, roof snow removal, and ice dam prevention.",
  keywords: "Snow removal Green Bay, Snow plowing Appleton, Ice dam removal Door County, Driveway clearing Oshkosh, Emergency snow plow service WI, Roof snow removal Green Bay, Commercial snow removal Fox Valley",
  openGraph: {
    title: "Snow Removal Green Bay | Fast & Reliable Plowing",
    description: "Don't get stuck in the snow. Professional 24/7 plowing, salting, and ice dam removal for Green Bay, Appleton, and Northeast WI.",
    type: "website",
    locale: "en_US",
    siteName: "Green Bay Snow Pros",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add a placeholder og-image later if needed or leave as a to-do
        width: 1200,
        height: 630,
        alt: "Snow Removal Services in Green Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snow Removal Green Bay & Appleton | 24/7 Service",
    description: "Fast, reliable snow plowing and ice dam removal for Northeast Wisconsin homes and businesses.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://snowremoval-greenbay.com",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <JsonLd />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* Google Analytics Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}
