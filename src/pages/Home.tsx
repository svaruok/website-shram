import Navbar from '../components/Navbar';
import CollosseumHero from '../components/hero/CollosseumHero';
import TrustStats from '../components/TrustStats';
import ColosseumPhilosophy from '../components/ColosseumPhilosophy';
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <CollosseumHero />
        <TrustStats />
        <ColosseumPhilosophy />
        <Features />
        <Screenshots />
        <HowItWorks />
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
