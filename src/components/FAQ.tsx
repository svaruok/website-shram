import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is Shramico?',
    a: 'Shramico is a mobile hiring platform that connects employers with skilled and semi-skilled workers nearby. Employers can post jobs and review applicants, while workers can browse and apply to local opportunities — all through an intuitive mobile app.',
  },
  {
    q: 'How do I register?',
    a: 'Registration is simple: download the app from Google Play, enter your mobile number, and verify it with the OTP sent to you. You\'ll then choose whether you\'re an employer or worker and complete a brief profile setup.',
  },
  {
    q: 'How does OTP verification work?',
    a: 'When you register or log in, Shramico sends a one-time password (OTP) to your registered mobile number. Enter this code in the app to verify your identity. OTPs expire quickly and can only be used once, keeping your account secure.',
  },
  {
    q: 'How do employers post jobs?',
    a: 'After logging in to an employer account, tap "Post a Job", fill in the job details (title, description, location, pay, and requirements), and publish. Your listing will immediately become visible to workers in your area.',
  },
  {
    q: 'How do workers apply for jobs?',
    a: 'Workers browse the job feed filtered by their location, tap on a listing to view details, and apply with a single tap. Employers receive your application instantly and can contact you through the app.',
  },
  {
    q: 'Why is location permission requested?',
    a: 'Location access allows Shramico to show workers jobs near them and helps employers find workers in their vicinity. This is core to the platform\'s value. Location permission is optional — you can manage it in your device settings — but without it, location-based features will not function.',
  },
  {
    q: 'How can I contact support?',
    a: 'You can reach our support team at support@shramico.com. We typically respond within one business day. You can also use the Contact form on this page.',
  },
  {
    q: 'Where can I download the app?',
    a: 'Shramico is available on the Google Play Store. Search for "Shramico" or use the Download button on this page to go directly to the store listing.',
  },
  {
    q: 'Is registration free?',
    a: 'Yes. Creating an account on Shramico is completely free for both employers and workers. You can register, set up your profile, and explore the platform at no cost.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-[#0f0814] relative overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#e8a060]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-burgundy/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently asked{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8a060] to-burgundy">
              questions
            </span>
          </h2>
          <p className="mt-6 text-white/50 text-lg">
            Can't find what you're looking for? Reach us at{' '}
            <a href="mailto:support@shramico.com" className="text-[#e8a060] hover:text-white transition-colors font-medium">
              support@shramico.com
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:bg-white/[0.04] transition-all duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="font-bold text-white text-base tracking-wide">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-colors ${open === i ? 'bg-burgundy/20' : ''}`}>
                  <ChevronDown
                    size={16}
                    className={`text-white/60 transition-transform duration-300 ${
                      open === i ? 'rotate-180 text-[#e8a060]' : ''
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-5" />
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
