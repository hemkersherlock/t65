import React from 'react';
import { Search, Shield, Lock } from 'lucide-react';
const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Detect',
      description: 'Our AI-powered systems continuously scan Telegram, forums, file-sharing sites, and private groups for your content.',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      title: 'Takedown',
      description: 'We file immediate DMCA takedowns and leverage our legal network to remove pirated content within hours.',
      color: 'text-red-400'
    },
    {
      icon: Lock,
      title: 'Protect',
      description: 'Ongoing monitoring ensures new uploads are caught and removed before they spread, keeping your revenue safe.',
      color: 'text-green-400'
    }
  ];
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We <span className="text-red-600">Eliminate</span> Piracy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our battle-tested process has recovered millions in lost revenue for course creators worldwide.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-x-6"></div>
                )}
                <div className="text-center">
                  <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className={`w-8 h-8 ${step.color}`} />
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">48hrs</div>
              <div className="text-gray-300">Average Takedown Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">96.2%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-300">Courses Protected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;