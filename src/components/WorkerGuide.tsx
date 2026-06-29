import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import BuildingGame from './BuildingGame';

export default function WorkerGuide() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Make the worker bob/bounce slightly as user scrolls
  const y = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -20, 0, -20, 0, -20]); 
  
  // Rotate slightly to simulate walking/working
  const rotate = useTransform(smoothProgress, [0, 0.5, 1], [-5, 5, -5]);
  
  const [message, setMessage] = useState("Hi! Let's find you some workers!");
  const [isGameOpen, setIsGameOpen] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      if (v < 0.1) setMessage("Welcome to Shramico!");
      else if (v < 0.3) setMessage("Here are our top features!");
      else if (v < 0.6) setMessage("We ensure safety & privacy.");
      else if (v < 0.9) setMessage("Got questions? See our FAQ.");
      else setMessage("Ready to download?");
    });
  }, [scrollYProgress]);

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-none flex items-end gap-2 sm:gap-3">
        {/* Speech Bubble */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        key={message}
        className="bg-white px-4 py-3 rounded-2xl rounded-br-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 mb-8 pointer-events-auto max-w-[160px]"
      >
        <p className="text-[13px] font-bold text-gray-800 leading-tight">{message}</p>
        <p className="text-[10px] text-gray-500 mt-1 font-semibold">Click me for a break!</p>
      </motion.div>

        {/* Worker Character (CSS Art) */}
        <motion.div 
          style={{ rotate, y }}
          className="flex flex-col items-center pointer-events-auto cursor-pointer relative drop-shadow-2xl"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsGameOpen(true)}
        >
          {/* Detailed Construction Helmet */}
          <div className="relative z-20 flex flex-col items-center drop-shadow-md -mb-0.5">
             {/* Helmet Dome */}
             <div className="w-11 h-5 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-t-2xl relative overflow-hidden border-t border-x border-yellow-300">
               {/* Center Ridge */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-full bg-white/40 shadow-[0_0_2px_rgba(255,255,255,0.5)]" />
               {/* Shine */}
               <div className="absolute top-1 left-1 w-2 h-2 bg-white/50 rounded-full blur-[1px]" />
             </div>
             {/* Helmet Brim */}
             <div className="w-14 h-[5px] bg-yellow-600 rounded-full -mt-0.5 shadow-md border-b border-yellow-700" />
          </div>
          
          {/* Face */}
          <div className="w-10 h-10 bg-[#FFD1B3] rounded-b-xl rounded-t-sm flex flex-col items-center relative z-10 -mt-0.5 shadow-inner">
             {/* Brows */}
             <div className="flex gap-2 mt-2.5">
               <div className="w-2.5 h-[2px] bg-amber-900/80 rounded-full rotate-3" />
               <div className="w-2.5 h-[2px] bg-amber-900/80 rounded-full -rotate-3" />
             </div>
             {/* Eyes */}
             <div className="flex gap-3 mt-1">
               <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
               <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
             </div>
             {/* Mustache */}
             <div className="mt-1.5">
               <div className="w-5 h-1.5 bg-amber-900/90 rounded-full shadow-sm" />
             </div>
          </div>
          
          {/* Body/Uniform */}
          <div className="w-16 h-8 bg-blue-700 rounded-t-xl rounded-b-md relative z-0 -mt-1.5 shadow-inner border-b-4 border-blue-900 overflow-hidden">
            {/* Hi-Vis Vest strips */}
            <div className="absolute -top-1 left-3 w-2.5 h-full bg-orange-500" />
            <div className="absolute -top-1 right-3 w-2.5 h-full bg-orange-500" />
            <div className="absolute top-4 left-0 w-full h-2 bg-orange-500" />
          </div>
        </motion.div>
      </div>

      <BuildingGame isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </>
  );
}
