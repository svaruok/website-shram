import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedShramicoText() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We use useScroll to track the scroll progress of the page
  const { scrollYProgress } = useScroll();

  const letters = "SHRAMICO".split("");

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10 z-0 overflow-hidden" 
      style={{ perspective: 1000 }}
    >
      <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-10">
        {letters.map((letter, i) => {
          // Calculate the range for this specific letter to animate
          // They will build up one by one based on scroll
          const start = 0;
          const end = 0.3 + (i * 0.05);

          const y = useTransform(scrollYProgress, [start, end], [300, 0]);
          const z = useTransform(scrollYProgress, [start, end], [1000, 0]);
          const rotateX = useTransform(scrollYProgress, [start, end], [90, 0]);
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

          return (
            <motion.span
              key={i}
              style={{ 
                y, 
                z, 
                rotateX, 
                opacity,
                transformStyle: "preserve-3d" 
              }}
              className="text-[12vw] font-black text-burgundy leading-none drop-shadow-2xl"
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
