// Structured Data (Schema.org) helpers for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Reachfy.io",
  "url": "https://reachfy.io",
  "logo": "https://reachfy.io/reatch-logo.png",
  "description": "Customer engagement platform for email and WhatsApp marketing with advanced automation and analytics",
  "sameAs": [
    // Add your social media profiles here
    // "https://twitter.com/reatch",
    // "https://www.linkedin.com/company/reatch",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "email": "support@reachfy.io",
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Reachfy.io",
  "url": "https://reachfy.io",
  "description": "Customer Engagement Platform with Email & WhatsApp Marketing",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://reachfy.io/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Reachfy.io",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "0",
    "highPrice": "299",
  },
  "operatingSystem": "Web Browser",
  "description": "Customer engagement platform for email and WhatsApp marketing with advanced automation and analytics",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150"
  }
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://reachfy.io${item.url}`
  }))
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const articleSchema = (article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author?: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "author": {
    "@type": "Organization",
    "name": article.author || "Reachfy.io"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Reachfy.io",
    "logo": {
      "@type": "ImageObject",
      "url": "https://reachfy.io/reatch-logo.png"
    }
  },
  "image": article.image || "https://reachfy.io/reatch-logo.png"
});

