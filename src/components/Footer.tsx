import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold">NeverLeaked</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              The world's most aggressive anti-piracy service for online course creators. 
              We hunt pirates so you can focus on creating.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">t</span>
              </div>
              <div className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <span className="text-white font-bold text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">DMCA Takedowns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Telegram Monitoring</a></li>
              <li><a href="#" className="hover:text-white transition-colors">File-Sharing Removals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Forum Takedowns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal Consultation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-red-500" />
                <span>protect@neverleaked.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-red-500" />
                <span>+1 (831) 263-6018</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-red-500 mt-1" />
                <span>San Francisco, CA<br />New York, NY</span>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-4 mt-6">
              <div className="text-red-300 font-semibold text-sm">Emergency Piracy Hotline</div>
              <div className="text-white font-bold">Available 24/7</div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 NeverLeaked. All rights reserved. We take piracy as seriously as you do.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Trusted by 10,000+ creators</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;