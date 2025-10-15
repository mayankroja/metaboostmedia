// components/TrustBar.tsx
"use client";
import Image from 'next/image';
import AnimateIn from '../common/animate-in';

const TrustBar = () => {
  // Array of client logo paths
  const clientLogos = [
    '/trustbar/1.png',
    '/trustbar/2.png',
    '/trustbar/3.png',
    '/trustbar/4.png',
    '/trustbar/5.png',
    '/trustbar/6.png'
  ];

  return (
    <section className="bg-[#f8f9fa] py-8 md:py-12">
      <div className="container mx-auto px-4">
        <AnimateIn yOffset={20} duration={0.6}>
          <div className="flex flex-col items-center">
            {/* Trust text */}
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#999] mb-6 md:mb-8">
              Trusted by Industry Leaders
            </p>

            {/* Logo grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 w-full max-w-4xl xl:max-w-6xl">
              {clientLogos.map((logo, index) => (
                <AnimateIn
                  key={index}
                  yOffset={30}
                  duration={0.5}
                  delay={0.1 * index}
                  className="flex items-center justify-center p-2 lg:px-4"
                >
                  <div className="w-full h-16 md:h-20 lg:h-24 relative filter transition-all duration-300 hover:scale-105 hover:grayscale-0 grayscale opacity-70 hover:opacity-100">
                    <Image
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      fill
                      className="object-contain rounded-md"
                      sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, (max-width: 1024px) 20vw, 16vw"
                    />
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default TrustBar;