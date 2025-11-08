import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import RoutePreloader from "../components/RoutePreloader";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";



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
