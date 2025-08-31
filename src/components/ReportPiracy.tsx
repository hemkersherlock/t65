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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
          Report <span className="text-red-400">Piracy</span> Now
        </h2>
        
        <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
          Found your course being shared illegally? Don't wait. Every hour of delay costs you money. 
          Get immediate protection from our anti-piracy specialists.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="bg-red-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Response</h3>
            <p className="text-gray-300">Within 2 hours</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Emergency Hotline</h3>
            <p className="text-gray-300">+1 (831) 263-6018</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Protection Starts</h3>
            <p className="text-gray-300">Same day</p>
          </div>
        </div>

        <div className="bg-red-600/20 border border-red-500/50 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="w-8 h-8 text-red-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Urgent Piracy?</h3>
          </div>
          <p className="text-red-200 text-lg mb-6">
            Call now for immediate takedown action
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Report Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReportPiracy;