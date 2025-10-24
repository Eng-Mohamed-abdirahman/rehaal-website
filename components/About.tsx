import { Sparkles } from "lucide-react";

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

  return (
    <section id="about" className="section-padding bg-background pt-16">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
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
              When Prophet Ibrahim (peace be upon him) was ordered to call out to everyone to visit the House of Allah, he was worried that no one would hear him. But they did.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Because Allah ﷻ sent that message around the world across generations, and now you have landed here. The message has also reached you. In fact, you are now on the verge of possibly the greatest journey you will ever take.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-scale-in">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden transition-all duration-300 border border-border"
                style={{ animationDelay: `${index * 0.1}s`, minHeight: 180 }}
              >
                {/* background image (cover) */}
                <div
                  className="absolute inset-0 bg-cover bg-center will-change-transform"
                  style={{ backgroundImage: `url(${feature.image})` }}
                  aria-hidden
                />

                {/* dark overlay like the screenshot */}
                <div className="absolute inset-0 bg-black/40" aria-hidden />

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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
