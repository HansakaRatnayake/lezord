import React, { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Palette, 
  Cloud, 
  Settings,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Users
} from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Modern, responsive web applications that deliver exceptional user experiences and drive business growth.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)',
        'Content Management Systems',
        'API Integration'
      ],
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Next.js', 'Nuxt.js'],
      startingPrice: '$2,500',
      timeline: '4-12 weeks'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform and native mobile applications that engage users and enhance your brand presence.',
      features: [
        'iOS & Android Apps',
        'Cross-platform Development',
        'Native App Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
      startingPrice: '$5,000',
      timeline: '8-16 weeks'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust, scalable server-side solutions that power your applications and handle complex business logic.',
      features: [
        'RESTful API Development',
        'GraphQL APIs',
        'Database Design & Optimization',
        'Authentication & Authorization',
        'Third-party Integrations',
        'Microservices Architecture'
      ],
      technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'Redis'],
      startingPrice: '$3,000',
      timeline: '6-10 weeks'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that combine aesthetics with functionality for optimal user engagement.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'Responsive Design',
        'Design System Creation',
        'Usability Testing'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      startingPrice: '$1,500',
      timeline: '2-6 weeks'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Streamlined deployment processes and cloud infrastructure management for optimal performance and reliability.',
      features: [
        'CI/CD Pipeline Setup',
        'Cloud Infrastructure',
        'Containerization',
        'Monitoring & Logging',
        'Security Implementation',
        'Performance Optimization'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      startingPrice: '$2,000',
      timeline: '3-8 weeks'
    },
    {
      icon: Settings,
      title: 'Technical Consulting',
      description: 'Strategic guidance and technical expertise to help you make informed decisions about your technology stack.',
      features: [
        'Technology Assessment',
        'Architecture Planning',
        'Code Review & Auditing',
        'Performance Analysis',
        'Scalability Planning',
        'Team Training'
      ],
      technologies: ['Various based on needs'],
      startingPrice: '$150/hour',
      timeline: 'Project-based'
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Our team creates wireframes, prototypes, and designs that align with your vision.'
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'We build your solution using best practices and cutting-edge technologies.'
    },
    {
      icon: Zap,
      title: 'Testing',
      description: 'Rigorous testing ensures your application works flawlessly across all platforms.'
    },
    {
      icon: Globe,
      title: 'Launch',
      description: 'We deploy your application and provide ongoing support and maintenance.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and code reviews ensure bug-free, high-quality deliverables.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile development methodology ensures timely project completion.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 support and maintenance to keep your applications running smoothly.'
    },
    {
      icon: Globe,
      title: 'Global Experience',
      description: 'We\'ve worked with clients worldwide across various industries and sectors.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto">
              Comprehensive software development services tailored to your business needs. 
              From concept to deployment, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className={`group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 animate-slide-up ${
                      activeService === index
                        ? 'border-accent-500 bg-accent-50'
                        : 'border-primary-100 bg-white hover:border-accent-300 hover:bg-accent-50'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="mb-4">
                      <div className="inline-flex p-3 bg-gradient-to-br from-accent-100 to-electric-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-accent-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-600 text-sm">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-accent-600 font-semibold">
                        From {service.startingPrice}
                      </span>
                      <ArrowRight className="h-4 w-4 text-accent-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-xl p-8 animate-scale-in">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-accent-100 to-electric-100 rounded-xl mb-4">
                    {React.createElement(services[activeService].icon, {
                      className: "h-10 w-10 text-accent-600"
                    })}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-primary-600">
                    {services[activeService].description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary-900 mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {services[activeService].features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-primary-600">
                        <CheckCircle className="h-4 w-4 text-accent-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary-900 mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-primary-900">Starting Price</h5>
                      <p className="text-accent-600 font-bold">{services[activeService].startingPrice}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary-900">Timeline</h5>
                      <p className="text-primary-600">{services[activeService].timeline}</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-accent-600 to-electric-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-accent-100 to-electric-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-accent-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Why Choose TechCraft Solutions?
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions 
              that drive real results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-accent-100 to-electric-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
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
              Let's discuss your project requirements and see how we can help bring 
              your vision to life. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-accent-600 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}