import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { CheckCircle, UserPlus, Briefcase, TrendingUp, Download, IndianRupee, Clock, Star, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { handleDownload, getAppLink } from '../utils/download';

const benefits = [
  { icon: IndianRupee, title: 'Fair, Transparent Pay', desc: 'Set your own rates. Get paid directly through the app with no hidden deductions.' },
  { icon: Briefcase, title: 'Steady Job Flow', desc: 'Get matched with employers near you — no middle man, no commissions eating your earnings.' },
  { icon: Clock, title: 'Work on Your Terms', desc: 'Choose when you work and which jobs to accept. Full flexibility, always.' },
  { icon: Star, title: 'Build Your Reputation', desc: 'Earn ratings from customers and grow your profile. Better reviews = more jobs.' },
];

const steps = [
  { step: '01', icon: UserPlus, title: 'Create Your Profile', desc: 'Download the app, register, and add your skills, experience, and work photos.' },
  { step: '02', icon: CheckCircle, title: 'Get Verified', desc: 'Submit your ID for verification. Verified workers get more job matches and higher trust.' },
  { step: '03', icon: Briefcase, title: 'Accept Jobs', desc: 'Receive job requests from nearby employers. Review details and accept what suits you.' },
  { step: '04', icon: TrendingUp, title: 'Grow Your Income', desc: 'Complete jobs, earn great reviews, and build a steady stream of work through Shramico.' },
];

export default function FindJobsPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <>
      <Helmet>
        <title>Find Work Near You — Shramico | Jobs for Skilled Workers</title>
        <meta name="description" content="Are you a skilled worker looking for jobs? Join Shramico to find electrician, plumber, mason, carpenter, and other skilled work near you. Register free today." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(128,0,32,0.3)_0%,_transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-6">
            For Workers & Skilled Professionals
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Get hired for your skills. <br />
            <span className="text-burgundy">Earn what you deserve.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Join thousands of electricians, plumbers, masons, carpenters and more who are finding consistent, well-paying work through Shramico.
          </p>
          <a
            href={getAppLink() || '#'}
            onClick={handleDownload}
            target={getAppLink() ? '_blank' : undefined}
            rel={getAppLink() ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-3 bg-burgundy text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:bg-[#a01030] hover:-translate-y-1 transition-all duration-300"
          >
            <Download size={18} /> Join as a Worker — It's Free
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">How to get started</h2>
            <p className="text-gray-500 text-lg">Start earning in 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="relative bg-gray-50 border border-gray-100 rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-gray-200">
                <span className="text-5xl font-black text-gray-100 absolute top-4 right-4 leading-none">{step}</span>
                <div className="w-12 h-12 bg-burgundy text-white rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Icon size={22} />
                </div>
                <h3 className="font-black text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Why workers love Shramico</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-5 items-start hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 bg-burgundy/10 text-burgundy rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Your next job is waiting</h2>
          <p className="text-gray-500 text-lg mb-8">Download Shramico, build your profile, and start getting hired today. Registration is completely free.</p>
          <a
            href={getAppLink() || '#'}
            onClick={handleDownload}
            target={getAppLink() ? '_blank' : undefined}
            rel={getAppLink() ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-3 bg-burgundy text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:bg-[#a01030] hover:-translate-y-1 transition-all duration-300"
          >
            <Download size={18} /> Download Free <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
