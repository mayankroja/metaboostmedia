// components/ServicesSnapshot.tsx
"use client";
import Link from "next/link";
import AnimateIn from "../common/animate-in";

const ServicesSnapshot = () => {
  const services = [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      description: "Increase your visibility and organic traffic with our data-backed SEO strategies.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      link: "/services#seo"
    },
    {
      id: 2,
      title: "Paid Advertising (PPC)",
      description: "Drive immediate results with targeted advertising campaigns across multiple platforms.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: "/services#ads"
    },
    {
      id: 3,
      title: "Web Design & Development",
      description: "Create stunning, high-performance websites that convert visitors into customers.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      link: "/services#web"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimateIn yOffset={40} duration={0.7}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimateIn
              key={service.id}
              yOffset={50}
              duration={0.6}
              delay={0.1 * index}
            >
              <div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="text-[#00d4ff] mb-4">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#0a2540] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#666] mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={service.link}
                  className="text-[#00d4ff] font-medium flex items-center justify-center group"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* View All Services Button */}
        <AnimateIn yOffset={30} duration={0.7} delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-[#00d4ff] text-white px-8 py-3 rounded-full font-medium hover:bg-[#00b8e0] transition-colors shadow-md"
            >
              View All Services
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default ServicesSnapshot;