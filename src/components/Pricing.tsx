import React from 'react';
import { Check, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '$99',
      period: '/month',
      description: 'Perfect for solo creators and new course makers',
      features: [
        'Monitor up to 3 courses',
        'Basic DMCA takedowns',
        'Email support',
        'Monthly piracy reports',
        '48hr response time'
      ],
      isPopular: false,
      buttonText: 'Start Protection',
      buttonClass: 'bg-blue-600 hover:bg-blue-700 text-white'
    },
    {
      name: 'Pro',
      icon: Crown,
      price: '$299',
      period: '/month',
      description: 'Ideal for established educators and coaches',
      features: [
        'Real-time monitoring for 1 active course',
        'Unlimited takedowns',
        'Advanced takedown network',
        'Telegram & forum monitoring',
        'Priority 24/7 support',
        'Weekly detailed reports',
        'File-sharing removals'
      ],
      isPopular: true,
      buttonText: 'Choose Pro',
      buttonClass: 'bg-red-600 hover:bg-red-700 text-white'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      period: '',
      description: 'For institutions and large course academies',
      features: [
        'Unlimited course monitoring',
        'Dedicated account manager',
        'Legal consultation included',
        'Custom piracy intelligence',
        'API access & integrations',
        'White-label reporting',
        'SLA guarantees'
      ],
      isPopular: false,
      buttonText: 'Contact Sales',
      buttonClass: 'bg-slate-700 hover:bg-slate-800 text-white'
    }
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg md:text-xl text-gray-600">Choose the protection level that's right for you</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Basic</h3>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">$99<span className="text-base md:text-lg text-gray-500">/case</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                Single DMCA takedown
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                48-hour take down time
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                Email support
              </li>
            </ul>
            <button 
              onClick={scrollToContact}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-200 text-sm md:text-base"
            >
              Get Started
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold">Most Popular</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Professional</h3>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">$299<span className="text-base md:text-lg text-gray-500">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                Real-time monitoring for 1 active course
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                Unlimited takedowns
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                Advanced takedown network
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                Telegram & forum monitoring
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                Priority 24/7 support
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                Weekly detailed reports
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                File-sharing removals
              </li>
            </ul>
            <button 
              onClick={scrollToContact}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-200 text-sm md:text-base"
            >
              Get Started
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">$999<span className="text-base md:text-lg text-gray-500">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                Everything in Professional
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                Dedicated account manager
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                Custom legal strategies
              </li>
              <li className="flex items-center text-sm md:text-base text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                Phone support
              </li>
            </ul>
            <button 
              onClick={scrollToContact}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-200 text-sm md:text-base"
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-green-100 border border-green-300 rounded-full px-6 py-3">
            <Check className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-semibold">30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
