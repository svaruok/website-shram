import { Landmark, Hammer, ShieldCheck } from 'lucide-react';

export default function ColosseumPhilosophy() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0a050e] overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#800020]/20 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Visuals / Typography */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#e8a060]/10 to-burgundy/10 blur-2xl rounded-full" />
            <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-10 sm:p-14 overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Landmark size={200} />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy/20 border border-burgundy/30 text-[#e8a060] text-xs font-bold uppercase tracking-widest mb-8">
                <Landmark size={14} /> Our Inspiration
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
                Greatness is built by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8a060] to-yellow-200">
                  skilled hands.
                </span>
              </h2>
              
              <div className="flex items-center gap-4 text-white/50 font-medium">
                <div className="flex items-center gap-2">
                  <Hammer size={16} className="text-[#e8a060]" />
                  <span>Skill</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#e8a060]" />
                  <span>Trust</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <div className="flex items-center gap-2">
                  <Landmark size={16} className="text-[#e8a060]" />
                  <span>Legacy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Story */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              The Colosseum Philosophy
            </h3>
            
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                The Colosseum stands as one of the greatest architectural marvels in human history. It wasn't built by magic—it was built by the sweat, skill, and unyielding dedication of thousands of hardworking laborers.
              </p>
              <p>
                At <strong className="text-white">Shramico</strong>, we believe that every monumental achievement in the modern world is still built exactly the same way. The name "Shramik" represents the worker, the builder, the foundation of society.
              </p>
              <p className="pl-6 border-l-2 border-[#e8a060] text-white/80 italic font-medium">
                "We created this platform to honor the worker—connecting skilled hands with those who need them to build the future."
              </p>
              <p>
                That is why every download of our app rebuilds the Colosseum. It is a symbol that together, step by step, worker by worker, we are building a monumental and trusted workforce ecosystem.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
