import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Frequently Asked Questions | Shramico</title>
        <meta name="description" content="Find answers to common questions about Shramico. Learn how to register, post jobs, apply for work, and get support." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-10">
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
