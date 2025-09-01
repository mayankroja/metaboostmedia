// components/blog/NewsletterSignup.tsx
"use client";

import { useState } from 'react';
import emailjs from 'emailjs-com';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Replace with your EmailJS service details
      await emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_NEWSLETTER_TEMPLATE_ID',
        {
          to_email: 'your-email@example.com', // Your email to receive subscriptions
          subscriber_email: email,
          subject: 'New Newsletter Subscription',
          message: `New newsletter subscription from: ${email}`
        },
        'YOUR_PUBLIC_KEY'
      );
      
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#0a2540] to-[#061a2b] p-6 rounded-lg text-white">
      <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
      <p className="text-sm mb-4">Get the latest digital marketing insights delivered to your inbox.</p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-2 rounded-lg text-[#0a2540] bg-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className="w-full bg-[#00d4ff] text-[#0a2540] py-2 rounded-lg font-semibold hover:bg-[#00b8e0] transition-colors disabled:opacity-50"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {message && (
        <p className={`mt-3 text-sm ${status === 'error' ? 'text-red-300' : 'text-green-300'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;