import { NavLink, SocialLink, OfficeInfo } from '@/types';

export const navLinks: NavLink[] = [
  {
    name: 'Products',
    href: '/products',
    hasDropdown: true,
    dropdownItems: [
      {
        title: 'Fixed',
        description:
          'High-Precision Crowns & Bridges Designed for Strength, Fit, and Natural Esthetics',
        href: '/products/fixed',
        showSeeDetails: true,
      },
      {
        title: 'Implants',
        description: 'Customized Implant Solutions for Long-Term Success and Seamless Integration',
        href: '/products/implants',
        showSeeDetails: true,
      },
      {
        title: 'Removables',
        description:
          'Comfortable, Durable Dentures Crafted for Functionality and Patient Satisfaction',
        href: '/products/removables',
        showSeeDetails: true,
      },
      {
        title: 'Retainers',
        description: 'Reliable Orthodontic Retention Appliances for Long-Lasting Treatment Results',
        href: '/products/retainers',
        showSeeDetails: true,
      },
    ],
  },
  { name: 'Latest Cases', href: '/cases' },
  { name: 'Materials', href: '/materials' },
  { name: 'Workflow', href: '/workflow' },
  { name: 'Educational', href: '/educational' },
  {
    name: 'Contact',
    href: '/contact',
    hasDropdown: true,
    dropdownItems: [
      {
        title: 'Visit our lab in New York',
        phone: '866-522-7735',
        email: 'info.ny@dentallab.com',
        href: '/contact/new-york',
      },
      {
        title: 'Visit our lab in Florida',
        phone: '866-362-4776',
        email: 'info.fl@dentallab.com',
        href: '/contact/florida',
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
