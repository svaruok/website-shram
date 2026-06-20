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
    <div className="relative flex gap-5">
      {/* Timeline line */}
      {!last && (
        <div className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-burgundy/30 to-transparent" />
      )}
      {/* Number badge */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-burgundy text-white font-bold text-xs flex items-center justify-center shadow-md z-10">
        {n}
      </div>
      <div className="pb-8">
        <h4 className="font-bold text-gray-900 mb-1 text-sm">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label mb-4">How It Works</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Simple steps to{' '}
            <span className="text-burgundy">get started</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Whether you're an employer looking to hire or a worker seeking opportunities,
            Shramico gets you there in just a few taps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Employer */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-burgundy rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white text-xs font-bold">EM</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">For</p>
                <h3 className="font-extrabold text-gray-900 text-xl">Employers</h3>
              </div>
            </div>
            <div>
              {employerSteps.map((step, i) => (
                <StepCard key={step.n} {...step} last={i === employerSteps.length - 1} />
              ))}
            </div>
          </div>

          {/* Worker */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#A63A50] rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white text-xs font-bold">WK</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">For</p>
                <h3 className="font-extrabold text-gray-900 text-xl">Workers</h3>
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
