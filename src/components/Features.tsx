import {
  Shield, Zap, MapPin, Sparkles, Bell, Navigation,
  LayoutDashboard, User, ClipboardList, MessageSquare, Smartphone, Star
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure OTP Login',
    desc: 'Phone number verification with OTP ensures only real, verified users access the platform.',
  },
  {
    icon: Zap,
    title: 'Quick Job Posting',
    desc: 'Employers post jobs in minutes with an intuitive, step-by-step workflow.',
  },
  {
    icon: MapPin,
    title: 'Nearby Worker Discovery',
    desc: 'Find skilled workers or jobs based on proximity using smart location services.',
  },
  {
    icon: Sparkles,
    title: 'Smart Job Matching',
    desc: 'Intelligent matching surfaces the most relevant opportunities for both sides.',
  },
  {
    icon: Bell,
    title: 'Real-Time Notifications',
    desc: 'Instant alerts keep employers and workers updated on every action.',
  },
  {
    icon: Navigation,
    title: 'Location-Based Services',
    desc: 'Location data powers hyper-local hiring so distance is never an obstacle.',
  },
  {
    icon: LayoutDashboard,
    title: 'Employer Dashboard',
    desc: 'A dedicated workspace to manage listings, review applications, and track hires.',
  },
  {
    icon: User,
    title: 'Worker Dashboard',
    desc: 'A personalized hub for workers to manage their profile, applications, and history.',
  },
  {
    icon: ClipboardList,
    title: 'Fast Application Process',
    desc: 'Workers apply with a single tap — no lengthy forms, no unnecessary friction.',
  },
  {
    icon: MessageSquare,
    title: 'Reliable Communication',
    desc: 'Built-in messaging keeps conversations structured and professional.',
  },
  {
    icon: Smartphone,
    title: 'Easy-to-Use Interface',
    desc: 'Designed from the ground up for clarity so every user can navigate with confidence.',
  },
  {
    icon: Star,
    title: 'Mobile-First Experience',
    desc: 'Every feature is optimised for mobile — fast, lightweight, and always accessible.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Platform Features</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Everything you need to hire{' '}
            <span className="text-burgundy">or get hired</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Shramico bundles every essential tool into a single, elegant mobile app —
            so hiring never gets complicated.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-premium group">
              <div className="w-11 h-11 bg-burgundy/8 rounded-xl flex items-center justify-center mb-4 group-hover:bg-burgundy group-hover:shadow-md transition-all duration-300">
                <Icon size={20} className="text-burgundy group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-base">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
