// components/blog/BlogHero.tsx
const BlogHero = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0a2540] to-[#061a2b] text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          MetaBoostMedia Blog
        </h1>
        <p className="text-xl md:text-2xl text-[#00d4ff] max-w-3xl mx-auto">
          Insights, strategies, and trends to help your business grow in the digital landscape.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;