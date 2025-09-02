import React from 'react';
import { Search, Shield, Lock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Detect',
      description: 'AI scans Telegram, private groups, and file-sharers—catching leaks before they spread.',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Shield,
      title: 'Takedown',
      description: 'Our legal team files DMCA removals and pursues pirates globally within hours.',
      color: 'bg-amber-100 text-amber-800'
    },
    {
      icon: Lock,
      title: 'Protect',
      description: '24/7 monitoring means new uploads are taken down immediately, keeping revenue safe.',
      color: 'bg-green-100 text-green-700'
    }
  ];
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* New: Authority Icon */}
          <div className="rounded-full bg-blue-700 text-white p-3">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            How We <span className="text-blue-700">Crush Piracy</span>
          </h2>
        </div>
        <p className="text-center text-lg text-gray-600 mb-10">
          Trusted by creators worldwide—with millions in revenue restored.
        </p>
        {/* Steps as Cards */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className={`rounded-2xl shadow-lg p-7 w-full md:w-1/3 flex flex-col items-center ${step.color}`}>
                <div className="rounded-full shadow bg-white p-3 mb-3">
                  <Icon className={`w-8 h-8`} />
                </div>
                <div className="text-xl font-bold mb-2">{step.title}</div>
                <div className="text-gray-700 text-center">{step.description}</div>
              </div>
            )
          })}
        </div>
        {/* Big Trust Bar */}
        <div className="rounded-2xl shadow-inner px-8 py-8 bg-blue-700 flex flex-col md:flex-row justify-around items-center text-white gap-8">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-extrabold">48hrs</div>
            <div className="opacity-70 mt-1 text-sm">Avg. Takedown</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-extrabold">99.2%</div>
            <div className="opacity-70 mt-1 text-sm">Detection Rate</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-extrabold">100+</div>
            <div className="opacity-70 mt-1 text-sm">Creators Protected</div>
          </div>
        </div>
        {/* (Optional) Trusted by Logos */}
        <div className="flex justify-center gap-7 my-10">
          <div className="opacity-40 text-xs">Trusted by top creators & educators</div>
          {/* Replace with logos if available */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
