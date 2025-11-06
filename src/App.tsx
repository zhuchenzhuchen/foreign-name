import { useState } from 'react';
import LandingPage from './components/LandingPage';
import GeneratePage from './components/GeneratePage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import PricePage from './components/PricePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PrivacyPage from './components/PrivacyPage';
import NameGalleryPage from './components/NameGalleryPage';
import TeamPage from './components/TeamPage';
import RefundPage from './components/RefundPage';
import ContactPage from './components/ContactPage';
import { LanguageProvider } from './hooks/useLanguage';
import { AuthProvider } from './hooks/useAuth';
import { PaymentProvider } from './hooks/usePayment';

type Page = 'home' | 'generate' | 'about' | 'faq' | 'price' | 'contact' | 'login' | 'signup' | 'privacy' | 'gallery' | 'team' | 'refund';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  return (
    <AuthProvider>
      <PaymentProvider>
        <LanguageProvider>
          {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}
          {currentPage === 'generate' && <GeneratePage onNavigate={handleNavigate} />}
          {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
          {currentPage === 'faq' && <FAQPage onNavigate={handleNavigate} />}
          {currentPage === 'price' && <PricePage onNavigate={handleNavigate} />}
          {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
          {currentPage === 'refund' && <RefundPage onNavigate={handleNavigate} />}
          {currentPage === 'login' && <LoginPage onNavigate={handleNavigate} />}
          {currentPage === 'signup' && <SignupPage onNavigate={handleNavigate} />}
          {currentPage === 'privacy' && <PrivacyPage onNavigate={handleNavigate} />}
          {currentPage === 'gallery' && <NameGalleryPage onNavigate={handleNavigate} />}
          {currentPage === 'team' && <TeamPage onNavigate={handleNavigate} />}
        </LanguageProvider>
      </PaymentProvider>
    </AuthProvider>
  );
}

export default App;
