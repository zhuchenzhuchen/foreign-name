import { ChevronLeft } from 'lucide-react';

export default function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
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
              Generate
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              EN
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-11">
        <section className="py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              About Chinese Name Finder
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">
              Bridging cultures through the art and meaning of Chinese names.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                This tool helps non-Chinese speakers find natural, meaningful Chinese names by combining phonetic mapping with semantic preferences. We believe that a name is more than just a label—it's a bridge between cultures, a reflection of identity, and a story waiting to be told.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-16 text-center tracking-tight">
              What Makes Us Different
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-3xl p-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cultural Authenticity</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Every name we generate respects Chinese naming traditions, considering tone harmony, character meanings, and cultural significance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Smart Algorithm</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our AI-powered system analyzes phonetic patterns, cultural meanings, and your personal preferences to create the perfect match.
                </p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Global Community</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Join thousands of users worldwide who have discovered their Chinese identity through our platform.
                </p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Personalized Results</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  We tailor each name to your unique preferences, ensuring it resonates with your personality and aspirations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-16 text-center tracking-tight">
              How We Create Your Name
            </h2>

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phonetic Analysis</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We analyze the sounds in your English name to find Chinese characters with similar pronunciations.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Semantic Matching</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Your preferences are matched with characters that carry those meanings and cultural significance.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Harmony Evaluation</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We evaluate tone patterns, character combinations, and cultural appropriateness to ensure natural flow.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Scoring</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Each combination is scored based on multiple factors to present you with the best options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
              Ready to discover your name?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-normal">
              Join thousands discovering their Chinese identity.
            </p>
            <button
              onClick={() => onNavigate('generate')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-base font-normal transition-colors"
            >
              Get your Chinese name
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-500">
            © 2025 Chinese Name Finder. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
