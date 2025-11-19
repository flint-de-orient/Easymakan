import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "Buy Flats in Kolkata | 2BHK 3BHK Flats for Sale | EasyMakan Real Estate",
  description = "Buy flats in Kolkata - 2BHK, 3BHK flats for sale in Newtown, Salt Lake, Rajarhat. Ready to move luxury apartments. Best property deals in Kolkata with EasyMakan.",
  keywords = "buy flat in kolkata, flats for sale in kolkata, 2bhk flat for sale in kolkata, 3bhk flat for sale in kolkata, newtown kolkata flats, salt lake flats, rajarhat properties, kolkata apartments for sale, ready to move flats kolkata, luxury flats kolkata, affordable flats kolkata, kolkata real estate property, sell flat in kolkata, flat resale in kolkata",
  image = "https://easymakan.com/og-image.jpg",
  url = "https://easymakan.com",
  type = "website"
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="EasyMakan" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="EasyMakan Development Corporation" />
      <link rel="canonical" href={url} />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "EasyMakan Development Corporation",
          "alternateName": ["Easy Makan", "Easymakan"],
          "url": "https://easymakan.com",
          "logo": "https://easymakan.com/logo.png",
          "description": "Buy flats in Kolkata - 2BHK, 3BHK flats for sale in prime locations. Ready to move luxury apartments and affordable housing options.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Newtown, Rajarhat",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "postalCode": "700156",
            "addressCountry": "India"
          },
          "areaServed": ["Newtown", "Salt Lake", "Rajarhat", "Dum Dum", "Barasat", "Baguihati", "Howrah", "Behala", "Garia"],
          "priceRange": "₹20,00,000 - ₹2,00,00,000",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi", "Bengali"]
          },
          "sameAs": [
            "https://facebook.com/easymakan",
            "https://instagram.com/easymakan",
            "https://linkedin.com/company/easymakan"
          ]
        })}
      </script>
    </Helmet>
  );
}