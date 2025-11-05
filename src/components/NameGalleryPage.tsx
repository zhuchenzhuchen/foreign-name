import { ChevronLeft, Star, TrendingUp, Heart, Sparkles, Search } from 'lucide-react';
import { useState } from 'react';

interface NameCard {
  id: number;
  chinese: string;
  pinyin: string;
  meaning: string;
  englishNames: string[];
  gender: 'M' | 'F' | 'U';
  style: string;
  popularity: number;
}

export default function NameGalleryPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [selectedGender, setSelectedGender] = useState<'all' | 'M' | 'F'>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const popularNames: NameCard[] = [
    { id: 1, chinese: '李明轩', pinyin: 'Lǐ Míngxuān', meaning: 'Bright and distinguished', englishNames: ['Michael', 'Mark', 'Matthew'], gender: 'M', style: 'modern', popularity: 95 },
    { id: 2, chinese: '林诗涵', pinyin: 'Lín Shīhán', meaning: 'Poetic and cultured', englishNames: ['Sarah', 'Sophie', 'Sophia'], gender: 'F', style: 'traditional', popularity: 92 },
    { id: 3, chinese: '王天佑', pinyin: 'Wáng Tiānyòu', meaning: 'Blessed by heaven', englishNames: ['David', 'Daniel', 'Dylan'], gender: 'M', style: 'traditional', popularity: 88 },
    { id: 4, chinese: '张雨萱', pinyin: 'Zhāng Yǔxuān', meaning: 'Graceful as rain', englishNames: ['Emily', 'Emma', 'Eva'], gender: 'F', style: 'modern', popularity: 90 },
    { id: 5, chinese: '陈浩然', pinyin: 'Chén Hàorán', meaning: 'Vast and natural', englishNames: ['Henry', 'Harry', 'Hugo'], gender: 'M', style: 'heroic', popularity: 87 },
    { id: 6, chinese: '刘思婷', pinyin: 'Liú Sītíng', meaning: 'Thoughtful and elegant', englishNames: ['Grace', 'Lily', 'Luna'], gender: 'F', style: 'cute', popularity: 89 },
    { id: 7, chinese: '杨俊杰', pinyin: 'Yáng Jùnjié', meaning: 'Handsome and outstanding', englishNames: ['James', 'John', 'Jack'], gender: 'M', style: 'heroic', popularity: 86 },
    { id: 8, chinese: '黄雅琪', pinyin: 'Huáng Yǎqí', meaning: 'Refined and precious', englishNames: ['Jessica', 'Julia', 'Joy'], gender: 'F', style: 'traditional', popularity: 85 },
    { id: 9, chinese: '赵宇辰', pinyin: 'Zhào Yǔchén', meaning: 'Cosmic and vast', englishNames: ['Alexander', 'Austin', 'Adrian'], gender: 'M', style: 'modern', popularity: 91 },
    { id: 10, chinese: '周欣怡', pinyin: 'Zhōu Xīnyí', meaning: 'Joyful and pleasant', englishNames: ['Chloe', 'Claire', 'Charlotte'], gender: 'F', style: 'cute', popularity: 88 },
    { id: 11, chinese: '吴博文', pinyin: 'Wú Bówén', meaning: 'Scholarly and cultured', englishNames: ['William', 'Wesley', 'Warren'], gender: 'M', style: 'traditional', popularity: 84 },
    { id: 12, chinese: '郑梦洁', pinyin: 'Zhèng Mèngjié', meaning: 'Pure dreams', englishNames: ['Mia', 'Maya', 'Madison'], gender: 'F', style: 'modern', popularity: 87 },
  ];

  const trendingNames: NameCard[] = [
    { id: 13, chinese: '张浩然', pinyin: 'Zhāng Hàorán', meaning: 'Naturally magnificent', englishNames: ['David', 'Derek', 'Dean'], gender: 'M', style: 'modern', popularity: 93 },
    { id: 14, chinese: '李悦心', pinyin: 'Lǐ Yuèxīn', meaning: 'Joyful heart', englishNames: ['Joy', 'Jane', 'Jasmine'], gender: 'F', style: 'cute', popularity: 90 },
    { id: 15, chinese: '王致远', pinyin: 'Wáng Zhìyuǎn', meaning: 'Ambitious and far-reaching', englishNames: ['Victor', 'Vincent', 'Vance'], gender: 'M', style: 'heroic', popularity: 89 },
    { id: 16, chinese: '陈婉儿', pinyin: 'Chén Wǎnér', meaning: 'Gentle and graceful', englishNames: ['Wendy', 'Willow', 'Whitney'], gender: 'F', style: 'traditional', popularity: 88 },
  ];

  const styles = [
    { id: 'all', label: 'All Styles', icon: '✨' },
    { id: 'modern', label: 'Modern', icon: '🌟' },
    { id: 'traditional', label: 'Traditional', icon: '🏛️' },
    { id: 'cute', label: 'Cute', icon: '🌸' },
    { id: 'heroic', label: 'Heroic', icon: '⚔️' },
  ];

  const filteredPopularNames = popularNames.filter(name => {
    const genderMatch = selectedGender === 'all' || name.gender === selectedGender;
    const styleMatch = selectedStyle === 'all' || name.style === selectedStyle;
    const searchMatch = searchTerm === '' || 
      name.chinese.includes(searchTerm) || 
      name.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.englishNames.some(n => n.toLowerCase().includes(searchTerm.toLowerCase()));
    return genderMatch && styleMatch && searchMatch;
  });

  const filteredTrendingNames = trendingNames.filter(name => {
    const genderMatch = selectedGender === 'all' || name.gender === selectedGender;
    const styleMatch = selectedStyle === 'all' || name.style === selectedStyle;
    const searchMatch = searchTerm === '' || 
      name.chinese.includes(searchTerm) || 
      name.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.englishNames.some(n => n.toLowerCase().includes(searchTerm.toLowerCase()));
    return genderMatch && styleMatch && searchMatch;
  });

  const NameCardComponent = ({ name }: { name: NameCard }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {name.chinese}
          </h3>
          <p className="text-sm text-gray-500">{name.pinyin}</p>
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold">{name.popularity}</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 italic">"{name.meaning}"</p>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            name.gender === 'M' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'
          }`}>
            {name.gender === 'M' ? 'Male' : 'Female'}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
            {name.style}
          </span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 mb-1">Perfect for:</p>
        <p className="text-sm text-gray-700">{name.englishNames.join(', ')}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl z-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">中</span>
              </div>
              <span className="font-semibold text-gray-900">Chinese Name Finder</span>
            </div>
          </button>
          <button
            onClick={() => onNavigate('generate')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Generate Your Name
          </button>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              Name Gallery & Inspiration
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">
              Explore thousands of beautiful Chinese names and find inspiration for your perfect name
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-6 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by Chinese name, pinyin, or English name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Gender Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <span className="text-sm font-semibold text-gray-700">Gender:</span>
              <button
                onClick={() => setSelectedGender('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedGender === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedGender('M')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedGender === 'M' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Male
              </button>
              <button
                onClick={() => setSelectedGender('F')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedGender === 'F' 
                    ? 'bg-pink-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Female
              </button>
            </div>

            {/* Style Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm font-semibold text-gray-700">Style:</span>
              {styles.map(style => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedStyle === style.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{style.icon}</span>
                  {style.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Names */}
        {filteredTrendingNames.length > 0 && (
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <h2 className="text-4xl font-semibold text-gray-900">Trending Now</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredTrendingNames.map(name => (
                  <NameCardComponent key={name.id} name={name} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Popular Names */}
        {filteredPopularNames.length > 0 && (
          <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Heart className="w-8 h-8 text-pink-600" />
                <h2 className="text-4xl font-semibold text-gray-900">Popular Names</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPopularNames.map(name => (
                  <NameCardComponent key={name.id} name={name} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredPopularNames.length === 0 && filteredTrendingNames.length === 0 && (
          <section className="py-16 px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No names found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search term</p>
              <button
                onClick={() => {
                  setSelectedGender('all');
                  setSelectedStyle('all');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Ready to Get Your Chinese Name?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Create your own personalized Chinese name in just a few clicks
            </p>
            <button
              onClick={() => onNavigate('generate')}
              className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full text-lg font-semibold transition-colors"
            >
              Generate My Name Now
            </button>
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

