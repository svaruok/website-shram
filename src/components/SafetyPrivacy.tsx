import { Lock, Eye, UserCheck, Database } from 'lucide-react';

const privacyPoints = [
  {
    icon: Lock,
    title: 'Secure OTP Verification',
    desc: 'Authentication is handled through one-time passwords sent to your phone, ensuring only you access your account.',
  },
  {
    icon: Database,
    title: 'Responsible Data',
    desc: 'We collect only necessary information. Your data is stored securely and never sold to third parties.',
  },
  {
    icon: Eye,
    title: 'Transparent Practices',
    desc: 'Our Privacy Policy explains what data we collect and your rights. No hidden practices.',
  },
  {
    icon: UserCheck,
    title: 'User-Controlled',
    desc: 'Location permissions are requested only when required, and you remain in full control of what you share.',
  },
];

export default function SafetyPrivacy() {
  return (
    <section className="py-32 bg-[#0a050e] relative overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-burgundy/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[20rem] bg-[#e8a060]/5 rounded-t-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            Safety & Privacy
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Your privacy <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-burgundy to-[#e8a060]">
              matters to us
            </span>
          </h2>
          <p className="mt-6 text-white/50 text-lg max-w-2xl mx-auto">
            Shramico is committed to responsible data practices, transparent policies, and
            giving users absolute control over their information.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {privacyPoints.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-white/[0.02] backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Icon size={24} className="text-[#e8a060]" />
                </div>
                <h3 className="font-bold text-white text-xl mb-3 tracking-tight">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-12 h-12 bg-burgundy/20 border border-burgundy/30 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <Lock size={20} className="text-burgundy" />
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            <strong className="text-white font-semibold">A note on permissions:</strong>{' '}
            Shramico requests location access to show you nearby jobs and workers. This
            permission is entirely optional and can be managed at any time in your device settings.
            We are transparent about every permission we request.
          </p>
        </div>
      </div>
    </section>
  );
}
