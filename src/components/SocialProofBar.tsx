import React from 'react';

const SocialProofBar = () => {
  const platforms = ['Udemy', 'Teachable', 'Kajabi', 'Thinkific', 'LearnDash', 'Coursera', 'MasterClass', 'Skillshare'];

  return (
    <section className="py-8 bg-gray-100 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-4">Trusted by 1,200+ creators from:</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {/* First set */}
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200 text-gray-700 font-medium text-sm whitespace-nowrap"
                >
                  {platform}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {platforms.map((platform, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200 text-gray-700 font-medium text-sm whitespace-nowrap"
                >
                  {platform}
                </div>
              ))}
            </div>
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialProofBar;