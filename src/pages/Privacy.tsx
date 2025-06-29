import React from 'react';
import { Shield, Calendar } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex p-4 bg-gradient-to-br from-accent-100 to-electric-100 rounded-2xl mb-6">
              <Shield className="h-12 w-12 text-accent-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center text-primary-600">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Last updated: January 15, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">1. Information We Collect</h2>
              <p className="text-primary-600 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-primary-600 mb-6 space-y-2">
                <li>Fill out contact forms or request quotes</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email or phone</li>
                <li>Engage our services for development projects</li>
              </ul>
              <p className="text-primary-600 mb-6">
                This information may include your name, email address, phone number, company information, project details, and any other information you choose to provide.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-primary-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-primary-600 mb-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Communicate with you about services, offers, and events</li>
                <li>Process transactions and send related information</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-primary-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-primary-600 mb-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">4. Data Security</h2>
              <p className="text-primary-600 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">5. Data Retention</h2>
              <p className="text-primary-600 mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-primary-600 mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside text-primary-600 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our website functionality and user experience</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="text-primary-600 mb-6">
                You can control cookies through your browser settings, but disabling cookies may affect website functionality.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">7. Your Rights and Choices</h2>
              <p className="text-primary-600 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-primary-600 mb-6 space-y-2">
                <li>Access: Request a copy of the personal information we hold about you</li>
                <li>Rectification: Request correction of inaccurate or incomplete information</li>
                <li>Erasure: Request deletion of your personal information</li>
                <li>Portability: Request transfer of your data to another service provider</li>
                <li>Objection: Object to processing of your personal information</li>
                <li>Restriction: Request limitation of processing</li>
              </ul>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">8. Third-Party Services</h2>
              <p className="text-primary-600 mb-6">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any personal information.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">9. Children's Privacy</h2>
              <p className="text-primary-600 mb-6">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.9s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">10. International Data Transfers</h2>
              <p className="text-primary-600 mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your personal information.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '1.0s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-primary-600 mb-6">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. We encourage you to review this privacy policy periodically.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '1.1s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">12. Contact Us</h2>
              <p className="text-primary-600 mb-6">
                If you have any questions about this privacy policy or our privacy practices, please contact us:
              </p>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-primary-800 font-medium">TechCraft Solutions</p>
                <p className="text-primary-600">Email: privacy@techcraft.dev</p>
                <p className="text-primary-600">Phone: +1 (555) 123-4567</p>
                <p className="text-primary-600">Address: Remote & Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-electric-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Privacy Matters to Us
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              We're committed to protecting your privacy and handling your data responsibly. 
              If you have any questions or concerns, don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/faq"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-accent-600 transition-all duration-300"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}