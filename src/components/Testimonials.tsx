import React from 'react';
import { Check, CheckCheck } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Elite</span> Creators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful course creators who've taken back control of their content.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* WhatsApp Style Testimonial */}
          <div className="bg-gradient-to-b from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-lg">
            <div className="bg-white rounded-t-xl p-4 mb-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">SC</span>
                  </div>
                  <span className="font-semibold text-gray-900">Sarah C.</span>
                </div>
                <span className="text-xs text-gray-500">2:47 PM</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex mb-2">
                <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
              </div>
              
              <div className="bg-white rounded-2xl rounded-bl-md p-4 shadow-sm max-w-xs ml-auto">
                <p className="text-gray-800 text-sm leading-relaxed">
                  OMG you guys found my course on 6 different Telegram groups!! 😱 
                </p>
              </div>
              
              <div className="bg-white rounded-2xl rounded-bl-md p-4 shadow-sm max-w-xs ml-auto">
                <p className="text-gray-800 text-sm leading-relaxed">
                  Already recovered $8K this month. Thank you so much! 🙏
                </p>
                <div className="flex items-center justify-end mt-2 space-x-1">
                  <span className="text-xs text-gray-500">3:12 PM</span>
                  <CheckCheck className="w-4 h-4 text-blue-500" />
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-gray-700">Marketing Coach</p>
              <p className="text-xs text-gray-500">$2,000 Marketing Masterclass</p>
            </div>
          </div>

          {/* Email Style Testimonial */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MR</span>
                </div>
                <span className="font-semibold text-gray-900 text-sm">Marcus R.</span>
                <span className="text-xs text-gray-500">marcus.fitness@gmail.com</span>
              </div>
              <p className="text-sm font-medium text-gray-800">Subject: You guys are INCREDIBLE! 🔥</p>
              <span className="text-xs text-gray-500">Today 9:23 AM</span>
            </div>
            
            <div className="p-4">
              <div className="flex mb-3">
                <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
              </div>
              
              <div className="text-sm text-gray-800 leading-relaxed space-y-2">
                <p>Hey team,</p>
                <p>Just wanted to say THANK YOU! You removed 23 pirated copies in 48 hours. My sales literally doubled overnight.</p>
                <p>Finally sleeping peacefully knowing my content is protected 😴</p>
                <p>- Marcus</p>
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-700">Fitness Entrepreneur</p>
                <p className="text-xs text-gray-500">Complete Body Transformation Course</p>
              </div>
            </div>
          </div>

          {/* Twitter DM Style Testimonial */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AF</span>
                </div>
                <div>
                  <span className="font-semibold">Dr. Amanda F.</span>
                  <span className="text-slate-400 text-sm ml-2">@DrAmandaF</span>
                </div>
              </div>
              <span className="text-xs text-slate-400">1h</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex mb-3">
                <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
              </div>
              
              <div className="bg-blue-600 rounded-2xl rounded-br-md p-4 max-w-xs ml-auto">
                <p className="text-white text-sm leading-relaxed">
                  Your team is absolutely professional! Found piracy on sites I didn't even know existed 🕵️‍♀️
                </p>
              </div>
              
              <div className="bg-blue-600 rounded-2xl rounded-br-md p-4 max-w-xs ml-auto">
                <p className="text-white text-sm leading-relaxed">
                  My nursing certification course is finally safe. Worth every penny! 💪
                </p>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-700">
              <p className="text-sm font-medium text-slate-200">Medical Education Specialist</p>
              <p className="text-xs text-slate-400">Advanced Nursing Certification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
