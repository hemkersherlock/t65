import React from 'react';

const SocialProofBar = () => {
  const platforms = [
    {
      name: 'Udemy',
      logo: 'https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png',
      alt: 'Udemy logo'
    },
    {
      name: 'Teachable',
      logo: 'https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld',
      alt: 'Teachable logo'
    },
    {
      name: 'Kajabi',
      logo: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRRuT0RoN2FjK_logo.png',
      alt: 'Kajabi logo'
    },
    {
      name: 'Thinkific',
      logo: 'https://www.thinkific.com/wp-content/uploads/2019/03/thinkific-logo-purple-1.png',
      alt: 'Thinkific logo'
    },
    {
      name: 'LearnDash',
      logo: 'https://www.learndash.com/wp-content/uploads/2019/04/learndash-logo-tagline.png',
      alt: 'LearnDash logo'
    },
    {
      name: 'Coursera',
      logo: 'https://logos-world.net/wp-content/uploads/2021/11/Coursera-Logo.png',
      alt: 'Coursera logo'
    },
    {
      name: 'MasterClass',
      logo: 'https://logos-world.net/wp-content/uploads/2021/11/MasterClass-Logo.png',
      alt: 'MasterClass logo'
    },
    {
      name: 'Skillshare',
      logo: 'https://logos-world.net/wp-content/uploads/2021/11/Skillshare-Logo.png',
      alt: 'Skillshare logo'
    }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedPlatforms = [...platforms, ...platforms];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-700 text-lg font-semibold mb-8">
            Trusted by <span className="text-blue-600 font-bold">1,200+</span> creators from:
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8 items-center">
              {duplicatedPlatforms.map((platform, index) => (
                <div
                  key={`${platform.name}-${index}`}
                  className="flex items-center bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 whitespace-nowrap group hover:scale-105 min-w-[180px]"
                >
                  <img 
                    src={platform.logo} 
                    alt={platform.alt}
                    className="h-8 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const textSpan = target.nextElementSibling as HTMLSpanElement;
                      if (textSpan) {
                        textSpan.style.display = 'inline';
                      }
                    }}
                  />
                  <span 
                    className="text-gray-700 font-medium text-sm hidden"
                    style={{ display: 'none' }}
                  >
                    {platform.name}
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