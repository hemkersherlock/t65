import React from 'react';
import { Shield, Clock, DollarSign } from 'lucide-react';

const StatsBar = () => {
  return (
    <section className="py-12 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-white" />
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">96.2%</div>
              <div className="text-blue-100 text-sm">Success Rate</div>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-blue-400"></div>
          
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-white" />
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">&lt;48hr</div>
              <div className="text-blue-100 text-sm">Takedowns</div>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-blue-400"></div>
          
          <div className="flex items-center space-x-3">
            <DollarSign className="w-6 h-6 text-white" />
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">$2.1M+</div>
              <div className="text-blue-100 text-sm">Revenue Recovered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;