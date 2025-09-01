import React from 'react';
import { Check, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '$99',
      period: '/month',
      description: 'Perfect for solo creators and new course makers',
      features: [
        'Monitor up to 3 courses',
        'Basic DMCA takedowns',
        'Email support',
        'Monthly piracy reports',
        '48hr response time'
      ],
      isPopular: false,
      buttonText: 'Start Protection',
      buttonClass: 'bg-blue-600 hover:bg-blue-700 text-white'
    },
    {
      name: 'Pro',
      icon: Crown,
      price: '$299',
      period: '/month',
      description: 'Ideal for established educators and coaches',
      features: [
        'Real-time monitoring for 1 active course',
        'Unlimited takedowns',
        'Advanced takedown network',
        'Telegram & forum monitoring',
        'Priority 24/7 support',
        'Weekly detailed reports',
        'File-sharing removals'
      ],
      isPopular: true,
      buttonText: 'Choose Pro',
      buttonClass: 'bg-red-600 hover:bg-red-700 text-white'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      period: '',
      description: 'For institutions and large course academies',
      features: [
        'Unlimited course monitoring',
        'Dedicated account manager',
        'Legal consultation included',
        'Custom piracy intelligence',
        'API access & integrations',
        'White-label reporting',
        'SLA guarantees'
      ],
      isPopular: false,
      buttonText: 'Contact Sales',
      buttonClass: 'bg-slate-700 hover:bg-slate-800 text-white'
    }
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg md:text-xl text-gray-600">Choose the protection level that's right for you
