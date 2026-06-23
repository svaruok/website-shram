const employerSteps = [
  { n: '01', title: 'Register Securely', desc: 'Create your employer account with your phone number and secure OTP verification.' },
  { n: '02', title: 'Verify Your Account', desc: 'Complete a quick verification process so workers can trust your listings.' },
  { n: '03', title: 'Post a Job', desc: 'Describe the role, location, pay, and requirements in a few simple steps.' },
  { n: '04', title: 'Review Applications', desc: 'Browse worker profiles and applications that match your job posting.' },
  { n: '05', title: 'Hire Quickly', desc: 'Reach out directly and confirm a hire — faster than any traditional method.' },
  { n: '06', title: 'Manage Ongoing Work', desc: 'Track progress, communicate in-app, and build a reliable worker network.' },
];

const workerSteps = [
  { n: '01', title: 'Sign Up Securely', desc: 'Register with your phone number and verify with OTP in seconds.' },
  { n: '02', title: 'Complete Your Profile', desc: 'Add your skills, experience, and availability to stand out to employers.' },
  { n: '03', title: 'Discover Nearby Jobs', desc: 'Browse job listings automatically filtered by your location.' },
  { n: '04', title: 'Apply Instantly', desc: 'One-tap applications with no lengthy forms or unnecessary paperwork.' },
  { n: '05', title: 'Get Hired', desc: 'Employers contact you directly through the app when they want to hire.' },
  { n: '06', title: 'Build Your Reputation', desc: 'Complete jobs successfully, gather reviews, and grow your career.' },
];

function StepCard({ n, title, desc, last }: { n: string; title: string; desc: string; last: boolean }) {
  return (
    <div className="relative flex gap-6 group">
      {/* Timeline line with glow effect */}
      {!last && (
        <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent group-hover:from-[#e8a060]/50 transition-colors duration-500" />
      )}
      
      {/* Number badge */}
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm flex items-center justify-center shadow-xl z-10 group-hover:bg-[#e8a060]/20 group-hover:border-[#e8a060]/50 group-hover:text-[#e8a060] transition-all duration-500 backdrop-blur-md">
        {n}
      </div>
      
      <div className="pb-10 pt-2">
        <h4 className="font-bold text-white mb-2 text-base tracking-wide group-hover:text-[#e8a060] transition-colors duration-300">{title}</h4>
        <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-[#0a050e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Simple steps to <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-burgundy to-[#e8a060]">
              get started
            </span>
          </h2>
          <p className="mt-6 text-white/50 max-w-xl mx-auto text-lg">
            Whether you're an employer looking to hire or a worker seeking opportunities,
            Shramico gets you there in just a few taps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 relative">
          {/* Subtle background glow behind the cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#e8a060]/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Employer Timeline */}
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 lg:p-12 hover:bg-white/[0.04] transition-colors duration-500">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-gradient-to-br from-[#e8a060]/20 to-transparent border border-[#e8a060]/30 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-[#e8a060] text-sm font-bold tracking-wider">EM</span>
              </div>
              <div>
                <p className="text-xs text-white/40 font-bold uppercase tracking-[0.2em] mb-1">For</p>
                <h3 className="font-extrabold text-white text-2xl tracking-tight">Employers</h3>
              </div>
            </div>
            <div>
              {employerSteps.map((step, i) => (
                <StepCard key={step.n} {...step} last={i === employerSteps.length - 1} />
              ))}
            </div>
          </div>

          {/* Worker Timeline */}
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 lg:p-12 hover:bg-white/[0.04] transition-colors duration-500">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-gradient-to-br from-burgundy/30 to-transparent border border-burgundy/30 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-burgundy text-sm font-bold tracking-wider">WK</span>
              </div>
              <div>
                <p className="text-xs text-white/40 font-bold uppercase tracking-[0.2em] mb-1">For</p>
                <h3 className="font-extrabold text-white text-2xl tracking-tight">Workers</h3>
              </div>
            </div>
            <div>
              {workerSteps.map((step, i) => (
                <StepCard key={step.n} {...step} last={i === workerSteps.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
