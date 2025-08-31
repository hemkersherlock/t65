import React from 'react';
import { FileText, MessageCircle, HardDrive, Users } from 'lucide-react';

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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete <span className="text-blue-600">Protection</span> Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We hunt pirates wherever they hide. Our comprehensive approach covers every corner of the internet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-blue-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
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