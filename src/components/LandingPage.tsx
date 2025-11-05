import { ArrowRight, Globe, Menu, X, User, LogOut, Sparkles, Heart, Star, Users, Zap, FileText, Palette, CheckCircle } from 'lucide-react';
import { BackgroundPattern, GradientText, IconWrapper, AnimatedElement } from './ImageComponents';
import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';

export default function LandingPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { language, setLanguage, t } = useLanguage();
  const { user, logout, isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="pointer-events-none">
        <BackgroundPattern type="circles" />
        <BackgroundPattern type="characters" />
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
            {/* Language Selector - Hidden on mobile */}
            <button 
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{t.nav.language}</span>
            </button>

            {/* Auth Buttons - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-3">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">{user?.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => { onNavigate('generate'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {t.nav.generate}
              </button>
              <button
                onClick={() => { onNavigate('about'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => { onNavigate('faq'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {t.nav.faq}
              </button>
              <button
                onClick={() => { onNavigate('price'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {t.nav.price}
              </button>
              <button
                onClick={() => { onNavigate('contact'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {t.nav.contact}
              </button>
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={toggleLanguage}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">{t.nav.language}</span>
                  </button>
                </div>
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-700 py-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium">{user?.name}</span>
                    </div>
                    <button
                      onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                      className="w-full flex items-center justify-center gap-1 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium border border-gray-300 rounded-lg"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() => { onNavigate('login'); setIsMobileMenuOpen(false); }}
                      className="flex-1 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium border border-gray-300 rounded-lg"
                    >
                      {t.nav.login}
                    </button>
                    <button
                      onClick={() => { onNavigate('signup'); setIsMobileMenuOpen(false); }}
                      className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      {t.nav.signup}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section className="py-16 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight whitespace-pre-line">
                <GradientText className="text-6xl md:text-8xl">
                  {t.landing.title.split('\n')[0]}
                </GradientText>
                <br />
                <span className="text-4xl md:text-6xl text-gray-800">
                  {t.landing.title.split('\n')[1]}
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-normal">
              {t.landing.subtitle}
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              为外国人精心设计的中文名字，融合文化智慧和现代意义。无论你是商务人士、学生还是文化爱好者，都能找到属于你的完美中文名。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  console.log('Get started clicked');
                  onNavigate('generate');
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-base font-normal transition-colors cursor-pointer relative z-10"
              >
                {t.landing.getStarted}
              </button>
              <button 
                onClick={() => {
                  console.log('Learn more clicked');
                  onNavigate('about');
                }}
                className="text-blue-600 hover:text-blue-700 text-base font-normal flex items-center gap-1 cursor-pointer relative z-10"
              >
                {t.landing.learnMore}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Example names showcase */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-gray-900 mb-1">张浩然</div>
                <div className="text-sm text-gray-500">David</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-gray-900 mb-1">林诗涵</div>
                <div className="text-sm text-gray-500">Sarah</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-gray-900 mb-1">王天佑</div>
                <div className="text-sm text-gray-500">Michael</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                {t.landing.poweredBy}
                <br />
                {t.landing.guidedBy}
              </h2>
              <p className="text-xl text-gray-600 font-normal">
                {t.landing.everyNameTells}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconWrapper size="w-8 h-8" color="text-white">
                      <Zap className="w-full h-full" />
                    </IconWrapper>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t.landing.aiPowered}</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {t.landing.aiPoweredDesc}
                </p>
              </div>

              <div className="text-center group">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconWrapper size="w-8 h-8" color="text-white">
                      <Heart className="w-full h-full" />
                    </IconWrapper>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t.landing.culturalDepth}</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {t.landing.culturalDepthDesc}
                </p>
              </div>

              <div className="text-center group">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconWrapper size="w-8 h-8" color="text-white">
                      <Users className="w-full h-full" />
                    </IconWrapper>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t.landing.personalized}</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {t.landing.personalizedDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-16 tracking-tight">
              {t.landing.simple}
            </h2>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-left">
                  <div className="text-6xl font-light text-gray-300 mb-2">01</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t.landing.step1}</h3>
                  <p className="text-base text-gray-600">
                    {t.landing.step1Desc}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                    <FileText className="w-24 h-24 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-1 text-left">
                  <div className="text-6xl font-light text-gray-300 mb-2">02</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t.landing.step2}</h3>
                  <p className="text-base text-gray-600">
                    {t.landing.step2Desc}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center">
                    <Palette className="w-24 h-24 text-blue-400" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-left">
                  <div className="text-6xl font-light text-gray-300 mb-2">03</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t.landing.step3}</h3>
                  <p className="text-base text-gray-600">
                    {t.landing.step3Desc}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center">
                    <CheckCircle className="w-24 h-24 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-blue-600/10 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">中</span>
            </div>
            <figure className="mt-10">
              <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                <p>
                  "As an expat working in China, having an authentic Chinese name has been invaluable. This service gave me '李明辉' - a name that perfectly captures my personality and is easy for my colleagues to remember. The cultural depth and meaning behind it made me feel truly connected to Chinese culture."
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <div className="mx-auto w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Michael Anderson</div>
                  <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="text-gray-600">Business Consultant, Shanghai</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">Chinese Names Generated</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  50,000+
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">Satisfied Users Worldwide</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  98%
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">Countries Served</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  120+
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
              {t.landing.readyToBegin}
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-normal">
              {t.landing.joinThousands}
            </p>
            <button
              onClick={() => onNavigate('generate')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-base font-normal transition-colors"
            >
              {t.landing.getYourChineseName}
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <div className="space-y-2">
                <button
                  onClick={() => onNavigate('generate')}
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Generate Name
                </button>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Name Gallery
                </button>
                <button
                  onClick={() => onNavigate('price')}
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Pricing
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <div className="space-y-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => onNavigate('team')}
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Our Team
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <div className="space-y-2">
                <button
                  onClick={() => onNavigate('faq')}
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Blog
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <div className="space-y-2">
                <button
                  onClick={() => onNavigate('privacy')}
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200">
            <div className="text-center text-sm text-gray-500">
              {t.landing.copyright}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
