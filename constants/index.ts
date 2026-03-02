import {
  NavLink,
  SocialLink,
  OfficeInfo,
  FeatureItem,
  StatsContent,
  ArchRestorationContent,
} from '@/types';

export const navLinks: NavLink[] = [
  {
    name: 'Products',
    href: '#products',
    hasDropdown: true,
    dropdownItems: [
      {
        title: 'Fixed',
        description:
          'High-Precision Crowns & Bridges Designed for Strength, Fit, and Natural Esthetics',
        href: '#products-fixed',
        showSeeDetails: true,
      },
      {
        title: 'Implants',
        description: 'Customized Implant Solutions for Long-Term Success and Seamless Integration',
        href: '#products-implants',
        showSeeDetails: true,
      },
      {
        title: 'Removables',
        description:
          'Comfortable, Durable Dentures Crafted for Functionality and Patient Satisfaction',
        href: '#products-removables',
        showSeeDetails: true,
      },
      {
        title: 'Retainers',
        description: 'Reliable Orthodontic Retention Appliances for Long-Lasting Treatment Results',
        href: '#products-retainers',
        showSeeDetails: true,
      },
    ],
  },
  { name: 'Latest Cases', href: '#cases' },
  { name: 'Materials', href: '#materials' },
  { name: 'Workflow', href: '#workflow' },
  { name: 'Educational', href: '#educational' },
  {
    name: 'Contact',
    href: '#contact',
    hasDropdown: true,
    dropdownItems: [
      {
        title: 'Visit our lab in New York',
        phone: '866-522-7735',
        email: 'info.ny@dentallab.com',
        href: '#contact-new-york',
      },
      {
        title: 'Visit our lab in Florida',
        phone: '866-362-4776',
        email: 'info.fl@dentallab.com',
        href: '#contact-florida',
      },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
];

export const offices: OfficeInfo[] = [
  {
    location: 'New York',
    phone: '866-522-7735',
    email: 'info.ny@dentallab.com',
  },
  {
    location: 'Florida',
    phone: '866-362-4776',
    email: 'info.fl@dentallab.com',
  },
];

export const heroContent = {
  title: 'FASTEST GROWING',
  subtitle: 'DENTALLAB.COM',
  description:
    'Experience the future of dental restorations with the fastest growing dental lab. We provide high-precision crowns, bridges, and implant solutions with rapid turnaround times.',
  videoSrc: '/videos/hero-video.mp4',
  posterSrc: '/images/hero-video-poster.webp',
  posterAlt: 'Precision dental crowns and bridges under professional lighting',
  cta: {
    text: 'First Case Credit',
    href: '#contact',
    ariaLabel: 'Claim your first case credit by contacting us',
  },
  benefits: ['Fast Turnaround Time', 'We Accept All Digital Scans', 'Nationwide Shipping'],
  partnerLogos: [
    { name: 'NADL', src: '/icons/partner/partner-logo-1.svg' },
    { name: 'Jackson Health System', src: '/icons/partner/partner-logo-2.svg' },
    { name: 'TCS', src: '/icons/partner/partner-logo-3.svg' },
    { name: 'Henry Schein', src: '/icons/partner/partner-logo-4.svg' },
    { name: '3shape', src: '/icons/partner/partner-logo-5.svg' },
    { name: 'University of Miami', src: '/icons/partner/partner-logo-6.svg' },
    { name: 'Prep Doctors', src: '/icons/partner/partner-logo-7.svg' },
  ],
};

export const featuresContent = {
  title: 'Our Features',
  description:
    'Cosmetic excellence, high-precision restorations, and All-on-X expertise, everything crafted with care and technical mastery.',
  items: [
    {
      title: 'Your First Case,\nBacked by $150 Credit',
      description:
        "Whether it's a single crown or a full-mouth restoration, your first case comes with a $150 lab credit!!!",
      variant: 'large',
      cta: {
        text: 'First Case Credit',
        href: '#contact',
        ariaLabel: 'Claim your $150 first case credit by contacting us',
      },
    },
    {
      title: 'Cosmetic Excellence',
      variant: 'default',
    },
    {
      image: '/images/feature/feature-2.webp',
      imageAlt: 'High-precision dental crown showcasing cosmetic excellence',
      variant: 'graphic',
    },
    {
      title: 'All-on-X Specialists',
      variant: 'default',
    },
    {
      image: '/images/feature/feature-1.webp',
      imageAlt: 'Professional dental technicians working on All-on-X restorations',
      variant: 'graphic',
    },
    {
      title: 'High-Precision\nRestorations',
      variant: 'default',
    },
    {
      image: '/images/feature/feature-3.webp',
      imageAlt: 'Detailed view of a high-precision dental bridge restoration',
      variant: 'graphic',
    },
  ] as FeatureItem[],
};

export const statsContent: StatsContent = {
  title: 'Why Top Dentists Trust Us?',
  description:
    'Not just restorations — precision-engineered results, seamless support, and partnerships that elevate your practice',
  items: [
    {
      value: 1700,
      suffix: '+',
      description:
        'Dentists trust us for exceptional quality, reliable service, and lasting partnerships',
    },
    {
      value: 900000,
      suffix: '+',
      description:
        'Restorations delivered with precision and care—trusted by leading dentists nationwide',
    },
    {
      value: 62,
      suffix: '%',
      description:
        'Cases Submitted Digitally — Trusted by Tech-Forward Practices Using iTero, TRIOS, Medit, and More',
    },
  ],
};

export const archRestorationContent: ArchRestorationContent = {
  title: 'The Future of Full\nArch Restorations',
  description:
    'Aesthetic, repairable, and biomechanically superior individual crowns placed over CAD/CAM titanium bar',
  videoSrc: '/videos/scroll-animated.mp4',
  cards: [
    {
      title: 'Individual PFZ Crowns',
      description:
        'Durable restorations layered to achieve natural translucency and shade matching',
      icon: '/icons/arch/crown.svg',
      align: 'text-right' as const,
      lineIcon: '/icons/arch/arch-line-tl.svg',
      lineWidth: '12%',
      lineHeight: '18%',
      position: { top: '5%', left: '0%' },
      linePosition: { top: '4%', left: '24%' },
    },
    {
      title: 'Titanium Screws',
      description: 'Secure, retrievable components for streamlined placement and serviceability',
      icon: '/icons/arch/screw.svg',
      align: 'text-left' as const,
      lineIcon: '/icons/arch/arch-line-tr.svg',
      lineWidth: '12%',
      lineHeight: '25%',
      position: { top: '5%', right: '0%' },
      linePosition: { top: '4%', right: '24%' },
    },
    {
      title: 'Retrievable & Serviceable Design',
      description:
        'Crown-level repairs without removing the full prosthesis, practical for long-term care',
      icon: '/icons/arch/design.svg',
      align: 'text-right' as const,
      lineIcon: '/icons/arch/arch-line-bl.svg',
      lineWidth: '10%',
      lineHeight: '18%',
      position: { bottom: '8%', left: '0%' },
      linePosition: { bottom: '8%', left: '24%' },
    },
    {
      title: 'Hybrid Bar',
      description: 'Digitally milled for strength, passive fit, and precise implant engagement.',
      icon: '/icons/arch/bar.svg',
      align: 'text-left' as const,
      lineIcon: '/icons/arch/arch-line-br.svg',
      lineWidth: '12%',
      lineHeight: '34%',
      position: { bottom: '8%', right: '0%' },
      linePosition: { bottom: '6%', right: '24%' },
    },
  ],
};
