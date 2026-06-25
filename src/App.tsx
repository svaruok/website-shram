import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import HireWorkersPage from './pages/HireWorkersPage';
import FindJobsPage from './pages/FindJobsPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import AccountDeletionPage from './pages/AccountDeletionPage';
import PunePage from './pages/cities/PunePage';
import MumbaiPage from './pages/cities/MumbaiPage';
import NashikPage from './pages/cities/NashikPage';
import ComingSoonModal from './components/ComingSoonModal';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hire-workers" element={<HireWorkersPage />} />
          <Route path="/find-jobs" element={<FindJobsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
          <Route path="/account-deletion" element={<AccountDeletionPage />} />
          {/* City SEO pages */}
          <Route path="/construction-workers-pune" element={<PunePage />} />
          <Route path="/mason-pune" element={<PunePage />} />
          <Route path="/electrician-pune" element={<PunePage />} />
          <Route path="/plumber-pune" element={<PunePage />} />
          <Route path="/workers-mumbai" element={<MumbaiPage />} />
          <Route path="/construction-workers-mumbai" element={<MumbaiPage />} />
          <Route path="/workers-nashik" element={<NashikPage />} />
          <Route path="/construction-workers-nashik" element={<NashikPage />} />
        </Routes>
        <ComingSoonModal />
      </BrowserRouter>
    </HelmetProvider>
  );
}
