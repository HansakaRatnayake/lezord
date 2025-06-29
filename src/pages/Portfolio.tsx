import React, { useState } from 'react';
import { 
  Filter, 
  ExternalLink, 
  Github, 
  ArrowRight,
  Code2,
  Smartphone,
  Globe,
  Database
} from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'web', name: 'Web Apps', icon: Code2 },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'backend', name: 'Backend', icon: Database }
  ];

  const projects = [
    {
      id: 1,
      title: 'EcommerceHub',
      category: 'web',
      description: 'Full-featured e-commerce platform with advanced product management, payment processing, and analytics.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: [
        'Multi-vendor marketplace',
        'Real-time inventory management',
        'Advanced analytics dashboard',
        'Mobile-responsive design'
      ],
      results: {
        metric1: '300% increase in sales',
        metric2: '50% faster load times',
        metric3: '98% uptime reliability'
      },
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'HealthTracker Pro',
      category: 'mobile',
      description: 'Cross-platform mobile app for health monitoring with real-time data sync and AI-powered insights.',
      image: 'https://images.pexels.com/photos/4386475/pexels-photo-4386475.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'TensorFlow', 'Google Cloud'],
      features: [
        'Real-time health monitoring',
        'AI-powered health insights',
        'Wearable device integration',
        'Offline functionality'
      ],
      results: {
        metric1: '100K+ active users',
        metric2: '4.8/5 app store rating',
        metric3: '99.9% crash-free sessions'
      },
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'ProjectManager Dashboard',
      category: 'web',
      description: 'Comprehensive project management solution with team collaboration, time tracking, and reporting.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
      features: [
        'Team collaboration tools',
        'Advanced reporting',
        'Time tracking & billing',
        'Kanban & Gantt charts'
      ],
      results: {
        metric1: '40% productivity increase',
        metric2: '60% faster project delivery',
        metric3: '95% user satisfaction'
      },
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'API Gateway Service',
      category: 'backend',
      description: 'Scalable microservices architecture with API gateway, authentication, and monitoring.',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'MongoDB'],
      features: [
        'Microservices architecture',
        'JWT authentication',
        'Rate limiting & caching',
        'Real-time monitoring'
      ],
      results: {
        metric1: '10x better scalability',
        metric2: '50% reduced response time',
        metric3: '99.99% uptime achieved'
      },
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'FoodDelivery App',
      category: 'mobile',
      description: 'On-demand food delivery platform with real-time tracking and payment integration.',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Node.js', 'MySQL', 'Socket.io', 'Stripe'],
      features: [
        'Real-time order tracking',
        'Multi-restaurant support',
        'In-app payment processing',
        'Push notifications'
      ],
      results: {
        metric1: '500K+ downloads',
        metric2: '4.7/5 user rating',
        metric3: '25% faster delivery times'
      },
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Learning Management System',
      category: 'web',
      description: 'Comprehensive LMS with course creation, student management, and progress tracking.',
      image: 'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS S3', 'WebRTC'],
      features: [
        'Interactive course builder',
        'Video conferencing',
        'Progress analytics',
        'Multi-language support'
      ],
      results: {
        metric1: '10K+ students enrolled',
        metric2: '90% course completion rate',
        metric3: '4.9/5 instructor rating'
      },
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto">
              Explore our recent projects and see how we've helped businesses achieve 
              their digital transformation goals with innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-accent-600 text-white shadow-lg'
                    : 'bg-primary-100 text-primary-700 hover:bg-accent-100 hover:text-accent-700'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/90 text-primary-800 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-white/90 text-primary-800 text-sm rounded-full font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-900 mb-3">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-primary-600">
                          <div className="w-2 h-2 bg-accent-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-900 mb-3">
                      Results Achieved:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="text-sm text-accent-600 font-medium">
                        ✓ {project.results.metric1}
                      </div>
                      <div className="text-sm text-accent-600 font-medium">
                        ✓ {project.results.metric2}
                      </div>
                      <div className="text-sm text-accent-600 font-medium">
                        ✓ {project.results.metric3}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center text-accent-600 hover:text-accent-700 font-medium"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </div>
                    <button className="text-accent-600 hover:text-accent-700 font-medium group">
                      Learn More
                      <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Portfolio Highlights
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Our track record speaks for itself. Here are some key metrics from our completed projects.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-2">150+</div>
              <div className="text-primary-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-electric-600 mb-2">98%</div>
              <div className="text-primary-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-2">50+</div>
              <div className="text-primary-600 font-medium">Technologies Used</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-electric-600 mb-2">24/7</div>
              <div className="text-primary-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-electric-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us to discuss your project 
              and see how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-accent-600 transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}