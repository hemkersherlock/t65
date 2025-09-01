import React from 'react';
import { Shield, AlertTriangle, Lock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Alert Banner */}
            <div className="inline-flex items-center bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-300 text-sm font-medium">Course piracy costs creators $2.8B annually</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Protect Your Course.
              <span className="text-red-500 block">Take Back Your Revenue.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              NeverLeaked hunts down pirated versions of your online courses across Telegram channels, 
              file-sharing sites, forums, and private groups. We eliminate theft so you can focus on creating.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToContact}
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Secure My Course
              </button>
              <button 
                onClick={scrollToContact}
                className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300"
              >
                View Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                <span>94% Takedown Success Rate</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 text-blue-400 mr-2" />
                <span>48h Average Takedown</span>
              </div>
              <div>
                <span className="font-semibold text-white">$12.4K+</span> Revenue Saved This Month
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl">
              <div className="absolute -top-3 -right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                PROTECTED
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-green-400 text-sm">LIVE MONITORING</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-600/10 border border-red-600/30 rounded-lg">
                    <span className="text-red-300 text-sm">Pirated Content Found</span>
                    <span className="text-red-400 font-bold">BLOCKED</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-600/10 border border-green-600/30 rounded-lg">
                    <span className="text-green-300 text-sm">Revenue Recovered</span>
                    <span className="text-green-400 font-bold">$12,450</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;