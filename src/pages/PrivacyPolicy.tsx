import React from 'react';
import Layout from '../components/Layout';
import { Shield, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <Layout
      title="Privacy Policy - NeverLeaked"
      description="NeverLeaked's privacy policy outlines how we collect, use, and protect your personal information while providing anti-piracy services."
      canonical="https://neverleaked.tech/privacy-policy"
    >
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy is fundamental to our mission. Learn how we protect your data 
              while fighting content piracy.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 12, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900 mb-0">Our Commitment</h2>
              </div>
              <p className="text-gray-700 mb-0">
                NeverLeaked is committed to protecting your privacy and personal information. 
                This policy explains how we collect, use, and safeguard your data.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>Personal Information:</strong> Name, email address, phone number, and payment information when you sign up for our services.</p>
                  <p><strong>Course Information:</strong> Details about your courses, content URLs, and piracy reports you submit to us.</p>
                  <p><strong>Usage Data:</strong> Information about how you use our website and services, including IP addresses and browser information.</p>
                  <p><strong>Communication Records:</strong> Records of our communications with you, including support tickets and consultation notes.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Provide anti-piracy monitoring and takedown services</li>
                  <li>• Communicate with you about your account and services</li>
                  <li>• Process payments and manage billing</li>
                  <li>• Improve our services and develop new features</li>
                  <li>• Comply with legal obligations and enforce our terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in these limited circumstances:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• With service providers who help us operate our business (under strict confidentiality agreements)</li>
                  <li>• When required by law or to protect our legal rights</li>
                  <li>• In connection with a business transfer or acquisition</li>
                  <li>• With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700">
                  We implement industry-standard security measures to protect your information, including 
                  SSL encryption, secure data centers, and regular security audits. However, no method 
                  of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Access and review your personal information</li>
                  <li>• Request corrections to inaccurate data</li>
                  <li>• Request deletion of your personal information</li>
                  <li>• Opt out of marketing communications</li>
                  <li>• Data portability (receive a copy of your data)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700">
                  We use cookies and similar technologies to improve your experience on our website, 
                  analyze usage patterns, and provide personalized content. You can control cookie 
                  settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@neverleaked.com<br />
                    <strong>Phone:</strong> +1 (831) 263-6018<br />
                    <strong>Address:</strong> NeverLeaked Privacy Officer, San Francisco, CA
                  </p>
                </div>
              </section>
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

export default PrivacyPolicy;