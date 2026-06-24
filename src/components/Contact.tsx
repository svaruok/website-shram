import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSent(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-5 py-4 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy/30 transition-all duration-300 shadow-sm";

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background glow effects */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            Contact & Support
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            We're here to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-burgundy to-gray-900">
              help
            </span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto text-lg font-medium">
            Have a question, feedback, or partnership enquiry? Reach out and
            our team will get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left Panel */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: Mail,
                label: "Support",
                value: "support@shramico.com",
                sub: "For app help, account issues, and user support",
                href: "mailto:support@shramico.com",
              },
              {
                icon: MapPin,
                label: "Office",
                value: "India",
                sub: "Registered business — details available on request",
                href: null,
              },
            ].map(({ icon: Icon, label, value, sub, href }) => (
              <div
                key={label}
                className="group flex gap-5 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-md transition-all duration-500"
              >
                <div className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-burgundy/30 transition-all duration-300 shadow-sm text-burgundy">
                  <Icon size={20} className="currentColor group-hover:scale-110 transition-transform" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                    {label}
                  </p>

                  {href ? (
                    <a
                      href={href}
                      className="font-bold text-gray-900 text-base hover:text-burgundy transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-bold text-gray-900 text-base">
                      {value}
                    </p>
                  )}

                  <p className="text-gray-500 text-xs mt-1.5 leading-relaxed font-medium">{sub}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                Follow Us
              </p>

              <div className="flex gap-4">
                {[
                  {
                    icon: Twitter,
                    label: "Twitter",
                    url: "https://x.com/shramico",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/company/shramico/",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    url: "https://www.instagram.com/shramico",
                  },
                ].map(({ icon: Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-12 h-12 bg-white border border-gray-200 rounded-2xl flex items-center justify-center hover:border-burgundy/30 text-gray-500 hover:text-burgundy transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-gray-50 rounded-[2rem] border border-gray-100 p-8 sm:p-10 shadow-xl relative overflow-hidden">
            
            <h3 className="font-extrabold text-gray-900 text-2xl mb-8 tracking-tight relative z-10">
              Send a message
            </h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center relative z-10">
                <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Send size={24} className="text-green-600" />
                </div>

                <h4 className="font-bold text-gray-900 text-xl mb-2">
                  Message received!
                </h4>

                <p className="text-gray-500 text-sm font-medium">
                  We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    required
                    className={inputClass}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    required
                    className={inputClass}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  required
                  className={inputClass}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                />

                <textarea
                  rows={6}
                  placeholder="How can we help you?"
                  value={form.message}
                  required
                  className={`${inputClass} resize-none`}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-burgundy to-[#a01030] hover:from-[#a01030] hover:to-[#c02040] text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 shadow-lg shadow-burgundy/30 transition-all duration-300 hover:shadow-burgundy/50 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}