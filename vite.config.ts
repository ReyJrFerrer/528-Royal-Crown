import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import prerender from 'vite-plugin-prerender-static';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      prerender({
        routes: [
          {
            path: '/',
            tags: {
              title: '528 Royal Care | Premier Food & Beverage Franchise Holding Company',
              description: '528 Royal Care is a premier holding company managing successful food and beverage franchises including I AM MILKTEA, 517 Bakery, and Xander\'s Lechon.',
              url: 'https://528royalcare.com/',
              schema: {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "528 Royal Care",
                "description": "Premier holding company managing food and beverage franchises including I AM MILKTEA, 517 Bakery, and Xander's Lechon. Est. 1970s in Bangued, Abra.",
                "url": "https://528royalcare.com",
                "logo": "https://528royalcare.com/assets/logo.svg",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Bangued, Abra, Philippines"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Philippines"
                },
                "knowsAbout": [
                  { "@type": "Brand", "name": "517 Bakery" },
                  { "@type": "Brand", "name": "I AM MILKTEA" },
                  { "@type": "Brand", "name": "Xander's Lechon" }
                ],
                "sameAs": [
                  "https://www.facebook.com/NC517",
                  "https://www.facebook.com/IAmMilkteaUrdaneta",
                  "https://www.facebook.com/profile.php?id=61580646268749"
                ]
              },
            },
          },
          {
            path: '/i-am-milktea',
            tags: {
              title: 'I AM MILKTEA | Premium Milktea & Fresh Breads in Urdaneta City',
              description: 'I AM MILKTEA offers premium milktea and fresh-baked breads in Urdaneta City, Pangasinan.',
              url: 'https://528royalcare.com/i-am-milktea',
              schema: {
                "@context": "https://schema.org",
                "@type": "Restaurant",
                "name": "I AM MILKTEA",
                "description": "Premium milktea and fresh-baked breads. Your daily dose of joy in Urdaneta City, Pangasinan.",
                "url": "https://528royalcare.com/i-am-milktea",
                "image": "https://528royalcare.com/assets/iammilktea-logo-CCCaROJs.png",
                "priceRange": "₱₱",
                "servesCuisine": ["Milktea", "Beverages", "Filipino"],
                "hasMenu": "https://528royalcare.com/i-am-milktea#menu",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Zone 2 Pedro T. Orata (Bactad)",
                  "addressLocality": "Urdaneta City",
                  "addressRegion": "Pangasinan",
                  "postalCode": "5200",
                  "addressCountry": "PH"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 15.9750,
                  "longitude": 120.5714
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "08:00",
                    "closes": "22:00"
                  }
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Milktea Menu",
                  "itemListElement": [
                    { "@type": "Offer", "name": "Small (12oz)", "description": "Perfect for a quick treat" },
                    { "@type": "Offer", "name": "Medium (16oz)", "description": "The classic choice" },
                    { "@type": "Offer", "name": "Large (22oz)", "description": "Maximum satisfaction" }
                  ]
                },
                "parentOrganization": {
                  "@type": "Corporation",
                  "name": "528 Royal Care",
                  "url": "https://528royalcare.com"
                },
                "sameAs": [
                  "https://www.facebook.com/IAmMilkteaUrdaneta"
                ]
              },
            },
          },
          {
            path: '/517-bakery',
            tags: {
              title: 'New Creation 517 Bakery | 26 Branches Across Abra, Pangasinan & Mindoro',
              description: 'New Creation 517 Bakery offers custom cakes, bibingka, and fresh-baked goods across 26 branches.',
              url: 'https://528royalcare.com/517-bakery',
              schema: {
                "@context": "https://schema.org",
                "@type": ["Bakery", "LocalBusiness"],
                "name": "New Creation 517 Bakery",
                "description": "Bakery offering custom cakes, bibingka, and fresh-baked goods. 26 branches across Abra, Pangasinan, and Oriental Mindoro.",
                "url": "https://528royalcare.com/517-bakery",
                "image": "https://528royalcare.com/assets/517Bakery-logo-BiIXHqGR.svg",
                "priceRange": "₱₱",
                "servesCuisine": ["Filipino", "Bakery", "Desserts"],
                "hasMenu": "https://528royalcare.com/517-bakery#cakes",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Zone 7",
                  "addressLocality": "Bangued",
                  "addressRegion": "Abra",
                  "addressCountry": "PH"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 17.5953,
                  "longitude": 120.6167
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Bakery Products",
                  "itemListElement": [
                    { "@type": "Offer", "name": "Custom Cakes" },
                    { "@type": "Offer", "name": "Money Cakes" },
                    { "@type": "Offer", "name": "Bibingka" },
                    { "@type": "Offer", "name": "Fresh Bread" }
                  ]
                },
                "parentOrganization": {
                  "@type": "Corporation",
                  "name": "528 Royal Care",
                  "url": "https://528royalcare.com"
                }
              },
            },
          },
          {
            path: '/xanders-roasted',
            tags: {
              title: 'Xander\'s Lechon & Meals On-The-Go | Fresh Roasted Lechon Manok in Calapan City',
              description: 'Xander\'s Lechon serves freshly roasted Lechon Manok, Pork Liempo, and rice meals in Calapan City.',
              url: 'https://528royalcare.com/xanders-roasted',
              schema: {
                "@context": "https://schema.org",
                "@type": "Restaurant",
                "name": "Xander's Lechon & Meals On-The-Go",
                "description": "Freshly roasted Lechon Manok, Pork Liempo, and rice meals. Masarap. Affordable. Quality. Open 24/7.",
                "url": "https://528royalcare.com/xanders-roasted",
                "image": "https://528royalcare.com/assets/xandersLechon-logo-rJCFzzuV.png",
                "priceRange": "₱₱",
                "servesCuisine": ["Filipino", "Roasted Meats", "Rice Meals"],
                "hasMenu": "https://528royalcare.com/xanders-roasted#menu",
                "address": {
                  "@type": "PostalAddress",
                  "name": "Nuciti Central Mall",
                  "streetAddress": "Food Hall (Near Supermarket)",
                  "addressLocality": "Calapan City",
                  "addressRegion": "Oriental Mindoro",
                  "addressCountry": "PH"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 13.4106,
                  "longitude": 121.1793
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Menu",
                  "itemListElement": [
                    { "@type": "Offer", "name": "Pork Liempo", "description": "Tender and juicy, perfectly roasted" },
                    { "@type": "Offer", "name": "Lechon Manok (Regular)", "description": "Classic favorite with signature blend" },
                    { "@type": "Offer", "name": "Lechon Manok (Jumbo)", "description": "Extra large for the whole family" },
                    { "@type": "Offer", "name": "Spicy Garlic Chicken Meal", "description": "Bold and savory with garlic flavor" }
                  ]
                },
                "parentOrganization": {
                  "@type": "Corporation",
                  "name": "528 Royal Care",
                  "url": "https://528royalcare.com"
                },
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=61580646268749"
                ]
              },
            },
          },
          {
            path: '/franchise-opportunities',
            tags: {
              title: 'Franchise Opportunities | Partner with 528 Royal Care',
              description: 'Partner with 528 Royal Care and build a profitable business with proven food & beverage franchise brands.',
              url: 'https://528royalcare.com/franchise-opportunities',
              schema: {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What franchises are available through 528 Royal Care?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "528 Royal Care currently offers franchise opportunities for 517 Bakery and Xander's Lechon. Both brands have proven track records with established operational systems."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What support does 528 Royal Care provide to franchisees?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We provide turnkey setup (location scouting to store design), marketing support (national campaigns and localized strategies), and operational excellence (proprietary systems, supply chain access, and continuous training)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the investment range for franchising?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Investment details vary by brand and location. Contact us for a personalized franchise consultation to discuss opportunities that fit your budget and goals."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to open a franchise?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Timeline varies by location and brand. Our team provides end-to-end support to help you launch as efficiently as possible. Contact us for a detailed timeline based on your chosen brand."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need prior business experience to franchise?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No prior experience is required. We provide comprehensive training and ongoing operational support to ensure your success regardless of your background."
                    }
                  }
                ]
              },
            },
          },
          {
            path: '/contact',
            tags: {
              title: 'Contact Us | 528 Royal Care',
              description: 'Get in touch with 528 Royal Care for franchise inquiries, partnerships, or general questions.',
              url: 'https://528royalcare.com/contact',
              schema: {
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "name": "Contact 528 Royal Care",
                "description": "Contact 528 Royal Care for franchise inquiries, partnerships, or general questions.",
                "url": "https://528royalcare.com/contact",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+63-993-975-35636",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Filipino", "Ilocano"]
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Zone 2 Pedro T. Orata, Bactad Proper",
                  "addressLocality": "Urdaneta City",
                  "addressRegion": "Pangasinan",
                  "postalCode": "5200",
                  "addressCountry": "PH"
                },
                "sameAs": [
                  "https://www.facebook.com/NC517",
                  "https://www.facebook.com/IAmMilkteaUrdaneta",
                  "https://www.facebook.com/profile.php?id=61580646268749"
                ]
              },
            },
          },
        ],
        render: () => '',
        headTags: '',
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
