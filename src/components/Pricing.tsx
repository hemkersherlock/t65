import React from 'react';
import { Check, Crown, Zap } from 'lucide-react';

const Pricing = () => {
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
        'Monitor up to 10 courses',
        'Advanced takedown network',
        'Telegram monitoring',
        'Priority support (24hr)',
        'Weekly detailed reports',
        'File-sharing removals',
        'Forum & community takedowns'
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
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-red-600">Protection</span> Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing that scales with your business. No hidden fees, no long-term contracts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl scale-105 border-2 border-red-500'
                    : 'bg-white border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                    plan.isPopular ? 'bg-white/20' : 'bg-gradient-to-br from-slate-800 to-blue-900'
                  }`}>
                    <Icon className={`w-8 h-8 ${plan.isPopular ? 'text-white' : 'text-blue-400'}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  
                  <p className={`text-sm mb-4 ${plan.isPopular ? 'text-red-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  <div className="flex items-baseline justify-center">
                    <span className={`text-5xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ml-1 ${plan.isPopular ? 'text-red-200' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.isPopular ? 'text-white' : 'text-green-500'
                      }`} />
                      <span className={`${plan.isPopular ? 'text-red-100' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
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