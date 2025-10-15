// components/ContactForm.tsx
"use client";
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import AnimateIn from '../common/animate-in';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Check if environment variables are available
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_USER_ID) {
        throw new Error('EmailJS environment variables are not configured');
      }

      if (!formRef.current) {
        throw new Error('Form reference is not available');
      }

      // Send form using EmailJS
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        formRef.current.reset();
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    { 
      type: 'text', 
      id: 'name', 
      name: 'from_name', 
      label: 'Full Name *',
      placeholder: 'Your name',
      colSpan: 'md:col-span-1'
    },
    { 
      type: 'email', 
      id: 'email', 
      name: 'from_email', 
      label: 'Email Address *',
      placeholder: 'your.email@example.com',
      colSpan: 'md:col-span-1'
    },
    { 
      type: 'text', 
      id: 'subject', 
      name: 'subject', 
      label: 'Subject *',
      placeholder: 'What is this regarding?',
      colSpan: 'md:col-span-2'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <AnimateIn yOffset={30} duration={0.6}>
        <h2 className="text-2xl font-bold text-[#0a2540] mb-6">Send us a message</h2>
      </AnimateIn>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formFields.map((field, index) => (
            <AnimateIn
              key={field.id}
              yOffset={20}
              duration={0.5}
              delay={0.1 * index}
              className={field.colSpan}
            >
              <div>
                <label htmlFor={field.id} className="block text-sm font-medium text-[#0a2540] mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-colors"
                  placeholder={field.placeholder}
                />
              </div>
            </AnimateIn>
          ))}
        </div>
        
        <AnimateIn yOffset={20} duration={0.5} delay={0.3}>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#0a2540] mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent transition-colors"
              placeholder="Tell us about your project or inquiry..."
            ></textarea>
          </div>
        </AnimateIn>
        
        {/* Submit Button */}
        <AnimateIn yOffset={20} duration={0.5} delay={0.4}>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#00d4ff] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#00b8e0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </AnimateIn>
        
        {/* Status Messages */}
        <AnimateIn yOffset={20} duration={0.5} delay={0.1}>
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg mt-4">
              Thank you for your message! We&apos;ll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg mt-4">
              Sorry, there was an error sending your message. Please try again or contact us directly.
            </div>
          )}
        </AnimateIn>
      </form>
    </div>
  );
};

export default ContactForm;