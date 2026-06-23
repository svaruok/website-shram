import {
  Shield, Zap, MapPin, Sparkles, Bell, Navigation,
  LayoutDashboard, ClipboardList, MessageSquare, Smartphone, Star,
  Calendar, CheckCircle2
} from 'lucide-react';

const bentoFeatures = [
  {
    letter: 'S',
    icon: Sparkles,
    title: 'Smart Matching',
    desc: 'AI-driven engine connects workers to employers based on skills and history.',
    iconColor: 'text-[#e8a060]',
    bgHover: 'group-hover:border-[#e8a060]/30 group-hover:bg-[#e8a060]/5',
    visual: (
      <div className="absolute left-0 top-0 w-32 h-32 sm:w-48 sm:h-48 -translate-x-1/4 -translate-y-1/4 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
        <div className="absolute inset-0 rounded-full border border-[#e8a060] animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-4 rounded-full border border-[#e8a060]/50 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
      </div>
    )
  },
  {
    letter: 'H',
    icon: Zap,
    title: 'Hire Quickly',
    desc: 'Employers post jobs in minutes with an intuitive, step-by-step workflow.',
    iconColor: 'text-white',
    bgHover: 'group-hover:border-white/30 group-hover:bg-white/5',
    visual: (
      <div className="absolute right-4 top-4 flex items-center gap-0 opacity-10 group-hover:opacity-20 transition-all duration-500 pointer-events-none">
        <Zap size={60} className="text-white -mr-6" />
        <Zap size={60} className="text-white -mr-6" />
        <Zap size={60} className="text-white" />
      </div>
    )
  },
  {
    letter: 'R',
    icon: Bell,
    title: 'Real-time Alerts',
    desc: 'Instant notifications keep you updated on applications and new jobs.',
    iconColor: 'text-white',
    bgHover: 'group-hover:border-white/30 group-hover:bg-white/5',
    visual: (
      <div className="absolute right-4 top-4 w-24 h-24 rounded-full border border-white/20 opacity-0 group-hover:opacity-20 group-hover:animate-ping pointer-events-none" style={{ animationDuration: '2s' }} />
    )
  },
  {
    letter: 'A',
    icon: LayoutDashboard,
    title: 'Advanced Dashboards',
    desc: 'Dedicated workspaces to track applications, history, and active hires.',
    iconColor: 'text-[#e8a060]',
    bgHover: 'group-hover:border-[#e8a060]/30 group-hover:bg-[#e8a060]/5',
    visual: (
      <div className="absolute right-4 top-4 flex items-end gap-2 opacity-20 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none">
        <div className="w-6 bg-[#e8a060]/40 rounded-t-lg h-12 group-hover:h-16 transition-all duration-700 delay-100" />
        <div className="w-6 bg-[#e8a060]/60 rounded-t-lg h-16 group-hover:h-20 transition-all duration-700 delay-200" />
        <div className="w-6 bg-[#e8a060] rounded-t-lg h-10 group-hover:h-24 transition-all duration-700 delay-300 shadow-[0_0_15px_rgba(232,160,96,0.5)]" />
      </div>
    )
  },
  {
    letter: 'M',
    icon: MapPin,
    title: 'Map Discovery',
    desc: 'Find jobs or workers instantly based on hyper-local proximity.',
    iconColor: 'text-burgundy',
    bgHover: 'group-hover:border-burgundy/40 group-hover:bg-burgundy/10',
    visual: (
      <div className="absolute right-0 top-0 w-24 h-24 opacity-10 group-hover:opacity-30 transition-all duration-700 pointer-events-none overflow-hidden rounded-bl-full">
        <div className="absolute top-[-50%] right-[-50%] w-full h-full border-b border-l border-burgundy rounded-bl-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[-25%] right-[-25%] w-full h-full border-b border-l border-burgundy rounded-bl-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>
    )
  },
  {
    letter: 'I',
    icon: MessageSquare,
    title: 'Instant Chat',
    desc: 'In-app chat keeps things professional and communications secure.',
    iconColor: 'text-white',
    bgHover: 'group-hover:border-white/30 group-hover:bg-white/5',
    visual: (
      <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-30 transition-all duration-500 pointer-events-none group-hover:scale-110">
        <CheckCircle2 size={48} className="text-white" />
      </div>
    )
  },
  {
    letter: 'C',
    icon: Calendar,
    title: 'Calendar Booking',
    desc: 'Book workers in advance for future dates and manage schedules.',
    iconColor: 'text-white',
    bgHover: 'group-hover:border-white/30 group-hover:bg-white/5',
    visual: (
      <div className="absolute right-6 top-6 grid grid-cols-3 gap-1 opacity-10 group-hover:opacity-30 transition-all duration-500 pointer-events-none group-hover:rotate-12">
        {[...Array(9)].map((_, i) => (
          <div key={i} className={`w-2.5 h-2.5 rounded-sm ${i === 4 ? 'bg-white shadow-[0_0_10px_white]' : 'bg-white/50'}`} />
        ))}
      </div>
    )
  },
  {
    letter: 'O',
    icon: Shield,
    title: 'OTP Verification',
    desc: 'Phone verification ensures only real, verified users access the platform.',
    iconColor: 'text-burgundy',
    bgHover: 'group-hover:border-burgundy/40 group-hover:bg-burgundy/10',
    visual: (
      <div className="absolute right-6 top-6 flex gap-1.5 opacity-20 group-hover:opacity-40 transition-all duration-500 pointer-events-none">
        <div className="w-2.5 h-2.5 rounded-full bg-burgundy animate-pulse" style={{ animationDelay: '0ms' }} />
        <div className="w-2.5 h-2.5 rounded-full bg-burgundy animate-pulse" style={{ animationDelay: '150ms' }} />
        <div className="w-2.5 h-2.5 rounded-full bg-burgundy animate-pulse" style={{ animationDelay: '300ms' }} />
      </div>
    )
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-[#0f0814] relative overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-burgundy/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-[#e8a060]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">
            The Shramico Advantage
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Everything you need to hire <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8a060] to-burgundy">
              or get hired
            </span>
          </h2>
          <p className="mt-6 text-white/50 max-w-2xl mx-auto text-lg">
            Shramico bundles every essential tool into a single, elegant mobile app —
            designed for speed, trust, and simplicity.
          </p>
        </div>

        {/* SHRAMICO Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bentoFeatures.map(({ letter, icon: Icon, title, desc, iconColor, bgHover, visual }) => (
            <div 
              key={title} 
              className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 transition-all duration-500 overflow-hidden hover:shadow-2xl ${bgHover} min-h-[260px] flex flex-col`}
            >
              {/* Massive Background Letter */}
              <div className="absolute -bottom-8 -right-4 text-[14rem] font-black text-white/[0.02] group-hover:text-white/[0.06] transition-colors duration-500 pointer-events-none leading-none select-none">
                {letter}
              </div>

              {/* Animated Background Visual */}
              {visual}
              
              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl ${iconColor}`}>
                  <Icon size={22} className="currentColor" />
                </div>
                <div className="mt-auto">
                  <h3 className="font-bold text-white text-xl mb-3 tracking-tight">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom simple pills for the rest */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            { icon: ClipboardList, text: 'Fast Applications' },
            { icon: Smartphone, text: 'Easy-to-Use Interface' },
            { icon: Star, text: 'Mobile-First Experience' },
            { icon: Navigation, text: 'Location Services' }
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/5 text-white/60 text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-all duration-300 hover:border-white/20 cursor-default">
              <Icon size={16} className="text-[#e8a060]/70" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
