const OurStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a2540] mb-12">
          Our Story
        </h2>
        
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-r from-[#0a2540] to-[#00d4ff] flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm12 2a2 2 0 00-2-2h-2a2 2 0 00-2 2v11a3 3 0 106 0V4zM6 17a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-[#0a2540] mb-4">Our Beginning</h3>
            <p className="text-[#666] mb-4">
              Founded in 2015, MetaBoostMedia started as a small team of digital marketing enthusiasts 
              with a vision to help businesses thrive in the digital landscape. We noticed that many 
              companies struggled to navigate the complexities of online marketing.
            </p>
            <p className="text-[#666]">
              Our mission was clear: provide comprehensive, results-driven digital marketing solutions 
              that are accessible to businesses of all sizes. We believed that every company deserved 
              the opportunity to grow and dominate their market.
            </p>
          </div>
        </div>
        
        {/* Section 2 - Reversed */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 mb-16">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-r from-[#00d4ff] to-[#0a2540] flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-[#0a2540] mb-4">Our Growth</h3>
            <p className="text-[#666] mb-4">
              Over the years, we&apos;ve grown into a full-service digital marketing agency serving clients 
              across various industries. Our team has expanded to include experts in SEO, social media, 
              paid advertising, web development, and brand strategy.
            </p>
            <p className="text-[#666]">
              What sets us apart is our commitment to data-driven strategies and personalized approaches. 
              We don&apos;t believe in one-size-fits-all solutions. Instead, we take the time to understand 
              each client&apos;s unique goals and challenges.
            </p>
          </div>
        </div>
        
        {/* Section 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-r from-[#0a2540] to-[#ff6b6b] flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-[#0a2540] mb-4">Our Future</h3>
            <p className="text-[#666] mb-4">
              As we look to the future, we remain committed to staying at the forefront of digital 
              marketing innovation. We continuously invest in training, technology, and tools to 
              ensure our clients benefit from the latest strategies and techniques.
            </p>
            <p className="text-[#666]">
              Our goal is to continue being the trusted partner that businesses rely on for 
              sustainable growth in an ever-evolving digital landscape. We&apos;re excited to help 
              more brands unlock their potential and achieve remarkable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;