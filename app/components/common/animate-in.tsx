"use client";

import { motion, useAnimationControls } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  xOffset = 0,
  className = "",
  onMouseEnter,
  onMouseLeave,
  onClick,
}: AnimateInProps) {
  const controls = useAnimationControls();
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          });
          hasAnimated.current = true;
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px" // Adjusted for better mobile performance
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      // Reset animation state when component unmounts
      controls.stop();
    };
  }, [controls, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      animate={controls}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      // Add responsive touch handling
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}