"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useMotionValue } from "framer-motion";

type Post = {
  id: string | number;
  image: string; // public path, e.g. /m1.jpg
  title?: string;
  caption?: string;
  link?: string;
};

const posts: Post[] = [
  {
    id: 1,
    image: "/m1.jpg",
    title: "rehaal.dk",
    caption:
      "🤲Excerpt of Dua for Palestine, after Friday Prayer in Masjid Al-Haram, Friday, October 18, 2024 ",
    link: "https://www.instagram.com/reel/DBRGpDHN6WM",
  },
  {
    id: 2,
    image: "/m2.jpg",
    title: "rehaal.dk",
    caption:
      "The Revelation Museum at Jabal Nour in Makkah is highly recommended. Here you follow the five most significant prophets, and finally how the Prophet ﷺ received the Quran.",
    link: "https://www.instagram.com/reel/DBOxJiTNfNq",
  },
  {
    id: 3,
    image: "/m3.jpg",
    title: "rehaal.dk",
    caption:
      "🕋Umrah during the winter holidays🕌 📅 Date: 13-23 February 2025 We now have the pleasure of announcing another Umrah trip. This one will take place during the winter holidays, and immediately before Ramadan. So join us on what in shaa Allah will be a fantastic group trip, recharge your iman and get ready for Ramadan. 💰 Prices from 16,000: The price includes: 💡Exclusive seminar before departure ✈️Flight ticket (Turkish Airlines) 📄Visa 🚎VIP transport 🏨Luxury hotels within walking distance of Haram 🍳Breakfast buffet 🌄Seerah tour in both cities 💫Evening reminders 🇩🇰Experienced, Danish-speaking tour guides 16,000 in a 4-person room. 16,900 in a 3-person room. 17,500 in a 2-person room Register at the link in bio",
    link: "https://www.instagram.com/p/DBI54QbNlUo",
  },
  {
    id: 4,
    image: "/m4.jpg",
    title: "rehaal.dk",
    caption:
      "Ibn Abbas narrated: The Messenger of Allah ﷺ said: “The best water on the face of the earth is Zamzam water. In it is food for sustenance and healing for illness.”",
    link: "https://www.instagram.com/reel/DCi-fCiuwio",
  },
  {
    id: 5,
    image: "/m5.jpg",
    title: "rehaal.dk",
    caption:
      "🕋 Umrah with Rehaal Travel - October 2024 #umrahindanish #umrah2024 #islamindanish #spiritualtravel #masjidalharam #masjidnabawi #makkah #MedinaMoments #umrahafter-years-holiday #rehaaltravel",
    link: "https://www.instagram.com/reel/DCRhYxpNVVr",
  },
  {
    id: 6,
    image: "/m6.jpg",
    title: "rehaal.dk",
    caption: "The charm of Masjid Al-Haram",
    link: "https://www.instagram.com/reel/DBZX4F7NocD",
  },
];

export default function InstagramMarquee() {
  const singleRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const currentXRef = useRef<number>(0);
  const [singleWidth, setSingleWidth] = useState<number>(0);
  const durationSeconds = 28; // adjust speed here (seconds)

  // keep current x updated
  useEffect(() => {
    const unsubscribe = x.onChange((v) => {
      currentXRef.current = typeof v === "number" ? v : parseFloat(String(v)) || 0;
    });
    return unsubscribe;
  }, [x]);

  useEffect(() => {
    const resize = () => {
      if (singleRef.current) {
        setSingleWidth(singleRef.current.getBoundingClientRect().width);
      }
    };
    resize();
    const ro = new ResizeObserver(resize);
    if (singleRef.current) ro.observe(singleRef.current);
    window.addEventListener("resize", resize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    // start looping animation when measured
    if (singleWidth > 0) {
      controls.start({
        x: [-0, -singleWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: durationSeconds,
          },
        },
      });
    }
    return () => {
      controls.stop();
    };
  }, [singleWidth, controls]);

  // pause / resume handlers using currentXRef
  const pause = () => controls.stop();
  const resume = () => {
    const start = currentXRef.current || 0;
    if (singleWidth > 0) {
      controls.start({
        x: [start, start - singleWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: durationSeconds,
          },
        },
      });
    }
  };

  const singleList = (
    <div ref={singleRef} className="flex items-stretch gap-6">
      {posts.map((p) => {
        const card = (
          <article
            key={p.id}
            className="marquee-item bg-white rounded-2xl shadow-soft border border-border overflow-hidden min-w-[300px] max-w-[340px] flex-shrink-0 group"
            role="group"
            aria-label={p.title}
          >
            <div className="relative h-48 w-full">
              <Image
                src={p.image}
                alt={p.caption ?? p.title ?? "Instagram post"}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold text-sm">{p.title}</div>
              <div className="text-xs text-muted-foreground mt-2 line-clamp-4">{p.caption}</div>
            </div>
          </article>
        );

        // wrap card in anchor when link is provided
        return p.link ? (
          <a
            key={`link-${p.id}`}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:shadow-medium transition-shadow duration-200"
            aria-label={`${p.title} - open Instagram`}
          >
            {card}
          </a>
        ) : (
          <div key={`div-${p.id}`} className="block">
            {card}
          </div>
        );
      })}
    </div>
  );

  return (
    <section aria-label="Instagram marquee" className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-center font-heading text-2xl md:text-3xl mb-6">Follow on Instagram</h3>

        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          {/* motion track — duplicate single list for seamless loop */}
          {singleWidth > 0 ? (
            <motion.div className="flex items-stretch gap-6 will-change-transform" style={{ x }} animate={controls}>
              {singleList}
              {singleList /* duplicate */}
            </motion.div>
          ) : (
            <div className="flex items-stretch gap-6">{singleList}</div>
          )}
        </div>
      </div>
    </section>
  );
}
