// components/blog/BlogHero.tsx
"use client";

import AnimateIn from "../common/animate-in";

const BlogHero = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0a2540] to-[#061a2b] text-white">
      <div className="container mx-auto px-4 text-center">
        <AnimateIn yOffset={50} duration={0.8}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            MetaBoostMedia Blog
          </h1>
        </AnimateIn>
        <AnimateIn yOffset={40} duration={0.8} delay={0.1}>
          <p className="text-xl md:text-2xl text-[#00d4ff] max-w-3xl mx-auto">
            Insights, strategies, and trends to help your business grow in the digital landscape.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
};

export default BlogHero;