// components/OurStory.tsx
"use client";
import AnimateIn from "../common/animate-in";

const OurStory = () => {
  const storySections = [
    {
      title: "Our Beginning",
      description: [
        "Founded in 2015, MetaBoostMedia started as a small team of digital marketing enthusiasts with a vision to help businesses thrive in the digital landscape. We noticed that many companies struggled to navigate the complexities of online marketing.",
        "Our mission was clear: provide comprehensive, results-driven digital marketing solutions that are accessible to businesses of all sizes. We believed that every company deserved the opportunity to grow and dominate their market."
      ],
      gradient: "from-[#0a2540] to-[#00d4ff]",
      icon: (
        <svg className="w-24 h-24 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm12 2a2 2 0 00-2-2h-2a2 2 0 00-2 2v11a3 3 0 106 0V4zM6 17a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      ),
      reverse: false
    },
    {
      title: "Our Growth",
      description: [
        "Over the years, we've grown into a full-service digital marketing agency serving clients across various industries. Our team has expanded to include experts in SEO, social media, paid advertising, web development, and brand strategy.",
        "What sets us apart is our commitment to data-driven strategies and personalized approaches. We don't believe in one-size-fits-all solutions. Instead, we take the time to understand each client's unique goals and challenges."
      ],
      gradient: "from-[#00d4ff] to-[#0a2540]",
      icon: (
        <svg className="w-24 h-24 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      reverse: true
    },
    {
      title: "Our Future",
      description: [
        "As we look to the future, we remain committed to staying at the forefront of digital marketing innovation. We continuously invest in training, technology, and tools to ensure our clients benefit from the latest strategies and techniques.",
        "Our goal is to continue being the trusted partner that businesses rely on for sustainable growth in an ever-evolving digital landscape. We're excited to help more brands unlock their potential and achieve remarkable results."
      ],
      gradient: "from-[#0a2540] to-[#ff6b6b]",
      icon: (
        <svg className="w-24 h-24 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
        </svg>
      ),
      reverse: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimateIn yOffset={50} duration={0.8}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a2540] mb-12">
            Our Story
          </h2>
        </AnimateIn>
        
        {storySections.map((section, index) => (
          <div 
            key={index}
            className={`flex flex-col lg:flex-row items-center justify-between gap-12 mb-16 ${
              section.reverse ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <AnimateIn 
              yOffset={40} 
              xOffset={section.reverse ? 30 : -30} 
              duration={0.7} 
              delay={0.1 * index}
              className="lg:w-1/2"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <div className={`aspect-video bg-gradient-to-r ${section.gradient} flex items-center justify-center`}>
                  {section.icon}
                </div>
              </div>
            </AnimateIn>
            
            {/* Text Content */}
            <AnimateIn 
              yOffset={40} 
              xOffset={section.reverse ? -30 : 30} 
              duration={0.7} 
              delay={0.1 * index + 0.1}
              className="lg:w-1/2"
            >
              <h3 className="text-2xl font-bold text-[#0a2540] mb-4">{section.title}</h3>
              {section.description.map((paragraph, pIndex) => (
                <AnimateIn
                  key={pIndex}
                  yOffset={20}
                  duration={0.5}
                  delay={0.1 * index + 0.2 + pIndex * 0.05}
                >
                  <p className="text-[#666] mb-4">{paragraph}</p>
                </AnimateIn>
              ))}
            </AnimateIn>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStory;