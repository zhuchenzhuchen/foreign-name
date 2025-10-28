import { useState } from 'react';
import LandingPage from './components/LandingPage';
import GeneratePage from './components/GeneratePage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import PricePage from './components/PricePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { LanguageProvider } from './hooks/useLanguage';
import { AuthProvider } from './hooks/useAuth';
import { PaymentProvider } from './hooks/usePayment';

type Page = 'home' | 'generate' | 'about' | 'faq' | 'price' | 'contact' | 'login' | 'signup';

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
          {currentPage === 'contact' && <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Contact Page - Coming Soon</h1></div>}
          {currentPage === 'login' && <LoginPage onNavigate={handleNavigate} />}
          {currentPage === 'signup' && <SignupPage onNavigate={handleNavigate} />}
        </LanguageProvider>
      </PaymentProvider>
    </AuthProvider>
  );
}

export default App;
