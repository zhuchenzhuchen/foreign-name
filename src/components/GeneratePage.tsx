import { useState } from 'react';
import { Volume2, ChevronLeft, Loader2, Brain, Palette, Target } from 'lucide-react';
import { BackgroundPattern, IconWrapper, AnimatedElement, StepNumber, CardWithShadow } from './ImageComponents';
import { DeepSeekAPI, ChineseName, NameGenerationRequest } from '../services/api';
import { useLanguage } from '../hooks/useLanguage';

export default function GeneratePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { language, setLanguage, t } = useLanguage();
  const [formData, setFormData] = useState({
    englishName: '',
    gender: 'M',
    style: 'modern',
    preferences: [] as string[],
  });

  const [showResults, setShowResults] = useState(false);
  const [customPref, setCustomPref] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generationStep, setGenerationStep] = useState(0);
  const [displayedName, setDisplayedName] = useState<ChineseName | null>(null);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const styles = [
    { id: 'traditional', label: t.generate.traditional },
    { id: 'modern', label: t.generate.modern },
    { id: 'cute', label: t.generate.cute },
    { id: 'heroic', label: t.generate.heroic },
  ];

  const prefOptions = ['Wise', 'Peace', 'Success', 'Brave', 'Kind', 'Strong', 'Happy', 'Beautiful'];

  const handleGenerate = async () => {
    if (!formData.englishName.trim()) {
      setError(t.errors.enterName);
      return;
    }

    setIsLoading(true);
    setError(null);
    setShowResults(false);
    setGenerationStep(0);
    setDisplayedName(null);

    try {
      const request: NameGenerationRequest = {
        englishName: formData.englishName.trim(),
        gender: formData.gender as 'M' | 'F' | 'N',
        style: formData.style as 'traditional' | 'modern' | 'cute' | 'heroic',
        preferences: formData.preferences,
      };

      // 快速生成过程 - 优化速度
      setGenerationStep(1);
      
      // 并行执行API调用和步骤显示
      const [result] = await Promise.all([
        DeepSeekAPI.generateChineseName(request),
        new Promise(resolve => setTimeout(resolve, 300)).then(() => {
          setGenerationStep(2);
          return new Promise(resolve => setTimeout(resolve, 200));
        }).then(() => {
          setGenerationStep(3);
          return new Promise(resolve => setTimeout(resolve, 200));
        })
      ]);
      
      // 逐步显示结果
      setDisplayedName({
        ...result,
        characters: '',
        pinyin: '',
        meaning: '',
        individualMeanings: [],
        culturalSignificance: '',
        bestUsedFor: [],
        alternatives: []
      });
      
      // 快速显示结果 - 优化速度
      setTimeout(() => {
        setDisplayedName(prev => prev ? { ...prev, characters: result.characters } : null);
      }, 100);
      
      // 逐步显示拼音
      setTimeout(() => {
        setDisplayedName(prev => prev ? { ...prev, pinyin: result.pinyin } : null);
      }, 200);
      
      // 逐步显示含义
      setTimeout(() => {
        setDisplayedName(prev => prev ? { ...prev, meaning: result.meaning } : null);
      }, 300);
      
      // 逐步显示字符含义
      setTimeout(() => {
        setDisplayedName(prev => prev ? { ...prev, individualMeanings: result.individualMeanings } : null);
      }, 400);
      
      // 逐步显示文化意义
      setTimeout(() => {
        setDisplayedName(prev => prev ? { ...prev, culturalSignificance: result.culturalSignificance } : null);
      }, 500);
      
      // 逐步显示用途
      setTimeout(() => {
        setDisplayedName(prev => prev ? { ...prev, bestUsedFor: result.bestUsedFor } : null);
      }, 600);
      
      // 逐步显示备选名字
      setTimeout(() => {
        setDisplayedName(prev => prev ? { ...prev, alternatives: result.alternatives } : null);
        setShowResults(true);
        setIsLoading(false);
      }, 700);

    } catch (err) {
      console.error('Error generating name:', err);
      setError(err instanceof Error ? err.message : t.errors.generateFailed);
      setIsLoading(false);
    }
  };

  const addPreference = (pref: string) => {
    if (!formData.preferences.includes(pref)) {
      setFormData({ ...formData, preferences: [...formData.preferences, pref] });
    }
  };

  const removePreference = (pref: string) => {
    setFormData({ ...formData, preferences: formData.preferences.filter(p => p !== pref) });
  };

  const addCustomPreference = () => {
    if (customPref && !formData.preferences.includes(customPref)) {
      setFormData({ ...formData, preferences: [...formData.preferences, customPref] });
      setCustomPref('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative">
      {/* Background decorative elements */}
      <BackgroundPattern type="mixed" />
      
      {/* Additional floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedElement animation="float" className="absolute top-32 right-32">
          <IconWrapper size="w-10 h-10" color="text-blue-400">
            <Brain className="w-full h-full" />
          </IconWrapper>
        </AnimatedElement>
        <AnimatedElement animation="pulse" className="absolute bottom-32 left-32">
          <IconWrapper size="w-8 h-8" color="text-purple-400">
            <Palette className="w-full h-full" />
          </IconWrapper>
        </AnimatedElement>
        <AnimatedElement animation="bounce" className="absolute top-1/2 right-1/4">
          <IconWrapper size="w-6 h-6" color="text-green-400">
            <Target className="w-full h-full" />
          </IconWrapper>
        </AnimatedElement>
      </div>

      <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-2xl z-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between text-sm">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="font-semibold text-gray-900">{t.nav.backToHome}</span>
          </button>
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigate('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.nav.about}
            </button>
            <button 
              onClick={toggleLanguage}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.nav.language}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-11">
        <div className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
                {t.generate.title}
              </h1>
              <p className="text-lg text-gray-600">
                {t.generate.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                {/* Step 1: Enter your name */}
                <div className="relative">
                  <StepNumber number="1" color="bg-blue-600" />
                  <CardWithShadow className="relative">
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      {t.generate.yourEnglishName}
                    </label>
                    <input
                      type="text"
                      value={formData.englishName}
                      onChange={(e) => setFormData({ ...formData, englishName: e.target.value })}
                      placeholder="e.g., William"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all bg-white"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      {t.generate.step1Desc || 'Tell us your English name and what you value most.'}
                    </p>
                  </CardWithShadow>
                </div>

                {/* Step 2: Choose your style */}
                <div className="relative">
                  <StepNumber number="2" color="bg-cyan-600" />
                  <CardWithShadow className="relative">
                    <label className="block text-sm font-medium text-gray-900 mb-4">{t.generate.gender}</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'M', label: t.generate.male },
                        { value: 'F', label: t.generate.female },
                        { value: 'N', label: t.generate.neutral },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, gender: option.value })}
                          className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                            formData.gender === option.value
                              ? 'bg-blue-600 text-white'
                              : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      {t.generate.step2Desc || 'Select from traditional, modern, or other meaningful styles.'}
                    </p>
                  </CardWithShadow>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8">
                  <label className="block text-sm font-medium text-gray-900 mb-4">{t.generate.nameStyle}</label>
                  <div className="grid grid-cols-2 gap-3">
                    {styles.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setFormData({ ...formData, style: style.id })}
                        className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                          formData.style === style.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
                        }`}
                      >
                        {style.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8">
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    {t.generate.preferences}
                    <span className="text-gray-500 font-normal ml-2">{t.generate.optional}</span>
                  </label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {prefOptions.map((pref) => (
                      <button
                        key={pref}
                        onClick={() =>
                          formData.preferences.includes(pref)
                            ? removePreference(pref)
                            : addPreference(pref)
                        }
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          formData.preferences.includes(pref)
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300'
                        }`}
                      >
                        {pref}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={customPref}
                      onChange={(e) => setCustomPref(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addCustomPreference()}
                      placeholder={t.generate.addCustomPreference}
                      className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all bg-white text-sm"
                    />
                    <button
                      onClick={addCustomPreference}
                      className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-900 rounded-xl text-sm font-medium transition-colors border border-gray-300"
                    >
                      {t.generate.add}
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={!formData.englishName || isLoading}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {generationStep === 1 && t.generate.generatingStep1}
                      {generationStep === 2 && t.generate.generatingStep2}
                      {generationStep === 3 && t.generate.generatingStep3}
                      {generationStep === 0 && t.generate.generating}
                    </>
                  ) : (
                    t.generate.generateButton
                  )}
                </button>

                {error && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 rounded-3xl p-8">
                {!showResults && !isLoading ? (
                  <div className="h-full flex flex-col items-center justify-center text-center min-h-[500px]">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t.generate.yourNameAwaits}</h3>
                    <p className="text-base text-gray-600 max-w-md">
                      {t.generate.fillInfo}
                    </p>
                  </div>
                ) : isLoading ? (
                  <div className="h-full flex flex-col items-center justify-center text-center min-h-[500px]">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 animate-pulse" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {generationStep === 1 && t.generate.generatingStep1}
                      {generationStep === 2 && t.generate.generatingStep2}
                      {generationStep === 3 && t.generate.generatingStep3}
                    </h3>
                    <p className="text-base text-gray-600 max-w-md">
                      {t.generate.generating}
                    </p>
                  </div>
                ) : displayedName ? (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-sm font-medium text-gray-500 mb-2">{t.generate.yourChineseName}</h2>
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center mb-6">
                        <div className="text-6xl font-semibold mb-3 transition-all duration-500 ease-in-out">
                          {displayedName.characters || '...'}
                        </div>
                        <div className="text-2xl mb-2 opacity-80 transition-all duration-500 ease-in-out">
                          {displayedName.pinyin || '...'}
                        </div>
                        <div className="text-lg mb-4 opacity-70 transition-all duration-500 ease-in-out">
                          {t.generate.englishName}: {displayedName.englishName}
                        </div>
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm">
                          <Volume2 className="w-4 h-4" />
                          <span>{t.generate.listenToPronunciation}</span>
                        </button>
                      </div>
                    </div>

                    {displayedName.individualMeanings.length > 0 && (
                      <div className="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-500 ease-in-out">
                        <h3 className="text-sm font-medium text-gray-900 mb-4">{t.generate.characterMeanings}</h3>
                        <div className="space-y-4">
                          {displayedName.individualMeanings.map((char, idx) => (
                            <div key={idx} className="flex gap-4">
                              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl font-semibold flex-shrink-0">
                                {char.character}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-gray-900">{char.pinyin}</div>
                                <div className="text-sm text-gray-600">{char.meaning}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {displayedName.meaning && (
                      <div className="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-500 ease-in-out">
                        <h3 className="text-sm font-medium text-gray-900 mb-2">{t.generate.overallMeaning}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {displayedName.meaning}
                        </p>
                      </div>
                    )}

                    {displayedName.culturalSignificance && (
                      <div className="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-500 ease-in-out">
                        <h3 className="text-sm font-medium text-gray-900 mb-2">{t.generate.culturalSignificance}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {displayedName.culturalSignificance}
                        </p>
                      </div>
                    )}

                    {displayedName.bestUsedFor.length > 0 && (
                      <div className="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-500 ease-in-out">
                        <h3 className="text-sm font-medium text-gray-900 mb-3">{t.generate.bestUsedFor}</h3>
                        <div className="flex flex-wrap gap-2">
                          {displayedName.bestUsedFor.map((use, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {displayedName.alternatives.length > 0 && (
                      <div className="transition-all duration-500 ease-in-out">
                        <h3 className="text-sm font-medium text-gray-900 mb-3">{t.generate.alternativeNames}</h3>
                        <div className="space-y-2">
                          {displayedName.alternatives.map((alt, idx) => (
                            <button
                              key={idx}
                              className="w-full p-4 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-left transition-all"
                            >
                              <div className="font-medium text-gray-900">{alt.characters} ({alt.pinyin})</div>
                              <div className="text-sm text-gray-600 mt-1">{alt.meaning}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 返回首页按钮 */}
                    <div className="pt-6 border-t border-gray-200">
                      <button
                        onClick={() => onNavigate('home')}
                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-medium text-base transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <ChevronLeft className="w-5 h-5" />
                        {t.nav.backToHome}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center min-h-[500px]">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{t.generate.yourNameAwaits}</h3>
                    <p className="text-base text-gray-600 max-w-md">
                      {t.generate.fillInfo}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
