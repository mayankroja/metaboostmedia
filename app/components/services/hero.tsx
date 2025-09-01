// components/ServicesHero.tsx
const ServicesHero = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a2540] mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-[#666] leading-relaxed">
            Comprehensive digital marketing solutions tailored to your business goals.
          </p>
        </div>

        {/* Additional decorative elements */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-[#00d4ff] rounded-full"></div>
        </div>

        {/* Stats preview - optional but adds credibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-[#00d4ff] mb-2">150%</div>
            <p className="text-[#666]">Average ROI</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-[#00d4ff] mb-2">300+</div>
            <p className="text-[#666]">Clients Served</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-[#00d4ff] mb-2">95%</div>
            <p className="text-[#666]">Client Retention</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;