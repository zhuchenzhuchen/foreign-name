import { ChevronLeft, Users, Heart, Globe, Award, Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  chineseName: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export default function TeamPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Emily Chen',
      chineseName: '陈慧敏',
      role: 'Founder & CEO',
      bio: 'Linguist and AI researcher with 15+ years experience in Chinese language technology. PhD in Computational Linguistics from Stanford.',
      image: '👩‍💼',
      linkedin: '#',
      twitter: '#',
      email: 'emily@chinesenamefinder.com'
    },
    {
      id: 2,
      name: 'David Liu',
      chineseName: '刘明辉',
      role: 'Chief Technology Officer',
      bio: 'Full-stack developer and machine learning engineer. Previously led engineering teams at major tech companies.',
      image: '👨‍💻',
      linkedin: '#',
      twitter: '#',
      email: 'david@chinesenamefinder.com'
    },
    {
      id: 3,
      name: 'Sarah Wang',
      chineseName: '王雅琪',
      role: 'Cultural Consultant',
      bio: 'Expert in Chinese culture and naming traditions. MA in Chinese Studies and certified cultural consultant.',
      image: '👩‍🎓',
      linkedin: '#',
      email: 'sarah@chinesenamefinder.com'
    },
    {
      id: 4,
      name: 'Michael Zhang',
      chineseName: '张浩然',
      role: 'Lead AI Engineer',
      bio: 'Specializes in natural language processing and AI model development. Published researcher in NLP.',
      image: '👨‍🔬',
      linkedin: '#',
      twitter: '#',
      email: 'michael@chinesenamefinder.com'
    },
    {
      id: 5,
      name: 'Jessica Li',
      chineseName: '李诗涵',
      role: 'UX/UI Designer',
      bio: 'Creates beautiful and intuitive user experiences. 10+ years in product design for global audiences.',
      image: '👩‍🎨',
      linkedin: '#',
      email: 'jessica@chinesenamefinder.com'
    },
    {
      id: 6,
      name: 'Kevin Huang',
      chineseName: '黄俊杰',
      role: 'Marketing Director',
      bio: 'Growth strategist with expertise in international markets. Helping people discover Chinese culture.',
      image: '👨‍💼',
      linkedin: '#',
      twitter: '#',
      email: 'kevin@chinesenamefinder.com'
    }
  ];

  const values = [
    {
      icon: '🌏',
      title: 'Cultural Respect',
      description: 'We honor Chinese naming traditions while making them accessible to everyone'
    },
    {
      icon: '🎯',
      title: 'Accuracy',
      description: 'Every name is linguistically accurate and culturally appropriate'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Combining AI technology with human expertise for the best results'
    },
    {
      icon: '❤️',
      title: 'Personalization',
      description: 'Each name is uniquely crafted to match your personality and preferences'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
            Generate Name
          </button>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-6 text-center bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">
              Passionate experts bridging cultures through the art of Chinese naming
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed opacity-95 max-w-3xl mx-auto">
                We believe that a Chinese name is more than just characters—it's a bridge between cultures, 
                a reflection of identity, and a meaningful connection to one of the world's oldest civilizations. 
                Our team combines linguistic expertise, cultural knowledge, and cutting-edge AI to help people 
                from all backgrounds find their perfect Chinese name.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                The People Behind the Names
              </h2>
              <p className="text-xl text-gray-600">
                A diverse team of linguists, engineers, and cultural experts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map(member => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-lg text-blue-600 mb-2">{member.chineseName}</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex items-center justify-center gap-3 pt-6 border-t border-gray-100">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a 
                        href={member.twitter}
                        className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold mb-4">Our Impact</h2>
              <p className="text-xl opacity-90">Helping people connect with Chinese culture</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50K+</div>
                <div className="text-lg opacity-90">Names Generated</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">120+</div>
                <div className="text-lg opacity-90">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">5+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-12">
              Awards & Recognition
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-semibold text-gray-900 mb-2">Best Cultural Tech 2024</h3>
                <p className="text-sm text-gray-600">Global Innovation Awards</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="font-semibold text-gray-900 mb-2">Top AI Application</h3>
                <p className="text-sm text-gray-600">Tech Leaders Summit</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-semibold text-gray-900 mb-2">Cultural Bridge Award</h3>
                <p className="text-sm text-gray-600">International Cultural Exchange</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're always looking for talented individuals who are passionate about language, 
              culture, and technology. If you want to help bridge cultures and make a global impact, 
              we'd love to hear from you.
            </p>
            <button
              onClick={() => window.location.href = 'mailto:careers@chinesenamefinder.com'}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold transition-colors"
            >
              View Open Positions
            </button>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Want to Connect?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We love hearing from our users and partners. Reach out to us anytime!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Contact Us
              </button>
              <a
                href="mailto:hello@chinesenamefinder.com"
                className="px-6 py-3 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 rounded-lg font-medium transition-colors"
              >
                hello@chinesenamefinder.com
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

