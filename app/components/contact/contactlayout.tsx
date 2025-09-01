import ContactForm from "./contactform";
import ContactInfo from "./contactinfo";


const ContactLayout = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-xl text-[#666] max-w-2xl mx-auto">
            Ready to grow your business? Get in touch with us today and let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Form */}
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
          
          {/* Right Column - Contact Info & Map */}
          <div className="lg:w-1/2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLayout;