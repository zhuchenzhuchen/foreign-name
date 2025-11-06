import { ChevronLeft, RefreshCw, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function RefundPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { t } = useLanguage();

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
        <section className="py-16 px-6 text-center bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl mb-6">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              {t.refund.title}
            </h1>
            <p className="text-xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">
              {t.refund.subtitle}
            </p>
            <p className="text-sm text-gray-500 mt-4">{t.refund.lastUpdated}</p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Quick Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{t.refund.days30}</h3>
                <p className="text-sm text-gray-600">{t.refund.days30Desc}</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{t.refund.simpleProcess}</h3>
                <p className="text-sm text-gray-600">{t.refund.simpleProcessDesc}</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <AlertCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{t.refund.noQuestions}</h3>
                <p className="text-sm text-gray-600">{t.refund.noQuestionsDesc}</p>
              </div>
            </div>

            {/* Policy Content */}
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t.refund.section1Title}</h2>
                <div className="bg-green-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    {t.refund.section1Content}
                  </p>
                  <div className="bg-white rounded-lg p-5 border-l-4 border-green-600">
                    <p className="font-semibold text-gray-900 mb-2">{t.refund.guarantee}</p>
                    <p className="text-gray-600 text-sm">
                      {t.refund.guaranteeDesc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t.refund.section2Title}</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      {t.refund.eligibleTitle}
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {t.refund.eligibleItems.map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      {t.refund.notEligibleTitle}
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {t.refund.notEligibleItems.map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-600 mr-2">✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t.refund.section3Title}</h2>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white flex items-center justify-center font-semibold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.refund.step1Title}</h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {t.refund.step1Desc}
                      </p>
                      <div className="mt-2 bg-gray-50 rounded p-3 text-sm text-gray-700">
                        <p><strong>Email:</strong> support@chinesenamefinder.com</p>
                        <p className="mt-1"><strong>{t.refund.subject}:</strong> {t.refund.subjectText}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white flex items-center justify-center font-semibold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.refund.step2Title}</h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {t.refund.step2Desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white flex items-center justify-center font-semibold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.refund.step3Title}</h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {t.refund.step3Desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white flex items-center justify-center font-semibold">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.refund.step4Title}</h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {t.refund.step4Desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t.refund.section4Title}</h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    {t.refund.processingItems.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 font-bold mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t.refund.section5Title}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">💳 {t.refund.creditCard}</h4>
                    <p className="text-sm text-gray-600">{t.refund.creditCardDesc}</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">💰 {t.refund.paypal}</h4>
                    <p className="text-sm text-gray-600">{t.refund.paypalDesc}</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">🇨🇳 {t.refund.alipay}</h4>
                    <p className="text-sm text-gray-600">{t.refund.alipayDesc}</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">💚 {t.refund.wechat}</h4>
                    <p className="text-sm text-gray-600">{t.refund.wechatDesc}</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t.refund.section6Title}</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    {t.refund.section6Content}
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    {t.refund.partialRefundItems.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white">
                <h2 className="text-3xl font-semibold mb-4">{t.refund.contactTitle}</h2>
                <p className="mb-4">
                  {t.refund.contactContent}
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> support@chinesenamefinder.com</p>
                  <p><strong>{t.refund.responseTime}:</strong> {t.refund.responseTimeDesc}</p>
                  <p><strong>{t.refund.phone}:</strong> +1 (555) 123-4567</p>
                  <p className="text-sm opacity-90 mt-4">{t.refund.satisfaction}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-500">
            © 2025 Chinese Name Finder. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

