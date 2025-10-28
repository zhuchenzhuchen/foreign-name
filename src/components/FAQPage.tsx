import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function FAQPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { language, setLanguage, t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = t.faq.items;

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl z-50 border-b border-gray-200/30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">中</span>
              </div>
              <span className="hidden sm:block">Chinese Name Finder</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('generate')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              {t.nav.generate}
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => onNavigate('faq')}
              className="text-blue-600 font-medium"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => onNavigate('price')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              {t.nav.price}
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <span className="text-sm font-medium">{t.nav.language}</span>
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('login')}
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                {t.nav.login}
              </button>
              <button
                onClick={() => onNavigate('signup')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                {t.nav.signup}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <div className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                {t.faq.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t.faq.subtitle}
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="pr-4 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {item.question}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.questionEn}
                      </p>
                    </div>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            {language === 'en' ? 'Answer' : '回答'}
                          </h4>
                          <div className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </div>
                        </div>
                        <div className="border-t border-gray-100 pt-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            {language === 'en' ? '中文回答' : 'English Answer'}
                          </h4>
                          <div className="text-gray-600 leading-relaxed">
                            {item.answerEn}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.faq.stillHaveQuestions}
              </h3>
              <p className="text-gray-600 mb-6">
                {t.faq.contactUs}
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                {t.faq.contactButton}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
