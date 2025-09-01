import React from 'react';
import { Check, CheckCheck } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join 1,200+ Creators Who Stopped Revenue Theft
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from real course creators who took action.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* WhatsApp Style Testimonial */}
          <div className="bg-gradient-to-b from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-white rounded-t-xl p-4 mb-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-md">
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
              
              <div className="bg-white rounded-2xl rounded-bl-md p-4 shadow-md max-w-xs ml-auto">
                <p className="text-gray-800 text-sm leading-relaxed">
                  Found my $2,000 course on 6 Telegram groups! Recovered $15K in first month 🙏
                </p>
              </div>
              
              <div className="flex items-center justify-end mt-2 space-x-1">
                <span className="text-xs text-gray-500">3:12 PM</span>
                <CheckCheck className="w-4 h-4 text-blue-500" />
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-gray-700">Marketing Coach</p>
              <p className="text-xs text-gray-500">$2,000 Marketing Masterclass</p>
            </div>
          </div>

          {/* Email Style Testimonial */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-bold">MR</span>
                </div>
                <span className="font-semibold text-gray-900 text-sm">Marcus R.</span>
                <span className="text-xs text-gray-500">marcus.fitness@gmail.com</span>
              </div>
              <p className="text-sm font-medium text-gray-800">Subject: You guys saved my business! 🔥</p>
              <span className="text-xs text-gray-500">Today 9:23 AM</span>
            </div>
            
            <div className="p-4">
              <div className="flex mb-3">
                <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
              </div>
              
              <div className="text-sm text-gray-800 leading-relaxed space-y-2">
                <p>Hey team,</p>
                <p>Removed 47 pirated copies in 48hrs. Revenue doubled overnight. Finally sleeping peacefully 😴</p>
                <p>- Marcus</p>
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-700">Fitness Entrepreneur</p>
                <p className="text-xs text-gray-500">$1,500 Transformation Course</p>
              </div>
            </div>
          </div>

          {/* Twitter DM Style Testimonial */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-lg text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-md">
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
              
              <div className="bg-blue-600 rounded-2xl rounded-br-md p-4 max-w-xs ml-auto shadow-lg">
                <p className="text-white text-sm leading-relaxed">
                  Professional team found piracy I didn't know existed. My nursing course is finally protected 💪
                </p>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-700">
              <p className="text-sm font-medium text-slate-200">Medical Education Specialist</p>
              <p className="text-xs text-slate-400">$3,000 Certification Program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;