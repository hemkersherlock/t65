import React from 'react';
import Layout from '../components/Layout';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <Layout
      title="Terms of Service - NeverLeaked"
      description="NeverLeaked's terms of service outline the legal agreement between you and our anti-piracy protection services."
      canonical="https://neverleaked.tech/terms"
    >
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              These terms govern your use of NeverLeaked's anti-piracy protection services.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 12, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900 mb-0">Agreement Overview</h2>
              </div>
              <p className="text-gray-700 mb-0">
                By using NeverLeaked's services, you agree to these terms. Please read them carefully 
                as they contain important information about your rights and obligations.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Service Description</h2>
                <p className="text-gray-700">
                  NeverLeaked provides anti-piracy monitoring and enforcement services for digital course creators. 
                  Our services include content monitoring, DMCA takedown notices, legal enforcement actions, 
                  and ongoing protection strategies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Your Responsibilities</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• You must own or have legal rights to the content you ask us to protect</li>
                  <li>• Provide accurate information about your courses and content</li>
                  <li>• Respond promptly to our requests for information or documentation</li>
                  <li>• Pay all fees according to your chosen plan</li>
                  <li>• Notify us immediately of any changes to your content or contact information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Our Responsibilities</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Monitor for unauthorized distribution of your protected content</li>
                  <li>• File takedown notices and legal actions as appropriate</li>
                  <li>• Provide regular reports on our protection activities</li>
                  <li>• Maintain the confidentiality of your information</li>
                  <li>• Use commercially reasonable efforts to protect your content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Subscription fees are billed monthly in advance. All fees are non-refundable except 
                  as provided in our 30-day money-back guarantee for new customers.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Automatic renewal unless cancelled 30 days before renewal date</li>
                  <li>• Price changes require 30 days advance notice</li>
                  <li>• Late payments may result in service suspension</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitations and Disclaimers</h2>
                <p className="text-gray-700 mb-4">
                  While we use best efforts to protect your content, we cannot guarantee complete elimination 
                  of all piracy. Our liability is limited to the fees you've paid for our services.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• No guarantee of specific results or revenue recovery</li>
                  <li>• Some platforms may not respond to takedown requests</li>
                  <li>• International enforcement may have limitations</li>
                  <li>• We are not responsible for damages beyond our control</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
                <p className="text-gray-700">
                  Either party may terminate this agreement with 30 days written notice. 
                  We may terminate immediately for breach of these terms or non-payment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
                <p className="text-gray-700">
                  These terms are governed by California law. Any disputes will be resolved 
                  through binding arbitration in San Francisco, California.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
                <p className="text-gray-700">
                  For questions about these terms, contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@neverleaked.com<br />
                    <strong>Phone:</strong> +1 (831) 263-6018<br />
                    <strong>Address:</strong> NeverLeaked Legal Department, San Francisco, CA
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Back to Main Site */}
          <div className="text-center mt-16">
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

export default TermsOfService;