import { FC } from 'react';
import { contactContent } from '@/constants';

const JsonLd: FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Dental Lab',
    description:
      'High-precision dental laboratory specializing in crowns, bridges, and All-on-X restorations.',
    url: 'https://dentallab-spa.vercel.app',
    logo: 'https://dentallab-spa.vercel.app/icons/logo.svg',
    image: 'https://dentallab-spa.vercel.app/images/og-image.png',
    telephone: contactContent.offices[0].phone,
    email: contactContent.offices[0].email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactContent.offices[0].address,
      addressLocality: contactContent.offices[0].location,
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://instagram.com/dentallab',
      'https://facebook.com/dentallab',
      'https://linkedin.com/company/dentallab',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd;
