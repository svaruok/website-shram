import { Suspense, useState, useEffect, useRef, Component, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';
import { Download, ArrowRight, Settings } from 'lucide-react';
import { handleDownload, getAppLink } from '../../utils/download';
import CollosseumScene from './CollosseumScene';

const DOWNLOAD_TARGET = 1000000;
const DOWNLOAD_COUNT  = parseInt(import.meta.env.VITE_DOWNLOAD_COUNT ?? '0', 10);
const PROGRESS        = Math.min(DOWNLOAD_COUNT / DOWNLOAD_TARGET, 1);

function getMilestoneLabel(p: number): string {
  if (p >= 1)    return '🎉 Phase 1 Complete! Full Colosseum Unlocked';
  if (p >= 0.66) return '🏛 Third floor rising…';
  if (p >= 0.33) return '🏗 Second floor taking shape…';
  if (p > 0)     return '🪨 Laying the first stones…';
  return '🏚 Awaiting the first builders…';
}

interface EBState { hasError: boolean; error?: string }
class CanvasErrorBoundary extends Component<{ children: ReactNode }, EBState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(e: Error): EBState {
    return { hasError: true, error: e.message };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 bg-[#07050e] flex items-center justify-center">
          <p className="text-white/30 text-sm">3D not supported on this device</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function CanvasFallback() {
  const { progress } = useProgress();
  return (
    <div className="absolute inset-0 bg-transparent flex items-center justify-center pointer-events-none">
      <div className="text-center bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
        <Settings size={40} className="text-[#e8a060] animate-spin mx-auto mb-4" />
        <p className="text-[#e8a060] font-mono text-xl font-bold mb-1">{progress.toFixed(0)}%</p>
        <p className="text-white/40 text-[10px] uppercase tracking-widest">Loading 3D Engine...</p>
      </div>
    </div>
  );
}

export default function CollosseumHero() {
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Aggressively freeze the 3D rendering loop as soon as the user scrolls down to save performance
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 10% of the screen height, freeze the 3D model
      if (window.scrollY > window.innerHeight * 0.1) {
        setInView(false);
      } else {
        setInView(true);
      }
    };
    
    // Check initially
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progressPct = Math.max(PROGRESS * 100, 0.5);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#1a0d35] min-h-[100dvh] flex flex-col justify-center"
    >
      {/* ── 3D Canvas ──────────────────────────────────────────────────────── */}
      <CanvasErrorBoundary>
        <Suspense fallback={<CanvasFallback />}>
          <Canvas
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
            camera={{ position: [0, 10, 28], fov: 52, near: 0.1, far: 300 }}
            dpr={1}
            frameloop={inView ? "always" : "demand"} // Nuclear option: stops GPU completely when scrolling down
            gl={{ antialias: false, powerPreference: 'high-performance', localClippingEnabled: true }}
          >
            <CollosseumScene progress={PROGRESS} isMobile={isMobile} />
          </Canvas>
        </Suspense>
      </CanvasErrorBoundary>

      {/* ── Atmospheric gradients ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-12 lg:px-20 pt-28 pb-20">
        <div className="max-w-xl lg:max-w-2xl">

          <h1 className="text-[2.2rem] leading-[1.15] sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 sm:mb-5 drop-shadow-lg">
            Find Trusted Workers.{' '}
            <span className="text-[#e8a060]">Discover Better</span>{' '}
            Opportunities.{' '}
            <span className="text-[#e8a060]">Hire Faster.</span>
          </h1>

          <p className="text-sm sm:text-lg text-white/70 leading-relaxed mb-6 max-w-md drop-shadow-md">
            Shramico connects employers and skilled workers through a seamless
            mobile experience — helping businesses hire efficiently and workers
            discover opportunities nearby.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="flex flex-col items-start gap-2">
              <a
                href={getAppLink() || '#'}
                onClick={handleDownload}
                target={getAppLink() ? '_blank' : undefined}
                rel={getAppLink() ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center justify-center gap-2.5 bg-[#800020] hover:bg-[#5C0014] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#800020]/40 transition-all duration-200 hover:-translate-y-0.5 text-sm w-full sm:w-auto"
              >
                <Download size={16} />
                Download on Google Play
              </a>
              {/* Mobile-only visible Colosseum badge directly under the button */}
              <div className="lg:hidden bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-xl w-full text-center">
                <p className="text-[#ffd700] text-[12px] font-black tracking-wide">
                  Every download rebuilds the Colosseum
                </p>
              </div>
            </div>
            
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:bg-white/10 backdrop-blur-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm w-full sm:w-auto"
            >
              Learn More <ArrowRight size={14} />
            </a>
          </div>

          {/* Progress bar */}
          <div className="max-w-sm bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/80 text-[11px] font-bold uppercase tracking-wider">
                🏛 Colosseum Progress
              </span>
              <span className="text-white/80 text-[11px] font-mono tabular-nums font-bold">
                {DOWNLOAD_COUNT.toLocaleString('en-IN')} / 10,00,000
              </span>
            </div>
            <div className="h-2.5 bg-white/10 rounded-full overflow-hidden mb-2">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#800020] via-[#c04020] to-[#e8a060]"
                style={{ width: `${progressPct}%`, transition: 'width 1.2s ease-out' }}
              />
            </div>
            <p className="text-white/50 text-[10px] italic leading-tight font-medium">
              {getMilestoneLabel(PROGRESS)}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <div className="w-px h-9 bg-gradient-to-b from-transparent via-white/25 to-transparent animate-pulse" />
        <span className="text-white/20 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
      </div>

      {/* Persistent "Work in Progress" Badge */}
      <div className="absolute bottom-6 lg:bottom-10 right-6 flex items-center gap-2.5 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-xl">
        <Settings size={14} className="text-[#e8a060] animate-spin" style={{ animationDuration: '3s' }} />
        <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-0.5">
          Work in Progress
        </span>
      </div>
    </section>
  );
}
