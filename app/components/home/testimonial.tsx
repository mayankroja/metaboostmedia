// components/Testimonial.tsx
"use client";
import { useState, useEffect } from 'react';
import AnimateIn from '../common/animate-in';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  title: string;
  company: string;
}

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "MetaBoostMedia transformed our online presence. Our leads have doubled in just three months! Their team took the time to understand our vision and provided a clear roadmap to success.",
      name: "Karan Gulati",
      title: "CEO",
      company: "ZenithConsultants"
    },
    {
      id: 2,
      text: "The digital marketing strategies delivered by MetaBoostMedia exceeded our expectations. Their attention to detail and problem-solving skills are truly impressive.",
      name: "Sagar Arora",
      title: "Marketing Director",
      company: "Mind Magic"
    },
    {
      id: 3,
      text: "Working with MetaBoostMedia transformed our SEO performance. Our organic traffic increased by 225% in just six months. Their team was responsive and professional throughout.",
      name: "Saurabh Gupta",
      title: "E-commerce Manager",
      company: "StyleHub"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimateIn yOffset={40} duration={0.7}>
          <h2 className="text-3xl font-bold text-center text-[#0a2540] mb-12">
            What Our Clients Say
          </h2>
        </AnimateIn>

        <AnimateIn yOffset={30} duration={0.8} delay={0.2}>
          <div className="max-w-4xl mx-auto relative">
            {/* Large quotation mark background */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-8xl font-serif text-[#00d4ff] opacity-20 pointer-events-none">
              &ldquo;
            </div>

            {/* Testimonial content */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <blockquote className="text-xl md:text-2xl text-center text-[#0a2540] leading-relaxed mb-8 px-4 md:px-12">
                      {testimonial.text}
                    </blockquote>

                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {/* Avatar placeholder with initials */}
                        <div className="w-16 h-16 rounded-full bg-[#00d4ff] flex items-center justify-center text-white text-xl font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>

                      <p className="font-semibold text-[#0a2540]">{testimonial.name}</p>
                      <p className="text-sm text-[#666]">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-2 shadow-md text-[#0a2540] hover:text-[#00d4ff] transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-2 shadow-md text-[#0a2540] hover:text-[#00d4ff] transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicator dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-[#00d4ff]' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default TestimonialSection;