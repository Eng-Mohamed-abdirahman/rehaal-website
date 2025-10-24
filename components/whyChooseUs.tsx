import React from "react";
import {
  Users,
  BookOpen,
  Bed,
  Package,
  MapPin,
  Heart,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: string;
};

const features: Feature[] = [
  {
    icon: Users,
    title: "Experienced Danish-speaking tour guides",
    description:
      "With decades of work in da'awa and many hajj and umrah trips on our CV, we are ready to make this the most memorable experience of your life. A landmark experience that will define you as a person going forward in your life, and which will help shape you as a human being.",
  },
  {
    icon: BookOpen,
    title: "Exclusive seminar",
    description:
      "We will thoroughly prepare you before departure, with an exclusive Umrah seminar developed by Rehaal Travel, which will answer all your questions and get you ready for the trip of a lifetime. ",
  },
  {
    icon: Bed,
    title: "Luxury hotels",
    description:
      "We always make sure we stay in the best hotels, close to the Haram in both Makkah and Medina. So that you can focus on your worship and rituals, without having to think about the practicalities.",
  },
  {
    icon: Package,
    title: "Complete package",
    description:
      "You don't have to think about any of the practicalities — we take care of everything: flights, hotels, visas and local transport.",
  },
  {
    icon: MapPin,
    title: "Reminders and tours",
    description:
      "During our trips we organize Seerah tours to historical sites in Makkah and Madina and offer educational reminders and reflection sessions.",
  },
  {
    icon: Heart,
    title: "Unique community",
    description:
      "Our journeys are about much more than rituals. The program fosters togetherness and mutual support so everyone benefits from the experience.",
  },
];

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
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <article
                key={idx}
                className="group relative rounded-2xl bg-card border border-border p-8 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                role="button"
                tabIndex={0}
                aria-label={f.title}
              >
                {/* row layout: icon on the left, content on the right (all left-aligned) */}
                <div className="items-start space-y-4 text-left">
                  <div className="flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                      style={{
                        background: "var(--gold)",
                        color: "var(--ivory)",
                        boxShadow: "0 8px 24px rgba(16,24,40,0.08)",
                      }}
                      aria-hidden
                    >
                      <Icon className="w-6 h-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6" />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-balance">
                      {f.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;