import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Problem = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const beforeData = [
    { month: "Jan", sales: 15000 },
    { month: "Feb", sales: 12000 },
    { month: "Mar", sales: 9500 },
    { month: "Apr", sales: 7000 },
    { month: "May", sales: 5500 },
    { month: "Jun", sales: 4200 }
  ];

  const afterData = [
    { month: "Jul", sales: 5500 },
    { month: "Aug", sales: 8000 },
    { month: "Sep", sales: 11500 },
    { month: "Oct", sales: 14000 },
    { month: "Nov", sales: 16500 },
    { month: "Dec", sales: 19000 }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Is Your Course Being <span className="text-red-500">Pirated</span> Right Now?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every illegal download is money stolen from your pocket. Here's what happens to creators who don't protect their content.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
            <div className="flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-xl mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Lost Revenue</h3>
            <p className="text-gray-300 leading-relaxed">
              Average creator loses $8,000+ monthly to piracy, directly destroying your income
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
            <div className="flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-xl mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Brand Damage</h3>
            <p className="text-gray-300 leading-relaxed">
              Illegitimate copies devalue your expertise and erode paying customer trust
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
            <div className="flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-xl mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Loss of Control</h3>
            <p className="text-gray-300 leading-relaxed">
              Your content spreads across insecure platforms without your consent
            </p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
            <h3 className="text-xl font-bold text-red-400 mb-2">Before Protection</h3>
            <p className="text-gray-300 mb-6">Revenue Decline</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={beforeData}>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    tickFormatter={(value) => `$${value/1000}k`}
                  />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#DC2626"
                    fill="url(#redGradient)"
                    strokeWidth={3}
                  />
                  <defs>
                    <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#DC2626" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#DC2626" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-xl font-bold text-blue-400 mb-2">After Protection</h3>
            <p className="text-gray-300 mb-6">Revenue Recovery</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={afterData}>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    tickFormatter={(value) => `$${value/1000}k`}
                  />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#2563EB"
                    fill="url(#blueGradient)"
                    strokeWidth={3}
                  />
                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl mb-4"
          >
            Stop My Revenue Loss Now
          </button>
          <p className="text-gray-400 text-sm">Free piracy scan in 2 minutes</p>
        </div>
      </div>
    </section>
  );
};

export default Problem;