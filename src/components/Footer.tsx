import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Web Development',
    'Mobile Apps',
    'Backend APIs',
    'UI/UX Design',
    'DevOps',
    'Consulting'
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-to-br from-accent-500 to-electric-600 rounded-lg">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">TechCraft</span>
                  <span className="text-sm text-primary-300 block leading-none">Solutions</span>
                </div>
              </Link>
              <p className="text-primary-300 mb-6">
                Your Partner in Digital Transformation. We build reliable, scalable software solutions for startups and businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-400 hover:text-accent-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-400 hover:text-accent-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-400 hover:text-accent-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      to="/services" 
                      className="text-primary-300 hover:text-accent-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-primary-300 hover:text-accent-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent-400" />
                  <span className="text-primary-300">hello@techcraft.dev</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent-400" />
                  <span className="text-primary-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent-400" />
                  <span className="text-primary-300">Remote & Worldwide</span>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-3">Stay Updated</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-primary-800 border border-primary-700 rounded-l-lg focus:outline-none focus:border-accent-500 text-sm"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-accent-600 to-electric-600 rounded-r-lg hover:shadow-lg transition-all duration-300">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-400 text-sm mb-4 md:mb-0">
              © {currentYear} TechCraft Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/terms" className="text-primary-400 hover:text-accent-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-primary-400 hover:text-accent-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}