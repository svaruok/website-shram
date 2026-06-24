import { Suspense, useState, useEffect, useRef } from 'react';
import { Landmark, Settings } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { useProgress, OrbitControls } from '@react-three/drei';
import CollosseumScene from './hero/CollosseumScene';

function CanvasFallback() {
  const { progress } = useProgress();
  return (
    <div className="absolute inset-0 bg-gray-50 flex items-center justify-center rounded-3xl border border-gray-100 shadow-inner">
      <div className="text-center">
        <Settings size={32} className="text-burgundy animate-spin mx-auto mb-3" />
        <p className="text-burgundy font-mono text-lg font-bold mb-1">{progress.toFixed(0)}%</p>
        <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Loading 3D Engine...</p>
      </div>
    </div>
  );
}

const DOWNLOAD_COUNT = parseInt(import.meta.env.VITE_DOWNLOAD_COUNT ?? '0', 10);

function getVisualProgress(count: number): number {
  if (count < 50000) {
    return 0.42; // First floor + a little bit of extra construction (not fully second floor)
  } else if (count < 100000) {
    return 0.66; // Second floor visible from 50k to 1 Lakh
  } else if (count < 500000) {
    return 0.85; // Third tier visible from 1 Lakh to 5 Lakh
  } else {
    return 1.0;  // Full model visible at 5 Lakh and above
  }
}

function getMilestoneLabel(count: number): string {
  if (count >= 1000000) return '🎉 1 Million Reached! Fully Restored Model Coming Soon...';
  if (count >= 500000)  return '🏛 Ruins Fully Built! (Ultimate Goal: 1 Million)';
  if (count >= 100000)  return '🏗 Second Floor Built (Goal: 5 Lakh)';
  if (count >= 50000)   return '🪨 First Floor Built (Goal: 1 Lakh)';
  return '🔨 Building First Floor (Goal: 50k)';
}

export default function ColosseumPhilosophy() {
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="philosophy" className="relative py-24 sm:py-32 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: 3D Model */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] rounded-[3rem] overflow-hidden bg-gray-50 border border-gray-200 shadow-2xl">
            <Suspense fallback={<CanvasFallback />}>
              <Canvas
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'grab' }}
                camera={{ position: [24, 30, 24], fov: 40, near: 0.1, far: 300 }}
                dpr={0.7}
                frameloop={inView ? "always" : "demand"}
                performance={{ min: 0.5 }}
                gl={{ antialias: false, powerPreference: 'high-performance', localClippingEnabled: true, alpha: false }}
              >
                <group visible={inView}>
                  <CollosseumScene progress={getVisualProgress(DOWNLOAD_COUNT)} isMobile={isMobile} />
                </group>
                <OrbitControls 
                  target={[0, 1.5, 0]}
                  enableZoom={false} 
                  enablePan={false} 
                  enableDamping={true}
                  dampingFactor={0.05}
                  minPolarAngle={Math.PI / 8} 
                  maxPolarAngle={Math.PI / 2.5}
                  autoRotate={inView}
                  autoRotateSpeed={0.8}
                />
              </Canvas>
            </Suspense>
            {/* Milestone Widget */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-6 py-4 rounded-3xl border border-gray-200 shadow-xl pointer-events-none w-[85%] max-w-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-800 text-[10px] font-black uppercase tracking-widest">
                  App Downloads
                </span>
                <span className="text-burgundy text-[12px] font-mono font-bold">
                  {DOWNLOAD_COUNT.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-gradient-to-r from-burgundy to-gray-900 rounded-full"
                  style={{ width: `${Math.min((DOWNLOAD_COUNT / 1000000) * 100, 100)}%` }}
                />
              </div>
              <p className="text-gray-600 text-[11px] font-bold text-center">
                {getMilestoneLabel(DOWNLOAD_COUNT)}
              </p>
            </div>
          </div>

          {/* Right Column: The Story (Text) */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy/10 border border-burgundy/20 text-burgundy text-xs font-bold uppercase tracking-widest mb-6 self-start">
              <Landmark size={14} /> Our Inspiration
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-8">
              Greatness is built by <br />
              <span className="text-burgundy">
                skilled hands.
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg font-medium leading-relaxed">
              <p>
                The Colosseum stands as one of the greatest architectural marvels in human history. It wasn't built by magic—it was built by the sweat, skill, and unyielding dedication of thousands of hardworking laborers.
              </p>
              <p>
                At <strong className="text-gray-900">Shramico</strong>, we believe that every monumental achievement in the modern world is still built exactly the same way. The name "Shramik" represents the worker, the builder, the foundation of society.
              </p>
              <p className="pl-6 border-l-4 border-burgundy text-gray-800 italic font-bold bg-gray-50 py-4 pr-4 rounded-r-xl shadow-sm">
                "We created this platform to honor the worker—connecting skilled hands with those who need them to build the future."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
