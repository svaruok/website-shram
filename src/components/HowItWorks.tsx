import { motion } from 'framer-motion';

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

function StepCard({ n, title, desc, last, index }: { n: string; title: string; desc: string; last: boolean; index: number }) {
  return (
    <motion.div 
      className="relative flex gap-6 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline line with glow effect */}
      {!last && (
        <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent group-hover:from-burgundy/50 transition-colors duration-500" />
      )}
      
      {/* Number badge */}
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-gray-200 text-gray-900 font-bold text-sm flex items-center justify-center shadow-sm z-10 group-hover:bg-burgundy/10 group-hover:border-burgundy/30 group-hover:text-burgundy transition-all duration-500">
        {n}
      </div>
      
      <div className="pb-10 pt-2">
        <h4 className="font-bold text-gray-900 mb-2 text-base tracking-wide group-hover:text-burgundy transition-colors duration-300">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-gray-50 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Simple steps to <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-burgundy to-gray-900">
              get started
            </span>
          </motion.h2>
          <motion.p 
            className="mt-6 text-gray-600 max-w-xl mx-auto text-lg font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you're an employer looking to hire or a worker seeking opportunities,
            Shramico gets you there in just a few taps.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 relative">
          {/* Subtle background glow behind the cards */}

          {/* Employer Timeline */}
          <motion.div 
            className="bg-white rounded-[2rem] border border-gray-200 p-8 lg:p-12 hover:border-gray-300 transition-colors duration-500 shadow-sm hover:shadow-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm text-burgundy">
                <span className="text-burgundy text-sm font-bold tracking-wider">EM</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] mb-1">For</p>
                <h3 className="font-extrabold text-gray-900 text-2xl tracking-tight">Employers</h3>
              </div>
            </div>
            <div>
              {employerSteps.map((step, i) => (
                <StepCard key={step.n} {...step} last={i === employerSteps.length - 1} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Worker Timeline */}
          <motion.div 
            className="bg-white rounded-[2rem] border border-gray-200 p-8 lg:p-12 hover:border-gray-300 transition-colors duration-500 shadow-sm hover:shadow-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm text-burgundy">
                <span className="text-burgundy text-sm font-bold tracking-wider">WK</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em] mb-1">For</p>
                <h3 className="font-extrabold text-gray-900 text-2xl tracking-tight">Workers</h3>
              </div>
            </div>
            <div>
              {workerSteps.map((step, i) => (
                <StepCard key={step.n} {...step} last={i === workerSteps.length - 1} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
