import React from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Code2, 
  Smartphone, 
  Database, 
  Cloud,
  Palette,
  Settings,
  CheckCircle
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every line of code and every pixel of design.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their digital transformation journey.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We stay at the forefront of technology to deliver cutting-edge solutions.'
    }
  ];

  const techStack = [
    { name: 'React', icon: Code2, color: 'text-blue-600' },
    { name: 'Node.js', icon: Code2, color: 'text-green-600' },
    { name: 'Flutter', icon: Smartphone, color: 'text-blue-500' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500' },
    { name: 'AWS', icon: Cloud, color: 'text-orange-500' },
    { name: 'Figma', icon: Palette, color: 'text-purple-600' },
    { name: 'Docker', icon: Settings, color: 'text-blue-700' },
    { name: 'TypeScript', icon: Code2, color: 'text-blue-600' }
  ];

  const achievements = [
    '150+ Successful Projects',
    '98% Client Satisfaction Rate',
    '5+ Years of Experience',
    'Global Client Base',
    'Award-Winning Designs',
    '24/7 Support Available'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              About TechCraft Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto">
              We are a passionate team of software developers, designers, and digital strategists 
              dedicated to helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-primary-600 mb-6">
                At TechCraft Solutions, we believe that technology should empower businesses, 
                not complicate them. Our mission is to bridge the gap between innovative ideas 
                and practical, scalable software solutions.
              </p>
              <p className="text-lg text-primary-600 mb-8">
                We specialize in creating custom software that not only meets your current needs 
                but also grows with your business, ensuring long-term success and adaptability 
                in an ever-evolving digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={achievement} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent-600 mr-2" />
                    <span className="text-primary-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-accent-100 to-electric-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-12 w-12 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-primary-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founder"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Meet the Founder
              </h2>
              <p className="text-lg text-primary-600 mb-6">
                Hi, I'm Alex Johnson, the founder of TechCraft Solutions. With over 8 years 
                of experience in software development, I've worked with startups, enterprises, 
                and everything in between.
              </p>
              <p className="text-lg text-primary-600 mb-6">
                My journey began as a full-stack developer at a tech startup, where I learned 
                the importance of building scalable, maintainable software. This experience 
                inspired me to start TechCraft Solutions, where we focus on delivering 
                high-quality software that truly makes a difference.
              </p>
              <p className="text-lg text-primary-600 mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or mentoring aspiring developers. I believe in the 
                power of technology to transform businesses and improve lives.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full">
                  Full-Stack Developer
                </span>
                <span className="px-4 py-2 bg-electric-100 text-electric-700 rounded-full">
                  Solution Architect
                </span>
                <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full">
                  Tech Consultant
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 bg-white rounded-2xl shadow-lg mb-4 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <tech.icon className={`h-12 w-12 ${tech.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-primary-900">
                  {tech.name}
                </h3>
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
              Ready to Work Together?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life. 
              We're here to support your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get in Touch
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