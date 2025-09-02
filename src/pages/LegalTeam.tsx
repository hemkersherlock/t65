import React from 'react';
import Layout from '../components/Layout';
import { Scale, GraduationCap, Award, ArrowLeft, Users, Globe, Shield } from 'lucide-react';

const LegalTeam = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      title: "Chief Legal Officer",
      credentials: "J.D. Harvard Law, IP Specialist",
      experience: "15+ years",
      specialization: "Intellectual Property Law",
      description: "Former partner at top-tier IP firm, specializing in digital content protection and DMCA enforcement."
    },
    {
      name: "Michael Chen",
      title: "Senior Legal Counsel",
      credentials: "J.D. Stanford Law, Tech Law Expert",
      experience: "12+ years",
      specialization: "Technology & Media Law",
      description: "Expert in international copyright law and cross-border content enforcement strategies."
    },
    {
      name: "Dr. Amanda Rodriguez",
      title: "Legal Research Director",
      credentials: "J.D./Ph.D. Yale Law & Computer Science",
      experience: "10+ years",
      specialization: "Digital Rights & AI Law",
      description: "Leading expert in emerging technologies and their impact on intellectual property protection."
    }
  ];

  return (
    <Layout
      title="Legal Team - NeverLeaked Expert Attorneys"
      description="Meet NeverLeaked's team of experienced intellectual property attorneys and legal experts who specialize in digital content protection and anti-piracy enforcement."
      canonical="https://neverleaked.tech/legal-team"
    >
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Legal Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Meet the experienced attorneys and legal experts who protect your intellectual property 
              with aggressive enforcement strategies and deep industry knowledge.
            </p>
          </div>

          {/* Legal Credentials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <Scale className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-600">Legal Actions Filed</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">96.2%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">45+</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
          </div>

          {/* Team Members */}
          <div className="space-y-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                        <span className="text-white text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-3">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{member.title}</p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm font-medium text-gray-500">Credentials:</span>
                          <p className="text-gray-700">{member.credentials}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Experience:</span>
                          <p className="text-gray-700">{member.experience}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-500">Specialization:</span>
                        <p className="text-gray-700">{member.specialization}</p>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Approach */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-12 border border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Legal Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aggressive Enforcement</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use every available legal tool to protect your content, from DMCA takedowns to 
                  cease and desist letters, and when necessary, federal court litigation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our legal network spans 45+ countries, allowing us to pursue pirates wherever 
                  they operate and enforce your rights internationally.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Integration</h3>
                <p className="text-gray-700 leading-relaxed">
                  We combine legal expertise with cutting-edge technology to identify, track, 
                  and eliminate piracy faster than traditional law firms.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Results-Focused</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our success is measured by your recovered revenue and protected content, 
                  not just the number of legal documents filed.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Certifications</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                <span className="text-gray-700 font-medium">American Bar Association</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                <span className="text-gray-700 font-medium">International Association of Privacy Professionals</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                <span className="text-gray-700 font-medium">Digital Media Law Association</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                <span className="text-gray-700 font-medium">Intellectual Property Law Association</span>
              </div>
            </div>
          </div>

          {/* Back to Main Site */}
          <div className="text-center">
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

export default LegalTeam;