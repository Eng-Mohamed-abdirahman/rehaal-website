import Image from "next/image";
import * as React from "react";
import { FadeIn, MotionItem, Stagger } from "../../components/motion-reveal";

export const metadata = {
  title: "Our Services | Umrah Travels",
  description: "Everything you need for a blessed and comfortable journey – all in one place.",
};

export default function ServicesPage() {
  return (
    <main className="relative bg-[color:var(--ivory)]">
      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
           src={'/service.jpg'}
            alt="Umrah service background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--ivory)] to-transparent" />
        </div>
        <div className="mx-auto max-w-[1200px] px-4 py-24 md:py-32 text-center">
          <FadeIn>
            <span className="text-xs font-semibold tracking-wider text-[color:var(--gold)] uppercase">
              Our Services
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[color:var(--ivory)]">
              Our Services
            </h1>
          </FadeIn>
          <FadeIn delay={180}>
            <p className="mx-auto mt-5 max-w-3xl text-[color:var(--ivory)]/85 text-base sm:text-lg">
              Everything you need for a blessed and comfortable journey – all in one place.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Cards */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:py-20">
        <Stagger className="grid gap-8 md:gap-10 md:grid-cols-2">
          {services.map((s, i) => (
            <MotionItem
              key={s.title}
              className="group rounded-[36px] bg-white/90 backdrop-blur-sm shadow-sm border border-border overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col"
            >
              <div className="grid md:grid-cols-12 items-stretch h-full">
                {/* Image */}
                <div className="md:col-span-5 relative">
                  <div className="relative h-56 md:h-full">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width:768px) 40vw, 100vw"
                      className="object-cover"
                      priority={i < 2}
                    />
                    <div className="absolute bottom-5 left-5">
                      <GoldBadge>
                        <s.Icon />
                      </GoldBadge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Text */}
                <div className="md:col-span-7 flex">
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-foreground/70 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            </MotionItem>
          ))}
        </Stagger>
      </section>
    </main>
  );
}

/* Badge */
function GoldBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="h-12 w-12 rounded-2xl grid place-items-center shadow-[0_18px_50px_-15px_rgba(217,156,29,0.55)] transition-transform duration-300 group-hover:scale-110"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--gold) 95%, #fff) 0%, color-mix(in oklab, var(--gold) 85%, #000) 100%)",
      }}
    >
      {children}
    </div>
  );
}

/* Icons */
function IconKaaba() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-black">
      <path d="M3 7 12 3l9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 7v10l9 4 9-4V7M12 11v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconFlight() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-black">
      <path d="M2 16 22 8 19 5 9.5 9.5 7 6.5 4.5 7.5 7.5 11 2 13v3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 14.5 11 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconBook() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-black">
      <path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconHotel() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-black">
      <path d="M3 21h18M6 21V6h12v15M8 10h2m4 0h2M8 14h2m4 0h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}


/* Data */
const services = [
  {
    title: "Comprehensive Umrah Packages",
    desc:
      "Experience a seamless Umrah journey designed for individuals, families, and groups. Our packages include everything — visa processing, premium flights, luxury hotel stays near the Haramain, guided Ziyarah tours, and round‑the‑clock support. We ensure your focus remains on worship while we handle every detail.",
    image: "/s1.jpg", // replace with your asset
    Icon: IconKaaba,

  },
  {
    title: "Group & Private Travel Arrangements",
    desc:
      "Whether you prefer to travel privately with your family or join a group for a collective spiritual experience, we offer flexible arrangements to suit your needs. Enjoy personalized itineraries, comfortable transport, and dedicated group leaders ensuring a smooth and spiritually uplifting journey.",
    image: "/s2.jpg",
    Icon: IconFlight,
    
  },
  {
    title: "Educational & Spiritual Guidance",
    desc:
      "Deepen your understanding of the pilgrimage through pre‑departure seminars, Seerah tours, and continuous spiritual mentorship. Our team of experienced scholars and travel guides offer practical and spiritual insights, helping you perform your Umrah with confidence, sincerity, and peace of mind.",
    image: "/s3.jpg",
    Icon: IconBook,
   
  },
  {
    title: "Customized VIP & Family Packages",
    desc:
      "For travelers seeking a more personal and exclusive experience, our VIP and family packages offer complete privacy, flexibility, and comfort. Enjoy private transportation, premium accommodations near the Haramain, and a dedicated guide available throughout your journey. Perfect for families, elderly pilgrims, or those looking for a peaceful and stress-free Umrah experience.",
    image: "/s4.jpg",
    Icon: IconHotel,
   
  },
] as const;