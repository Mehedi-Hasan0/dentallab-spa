export type NavCardItem = {
    title: string;
    description?: string;
    href: string;
    phone?: string;
    email?: string;
    showSeeDetails?: boolean;
}

export type NavLink = {
    name: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: NavCardItem[];
}

export type SocialLink = {
    name: string;
    href: string;
    icon: string;
}

export type OfficeInfo = {
    location: string;
    phone: string;
    email: string;
}