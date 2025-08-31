import React from 'react';
import { Mail, Phone, Shield, MessageSquare } from 'lucide-react';

const ReportPiracy = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
          Report <span className="text-red-400">Piracy</span> Now
        </h2>
        
        <p className="text-lg md:text-xl text-blue-200 leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
          Found your course being shared illegally? Don't wait. Every hour of delay costs you money. 
          Get immediate protection from our anti-piracy specialists.
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="bg-red-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div className="text-white font-semibold text-base md:text-lg mb-2">Email Response</div>
            <div className="text-red-200 text-sm md:text-base">Within 2 hours</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div className="text-white font-semibold text-base md:text-lg mb-2">Emergency Hotline</div>
            <div className="text-blue-200 text-sm md:text-base">+1 (831) 263-6018</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-white font-semibold text-base md:text-lg mb-2">Protection Starts</div>
            <div className="text-green-200 text-sm md:text-base">Same day</div>
          </div>
        </div>

        <div className="bg-red-600/20 border border-red-500/50 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="w-8 h-8 text-red-400 mr-3" />
            <h3 className="text-xl md:text-2xl font-bold text-white">Urgent Piracy?</h3>
          </div>
          <p className="text-red-200 mb-4 text-sm md:text-base">Call now for immediate takedown action</p>
          <button 
            onClick={scrollToContact}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg transition duration-200 text-sm md:text-base"
          >
            Report Piracy Now
          </button>
        </div>

        <p className="text-gray-400 text-sm md:text-base">
          Response within 2 hours. Emergency hotline available 24/7.
        </p>
      </div>
    </section>
  );
};

export default ReportPiracy;