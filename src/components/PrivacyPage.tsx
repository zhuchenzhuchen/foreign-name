import { ChevronLeft, Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPage({ onNavigate }: { onNavigate: (page: string) => void }) {
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
          </div>
        </div>
      </nav>

      <main className="pt-11">
        <section className="py-16 px-6 text-center bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">
              Your privacy and data security are our top priorities
            </p>
            <p className="text-sm text-gray-500 mt-4">Last Updated: November 5, 2025</p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Quick Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <Lock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Secure Data</h3>
                <p className="text-sm text-gray-600">All data is encrypted and securely stored</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Eye className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Transparent</h3>
                <p className="text-sm text-gray-600">Clear about data collection and usage</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <FileText className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
                <p className="text-sm text-gray-600">Full control over your personal data</p>
              </div>
            </div>

            {/* Policy Content */}
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <p className="text-gray-600 mb-3">
                    When you use Chinese Name Finder, we collect the following information:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Name Information:</strong> Your English name, gender preferences, and style choices to generate appropriate Chinese names</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Account Data:</strong> Email address, username, and password (encrypted) if you create an account</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Payment Information:</strong> Billing details processed securely through third-party payment processors</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Data</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Device information and browser type</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>IP address and location data (for analytics)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Pages visited and features used</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Names generated and saved to your account</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span><strong>Name Generation:</strong> To create personalized, culturally appropriate Chinese names based on your preferences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span><strong>Service Improvement:</strong> To analyze usage patterns and enhance our AI algorithms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span><strong>Communication:</strong> To send service updates, newsletters (with your consent), and respond to inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span><strong>Security:</strong> To protect against fraud, unauthorized access, and ensure platform integrity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">3. Data Storage & Security</h2>
                <p className="text-gray-600 mb-4">
                  We take data security seriously and implement industry-standard measures:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">🔒 Encryption</h4>
                    <p className="text-sm text-gray-600">All data is encrypted in transit (SSL/TLS) and at rest using AES-256 encryption</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">🏢 Secure Servers</h4>
                    <p className="text-sm text-gray-600">Data stored on secure cloud servers with regular security audits</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">👤 Access Control</h4>
                    <p className="text-sm text-gray-600">Strict access controls and authentication for all team members</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">📊 Regular Backups</h4>
                    <p className="text-sm text-gray-600">Automated backups to prevent data loss</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">4. Data Sharing & Third Parties</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell your personal information. We may share data with:
                </p>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Service Providers</h4>
                    <p className="text-sm text-gray-600">Payment processors, email services, and cloud hosting (all GDPR compliant)</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Analytics Tools</h4>
                    <p className="text-sm text-gray-600">Plausible Analytics and Microsoft Clarity (privacy-focused, no personal data sold)</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Legal Requirements</h4>
                    <p className="text-sm text-gray-600">When required by law or to protect our rights and users' safety</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">5. Your Privacy Rights</h2>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-4 font-medium">You have the right to:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Access Your Data</h4>
                      <p className="text-sm text-gray-600">Request a copy of all personal data we hold</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Correct Information</h4>
                      <p className="text-sm text-gray-600">Update or correct inaccurate data</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Delete Your Account</h4>
                      <p className="text-sm text-gray-600">Request complete deletion of your data</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Opt-Out</h4>
                      <p className="text-sm text-gray-600">Unsubscribe from marketing communications</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Data Portability</h4>
                      <p className="text-sm text-gray-600">Export your data in a readable format</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Restrict Processing</h4>
                      <p className="text-sm text-gray-600">Limit how we use your information</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">6. Cookies & Tracking</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Essential Cookies:</strong> Required for login and basic functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Analytics Cookies:</strong> Help us understand usage patterns (anonymized)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Preference Cookies:</strong> Remember your settings and language choices</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-3 italic">
                  You can manage cookie preferences in your browser settings.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-gray-700">
                    Chinese Name Finder is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately at{' '}
                    <a href="mailto:privacy@chinesenamefinder.com" className="text-blue-600 underline">privacy@chinesenamefinder.com</a>
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
                <p className="text-gray-600 mb-4">
                  Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>GDPR-compliant data processing agreements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Standard contractual clauses approved by the EU</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Equivalent data protection standards</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through a prominent notice on our website. Your continued use of the service after changes indicates acceptance of the updated policy.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white">
                <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@chinesenamefinder.com</p>
                  <p><strong>Address:</strong> Chinese Name Finder Privacy Team, [Your Address]</p>
                  <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
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

