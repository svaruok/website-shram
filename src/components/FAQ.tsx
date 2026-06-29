import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="faq" className="py-16 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background glow effects */}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frequently asked{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-burgundy">
              questions
            </span>
          </motion.h2>
          <motion.p 
            className="mt-6 text-gray-600 text-lg font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Can't find what you're looking for? Reach us at{' '}
            <a href="mailto:support@shramico.com" className="text-burgundy hover:text-[#5C0014] transition-colors font-bold">
              support@shramico.com
            </a>
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="font-bold text-gray-900 text-base tracking-wide">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center transition-colors border border-gray-100 ${open === i ? 'bg-burgundy/10 border-burgundy/20' : ''}`}>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-300 ${
                      open === i ? 'rotate-180 text-burgundy' : ''
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
                  <div className="h-px w-full bg-gradient-to-r from-gray-200 to-transparent mb-5" />
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
