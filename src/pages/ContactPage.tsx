import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Contact Us | Shramico</title>
        <meta name="description" content="Get in touch with the Shramico team. We're here to help you with any questions, feedback, or support you need." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-10">
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
