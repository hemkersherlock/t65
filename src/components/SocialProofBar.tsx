import React from 'react';

const SocialProofBar = () => {
  const platforms = [
    'Udemy', 'Teachable', 'Kajabi', 'Thinkific', 'LearnDash', 
    'Coursera', 'MasterClass', 'Skillshare', 'Udemy', 'Teachable', 
    'Kajabi', 'Thinkific', 'LearnDash', 'Coursera', 'MasterClass', 'Skillshare'
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-700 text-lg font-semibold mb-8">
            Trusted by <span className="text-blue-600 font-bold">1,200+</span> creators from:
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6 items-center">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 whitespace-nowrap group hover:scale-105"
                >
                  <span className="text-gray-700 font-medium text-sm">
                    {platform}
                  </span>
                </div>
              ))}
            </div>
            {/* Professional fade overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;