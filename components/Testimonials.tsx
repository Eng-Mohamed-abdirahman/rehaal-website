"use client";

import React from "react";
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
  return (
    <section id="testimonials" className="section-padding"  >
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--gold)" }}>
            Testimonials
          </span>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Stories from Our Pilgrims
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
           More than 500 travelers have had an unforgettable trip
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div
                className="bg-white p-8 rounded-2xl shadow-soft transition-shadow duration-400 border border-border h-full flex flex-col relative hover:shadow-medium hover:border-primary/30"
                role="article"
              >
                {/* Quote icon decorative */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16" style={{ color: "var(--gold)" }} />
                </div>

                {/* rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating ?? 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ color: "var(--gold)" }} />
                  ))}
                </div>

                {/* quote text */}
                <p
                  className="text-muted-foreground leading-relaxed mb-6 flex-1"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-xs font-medium mt-1" style={{ color: "var(--gold)" }}>
                    {testimonial.trip}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

       
       
      </div>
    </section>
  );
};

export default Testimonials;
