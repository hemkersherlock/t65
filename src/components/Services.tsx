import React from 'react';
import { FileText, MessageCircle, HardDrive, Users, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'DMCA Takedowns',
      description: 'Fast-track legal removal from major platforms including YouTube, Google Drive, and hosting providers.',
      features: ['Legal compliance', '48hr response', 'Global coverage']
    },
    {
      icon: MessageCircle,
      title: 'Telegram Monitoring',
      description: 'Hunt down pirated courses in private Telegram channels and groups where most leaks spread.',
      features: ['Private group access', 'Real-time alerts', 'Automated removal']
    },
    {
      icon: HardDrive,
      title: 'File-Sharing Removals',
      description: 'Target Mega.nz, MediaFire, Dropbox, and other cloud storage platforms used for course distribution.',
      features: ['Multi-platform reach', 'Bulk takedowns', 'Mirror detection']
    },
    {
      icon: Users,
      title: 'Forum & Community Takedowns',
      description: 'Remove leaked content from private forums, Discord servers, and niche community platforms.',
      features: ['Deep web scanning', 'Community infiltration', 'Relationship management']
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive protection for your digital content with proven results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">DMCA Takedowns</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Fast and effective removal of pirated content from websites, file-sharing platforms, and social media.
            </p>
            <div className="text-sm text-blue-600 font-semibold">94% Success Rate</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
            <FileText className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Legal Documentation</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Professional legal notices and cease & desist letters prepared by experienced attorneys.
            </p>
            <div className="text-sm text-green-600 font-semibold">7+ Years Experience</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-xl">
            <Clock className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">24/7 Monitoring</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Continuous monitoring of the internet to detect unauthorized use of your content.
            </p>
            <div className="text-sm text-purple-600 font-semibold">48h Response</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Protect My Content Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;