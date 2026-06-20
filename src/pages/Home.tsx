import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustStats from '../components/TrustStats';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Screenshots from '../components/Screenshots';
import WhyShramico from '../components/WhyShramico';
import SafetyPrivacy from '../components/SafetyPrivacy';
import FAQ from '../components/FAQ';
import DownloadCTA from '../components/DownloadCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <Features />
        <HowItWorks />
        <Screenshots />
        <WhyShramico />
        <SafetyPrivacy />
        <FAQ />
        <DownloadCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
