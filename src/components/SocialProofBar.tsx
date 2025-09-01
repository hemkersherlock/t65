import React from 'react';

const SocialProofBar = () => {
  const platforms = [
    { 
      name: 'Udemy', 
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
            <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6L16,10H13V18H11V10H8L12,6Z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Teachable', 
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
            <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M17,17V15H7V17H17M17,13V11H7V13H17M17,9V7H7V9H17Z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Kajabi', 
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white font-bold">
            <path fill="currentColor" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,5A3,3 0 0,0 9,8A3,3 0 0,0 12,11A3,3 0 0,0 15,8A3,3 0 0,0 12,5M12,13.54C9.64,13.54 5,14.72 5,17.08V19H19V17.08C19,14.72 14.36,13.54 12,13.54Z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Thinkific', 
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
            <path fill="currentColor" d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'LearnDash', 
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
            <path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5H16V19H8V11.5H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11.5H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Coursera', 
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
            <path fill="currentColor" d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'MasterClass', 
      logo: (
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-yellow-400">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400">
            <path fill="currentColor" d="M12,2L13.09,8.26L20,9L13.09,9.74L12,16L10.91,9.74L4,9L10.91,8.26L12,2M12,6.5L11.5,8.5L9.5,9L11.5,9.5L12,11.5L12.5,9.5L14.5,9L12.5,8.5L12,6.5Z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Skillshare', 
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
            <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Gumroad', 
      logo: (
        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
            <path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,5.7L17,10.7V18H15V12H9V18H7V10.7L12,5.7M11,13H13V16H11V13Z"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-700 text-lg font-semibold mb-6">
            🚀 Trusted by <span className="text-blue-600 font-bold">1,200+</span> creators from:
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6 items-center">
              {/* First set */}
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 whitespace-nowrap group"
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-200">
                    {platform.logo}
                  </div>
                  <span className="text-gray-800 font-semibold text-sm">
                    {platform.name}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {platforms.map((platform, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center space-x-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 whitespace-nowrap group"
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-200">
                    {platform.logo}
                  </div>
                  <span className="text-gray-800 font-semibold text-sm">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Fade overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
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
          animation: scroll 18s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 12s;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialProofBar;
