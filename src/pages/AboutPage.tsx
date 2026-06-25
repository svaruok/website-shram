import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight, Users, Briefcase, ShieldCheck, Star, Heart, Target } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <>
      <Helmet>
        <title>About Us — Shramico | Connecting Skilled Workers & Employers</title>
        <meta name="description" content="Learn about Shramico's mission to connect skilled workers with employers across India. Built to honor the Shramik — the backbone of modern India." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#800020] to-[#5C0014] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.05)_0%,_transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-6">
            Our Story
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Building India's <br />
            <span className="text-white/70">Labour Economy</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Shramico was built on a single belief — that every skilled worker deserves dignity, fair pay, and easy access to work. And every employer deserves to find trusted, verified talent, fast.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy/10 border border-burgundy/20 text-burgundy text-xs font-bold uppercase tracking-widest mb-6">
                <Target size={14} /> Our Mission
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-6">
                Connecting skilled hands with those who need them
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                India has millions of skilled workers — electricians, plumbers, masons, carpenters, cleaners — who struggle to find consistent, well-paying work. At the same time, employers waste hours trying to find trusted help.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Shramico bridges that gap. Our platform verifies workers, displays their skills and ratings, and makes hiring as simple as tapping a button.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-burgundy text-white font-bold px-6 py-3 rounded-xl hover:bg-[#a01030] transition-all duration-300 hover:-translate-y-0.5"
              >
                See How It Works <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Verified Workers', desc: 'ID-verified, skill-tested professionals' },
                { icon: Briefcase, label: 'Smart Matching', desc: 'Location-based job matching in seconds' },
                { icon: ShieldCheck, label: 'Safe & Trusted', desc: 'Background checks and user reviews' },
                { icon: Star, label: 'Quality Rated', desc: 'Ratings and reviews after every job' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-burgundy/10 rounded-xl flex items-center justify-center mb-3 text-burgundy">
                    <Icon size={18} />
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy/10 border border-burgundy/20 text-burgundy text-xs font-bold uppercase tracking-widest mb-4">
              <Heart size={14} /> Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">What we stand for</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Dignity for Every Worker', body: 'The Shramik is the backbone of modern India. We honor their skill and hard work by giving them a platform that treats them as professionals.' },
              { title: 'Trust Above All', body: 'Verification, reviews, and transparent profiles ensure both workers and employers can trust every interaction on our platform.' },
              { title: 'Simplicity First', body: 'We build for India — our app works smoothly on low-end devices, in regional languages, and with minimal data usage.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm">
                <div className="w-2 h-10 bg-burgundy rounded-full mb-5" />
                <h3 className="font-black text-gray-900 text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Ready to join Shramico?</h2>
          <p className="text-gray-500 text-lg mb-8">Whether you're looking for work or looking to hire — we've got you covered.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/hire-workers" className="inline-flex items-center gap-2 bg-burgundy text-white font-bold px-8 py-4 rounded-xl hover:bg-[#a01030] transition-all duration-300">
              Hire Workers <ArrowRight size={16} />
            </Link>
            <Link to="/find-jobs" className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition-all duration-300">
              Find Jobs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
