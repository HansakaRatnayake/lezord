import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What services do you offer?",
          answer: "We offer comprehensive software development services including web development, mobile app development, backend APIs, UI/UX design, DevOps, cloud deployment, and technical consulting. Our expertise spans across modern technologies like React, Node.js, Flutter, Python, and cloud platforms."
        },
        {
          question: "How do you price your projects?",
          answer: "Our pricing is project-based and depends on factors like complexity, timeline, and scope. We offer competitive rates starting from $1,500 for design projects and $2,500 for development projects. We provide detailed quotes after understanding your specific requirements during our free consultation."
        },
        {
          question: "Do you work with startups and small businesses?",
          answer: "Absolutely! We love working with startups and small businesses. We understand budget constraints and can work with you to prioritize features and create MVP solutions that provide maximum value within your budget. We also offer flexible payment plans."
        },
        {
          question: "What makes TechCraft Solutions different?",
          answer: "We combine technical expertise with business understanding to deliver solutions that truly solve problems. Our focus on quality, communication, and long-term partnerships sets us apart. We don't just code – we help you succeed."
        }
      ]
    },
    {
      title: "Project Process",
      questions: [
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, mobile apps 8-16 weeks, and complex web applications 6-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
        },
        {
          question: "What's your development process?",
          answer: "We follow an agile development methodology with 5 key phases: Discovery (understanding requirements), Design (wireframes and prototypes), Development (building the solution), Testing (quality assurance), and Launch (deployment and support). You'll be involved throughout the process with regular updates and feedback sessions."
        },
        {
          question: "How do you handle project communication?",
          answer: "We believe in transparent communication. We provide regular updates via email, schedule weekly check-ins, and use project management tools to track progress. You'll have direct access to our team and can reach out anytime with questions or concerns."
        },
        {
          question: "Can I see the project while it's being developed?",
          answer: "Yes! We provide access to staging environments where you can review the work in progress. This allows for early feedback and ensures the final product meets your expectations. We also provide regular demos and progress reports."
        }
      ]
    },
    {
      title: "Technical Questions",
      questions: [
        {
          question: "What technologies do you specialize in?",
          answer: "We specialize in modern web technologies including React, Vue.js, Angular for frontend; Node.js, Python, Java for backend; Flutter and React Native for mobile; and cloud platforms like AWS and Azure. We stay updated with the latest technologies to provide cutting-edge solutions."
        },
        {
          question: "Do you provide hosting and deployment services?",
          answer: "Yes, we handle deployment and can recommend hosting solutions that fit your needs and budget. We work with various cloud providers and can set up everything from simple shared hosting to complex cloud infrastructures with auto-scaling and load balancing."
        },
        {
          question: "How do you ensure the security of applications?",
          answer: "Security is a top priority. We implement industry best practices including secure coding standards, data encryption, authentication systems, regular security audits, and compliance with relevant regulations (GDPR, HIPAA, etc.). We also provide security training and documentation."
        },
        {
          question: "Can you integrate with existing systems?",
          answer: "Absolutely! We have extensive experience integrating with various third-party services, APIs, databases, and legacy systems. Whether it's payment g ateways, CRM systems, or custom APIs, we can create seamless integrations that enhance your workflow."
        }
      ]
    },
    {
      title: "Support & Maintenance",
      questions: [
        {
          question: "Do you provide ongoing support after project completion?",
          answer: "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance monitoring, feature enhancements, and technical support. We have different packages to suit various needs and budgets."
        },
        {
          question: "What if I need changes after the project is completed?",
          answer: "We provide a warranty period for bug fixes and minor adjustments. For new features or significant changes, we offer competitive rates for additional development work. We're always here to help your application evolve with your business needs."
        },
        {
          question: "How do you handle emergency support?",
          answer: "We offer 24/7 emergency support for critical issues. Our support team can quickly address urgent problems to minimize downtime. Emergency support is included in our premium maintenance packages or available on-demand."
        },
        {
          question: "Can you help with scaling my application?",
          answer: "Definitely! We design applications with scalability in mind and can help optimize performance as your user base grows. This includes database optimization, server scaling, CDN implementation, and architecture improvements."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex p-4 bg-gradient-to-br from-accent-100 to-electric-100 rounded-2xl mb-6">
              <HelpCircle className="h-12 w-12 text-accent-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and how we can help 
              bring your software development projects to life.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="mb-12 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 text-center">
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-white border border-primary-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary-50 transition-colors duration-300 rounded-lg"
                      >
                        <h3 className="text-lg font-semibold text-primary-900 pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-accent-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-accent-600 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4 animate-fade-in">
                          <p className="text-primary-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? We're here to help! 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-accent-600 to-electric-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="mailto:hello@techcraft.dev"
                className="border-2 border-accent-600 text-accent-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-600 hover:text-white transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-gradient-to-r from-accent-600 to-electric-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="animate-slide-up">
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-white/90">hello@techcraft.dev</p>
              <p className="text-sm text-white/80">Response within 24 hours</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-white/90">+1 (555) 123-4567</p>
              <p className="text-sm text-white/80">Mon-Fri, 9am-6pm EST</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
              <p className="text-white/90">Schedule a Call</p>
              <p className="text-sm text-white/80">30-minute strategy session</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}