import React from 'react';
import { Shield, AlertTriangle, Lock } from 'lucide-react';

const Hero = () => {
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

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Protect Your Course.
              <span className="text-red-500 block">Take Back Your Revenue.</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              NeverLeaked hunts down pirated versions of your online courses across Telegram channels, 
              file-sharing sites, forums, and private groups. We eliminate theft so you can focus on creating.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Secure My Course
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                <span>99.2% Takedown Success Rate</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 text-blue-400 mr-2" />
                <span>24/7 Monitoring</span>
              </div>
              <div>
                <span className="font-semibold text-white">$50M+</span> Revenue Protected
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
              <div className="absolute -top-3 -right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                PROTECTED
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
  <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-12 md:py-20">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  <span className="text-green-400 text-sm">LIVE</span>
                </div>
        <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-600/10 border border-red-600/30 rounded-lg">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
              <div className="text-lg md:text-2xl font-bold text-white mb-1">94%</div>
              <div className="text-blue-200 text-xs md:text-sm">Success Rate</div>
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition duration-200 transform hover:scale-105 text-sm md:text-base"
                  </div>
              <div className="text-lg md:text-2xl font-bold text-white mb-1">48h</div>
              <div className="text-blue-200 text-xs md:text-sm">Take Down Time</div>
                    <span className="text-green-400 font-bold">$12,450</span>
                  </div>
              <div className="text-lg md:text-2xl font-bold text-white mb-1">$56K+</div>
              <div className="text-blue-200 text-xs md:text-sm">Protected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
  )
}