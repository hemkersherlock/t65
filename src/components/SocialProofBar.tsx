import React from 'react';

const SocialProofBar = () => {
  const platforms = [
    { name: 'Udemy', color: 'bg-purple-600', logo: 'U' },
    { name: 'Teachable', color: 'bg-green-600', logo: 'T' },
    { name: 'Kajabi', color: 'bg-blue-600', logo: 'K' },
    { name: 'Thinkific', color: 'bg-orange-600', logo: 'Th' },
    { name: 'LearnDash', color: 'bg-red-600', logo: 'LD' },
    { name: 'Coursera', color: 'bg-indigo-600', logo: 'C' },
    { name: 'MasterClass', color: 'bg-black', logo: 'MC' },
    { name: 'Skillshare', color: 'bg-teal-600', logo: 'S' },
    { name: 'Gumroad', color: 'bg-pink-600', logo: 'G' }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-700 text-lg font-semibold mb-8">
            🚀 Trusted by <span className="text-blue-600 font-bold">1,200+</span> creators from:
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6 items-center">
              {/* First set */}
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  <div className={`w-10 h-10 ${platform.color} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                    {platform.logo}
                  </div>
                  <span className="text-gray-800 font-semibold text-base">
                    {platform.name}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {platforms.map((platform, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  <div className={`w-10 h-10 ${platform.color} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                    {platform.logo}
                  </div>
                  <span className="text-gray-800 font-semibold text-base">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Enhanced gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 via-blue-50/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 via-blue-50/80 to-transparent pointer-events-none z-10"></div>
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
          animation: scroll 35s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialProofBar;
