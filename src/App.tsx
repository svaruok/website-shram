import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import AccountDeletionPage from './pages/AccountDeletionPage';
import ComingSoonModal from './components/ComingSoonModal';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
        <Route path="/account-deletion" element={<AccountDeletionPage />} />
      </Routes>
      <ComingSoonModal />
    </BrowserRouter>
  );
}
