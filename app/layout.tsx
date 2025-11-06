import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import RoutePreloader from "../components/RoutePreloader";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rehaal",
  description: "Rehaal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <RoutePreloader minDuration={2000} />
        </Suspense>
        <div>
          <Navigation />
        </div>
        {children}
        <div className="mt-20">
          <Footer />
        </div>

      </body>
    </html>
  );
}
