import * as React from "react";
import Image from "next/image";
import { FadeIn, ScaleIn, Stagger, MotionItem } from "../../components/motion-reveal";

export const metadata = {
  title: "About Us | Umrah Travels",
  description:
    "Serving the Ummah with expertise. Premium Umrah and Hajj experiences with guidance, comfort, and care.",
};

export default function AboutPage() {
  return (
    <main className="relative bg-[color:var(--ivory)]">
      {/* Hero */}
      <section className="relative isolate">
        {/* BG image + overlays */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={"/about.png"}
            alt="Umrah architecture background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* dark tint */}
          <div className="absolute inset-0 bg-black/45" />
          {/* bottom fade into ivory */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--ivory)] to-transparent" />
        </div>

        <div className="mx-auto max-w-[1200px] px-4 py-24 md:py-36 text-center">
          <FadeIn delay={40}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[color:var(--ivory)] backdrop-blur-md">
              OUR JOURNEY
            </span>
          </FadeIn>

          <FadeIn delay={120}>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[color:var(--ivory)]">
              About Umrah Travel
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-[color:var(--ivory)]/85">
              Your journey of faith begins here — where immersion meets comfort.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Soft decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, color-mix(in oklab, var(--secondary) 12%, transparent) 0%, transparent 60%), radial-gradient(900px 500px at 120% 0%, color-mix(in oklab, var(--beige) 14%, transparent) 0%, transparent 55%)",
        }}
      />

      {/* Serving the Ummah + Mission/Vision (centered like screenshot) */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:py-20">
        <div className="grid gap-10 md:gap-12 md:grid-cols-5 items-start">
          {/* Left: copy */}
          <div className="md:col-span-3">
            <FadeIn>
              <div className="flex items-center gap-2 text-[color:var(--gold)] text-sm font-medium">
                <span className="inline-block h-3 w-3 rounded-full bg-[color:var(--gold)]/90" />
                Our journey
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
                Serving the Ummah with{" "}
                <span className="block md:inline">expertise</span>
              </h2>
            </FadeIn>

            <div className="mt-6 space-y-5">
              <FadeIn delay={140}>
                <p className="text-foreground/80">
                  Umrah Travels was born from a simple vision: to provide Muslims with a
                  hassle-free, spiritual and transformative journey to the holy sites of
                  Makkah and Madinah. We specialize in Umrah and Hajj travel for individuals,
                  families and groups — offering full support from your initial enquiry
                  until you return home spiritually renewed.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-foreground/80">
                  We have had the honor of guiding hundreds of blessed travelers to the
                  Holy Lands. Each journey is meticulously planned with attention to
                  detail, ensuring that each pilgrim can focus on their worship while we
                  handle all the logistics with expertise. "We left as strangers… we
                  returned home as family."
                </p>
              </FadeIn>
              <FadeIn delay={260}>
                <p className="text-foreground/80">
                  Our team consists of seasoned travel professionals and knowledgeable
                  Islamic scholars with decades of experience, who accompany each group and
                  provide expert guidance on both the spiritual and practical aspects of
                  the journey.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Right: mission + vision cards */}
          <div className="md:col-span-2 space-y-6">
            <FadeIn>
              <div className="rounded-[32px] border border-border  p-7 md:p-8 shadow-sm">
                <div className="flex items-start gap-5">
                  <div
                    className=" p-3 rounded-xl grid place-items-center shadow-[0_18px_50px_-15px_rgba(217,156,29,0.55)]"
                    style={{
                      background:
                        "linear-gradient(180deg, color-mix(in oklab, var(--gold) 96%, #fff) 0%, color-mix(in oklab, var(--gold) 88%, #000) 100%)",
                    }}
                  >
                    <IconRibbon />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">Our mission</h3>
                    <p className="mt-2 text-foreground/70 leading-relaxed">
                      To facilitate meaningful spiritual journeys to the Holy Lands by
                      providing comprehensive, high-quality services that combine Islamic
                      knowledge, cultural understanding and modern travel expertise.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="rounded-[32px] border border-border  p-7 md:p-8 shadow-sm">
                <div className="flex items-start gap-5">
                  <div
                    className="p-3 rounded-2xl grid place-items-center shadow-[0_18px_50px_-15px_rgba(217,156,29,0.55)]"
                    style={{
                      background:
                        "linear-gradient(180deg, color-mix(in oklab, var(--gold) 96%, #fff) 0%, color-mix(in oklab, var(--gold) 88%, #000) 100%)",
                    }}
                  >
                    <IconStar />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">Our vision</h3>
                    <p className="mt-2 text-foreground/70 leading-relaxed">
                      To be the most trusted and premium provider of Islamic pilgrimage
                      experiences in Europe, making spiritual journeys accessible,
                      educational and deeply enriching for all Muslims.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
       {/* Why choose us */}

        <section className="container mx-auto px-4 py-14 md:py-20">
        <FadeIn>
          <div className="text-center">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[color:var(--gold)] uppercase">
              Why choose us?
            </span>
            <h2 className="mt-3 text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
              Why travel with Umrah Travels?
            </h2>
            <p className="mx-auto mt-3 max-w-3xl sm:max-w-4xl text-foreground/70">
              We are more than a travel agency — we are your trusted partners on this
              blessed spiritual journey.
            </p>
          </div>
        </FadeIn>

        <Stagger className="mt-10 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <MotionItem
              key={f.title}
              className="group rounded-[28px] border border-border  p-7 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-5">
                <GoldIcon className="group-hover:scale-110 will-change-transform">
                  <f.Icon />
                </GoldIcon>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-foreground/70 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </MotionItem>
          ))}
        </Stagger>
      </section>

       {/* Our Rating */}
      <section className="w-7xl  mx-auto px-4 py-14 md:py-18">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Our rating
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-foreground/70">
              Figures showing our travelers&apos; rating of our service
            </p>
          </div>
        </FadeIn>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <ScaleIn
              key={s.label}
              className="rounded-[24px] border border-border  p-7 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center shadow-[0_12px_40px_-8px_rgba(217,156,29,0.45)]"
                  style={{
                    background:
                      "linear-gradient(180deg, color-mix(in oklab, var(--gold) 96%, #fff) 0%, color-mix(in oklab, var(--gold) 88%, #000) 100%)",
                  }}
                >
                  <s.Icon />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-semibold text-yellow-500">{s.value}</div>
                  <div className="mt-1 text-sm text-foreground/70">{s.label}</div>
                </div>
              </div>
            </ScaleIn>
          ))}
        </Stagger>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 pt-12 md:pt-16 pb-8">
        <FadeIn>
          <div className="text-center">
            <span className="text-xs font-semibold tracking-wider text-[color:var(--gold)] uppercase">
              Our foundation
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Our core values
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-foreground/70">
              The principles that guide everything we do
            </p>
          </div>
        </FadeIn>

        <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <MotionItem
              key={v.title}
              className="rounded-[24px] border border-border  p-8 shadow-sm"
            >
              <div className="flex flex-col items-center text-center">
                <span className="block h-1.5 w-14 rounded-full bg-[color:var(--gold)]/90 mb-6" />
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg border border-border flex items-center justify-center">
                    <v.Icon />
                  </div>
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                </div>
                <p className="mt-3 text-foreground/70">{v.desc}</p>
              </div>
            </MotionItem>
          ))}
        </Stagger>
      </section>

     

     
    
    </main>
  );
}

/* ---------- Icons ---------- */

// function IconLine() {
//   return <span className="block h-1 w-12 rounded-full bg-[color:var(--gold)]" />;
// }
function IconPeople() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-foreground">
      <path d="M7 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 13a3 3 0 1 0-2.999-3A3 3 0 0 0 17 13Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 20a5 5 0 0 1 10 0M11 20a5 5 0 0 1 10 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-foreground">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-foreground">
      <path d="M12 21s8-3.5 8-10V6l-8-3-8 3v5c0 6.5 8 10 8 10Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-foreground"
    >
      <path
        d="M12 3 14.9 8.6 21 9.6 16.5 13.9 17.5 20 12 17.2 6.5 20 7.5 13.9 3 9.6 9.1 8.6 12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconGuide() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-foreground">
      <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconRibbon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-foreground"
    >
      <circle
        cx="12"
        cy="9"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 13.5 8 21l4-2 4 2-1.5-7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconHotel() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-foreground">
      <path d="M3 20h18M6 20V6h12v14M8 10h2m4 0h2M8 14h2m4 0h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-foreground">
      <path d="M20.8 8.6a5.5 5.5 0 0 0-9.7-3.8L11 5l-.1-.2A5.5 5.5 0 1 0 4 15l8 6 8-6a5.5 5.5 0 0 0 .8-6.4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-foreground">
      <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 13a3.5 3.5 0 1 0 0-7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 21a6.5 6.5 0 0 1 13 0M12 21a6 6 0 0 1 9 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Content ---------- */

const stats = [
  { value: "500+", label: "Blessed travelers", Icon: IconPeople },
  { value: "50+", label: "Successful journeys", Icon: IconGlobe },
  { value: "100%", label: "Visa success rate", Icon: IconShield },
  { value: "4.9/5", label: "Average rating", Icon: IconStar },
] as const;

const features = [
  {
    title: "Experienced tour guides",
    desc:
      "Our knowledgeable guides with decades of experience understand your needs and make your spiritual journey smooth and meaningful.",
    Icon: IconGuide,
  },
  {
    title: "Educational Seerah tours and spiritual seminars",
    desc:
      "Pre-departure preparation sessions and guided tours covering all rituals, Islamic history and spiritual guidance for your journey.",
    Icon: IconRibbon,
  },
  {
    title: "Luxury hotels near Haram",
    desc:
      "Stay in premium 5-star accommodation within walking distance of the Holy Mosques of Makkah and Madinah.",
    Icon: IconHotel,
  },
  {
    title: "Complete travel package",
    desc:
      "Everything included: visa processing, airfare, luxury hotel accommodations, and ground transportation for a hassle-free experience.",
    Icon: IconGlobe,
  },
  {
    title: "Hajj planning and advice",
    desc:
      "Expert guidance for Hajj planning and advisory services that prepare you for the journey of a lifetime.",
    Icon: IconHeart,
  },
  {
    title: "Community and support",
    desc:
      "Join a friendly community of Muslims across Europe and create lasting bonds on this blessed journey together.",
    Icon: IconUsers,
  },
] as const;

const values = [
  {
    title: "Integrity",
    desc:
      "We operate with honesty and transparency in all our dealings, ensuring trust and reliability.",
    Icon: IconShield,
  },
  {
    title: "Expertise",
    desc:
      "We strive for the highest standards in service quality, comfort and spiritual guidance.",
    Icon: IconRibbon,
  },
  {
    title: "Community",
    desc:
      "We foster a sense of belonging and support among our travelers and create lasting bonds.",
    Icon: IconUsers,
  },
] as const;

// const mission = {
//   title: "Our mission",
//   desc:
//     "To facilitate meaningful spiritual journeys to the Holy Lands by providing comprehensive, high-quality services that combine Islamic knowledge, cultural understanding and modern travel expertise.",
//   Icon: IconRibbon,
// };

// const vision = {
//   title: "Our vision",
//   desc:
//     "To be the most trusted and premium provider of Islamic pilgrimage experiences in Europe, making spiritual journeys accessible, educational and deeply enriching for all Muslims.",
//   Icon: IconStar,
// };

function GoldIcon({
  children,
  small,
  className,
}: {
  children: React.ReactNode;
  small?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${small ? "p-3 rounded-xl" : "p-3 rounded-2xl"} grid place-items-center shadow-[0_18px_50px_-15px_rgba(217,156,29,0.55)] transition-transform duration-300 ease-out ${className ?? ""}`}
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--gold) 96%, #fff) 0%, color-mix(in oklab, var(--gold) 88%, #000) 100%)",
      }}
    >
      {children}
    </div>
  );
}
