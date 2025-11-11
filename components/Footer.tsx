"use client";

import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
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

  const social = [
    { icon: Instagram, href: "https://www.instagram.com/rehaab .dk", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/rehaab .dk", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/@rehaab rejser", label: "YouTube" },
  ];

  return (
    <footer
      className="relative text-white overflow-hidden [overflow-x:clip]" // prevent horizontal overflow
      style={{
        backgroundImage: "url(/images/footer-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* dark + vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]" />
      {/* subtle curved accents */}
      <div className="pointer-events-none absolute -left-1/4 top-0 h-full w-[60%] rounded-full border border-white/10 opacity-30" />
      <div className="pointer-events-none absolute -right-1/4 top-0 h-full w-[60%] rounded-full border border-white/10 opacity-20" />

      {/* center vertical divider */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[calc(100%-72px)] w-px -translate-x-1/2 bg-white/10" />

      {/* Main content */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Brand + contact + social */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="inline-block h-9 w-9 rounded-full bg-[color:var(--gold)]/90" />
                <span className="font-heading text-3xl font-semibold tracking-wide">
                  rehaab  Travel
                </span>
              </div>
              <p className="mt-3 text-white/70 max-w-md">
                We arrange spiritually fulfilling Umrah and Hajj journeys with
                trusted guides, premium hotels and complete logistic support.
              </p>

              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex items-start gap-3 text-white/80">
                  <MapPin className="mt-0.5 h-4 w-4" />
                  Copenhagen, Denmark
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" />
                  <a
                    href="https://api.whatsapp.com/send/?phone=4525466322&text&type=phone_number&app_absent=0"
                    className="hover:underline"
                    target="_blank"
                  >
                    4525466322
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" />
                  <a href="mailto:kontakt@rehaab .dk" className="hover:underline">
                    kontakt@rehaab .dk
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-2 flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Columns (links + newsletter) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-0 lg:pl-8">
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-3 text-white">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white">
                  
                    About us
                 
                </li>
                <li className="hover:text-white">
                 
                    Why choose us
                 
                </li>
                <li className="hover:text-white">
                 
                    Testimonials
                 
                </li>
                <li className="hover:text-white">
                 
                    FAQs
                 
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3 text-white">Stay updated</h4>
              <p className="text-white/70 mb-3">
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
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
                />
                <Button
                  type="submit"
                  className="bg-gradient-gold hover:opacity-90 h-9 px-3"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-3 text-white/80">
            <p className="text-sm">
              © {new Date().getFullYear()} rehaab  Travel. All rights reserved.
            </p>
            <p className="text-sm text-center">
              {/* optional center text */} rehaab  Travel is committed to safe and ethical journeys.
            </p>
           
          </div>
        </div>
      </section>
    </footer>
  );
}
