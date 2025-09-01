// components/ServiceTabs.tsx
"use client";
import { useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  included: string[];
  process: string[];
}

const ServiceTabs = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services: Service[] = [
    {
      id: "seo",
      title: "SEO & Content Marketing",
      description: "Increase your visibility and organic traffic with our data-backed SEO strategies and content that converts.",
      included: [
        "Comprehensive SEO audit",
        "Keyword research & strategy",
        "On-page optimization",
        "Content creation & optimization",
        "Technical SEO implementation",
        "Monthly performance reporting"
      ],
      process: [
        "Discovery & analysis of your current SEO performance",
        "Strategy development tailored to your business goals",
        "Implementation of SEO improvements and content creation",
        "Ongoing optimization and performance monitoring"
      ]
    },
    {
      id: "social",
      title: "Social Media Management",
      description: "Build your brand presence and engage your audience with strategic social media campaigns.",
      included: [
        "Social media strategy development",
        "Content calendar creation",
        "Daily posting & engagement",
        "Community management",
        "Performance analytics",
        "Monthly strategy refinement"
      ],
      process: [
        "Audit of current social presence and competitor analysis",
        "Platform-specific strategy development",
        "Content creation and scheduling",
        "Active engagement and community building",
        "Performance analysis and optimization"
      ]
    },
    {
      id: "ads",
      title: "Paid Advertising (PPC)",
      description: "Drive immediate results with targeted advertising campaigns across multiple platforms.",
      included: [
        "Campaign strategy development",
        "Audience targeting & segmentation",
        "Ad creation & optimization",
        "Landing page development",
        "A/B testing implementation",
        "ROI tracking & reporting"
      ],
      process: [
        "Goal setting and budget planning",
        "Audience research and targeting strategy",
        "Ad creation and campaign setup",
        "Continuous optimization based on performance data",
        "Detailed ROI reporting and analysis"
      ]
    },
    {
      id: "web",
      title: "Web Design & Development",
      description: "Create stunning, high-performance websites that convert visitors into customers.",
      included: [
        "UX/UI design",
        "Responsive website development",
        "E-commerce solutions",
        "Website optimization",
        "CMS integration",
        "Ongoing maintenance & support"
      ],
      process: [
        "Discovery and requirements gathering",
        "Wireframing and design approval",
        "Development and implementation",
        "Testing and quality assurance",
        "Launch and ongoing support"
      ]
    },
    {
      id: "brand",
      title: "Brand Strategy",
      description: "Develop a cohesive brand identity that resonates with your target audience.",
      included: [
        "Brand audit & positioning",
        "Visual identity development",
        "Brand guidelines creation",
        "Messaging strategy",
        "Competitive analysis",
        "Implementation roadmap"
      ],
      process: [
        "Brand discovery and audience research",
        "Positioning strategy development",
        "Visual identity and messaging creation",
        "Guideline documentation",
        "Implementation planning and support"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0a2540] mb-12">
          Our Services
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab List - Vertical on desktop, hidden on mobile */}
          <div className="lg:w-1/3">
            <div className="hidden lg:flex flex-col space-y-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`text-left p-4 rounded-lg transition-colors ${
                    index === activeService
                      ? 'bg-[#f0fdff] border-l-4 border-[#00d4ff] text-[#0a2540] font-semibold'
                      : 'bg-gray-50 text-[#666] hover:bg-gray-100'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
            
            {/* Accordion - Visible on mobile, hidden on desktop */}
            <div className="lg:hidden space-y-4">
              {services.map((service, index) => (
                <div key={service.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveService(index === activeService ? -1 : index)}
                    className={`w-full text-left p-4 flex justify-between items-center ${
                      index === activeService
                        ? 'bg-[#f0fdff] text-[#0a2540] font-semibold'
                        : 'bg-white text-[#666]'
                    }`}
                  >
                    {service.title}
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        index === activeService ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {index === activeService && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <ServiceContent service={service} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Content Panel - Visible on desktop, hidden on mobile */}
          <div className="lg:w-2/3 hidden lg:block">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <ServiceContent service={services[activeService]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceContent = ({ service }: { service: Service }) => {
  return (
    <>
      <h3 className="text-2xl font-bold text-[#0a2540] mb-4">
        {service.title}
      </h3>
      
      <p className="text-[#666] mb-6">
        {service.description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold text-[#0a2540] mb-4 flex items-center">
            <svg className="w-5 h-5 text-[#00d4ff] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            What&apos;s Included
          </h4>
          
          <ul className="space-y-2">
            {service.included.map((item, index) => (
              <li key={index} className="text-[#666] flex items-start">
                <svg className="w-4 h-4 text-[#00d4ff] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-[#0a2540] mb-4 flex items-center">
            <svg className="w-5 h-5 text-[#00d4ff] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Our Process
          </h4>
          
          <ol className="space-y-3">
            {service.process.map((step, index) => (
              <li key={index} className="text-[#666] flex">
                <span className="bg-[#00d4ff] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <button className="bg-[#00d4ff] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#00b8e0] transition-colors">
          Get a Quote for {service.title}
        </button>
      </div>
    </>
  );
};

export default ServiceTabs;