// components/ResultsHighlight.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = '', duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const startValue = 0;
      const endValue = end;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const ResultsHighlight = () => {
  const stats = [
    {
      id: 1,
      value: 150,
      suffix: '%',
      label: 'Average ROI'
    },
    {
      id: 2,
      value: 300,
      suffix: '+',
      label: 'Clients Served'
    },
    {
      id: 3,
      value: 95,
      suffix: '%',
      label: 'Client Retention'
    },
    {
      id: 4,
      value: 12,
      suffix: 'M+',
      label: 'Revenue Generated'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#0a2540] to-[#061a2b] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="text-center p-6"
            >
              {/* Animated Number */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00d4ff] mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              
              {/* Label */}
              <p className="text-lg md:text-xl text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        {/* Additional Context */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-xl text-gray-300">
            Real results that drive business growth and deliver exceptional returns on investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsHighlight;