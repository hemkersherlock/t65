import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "NeverLeaked - Stop Course Piracy in 48 Hours",
  description = "Professional anti-piracy service for online course creators. We hunt pirates across Telegram, file-sharing sites, and private groups so you can focus on creating.",
  canonical = "https://neverleaked.tech"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = canonical;
      document.head.appendChild(canonicalLink);
    }
    
    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    };
    
    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:url', canonical);
    updateOGTag('og:type', 'website');
    updateOGTag('og:image', 'https://neverleaked.tech/og-image.jpg');
    
    // Add structured data for organization
    let structuredData = document.querySelector('#structured-data');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'structured-data';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NeverLeaked",
      "url": "https://neverleaked.tech",
      "email": "protect@neverleaked.com",
      "telephone": "+1-831-263-6018",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "description": "Professional anti-piracy service for online course creators",
      "foundingDate": "2018",
      "industry": "Digital Content Protection",
      "sameAs": [
        "https://twitter.com/neverleaked",
        "https://linkedin.com/company/neverleaked",
        "https://facebook.com/neverleaked"
      ]
    });
  }, [title, description, canonical]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;