import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function WorkerGuide() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Make the worker bob/bounce slightly as user scrolls
  const y = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -20, 0, -20, 0, -20]); 
  
  // Rotate slightly to simulate walking/working
  const rotate = useTransform(smoothProgress, [0, 0.5, 1], [-5, 5, -5]);
  
  const [message, setMessage] = useState("Hi! Let's find you some workers!");

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
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none flex items-end gap-3 hidden sm:flex">
      {/* Speech Bubble */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        key={message}
        className="bg-white px-4 py-3 rounded-2xl rounded-br-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 mb-8 pointer-events-auto max-w-[160px]"
      >
        <p className="text-[13px] font-bold text-gray-800 leading-tight">{message}</p>
      </motion.div>

      {/* Worker Character (CSS Art) */}
      <motion.div 
        style={{ rotate, y }}
        className="w-16 h-20 bg-yellow-400 rounded-t-[2rem] rounded-b-lg flex flex-col items-center justify-start pt-1.5 shadow-2xl border-[3px] border-white pointer-events-auto cursor-pointer relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Hard hat */}
        <div className="w-14 h-7 bg-yellow-500 rounded-t-full border-b-[3px] border-yellow-600 mb-1 z-10" />
        
        {/* Face */}
        <div className="w-11 h-9 bg-[#FFD1B3] rounded-full flex items-center justify-center gap-1.5 relative z-10 shadow-inner">
           {/* Eyes */}
           <div className="w-1.5 h-2 bg-gray-900 rounded-full" />
           <div className="w-1.5 h-2 bg-gray-900 rounded-full" />
           {/* Smile */}
           <div className="absolute bottom-1.5 w-3.5 h-2 border-b-2 border-gray-900 rounded-full" />
        </div>
        
        {/* Body/Uniform */}
        <div className="absolute bottom-0 w-full h-6 bg-blue-600 rounded-t-lg z-0" />
        
        {/* Hi-Vis Vest strips */}
        <div className="absolute bottom-0 left-2 w-2 h-6 bg-orange-500 z-0 opacity-80 rotate-12" />
        <div className="absolute bottom-0 right-2 w-2 h-6 bg-orange-500 z-0 opacity-80 -rotate-12" />
      </motion.div>
    </div>
  );
}
