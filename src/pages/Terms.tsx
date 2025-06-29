import React from 'react';
import { FileText, Calendar } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex p-4 bg-gradient-to-br from-accent-100 to-electric-100 rounded-2xl mb-6">
              <FileText className="h-12 w-12 text-accent-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Terms of Service
            </h1>
            <div className="flex items-center justify-center text-primary-600">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Last updated: January 15, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-primary-600 mb-6">
                By accessing and using TechCraft Solutions' services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">2. Services Description</h2>
              <p className="text-primary-600 mb-4">
                TechCraft Solutions provides software development services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-primary-600 mb-6 space-y-2">
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>Backend API development</li>
                <li>UI/UX design services</li>
                <li>DevOps and cloud deployment</li>
                <li>Technical consulting</li>
                <li>Ongoing support and maintenance</li>
              </ul>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">3. Project Scope and Deliverables</h2>
              <p className="text-primary-600 mb-4">
                All projects will be governed by a separate Statement of Work (SOW) or project agreement that will detail:
              </p>
              <ul className="list-disc list-inside text-primary-600 mb-6 space-y-2">
                <li>Specific project requirements and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Payment terms and schedule</li>
                <li>Acceptance criteria</li>
                <li>Change request procedures</li>
              </ul>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">4. Payment Terms</h2>
              <p className="text-primary-600 mb-4">
                Payment terms will be specified in each project agreement. Generally:
              </p>
              <ul className="list-disc list-inside text-primary-600 mb-6 space-y-2">
                <li>A deposit may be required before work begins</li>
                <li>Payments are due within 30 days of invoice date</li>
                <li>Late payments may incur additional fees</li>
                <li>Work may be suspended for overdue accounts</li>
              </ul>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">5. Intellectual Property</h2>
              <p className="text-primary-600 mb-4">
                Upon full payment for services:
              </p>
              <ul className="list-disc list-inside text-primary-600 mb-6 space-y-2">
                <li>Client owns all custom code developed specifically for their project</li>
                <li>TechCraft Solutions retains rights to general methodologies and frameworks</li>
                <li>Third-party components remain subject to their respective licenses</li>
                <li>TechCraft Solutions may showcase completed work in portfolios unless otherwise agreed</li>
              </ul>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">6. Confidentiality</h2>
              <p className="text-primary-600 mb-6">
                We respect the confidentiality of all client information and will not disclose any proprietary or confidential information without written consent, except as required by law.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">7. Warranties and Disclaimers</h2>
              <p className="text-primary-600 mb-4">
                We warrant that:
              </p>
              <ul className="list-disc list-inside text-primary-600 mb-4 space-y-2">
                <li>Services will be performed in a professional manner</li>
                <li>Deliverables will substantially conform to agreed specifications</li>
                <li>We will fix any bugs or defects for 30 days after delivery</li>
              </ul>
              <p className="text-primary-600 mb-6">
                EXCEPT AS EXPRESSLY SET FORTH ABOVE, ALL SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-primary-600 mb-6">
                In no event shall TechCraft Solutions be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">9. Termination</h2>
              <p className="text-primary-600 mb-6">
                Either party may terminate a project agreement with written notice. Upon termination, client shall pay for all work completed to date. TechCraft Solutions will provide all work product completed as of the termination date.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.9s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">10. Governing Law</h2>
              <p className="text-primary-600 mb-6">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction where TechCraft Solutions is incorporated, without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '1.0s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">11. Changes to Terms</h2>
              <p className="text-primary-600 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '1.1s' }}>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">12. Contact Information</h2>
              <p className="text-primary-600 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-primary-50 p-6 rounded-lg">
                <p className="text-primary-800 font-medium">TechCraft Solutions</p>
                <p className="text-primary-600">Email: legal@techcraft.dev</p>
                <p className="text-primary-600">Phone: +1 (555) 123-4567</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Now that you understand our terms, let's discuss your project and see how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-accent-600 transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}