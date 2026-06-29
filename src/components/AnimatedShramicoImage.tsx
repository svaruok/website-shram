import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

// Generates random dust particles
function DustParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; scale: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-burgundy/40 rounded-full blur-[1px]"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: ['0%', '-50%', '0%'],
            x: ['0%', '20%', '0%'],
            opacity: [0, 0.8, 0],
            scale: [p.scale, p.scale * 1.5, p.scale],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export default function AnimatedShramicoImage() {
  const { scrollY } = useScroll();
  
  // Parallax effect on scroll
  const yParallax = useTransform(scrollY, [0, 1000], [0, 150]);
  const scaleParallax = useTransform(scrollY, [0, 1000], [1, 1.05]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <DustParticles />
      
      {/* Container for the static image */}
      <div className="absolute inset-0 w-full h-full">
        {/* Static image anchored as proper background */}
        <img
          src="/hero-shramico-2.jpg"
          alt="Shramico Workers"
          className="w-full h-full object-contain md:object-cover object-top md:object-center opacity-90 mt-8 md:mt-0"
        />
        
        {/* Gradient mask to slightly soften the image on the left side where text lives */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/65 to-transparent" />
        
        {/* Cinematic lighting reflection overlays */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-burgundy/0 via-white/40 to-burgundy/0 mix-blend-overlay"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: ['-50%', '50%', '-50%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}
