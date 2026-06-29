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
    <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 flex items-center justify-center overflow-hidden pointer-events-none opacity-90">
      <DustParticles />
      
      {/* Container for the image with scroll parallax */}
      <motion.div 
        style={{ y: yParallax, scale: scaleParallax }}
        className="relative w-full h-[110%] flex items-center justify-center"
      >
        {/* Subtle slow dolly pan and float animation */}
        <motion.img
          src="/hero-shramico-2.jpg"
          alt="Shramico Workers"
          className="w-full h-full object-contain object-left lg:object-center mix-blend-multiply drop-shadow-2xl"
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            rotate: [-0.5, 0.5, -0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
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
      </motion.div>
    </div>
  );
}
