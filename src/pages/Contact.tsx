import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  Calendar,
  MessageSquare,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'hello@techcraft.dev',
      action: 'mailto:hello@techcraft.dev'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 6pm',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a free consultation',
      value: 'Schedule Meeting',
      action: '#'
    }
  ];

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'Backend API',
    'UI/UX Design',
    'E-commerce',
    'SaaS Platform',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ];

  const timelines = [
    'ASAP',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Get in touch with us to discuss 
              your project and receive a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.action}
                className="group text-center p-8 bg-gradient-to-br from-accent-50 to-electric-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-accent-100 to-electric-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-primary-600 mb-4">
                  {method.description}
                </p>
                <p className="text-accent-600 font-semibold group-hover:text-accent-700 transition-colors">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Tell Us About Your Project
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a 
              detailed proposal and timeline for your project.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-scale-in">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-primary-600">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-all duration-300"
                      placeholder="Your company (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-primary-900 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="project"
                      name="project"
                      required
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-primary-900 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-primary-900 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center bg-gradient-to-r from-accent-600 to-electric-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-primary-600">
              Quick answers to common questions about working with us.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes! We work with clients worldwide and have experience managing projects across different time zones. We use modern communication tools to ensure smooth collaboration regardless of location."
              },
              {
                question: "What's included in your support and maintenance?",
                answer: "Our support includes bug fixes, security updates, performance monitoring, and technical assistance. We offer different maintenance packages to suit your needs, from basic support to comprehensive ongoing development."
              },
              {
                question: "Can you help with existing projects?",
                answer: "Absolutely! We can take over existing projects, perform code audits, add new features, or help with maintenance and optimization. We're experienced in working with various codebases and technologies."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-primary-50 rounded-lg p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-primary-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gradient-to-r from-accent-600 to-electric-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Follow Us on Social Media
            </h2>
            <p className="text-white/90 mb-8">
              Stay connected and get the latest updates on our projects and tech insights.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}