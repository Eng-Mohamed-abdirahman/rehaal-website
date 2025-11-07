import * as React from 'react';
import Image from 'next/image';
import { FadeIn, Stagger, MotionItem } from '../../components/motion-reveal';

export const metadata = {
  title: 'Umrah Packages | Umrah Travels',
  description: 'Seasonal Umrah travel packages for a blessed journey.',
};

type Package = {
  id: string;
  title: string;
  month: string;
  description: string;
  destination: string;
  dates: string;
  durationDays: number;
  seats: number;
  priceFrom: string;
  image: string;
};

const packages: Package[] = [
  {
    id: 'dec-trip',
    title: 'December Trip',
    month: 'December',
    description:
      'A special year‑end Umrah package featuring balanced schedules, guided spiritual sessions, and seamless travel support for families and individuals.',
    destination: 'Mecca & Medina, Saudi Arabia',
    dates: 'December 10, 2025 – December 21, 2025',
    durationDays: 12,
    seats: 24,
    priceFrom: 'From 90 DKK',
    image: '/u1.jpeg',
  },
  {
    id: 'feb-trip',
    title: 'February Trip',
    month: 'February',
    description:
      'A perfect winter Umrah package offering affordable prices, group guidance, and seamless travel arrangements for a peaceful pilgrimage.',
    destination: 'Mecca & Medina, Saudi Arabia',
    dates: 'October 30, 2025 – February 12, 2026',
    durationDays: 11,
    seats: 18,
    priceFrom: 'From 100 DKK',
    image: '/u2.jpg',
  },
];

export default function PackagesPage() {
  return (
    <main className="relative bg-[color:var(--ivory)]">
      {/* Hero */}
      <section className="relative isolate">
        <div className="mx-auto max-w-[1200px] px-4 py-20 md:py-28 text-center">
          <FadeIn>
            <span className="text-xs font-semibold tracking-wider text-[color:var(--gold)] uppercase">
              Umrah Packages
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[color:var(--foreground)]">
              Seasonal Packages
            </h1>
          </FadeIn>
          <FadeIn delay={180}>
            <p className="mx-auto mt-5 max-w-3xl text-[color:var(--foreground)]/70 text-base sm:text-lg">
              Choose the package that matches your schedule and spiritual goals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="mx-auto max-w-[1200px] px-4 pb-20">
        <Stagger className="grid gap-8 md:gap-10 md:grid-cols-2">
          {packages.map((pkg, i) => (
            <MotionItem
              key={pkg.id}
              className="group rounded-[32px] bg-white/90 backdrop-blur-sm shadow-sm border border-border overflow-hidden transition-shadow hover:shadow-lg flex md:h-[420px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] w-full h-full">
                {/* Image */}
                <div className="relative h-56 md:h-full">
                  <div className="absolute inset-0">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(min-width:1024px) 300px, (min-width:768px) 300px, 100vw"
                      className="object-cover object-center"
                      priority={i < 1}
                    />
                    <div className="absolute top-5 left-5">
                      <PriceBadge>{pkg.priceFrom}</PriceBadge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                  </div>
                 </div>

                {/* Content */}
                <div className="flex h-full">
                  <div className="p-7 md:p-9 flex flex-col gap-5 h-full">
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {pkg.description}
                    </p>
                    <div className="flex flex-col gap-3 text-sm">
                      <InfoRow label="Destination" value={pkg.destination} />
                      <InfoRow label="Dates" value={pkg.dates} />
                      <InfoRow label="Duration" value={`${pkg.durationDays}`} />
                      <InfoRow label="Available seats" value={`${pkg.seats} seats`} />
                      <button
                        className="self-start text-[color:var(--gold)] text-sm font-medium hover:underline"
                        type="button"
                      >
                        See Package details
                      </button>
                    </div>
                    <div className="mt-auto flex w-full pt-2">
                      <div className="w-full flex rounded-full overflow-hidden border border-[color:var(--gold)]">
                        <button
                          type="button"
                          className="w-1/2 px-5 py-4 text-sm font-medium hover:bg-[color:var(--gold)]/5 transition-colors"
                        >
                          See details
                        </button>
                        <button
                          type="button"
                          className="w-1/2 px-5 py-4 text-sm font-medium text-black bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--gold)]/70 hover:brightness-110 transition-colors flex items-center justify-center gap-2"
                        >
                          Book this trip →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionItem>
          ))}
        </Stagger>
      </section>

      {/* Help CTA */}
      <section className="px-4 pb-32">
        <div className="mx-auto max-w-[900px] text-center rounded-[40px] py-16 md:py-20 bg-white/40 backdrop-blur-sm border border-border relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[color:var(--gold)]/5 via-transparent to-transparent" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Are you unsure about which package to choose?
          </h2>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-sm md:text-base">
            Our team is ready to help you find the perfect package to suit your needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 rounded-full text-sm font-medium text-black bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--gold)]/70 hover:brightness-110 transition"
            >
              Contact us
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=4525466322&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-sm font-medium border border-[color:var(--gold)] text-foreground hover:bg-[color:var(--gold)]/10 transition"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function PriceBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="px-5 py-2 rounded-full text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(217,156,29,0.55)]"
      style={{
        background:
          'linear-gradient(135deg, color-mix(in oklab, var(--gold) 92%, #fff) 0%, color-mix(in oklab, var(--gold) 80%, #000) 100%)',
      }}
    >
      {children}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="font-medium text-foreground">{label}</span>
      <span className="text-foreground/60"> {value}</span>
    </div>
  );
}