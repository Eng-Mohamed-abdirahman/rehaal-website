import * as React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Umrah Packages | Rehaal',
  description: 'Browse current Umrah packages tailored for different needs.',
};

type Package = {
  id: number;
  title: string;
  subtitle: string;
  destination: string;
  dates: string;
  duration: string;
  slotsLeft: number;
  priceFrom: number;
  image: string;
};

const packages: Package[] = [
  {
    id: 1,
    title: 'December Trip',
    subtitle: 'A special year‑end Umrah package featuring balanced schedules, guided spiritual sessions, and seamless travel support for families and individuals.',
    destination: 'Mecca & Medina, Saudi Arabia',
    dates: 'December 10, 2025 – December 21, 2025',
    duration: '12 days',
    slotsLeft: 8,
    priceFrom: 1890,
    image: '/u1.jpeg',
  },
  {
    id: 2,
    title: 'February Trip',
    subtitle: 'A perfect winter Umrah package offering affordable prices, group guidance, and seamless travel arrangements for a peaceful pilgrimage.',
    destination: 'Mecca & Medina, Saudi Arabia',
    dates: 'October 30, 2025 – February 12, 2026',
    duration: '9 days',
    slotsLeft: 14,
    priceFrom: 1490,
    image: '/u2.jpg',
  },
  
];

export default function PackagesPage() {
  return (
    <main className="bg-[color:var(--ivory)] min-h-screen">
      <section className="mx-auto max-w-[1200px] px-6 pt-12 pb-16">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-heading font-bold tracking-tight">
            Umrah Packages
          </h1>
          <p className="mt-3 text-neutral-600 max-w-3xl mx-auto">
            Select the package that matches your timing, family needs and spiritual goals.
          </p>
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {packages.slice(0, 2).map((p) => (
            <PackageCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

function PackageCard({ p }: { p: Package }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 flex flex-col
                 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.12)]
                 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.20),0_18px_50px_-12px_rgba(217,156,29,0.20)]
                 transition-shadow duration-300"
    >
      {/* Shorter image height */}
      <div className="relative h-[260px]">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(min-width:1400px) 650px, (min-width:768px) 50vw, 100vw"
          className="object-cover"
          priority={p.id === 1}
        />
        <div className="absolute top-4 left-4">
          <div
            className="px-4 py-1.5 rounded-full text-white text-sm font-semibold shadow"
            style={{ backgroundColor: "var(--gold)" }}
          >
            {p.slotsLeft} slots left
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="rounded-full bg-white/90 backdrop-blur px-4 py-1.5 text-neutral-800 text-sm font-semibold shadow border border-white">
            From <span className="text-lg font-bold">{p.priceFrom}</span> USD
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/40 pointer-events-none" />
      </div>

      {/* Tighter content */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-heading font-bold tracking-tight text-neutral-900">
            {p.title}
          </h3>
          <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
            {p.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-3 text-sm">
          <div>
            <div className="text-neutral-500">Destination</div>
            <div className="font-medium">{p.destination}</div>
          </div>
          <div>
            <div className="text-neutral-500">Dates</div>
            <div className="font-medium">{p.dates}</div>
          </div>
          <div>
            <div className="text-neutral-500">Duration</div>
            <div className="font-medium">{p.duration}</div>
          </div>
          <div>
            <div className="text-neutral-500">Slots left</div>
            <div className="font-medium">{p.slotsLeft}</div>
          </div>
        </div>

        <div className="mt-2 flex flex-col sm:flex-row gap-3">
          <button className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition">
            See details
          </button>
          <button
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md transition"
            style={{ backgroundColor: "var(--gold)", color: "#000" }}
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}