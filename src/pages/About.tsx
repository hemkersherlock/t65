import React from 'react';
import Layout from '../components/Layout';
import { Shield, Users, Globe, Award, ArrowLeft } from 'lucide-react';

const About = () => {
  return (
    <Layout
      title="About Us - NeverLeaked Anti-Piracy Protection"
      description="Learn about NeverLeaked's mission to protect digital course creators from piracy. Our team of legal experts and technology specialists fight content theft worldwide."
      canonical="https://neverleaked.tech/about"
    >
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About NeverLeaked
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're on a mission to protect the intellectual property of digital course creators worldwide, 
              ensuring their hard work is never stolen or distributed without permission.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-200">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              NeverLeaked was founded in 2018 by a team of legal experts and technology specialists who witnessed 
              firsthand how content piracy was devastating the online education industry. We believe that creators 
              deserve to be compensated for their expertise and hard work, and we're committed to making that a reality 
              through aggressive anti-piracy enforcement.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">1,200+</div>
              <div className="text-gray-600">Creators Protected</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-600">Takedowns Completed</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">$2.1M+</div>
              <div className="text-gray-600">Revenue Recovered</div>
            </div>
          </div>

          {/* Story */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The idea for NeverLeaked came when our founder, a former intellectual property attorney, 
                discovered that a client's $50,000 online course was being freely distributed across 
                dozens of Telegram channels and file-sharing sites. Traditional DMCA takedown services 
                were too slow and ineffective against modern piracy networks.
              </p>
              <p>
                We realized that course creators needed a specialized service that understood the unique 
                challenges of digital content protection. Unlike generic anti-piracy services, we focus 
                exclusively on online courses and educational content, allowing us to develop targeted 
                strategies that actually work.
              </p>
              <p>
                Today, we protect over 1,200 course creators worldwide, from solo entrepreneurs to 
                major educational institutions. Our team combines legal expertise with cutting-edge 
                technology to stay ahead of pirates and protect our clients' revenue.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aggressive Protection</h3>
                <p className="text-gray-700">
                  We don't just send takedown notices – we hunt pirates across every platform 
                  and use every legal tool available to protect your content.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creator-First Approach</h3>
                <p className="text-gray-700">
                  Every decision we make is guided by what's best for content creators. 
                  Your success is our success.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-700">
                  You'll always know exactly what we're doing to protect your content, 
                  with detailed reports and real-time updates.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Results-Driven</h3>
                <p className="text-gray-700">
                  We measure our success by your recovered revenue and protected content, 
                  not just the number of takedowns sent.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Main Site */}
          <div className="text-center mt-16">
            <a
              href="/#/"
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

export default About;