import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping web development, from AI integration to advanced frameworks and tools.',
      author: 'Alex Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable APIs with Node.js and Express',
      excerpt: 'Learn best practices for creating robust, scalable backend services that can handle high traffic loads.',
      author: 'Alex Johnson',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Backend Development',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'React vs Vue vs Angular: Which Framework to Choose in 2024?',
      excerpt: 'A comprehensive comparison of the three major JavaScript frameworks to help you make the right choice.',
      author: 'Alex Johnson',
      date: '2024-01-05',
      readTime: '15 min read',
      category: 'Frontend Frameworks',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Understand the pros and cons of different mobile development approaches to make informed decisions.',
      author: 'Alex Johnson',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Database Design Best Practices for Modern Applications',
      excerpt: 'Essential guidelines for designing efficient, scalable databases that support your application growth.',
      author: 'Alex Johnson',
      date: '2023-12-20',
      readTime: '11 min read',
      category: 'Database Design',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'DevOps for Startups: Essential Tools and Practices',
      excerpt: 'Get started with DevOps using practical tools and workflows that scale with your startup.',
      author: 'Alex Johnson',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = [
    'All',
    'Web Development',
    'Mobile Development',
    'Backend Development',
    'Frontend Frameworks',
    'Database Design',
    'DevOps'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Tech Insights & Tutorials
            </h1>
            <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto">
              Stay up-to-date with the latest in software development, industry trends, 
              and practical tutorials to enhance your technical skills.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-accent-50 to-electric-50 rounded-2xl overflow-hidden shadow-xl animate-slide-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-accent-600 font-medium text-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-primary-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center mb-6 text-sm text-primary-500">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700 transition-colors group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white text-primary-700 rounded-lg font-medium hover:bg-accent-50 hover:text-accent-700 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3 line-clamp-2 group-hover:text-accent-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-primary-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-primary-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-500">{post.readTime}</span>
                    <button className="text-accent-600 font-medium hover:text-accent-700 transition-colors group">
                      Read More
                      <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-electric-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Latest Articles
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest tech insights, tutorials, 
              and industry trends delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="bg-white text-accent-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}