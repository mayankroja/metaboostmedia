// components/ResultsHighlight.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import AnimateIn from '../common/animate-in';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <AnimateIn
              key={stat.id}
              yOffset={40}
              duration={0.6}
              delay={0.1 * index}
              className="text-center p-6 md:p-8"
            >
              <div className="backdrop-blur-sm rounded-2xl transition-all duration-500 hover:transform hover:scale-105">
                {/* Animated Number */}
                <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#00d4ff] mb-3 md:mb-4">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-lg md:text-xl lg:text-2xl text-white font-medium">
                  {stat.label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Additional Context */}
        <AnimateIn yOffset={30} duration={0.7} delay={0.4}>
          <div className="text-center mt-12 max-w-3xl lg:max-w-4xl mx-auto">
            <p className="text-medium md:text-xl text-gray-300 leading-relaxed">
              Real results that drive business growth and deliver exceptional returns on investment for our clients worldwide.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default ResultsHighlight;