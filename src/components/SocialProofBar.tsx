import React from 'react';

const SocialProofBar = () => {
  const platforms = [
    { name: 'Udemy', color: 'bg-purple-600', icon: '🎓' },
    { name: 'Teachable', color: 'bg-green-600', icon: '📚' },
    { name: 'Kajabi', color: 'bg-orange-600', icon: '🚀' },
    { name: 'Thinkific', color: 'bg-blue-600', icon: '💡' },
    { name: 'LearnDash', color: 'bg-indigo-600', icon: '📖' },
    { name: 'Coursera', color: 'bg-blue-700', icon: '🎯' },
    { name: 'MasterClass', color: 'bg-black', icon: '⭐' },
    { name: 'Skillshare', color: 'bg-teal-600', icon: '🎨' },
    { name: 'Gumroad', color: 'bg-pink-600', icon: '💰' }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-6">
          🚀 Trusted by <span className="text-blue-600 font-bold">1,200+</span> creators from:
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-4">
            {[...platforms, ...platforms].map((platform, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border whitespace-nowrap"
              >
                <span className={`w-8 h-8 ${platform.color} rounded-lg flex items-center justify-center text-white`}>
                  {platform.icon}
                </span>
                <span className="text-gray-800 font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
        
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default SocialProofBar;
