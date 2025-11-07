"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navigation() {
  const navRef = useRef<HTMLDivElement | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Compute scroll states on client only
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement;
      const max = Math.max(1, h.scrollHeight - window.innerHeight);
      setIsScrolled(y > 24);
      setScrollProgress(Math.min(1, y / max));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const smoothTo = (hash: string) => {
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = (navRef.current?.offsetHeight || 72) + (isScrolled ? 12 : 0);
    const y = el.getBoundingClientRect().top + window.scrollY - headerH;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      smoothTo(href);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      {/* Floating wrapper that morphs on scroll */}
      <div
        ref={navRef}
        className={[
          "mx-auto transition-all duration-300 pointer-events-auto",
          "px-4",
          isScrolled
            ? "max-w-5xl mt-3 rounded-2xl bg-white/75 dark:bg-neutral-900/70 supports-[backdrop-filter]:backdrop-blur-xl ring-1 ring-black/5 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.35)]"
            : "max-w-none mt-0 rounded-none bg-transparent ring-0 shadow-none",
        ].join(" ")}
      >
        <nav className="container mx-auto">
          <div className={["flex items-center justify-between", isScrolled ? "h-16" : "h-20"].join(" ")}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/favicon.ico" alt="Logo" width={140} height={40} priority />
              <span className="font-heading text-xl font-semibold gradient-text">rehaab </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6 ">
              <Link href="/services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/packages" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Packages
              </Link>
              <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                About
              </Link>
              
              <Button className="">Book Now</Button>
            </div>

            {/* Mobile: only the Book Now button (no hamburger/menu) */}
            <div className="md:hidden">
              <Button className="">Book Now</Button>
            </div>
          </div>
        </nav>

        {/* Scroll progress accent (no window usage during render) */}
        <div
          className="h-0.5 w-full origin-left bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 transition-transform"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
    </header>
  );
}