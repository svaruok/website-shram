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
    <section className="py-32 bg-gray-50 relative overflow-hidden border-t border-gray-100">
      {/* Background glow effects */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            Safety & Privacy
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Your privacy <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-burgundy to-gray-900">
              matters to us
            </span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto font-medium">
            Shramico is committed to responsible data practices, transparent policies, and
            giving users absolute control over their information.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {privacyPoints.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-white rounded-[2rem] border border-gray-200 p-8 hover:border-gray-300 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-gray-50 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-burgundy/20 transition-transform duration-500 text-burgundy">
                  <Icon size={24} className="currentColor" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3 tracking-tight">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 bg-white border border-gray-200 shadow-sm rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-12 h-12 bg-burgundy/5 border border-burgundy/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
            <Lock size={20} className="text-burgundy" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed font-medium">
            <strong className="text-gray-900 font-bold">A note on permissions:</strong>{' '}
            Shramico requests location access to show you nearby jobs and workers. This
            permission is entirely optional and can be managed at any time in your device settings.
            We are transparent about every permission we request.
          </p>
        </div>
      </div>
    </section>
  );
}
