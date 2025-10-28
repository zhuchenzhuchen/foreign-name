import { useState } from 'react';
import { Check, Star, Zap, Crown, Gift, Shield, Clock } from 'lucide-react';
import { BackgroundPattern, ChineseCharacter, IconWrapper, AnimatedElement } from './ImageComponents';
import { useLanguage } from '../hooks/useLanguage';
import PaymentPage from './PaymentPage';

export default function PricePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { language, setLanguage, t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    id: string;
    name: string;
    price: number;
    billingCycle: 'monthly' | 'yearly';
  } | null>(null);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const pricingPlans = t.pricing.plans;
  const isYearly = billingCycle === 'yearly';

  const handleSelectPlan = (plan: any) => {
    if (plan.id === 'free') {
      // 免费计划直接跳转到生成页面
      onNavigate('generate');
      return;
    }

    const price = isYearly ? plan.priceYearly : plan.priceMonthly;
    setSelectedPlan({
      id: plan.id,
      name: plan.name,
      price,
      billingCycle,
    });
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setSelectedPlan(null);
    // 支付成功后跳转到生成页面
    onNavigate('generate');
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    setSelectedPlan(null);
  };

  // 如果正在显示支付页面
  if (showPayment && selectedPlan) {
    return (
      <PaymentPage
        planId={selectedPlan.id}
        planName={selectedPlan.name}
        price={selectedPlan.price}
        billingCycle={selectedPlan.billingCycle}
        onSuccess={handlePaymentSuccess}
        onCancel={handlePaymentCancel}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <BackgroundPattern type="circles" />
      
      {/* Chinese characters floating in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ChineseCharacter character="价" size="text-6xl" className="absolute top-20 left-10" />
        <ChineseCharacter character="格" size="text-4xl" className="absolute top-40 right-20" />
        <ChineseCharacter character="优" size="text-5xl" className="absolute bottom-40 left-20" />
        <ChineseCharacter character="惠" size="text-3xl" className="absolute bottom-20 right-10" />
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedElement animation="float" className="absolute top-32 right-32">
          <IconWrapper size="w-12 h-12" color="text-yellow-400">
            <Gift className="w-full h-full" />
          </IconWrapper>
        </AnimatedElement>
        <AnimatedElement animation="pulse" className="absolute bottom-32 left-32">
          <IconWrapper size="w-10 h-10" color="text-green-400">
            <Shield className="w-full h-full" />
          </IconWrapper>
        </AnimatedElement>
        <AnimatedElement animation="bounce" className="absolute top-1/2 right-1/4">
          <IconWrapper size="w-8 h-8" color="text-blue-400">
            <Clock className="w-full h-full" />
          </IconWrapper>
        </AnimatedElement>
      </div>

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
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => onNavigate('price')}
              className="text-blue-600 font-medium"
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
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                {t.pricing.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                {t.pricing.subtitle}
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                  {t.pricing.monthly}
                </span>
                <button
                  onClick={() => setBillingCycle(isYearly ? 'monthly' : 'yearly')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isYearly ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                  {t.pricing.yearly}
                </span>
                {isYearly && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {t.pricing.save20}
                  </span>
                )}
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {t.pricing.mostPopular}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center mb-4">
                      {plan.icon === 'zap' && <Zap className="w-8 h-8 text-blue-600" />}
                      {plan.icon === 'star' && <Star className="w-8 h-8 text-yellow-500" />}
                      {plan.icon === 'crown' && <Crown className="w-8 h-8 text-purple-600" />}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        ${isYearly ? plan.priceYearly : plan.priceMonthly}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{isYearly ? t.pricing.year : t.pricing.month}
                      </span>
                    </div>
                    {isYearly && plan.priceYearly < plan.priceMonthly * 12 && (
                      <p className="text-sm text-green-600 font-medium">
                        {t.pricing.saveAmount.replace('{amount}', `$${Math.round(plan.priceMonthly * 12 - plan.priceYearly)}`)}
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-colors ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {t.pricing.faqTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {t.pricing.faqItems.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{item.question}</h4>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.pricing.ctaTitle}
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                {t.pricing.ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('generate')}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
                >
                  {t.pricing.startFree}
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 rounded-xl font-medium transition-colors"
                >
                  {t.pricing.contactSales}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
