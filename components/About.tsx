"use client";
import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { packages } from "../app/data/packages"; // map cards to package ids

// Simple reveal-on-scroll hook
function useInView<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect users who prefer reduced motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

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

const About = () => {
  const features = [
    {
      title: "19/12-29/12 2025 ",
      description: "From 17,000-",
      image: "umrah.avif",
    },
    {
      title: "30/1-9/2 2026",
      description: "From 17,000-",
      image: "umrah.avif",
    },
  ];

  const { ref: contentRef, inView: contentInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="section-padding bg-background pt-16">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            ref={contentRef}
            className={[
              "space-y-6",
              "transition-all duration-700 ease-out will-change-transform",
              contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              "motion-reduce:transition-none motion-reduce:transform-none",
            ].join(" ")}
          >
            <div className="inline-block">
              <div className="inline-flex items-center gap-3 bg-yellow-100 border border-yellow-200 px-3 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-yellow-700" aria-hidden />
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  About Sacred Journeys
                </span>
              </div>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Find your Trip
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When Prophet Ibrahim (peace be upon him) was ordered to call out to everyone to visit
              the House of Allah, he was worried that no one would hear him. But they did.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Because Allah ﷻ sent that message around the world across generations, and now you
              have landed here. The message has also reached you. In fact, you are now on the verge
              of possibly the greatest journey you will ever take.
            </p>
          </div>

          {/* Features Grid */}
          <div
            ref={gridRef}
            className={[
              "grid sm:grid-cols-2 gap-6",
              "motion-reduce:transition-none motion-reduce:transform-none",
            ].join(" ")}
          >
            {features.map((feature, index) => {
              const pkg = packages[index];
              const href = pkg ? `/packages/${pkg.id}` : "/packages";
              const label = pkg ? `Open details for ${pkg.title}` : "Open packages";

              return (
                <Link key={index} href={href} aria-label={label} className="group block">
                  <div
                    className={[
                      "relative rounded-xl overflow-hidden border border-border",
                      "transition-all duration-700 ease-out will-change-transform",
                      gridInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-[0.98]",
                      "hover:shadow-xl hover:-translate-y-0.5",
                    ].join(" ")}
                    style={{
                      animationDelay: `${index * 0.12}s`,
                      transitionDelay: gridInView ? `${index * 120}ms` : "0ms",
                      minHeight: 180,
                    }}
                  >
                    {/* background image (cover) */}
                    <div
                      className="absolute inset-0 bg-cover bg-center will-change-transform transition-transform duration-500 ease-out group-hover:scale-110 origin-center"
                      style={{ backgroundImage: `url(${feature.image})` }}
                      aria-hidden
                    />

                    {/* dark overlay */}
                    <div
                      className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50"
                      aria-hidden
                    />

                    {/* content on top */}
                    <div className="relative p-6 h-full flex flex-col justify-end">
                      <h3 className="font-heading text-xl font-semibold text-white mb-2 drop-shadow">
                        {feature.title}
                      </h3>

                      <p className="text-sm bg-gray-800 text-white/90 border border-gray-700 px-3 py-1 rounded-md w-max drop-shadow">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;