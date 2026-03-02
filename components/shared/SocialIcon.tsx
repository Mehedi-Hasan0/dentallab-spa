import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandYoutube } from 'react-icons/tb';

interface SocialIconProps {
  name: string;
  size?: number | string;
  className?: string;
}

const SocialIcon: FC<SocialIconProps> = ({ name, size = 20, className }) => {
  const icons: Record<string, IconType> = {
    instagram: TbBrandInstagram,
    facebook: TbBrandFacebook,
    linkedin: TbBrandLinkedin,
    youtube: TbBrandYoutube,
  };

  const IconComponent = icons[name.toLowerCase()];

  if (!IconComponent) return null;

  return <IconComponent size={size} className={className} strokeWidth={2} />;
};

export default SocialIcon;
