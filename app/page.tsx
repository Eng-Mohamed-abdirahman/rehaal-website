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
      {/* vertical spacing between sections */}
      <main className="space-y-16 sm:space-y-20">
        <section className="container mx-auto px-4 sm:px-8 lg:px-10 py-12 sm:py-16">
          <About />
        </section>
        <section className="container mx-auto px-4 sm:px-8 lg:px-10 py-12 sm:py-16">
          <WhyChooseUs />
        </section>
        <section className="container mx-auto px-4 sm:px-8 lg:px-10 py-12 sm:py-16">
          <Testimonials />
        </section>
        <section className="container mx-auto px-4 sm:px-8 lg:px-10 py-12 sm:py-16">
          <InstagramMarquee />
        </section>
      </main>
      <section className="container mx-auto px-4 sm:px-8 lg:px-10 py-12 sm:py-16">
        <FAQsThree />
      </section>
      <Footer />
    </div>
  );
};

export default page;
