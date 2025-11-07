import * as React from "react";
import Image from "next/image";
import { FadeIn, Stagger, MotionItem } from "../../components/motion-reveal";

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
            src="data:image/jpeg;base64,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j+GpobMkwPKt5cLdtC8ArnzQkzqpI9vKv41JcA4Hft4S/YN1GtswK+T4SSM/XWQBp8/fS8NyXfVGUvaJM9W7f7aLHJd8Wype1JM7t+mrobKhwfB3rOCFmy6eWcjsCTJYMSV2Oubr1+VQOB4LikwuJsi+p8Ukt5dJOUNOkiQu/TtWqYXlG+qZS1v+Zu/+2hOULwzjNb83q3b/AG00W2QGNxV4quW0qlSGBLZhO20DoTWPfaFgGtY66SBFw+IIEDzfF88wJPv619Cjla9lAzW9I6t0/wCNQ/H/ALN2xTKbnhNlmJZ9JiYgegqCzG+BcCe/btXxdghhpl28LKiiR/pUVceH8FvpxBsQl4DOIZSpIKEDyTI0BiD6Crjw37NnsIUQ2lEzAZyJ+a1KWeUL6sGzW9o3b9NXRLZS7vDbn7TZui5BVGt/CYIkmCJ/KnuIs32L57u+UpCgZSrKdPXTrNWm5ynfMea3oZ3b9Nd3eVbxA81vfu36aWhsrpwzvaNu4+cMhVgRGhBB69T+VM+HYUrhUts05bVtT2YoAOo28tXD/K9/+K39W/TTROTcQBGe19W9/wCGqmHsrGHHhnP33OgJBBEEgTGpP07U4w2MKnKCdevXQZe3oPpVgbk7EFYz2vq36aS/yViJ+O19W/TWbGyHfi5HSfn/AOKRvcQLgGI+IGI7d49fwqcfkfEH71r+Zv014OR8REZrW8/E/wA/u00NkT/iBdfXfedR8qbXcc1xgGiBMaD+lT1rkbEAg57X8z/prwci4gEHPa/mf9NNDZWLpMMswGbNpAIOswR7/jRVpu8j4g/ftb92/TRWk0YxNCooormdQooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooAooooD/9k=" // replace with your hero image
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
function IconShield() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-black">
      <path d="M12 22s9-4 9-11V6l-9-4-9 4v5c0 7 9 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconHeadset() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-black">
      <path d="M4 13v-2a8 8 0 1 1 16 0v2M4 13a2 2 0 0 0 2 2h2v-4H6a2 2 0 0 0-2 2Zm16 0a2 2 0 0 1-2 2h-2v-4h2a2 2 0 0 1 2 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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