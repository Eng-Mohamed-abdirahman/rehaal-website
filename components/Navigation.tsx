"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const pathname = usePathname() || "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure isScrolled affects the header style so it is "used"
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        isScrolled ? "bg-background/70 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav
        className="z-50 transition-all duration-500 bg-white shadow-soft"
        aria-label="Primary"
      >
        <div className="container mx-auto container-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image src="/rehaablogo.png" alt="Logo" width={200} height={200} />
              <span className="brand-name font-heading text-xl font-semibold gradient-text">
                Rehaal
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${
                      active
                        ? "text-primary font-semibold"
                        : "text-foreground/80"
                    } hover:text-primary font-medium transition-colors duration-300 relative group`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                );
              })} */}
              <Button className="hover:opacity-90 transition-opacity shadow-soft cursor-pointer">
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-6 animate-fade-in bg-white">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`${
                        active
                          ? "text-primary font-semibold"
                          : "text-foreground/80"
                      } hover:text-primary font-medium transition-colors duration-300 py-2`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Button className="bg-gradient-gold hover:opacity-90 transition-opacity shadow-soft w-full">
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
