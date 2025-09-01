import React from 'react';
import { Check, Crown, Zap, Phone } from 'lucide-react';

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
      name: 'Professional',
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
      buttonText: 'Choose Professional',
      buttonClass: 'bg-red-600 hover:bg-red-700 text-white'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      period: '',
      description: 'For institutions and large course academies',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom legal strategies',
        'Phone support'
      ],
      isPopular: false,
      buttonText: 'Contact Sales',
      buttonClass: 'bg-slate-700 hover:bg-slate-800 text-white'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the protection level that's right for you</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg border-2 flex flex-col ${
                  plan.isPopular ? 'border-blue-500 relative' : 'border-gray-200'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">
                    {plan.price}<span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={scrollToContact}
                    className={`w-full font-bold py-3 px-6 rounded-lg transition duration-200 mt-auto ${plan.buttonClass}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Elements */}
        <div className="text-center mt-16 space-y-6">
          <div className="inline-flex items-center bg-green-100 border border-green-300 rounded-full px-6 py-3">
            <Check className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-semibold">30-Day Money-Back Guarantee</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">⚡</span>
              <span>Setup takes 5 minutes • Protection starts immediately</span>
            </div>
            
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-blue-600" />
              <span>Questions? Call (831) 263-6018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
