import { notFound } from 'next/navigation';
import { packages } from '../../data/packages';
import BookingClient from '../BookingClient';

type Props = { params: { id: string } };

export function generateStaticParams() {
  return packages.map((p) => ({ id: String(p.id) }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const p = packages.find((x) => String(x.id) === params.id);
  if (!p) return {};
  return {
    title: `Book: ${p.title} | Rehaal`,
    description: `Reserve your spot for ${p.title} (${p.duration}).`,
  };
}

export default function BookingPage({ params }: Props) {
  const p = packages.find((x) => String(x.id) === params.id);
  if (!p) return notFound();

  return (
    <main className="bg-[color:var(--ivory)] min-h-screen">
      <section className="mx-auto max-w-[1100px] px-6 py-10">
        
        <BookingClient packages={packages} initialId={p.id} />
      </section>
    </main>
  );
}