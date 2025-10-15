// components/ServicesHero.tsx
"use client";
import AnimateIn from "../common/animate-in";

const ServicesHero = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn yOffset={50} duration={0.8} delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a2540] mb-6">
              Our Services
            </h1>
          </AnimateIn>
          
          <AnimateIn yOffset={40} duration={0.8} delay={0.2}>
            <p className="text-xl md:text-2xl text-[#666] leading-relaxed">
              Comprehensive digital marketing solutions tailored to your business goals.
            </p>
          </AnimateIn>
        </div>

        {/* Additional decorative elements */}
        <AnimateIn yOffset={30} duration={0.7} delay={0.3}>
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-[#00d4ff] rounded-full"></div>
          </div>
        </AnimateIn>

        {/* Stats preview - optional but adds credibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { value: "150%", label: "Average ROI" },
            { value: "300+", label: "Clients Served" },
            { value: "95%", label: "Client Retention" }
          ].map((stat, index) => (
            <AnimateIn
              key={index}
              yOffset={40}
              duration={0.6}
              delay={0.4 + index * 0.1}
            >
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-[#00d4ff] mb-2">{stat.value}</div>
                <p className="text-[#666]">{stat.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;