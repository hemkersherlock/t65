import React, { useState } from 'react';
import { Shield, Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    courseLink: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Report <span className="text-red-400">Piracy</span> Now
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Found your course being shared illegally? Don't wait. Every hour of delay costs you money. 
              Get immediate protection from our anti-piracy specialists.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email Response</div>
                  <div className="text-gray-400">Within 2 hours</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Emergency Hotline</div>
                  <div className="text-gray-400">1-800-NO-PIRACY</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Protection Starts</div>
                  <div className="text-gray-400">Same day</div>
                </div>
              </div>
            </div>

            {/* Urgency Banner */}
            <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-4">
              <div className="flex items-center">
                <MessageSquare className="w-6 h-6 text-red-400 mr-3" />
                <div>
                  <div className="text-red-300 font-semibold">Urgent Piracy?</div>
                  <div className="text-red-200 text-sm">Call now for immediate takedown action</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get Immediate Protection
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="courseLink" className="block text-sm font-semibold text-gray-700 mb-2">
                  Course/Content Link
                </label>
                <input
                  type="url"
                  id="courseLink"
                  name="courseLink"
                  value={formData.courseLink}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="https://your-course-url.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Describe the Piracy Issue
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Where did you find your content? Include any relevant links..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Start Emergency Protection
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-4">
              Response within 2 hours. Emergency cases prioritized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;