import React, { useEffect, useState } from 'react';
import { X, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSubmitted(false);
      setEmail('');
    };
    window.addEventListener('open-coming-soon', handleOpen);
    return () => window.removeEventListener('open-coming-soon', handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-100 transform transition-all duration-300 scale-100 z-10">
        {/* Top Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-[#A63A50] via-[#800020] to-[#5C0014]" />
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Phone Icon wrapper */}
          <div className="mx-auto w-16 h-16 bg-[#800020]/5 rounded-2xl flex items-center justify-center text-burgundy mb-6">
            <Smartphone size={32} className="stroke-[1.5] text-[#800020]" />
          </div>

          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
            Mobile App Coming Soon
          </h3>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            We are putting the finishing touches on our mobile experience to ensure a seamless, 
            secure, and premium connection for all workers and employers. 
            <span className="block mt-2 font-semibold text-[#A63A50]">
              We apologize for any inconvenience caused and appreciate your patience!
            </span>
          </p>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-150 rounded-2xl p-4 flex flex-col items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <p className="text-sm font-bold text-green-800">You're on the waitlist!</p>
              <p className="text-xs text-green-600 text-center">
                Thank you. We will notify you the moment Shramico launches on Google Play.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email for early access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy transition-all bg-gray-50/50"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#800020] text-white font-semibold py-3 rounded-xl hover:bg-[#5C0014] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Join the Waitlist</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}

          <button
            onClick={() => setIsOpen(false)}
            className="mt-6 text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
