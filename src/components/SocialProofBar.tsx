import React from 'react';

const SocialProofBar = () => {
  const platforms = ['Udemy', 'Teachable', 'Kajabi', 'Thinkific', 'LearnDash'];

  return (
    <section className="py-8 bg-gray-100 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-4">Trusted by 1,200+ creators from:</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-gray-700 font-medium text-sm"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;