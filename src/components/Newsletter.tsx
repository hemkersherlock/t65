import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-12 md:py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Protected</h2>
          <p className="text-blue-200 mb-6 md:mb-8 text-sm md:text-base">
            Get weekly updates on new piracy threats and protection strategies
          </p>
          <form action="https://formspree.io/f/mvgbrayb" method="POST" className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="hidden" name="_subject" value="New Submission from NeverLeaked" />
            <div className="flex-1">
              <input
                type="email"
                name="email"
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}