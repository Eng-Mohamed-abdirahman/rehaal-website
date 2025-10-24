"use client";

import React, { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  
  Sparkles,
  Globe,
  Heart,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

// import your hero images (fix: was missing)
import heroImage1 from "@/assets/hero-kaaba.jpg";
import heroImage2 from "@/assets/madinah-mosque.jpg";
import heroImage3 from "@/assets/makkah-aerial.jpg";

type Slide = {
  id: number;
  image: StaticImageData;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  buttonText: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: heroImage1,
    icon: Sparkles,
    title: "A Journey of Faith and Peace",
    subtitle:
      "Experience Umrah and Hajj with expert guidance and spiritual comfort. A journey that renews your soul.",
    buttonText: "Explore Our Packages",},
  {
    id: 2,
    image: heroImage2,
    icon: Heart,
    title: "Sacred Moments in Madinah",
    subtitle: "Visit the Prophet's Mosque and feel the serenity of the blessed city of Madinah.",
    buttonText: "Discover Madinah",
  },
  {
    id: 3,
    image: heroImage3,
    icon: Globe,
    title: "Explore the Wonders of Makkah",
    subtitle:
      "Discover sacred landmarks and travel with comfort, clarity and care at every step.",
    buttonText: "Learn More",
  }
];

const SLIDE_SECONDS = 6;
const ZOOM_SCALE = 1.12;

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // autoplay always on
  useEffect(() => {
    const id = setInterval(next, SLIDE_SECONDS * 1000);
    return () => clearInterval(id);
  }, [index]);

  const slide = slides[index];
  const Icon = slide.icon;

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      {/* Background with zoom + cross-fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${slide.id}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: ZOOM_SCALE }}
            transition={{ duration: SLIDE_SECONDS, ease: "linear" }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/65" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slide.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl w-full text-center"
          >
            <div className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-white">
                <Icon className="h-4 w-4" style={{ color: "var(--gold)" }} />
                Your trusted spiritual partner
              </span>
            </div>

            <h1 className="font-heading text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {slide.title.split(" ").slice(0, 4).join(" ")}{" "}
              <span style={{ color: "var(--gold)" }}>
                {slide.title.split(" ").slice(4).join(" ")}
              </span>
            </h1>

            <p className="mt-4 text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              {slide.subtitle}
            </p>

            

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/90">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold">500+</div>
                <div className="text-sm">Happy pilgrims</div>
              </div>
              <div className="hidden md:block h-10 w-px bg-white/30" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold">15+</div>
                <div className="text-sm">Years experience</div>
              </div>
              <div className="hidden md:block h-10 w-px bg-white/30" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold">100%</div>
                <div className="text-sm">Satisfaction focus</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 backdrop-blur hover:bg-white/20 text-white border border-white/30 transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 backdrop-blur hover:bg-white/20 text-white border border-white/30 transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              i === index ? "opacity-100 scale-100" : "opacity-60 scale-95"
            }`}
            style={{
              backgroundColor: i === index ? "var(--gold)" : "rgba(255,255,255,0.7)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
