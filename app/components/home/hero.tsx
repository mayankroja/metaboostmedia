// components/HeroSection.tsx
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 flex items-center justify-center bg-gradient-to-b from-[#f8f9fa] to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a2540] leading-tight mb-6">
              Drive Growth & Dominate Your Market.
            </h1>
            <p className="text-lg md:text-xl text-[#666] mb-8">
              MetaBoostMedia is your all-in-one partner for results-driven SEO, social media, and web design strategies.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/services"
                className="bg-[#00d4ff] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:bg-[#00b8e0] transition-colors shadow-md text-center"
              >
                View Our Services
              </Link>
              <Link
                href="/blog"
                className="border-2 border-[#0a2540] text-[#0a2540] px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:bg-[#0a2540] hover:text-white transition-colors text-center"
              >
                See Case Studies
              </Link>
            </div>
          </div>
          
          {/* Graphic */}
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-md">
              {/* Abstract graph/network illustration */}
              <svg viewBox="0 0 500 400" className="w-full h-auto">
                {/* Network lines */}
                <path 
                  d="M50,350 C150,250 200,150 300,100 C400,50 450,150 450,250" 
                  stroke="#0a2540" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeDasharray="5,5"
                />
                <path 
                  d="M100,300 C150,200 250,50 350,80 C450,110 400,200 400,300" 
                  stroke="#00d4ff" 
                  strokeWidth="3" 
                  fill="none"
                />
                
                {/* Data points/nodes */}
                <circle cx="50" cy="350" r="10" fill="#0a2540" />
                <circle cx="100" cy="300" r="10" fill="#00d4ff" />
                <circle cx="300" cy="100" r="15" fill="#0a2540" />
                <circle cx="350" cy="80" r="15" fill="#00d4ff" />
                <circle cx="450" cy="250" r="10" fill="#0a2540" />
                <circle cx="400" cy="300" r="10" fill="#00d4ff" />
                
                {/* Growing arrow */}
                <path 
                  d="M250,200 L270,180 L290,200 L270,220 Z" 
                  fill="#ff6b6b" 
                />
                <path 
                  d="M250,200 L350,200" 
                  stroke="#ff6b6b" 
                  strokeWidth="3" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;