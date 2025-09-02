import React from 'react';
import Layout from '../components/Layout';
import { TrendingUp, DollarSign, Shield, Clock, ArrowLeft } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Marketing Coach Recovers $47K in 3 Months",
      industry: "Digital Marketing",
      courseValue: "$2,000",
      timeframe: "3 months",
      recovered: "$47,000",
      description: "A marketing coach discovered her premium course was being shared across 23 Telegram channels and 15 file-sharing sites. Within 72 hours of engaging NeverLeaked, we had removed 89% of the pirated content and implemented ongoing monitoring.",
      results: [
        "Removed 156 pirated copies",
        "Blocked 23 Telegram channels",
        "Recovered $47,000 in lost revenue",
        "Ongoing protection prevents re-uploads"
      ]
    },
    {
      title: "Fitness Entrepreneur Stops $30K Monthly Losses",
      industry: "Health & Fitness",
      courseValue: "$1,500",
      timeframe: "2 months",
      recovered: "$60,000",
      description: "A fitness entrepreneur's transformation program was being distributed through private Discord servers and torrent sites. Our comprehensive approach eliminated the piracy network and restored legitimate sales.",
      results: [
        "Shut down 12 Discord servers",
        "Removed 200+ torrent files",
        "Eliminated 85% of piracy sources",
        "Monthly revenue increased by $30K"
      ]
    },
    {
      title: "Tech Educator Protects $100K Course Portfolio",
      industry: "Technology Education",
      courseValue: "$5,000",
      timeframe: "6 months",
      recovered: "$180,000",
      description: "A programming instructor with multiple high-value courses faced systematic piracy across multiple platforms. Our enterprise-level protection secured their entire course catalog.",
      results: [
        "Protected 8 different courses",
        "Removed 500+ pirated copies",
        "Blocked automated scraping bots",
        "Increased conversion rate by 40%"
      ]
    }
  ];

  return (
    <Layout
      title="Case Studies - NeverLeaked Success Stories"
      description="Real success stories from course creators who recovered thousands in lost revenue through NeverLeaked's anti-piracy protection services."
      canonical="https://neverleaked.tech/case-studies"
    >
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Real results from real creators who took action against piracy. 
              See how we've helped recover millions in stolen revenue.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {study.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900">Results Achieved:</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-700">
                              <Shield className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Metrics</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Course Value</span>
                            <span className="font-bold text-gray-900">{study.courseValue}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Timeframe</span>
                            <span className="font-bold text-gray-900">{study.timeframe}</span>
                          </div>
                          <div className="border-t border-blue-200 pt-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Revenue Recovered</span>
                              <span className="font-bold text-green-600 text-xl">{study.recovered}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Protect Your Course?
            </h2>
            <p className="text-blue-200 mb-8 text-lg">
              Join over 1,200 creators who've recovered their stolen revenue
            </p>
            <a
              href="/#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Your Free Piracy Scan
            </a>
          </div>

          {/* Back to Main Site */}
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Main Site
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;