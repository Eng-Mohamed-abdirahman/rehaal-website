"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Users, BookOpen, Bed, Package, MapPin, Heart, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: string;
  image: string;
};

// Reveal-on-scroll hook (typed and reusable)
function useInView<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px", ...(options || {}) }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

const features: Feature[] = [
  {
    icon: Users,
    title: "Experienced Danish-speaking tour guides",
    description:
      "With decades of work in da'awa and many hajj and umrah trips on our CV, we are ready to make this the most memorable experience of your life. A landmark experience that will define you as a person going forward in your life, and which will help shape you as a human being.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaatW_3zKzMKaaQI5eqh-RlVBqlMX4ZeDF0Q&s",
  },
  {
    icon: BookOpen,
    title: "Exclusive seminar",
    description:
      "We will thoroughly prepare you before departure, with an exclusive Umrah seminar developed by rehaab  Travel, which will answer all your questions and get you ready for the trip of a lifetime.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9ugA6CWFksyJSPTBnP39Bm90pGXXLLwSYg&s",
  },
  {
    icon: Bed,
    title: "Luxury hotels",
    description:
      "We always make sure we stay in the best hotels, close to the Haram in both Makkah and Medina. So that you can focus on your worship and rituals, without having to think about the practicalities.",
    image:
      "https://www.hotelsinmakkah.com/images/blogs/top-hotels-in-makkah-with-walkable-travel-guide-umrah-destination.jpg",
  },
  {
    icon: Package,
    title: "Complete package",
    description:
      "You don't have to think about any of the practicalities — we take care of everything: flights, hotels, visas and local transport.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYbZ9yrAdUWbWYDyplID9p8TxE9No7G2Yvw&s",
  },
  {
    icon: MapPin,
    title: "Reminders and tours",
    description:
      "During our trips we organize Seerah tours to historical sites in Makkah and Madina and offer educational reminders and reflection sessions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ7qDOoIEs0ed4P2-qwUEJEQXm8Pb_GlDbw&s",
  },
  {
    icon: Heart,
    title: "Unique community",
    description:
      "Our journeys are about much more than rituals. The program fosters togetherness and mutual support so everyone benefits from the experience.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWBT_mrdYULJXQ8vnhXLX2F_rXSzUWRb4Eg&s",
  },
];

type FeatureCardProps = { feature: Feature; idx: number };

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, idx }) => {
  const { ref, inView } = useInView<HTMLElement>();
  const Icon = feature.icon;

  return (
    <article
      ref={ref}
      className={[
        "group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-lg hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        "transition-all duration-700 ease-out",
      ].join(" ")}
      role="button"
      tabIndex={0}
      aria-label={feature.title}
      style={{ minHeight: 360, transitionDelay: `${idx * 90}ms` }}
    >
      {/* Background image with hover zoom */}
      <div className="absolute inset-0">
        <Image
          src={feature.image}
          alt=""
          fill
          unoptimized
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform select-none pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/75"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-7 flex flex-col justify-start text-left">
        <div
          className={[
            "mb-5 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm bg-yellow-500/95 text-white",
            "transition-transform duration-500",
            inView ? "translate-y-0" : "translate-y-2",
          ].join(" ")}
          aria-hidden
          style={{ transitionDelay: `${idx * 90 + 120}ms` }}
        >
          <Icon className="w-6 h-6" />
        </div>

        <h3
          className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-2"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
        >
          {feature.title}
        </h3>
        <p
          className="text-white/95 text-base md:text-[17px] font-semibold leading-relaxed"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.55)" }}
        >
          {feature.description}
        </p>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </article>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-background py-20">
      <div className="container mx-auto container-padding text-center max-w-6xl">
        <div className="mb-6">
          <div className="inline-flex items-center gap-3 bg-yellow-100 border border-yellow-200 px-3 py-2 rounded-full w-max mx-auto">
            <Sparkles className="w-4 h-4 text-yellow-700" aria-hidden />
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              Your Trusted Spiritual Partner
            </span>
          </div>
        </div>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
          Why travel with us?
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          We combine spiritual excellence with practical expertise to make your pilgrimage
          unforgettable — comfortable hotels, trusted guides and full logistical support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <FeatureCard key={idx} feature={f} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;