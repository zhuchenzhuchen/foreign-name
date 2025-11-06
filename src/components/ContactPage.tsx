import { ChevronLeft, Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useState } from 'react';

export default function ContactPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-2xl z-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between text-sm">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="font-semibold text-gray-900">Chinese Name Finder</span>
          </button>
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigate('generate')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.nav.generate}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-11">
        <section className="py-16 px-6 text-center bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-8">{t.contact.getInTouch}</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.contact.email}</h3>
                      <p className="text-gray-600">support@chinesenamefinder.com</p>
                      <p className="text-sm text-gray-500 mt-1">{t.contact.emailDesc}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.contact.phone}</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">{t.contact.phoneDesc}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.contact.address}</h3>
                      <p className="text-gray-600">
                        Chinese Name Finder<br />
                        123 Cultural Bridge Street<br />
                        San Francisco, CA 94102<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.contact.businessHours}</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>{t.contact.mondayFriday}</p>
                        <p>{t.contact.saturdaySunday}</p>
                        <p className="text-sm text-gray-500 mt-2">{t.contact.timezone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media & Support Channels */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">{t.contact.followUs}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        f
                      </div>
                      <span className="text-sm font-medium text-gray-700">Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        𝕏
                      </div>
                      <span className="text-sm font-medium text-gray-700">Twitter</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        in
                      </div>
                      <span className="text-sm font-medium text-gray-700">Instagram</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        in
                      </div>
                      <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t.contact.sendMessage}</h2>
                  <p className="text-gray-600 mb-6">{t.contact.sendMessageDesc}</p>

                  {submitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-900">{t.contact.successTitle}</p>
                        <p className="text-sm text-green-700">{t.contact.successMessage}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.yourName}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder={t.contact.namePlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.yourEmail}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder={t.contact.emailPlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.subject}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">{t.contact.selectSubject}</option>
                        <option value="general">{t.contact.generalInquiry}</option>
                        <option value="support">{t.contact.technicalSupport}</option>
                        <option value="feedback">{t.contact.feedback}</option>
                        <option value="refund">{t.contact.refundRequest}</option>
                        <option value="partnership">{t.contact.partnership}</option>
                        <option value="other">{t.contact.other}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder={t.contact.messagePlaceholder}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          {t.contact.sending}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {t.contact.sendButton}
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Quick Help */}
                <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{t.contact.quickHelp}</h3>
                  <p className="text-sm text-gray-600 mb-3">{t.contact.quickHelpDesc}</p>
                  <button
                    onClick={() => onNavigate('faq')}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {t.contact.visitFAQ} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Support Information */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t.contact.needHelp}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t.contact.needHelpDesc}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <button
                onClick={() => onNavigate('faq')}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t.contact.faq}</h3>
                <p className="text-sm text-gray-600">{t.contact.faqDesc}</p>
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t.contact.documentation}</h3>
                <p className="text-sm text-gray-600">{t.contact.documentationDesc}</p>
              </button>

              <a
                href="mailto:support@chinesenamefinder.com"
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Send className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t.contact.directEmail}</h3>
                <p className="text-sm text-gray-600">{t.contact.directEmailDesc}</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-500">
            © 2025 Chinese Name Finder. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

