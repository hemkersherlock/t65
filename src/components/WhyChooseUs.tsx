import React from 'react';
import { Clock, Scale, DollarSign, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Clock,
      title: 'Lightning Fast',
      description: 'Most takedowns completed within 24 hours vs. industry average of 7-14 days.',
      stat: '48hrs',
      statLabel: 'Avg Response'
    },
    {
      icon: Scale,
      title: 'Legal Expertise',
      description: 'Former entertainment lawyers and IP specialists handle your cases personally.',
      stat: '7+',
      statLabel: 'Years Experience'
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Get enterprise-level protection at 80% less cost than traditional anti-piracy agencies.',
      stat: '80%',
      statLabel: 'Cost Savings'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'AI-powered detection finds even the most obscure piracy networks and private groups.',
      stat: '99.2%',
      statLabel: 'Detection Rate'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-red-400">NeverLeaked</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            While big agencies charge Fortune 500 prices, we deliver superior results at creator-friendly rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-red-600 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {advantage.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {advantage.description}
                  </p>

                  <div className="bg-slate-800/50 rounded-lg px-4 py-3 border border-slate-700">
                    <div className="text-2xl font-bold text-red-400">{advantage.stat}</div>
                    <div className="text-sm text-gray-400">{advantage.statLabel}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            NeverLeaked vs. Traditional Agencies
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-gray-400 font-medium mb-2">Traditional Agencies</div>
              <div className="space-y-2 text-sm text-gray-400">
                <div>$5,000+ monthly retainers</div>
                <div>7-14 day response times</div>
                <div>Generic, automated approach</div>
              </div>
            </div>
            
            <div className="text-center border-x border-white/10 px-6">
              <div className="text-red-400 font-bold mb-2">NeverLeaked</div>
              <div className="space-y-2 text-sm text-white">
                <div>From $99/month</div>
                <div>24-hour response</div>
                <div>Personal, expert attention</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-gray-400 font-medium mb-2">DIY Approach</div>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Hundreds of hours lost</div>
                <div>Limited legal knowledge</div>
                <div>Missing hidden networks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;