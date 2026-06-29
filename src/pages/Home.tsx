import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
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
import WorkerGuide from '../components/WorkerGuide';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <WorkerGuide />
      <main className="flex-grow">
        <Hero />
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
