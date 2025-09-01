import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'Online Marketing Coach',
      course: '$2,000 Marketing Masterclass',
      content: 'NeverLeaked recovered $15K in stolen sales within 30 days. Found my course in Telegram groups I never knew existed.',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Fitness Entrepreneur',
      course: 'Complete Body Transformation',
      content: 'They removed 47 pirated copies from file-sharing sites in one week. My revenue doubled the next month.',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Amanda Foster',
      title: 'Medical Education',
      course: 'Advanced Nursing Certification',
      content: 'Professional, fast, and effective. They understand the education space and protect intellectual property seriously.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Elite</span> Creators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful course creators who've taken back control of their content.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-300 mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.course}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
