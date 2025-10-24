import About from "@/components/About";
import FAQsThree from "@/components/faqs-3";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InstagramMarquee from "@/components/InstagramMarquee";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/whyChooseUs";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen ">
      <Navigation />
      <section>
        <Hero />
      </section>
      <main className="px-4 sm:px-6 lg:px-8">
        {/* Add vertical padding around each component for consistent spacing */}

        <section className="py-12 sm:py-16">
          <About />
        </section>
        <section className="py-12 sm:py-16">
          <WhyChooseUs />
        </section>
        <section className="">
          <Testimonials />
        </section>
        <section className="py-12 sm:py-16">
          <InstagramMarquee />
        </section>
      </main>
        <FAQsThree />
        <Footer />
    </div>
  );
};

export default page;
