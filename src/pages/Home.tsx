import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  Smartphone,
  Database,
  Palette,
  Cloud,
  Settings,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  CheckCircle,
  Trophy,
  Clock
} from 'lucide-react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });

  // Animated counters
  useEffect(() => {
    const targets = { projects: 150, clients: 80, years: 5, satisfaction: 98 };
    const duration = 2000;
    const increment = 50;

    Object.keys(targets).forEach(key => {
      let current = 0;
      const target = targets[key as keyof typeof targets];
      const step = target / (duration / increment);

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, increment);
    });
  }, []);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Modern, responsive web applications using React, Vue, and Angular',
      features: ['Single Page Applications', 'Progressive Web Apps', 'E-commerce Solutions']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications with Flutter and React Native',
      features: ['iOS & Android Apps', 'Cross-platform Solutions', 'App Store Deployment']
    },
    {
      icon: Database,
      title: 'Backend APIs',
      description: 'Scalable server-side solutions with Node.js, Python, and Java',
      features: ['RESTful APIs', 'GraphQL', 'Database Design']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that drive engagement',
      features: ['User Research', 'Wireframing', 'Prototyping']
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Automated deployment and cloud infrastructure management',
      features: ['CI/CD Pipelines', 'AWS/Azure Deployment', 'Container Management']
    },
    {
      icon: Settings,
      title: 'Consulting',
      description: 'Technical consulting and architecture planning for your projects',
      features: ['Technology Stack Planning', 'Code Reviews', 'Performance Optimization']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, StartupTech',
      content: 'TechCraft delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO, InnovateNow',
      content: 'The mobile app they built transformed our business. Professional, responsive, and delivered on time. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Johnson',
      role: 'Founder, HealthTech Pro',
      content: 'Outstanding backend development work. The API they created is robust, scalable, and well-documented. A pleasure to work with.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const portfolioItems = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Healthcare Mobile App',
      description: 'Cross-platform mobile app for healthcare management',
      image: 'https://images.pexels.com/photos/4386475/pexels-photo-4386475.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Flutter', 'Firebase', 'Healthcare APIs']
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for business intelligence',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js']
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2314b8a6%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-900 mb-6">
              We Build
              <span className="bg-gradient-to-r from-accent-600 to-electric-600 bg-clip-text text-transparent block">
                Reliable Software
              </span>
              Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-600 mb-8 max-w-3xl mx-auto animate-slide-up">
              Your Partner in Digital Transformation. We create modern, scalable applications
              that drive business growth and deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-accent-600 to-electric-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-primary-300 text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 hover:border-primary-400 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-2">
                {counters.projects}+
              </div>
              <div className="text-primary-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-electric-600 mb-2">
                {counters.clients}+
              </div>
              <div className="text-primary-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-2">
                {counters.years}+
              </div>
              <div className="text-primary-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-electric-600 mb-2">
                {counters.satisfaction}%
              </div>
              <div className="text-primary-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              From concept to deployment, we provide comprehensive software development services
              tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-gradient-to-br from-accent-100 to-electric-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-accent-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-primary-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-primary-600">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-accent-600 to-electric-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Take a look at some of our recent work and see how we've helped businesses
              achieve their digital goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center border-2 border-accent-600 text-accent-600 px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 hover:text-white transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about
              working with us.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-scale-in">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-primary-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-primary-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-lg text-primary-700 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-primary-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-primary-600" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-accent-600' : 'bg-primary-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-electric-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your ideas to life.
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-accent-600 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}