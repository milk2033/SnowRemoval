export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SnowRemoval",
    "name": "Green Bay Snow Pros",
    "image": "https://snowremoval-greenbay.com/logo.png",
    "description": "Professional snow removal, plowing, and ice dam removal services in Green Bay, Appleton, Oshkosh, and Door County, WI.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Winter Ave",
      "addressLocality": "Green Bay",
      "addressRegion": "WI",
      "postalCode": "54301",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.5192,
      "longitude": -88.0198
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Green Bay"
      },
      {
        "@type": "City",
        "name": "Appleton"
      },
      {
        "@type": "City",
        "name": "Oshkosh"
      },
      {
        "@type": "City",
        "name": "De Pere"
      },
      {
        "@type": "City",
        "name": "Door County"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Snow Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Snow Plowing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Snow Removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ice Dam Removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Snow Removal"
          }
        }
      ]
    },
    "url": "https://snowremoval-greenbay.com",
    "telephone": "+19205550123",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
