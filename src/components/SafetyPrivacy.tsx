import { Lock, Eye, UserCheck, Database } from 'lucide-react';

const privacyPoints = [
  {
    icon: Lock,
    title: 'Secure OTP Verification',
    desc: 'Authentication is handled through one-time passwords sent to your registered phone number, ensuring only you can access your account.',
  },
  {
    icon: Database,
    title: 'Responsible Data Handling',
    desc: 'We collect only the information necessary to provide our services. Your data is stored securely and is never sold to third parties.',
  },
  {
    icon: Eye,
    title: 'Transparent Privacy Practices',
    desc: 'Our Privacy Policy clearly explains what data we collect, how we use it, and your rights as a user. No hidden practices.',
  },
  {
    icon: UserCheck,
    title: 'User-Controlled Permissions',
    desc: 'Location and notification permissions are requested only when required for core features, and you remain in full control of what you share.',
  },
];

export default function SafetyPrivacy() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-label mb-4">Safety & Privacy</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Your privacy{' '}
            <span className="text-burgundy">matters to us</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Shramico is committed to responsible data practices, transparent policies, and
            giving users full control over their information.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {privacyPoints.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#FAF9F7] rounded-2xl border border-gray-100 p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-burgundy rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 bg-[#FAF9F7] border border-gray-200 rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-8 h-8 bg-burgundy/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Lock size={15} className="text-burgundy" />
          </div>
          <p className="text-sm text-gray-500">
            <strong className="text-gray-700">A note on permissions:</strong>{' '}
            Shramico requests location access to show you nearby jobs and workers. This
            permission is optional and can be managed at any time in your device settings.
            We are transparent about every permission we request and the reason for it.
          </p>
        </div>
      </div>
    </section>
  );
}
