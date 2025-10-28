"use client";

import React, { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  location?: string;
  text: string;
  rating?: number;
  trip?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Fatima Ahmed",
    location: "Copenhagen, Denmark",
    text:
      "This journey changed my life forever. The Sacred Journeys team made everything so easy and spiritually enriching. From the moment we arrived until we returned home, we felt supported and cared for. I can't thank them enough for making my first Umrah so memorable.",
    rating: 5,
    trip: "Umrah 2024",
  },
  {
    name: "Mohammed Hassan",
    location: "Aarhus, Denmark",
    text:
      "Alhamdulillah, I performed Hajj with Sacred Journeys and it was the best decision. The guides were knowledgeable, patient, and always available to help. The accommodations were excellent, and the pre-trip seminars prepared us perfectly for the journey ahead.",
    rating: 5,
    trip: "Hajj 2023",
  },
  {
    name: "Aisha Rahman",
    location: "Odense, Denmark",
    text:
      "As a first-time Umrah pilgrim, I was nervous, but Sacred Journeys made everything smooth. The Danish-speaking guides understood our needs perfectly, and the group sessions helped us form beautiful bonds with fellow travelers. Truly a blessed experience.",
    rating: 5,
    trip: "Umrah 2024",
  },
  {
    name: "Ibrahim Malik",
    location: "Aalborg, Denmark",
    text:
      "I've traveled with other agencies before, but Sacred Journeys stands out. Their attention to detail, spiritual focus, and genuine care for pilgrims is unmatched. The hotels were close to Haram, the food was excellent, and the support was 24/7. Highly recommended!",
    rating: 5,
    trip: "Hajj 2023",
  },
  {
    name: "Khadija Syed",
    location: "Esbjerg, Denmark",
    text:
      "Sacred Journeys made my dream of performing Umrah a reality. The payment plan was flexible, the service was exceptional, and the spiritual guidance was profound. I felt like I was traveling with family. May Allah bless this team for their wonderful work.",
    rating: 5,
    trip: "Umrah 2023",
  },
  {
    name: "Yusuf Ali",
    location: "Roskilde, Denmark",
    text:
      "The best Hajj experience anyone could ask for. The team's knowledge of the rituals, the comfortable arrangements, and the brotherhood we experienced made this journey unforgettable. Already planning to go for Umrah with them next year, insha'Allah.",
    rating: 5,
    trip: "Hajj 2024",
  },
];

const Testimonials: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  // helper to clamp text lines without changing the card height wildly
  const clampText = (lines: number): React.CSSProperties => ({
    color: "var(--muted-foreground)",
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 animate-fade-in">
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "var(--gold)" }}
          >
            Testimonials
          </span>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-4">
            Stories from Our Pilgrims
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            More than 500 travelers have had an unforgettable trip
          </p>
        </div>

        {/* Horizontal carousel */}
        <div className="relative">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-16 bg-gradient-to-r from-background to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-16 bg-gradient-to-l from-background to-transparent z-20" />

          <div
            ref={scrollerRef}
            className={[
              "overlap flex overflow-x-auto pb-8 px-2 md:px-4 snap-x snap-mandatory scroll-smooth",
              "overflow-y-hidden",                 // no vertical bar
              "[scrollbar-width:none]",            // Firefox
              "[-ms-overflow-style:none]",         // IE/Edge
              "[&::-webkit-scrollbar]:hidden"      // Chrome/Safari/Opera
            ].join(" ")}
            style={{ perspective: 1200 }}
          >
            {testimonials.map((t, i) => {
              const isHovered = hovered === i;
              const someoneHovered = hovered !== null;
              const side =
                hovered !== null && hovered !== i
                  ? i < (hovered as number)
                    ? "left"
                    : "right"
                  : "none";

              const rotate =
                someoneHovered && !isHovered
                  ? side === "left"
                    ? 8
                    : side === "right"
                    ? -8
                    : 0
                  : 0;

              const offsetX =
                someoneHovered && !isHovered ? (side === "left" ? -6 : 6) : 0;

              return (
                <article
                  key={i}
                  className="snap-center shrink-0"
                  // Smaller, consistent card width across breakpoints.
                  // Mobile: up to 80vw. Desktop: cap at 320–340px.
                  style={{ width: "clamp(260px, 80vw, 340px)" }}
                >
                  <div
                    className={[
                      "relative bg-white p-6 rounded-2xl border border-border shadow-soft transition-all duration-300 will-change-transform",
                      "h-full flex flex-col",
                      isHovered
                        ? "scale-[1.03] -translate-y-1 shadow-medium"
                        : someoneHovered
                        ? "opacity-95"
                        : "",
                    ].join(" ")}
                    role="article"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      height: "clamp(240px, 34vh, 300px)",
                      transformStyle: "preserve-3d",
                      transform: `translateX(${offsetX}px) rotateY(${rotate}deg)`,
                      // make stack order like a deck, hovered on top
                      zIndex: isHovered ? 100 : i + 1,
                    }}
                  >
                    {/* Quote icon decorative */}
                    <div className="absolute top-5 right-5 opacity-10 transition-opacity">
                      <Quote className="w-10 h-10" style={{ color: "var(--gold)" }} />
                    </div>

                    {/* rating */}
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5" style={{ color: "var(--gold)" }} />
                      ))}
                    </div>

                    {/* quote text (clamp more lines on hover but keep height stable) */}
                    <p
                      className="leading-relaxed mb-5 flex-1"
                      style={isHovered ? clampText(6) : clampText(3)}
                    >
                      “{t.text}”
                    </p>

                    {/* author */}
                    <div className="border-t border-border pt-3">
                      <div className="font-semibold text-foreground">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.location}</div>
                      <div className="text-xs font-medium mt-1" style={{ color: "var(--gold)" }}>
                        {t.trip}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* scroll progress bar */}
          <div className="mt-1 h-1 rounded-full bg-muted/40 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${Math.max(6, progress * 100)}%`,
                background:
                  "linear-gradient(90deg, var(--gold) 0%, #ff6a00 60%, #00d0ff 100%)",
              }}
            />
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Testimonials;
