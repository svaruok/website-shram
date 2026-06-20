import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is Shramico?',
    a: 'Shramico (Quick Hire) is a mobile hiring platform that connects employers with skilled and semi-skilled workers nearby. Employers can post jobs and review applicants, while workers can browse and apply to local opportunities — all through an intuitive mobile app.',
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
    <section id="faq" className="py-24 bg-[#FAF9F7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-label mb-4">FAQ</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-gray-500">
            Can't find what you're looking for? Reach us at{' '}
            <a href="mailto:support@shramico.com" className="text-burgundy hover:underline font-medium">
              support@shramico.com
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-burgundy flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
