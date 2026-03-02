export type NavCardItem = {
  title: string;
  description?: string;
  href: string;
  phone?: string;
  email?: string;
  showSeeDetails?: boolean;
};

export type NavLink = {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: NavCardItem[];
};

export type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

export type OfficeInfo = {
  location: string;
  phone: string;
  email: string;
};

export type PartnerLogo = {
  name: string;
  src: string;
};

export type FeatureItem = {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  variant?: 'default' | 'large' | 'graphic';
  cta?: {
    text: string;
    href: string;
    ariaLabel?: string;
  };
};

export type StatItem = {
  value: number;
  suffix?: string;
  description: string;
};

export type StatsContent = {
  title: string;
  description: string;
  items: StatItem[];
};
