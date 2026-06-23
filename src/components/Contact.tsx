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
    "w-full px-5 py-4 rounded-xl border border-white/10 text-sm text-white placeholder-white/30 bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#e8a060]/40 focus:border-[#e8a060]/60 transition-all duration-300 backdrop-blur-md";

  return (
    <section id="contact" className="py-32 bg-[#0a050e] relative overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-burgundy/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#e8a060]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            Contact & Support
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            We're here to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-burgundy to-[#e8a060]">
              help
            </span>
          </h2>

          <p className="mt-6 text-white/50 max-w-xl mx-auto text-lg">
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
                className="group flex gap-5 p-6 bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-burgundy/20 group-hover:border-burgundy/50 transition-all duration-300">
                  <Icon size={20} className="text-[#e8a060] group-hover:text-white" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">
                    {label}
                  </p>

                  {href ? (
                    <a
                      href={href}
                      className="font-bold text-white text-base hover:text-[#e8a060] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-bold text-white text-base">
                      {value}
                    </p>
                  )}

                  <p className="text-white/40 text-xs mt-1.5 leading-relaxed">{sub}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="p-6 bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
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
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-[#e8a060] hover:border-[#e8a060] hover:text-white text-white/60 transition-all duration-300 shadow-lg hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white/[0.02] backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e8a060]/10 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="font-extrabold text-white text-2xl mb-8 tracking-tight relative z-10">
              Send a message
            </h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center relative z-10">
                <div className="w-16 h-16 bg-[#e8a060]/20 border border-[#e8a060]/30 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#e8a060]/20">
                  <Send size={24} className="text-[#e8a060]" />
                </div>

                <h4 className="font-bold text-white text-xl mb-2">
                  Message received!
                </h4>

                <p className="text-white/50 text-sm">
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