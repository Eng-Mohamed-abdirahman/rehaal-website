"use client";

import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to your newsletter service
    setEmail("");
  };

  // FIX: valid social items with icons
  const social = [
    { icon: Instagram, href: "https://www.instagram.com/rehaal.dk", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/rehaal.dk", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/@rehaalrejser", label: "YouTube" },
    // { icon: Tiktok, href: "https://www.tiktok.com/@rehaalrejser", label: "TikTok" },
  ];

  return (
    <footer className="bg-background">
      {/* CTA banner */}
      
      {/* Main footer */}
      <section className="container mx-auto container-padding py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + contact */}
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="inline-block h-6 w-6 rounded bg-[color:var(--gold)]" />
              <span className="font-heading text-xl font-semibold">Rehaal Travel</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              We arrange spiritually fulfilling Umrah and Hajj journeys with
              trusted guides, premium hotels and complete logistic support.
            </p>

            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4" />
                Copenhagen, Denmark
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" />
                <a href="https://api.whatsapp.com/send/?phone=4525466322&text&type=phone_number&app_absent=0" className="hover:underline" target="_blank">
                  4525466322
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" />
                <a href="mailto:kontakt@rehaal.dk" className="hover:underline">
                  kontakt@rehaal.dk
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-foreground">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="hover:text-foreground">
                  Why choose us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-foreground">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-foreground">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Trips */}
         

          {/* Newsletter */}
          <div className="">
            <h4 className="font-semibold mb-3">Stay updated</h4>
            <p className="text-muted-foreground mb-4">
              Join our newsletter for new departures and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                aria-label="Email address"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
              />
              <Button
                type="submit"
                className="bg-gradient-gold hover:opacity-90"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>

            <div className="mt-4 flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 pb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rehaal Travel. All rights reserved.
          </p>
          
        </div>
      </section>
    </footer>
  );
}
