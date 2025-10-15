// components/ContactLayout.tsx
"use client";
import ContactForm from "./contactform";
import ContactInfo from "./contactinfo";
import AnimateIn from "../common/animate-in";

const ContactLayout = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimateIn yOffset={50} duration={0.8}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-xl text-[#666] max-w-2xl mx-auto">
              Ready to grow your business? Get in touch with us today and let&apos;s discuss how we can help you achieve your goals.
            </p>
          </div>
        </AnimateIn>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Form */}
          <AnimateIn 
            yOffset={40} 
            xOffset={-30} 
            duration={0.7} 
            delay={0.2}
            className="lg:w-1/2"
          >
            <ContactForm />
          </AnimateIn>
          
          {/* Right Column - Contact Info & Map */}
          <AnimateIn 
            yOffset={40} 
            xOffset={30} 
            duration={0.7} 
            delay={0.3}
            className="lg:w-1/2"
          >
            <ContactInfo />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default ContactLayout;