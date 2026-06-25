import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { BookOpen, Clock, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const posts = [
  {
    tag: 'Tips for Employers',
    title: 'How to Find a Reliable Electrician in Pune',
    desc: 'Hiring an electrician can be tricky. Here\'s what to look for — certifications, reviews, and response time — to ensure you get safe, quality work done.',
    date: 'June 2026',
    readTime: '4 min read',
  },
  {
    tag: 'Worker Stories',
    title: 'From Daily Wages to Steady Income: Ramesh\'s Story',
    desc: 'Ramesh, a mason from Nashik, joined Shramico 3 months ago. Today he earns 40% more and has a queue of bookings. Here\'s how.',
    date: 'June 2026',
    readTime: '5 min read',
  },
  {
    tag: 'Industry Insights',
    title: 'The Rise of the Gig Economy for Blue-Collar Workers in India',
    desc: 'India\'s unorganized labour sector is going digital. We explore what this means for skilled workers and the contractors who hire them.',
    date: 'May 2026',
    readTime: '6 min read',
  },
  {
    tag: 'Platform Updates',
    title: 'Shramico Expands to Mumbai: What You Need to Know',
    desc: 'We\'re excited to announce our expansion to Mumbai. Workers and employers in Mumbai can now sign up and start using the Shramico platform.',
    date: 'May 2026',
    readTime: '3 min read',
  },
  {
    tag: 'Tips for Workers',
    title: '5 Ways to Get More Job Bookings on Shramico',
    desc: 'A complete profile, fast response time, and great reviews are key. Here are proven strategies to maximize your bookings on the platform.',
    date: 'April 2026',
    readTime: '4 min read',
  },
  {
    tag: 'Tips for Employers',
    title: 'Why Verified Workers are Worth the Extra Minute',
    desc: 'Shramico\'s verification process takes workers 10 minutes. For employers, it means peace of mind and accountability. Here\'s why it matters.',
    date: 'April 2026',
    readTime: '3 min read',
  },
];

const tagColors: Record<string, string> = {
  'Tips for Employers': 'bg-blue-50 text-blue-700 border-blue-100',
  'Worker Stories': 'bg-green-50 text-green-700 border-green-100',
  'Industry Insights': 'bg-purple-50 text-purple-700 border-purple-100',
  'Platform Updates': 'bg-burgundy/10 text-burgundy border-burgundy/20',
  'Tips for Workers': 'bg-orange-50 text-orange-700 border-orange-100',
};

export default function BlogPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <>
      <Helmet>
        <title>Blog — Shramico | Insights for Workers & Employers</title>
        <meta name="description" content="Tips, stories, and insights for skilled workers and employers from the Shramico team. Learn how to hire better and earn more." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy/10 border border-burgundy/20 text-burgundy text-xs font-bold uppercase tracking-widest mb-6">
            <BookOpen size={14} /> Blog
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Insights for Workers & Employers
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Stories, tips, and updates from the Shramico team and community.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post) => (
              <div
                key={post.title}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border-b border-gray-100">
                  <BookOpen size={36} className="text-gray-300" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${tagColors[post.tag] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                      {post.tag}
                    </span>
                  </div>
                  <h2 className="font-black text-gray-900 text-base leading-snug mb-2">{post.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.desc}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    <span className="flex items-center gap-1"><Tag size={11} /> {post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center bg-burgundy/5 border border-burgundy/15 rounded-3xl p-10">
            <p className="text-gray-600 font-semibold mb-2">More articles coming soon!</p>
            <p className="text-gray-400 text-sm mb-6">Follow us for the latest updates, tips, and success stories from the Shramico community.</p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-burgundy text-white font-bold px-6 py-3 rounded-xl hover:bg-[#a01030] transition-all duration-300"
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
