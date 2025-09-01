// components/FinalCTA.tsx
import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-6">
          Ready to Unlock Your Growth?
        </h2>
        
        <p className="text-lg text-[#666] max-w-2xl mx-auto mb-8">
          Get started with a free consultation and discover how we can help your business thrive.
        </p>
        
        <Link
          href="/contact"
          className="inline-block bg-[#ff6b6b] text-white px-8 py-4 rounded-full font-medium hover:bg-[#ff5252] transition-colors shadow-md text-lg"
        >
          Get Your Free Proposal
        </Link>
        
        {/* Additional reassurance text */}
        <p className="text-sm text-[#999] mt-6">
          No obligations, no commitments. Just expert advice.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;