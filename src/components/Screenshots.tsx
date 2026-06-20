const screens = [
  { label: 'Login', color: '#800020', icon: '🔑', lines: ['Phone Number', 'Enter your number', '', 'Continue →'] },
  { label: 'OTP Verify', color: '#5C0014', icon: '✓', lines: ['Verification', '_ _ _ _ _ _', 'Code sent to +91 ···', 'Verify'] },
  { label: 'Home', color: '#800020', icon: '⌂', lines: ['Good Morning!', 'Find Work Nearby', '────────────', '↓ Browse Jobs'] },
  { label: 'Job Feed', color: '#A63A50', icon: '≡', lines: ['Job Listings', '● Electrician', '● Plumber', '● Carpenter'] },
  { label: 'Job Detail', color: '#5C0014', icon: '📋', lines: ['Electrician', '₹500/day · 2.4km', '★ 4.8 Rating', 'Apply Now →'] },
  { label: 'Employer', color: '#800020', icon: '🏢', lines: ['My Listings', '3 Active Jobs', '12 Applicants', 'Manage →'] },
];

function MockScreen({ label, color, icon, lines }: { label: string; color: string; icon: string; lines: string[] }) {
  return (
    <div className="flex flex-col items-center gap-3 group">
      {/* Phone frame */}
      <div
        className="relative w-36 h-64 rounded-[28px] overflow-hidden shadow-xl border-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl"
        style={{ borderColor: '#1a1a1a', background: '#1a1a1a' }}
      >
        {/* Status bar */}
        <div className="h-5 flex items-center justify-between px-4" style={{ background: '#0f0f0f' }}>
          <span className="text-white/70 text-[8px]">9:41</span>
          <div className="w-12 h-3 bg-gray-800 rounded-full" />
          <div className="flex gap-0.5">
            <div className="w-2 h-1.5 bg-white/70 rounded-sm" />
          </div>
        </div>
        {/* Screen content */}
        <div className="h-full flex flex-col" style={{ background: color }}>
          {/* Top bar */}
          <div className="px-3 pt-3 pb-2 flex items-center justify-between">
            <span className="text-white/80 text-[9px] font-medium">{icon} {label}</span>
            <div className="w-4 h-4 rounded-full bg-white/15" />
          </div>
          {/* Content area */}
          <div className="flex-1 bg-white rounded-t-2xl px-3 py-3 mx-1 space-y-2">
            {lines.map((line, i) => (
              <div
                key={i}
                className={`rounded text-[9px] px-2 py-1.5 ${
                  i === 0
                    ? 'font-bold text-gray-900 text-[10px]'
                    : i === lines.length - 1
                    ? 'text-white font-semibold text-center rounded-lg'
                    : 'bg-gray-50 text-gray-600'
                }`}
                style={i === lines.length - 1 ? { background: color } : {}}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="text-xs font-semibold text-gray-600">{label}</span>
    </div>
  );
}

export default function Screenshots() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label mb-4">App Preview</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            A beautifully crafted{' '}
            <span className="text-burgundy">mobile experience</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Every screen is designed with clarity and ease of use in mind, delivering a
            professional experience from the first tap.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {screens.map((s) => (
            <MockScreen key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
