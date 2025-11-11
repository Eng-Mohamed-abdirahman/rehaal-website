import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { packages, type Package } from '../../data/packages';

type Params = { id: string };

export function generateStaticParams() {
  return packages.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const pkg = packages.find((p) => String(p.id) === params.id);
  if (!pkg) return { title: 'Package not found | Rehaal' };
  return {
    title: `${pkg.title} | Rehaal`,
    description: pkg.subtitle ?? 'Umrah package details',
  };
}

export default function PackageDetailsPage({ params }: { params: Params }) {
  const p = packages.find((x) => String(x.id) === params.id);
  if (!p) notFound();

  return (
    <main className="bg-[color:var(--ivory)] min-h-screen">
      <section className="mx-auto max-w-[1200px] px-6 pt-30 pb-16">
        <Link href="/packages" className="text-sm text-neutral-600 hover:text-neutral-900">
          ← Back to packages
        </Link>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative w-full h-[300px] sm:h-[420px] rounded-2xl overflow-hidden shadow border border-neutral-200">
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4">
              <div
                className="px-4 py-1.5 rounded-full text-white text-sm font-semibold shadow"
                style={{ backgroundColor: 'var(--gold)' }}
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

          <div className="flex flex-col">
            <h1 className="text-4xl font-heading font-bold tracking-tight text-neutral-900">{p.title}</h1>
            <p className="mt-3 text-neutral-700">{p.subtitle}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-sm">
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
              <div>
                <div className="text-neutral-500">Price from</div>
                <div className="font-medium">${p.priceFrom} USD</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/booking/${p.id}`}
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition text-center"
                style={{ backgroundColor: 'var(--gold)', color: '#000' }}
              >
                Book now
              </Link>
              <Link
                href="/packages"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition text-center"
              >
                Explore more packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}