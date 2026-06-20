import { useState } from 'react';
import { Mail, Building, MapPin, Send, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/40 focus:border-burgundy/60 transition-all duration-200';

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Contact & Support</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            We're here to help
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Have a question, feedback, or partnership enquiry? Reach out and our team
            will get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: Mail,
                label: 'Support',
                value: 'support@shramico.com',
                sub: 'For app help, account issues, and user support',
                href: 'mailto:support@shramico.com',
              },
              {
                icon: Building,
                label: 'Business',
                value: 'business@shramico.com',
                sub: 'For partnerships, enterprise enquiries, and media',
                href: 'mailto:business@shramico.com',
              },
              {
                icon: MapPin,
                label: 'Office',
                value: 'India',
                sub: 'Registered business — details available on request',
                href: null,
              },
            ].map(({ icon: Icon, label, value, sub, href }) => (
              <div key={label} className="flex gap-4 p-5 bg-[#FAF9F7] rounded-2xl border border-gray-100">
                <div className="w-10 h-10 bg-burgundy/8 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-burgundy" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="font-semibold text-gray-900 text-sm hover:text-burgundy transition-colors">{value}</a>
                  ) : (
                    <p className="font-semibold text-gray-900 text-sm">{value}</p>
                  )}
                  <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="p-5 bg-[#FAF9F7] rounded-2xl border border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Instagram, label: 'Instagram' },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-burgundy hover:border-burgundy hover:text-white text-gray-400 transition-all duration-200 cursor-pointer"
                    title={label}
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-[#FAF9F7] rounded-3xl border border-gray-100 p-8 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg mb-6">Send a message</h3>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <Send size={22} className="text-green-500" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Message received!</h4>
                <p className="text-gray-500 text-sm">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                  className={inputClass}
                />
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className={`${inputClass} resize-none`}
                />
                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
