import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Get Immediate Protection
            </h2>
            
            <form action="https://formspree.io/f/mvgbrayb" method="POST" className="space-y-6 mt-8">
              <input type="hidden" name="_subject" value="New Submission from NeverLeaked" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="course_link" className="block text-sm font-semibold text-gray-700 mb-3">
                  Course/Content Link
                </label>
                <input
                  type="url"
                  id="course_link"
                  name="course_link"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  placeholder="https://your-course-url.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="piracy_description" className="block text-sm font-semibold text-gray-700 mb-3">
                  Describe the Piracy Issue
                </label>
                <textarea
                  id="piracy_description"
                  name="piracy_description"
                  rows={4}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 resize-none"
                  placeholder="Where did you find your content? Include any relevant links..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
              >
                Start Emergency Protection
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Response within 2 hours. Emergency hotline available 24/7.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}